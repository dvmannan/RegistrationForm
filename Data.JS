const mongoose = require("mongoose")
const validator = require("validator")

const dataSchema = new mongoose.Schema({
    List: String,
    First_name: String,
    Last_name: String,
    e_mail:{
        type: String,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if(value!== this.passwordrepeat) {
                throw new Error("Passwords dont match. Try again")
            }

            if(value.length < 8){
                throw new Error("Password is very short. Atleast it should be 8 characters long")
            }
        }
    },
    passworderpeat: String,
    Address_1: String,
    Address_2: String,
    city: String,
    state: String,
    code: String,
    phone: {
        type: String,
        validate(value) {
            if(!validator.isMobilePhone(value)) {
                throw new error("Phone number is not valid")
            }
        }
    }
})


const Data = module.exports = mongoose.model("Data", dataSchema)
module.exports = Data
