// based on how data is stored in memory and accessed further 
// data types are catagorized into two types 

// 1. Primitive 2. Non Primitive

// Primitive Data types 
// 7 types : String , Number , Boolean , null , undefined, Symbol, BigInt



// Reference (Non Primitive)

// Array, Objects , Functions


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 2342342342342342342342342n


// Reference ( Non rimitive)
// Array , Objects , Function

const fruits = ["banana","jackfruit","mango","papaya","grapes"]

let myObj = {
    name: "Mehedi Hasan Hridoy",
    age : 23,
}

const myFunction = function() {

}



// ---------------------------------------------

// Stack (Primitive Data types stored on this kind of memory)
// Means user gets copy of variables 

// Heap (Non- primitive)
// User gets reference of variable 