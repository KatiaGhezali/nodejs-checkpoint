const fs = require("fs");

// Create welcome.txt
fs.writeFileSync("welcome.txt", "Hello Node");

// Read it
const data = fs.readFileSync("welcome.txt", "utf8");

console.log(data);
