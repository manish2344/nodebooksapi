const mongoose = require('mongoose');
const connectionStr = "mongodb+srv://manishpanwar682:b0ElV4zRPpcHZoJ7@cluster0.a2zwtkc.mongodb.net/foodsite";
mongoose.connect(connectionStr,{useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error',err=> console.log(err))