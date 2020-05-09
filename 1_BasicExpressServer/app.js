const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//load static html
app.use(express.static(path.join(__dirname, 'public')));

//load Json
app.get('/users',(req, res) => {
    const users = [
      {
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
      },
      {
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
      },
      {
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
        }
    ];
    res.json(users);
});

//download file
app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'downloads/sample.pdf'));
});

//redirect
app.get('/about', (req,res) =>{
  res.redirect('/about.html');
});

//post
app.post('/submit', (req, res)=>{
  const name = req.body.name;
  const email = req.body.email;
  console.log(name+' has subscribed with '+email);
});

app.listen(3000, function(){
  console.log('server started in port 3000');
});
