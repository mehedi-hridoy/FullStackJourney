const accountId = 1231231
let accountEmail = "hridoy@gamil.com"
var accountPassword =  "123245"
accountCity = "Jaipur"

// accountId = 2
console.log(accountId);
accountEmail = "mehedi-hridoy@diu.eud.bd"
accountPassword = "123asdf"
accountCity = "Dhaka"
/*
Prefer not to use var
bacause of issue in block scope and fucntional scope */

let accountState // this will give undifined 


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])