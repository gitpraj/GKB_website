var $ = require('jquery');

module.exports = {
  get: function(url) {
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        dataType:"json",
        success:success,
        error:error
      })
    })
  },
  post: function(url, data) {
    return new Promise(function(success, error) {
      $.ajax({
        url: url,
        type:"POST",
        data:data,
        success: function(data) {
          console.log("success in reaching");
          console.log("data: " + data);
          window.location="/initialpage";
        },
        error:error
      })
    })
  }
}
