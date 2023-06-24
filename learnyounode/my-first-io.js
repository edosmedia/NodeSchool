const fs = require("fs");

const path = process.argv[2];
const buffer = fs.readFileSync(path).toString().split("\n");

console.log(buffer.length - 1);
