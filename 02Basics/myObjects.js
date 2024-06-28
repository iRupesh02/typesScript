"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Rupesh",
    email: "rupesh@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Rupesh", isPaid: true, email: "r@R.com" };
// createUser({name : "Rupesh", isPaid : true , email:"r@R.com"}) give msg javascript behaves diiferent way
createUser(newUser); // in this case javascript behaves in different ways
function createCource() {
    return { name: "rupesh", price: 800 };
}
function createUsers(user) {
    return { name: "", email: " ", isActive: true };
}
createUsers({ name: "", email: " ", isActive: true });
var myUser = {
    _id: "1234",
    name: "r",
    email: "r@r.com",
    isActive: true
};
myUser.name = "Rupesh";
