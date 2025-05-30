
const key = 'a';

switch(key) {
    case 'a':
        console.log('Key A pressed');
        break;
    case 'b':
        console.log('Key B pressed');
        break;
}

// falsy values

// false , 0 , -0 , BigInt(0), " ", '', null, undefined, NaN

// truthy values
// true, 1, -1, BigInt(1), " ", ' ', [], {}, function(){}, Symbol(), Infinity, -Infinity

// Nullish Coalescing Operaator (??) : null undefined

let val1 
val1 = null ?? 10
console.log(val1); 