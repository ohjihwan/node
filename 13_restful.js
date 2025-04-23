const express = require('express');
const app = express()
const port = 3000;

app.use(express.json()); //

app.get('/posts', (req, res) => {
	res.send('모든 게시물 조회합니다')
})

// 게시글 등록
app.post('/posts', (req, res) => {
	const {title, content} = req.body;
	res.end(`게시글 등록됨 ${content}`)
})

// 게시글 하나 조회
app.get('/posts/:id', (req, res) => {
	res.send(`${req.params.id}`)
})

// 게시글 수정
app.put('/posts/:id', (req, res) => {
	const {title, content} = req.body;
	res.send(`${req.params.id}번 게시글을 수정했습니다 (${this})`)
})

// 게시글 삭제
app.delete('/posts/:id', (req,res) => {
	res.send(`${req.params.id}번 게시글을 삭제했습니다`)
})

app.listen(port, () => {
	console.log('서버 실행 중')
})