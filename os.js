const os = require('os')



//info about current user
const user = os.userInfo()
console.log(user);

//get the system uptime in seconds

console.log(`The system uptime is ${os.uptime()}`);
console.log(os.freemem());


const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem()
}

console.log(currentOS)