var catCounter = 0;

$('.cat-img').click(function(e){
  catCounter++;
  $('.cat-count').text('Current count is: ' + catCounter);
})
