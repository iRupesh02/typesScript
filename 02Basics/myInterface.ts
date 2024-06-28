interface User {
    readonly dbId : number
    email: string
    userId : number,
    googleId?:string // it is optional
    // startTrail : () => string
    starttrail(): string
    getCoupon(couponname : string , value : number) : number
}

interface User {  // re-opened the interface but not in type aliases 
    githubToken : string
}

interface Admin extends User { // inheritance using extends
    role : "admin" | "ta" | "lean"
}

const rupesh : Admin = {
    dbId : 22,
    email : "r@rgmail.com",
    userId : 2211,
    starttrail : () => {
        return "rupesh"
    },
    getCoupon : (name : "rupesh " , code : 7) => {
        return 4
    },
    githubToken : "github",
    role : "admin"
}