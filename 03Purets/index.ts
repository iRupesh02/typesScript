// class User {
//    public  email : string
//     name : string
//     private readonly city : string
//     constructor (email : string , name : string){
//         this.email = email
//         this.name = name
//     }
// }
class User {
 
    private readonly city : string
    constructor (public email : string , public name : string //private userId : string)
)
    {
        
    }
}

const rupesh = new User("r@r.com" , "rupesh")
// rupesh.city 