module.exports = class Question {
  id
  userId
  bookableId
  question
  //hay que cambiar la manera que se guarda la password por seguridad

  constructor({id, userId, bookableId, question}) {
      this.id = id;
      this.userId= userId
      this.bookableId = bookableId;
      this.question = question;
  }
}
