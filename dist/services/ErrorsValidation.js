"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
// @ts-nocheck
class ErrorsValidation {
    constructor(request, response) {
        this.response = response;
        this.request = request;
    }
    errorChecker() {
        const result = (0, express_validator_1.validationResult)(this.request);
        if (!result.isEmpty()) {
            this.response.status(400).json({ errors: result.array() });
        }
    }
}
exports.default = ErrorsValidation;
