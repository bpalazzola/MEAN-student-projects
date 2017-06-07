const mongoose = require('mongoose');
const {Schema} = mongoose;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    _topic: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        required: true
    },
    _votes: [{
        type: Schema.Types.ObjectId,
        ref: 'Vote'
    }],
    _replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Reply'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema);
