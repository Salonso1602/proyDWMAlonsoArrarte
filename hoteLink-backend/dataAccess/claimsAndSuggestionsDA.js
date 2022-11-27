const knex = require('../db/conn');

const tables = require('../db/tables');
const UnknownDbError = require('./errors/unknown-db');

module.exports = {
  insert: async (claimOrSuggestion) =>{
    let result;
    try {
      result = await knex(tables.CLAIMS_AND_SUGGESTIONS).insert({
        userId: claimOrSuggestion.userId,
        requestText: claimOrSuggestion.requestText
      });
    }
    catch (error) {
      throw new UnknownDbError(error);
    }

    return result;
  }
}