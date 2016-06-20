var Backbone = require('backbone');
var models = require('./models/like');
var $ = require('jquery');

console.log(models.ButtonModel);

//Backbone models
var likey = new models.ButtonModel({'quantity': 0, 'buttonLabel': ' like'});

// likey.refresh();
// console.log(likey.refresh());



$('.like-button').on('click', function(){
  $('.like-button').text(likey.refresh());
});
$('.like-button').text(likey.get('quantity') + " Likes")
//$('.like-button').textContent = 'Like: ' + likey.refresh();
