const express = require('express');
const router = express.Router();
const Finance = require('../models/Finance_Paid');

const Dashboard = require('../models/dashboard');

router.post('/',async(req,res)=>{
    const temp = new Finance({
        Invoice_number: req.body.Invoice_number,
        Amount_Paid: req.body.Amount_Paid
    })
    try{
        const a1 = await temp.save()
        res.json({status: 200, a1})
    }catch(err){
        res.send('Error'+ err)
    }
})

router.post('/updatePaidStatus',async(req,res)=>{
    try{     
        var Invoice_number = req.body.Invoice_number
        var Amount_Paid= req.body.Amount_Paid
        console.log(req.body.Invoice_number);
        const dash = await Dashboard.updateOne({Invoice_number}, {$set: {"status":"Paid","Amount_Paid":Amount_Paid}})
        res.json({message:"status updated successfully",status:200})
        console.log(dash)
    }catch(err){
        res.send('Error'+ err)
    }
})
/*router.get('/allFinanceData/',async(req,res,next)=>{
    try{
        
        const dash = await Finance.find({})
        res.json(dash)
    }catch(err){
        res.send('Error'+ err)
    }
})*/

router.get('/getFinData/:Invoice_number',async(req,res,next)=>{
    try{
        var Invoice_number = req.params.Invoice_number
        const dash = await Finance.find({Invoice_number})
        res.json(dash)
    }catch(err){
        res.send('Error'+ err)
    }
})

module.exports = router;