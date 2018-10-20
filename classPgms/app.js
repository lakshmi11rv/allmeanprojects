//:-console.log("Welcome to Node JS Programming...")

// --> using inbuilt modules
// fs means filesystem.. to use need to declare it as var
//const fs=require('fs');

// to fetch all data from operating system we use OS
//const os=require('os');

// // --> to fetch user name from our OS

// var UserInfo = os.userInfo();
// //:-console.log(UserInfo.username);
// var MyUserName=UserInfo.username;
// //in fs mode callback function mandatory. else need not write call back
// // fs.appendFile('sample.txt',MyUserName, function(err){
// //     if(err) throw err;
// //     console.log("Data saved to file successfully " + MyUserName)
// // Another methode which called to be efficient in ECMA 6 version
// // $ called as template string
//     fs.appendFile('sample.txt',` \n Welcome ${MyUserName}`, function(err){
//         if(err) throw err;
//         console.log("Data saved to file successfully " )
// });

// definig our module
// const MyModule=require('./mymodule.js');
// var UserInfo = os.userInfo();
// //var MyUserName=MyModule.name;
// var MyUserName=MyModule.getName();
// console.log(MyUserName);

// //custom module inclusion
// const MyFn=require('./myfn.js');
// MyFn.GetInput();
// var big=MyFn.GetBig();
// console.log(big);

//const ld=require('lodash');
//console.log(ld.isString('hello'));
//console.log(ld.isString(true));
//console.log(ld.uniq(['lak', 15, 15.5,'LAK', 'lak', 17, 15.5, 100, 110, 100]));


//const command = process.argv[2];  
//console.log(command); 
//--> to know the call back 
// console.log("starting");

// var getUserDetails=(id,callback)=>{
//     var user={id:1,name:'Raju'};
//     callback(user);
// };

// getUserDetails(1,(userObject)=>{
//     console.log(userObject);
// });
// setTimeout(
//     ()=>{
//         console.log("First processing");
//     }
// ,5000);
// setTimeout(
//     ()=>{
//         console.log("Second processing");
//     }
// ,0);

// console.log("stopping");

const express = require('express');
const hbs = require('handlebars');

var app=express();
app.set('view engine', 'handlebars')


//app.use(express.static(__dirname + '/home'));
// app.get('/', (req, res)=>{
//     res.send("Welcome to Express JS Programming !!!");
app.get('/', (req, res)=>{
  
    res.render('home.handlebars',
    {
        pageTitle : "ASIET",
        pagebody : 'Welcome',
        year : new Date().getFullYear()    
    
}
);
});
app.listen(3000);

console.log("Server running on...")
