const user = {
  name: "Rupesh",
  email: "rupesh@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
const newUser = { name: "Rupesh", isPaid: true, email: "r@R.com" };
// createUser({name : "Rupesh", isPaid : true , email:"r@R.com"}) give msg javascript behaves diiferent way
createUser(newUser); // in this case javascript behaves in different ways

function createCource(): { name: string; price: number } {
  return { name: "rupesh", price: 800 };
} 


// Aliases

type User = {
    name : string;
    email : string;
    isActive : boolean
}

function createUsers (user : User) : User {
    return {name : "" , email: " ", isActive:true}
}

createUsers({name : "" , email: " ", isActive:true})

type Users = {
  readonly _id : string
  name : string
  email : string
  isActive : boolean
  creditCard?: number
}

type cardNumber = {
  cardNum : string
}

type cardDate = {
  cardDate : string
}

type cardDetails = cardNumber & cardDate & {
  cvv : string
}
let myUser : Users = {
  _id : "1234",
  name : "r",
  email : "r@r.com",
  isActive : true

}

myUser.name = "Rupesh"
// myUser._id = "12345"

export {};
