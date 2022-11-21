const Bookable = require('./bookable')

module.exports = class Activity extends Bookable {
  monthlyPrice
  timesOfActivity

  constructor ({id, name, place, monthlyPrice, timesOfActivity}){
    super({id, name, place});

    this.monthlyPrice = monthlyPrice;
    this.timesOfActivity = timesOfActivity;
  }
}