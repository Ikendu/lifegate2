const {writeFileSync, createReadStream} = require('fs')

 const stream = createReadStream('./big.txt', 
	{highWaterMark: 9000, encoding:'utf8'})

stream.on('data', (result) => {
	console.log(result)
})

 stream.on('error', (err) => console.log(err))
/*
//for writing file
for (let i = 0; i < 1000; i++){
	writeFileSync('./big.txt', `hello word ${i}\n`, {flag: 'a'})
}


//for reading file

*/