const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCreditInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.amount = !isEmpty(data.amount) ? parseFloat(data.amount) : 0;
    data.payments = !isEmpty(data.payments) ? parseFloat(data.payments) : 0;
    data.paymentAmount = !isEmpty(data.paymentAmount) ? parseFloat(data.paymentAmount) : 0;

    if(!Validator.isLength(data.name, { min: 2, max: 30})){
        errors.name = 'Name must be between 2 and 30 characters'
    }

    if(Validator.isEmpty(data.name)){
        errors.name = 'Name field is required'
    }

    if(data.amount <= 0){
        errors.amount = 'Amount field must be greater than 0'
    }

    if(data.payments <= 0){
        errors.payments = 'Payments field must be greater than 0'
    }

    if(data.paymentAmount <= 0){
        errors.paymentAmount = 'Payment Amount field must be greater than 0'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}