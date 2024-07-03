const score : Array<number> = []
const names : Array<string> = []

function identityOne(val : boolean | number) : boolean | number {
    return val
}

function identityTwo(val : any) : any {
    return val
}

function identityThree<Type> (val : Type) : Type {
    return val
}

identityThree(3)
identityThree("rupesh")
identityThree(true)

function identityFour<T> (val : T) : T{
    return val
}

interface Bootles {
    brand : string,
    type : string
}

// identityFour<Bootles>({})

function getSearchProducts<T>(products : T[]) : T { // this is array type
    // return 3 this is wrong
    const myIndex = 3 
    return products[myIndex]
    return products[3]
}


const getMoreSearchProducts = <T,> (products : T[]) : T => {
    const myIndex = 4
    return products[myIndex]
}

interface database {
    connection : string,
    username : string,
    password : string
}
function anotherFunctions <T , U extends database> (valOne : T ,valTwo : U) : object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunctions(3,"4")
// anotherFunctions(3,4.6)
// anotherFunctions(3,{})

interface Quiz{
    name : string,
    type : string
}

interface Course {
    name : string,
    auther : string,
    subjects : string
}

class Sellable <T> {
    public cart : T[] = []
    addToCart(product : T) {
        this.cart.push(product)
    }
}