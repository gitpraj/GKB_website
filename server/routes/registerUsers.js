module.exports = function(app) {

  var RegisterUser = require('./../models/Register.js');

  app.route('/api/registerUsers')
  .get(function(req, res) {
      res.send("hahaha");
  })
  .post(function(req, res) {
     var item = req.body;
     console.log("item:req body " + JSON.stringify(item))
     var temp = {
       firstname: item.name,
       email: item.email,
       password: item.password
     };
     console.log("temp: " + temp);
     RegisterUser.create(temp, function(err, data) {
                     //callback(null, data);
                     console.log("wtf is happeneing");
                     if (err) {
                       console.log("error while saving");
                     } else {
                       console.log("done saving");
                        // RegisterUser.findByIdAndUpdate(data._id, {
                        //   email: "adadad@gmail.com"
                        //   }, {
                        //     new: true
                        //   }, function(err, data) {
                        //       if (err) {
                        //         console.log("did not update after create");
                        //       } else {
                        //         console.log("update after create");
                        //       }
                        // });
                    }
                     res.status(300).send();
     });


  })


  app.route('/api/login')
  .get(function(req,res){
      res.send("login page");
  })
  .post(function(req,res){
      console.log("Logging in");
      var user = {
          email: req.body.email,
          password: req.body.password
      };

      console.log(user.email + "," + user.password);
      RegisterUser.findOne(user, function(err,data){
          if(err){
              console.log(err);
          }else if (!data) {
              console.log("incorrect details");
              //Direct to login
              res.send("Fail");
          }else{
              console.log("Successfully Logged in");
              //Direct to homepage
              res.json({email: user.email});
          }
      })
  })
}
