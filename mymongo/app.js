

//const mongoose = require ('mongoose');
const express = require ('express');
var mongoose=require('./mongoose_db');
var Users=require('./userModel');
var bodyParser = require();
//to ensure connection below stmt
//mongoose.Promise=global.Promise;
//create connection wth below stmt db name will be user
//mongoose.connect('mongodb://localhost:27017/Usres');

// create a Model

// var Users=mongoose.model('Users',{
//     name:{type:String,
//           required:true,
//           minlength:2
//     },
//     age:{type:Number}
// });

// // Passing a value to the model
// // below is a object creation + Passing
// var users = new Users(
//     {name:'Deva', age: 3}
// );

var app=express();
app.get('/userentry',(req,res)=>{
  var users= new Users(
   //   {name: 'Sree', age:1}
   {
       name:req.body.name,
       age:req.body.age
   }
  );

})

// to insert data to db
users.save().then((data)=>{
    console.log('Successfully saved', data)
},
(e)=>{
    console.log('Error',e)
}
);

app.listen(3000,()=>{
    console.log('Started');
})
