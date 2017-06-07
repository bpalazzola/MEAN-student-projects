const mongoose = require('mongoose');
const {Schema} = mongoose;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    _message: {
        type: Schema.Types.ObjectId,
        ref: 'Message',
        required: true
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema);
