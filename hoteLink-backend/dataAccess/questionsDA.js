const knex = require('../db/conn');

const tables = require('../db/tables');
const Question = require('../entities/question');
const UnknownDbError = require('./errors/unknown-db');

module.exports = {
    insertQuestion : async (question) => {
        let result;
        try {
            result = await knex(tables.QUESTION).insert({
                userId: question.userId,
                bookableId: question.bookableId,
                question: question.question
            });
        }
        catch (error) {
            throw new UnknownDbError(tables.QUESTION, error);
        }
        return !!result;
    }
}