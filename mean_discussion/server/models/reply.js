const mongoose = require('mongoose');
const {Schema} = mongoose;

const replySchema = new Schema({
    content: {
        type: String,
        required: true
    },
    _comment: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Comment'
    },
    _user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Reply', replySchema);
