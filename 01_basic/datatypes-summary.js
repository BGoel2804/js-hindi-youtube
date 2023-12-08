// primitive : call by value

// 7 types : String, Number, Boolean(yes or no), null(empty),undefined(value defined not inputed it yet), Symbol(to make value unique), BigInt(scientific value or too big value)


const score = 100 
const scoreValue = 100.3

const isloggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3456876456986n






// Reference Type(Non Primitive)

// Array[], Objects{},Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "bhumika",
    age: 26,
}

const myFunction = function(){
    console.log(helloworld)
}

console.log(typeof anotherId)



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive)(receive copy of number), Heap(Non-Primitive)(receive reference of original value) 

let myYoutubename = "bhumika"
let anothername = myYoutubename
anothername = "Bhumika"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "useer@google.com",
    upi: "user@okyp"
}

let userTwo = userOne

userTwo.email = "bhumika@google.com"

console.log(userOne.email);
console.log(userTwo.email);

