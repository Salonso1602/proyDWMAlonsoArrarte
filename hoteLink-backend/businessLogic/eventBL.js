const Event = require('../entities/event');
const eventDA = require('../dataAccess/eventDA');
const questionsDA = require('../dataAccess/questionsDA');
const bookingsDA = require('../dataAccess/bookingsDA');
const Question = require('../entities/question')

module.exports = {
    getAllEvents :  async (queryParams) => {
        const resultDA = await eventDA.getAllEvents(queryParams);
        if(resultDA.length === 0){
            return undefined;
        }
        else{
            return resultDA;
        }
    },
    getEventById :  async (wantedId) => {
        const resultDA = await eventDA.getEventById(wantedId);
        if(!resultDA){
            return undefined;
        }
        else{
            resultDA.remainingPlaces = await bookingsDA.getRemainingPlaces(wantedId);
            return resultDA;
        }
    },
    getSchedule :  async (wantedId) => {
        const resultDA = await eventDA.getEventWithId(wantedId);
        if(!resultDA){
            return undefined;
        }
        else{
            return resultDA.date;
        }
    },
    addQuestion :  async (userId, wantedId, questionText) => {

        const question = new Question({
            userId: userId,
            bookableId: wantedId,
            question: questionText
        })

        const resultDA = await questionsDA.insertQuestion(question);
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
