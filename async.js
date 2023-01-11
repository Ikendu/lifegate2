
const {readFile, writeFile} = require('fs')

/*
readFile('./content.txt', 'utf8', (err, result) => {
	if (err)
	 {
		console.log(err)
		return
	}
	const first = result
	readFile('./second.txt', 'utf8', (err, result) => {
		if (err)
		{
			console.log(err)
			return
		}
		const second = result
		writeFile(
			'./asyncWrite.txt', 
			`Here is the writen content: ${first} , ${second}`,
			{flag: 'a'},
			(err, result) => {

			if (err)
			{
				console.log(err)
				return
			}
			console.log(result)
			return
			})
	})
})
*/

readFile('./content.txt', 'utf8', (error, result) => {
	if(error)
	{
		console.log(err);
		return
	}
	const first = result
	console.log(first);
	return
});
readFile('./second.txt', 'utf8', (error, result) => {
	if(error)
	{
		console.log(error);
		return
	}
	const second = result
	console.log(second);
	return
});
readFile('./newfile.txt', 'utf8', (err, res) => {
	if(err)
	{
		console.log(err)
		return
	}
	const third = res;
	console.log(third);	

writeFile('./asyncWrite1.txt', `Final writing is here: ${third}`,
	{flag: 'a'}, (err, res) => {
		if(err)
		{
			console.log(err);
			return
		}
		console.log(res)
		return
	})

});