var Backbone = require('backbone');

var MenuItem = Backbone.Model.extend({
  idAttribute: '_id'
});

var MenuItemCollection = Backbone.Collection.extend({
  model: MenuItem,
  url: ''
});


module.exports = {

};
