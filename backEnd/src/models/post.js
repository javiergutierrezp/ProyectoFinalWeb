const validator = require('validator')
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
	question: {
		type: String
	},
	answer: {
		type: String
	},
	createdBy: {
	  type: mongoose.Schema.Types.ObjectId,
	  required: true,
	  ref: 'User'
	}
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post