const obj = {
    1: 'a',
    2: 'b',
    3: 'c',
}

const obj2 = {
    4: 'd',
    5: 'e',
    6: 'f',
}

const obj3 = Object.assign({}, obj, obj2)

// const obj3 = {...obj, ...obj2} 
console.log(obj3) 

const arr = [
    { id: 1, name: 'Hridoy' },
    { id: 2, name: 'Shakib' },
    { id: 3, name: 'Sabbir' },
    { id: 4, name: 'Rifat' },
    { id: 5, name: 'Samiul' }
]

console.log(Object.keys(arr))
console.log(Object.values(arr))

const course = {
    courseName: 'JavaScript',
    price: 100,
    duration: '3 months'

}

const { courseName, price, duration } = course
console.log(courseName, price, duration)

