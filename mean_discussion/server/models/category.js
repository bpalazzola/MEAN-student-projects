const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Category', categorySchema);
