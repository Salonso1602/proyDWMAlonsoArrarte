const Bookable = require('./bookable')

module.exports = class Event extends Bookable {
  date
  entranceFee

  constructor ({id, name, place, reservationLimit, date, entranceFee}){
    super({id, name, place, reservationLimit});

    this.date = date;
    this.entranceFee = entranceFee;
  }
}