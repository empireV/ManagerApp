const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: String,
    taskLists: [[{ name: String, description: String }]]
})

module.exports = mongoose.model('projects', projectSchema)