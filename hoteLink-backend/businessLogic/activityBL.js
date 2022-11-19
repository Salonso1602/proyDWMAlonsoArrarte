const Activity = require('../entities/activity');
const activityDA = require('../db/dataAccess/activityDA');
const questionsDA = require('../db/dataAccess/questionsDA');
const bookingsDA = require('../db/dataAccess/bookingsDA');

module.exports = {
    getAllActivities :  async () => {
        let result = [];

        const queryRes = await activityDA.getAllActivities();
        if(queryRes.length === 0){
            return undefined;
        }
        else{
            queryRes.forEach(act => {
                result.push(new Activity(act.id, act.name, act.place, act.monthlyPrice, act.timesOfActivity));
            });
            return result;
        }
    },
    getActivityById :  async (wantedId) => {
        const queryRes = await activityDA.getActivityWithId(wantedId);
        if(queryRes.length === 0){
            return undefined;
        }
        else{
            const act = queryRes[0];
            return new Activity(act.id, act.name, act.place, act.monthlyPrice, act.timesOfActivity);
        }
    },
    getSchedule :  async (wantedId) => {
        const queryRes = await activityDA.getActivityWithId(wantedId);
        if(queryRes.length === 0){
            return undefined;
        }
        else{
            return queryRes[0].timesOfActivity;
        }
    },
    addQuestion :  async (wantedId, questionText) => {
        const queryRes = await questionsDA.insertQuestion(wantedId, questionText);
       //no es despues que va
    },
    addQuestion :  async (wantedId, userId) => {
        const queryRes = await bookingsDA.book(wantedId, userId);
       //no es despues que va
    },
}
