const Event = require('../entities/event');
const eventDA = require('../dataAccess/eventDA');
const questionsDA = require('../dataAccess/questionsDA');
const bookingsDA = require('../dataAccess/bookingsDA');

module.exports = {
    getAllEvents :  async (queryParams) => {
        let result = [];

        const resultDA = await eventDA.getAllEvents(queryParams);
        if(resultDA.length === 0){
            return undefined;
        }
        else{
            resultDA.forEach(evt => {
                result.push(new Event(evt.id, evt.name, evt.place, evt.date, evt.entranceFee));
            });
            return result;
        }
    },
    getEventById :  async (wantedId) => {
        const resultDA = await eventDA.getEventWithId(wantedId);
        if(resultDA.length === 0){
            return undefined;
        }
        else{
            const evt = resultDA[0];
            return new Event(evt.id, evt.name, evt.place, evt.date, evt.entranceFee);
        }
    },
    getSchedule :  async (wantedId) => {
        const resultDA = await eventDA.getEventWithId(wantedId);
        if(resultDA.length === 0){
            return undefined;
        }
        else{
            return resultDA[0].date;
        }
    },
    addQuestion :  async (wantedId, questionText) => {
        const resultDA = await questionsDA.insertQuestion(wantedId, questionText);
        if(resultDA === true || resultDA === false){
            return resultDA;
        } else {
            return undefined;
        }
    },
    bookEvent :  async (wantedId, userId, qtyPeople, finalPrice) => {
        const resultDA = await bookingsDA.book(wantedId, userId, qtyPeople, finalPrice);
        if(resultDA === true || resultDA === false){
            return resultDA;
        } else {
            return undefined;
        }
    },
}
