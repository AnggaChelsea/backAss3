const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  _userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true,
  },
  comments:{
    type:String,
    required:true,
  },
});
const comment = mongoose.model('comment', commentSchema);
module.export = comment;
