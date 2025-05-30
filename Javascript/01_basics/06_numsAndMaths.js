const score = 400
console.log(score)

const balance = new Number(100)

console.log(balance)

const num = 10.23423423
console.log(num.toFixed(1))
console.log(num.toPrecision(2))

// -------------- Maths ----------------
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,3,6,8))


console.log(Math.random()) // always in between 1 to 10 
console.log(Math.floor(Math.random()*10) + 1)

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) ) + min)