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
  getInitialState:function() {
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

                <form>
                    <div className="form-group">
                      <input type="submit" className="loginBtn" value="SignUp" onClick={this.SignUpBtnClicked}>
                      </input>
                      <input type="submit" className="loginBtn" value="Login" onClick={this.LoginBtnClicked}>
                      </input>
                    </div>
                </form>

        </div>
    )
  }
})
