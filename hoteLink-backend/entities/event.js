const Bookable = require('./bookable')

module.exports = class Event extends Bookable {
  date
  entranceFee

  constructor ({id, name, place, date, entranceFee}){
    super({id, name, place});

    this.date = date;
    this.entranceFee = entranceFee;
  }
}