let score = "2233"
console.log(typeof score)


let valueInNumber = Number(score) // converted into number 

console.log(typeof valueInNumber)


let mark = "244bangla"
let markCoverted = Number(mark)
console.log(typeof markCoverted) // not Nan till now 
// if i want to do any operation that it goes NaN
console.log(markCoverted + 4)



let isFalse = true
console.log(isFalse)
let isFalse1 = ""
console.log(isFalse1)
let isFalse2 = 10
// every thing excepts 0 and "" is true . 
// ovbiously undefined and NaN will be it's own type

// "33" => 33
// "33abc" => NaN
// true = > 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)


// ************ Operations *********
let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)
console.log(2**2)



console.log("1" + 2) // will convert into comment

console.log(+true) // true
console.log(+" ") // empty string 