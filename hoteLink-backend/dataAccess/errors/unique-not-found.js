const ErrorWithStatusCode = require("./base");

module.exports = class UniqueNotFoundError extends ErrorWithStatusCode {
  constructor(table, conditions) {
    const conditionsText = Object.entries(conditions)
      .map(([key, value]) => `${key} = ${value}`)
      .join(', ');

    super(
      404,
      `No register found in ${table} for unique condition(s) ${conditionsText}.`
    );
  }
}