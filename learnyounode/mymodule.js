const fs = require("fs");

function mymodule(directory, extension, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err);
    }
    const filteredFiles = files.filter((file) => {
      return file.endsWith(`.${extension}`);
    });

    // ... no error, continue doing cool things with `data`

    // all went well, call callback with `null` for the error argument
    callback(null, filteredFiles);
  });
}

module.exports = mymodule;
