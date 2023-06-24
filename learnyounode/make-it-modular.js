const mymodule = require("./mymodule.js");
const directory = process.argv[2];
const extension = process.argv[3];

function printList(err, list) {
  if (err) {
    return console.error(err);
  } // early return

  list.forEach((element) => {
    console.log(element);
  });
}

mymodule(directory, extension, printList);
