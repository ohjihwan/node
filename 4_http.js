const http = require('http');
const server = http.createServer((req, res) => {
	const url = req.url;
	if(url === '/'){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Home');
	} else if(url === '/about') {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('My page');
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('not found');
	}
})

server.listen(3000, () => {
	console.log('서버 실행 중')
});