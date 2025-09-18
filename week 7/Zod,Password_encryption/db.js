const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const ObjectId=mongoose.Schema.Types.ObjectId;


const User=new Schema({
    email:{type:String,unique:true},
    password:String,
    name:{type:String,unique:true}
})
const Todos=new Schema({
    todo:String,
    done:Boolean,
    Userid: {type:ObjectId, ref:"User"}
})

const UserModel=mongoose.model("User",User);
const TodosModel=mongoose.model("Todos",Todos);

module.exports= {
    UserModel:UserModel,
    TodosModel:TodosModel
}