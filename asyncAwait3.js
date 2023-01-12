const {readFile, writeFile} = require('fs').promises;
const util = require('util');

const start = async() => {
	try{
		const first = await readFile('./content.txt', 'utf8')
		const second = await readFile('./second.txt', 'utf8')
		const third = await readFile('./asyncWrite.txt', 'utf8')

		await writeFile('./new-write-file.txt', 
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
