var cat1Counter = 0;
var cat2Counter = 0;

$(document).ready(function() {
    //Append text
    $('.cat1').text('Cat 1');
    $('.cat2').text('Cat 2');

    //Listeners for clicking
    $('.cat-img1').click(function() {
        cat1Counter++;
        $('.cat1-count').text('Current count for cat 1 is: ' + cat1Counter);
    });

    $('.cat-img2').click(function() {
        cat2Counter++;
        $('.cat2-count').text('Current count for cat 2 is: ' + cat2Counter);
    });
});
