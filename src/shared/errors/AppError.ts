export class AppError extends Error {
  public readonly statusCode: number

  constructor(message: string, statusCode: number = 400) {
    super(message) // inicializa a classe Error
    this.statusCode = statusCode
  }
}
