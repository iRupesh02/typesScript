// let user : (string | number)[]= ["ru", 3 ,9]
let tuser : [string, number ,boolean]
tuser = ["rk", 4 , true] // in tuples to follow the sequence of types 
// tuser = [true ,"",6]  // wrong 

let rgb : [number,number ,number] = [1,2,3]
 
type User = [number ,string]

const newUser : User = [112 , "rk"]

newUser[1] = "rupesh" // this is allowed
//newUser[1] = 2 // this is not allowed

newUser.push("hc") // only allowed string and number not boolean

export {}