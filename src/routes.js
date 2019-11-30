const express = require('express')
const router = express.Router()

const users = require('./controllers/users.js')
const posts = require('./controllers/posts.js')
const auth = require('./middleware/auth')

router.get('/users', auth, users.getUser)
router.post('/login', users.login)
router.post('/logout', auth, users.logout)
router.post('/users', users.createUser)  // signup
router.patch('/users', auth, users.updateUser)
router.delete('/users', auth, users.deleteUser)

router.get('/posts/:id', auth, posts.getPost)
router.get('/posts', auth, posts.getPosts)
router.post('/posts', auth, posts.createPost)
router.patch('/posts/:id', auth, posts.updatePost)
router.delete('/posts/:id', auth, posts.deletePost)

router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist, try /users or /posts'
  })
})

module.exports = router