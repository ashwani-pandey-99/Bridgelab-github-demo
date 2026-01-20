/*console.log("excel");

const { add, remove } = require("./math");

console.log(add(5, 3));    // 8
console.log(remove(7, 3)); // 4 */

/*const fs = require("fs");

// Sync write
fs.writeFileSync("test.txt", "this is test file");

// Async write (overwrites previous content)
fs.writeFile("test.txt", "this is async file", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is created");
  }
});

// Sync read (WITH encoding)
const file = fs.readFileSync("test.txt", "utf-8");
console.log("File content:", file);
*/

const logActivity = require("./logger");

logActivity("Server started");
logActivity("User logged in");
logActivity("File created");


