const mongoose = require ('mongoose');
mongoose.Promise=global.Promise;
//create connection wth below stmt db name will be user
mongoose.connect('mongodb://localhost:27017/Usres');

module.exports={
mongoose:mongoose
}