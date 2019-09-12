const express = require('express');
const path = require('path');
const dotenv = require('dotenv'); 
var controllers = require('./controllers');

const app = express();

dotenv.config(); 
controllers.set(app);

// SERVING CLIENT FILES
app.use(express.static(path.join(__dirname, 'client/public')));

// Serving React
 app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
