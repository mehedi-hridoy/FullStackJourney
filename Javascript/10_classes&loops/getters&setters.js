class User {
    constructor(email, password) {
        this.email = email;
        this._password = password; 
    }

    get password() {
        return this._password.toString().toUpperCase(); 
    }

    set password(value) {
        this._password = value;
    }
}

const mehedi = new User('mehedi@gmail.com', 1234);
console.log(mehedi.password); 
