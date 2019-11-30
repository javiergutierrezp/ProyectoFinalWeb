const validator = require('validator')
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		require: true
	},
	password:{
		type: String,
		trim: true,
		required: true,
		minLength: 3,
	},
	email:{
		type: String,
		required: true,
		unique: true,
		validate(value){
			if(!validator.isEmail(value)){
				throw new Error('Email invalido')
			}
		}
	},
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

const Post = mongoose.model('Post', wizardSchema)

module.exports = Post