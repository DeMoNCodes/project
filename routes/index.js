var express = require('express');
var router = express.Router();
const fs = require('fs');
const tf = require('@tensorflow/tfjs-node');
// async function test(){
//   const model =  await tf.loadLayersModel('file:///./model.json/model.json');
//   var x=model.predict();
// }
// test();

/* GET home page. */
router.get('/draw', function(req, res, next) {
  res.render('index', { title: 'DRAWING ASSSTANT' });
});
router.get('/data',(req,res,next)=>{
  res.json({
    message:"hii"
  })
});
router.get("/",(req,res)=>{
  res.render('home',{title:"home"})
});

router.post("/gussnext",(req,res)=>{
  res.json();
});

module.exports = router;
