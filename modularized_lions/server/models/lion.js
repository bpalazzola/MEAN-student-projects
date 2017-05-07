const mongoose = require('mongoose');

const LionSchema = new mongoose.Schema({
    name: String,
    age: Number,
    house_words: String
}, {timestamps: true})
mongoose.model('Lion', LionSchema);
const Lion = mongoose.model('Lion');
