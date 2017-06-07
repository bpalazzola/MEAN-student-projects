const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        minlength: 2,
        required:true
    },
    password: {
        type: String,
        minlength: [8, 'Passwords must be 8 characters or longer'],
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    _topics: [{
        type: Schema.Types.ObjectId,
        ref: 'Topic'
    }],
    _comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    _replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Reply'
    }],
    _votes: [{
        type: Schema.Types.ObjectId,
        ref: 'Vote'
    }]
}, {
    timestamps: true
    }
);

userSchema.pre('save', function(next){
    if(!this.isModified('password')){ return next();}
    bcrypt.hash(this.password, 10)
    .then(hashed => {
        this.password = hashed;
        next();
    })
    .catch(next);
})

userSchema.statics.verifyPassword = function(candidate, hashed){
    return bcrypt.compare(candidate, hashed);
}

module.exports = mongoose.model('User', userSchema);
