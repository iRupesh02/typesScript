// narrowing typesof

function detectionType(val : number | string){
    if(typeof val === 'string'){
        return val.toLowerCase()
    }
    return val + 3 
}

function provideId (id : string | null){
    if(!id){
        console.log("please provide ID");
        return
        
    }
    id.toLowerCase()
}

// instance of
function logvalue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
        
    }
    else {
        console.log(x.toUpperCase());

        
    }
}

// predicate 

type Fish = {swim : () => void }
type Bird = {fly : () => void }

function isFish(pet : Fish | Bird): pet is Fish{
    return (pet as Fish ).swim !== undefined
}

function getFood(pet : Fish | Bird){
    if(isFish(pet)){
        pet 
        return "fish food"
    }
    else {
        pet 
        return "Bird food"
    }
}

//descriminated

interface Circle {
    kind : "circle",
    radius : number
}

interface Rectangle {
    kind : "rectangle ",
    length : number,
    width : number
}

interface Square{
    kind : "square",
    side : number
}

type Shape = Circle | Square

function getTrueShape(shape : Shape){
    if(shape.kind === 'circle'){
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}