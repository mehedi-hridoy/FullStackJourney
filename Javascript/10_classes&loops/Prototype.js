let myName = 'Mehedi      '

// console.log(myName.trueLength)
console.log(myName.length)

let myHeros = ['Thor','Spiderman']

let heroPower = {
    thor : 'Hammer',
    spiderman: 'Sling',

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.mehedi = function() {
    console.log(`Mehedi is present in all objects`)
}

myHeros.mehedi()
