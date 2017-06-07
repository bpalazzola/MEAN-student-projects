const mongoose = require('mongoose');
const {Schema} = mongoose;

const topicSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    _category: {
        type:Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    _comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

module.exports = mongoose.model('Topic', topicSchema);
