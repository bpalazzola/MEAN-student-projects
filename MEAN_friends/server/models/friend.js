const mongoose = require('mongoose');
const {Schema} = mongoose;
const friendSchema = new Schema({
    firstName: {
        required: true,
        min_length: 2,
        type: String
    },
    lastName: {
        required: true,
        min_length: 2,
        type: String
    },
    birthday: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('Friend', friendSchema);
