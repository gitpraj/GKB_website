// var React = require('react/addons');
var React = require('react');
var addons = require('react-addons');
var ReactDOM = require('react-dom');
var cssStyle = require('./styles.css');
var action = require('./../actions/RegisterActionCreator.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
//var schema = require('./../../server/database.js');

module.exports = React.createClass({
  getInitialState:function(){
    return {email:"", password:""};
  },
  SignUpBtnClicked: function(e) {
    console.log("Sign Up Button Clicked");
    browserHistory.push('/signup');
  },
  LoginBtnClicked: function(e) {
    console.log("Login Button Clicked");
    browserHistory.push('/login');
  },
  render: function() {
    return (
        <div>

                <form className="welcome">
                    <h1>Welcome</h1>
                    <h2>{this.props.params.id}</h2>
                    <div className="form-group">
                      <input type="submit" className="loginBtn" value="Sign Up" onClick={this.SignUpBtnClicked}>
                      </input>
                    </div>
                </form>
            
                <form className="login">
                    <h1>LOGIN</h1>
                    <div>
                      <input type="submit" className="loginBtn" value="Login" onClick={this.LoginBtnClicked}>
                      </input>
                    </div>
                </form>

        </div>
    )
  }
})
