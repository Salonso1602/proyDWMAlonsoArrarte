const claimsAndSuggestionsDA = require('../dataAccess/claimsAndSuggestionsDA');

const ClaimOrSuggestion = require('../entities/claimOrSuggestion');

module.exports = {
  insertNew: async (requestText) => {
    // TO-DO
    const model = new ClaimOrSuggestion({userId: 1, requestText});
    return claimsAndSuggestionsDA.insert(model);
  }
}