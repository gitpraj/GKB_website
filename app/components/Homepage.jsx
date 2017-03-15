var React = require('react');
var addons = require('react-addons');
var ReactDOM = require('react-dom');
var cssStyle = require('./styles.css');
var action = require('./../actions/RegisterActionCreator.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var Image = require('react-image');

//console.log(this.props);

module.exports = React.createClass ({
    onClickButton: function(){
        alert("Help");
    },
    logoutClicked : function(){
        console.log("User logging out");
        browserHistory.push('/login');
    },
    render: function() {
        return(
            <div>
                <h2>Hi!</h2>
                <div className ="userinfo"> {this.props.params.id}<br></br><span className="logoutBtn" onClick={this.logoutClicked}>logout</span></div>
                <input className="searchbox" type = "text" placeholder ="Enter address, keywords..."></input>
                <input type="image" className="submitimg" src="/search-icon.png" width="40px" height="20px"></input>
                <button type="submit" className ="helpbutton" onClick={this.onClickButton}>Help<img src ="/help-icon.png" width="20px" height="20px" className="helpimg"></img></button>
            </div>
        );
}
});
