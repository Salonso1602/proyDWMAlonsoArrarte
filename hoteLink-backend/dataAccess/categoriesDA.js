const knex = require('../db/conn');

const tables = require('../db/tables');
const UnknownDbError = require('./errors/unknown-db');

const Category = require('../entities/category');

module.exports = {
  getAllCategories: async (type) => {
    let resultDB;
    try {
      resultDB = await knex(tables.CATEGORY).where('type', type);
    } catch (error) {
      throw new UnknownDbError(tables.CATEGORY, error);
    }

    return resultDB.map((categoryDB) => new Category({
      id: categoryDB.id,
      name: categoryDB.name,
      imageId: categoryDB.imageId,
    }));
  }
}