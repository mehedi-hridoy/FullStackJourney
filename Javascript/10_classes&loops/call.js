function SetUsername(username) {
    // complex DB calls
    this.username = username
    console.log('called')
}

function createUser(username, email, password) {
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const mehedi = new createUser('mehedi', 'mehedi@gamil.com','1234')
console.log(mehedi)
