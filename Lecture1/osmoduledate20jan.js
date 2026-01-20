const os = require("os");

const totalMemory = os.totalmem() / (1024 * 1024 * 1024);
const freeMemory = os.freemem() / (1024 * 1024 * 1024);

const platform = os.platform();
const uptime = os.uptime();

const model=os.cpus()[0].model

console.log("Total Memory (GB):", totalMemory.toFixed(2));
console.log(model);
console.log("Free Memory (GB):", freeMemory.toFixed(2));
console.log("Platform:", platform);
console.log("Uptime (seconds):", uptime);
