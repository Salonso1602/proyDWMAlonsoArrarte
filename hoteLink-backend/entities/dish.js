module.exports = class Dish {
  id
  name
  description
  price
  serviceTime

  constructor({id, name, description, price, serviceTime}){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.serviceTime = serviceTime;
  }
}