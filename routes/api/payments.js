const express = require('express');
const router = express.Router();
const passport = require('passport');

//Load Input Validation
const validatePaymentInput = require('../../validation/payment');

// Load credit model
const Payment = require('../../models/Payment')

// @route GET api/payments/test
// @desc Test payments route
// @access Public
router.get('/test',(req, res) => {
    res.json({msg: "payments works"})
});

// @route GET api/payments/
// @desc Get All available payments for a credit
// @access Private
router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        Payment.find({ _credit_id: req.body.creditId })
        .then(payments => res.json(payments))
        .catch(err => res.status(500).json(err));
    }
);

// @route Post api/payments/
// @desc Create a new Payment
// @access Private
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePaymentInput(req.body);

        //Check Validation
        if(!isValid){
            return res.status(400).json(errors);
        }

        const newPayment = new Payment({
            amount: req.body.amount,
            _credit_id: req.body.creditId
        });

        newPayment.save()
        res.json(newPayment);

    }
);
module.exports = router;