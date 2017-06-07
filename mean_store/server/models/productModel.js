const mongoose = require('mongoose');
const {Schema} = mongoose;
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        trim: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);
