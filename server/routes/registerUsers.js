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
}
