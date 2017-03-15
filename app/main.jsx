// var React = require('react/addons');
var React = require('react');
var addons = require('react-addons');
var ReactDOM = require('react-dom');
// import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

var SignUp = require('./components/SignUp.jsx')
var LogIn = require('./components/Login.jsx')
var InitialPage = require('./components/initialPage.jsx');
var Homepage = require('./components/Homepage.jsx');

var registerUserStore = require('./stores/RegisterUserStore.jsx');

// var initial = [{
//   name:"Ice cream"
// }, {
//   name: "Biryani"
// }]

// ReactDOM.render(<SignUp />, app);
// ReactDOM.render(<Login />, app);

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/">
         <Route path = "initialPage" component = {InitialPage} />
         <Route path = "initialPage/:id" component = {Homepage} />
         <Route path = "signup" component = {SignUp} />
         <Route path = "login" component = {LogIn} />
      </Route>
   </Router>

), document.getElementById('app'));
