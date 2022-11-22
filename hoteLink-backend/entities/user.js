module.exports = class User {
    id
    email
    password
    //hay que cambiar la manera que se guarda la password por seguridad

    constructor({id, email, password}) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
}
