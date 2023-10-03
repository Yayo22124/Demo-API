const {Schema, model} = require('mongoose');

const studentSchema = new Schema({
    "controlnumber":{
        type: Number,
        require: true,
        unique: true
    },
    name:String,
    lastname:String,
    average:Number,
    grade:Number
},{
    versionKey:false,
    timestamps:true
});

module.exports = model('student', studentSchema)