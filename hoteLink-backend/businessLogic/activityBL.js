const Activity = require('../entities/activity');
const activityDA = require('../dataAccess/activityDA');
const questionsDA = require('../dataAccess/questionsDA');
const bookingsDA = require('../dataAccess/bookingsDA');
const categoriesDA = require('../dataAccess/categoriesDA');
const Question = require('../entities/question');

const categoryTypes = require('../enums/categoryTypes');

module.exports = {
    getAllActivities: async (queryParams) => {
        const resultDA = await activityDA.getAllActivities(queryParams);
        if (resultDA.length === 0) {
            return undefined;
        }
        else {
            return resultDA;
        }
    },
    getActivityById: async (wantedId) => {
        const resultDA = await activityDA.getActivityWithId(wantedId);
        if (!resultDA) {
            return undefined;
        }
        else{
            return resultDA;
        }
    },
    getSchedule: async (wantedId) => {
        //se asume mismos horarios en todos los hoteles
        const resultDA = await activityDA.getActivityWithId(wantedId);
        if (!resultDA) {
            return undefined;
        }
        else {
            return resultDA.timesOfActivity;
        }
    },
    addQuestion: async (userId, wantedId, questionText) => {
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

    bookActivity: async (wantedId, userId, qtyPeople, finalPrice) => {
        const resultDA = await bookingsDA.book(wantedId, userId, qtyPeople, finalPrice);
        if(resultDA === true || resultDA === false){
            return resultDA;
        } else {
            return undefined;
        }
    },
    

    getAllCategories: async () => {
        const resultDA = await categoriesDA.getAllCategories(categoryTypes.Activity);
        if(resultDA.length === 0){
            return undefined;
        }
        else{
            return resultDA;
        }
    }
}
