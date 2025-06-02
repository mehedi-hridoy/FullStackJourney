const descripter =  Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI)
console.log(descripter)

const mehedi = {
    name: 'Mehedi Hasan Hridoy',
    price : 0,
    isAvailable: true 
}

console.log(mehedi)

console.log(Object.getOwnPropertyDescriptor(mehedi,"name"))

Object.defineProperties(mehedi,'name', {
    writable: false,
    enumerable: false

})

console.log(Object.getOwnPropertyDescriptor(mehedi,"name"))