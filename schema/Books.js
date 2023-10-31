const mongoose = require('mongoose');
const Bookschema = new mongoose.Schema({
    title:{
    type:String,
    required:true
    },
    author:{
    type:String,
    required:true
    },
    summary:{
        type:String,
        required:true
    }

});
const Books= new mongoose.model('post',Bookschema);
module.exports = Books ;
