module.exports = class ClaimOrSuggestion {
  constructor({userId, requestText}) {
    this.userId = userId;
    this.requestText = requestText;
  }
}