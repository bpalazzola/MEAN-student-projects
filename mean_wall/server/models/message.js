const mongoose = require('mongoose');
const {Schema} = mongoose;

const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    _user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    _comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {
    timestamps: true
}
)

module.exports = mongoose.model('Message', messageSchema);
