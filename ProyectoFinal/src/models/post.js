const validator = require('validator')
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
	id: {
		type: Number
	},
	user: {
		type: String
	},
	time: {
		type: Date
	},
	quote: {
		type: String
	}
})

const Wizard = mongoose.model('Post', wizardSchema)

module.exports = Post