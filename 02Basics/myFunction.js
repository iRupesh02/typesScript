"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase()
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, paid) { }
var login = function (name, email, paid) { };
addTwo(5);
getUpper("Rupesh");
signUp("Rupesh", "rupesh@gmail.com", true);
login("Rupesh", "rupesh@gmail.com", true);
// function getValue(myVal : number) : string{
//     if(myVal > 5) {
//         return true
//     }
//     return "Hello Rupesh"
// }
var getValue = function (myval) {
    return "Hello";
};
var heros = ["thor", "spiderman", "Ironman"];
//  const heros = [1,2,3]
heros.map(function (hero) { return "The heros is ".concat(hero); });
function consoleError(errMsg) {
    console.log(errMsg);
    // return 2;
}
function handleError(errMsg) {
    console.log(errMsg);
    throw new Error(errMsg);
}
