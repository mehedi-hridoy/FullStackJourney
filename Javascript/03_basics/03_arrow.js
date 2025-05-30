const user = {
    username: 'Hridoy',
    email: 'hridoy15-5097@diu.edu.bd',


    welcomeMessage: function() {
        console.log(`Welcome ${this.username}`)
    }
}

user.welcomeMessage()
user.username = 'Mehedi Hasan Hridoy'
user.welcomeMessage()

console.log(this) // window object

function sayMyName() {
    let username = 'Foysal'
    console.log(this.username)
}

sayMyName() // this is undefined because it's only works with object not with function 

const pizza = () => {
    let username = 'Hridoy'
    console.log(username)
}

pizza()

//-----------------------
const addNum =  (a,b) => {
    return a + b
}

console.log(addNum(2,5))


const multiply = (a, b) => a * b
console.log(multiply(2, 5))
