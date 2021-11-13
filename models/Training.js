const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TrainingSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
     createdAt: {
        type: Date,
        default: Date.now,
      },
})
const Training = mongoose.model('Training', TrainingSchema);
module.exports = Training; 