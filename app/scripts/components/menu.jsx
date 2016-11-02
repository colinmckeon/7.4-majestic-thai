var React = require('react');
var Backbone = require('backbone');

var menuItems = require('../menu-items/data.js').menuItems;


var Menu = React.createClass({
    render: function(){
        return(
          <div className="col-md-7 col-md-offset-1">
            <div className="menu">
                <h2>Menu</h2>

                <div className="menu-item well">
                  <h4>itemtitle</h4>
                  <section>
                    itemdescription
                  </section>
                  <h5>itemprice</h5>
                  <button className="btn btn-success" type="submit">Add Item</button>
                </div>
            </div>
          </div>
        )
    }
});

var Order = React.createClass({
    render: function(){
        return(
          <div className="col-md-3">
            <div className="order">
              <h2>Your Order</h2>
                <div className="order-holder">
                  <h6>Item(s):</h6>
                  <h6>Price:</h6>
                  <h6>Total:</h6>
                </div>
            </div>
          </div>
        )
    }
});


var AppContainer = React.createClass({
    render: function(){
      return(
        <div>
          <Menu />
          <Order />
        </div>

      )
    }
});


module.exports = {
  Menu: Menu,
  AppContainer: AppContainer
}
