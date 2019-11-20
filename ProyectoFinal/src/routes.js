const express = require('express')
const posts = require('./controllers/posts')

const router = express.Router()

router.get('/posts', posts.getUsers)
router.get('/posts/:id', posts.getUser)
router.post('/posts', posts.createUser)
router.patch('/posts/:id', posts.updateUser)
router.delete('/posts/:id', posts.deleteUser)

module.exports = router