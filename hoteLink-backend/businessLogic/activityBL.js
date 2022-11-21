const Activity = require('../entities/activity');
const activityDA = require('../dataAccess/activityDA');
const questionsDA = require('../dataAccess/questionsDA');
const bookingsDA = require('../dataAccess/bookingsDA');

module.exports = {
    getAllActivities: async (queryParams) => {
        let result = [];

        const resultDA = await activityDA.getAllActivities(queryParams);
        if (resultDA.length === 0) {
            return undefined;
        }
        else {
            resultDA.forEach(act => {
                result.push(new Activity(act.id, act.name, act.place, act.monthlyPrice, act.timesOfActivity));
            });
            return result;
        }
    },
    getActivityById: async (wantedId) => {
        const resultDA = await activityDA.getActivityWithId(wantedId);
        if (resultDA) {
            return undefined;
        }
        else{
            const act = resultDA;
            return new Activity(act.id, act.name, act.place, act.monthlyPrice, act.timesOfActivity);
        }
    },
    getSchedule: async (wantedId) => {
        //se asume mismos horarios en todos los hoteles
        const resultDA = await activityDA.getActivityWithId(wantedId);
        if (resultDA) {
            return undefined;
        }
        else {
            return resultDA.timesOfActivity;
        }
    },
    addQuestion: async (wantedId, questionText) => {
        const resultDA = await questionsDA.insertQuestion(wantedId, questionText);
        if(resultDA === true || resultDA === false){
            return resultDA;
        } else {
            return undefined;
        }
    },
    bookActivity: async (wantedId, userId, qtyPeople, finalPrice) => {
        const resultDA = await bookingsDA.book(wantedId, userId, qtyPeople, finalPrice);
        if(resultDA === true || resultDA === false){
            return resultDA;
        } else {
            return undefined;
        }
    },
}
