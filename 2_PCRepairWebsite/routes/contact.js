var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us', successMessage: ''});
});

let testAccount = nodemailer.createTestAccount();

router.post('/send', function(req, res, next) {
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth:{
      user: testAccount.user,
      pass: testAccount.pass
    },
  });

  let info = transporter.sendMail({
      from: '"Fred Foo " <foo@example.com>',
      to: "bar@example.com",
      subject: "Contact Us from PC Repair",
      text: 'You have submission from... Name: '+req.body.name+' Message: '+req.body.message+' Email: '+req.body.email,
      html: '<p>You have submission from... <br/>Name: '+req.body.name+'</br> Message: '+req.body.message+'</br> Email: '+req.body.email+'</p>'
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.render('contact',{ successMessage: 'Message Send successfully!'});
});

module.exports = router;
