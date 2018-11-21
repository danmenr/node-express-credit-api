const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PaymentSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    },
    _credit_id: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

module.exports = Payment = mongoose.model('payments', PaymentSchema);