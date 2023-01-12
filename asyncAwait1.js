const {readFile} = require('fs')

const getText = (path) => {
	return new Promise( (resolve, reject) => {
		readFile(path, 'utf8', (err, res) => {
			if (err)
			{
				reject(err)
			}
				resolve(res)
		})
	})
}


const start = async() => {
	try{
		const first = await getText('./content.txt');
		const second = await getText('./second.txt');
		console.log(first)
		console.log(second)
		const third = await getText('./asyncWrite.txt');
		console.log(third)

	}
	catch (error){
		console.log(error)

	}
	
}

start()

//getText('./content.txt')
//.then((res) => console.log(res))
//.catch((err) => console.log(err))