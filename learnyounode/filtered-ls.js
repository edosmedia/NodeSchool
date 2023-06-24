const fs = require("fs");
// const path = require("path");

const directory = process.argv[2];
const extension = "." + process.argv[3];

function callback(err, list) {
  if (err) throw err;
  console.log(list);
  list.forEach((file) => {
    if (file.endsWith(`${extension}`)) console.log(file);
  });
}
fs.readdir(directory, callback);

console.log(process.argv); //array with params
// node filtered-ls.js "." js comand
