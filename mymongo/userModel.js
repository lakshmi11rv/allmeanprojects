
var mongoose=require('mongoose');

var Users=mongoose.model('Users',{
    name:{type:String,
          required:true,
          minlength:2
    },
    age:{type:Number},
    rollno:{type:Number},
    admno:{type:Number},
    college:{type:String}
});

// Passing a value to the model
// below is a object creation + Passing
var users = new Users(
    {name:'Deva', age: 3}
);

module.exports={
    //Users:Users
    Users
}