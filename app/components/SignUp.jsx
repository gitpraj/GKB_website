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
    return {firstname:"", email:"", password:""};
  },
  // constructor: function() {
  //   this.state = { firstname: "" };
  //   this.onChange = this.onChange.bind(this)
  // },
  handleFirstName: function(e) {
    this.setState({firstname: e.target.value});
  },
  handleEmail: function(e) {
    this.setState({email: e.target.value});
  },
  handlePassword: function(e) {
    this.setState({password: e.target.value});
  },
  addUser: function(e) {
    e.preventDefault();
    console.log("adding/register user: ", this.state.firstname);
    action.add({
      name: this.state.firstname,
      email: this.state.email,
      password: this.state.password
    })
    browserHistory.push('/login');
    // let temp = {
    //   firstname: this.state.firstname,
    //   email: "prajith.manian@gmail.com",
    //   password: "abcdefgh"
    // };
    // schema.create(temp, (err, data) => {
    //                 //callback(null, data);
    //                 if (err) {
    //                   console.log("error while saving");
    //                 } else {
    //                   console.log("done saving");
    //                 }
    // });

  },
  render: function(){
    return (
        <div>

                <form onSubmit={this.addUser}>
                    <h1>
                      Sign Up
                    </h1>

                    <div className="form-group">
                      <label>
                        First Name
                        <br></br>
                      </label>
                      <input type="text" className="form-control" value={this.state.firstname} onChange={this.handleFirstName}></input>
                    </div>

                    <div className="form-group">
                      <label>
                        Email
                        <br></br>
                      </label>
                      <input type="email" className="form-control" value={this.state.email} onChange={this.handleEmail}></input>
                    </div>

                    <div className="form-group">
                      <label>Password
                        <br></br>
                      </label>
                      <input type="password" className="form-control" value={this.state.password} onChange={this.handlePassword}></input>
                    </div>

                    <div className="form-group">
                      <br></br>
                      <input type="submit" className="signUpBtn" value="Register">
                      </input>
                    </div>
                </form>

        </div>
    )
  }
})
