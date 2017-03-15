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
        success: function(response){
            console.log("Reached responses");
            console.log("This is the response "+ JSON.stringify(response));
            if(response=="Fail"){
                window.location = '/login';
            } else{
                var user = response.email;
                console.log("This is the response "+ user);
                window.location = '/initialpage/'+user;
            }
        },
        error:error

      })
    })
  }
}
