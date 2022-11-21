module.exports = class News {
  subject
  type
  caption
  imageId

  constructor({subject, type, caption, imageId}) {
    this.subject = subject;
    this.type = type;
    this.caption = caption;
    this.imageId = imageId;
  }
};