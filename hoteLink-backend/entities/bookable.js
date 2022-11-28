module.exports = class Bookable {
  id;
  name;
  place;
  reservationLimit;
  remainingPlaces;

  constructor ({id, name, place, reservationLimit}){
    this.id = id;
    this.name = name;
    this.place = place;
    this.reservationLimit = reservationLimit;
  }
}