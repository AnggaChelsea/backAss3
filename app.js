const express = require('express');
const bodyParser = require('body-parser');
const mongooseConnect = require('./config/mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const port = 5000;

mongooseConnect();

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`App runs on http://localhost:${port}`);
});

// jgn diubah dlu, mending dimatiin aja
