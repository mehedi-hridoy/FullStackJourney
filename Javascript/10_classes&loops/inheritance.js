class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const mehedi = new Teacher('Hridoy', 'hridoy@gmail.com', '1234');
mehedi.addCourse();  

const BoiPoka = new User('Boi ami porbo na');


