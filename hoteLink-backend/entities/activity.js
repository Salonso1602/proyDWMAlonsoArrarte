const Bookable = require('./bookable')

module.exports = class Activity extends Bookable {
  weeklyPrice
  timesOfActivity

  constructor ({id, name, place, reservationLimit, weeklyPrice, timesOfActivity}){
    super({id, name, place, reservationLimit});

    this.weeklyPrice = weeklyPrice;
    this.timesOfActivity = timesOfActivity;
  }
}