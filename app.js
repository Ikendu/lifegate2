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
getText('./content.txt').then(
	(res) => console.log(res))
	.catch((err) => console.log(err))