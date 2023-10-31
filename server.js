const express = require("express");
const app = express();
require('./mongoose.js')
const Books = require('./router/Books.js')

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello manish');
})
app.use('/api',Books)
app.listen(8000,()=>{
console.log('listening on port 8000')
});
