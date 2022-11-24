const Activity = require('../entities/activity');

module.exports = {
    getAllActivities : async (queryParams) => {
        //retorna un array con las Activity, el hotelId esta en los params con ese nombre. PUede ser vacío
    },
    getActivityWithId: async (actId) => {
        //retorna un Activity, el de la id dada por parametro, si no hay que devuelva undefined
    },

}