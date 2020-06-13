const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    password: String,
    project: { type: mongoose.Types.ObjectId, ref: 'projects' }
})

module.exports = mongoose.model('users', userSchema)