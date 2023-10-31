const express = require('express');
const router = express.Router()
const Book = require('../schema/Books.js')

router.post('/add',async(req,res)=>{
    try{
    const result = new Book({
    title:req.body.title,
    author:req.body.author,
    summary:req.body.summary
    })
    const data = await result.save();
    res.send(data)
    }
    catch(err){
    res.send(err)
    }
})

router.get('/getall',async(req,res)=>{
    try{
    const result = await Book.find({})
    res.send(result)
    }
    catch(err){
    res.send(err)
    }
})


router.get('/book/:_id',async(req,res)=>{
  try{
  const _id = req.params._id
  const result = await Book.findById({_id})
  res.send(result)
  }
  catch(err){
  res.send(err)
  }
})

router.put('/edit/:_id',async(req,res)=>{
    try{
    const _id = req.params._id
    const result = await Book.findByIdAndUpdate({_id},req.body,{new:true})
    res.send(result)
    }
    catch(err){
    res.send(err)
    }
})

router.delete("/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const post = await Book.findByIdAndDelete(_id);
    res.send(post);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router