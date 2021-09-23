const express = require('express');
const router = express.Router();
const Dashboard = require('../models/dashboard');


 
/*router.get('/:Submitted',async(req,res)=>{
    try{
        const dash = await Dashboard.findBy(Invoice_number, Start_Date,End_Date)
        console.log(dash)
        res.json(dash)
    }catch(err){
        res.send('Error'+ err)
    }
})
 
router.get('/:Invoice_Number',async(req,res)=>{
    try{
        const dash = await Dashboard.findOne(req.params.Invoice_number)
        res.json(dash)
    }catch(err){
        res.send('Error'+ err)
    }
})*/



 
router.post('/',async(req,res)=>{
    //console.log(req.body,'post')
   
    const dash = new Dashboard({
        Invoice_number: req.body.Invoice_number,
        Generated_Date: req.body.Generated_Date,
        Contractor_Name: req.body.Contractor_Name,
        Start_Date: req.body.Start_Date,
        End_Date: req.body.End_Date,
        Vendor_Name: req.body.Vendor_Name,
        Rate: req.body.Rate,
        Total_Hours_Billed: req.body.Total_Hours_Billed,
        Approved_Amount: req.body.Approved_Amount,
        Skills: req.body.Skills,
        Role: req.body.Role,
        Experience: req.body.Experience,
        Location: req.body.Location
    })
    for(let i=0; i<(req.body.Billable_Hours.length); i++){
        let obj={}
        obj.Date_From = req.body.Billable_Hours[i].Date_From
        obj.Date_to = req.body.Billable_Hours[i].Date_to
        obj.Overtime= req.body.Billable_Hours[i].Overtime
        obj.Hours_Approved= req.body.Billable_Hours[i].Hours_Approved
        dash.Billable_Hours.push(obj)
    }
    for(let i=0; i<(req.body.Additional_Expenses.length); i++){
        let obj = {}
        obj.Expense_Type = req.body.Additional_Expenses[i].Expense_Type,
        obj.Reimbursement_Limit = req.body.Additional_Expenses[i].Reimbursement_Limit,
        obj.Claimed_Amount = req.body.Additional_Expenses[i].Claimed_Amount,
        obj.Approved_Amount = req.body.Additional_Expenses[i].Approved_Amount,
        // Uploaded_Recipt= req.body.Uploaded_Recipt,
        obj.Expenses_type = req.body.Additional_Expenses[i].Expenses_type,
        obj.Rateperhour = req.body.Additional_Expenses[i].Rateperhour,
        obj.Approved_Ot_Hour = req.body.Additional_Expenses[i].Approved_Ot_Hour
        dash.Additional_Expenses.push(obj)
    }
    var status;
    if(req.body.End_Date==req.body.Billable_Hours[(req.body.Billable_Hours).length-1].Date_to){
        dash.status = 'Ready'
        //console.log('temp1')
    }
    else if(req.body.End_Date>req.body.Billable_Hours[(req.body.Billable_Hours).length-1].Date_to){
        dash.status ='Inaccural'
        //console.log('temp2')
    }
    try{
        const a1 = await dash.save()
        res.json({status: 200, a1})
        console.log(dash.status)
        //console.log(a1)
    }catch(err){
        res.send({message: "Error", status: 401})
    }
})
 
module.exports = router;