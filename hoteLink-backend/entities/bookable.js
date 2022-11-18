module.exports = class Bookable {
  id;
  name;
  place;

  constructor (id, name, place){
    this.id = id;
    this.name = name;
    this.place = place;
  }
}