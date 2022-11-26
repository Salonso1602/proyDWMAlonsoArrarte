const ErrorWithStatusCode = require("./base");

module.exports = class InconsistentDataError extends ErrorWithStatusCode {
  constructor(table, reason) {
    super(
      500,
      `Inconsistent data in or related with table "${table}".\nReason: ${reason}.`
    );
  }
}