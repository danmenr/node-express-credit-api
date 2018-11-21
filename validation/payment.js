const isEmpty = require('./is-empty');

module.exports = function validatePaymentInput(data) {
    let errors = {};

    data.amount = !isEmpty(data.amount) ? parseFloat(data.amount) : 0;

    data.credit_id = !isEmpty(data.credit_id) ? data.credit_id : 0;

    if(data.amount <= 0){
        errors.amount = 'Amount field must be greater than 0'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}