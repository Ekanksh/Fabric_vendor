const express = require('express');
const router = express.Router();
const Dashboard = require('../models/dashboard');


/*router.get('/',async(req,res)=>{
    //console.log(req.body,'post')

    const dash = new Dashboard({
        Invoice_number: req.body.Invoice_number,
    })
    for(let i=0; i<(req.body.Billable_Hours.length); i++){
        let obj={}
        obj.Date_From = req.body.Billable_Hours[i].Date_From
        obj.Date_to = req.body.Billable_Hours[i].Date_to
        dash.Billable_Hours.push(obj)
    }
    try{
        const a1 = await dash.find()
        res.json({status: 200, a1})
    }catch(err){
        res.send({message: "Error", status: 401})
    }
})*/

router.get('/getData/:Invoice_number',async(req,res,next)=>{
    try{
        var Invoice_number = req.params.Invoice_number
        const dash = await Dashboard.find({Invoice_number})
        res.json(dash)
    }catch(err){
        res.send('Error'+ err)
    }
})

router.get('/allData/',async(req,res,next)=>{
    try{
        
        const dash = await Dashboard.find({})
        res.json(dash)
    }catch(err){
        res.send('Error'+ err)
    }
})

/*router.post('/updateStatus/:Invoice_number',async(req,res)=>{
    try{
        var Invoice_number = req.params.Invoice_number
        const dash = await Dashboard.find({Invoice_number})
        const dash1 = await dash.updateOne({Invoice_number}, {$set: {"status":"Raised"}})
        console.log(dash.status)
        res.json(dash1)
    }catch(err){
        res.send('Error'+err)
    }
})*/

router.put('/updateStatus',async(req,res)=>{
    try{     
        var Invoice_number = req.body.Invoice_number
        console.log(req.body.Invoice_number);
        const dash = await Dashboard.updateOne({Invoice_number}, {$set: {"status":"Raised"}})
        res.json({message:"status updated successfully",status:200})
        console.log(dash)
    }catch(err){
        res.send('Error'+ err)
    }
})

router.put('/disputeStatus',async(req,res)=>{
    try{
        
    var Invoice_number = req.body.Invoice_number
 console.log(req.body.Invoice_number);
    const dash = await Dashboard.updateOne({Invoice_number}, {$set: {"status":"Disputed"}})
    res.json({message:"status updated successfully",status:200})
 
   
    console.log(dash)
}catch(err){
    res.send('Error'+ err)
    }
 
})

module.exports = router;

