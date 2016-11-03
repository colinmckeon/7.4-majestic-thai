var Backbone = require('backbone');

var MenuItem = Backbone.Model.extend({
  idAttribute: '_id'
});

var MenuItemCollection = Backbone.Collection.extend({
  model: MenuItem,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/colinorder'
});


module.exports = {
  MenuItem: MenuItem,
  MenuItemCollection: MenuItemCollection
};
