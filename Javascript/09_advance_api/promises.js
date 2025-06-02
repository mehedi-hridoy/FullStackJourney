const promiseOne = new Promise(function(resolve,reject){
    // Do an async task 
    // DB calls, cryptography  , network 
    setTimeout(function() {
        console.log('Async task is Complete');
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log('Promise Consumed');
}).then(function() {
    console.log('Async 2 Resolved')
})


const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({username: 'Mehedi', email: 'hridoy@gmail.com'})

    },1000)
})

promiseOne.then(function(user) {
  console.log(user)

})

const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "Mehedi Hasan Hridoy", password: '1234'})
        } else {
            reject('ERROR: 404 Page Not Found')
        }
    })
})

const username =  promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)

}).catch(function(error) {
    console.log('Error')
}).finally(() => console.log('The promise is either resolved or rejected '))


const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username:'javascript',password: '1234'})
        } else {
            reject('Error: Js Went Wrong')
        }
    }, 1000  )
})