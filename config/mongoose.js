const mongoose = require('mongoose');

module.exports = () => {

// mongoose.connect("mongodb://localhost/Assigment3", {
//   useUnifiedTopology: true,
//   useFindAndModify:false,
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });
//
//   const db = mongoose.connection;
//   db.on('error', (e) => console.log(e));
//   db.once('open', () => console.log('Mongoose connection success!'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Assigment3');


};
