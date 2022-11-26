const ErrorWithStatusCode = require("./base");

module.exports = class UnknownDbError extends ErrorWithStatusCode {
  constructor(table, internalError) {
    super(
      500,
      `Unknown error while accessing ${table}.\nInternal error: ${internalError}`
    );
  }
}