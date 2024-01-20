const name = "bhumika"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('bhumikabg')
console.log(gameName[1]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('u'));
 const newString = gameName.substring(1,5)//only positive value
 console.log(newString);

 const anotherString = gameName.slice(-8,4);
 console.log(anotherString);

 const newStringOne = "  bhumika  "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://bhumi.com/bhumi%20goel"
console.log(url.replace('%20', '_'));

//console.log(url.includes(goel));


