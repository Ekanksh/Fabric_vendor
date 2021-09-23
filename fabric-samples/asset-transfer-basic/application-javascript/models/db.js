const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/VendorsManagement", {

    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (!err) { console.log("database Connected"); }
    else { console.log("Error in Db connection : " + err); }
});

require('./logistic_reg.model');


