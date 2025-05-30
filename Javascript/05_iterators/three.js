// for of 
const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
    console.log(value);
}

// Maps 
const map = new Map()

map.set('Ban', "Bangladesh")
map.set('Pak', "Pakistan")
map.set('Ind', "India")
map.set('Nep', "Nepal")

console.log(map);

for(const [key, value] of map) {
    console.log(key, value);
}