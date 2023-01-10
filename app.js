const amount = 12
if (amount < 10)
{
	console.log("Small Number")
}
else
{
	console.log("Large number")

}
 console.log(`hey its my first node app!`)
/*
console.log(__dirname)
console.log(require)
console.log(__filename)
console.log(module)

console.log(process)

setInterval( () => 
{
	console.log("Chibundu is a Software Engineer");
}, 1000
)
*/

const na = require('./name')
const sayHi = require('./utils')

sayHi("Chibundu")
sayHi(na.john)
sayHi(na.mike)