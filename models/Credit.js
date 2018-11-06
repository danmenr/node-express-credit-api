const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CreditSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    payments: {
        type: Number,
        required: true
    },
    paymentAmount: {
        type: Number,
        required: true
    },
    frecuency: {
        type: Number,
        required: false
    },
    rate: {
        type: Number,
        required: false
    },
    creditOwner: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = Credit = mongoose.model('credits', CreditSchema);