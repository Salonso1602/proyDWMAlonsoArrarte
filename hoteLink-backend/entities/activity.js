const Bookable = require('./bookable')

module.exports = class Activity extends Bookable {
  weeklyPrice
  timesOfActivity

  constructor ({id, name, place, weeklyPrice, timesOfActivity}){
    super({id, name, place});

    this.weeklyPrice = weeklyPrice;
    this.timesOfActivity = timesOfActivity;
  }
}