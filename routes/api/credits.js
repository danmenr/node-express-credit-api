const express = require('express');
const router = express.Router();
const passport = require('passport');

//Load Input Validation
const validateCreditInput = require('../../validation/credit');

// Load credit model
const Credit = require('../../models/Credit')

// @route GET api/credits/test
// @desc Test credits route
// @access Public
router.get('/test',(req, res) => {
    res.json({msg: "credits works"})
});

// @route GET api/credits/
// @desc Get All available Credits
// @access Private
router.get(
    '/', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        Credit.find({active: true})
        .then(credits => res.json(credits))
        .catch(err => console.log(err));
    }
);

// @route Post api/credits/
// @desc Create a new Credit
// @access Private
router.post(
    '/', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        const { errors, isValid } = validateCreditInput(req.body);

        //Check Validation
        if(!isValid){
            return res.status(400).json(errors);
        }

        const newCredit = new Credit({
            name: req.body.name,
            amount: req.body.amount,
            payments: req.body.payments,
            paymentAmount: req.body.paymentAmount,
            frecuency: req.body.frecuency,
            rate: req.body.rate,
            creditOwner: req.body.creditOwner
        });

        newCredit.save()
        res.json(newCredit);

    }
);
module.exports = router;