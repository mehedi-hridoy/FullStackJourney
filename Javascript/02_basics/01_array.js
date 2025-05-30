// array 
const myArr = [1,3,4,6,7,5]

// console.log(myArr[2])

// Array methods 
// myArr.push(6)
// console.log(myArr)
// myArr.push(7)
// myArr.push(8)
// console.log(myArr)
// myArr.pop()
// myArr.unshift(2)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// slice and splice
const myArr2 = [1,2,3,4,5,6,7,8,9,10]
console.log(myArr2.slice(2,5)) // [3,4,5]
console.log(myArr2.slice(2)) // [3,4,5,6,7,8,9,10]
// console.log(myArr2.slice(-3)) // [8,9,10]
// console.log(myArr2.slice(-3,-1)) // [8,9]
// console.log(myArr2.slice(-3,-2)) // [8]
console.log(myArr2)

// splice
console.log(myArr2.splice(2,3)) // [3,4,5]
// console.log(myArr2) // [1,2,6,7,8,9,10]
// console.log(myArr2.splice(2,0,3,4,5)) // []
// console.log(myArr2) // [1,2,3,4,5,6,7,8,9,10]
// console.log(myArr2.splice(2,3,6,7,8)) // [3,4,5]
// console.log(myArr2) // [1,2,6,7,8,6,7,8,9,10]
console.log(myArr2)

// splice does change the original array
// slice does not change the original array
// slice returns a new array
// splice returns the removed elements