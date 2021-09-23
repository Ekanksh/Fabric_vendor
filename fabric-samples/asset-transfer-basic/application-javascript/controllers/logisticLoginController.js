const express = require('express');
const router = express.Router();
const Login = require('../models/logistic_reg.model');
const jwt = require('jsonwebtoken');


router.post('', (req, res) => {
    //var { userName, password } = req.body;
    var userName = req.body.userName;
    var password = req.body.password;
    Login.findOne({ userName }, (err, docs) => {
        if (err) { throw err; }
        else if (!docs) {
            res.json({ message: "No such user exist", status: 401 });
        } else {
                if(docs.password === password)
                  {     
                    let payload = { subject: docs._id }
                    let token = jwt.sign(payload, 'secretKey')
                    res.json({ message: "Login Succesfull", status: 200, user: docs, token });
                  }
                 else {
                    res.json({ message: "password not match", status: 401 })
                }
            
        }
    })
})

module.exports = router;