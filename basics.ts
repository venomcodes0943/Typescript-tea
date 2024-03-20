// Absolute Basics

// Let say how number is in typeScript
let myNum: number;
myNum = 13;

// Let say how string is in typeScript
let myStr: string;
myStr = "Haseeb";

// Let say how boolean is in typeScript
let myBool: boolean;
myBool = true;


// ===================================================================

// Functions  

// Basic function
function greet(name: string) {
    console.log(`Hello I'm ${name}`)
}
greet("Haseeb");

// Arrow Funciton with return Statement
let myFun = (age: number): string => {
    return `Let say You're Age ${age}`;
}

console.log(myFun(18));

// ===================================================================

// Objects And Aliases

// Objects
let obj = {
    name: "Haseeb",
    email: 'h@h.com',
    isActive: true,
}
function takeObj(obj: object) {
    console.log(obj)
}
takeObj(obj);


// Type Aliases

type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// ReadOnly , optional keyword => (?)

type User = {
    readonly _id: number
    name: string,
    email: string,
    isActive: boolean,
    creaditCard?: number
}

// Now i cant update the _id value because its only readable and creaditCard is optional

let myUser: User = {
    _id: 123,
    name: "Haseeb",
    email: "h@h.com",
    isActive: true
}

// ===================================================================

// Arrays


// Array of string

const myHeros: string[] = []
myHeros.push("SpiderMan");

// same as above
const myHeros2: Array<string> = []
myHeros.push("SpiderMan");

// to use multy type of array ...
const myArr: (string | number)[] = ["Haseeb", 18, "h@h.com"]



export { }
