const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {

  static getList(req, res, next) {
    User.find(req._userId)
      .then(function (user) {
        res.status(200).json({
          message: 'succes',
          data: user
        })
      })
      .catch(next);
  }

  static register(req, res, next) {
    const {
      username,
      email,
      password,
      namadepan,
      namabelakang,
      umur,
    } = req.body;
    const user = new User({
      username,
      email,
      password,
      namadepan,
      namabelakang,
      umur,
    });

    user
      .save()
      .then((user) => {
        res.status(201).json({
          message: `welcome  ${user.username} hope enjoy play`,
          data: user
        });
      })
      .catch(next);
  }

  //login menggunakan Username
  static login(req, res, next) {
    const {
      email,
      password
    } = req.body;
    User.findOne({
        email
      })
      .then((user) => {
        console.log(user);
        if (user && bcrypt.compareSync(password, user.password)) {
          const access_token = jwt.sign({
            _id: user._id
          }, 'ANGGALESMANA');
          res.status(200).json({
            success: true,
            access_token
          });
        } else throw {
          name: 'LOGIN_FAIL'
        };
      })
      .catch(next);
  }
  //get by id
  static getId(req, res, next) {
    User.findOne({
        _id: req.params.id
      })
      .then((user) => {
        res.status(200).json({
          success: true,
          data: user
        })
      })
      .catch(next);
  }

  //edit user
  static editUser(req, res, next) {
    const {
      username,
      email,
      password,
      namadepan,
      namabelakang,
      umur,
    } = req.body;
    User.findOne({
        _id: req.params.id
      })
      .then((user) => {
        user.username = username;
        user.email = email;
        user.password = password;
        user.namadepan = namadepan;
        user.namabelakang = namabelakang;
        user.umur = umur;
        return user.save();
      })
      .then((user) => {
        res.status(200).json({
          message: 'edit user succes',
          data: user
        });
      })
      .catch(next);
  }

  //USER DELETED
  static delete(req, res, next) {
    User.findOne({
        _id: req.params.id
      })
      .then((user) => {
        return user.remove();
      })
      .then((user) => {
        res.status(200).json({
          message: 'user deleted successfully',
          data: {
            deleted: user
          }
        })
      })
      .catch(next);
  }


}

module.exports = UserController;
