const express = require('express');

const app = express();

app.get('/', function(req,res){
  res.send('Hello word!');
});

app.get('/about', (req,res) => {
    res.send('<h1>About</h1>');
});

app.get('/users/:username', (req, res) => {
  let username = req.params.username;
  res.send('<h1>You have <i><u>'+username+'</u></i> as username</h1>');
});
app.listen(3000, function(){
  console.log('server started in port 3000');
});
