var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var Menu = require('./components/menu.jsx').Menu;
require('./router');

// Waits for DOM to be ready

$(function(){
  // Triggers router
  Backbone.history.start();

  // ReactDOM.render(
  //   React.createElement(Menu),
  //   document.getElementById('app')
  // );

});
