let score : number | string | boolean = 33
score = "33"
score = false

type User = {
    name : string
    _id : number
}  

type Admin = {
    username : string
    _id : number
}


let Rupesh : User | Admin = {
    name : "R",
    _id : 38
}

Rupesh = {
    username : "irupesh02",
    _id :38
}

// function 

// function getUser (id : number | string ){
//     console.log(`Db id is ${id}`);
    
// }

getUser(3)
getUser("3")

function getUser (id : number | string ){
   
   if(typeof id === "string")
    id.toLowerCase()
   
   else
   id + 3 
    
}

//array

const data1 : number[] = [1,2,3]
const data2 : string[] = ["1","2","3"]
const data3 : string[] | number[] = [1 ,2, 3] // only one of them  are allowed
const data : (string | number)[] = [1 ,2, 3, "4"] // boyh allowed

//literal type 
let  seatAllotement : "lower" | "upper" | "middle"

// seatAllotement = "crew" is not allowed
seatAllotement = "upper" // this is allowed