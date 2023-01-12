const {readFile, writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
	try{
		const first = await readFilePromise('./content.txt', 'utf8')
		const second = await readFilePromise('./second.txt', 'utf8')
		const third = await readFilePromise('./asyncWrite.txt', 'utf8')
		
		await writeFilePromise('./new-write-file.txt', 
			`PROGRESSING : ${first} ${second} ${third}`, {flag: 'a'})

		console.log(first)
		console.log(second)
		
		console.log(third)
	}
	catch (error){
		console.log(error)

	}	
}
start()
