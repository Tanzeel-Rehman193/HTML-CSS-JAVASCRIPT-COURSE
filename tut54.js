// Synchronous or blocking -------------> Line by line execution
// ASynchronous or non-blocking ---------> Line by line execution not gurranteed while callbacks will fire -- it not blocks and works when it complete

const fs = require('fs');
let text = fs.readFile("dele.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");