const mongoose = require('mongoose');
const {Schema} = mongoose;

const voteSchema = new Schema({
    upvote: {
        type: Boolean,
        required: true
    },
    _comment: {
        type: Schema.Types.ObjectId,
        required: true
    },
    _user: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Vote', voteSchema);
