const fs = require("fs");
const fix = `https://github.com/Rednexie/discord-id\n`

const fetch = require("node-fetch");



function log(text) {
  const filePath = './log.txt';

  fs.access(filePath, (err) => {
    if (err) {
      // File doesn't exist, create new file and append data
      fs.writeFile(filePath, fix + text, (err) => {
        if (err) throw err;
      });
    } else {
      // File exists, append data to existing file
      fs.appendFile(filePath, text, (err) => {
        if (err) throw err;
      });
    }
  });

}



function clear() {
  fs.unlink('./log.txt', (err) => {
    if (err) {
      console.log('\x1b[31m%s\x1b[0m', `Error deleting file: \n${err.message}`);
      return;
    }
    console.log('\x1b[32m%s\x1b[0m', 'File deleted successfully');
  });
}


function empty() {

  if (fs.existsSync(filePath)) {
    // Open file in write mode, this will truncate (empty) the file
    fs.writeFile(filePath, '', err => {
      if (err) {
        // Log red error message if there was an error
        console.error('\x1b[1;31mError emptying file:\x1b[0m', err);
      } else {
        // Log green success message if file was emptied successfully
        console.log('\x1b[32mFile emptied successfully.\x1b[0m');
      }
    });
  } else {
    console.log('\x1b[31mFile does not exist, skipping.\x1b[0m');
  }

}



module.exports = log;
module.exports.empty = empty;
module.exports.clear = clear;
