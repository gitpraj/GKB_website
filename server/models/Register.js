var mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/?3t.ssh=true&3t.sshAddress=115.146.90.170&3t.sshUsePKPassphrase=false&3t.sshPKPath=C:\Users\prajith', function() {
//   console.log("database connected");
// });

var RegisterSchema = new mongoose.Schema({
  firstname: String,
  email: String,
  password: String
});

var Register = mongoose.model("Register", RegisterSchema, 'registers');

module.exports = Register;
