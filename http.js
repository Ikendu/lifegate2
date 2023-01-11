const http = require('http')

const server = http.createServer( (req, res) => {
	if (req.url == '/')
	{
		res.end('Welcome to our homepage')	
	}
	if (req.url == '/about')
	{
		res.end('This is who we are who we are becoming')	
	}
	if (req.url === '/contact')
	{
		res.end('This is where to meet us')	
	}
	res.end(`
		<h1> Oh No! </h1>
		<p> we cant find the page you are lookng for </p>
		<a href="/">Back Home</a>
		`)
})
server.listen(5000);