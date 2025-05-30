// singleton
// object literals

const mySymbol = Symbol('symbol of Love');

const JsUser = {
    name: 'Hridoy',
    age: 24,
    location: 'Bangladesh',
    email: 'hriody@google.com',
    isLoggedIn: true,
    lastLogin: new Date(),
    loginDays: ['Monday', 'Tuesday', 'Wednesday'],
    login: function () {
        console.log('User logged in');
    },

    [mySymbol] : 'symbol of distraction'
}


console.log(JsUser.name)
console.log(JsUser[mySymbol])
console.log(JsUser['age'])
console.log(`Hi ${JsUser.name}, location: ${JsUser.location}`)