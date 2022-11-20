const Event = require('../entities/event');
const eventDA = require('../db/dataAccess/eventDA');
const questionsDA = require('../db/dataAccess/questionsDA');
const bookingsDA = require('../db/dataAccess/bookingsDA');

module.exports = {
    getAllEvents :  async () => {
        let result = [];

        const queryRes = await eventDA.getAllEvents();
        if(queryRes.length === 0){
            return undefined;
        }
        else{
            queryRes.forEach(evt => {
                result.push(new Event(evt.id, evt.name, evt.place, evt.date, evt.entranceFee));
            });
            return result;
        }
    },
    getEventById :  async (wantedId) => {
        const queryRes = await eventDA.getEventWithId(wantedId);
        if(queryRes.length === 0){
            return undefined;
        }
        else{
            const evt = queryRes[0];
            return new Event(evt.id, evt.name, evt.place, evt.date, evt.entranceFee);
        }
    },
    getSchedule :  async (wantedId) => {
        const queryRes = await eventDA.getEventWithId(wantedId);
        if(queryRes.length === 0){
            return undefined;
        }
        else{
            return queryRes[0].date;
        }
    },
    addQuestion :  async (wantedId, questionText) => {
        const queryRes = await questionsDA.insertQuestion(wantedId, questionText);
       //no se despues que va
    },
    addQuestion :  async (wantedId, userId) => {
        const queryRes = await bookingsDA.book(wantedId, userId);
       //no se despues que va
    },
}
