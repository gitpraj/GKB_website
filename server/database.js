var mongoose = require('mongoose');
var tunnel = require('tunnel-ssh');
//var RegisterUser = require('./models/Register.js')

// var url = 'mongodb://localhost:27017/?3t.ssh=true&3t.sshAddress=115.146.90.1711&3t.sshUsePKPassphrase=false&3t.sshPKPath=C:\Users\prajith\publicKey&3t.uriVersion=2&3t.connection.name=GKB&3t.connectionMode=direct&3t.sshUser=ubuntu&3t.sshAuthMode=privateKey&readPreference=primary&3t.sshPort=22';
// var url_temp = 'mongodb://ubuntu@115.146.90.170'
// var url_local_uri = 'mongodb://localhost:27017/?3t.uriVersion=2&3t.connectionMode=direct&readPreference=primary/mydb'
// var url_local = 'mongodb://localhost/mydb'
// mongoose.connect(url_temp, function(err) {
//   if (err) {
//     console.log("database not conencted");
//   } else {
//     console.log("");
//     console.log("database connected");
//   }
//
//   // let temp = {
//   //   firstname: "Prajith",
//   //   email: "prajith.manian@gmail.com",
//   //   password: "abcdefgh"
//   // };
//   //
//   // RegisterUser.create(temp, (err, data) => {
//   //                 //callback(null, data);
//   //                 if (err) {
//   //                   console.log("error while saving");
//   //                 } else {
//   //                   console.log("done saving");
//   //                 }
//   // });
// });

var config = {
    username:"ubuntu",
    host:"115.146.90.170",
    agent : process.env.SSH_AUTH_SOCK,
    privateKey:require('fs').readFileSync('C:/Users/prajith/publicKey'),
    port:22,
    dstPort:27017,
};

var server = tunnel(config, function (error, server) {
    if(error){
        console.log("SSH connection error: " + error);
    }
    mongoose.connect('mongodb://localhost:27017/mydb', function(err) {
      if (err) {
          console.log("database not conencted");
        } else {
          console.log("database connected");
        }
    });
});
