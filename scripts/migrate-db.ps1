<#
PowerShell helper to migrate a full PostgreSQL database (schema + data)
from a source DB to a target DB using pg_dump / pg_restore.

Usage (PowerShell):
  # Interactive (you will be prompted)
  ./scripts/migrate-db.ps1

  # Non-interactive (provide env vars first)
  $env:OLD_DATABASE_URL = 'postgresql://user:pass@host:5432/dbname'
  $env:NEW_DATABASE_URL = 'postgresql://user:pass@host:5432/dbname'
  ./scripts/migrate-db.ps1 -AutoConfirm

Notes:
- Requires pg_dump, pg_restore, and psql on PATH (Postgres client tools).
- The script will create two files in the current folder:
  - ecommerce_dump.dump       (dumped from source)
  - ecommerce_target_backup.dump  (backup of target before restore)
- The restore uses --clean --no-owner --no-acl to avoid owner/acl mismatches.
#>

param(
    [switch]$AutoConfirm,
    [string]$DumpFile = "ecommerce_dump.dump",
    [string]$TargetBackupFile = "ecommerce_target_backup.dump"
)

function ExitWithError($msg, $code = 1) {
    Write-Error $msg
    exit $code
}

Write-Host "Starting DB migration helper script"

# Check tools
foreach ($tool in @('pg_dump','pg_restore','psql')) {
    if (-not (Get-Command $tool -ErrorAction SilentlyContinue)) {
        ExitWithError "Required tool '$tool' was not found in PATH. Please install PostgreSQL client utilities."
    }
}

# Get connection URIs
if ($env:OLD_DATABASE_URL) {
    $old = $env:OLD_DATABASE_URL
} else {
    $old = Read-Host "Enter SOURCE database URI (pg) - example: postgresql://user:pass@host:port/dbname"
}

if ($env:NEW_DATABASE_URL) {
    $new = $env:NEW_DATABASE_URL
} else {
    $new = Read-Host "Enter TARGET database URI (pg) - example: postgresql://user:pass@host:port/dbname"
}

if (-not $old) { ExitWithError "No source DB URI provided." }
if (-not $new) { ExitWithError "No target DB URI provided." }

Write-Host "Source: $old"
Write-Host "Target: $new"

if (-not $AutoConfirm) {
    $confirm = Read-Host "This will COPY data from SOURCE -> TARGET. TARGET will be backed up then overwritten. Continue? (yes/no)"
    if ($confirm -ne 'yes') { Write-Host 'Aborting.'; exit 0 }
}

try {
    Write-Host "Dumping source database to '$DumpFile'..."
    $env:PGPASSWORD = $null
    # pg_dump accepts connection uri via --dbname
    & pg_dump --format=custom --no-owner --no-acl --dbname="$old" -f "$DumpFile"
    if ($LASTEXITCODE -ne 0) { ExitWithError "pg_dump failed with exit code $LASTEXITCODE" }

    Write-Host "Backing up target database to '$TargetBackupFile'..."
    & pg_dump --format=custom --no-owner --no-acl --dbname="$new" -f "$TargetBackupFile"
    if ($LASTEXITCODE -ne 0) { ExitWithError "pg_dump (target backup) failed with exit code $LASTEXITCODE" }

    if (-not $AutoConfirm) {
        $confirm2 = Read-Host "Ready to RESTORE dump to TARGET (this will drop/replace objects). Proceed? (yes/no)"
        if ($confirm2 -ne 'yes') { Write-Host 'Aborting restore.'; exit 0 }
    }

    Write-Host "Restoring dump into target database..."
    & pg_restore --verbose --clean --no-owner --no-acl --dbname="$new" "$DumpFile"
    if ($LASTEXITCODE -ne 0) { ExitWithError "pg_restore failed with exit code $LASTEXITCODE" }

    Write-Host "Restore finished. Running basic verification queries..."
    # simple checks: list tables count in public schema
    & psql --dbname="$new" -c "SELECT table_schema, table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name LIMIT 20;"
    & psql --dbname="$new" -c "SELECT count(*) FROM information_schema.tables WHERE table_schema='public';"

    Write-Host "Migration complete. Files created: $DumpFile, $TargetBackupFile"
    Write-Host "If anything looks wrong, you can restore the target from the backup file using pg_restore --dbname=NEW_URI ecommerce_target_backup.dump"
    exit 0
}
catch {
    Write-Error "An unexpected error occurred: $_"
    exit 1
}
