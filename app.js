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

const name = require('./name')
const sayHi = require('./utils')
const names = require('./alternate')

console.log(names.personal)

console.log(name)

sayHi("Chibundu")
sayHi(name.john)
sayHi(name.mike)