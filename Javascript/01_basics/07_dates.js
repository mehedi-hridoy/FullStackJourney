let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log('-----------------------')

let timeStamp = Date.now()
let createDate = new Date('01-04-2001')
console.log(timeStamp)
console.log(createDate.getTime())
let birthYear = createDate.getTime()
let ageInMs = timeStamp - birthYear // calculate age in milisecond

let ageDate = new Date(ageInMs) 
let years = ageDate.getUTCFullYear() - 1970 
let months = ageDate.getUTCMonth()
let days = ageDate.getUTCDate() - 1

console.log(`${years} years, ${months} months, ${days}`)
