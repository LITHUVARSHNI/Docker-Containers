const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'sidecar-logs.txt');

function logMessage() {
    const message = `Sidecar log entry at ${new Date()}\n`;
    fs.appendFileSync(logFilePath, message, 'utf8');
    console.log("An entry has been logged to the sidecar log file!!");
}

setInterval(logMessage, 10000); // Log every 10 seconds
