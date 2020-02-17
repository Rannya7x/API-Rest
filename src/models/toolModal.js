const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ToolSchema = new Schema({
    title: String,
    link: { type: String, required: true },
    description: { type: String, required: true },
    tag: [{ type: String }]    
},{
    timestamps: true
})

module.exports = mongoose.model('tool', ToolSchema)