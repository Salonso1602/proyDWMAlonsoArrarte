module.exports = class User {
    email
    password
    //hay que cambiar la manera que se guarda la password por seguridad

    constructor({email, password}) {
        this.email = email;
        this.password = password;
    }
}
