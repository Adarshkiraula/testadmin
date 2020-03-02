const model = require('../model/user');
const key =require('../key');
// const jwt =require('jsonwebtoken');
const nodemailer = require("nodemailer");
var generator = require('generate-password');

//const sha1 = require('sha1');
var msg = "";

 module.exports = {
     login,registeruser,registersubadmin
     //register
 }

let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'adarshkirola5@gmail.com',
        password:'adarshm1280'
    }
});
function tmail(email,password)
{
    let mailOptions={
        from:'adarshkirola5@gmail.com',
        to:'munjalchirag7500@gmail.com',
        subject:'Thanku for register',
        html:'your email is'+email +'your password is' +password
    }
    transporter.sendMail(mailOptions,function(err,info)
    {
        if(err)
        console.log(err);
        else
        console.log(info);
    })
}
// function register(req, res) {
//     let name=req.body.name;
//     let age=req.body.age;
//     let email = req.body.email;
//     let password = req.body.password;
//     console.log(name);
//     console.log(age);
//     console.log(email);
//     console.log(password);
    
//     let udata = new model({'name':name,'age':age, 'email': email, 'password': password })

//     udata.save(function (err,data) {
//         if (err) {
//              msg = err
//             // res.render('register.html');
//             console.log(err);
//             res.render('register.html',{msg});
//         }
//         else {
//              msg = "Registered Succesfully"
//               res.render('login.html');
//             // res.json("Registered");
//             console.log(data);
//         }
//     })

// }

function login(req,res)
{
    let email = req.body.email;
    var pass = req.body.pass;
   
    console.log(email);
    console.log(pass);
    model.findOne({ email: email }, function (err, data) {

        console.log(data);
        if (err) {

            console.log(err);
        }

        else if (data == null) {
            res.send("User Not Found")

        }
        else {
            // test a matching password
            data.comparePassword(pass, function (err, isMatch) {
                if (err) throw err;
                console.log("Password Verified", isMatch);
                res.render('index.html'); // -&gt; Password123: true
                if (isMatch) {
                    
                }

                else {

                    res.send("Wrong Password")
                }
            });


        }
    });



}
  


function registersubadmin(req,res)
{
    let name=req.body.name;
    let age=req.body.age;
    let email = req.body.email;
    let password = generator.generate({length:10
    });
    console.log(name);
    console.log(age);
    console.log(email);
    console.log(password);
    
    let udata = new model({'name':name,'age':age, 'email': email, 'password': password,'role':'subadmin' })

    udata.save(function (err,data) {
        if (err) {
             msg = err
            // res.render('register.html');
            console.log(err);
            res.render('subadminregister.html',{msg});
        }
        else {
             msg = "Registered Succesfully"
            
             tmail(email,password);
             console.log(data);
            res.render('index.html');
        }
    })
}
function registeruser(req, res) {
    let name=req.body.name;
    let age=req.body.age;
    let email = req.body.email;
    let password = generator.generate({length:10
    });
    console.log(name);
    console.log(age);
    console.log(email);
    console.log(password);
    
    let udata = new model({'name':name,'age':age, 'email': email, 'password': password,'role':'user' })

    udata.save(function (err,data) {
        if (err) {
             msg = err
            // res.render('register.html');
            console.log(err);
            res.render('userregister.html',{msg});
        }
        else {
             msg = "Registered Succesfully"
              
            // res.json("Registered");
            console.log(data);
            res.render('index.html');
        }
    })

}