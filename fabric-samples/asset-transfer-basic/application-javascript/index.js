const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const api1=require("./api1");
const api2=require("./api2");
const api3=require("./api3");
const api4=require("./api4");


require("./models/db");

const logisticLoginController = require('./controllers/logisticLoginController');
const LogisticRegController = require ('./controllers/logisticRegController')
const DashboardController = require ('./controllers/DashboardController')
const DashboardSubmittedController = require ('./controllers/DashboardSubmittedController')
//const FinancePaidController = require ('./controllers/FinancePaidController')
const FinancePaidController = require('./controllers/FinancePaidController')


const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/login', logisticLoginController);

app.use('/reg', LogisticRegController)

app.use('/Dashboard',DashboardController)

app.use('/DashboardSubmitted',DashboardSubmittedController)

app.use('/FinancePaid',FinancePaidController)


app.use('/GetAllDashBoardDetails',api1);


app.use('/DashBoardDetails',api2);
app.use('/AddData',api3)

app.use('/add',api4)

app.listen(port, () => {
    console.log(`Server is running at port no. : ${port}`);
});
