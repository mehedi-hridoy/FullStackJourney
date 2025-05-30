function sayMyName(name) {
  console.log(`My name is ${name}`);
}
sayMyName('Hridoy');


function add(a, b) {
    console.log(a + b)
}

add(2, 3)

function loginUserMessage(username) {
    if(!username) {
        console.log('Username is Undefined')
        return 
    }

    return `User logged in as ${username}`
}

console.log(loginUserMessage(''))


function calculateCartPrice(...num1) {  // ... rest operator
    return num1
}

console.log(calculateCartPrice(200,10,30,40))



const user = {
    username: 'Mehedi Hasan Hridoy',
    email_addr: 'hridoy@gmail.com'
}

function handleObject(anyobject) {
    console.log(`Username is : ${anyobject.username} and email is : ${anyobject.email}`)
}
handleObject(user)