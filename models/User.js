const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  namadepan: {
    type: String,
    required: true
  },
  namabelakang: {
    type: String,
    required: true
  },
  umur: {
    type: Number,
    required: true
  },

});

userSchema.pre('save', function (next) {
  User.findOne({
      username: this.username,
      email: this.email
    })
    .then((user) => {
      if (user) {
        next({
          name: 'EMAIL_ALREADY_EXISTS'
        });
      } else {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
        next();
      }
    })
    .catch((e) => next('MONGOOSE_ERROR'));
});

const User = mongoose.model('User', userSchema);

module.exports = User;
