const marvel_heros = ["thor", "ironman", "hulk", "spiderman", "black widow"];
const dc_heros = ["superman", "batman", "wonder"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros) 

// const new_heros = marvel_heros.concat(dc_heros)
// console.log(new_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)
