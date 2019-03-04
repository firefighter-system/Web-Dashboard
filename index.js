const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

// Serving React
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
  console.log("should be fine")
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
