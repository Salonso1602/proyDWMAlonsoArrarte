const Event = require('../entities/event');

module.exports = {
    getAllEvents : async (queryParams) => {
        //retorna un array con los Event, el hotelId esta en los params con ese nombre. Puede ser vacío
    },
    getEventWithId: async (evtId) => {
        //retorna un Event, el de la id dada por parametro, si no hay que devuelva undefined
    },

}