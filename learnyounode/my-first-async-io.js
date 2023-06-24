const fs = require("fs");

const path = process.argv[2];

function finishedReading(error, text) {
  if (error) return console.error(error);
  // do something with the movieData

  const buffer = text.toString().split("\n").length - 1;
  console.log(buffer);
}

fs.readFile(path, finishedReading);
