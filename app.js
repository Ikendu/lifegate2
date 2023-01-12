const {writeFileSync, createReadStream} = require('fs')

const stream = createReadStream('./big.txt', 'utf8')

stream.on('data', (result) => {
	console.log(result)
})

/*
for writing file
for (let i = 0; i < 1000; i++){
	writeFileSync('./big.txt', `hello word ${i}\n`, {flag: 'a'})
}
*/

//for reading file

