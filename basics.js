"use strict";
// Absolute Basics
Object.defineProperty(exports, "__esModule", { value: true });
// Let say how number is in typeScript
var myNum;
myNum = 13;
// Let say how string is in typeScript
var myStr;
myStr = "Haseeb";
// Let say how boolean is in typeScript
var myBool;
myBool = true;
// ===================================================================
// Functions  
// Basic function
function greet(name) {
    console.log("Hello I'm ".concat(name));
}
greet("Haseeb");
// Arrow Funciton with return Statement
var myFun = function (age) {
    return "Let say You're Age ".concat(age);
};
console.log(myFun(18));
// ===================================================================
// Objects And Aliases
// Objects
var obj = {
    name: "Haseeb",
    email: 'h@h.com',
    isActive: true,
};
function takeObj(obj) {
    console.log(obj);
}
takeObj(obj);
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
// Now i cant update the _id value because its only readable and creaditCard is optional
var myUser = {
    _id: 123,
    name: "Haseeb",
    email: "h@h.com",
    isActive: true
};
// ===================================================================
// Arrays
// Array of string
var myHeros = [];
myHeros.push("SpiderMan");
// same as above
var myHeros2 = [];
myHeros.push("SpiderMan");
// to use multy type of array ...
var myArr = ["Haseeb", 18, "h@h.com"];
