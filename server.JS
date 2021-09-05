const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const Data = require("./models/Data");
const app = express()
const mongoose = require("mongoose")
const validator = require("validator")
//const bcrypt = require("bcrypt");

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static("public"))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

mongoose.connect("mongodb://localhost:27017/crowdtask", { useNewUrlParser: true});

app.post('/', (req, res) =>{
    const list = req.body.list
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.e_mail
    const password = req.body.password
    const repassword = req.body.passwordrepeat
    const address1 = req.body.Address_1
    const address2 = req.body.Address_2
    const city = req.body.city
    const state = req.body.state
    const code = req.body.code
    const phone = req.body.mobile



    const data = new Data({
        List: list,
        Firstname: firstname,
        Lastname: lastname,
        e_mail: email,
        password: password,
        passwo
        
        
        
        
        rdrepeat: repassword,
        Address_1: address1,
        Address_2: address2,
        city: city,
        state: state,
        code: code,
        phone: phone

    })
    data
        .save()
        .catch((err) => console.log(err));
    if (res.statusCode === 200) {
        res.sendFile(__dirname  + "/success.html")
    }
    else{
        res.sendFile(__dirname + "/404.html")

    }

})
let port = process.env.PORT;
if(port == null || port == ""){
    port = 6756;
}

app.listen(port, (req, res)=>{
    console.log("Server is running")
})
