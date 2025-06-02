const User = {
    username: "mehedi hasan hridoy",
    loginCount : 8,
    signedIn: true,

    getUserDetails: function() {
        console.log('Got User details from database')
    }
}

console.log(User.username)
console.log(User.getUserDetails())

// const promiseOne = new Promise()
// const date = new Date()
function myUser(username,loginCount,isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = myUser('Hridoy',12,true)
const userTwo = myUser('Bangladesh',2,false)

console.log(userOne)
