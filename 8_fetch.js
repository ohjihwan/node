const http = require("http");

const skills = [
	{name: 'HTML'},
	{name: 'CSS'},
	{name: 'JAVASCRIPT'},
	{name: 'JAVA'},
	{name: 'PYTHON'},
	{name: 'AI'},
	{name: 'Node.js'},
	{name: 'mongoDB'},
	{name: 'MySQL'}
]

const server = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', "*")
	res.setHeader('Access-Control-Allow-Methods', "GET, POST, OPTIONS")
	res.setHeader('Access-Control-Allow-headers', "Content-Type")

	const url = req.url
	const method = req.method
	if(method === 'GET') {
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(JSON.stringify(skills));
	}
});

server.listen(3000, () => {
	console.log('서버 실행 중')
})