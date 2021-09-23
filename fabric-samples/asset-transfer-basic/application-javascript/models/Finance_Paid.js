var mongoose = require('mongoose');

var FinancepaidSchema = new mongoose.Schema( {
    Invoice_number: Number,
    Amount_Paid: Number
});

module.exports = mongoose.model('Finance_db',FinancepaidSchema)