var mongoose=require('mongoose');
var props=require('./properties');
module.exports=function(){
mongoose.connect(props.DB);
}
