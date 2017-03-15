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
//  LoginBtnClicked: function(e) {
//    console.log("Login Button Clicked");
//    browserHistory.push('/login');
//  },
  render: function() {
    return (
        <div>

                <form className="welcome">
                    <h1>Welcome</h1>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    <br></br>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="form-group">
                      <input type="submit" className="signupBtn" value="Sign Up" onClick={this.SignUpBtnClicked}>
                      </input>
                    </div>
                </form>
            
<!--
                <form className="signin">
                    <h1>LOGIN</h1>
                    <div>
                      <input type="submit" className="loginBtn" value="Login" onClick={this.LoginBtnClicked}>
                      </input>
                    </div>
                </form>
-->
            <form className= "signin">
                    <h1>LOGIN</h1>
                    <div className="form-group">
                          <input type="text" className="form-control" placeholder="Username/Email"></input>
                        </div>

                    <br></br>
                    <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password"></input>
                        </div>

                    
                     <div className="form-group">
                            <a className="forgotPwdBtn">Forgot Password?</a>
                        </div>
                    
                        <div className="form-group">
                          <br></br>
                          <input type="submit" className="loginBtn" value="Login">
                          </input>
                        </div>

                       
                </form>

        </div>
    )
  }
})
