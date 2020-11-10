const mongoose = require('mongoose');
var http = require ('http');

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



    // Here we find an appropriate database to connect to, defaulting to
    // localhost if we don't find one.
    var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/Assigment3';

    // The http server will listen to an appropriate port, or default to
    // port 5000.
    mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });


};
