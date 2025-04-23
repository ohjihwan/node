import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
	console.log('users에 존재하는 미들웨어')
	next();
})

router.get('/', (req, res) => {
	res.status(200).send('GET: /users 회원정보보기')
});

router.post('/', (req, res) => {
	res.status(201).send('POST: /users 회원가입')
})

router.put('/:id', (req, res) => {
	res.status(201).send('PUT: /users 정보수정')
})

router.delete('/:id', (req, res) => {
	res.status(201).send('DELETE: /users 회원탈퇴')
})

export default router;