var React =  require('react');
var ReactDOM = require('react-dom');
var Backbone =  require('backbone');


var Menu = require('./components/menu.jsx').Menu;
var AppContainer = require('./components/menu.jsx').AppContainer;



var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'kitchen/': 'kitchen'
    },
    index: function(){
      ReactDOM.render(
        React.createElement(AppContainer, {router: this}),
        document.getElementById('app')
      );
    }
});


var router = new AppRouter();

module.exports = router;
