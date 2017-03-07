var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function RegisterUserStore() {
    var users = [];

    // helper.get("api/registerUsers")
    // .then(function(data) {
    //   console.log("helper.get");
    //   triggerListeners();
    // })

    var listeners = [];

    function getUser() {
      return users;
    }

    function addRegisterUser(user) {
      users.push(user);
      triggerListeners();
      console.log("Wer are herereere");
      helper.post("api/registerUsers", user)
    }

    function onChange(listener) {
      listeners.push(listener);
    }

    function triggerListeners() {
      listeners.forEach(function(listener) {
          listener(users);
      })
    }

    dispatcher.register(function(event) {
      var type = event.type;
      if (type == 'register-user') {
          addRegisterUser(event.payload);
      }
    })

    return {
      getUser: getUser,
      onChnage: onChange
    }
}

module.exports = new RegisterUserStore();
