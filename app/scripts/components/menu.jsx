var React = require('react');
var Backbone = require('backbone');

var menuItems = require('../menu-items/data.js').menuItems;
var MenuItemCollection = require('../models/thai-models.js').MenuItemCollection;


var Menu = React.createClass({
    handleClick: function(item){
      this.props.addToCart(item);
    },
    render: function(){
      var self = this;

      var menuHtml = this.props.menuList.map(function(item, index){
        return (
          <div className="menu-item well" key={item.id + index}>
            <h4>{item.title}</h4>
            <section>
              {item.description}
            </section>
            <h5>{item.price.toFixed(2)}</h5>
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
  getInitialState: function(){
    return{
      collection: new MenuItemCollection()
      }
    },
    handleSubmit: function(e){
      e.preventDefault();
        this.state.collection.create(this.props.orderList);
    },
    render: function(){
      var orderHtml = this.props.orderList.map(function(item, index){
        return(
          <div key={item.id + index}>
            <h6>Item: {item.title}</h6>
            <h6>Price: {item.price.toFixed(2)}</h6>
            <hr/>
          </div>
        )
      });
      var priceArray =  this.props.orderList.map(function(value){
        return value.price;
      });

      var totalOrderPrice = priceArray.reduce(function(num1, num2){
        return num1 + num2;
      },0);

      console.log(totalOrderPrice);
        return(
          <div className="col-md-3">
            <div className="order">
              <h2>Your Order</h2>
                <div className="order-holder">
                  {orderHtml}
                  <h6>Order Total: {totalOrderPrice.toFixed(2)}</h6>
                  <button onClick={this.handleSubmit} className="btn btn-success" type="submit">Place Order</button>
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
