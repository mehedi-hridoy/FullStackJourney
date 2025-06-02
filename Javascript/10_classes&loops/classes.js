// ES6
class User {
    constructor(username,email,passsword) {
        this.username = username
        this.email = email
        this.passsword = passsword
    }

    encryptPassword() {
        return `${this.passsword}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const mehedi = new User('Mehedi','hridoy@gmail.com','1234')

console.log(mehedi.encryptPassword())
console.log(mehedi.changeUsername())
//behind the scene

function User(username,email,passsword) {
    this.username = username
    this.email = email
    this.passsword = passsword
}

User.prototype.encryptPassword = function() {
    return `${this.passsword}abc`
}     