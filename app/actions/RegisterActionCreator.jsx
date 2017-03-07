var dispatcher = require('./../dispatcher.js');

module.exports = {
    add: function(user) {
        dispatcher.dispatch({
            payload: user,
            type: "register-user"
        })
    }
}
