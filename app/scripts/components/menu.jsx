var React = require('react');
var Backbone = require('backbone');

var menuItems = require('../menu-items/data.js').menuItems;


var Menu = React.createClass({
    handleClick: function(item){
      this.props.addToCart(item);
    },
    render: function(){
      var self = this;

      var menuHtml = this.props.menuList.map(function(item){
        return (
          <div className="menu-item well" key={item.id}>
            <h4>{item.title}</h4>
            <section>
              {item.description}
            </section>
            <h5>{item.price}</h5>
            <button onClick={function(){self.handleClick(item)}} className="btn btn-success" type="submit">Add Item</button>
          </div>
        )
      });
        return(
          <div className="col-md-7 col-md-offset-1">
            <div className="menu">
                <h2>Menu</h2>
                {menuHtml}

            </div>
          </div>
        )
    }
});

var Order = React.createClass({
    render: function(){
      console.log(this.props.orderList);
      var orderHtml = this.props.orderList.map(function(item){
        return(

            <h6>Item(s):</h6>
            <h6>Price:</h6>

        )
      });
        return(
          <div className="col-md-3">
            <div className="order">
              <h2>Your Order</h2>
                <div className="order-holder">
                  {orderHtml}
                  <h6>Total:</h6>
                </div>
            </div>
          </div>
        )
    }
});


var AppContainer = React.createClass({
    getInitialState: function(){
      return {
        menu: menuItems,
        order: []
      }
    },
    addToCart: function(item){
      this.state.order.push(item);
      this.setState({order: this.state.order});
    },
    render: function(){
      console.log(this.state.order);
      return(
        <div>
          <Menu menuList={this.state.menu} addToCart={this.addToCart} />
          <Order orderList={this.state.order}/>
        </div>

      )
    }
});


module.exports = {
  Menu: Menu,
  AppContainer: AppContainer
}
