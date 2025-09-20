import jwt from "jsonwebtoken";

export class JwtService {
  public userId: string | number;
  constructor(id: number | string) {
    this.userId = id;
  }
  getToken() {
    const token = jwt.sign(
      { id: this.userId },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );

    return token;
  }
}
