const Comment = require('../models/Comment');
const User = require('../models/User');

class CommentController{
  static post(req,res,next){
    const {comments} = req.body;
    const userComment = new Comment({
      _userId: req.params.id,
      comments
    });
    userComment.save()
    .then((userComment)=>{
      res.status(201).json({message:'comment succes send', data:userComment})
    })
    .catch(next);
  }
}

module.exports = CommentController;
