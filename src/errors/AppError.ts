export class AppError {
  public readonly message: string;
  public readonly satusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.satusCode = statusCode;
  }
}
