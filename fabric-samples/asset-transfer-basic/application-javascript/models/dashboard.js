var mongoose = require('mongoose');

var Dashboard_Schema = new mongoose.Schema({ 
    Invoice_number: Number,
    Generated_Date: String,
    Contractor_Name: String,
    Start_Date: Date,
    End_Date: Date,
    Vendor_Name: String,
    Rate: Number,
    Total_Hours_Billed: Number,
    Approved_Amount: Number,
    Skills: String,
    Role: String,
    Experience: Number,
    Location: String,
    Billable_Hours: [{
        Date_From : Date,
        Date_to : Date,
        Overtime: Number,
        Hours_Approved: Number
    }],
    Additional_Expenses:[{
        Expense_Type: String,
        Reimbursement_Limit: Number,
        Claimed_Amount: Number,
        Approved_Amount: Number,
        //Uploaded_Recipt: String,
        Expenses_type: String,
        Rateperhour: Number,
        Approved_Ot_Hour: String
    }],
    status: String,
    Amount_Paid: Number
})

module.exports = mongoose.model('Dashboard_db',Dashboard_Schema)