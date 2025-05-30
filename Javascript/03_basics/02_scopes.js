// var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30

}

// console.log(a)
// console.log(b)
console.log(c)


// Here is the reason why we should not use var

console.log(5)
function addOne(num) {
    return num + 1
}

addTwo(5)

const addTwo = function(num) {
    return num + 2
}
// hoisting
// console.log(addTwo(5)) // ReferenceError: Cannot access 'addTwo' before initialization