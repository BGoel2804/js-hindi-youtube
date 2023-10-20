const accountid = 144553
let accountemail = "hitesh@google.com"
var accountpassword = "12345"
accountcity = "jaipur"
let accountstate; 
// accountid = 2 // not allowed 

 

accountemail = "hc@hc.com"
accountpassword = "21212121"
accountcity = " banglore "

console.log(accountid);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountid, accountemail, accountpassword, accountcity, accountstate])