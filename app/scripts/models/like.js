var Backbone = require('backbone');
var $ = require('jquery');

var ButtonModel = Backbone.Model.extend({
  defaults: {
    "quantity": 0,
    "buttonLabel": " like"
  },
    refresh: function(){
      var quantity = this.get("quantity") + 1;
      this.set("quantity", quantity)
      return quantity + this.get("buttonLabel");
    }
})


module.exports = {
  'ButtonModel': ButtonModel
}
