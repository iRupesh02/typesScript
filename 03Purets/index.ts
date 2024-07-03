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
    // private _courceCount = 1
    protected _courceCount = 1  // used within the class and inherit by the other class
    private readonly city : string
    constructor (public email : string , public name : string //private userId : string)
)
    {
        
    }

    get CourceCount() : number {  // get the value from the private or add some additional features or maupualte throw method and access the value through method
        return this._courceCount
    }

    set CourceCount(courseNum) {  // does not return anything or type
        if(courseNum < 1){
            throw new Error("course count should me more than 1");
        }
        this._courceCount = courseNum
    }
}

class subUser extends User {
     isFamily : boolean = true
     changeCourseCount(){

        this._courceCount = 4
     }
}

const rupesh = new User("r@r.com" , "rupesh")
// rupesh.city 