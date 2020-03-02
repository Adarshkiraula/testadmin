

var express = require('express');
var router = express.Router();

const commonController=require('../controller/commonController');

/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('index.html');
//});
// router.get('/',commonController.admin);

// router.post('/register',commonController.adminRegister);

// router.post('/login',commonController.adminLogin);



/* GET Route */
router.get('/',function(req,res){
  res.render('login.html');
});



 router.get('/adduser',function(req,res){
  
  res.render('userregister.html');
 });

 router.get('/addsubadmin',function(req,res){
  
  res.render('subadminregister.html');
});
//router.post('/register',commonController.register);
router.post('/registeruser',commonController.registeruser);

 router.post('/registersubadmin',commonController.registersubadmin);

router.post('/login',commonController.login);






module.exports = router;





