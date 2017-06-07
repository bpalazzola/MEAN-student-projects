const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [2, 'Username must be at least 2 characters'],
        unique: [true, 'USERNAME ALREADY TAKEN']
    },
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: [true, 'email already taken!'],
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'passwords must be at least 8 letters']
    },
    birthday: {
        type: Date
    }
}, {
    timestamps:true
});

userSchema.pre('save', function(next){
    if(!this.isModified('password')) { return next(); }
    var hashed = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
        this.password = hashed;
        next();
})

userSchema.statics.verifyPassword = function(candidate, hashed){
    return bcrypt.compare(candidate, hashed);
}

module.exports = mongoose.model('User', userSchema);
