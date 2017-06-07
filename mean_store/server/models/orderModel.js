const mongoose = require('mongoose');
const {Schema} = mongoose;
const orderSchema = new Schema({
    _customer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    _product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema);
