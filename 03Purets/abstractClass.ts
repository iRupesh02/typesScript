abstract class TakePhoto {
    constructor(
        public cameraMode : string,
        public filter : string
    ){}

    abstract getSepia() : number
    getReelTime () : number {
        return 8
    }
}

class Instagram extends TakePhoto {
    constructor (public cameraMode : string , public filter : string , public burst : number){
        super(cameraMode , filter)
    }

    getSepia() : number {
         console.log( "Sepia ");
         return 8
    }
}

const rk = new Instagram ("test" , "Test" ,4)

rk.getReelTime()