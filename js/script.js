var cat1Counter = 0;
var cat2Counter = 0;

var catName = ["cat1", "cat2", "cat3", "cat4", "cat5"];

var Cat = function(input){
  this.print = input;
  this.count =0;
};

/*
Cat.prototype.event = function(src){
  this.addEventListener('click', function() {
      $('cat-img').attr('src', src);
  });
};

*/

Cat.prototype.IncreaseCount = function(){
  this.count++;
};

Cat.prototype.returnCount = function(){
  return this.count;
};

Cat.prototype.returnPrint = function(){
  return this.print;
};

$(document).ready(function() {
    //main loop for all the cats
    for (var i = 0; i < catName.length; i++) {
        var elem = '<li class ="cat' + i + '-list">' + catName[i] + '</li>';
        $('.cat-list').append(elem);
      };

    //add event Listeners
    var Cats = document.getElementsByTagName("li");
    console.log(Cats);
    for(var i = 0; i < Cats.length; i++){
      Cats[i].addEventListener('click', function() {
          $('cat-img').attr('src', 'img/cat' + i +'.jpg');
      });
    };

      console.log(Cats);

});
