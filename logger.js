
const fs = require("fs");


function logActivity(message) {
  
  const timestamp = new Date().toISOString();

  
  const logMessage = `${message} - ${timestamp}\n`;

  
  fs.appendFile("activity.log", logMessage, (err) => {
    if (err) {
      console.log("Error writing log:", err);
    }
  });
}


module.exports = logActivity;
