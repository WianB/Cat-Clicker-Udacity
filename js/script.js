var catCounter = 0;


$(document).ready(function() {
    $('.cat-img').click(function() {
        console.log("test");
        catCounter++;
        $('.cat-count').text('Current count is: ' + catCounter);
    });
});
