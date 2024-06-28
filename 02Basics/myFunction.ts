function addTwo (num : number) : number{
    // num.toUpperCase()
    return num +2
    // return "hello"
}

function getUpper(val : string){
    return val.toUpperCase();
}

function signUp(name : string, email : string, paid : boolean){}
let login = (name : string, email:string , paid:boolean) =>{}

addTwo(5)
getUpper("Rupesh")
signUp("Rupesh","rupesh@gmail.com",true)
login("Rupesh","rupesh@gmail.com",true)

// function getValue(myVal : number) : string{
//     if(myVal > 5) {
//         return true
//     }
//     return "Hello Rupesh"
// }

let getValue = (myval : number) : string => {
    return "Hello"
}

const heros = ["thor" , "spiderman" , "Ironman"]
//  const heros = [1,2,3]
heros.map((hero):string => {return `The heros is ${hero}`})

function consoleError(errMsg : string) : void {
    console.log(errMsg);
    // return 2;
    }

    function handleError(errMsg : string) : never {
        
        console.log(errMsg);
        throw new Error(errMsg)
    }
    
export {}