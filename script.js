$(document).ready(function () {
    var beers = [];

    function addBeer (name, category, rating) {
        beers.push({'name': name, 'category': category, 'rating': rating});
    }

    $('.post-beer').click(function () {
        addBeer($('.beer-input').val(), $('.category-input').val(), $('.rating-input').val());
        renderBeers();
    });

    function renderBeers () {
        $('.beers-list').find('li').remove();
        for (var i=0; i<beers.length; i++) {
            $('.beers-list').append('<li>Beer Name: ' + beers[i].name + ' Beer Category: ' + beers[i].category + ' Beer Rating: ' + beers[i].rating + '</li>');
        }
    }

    function apppendListItems(beerArray ,text) {
        for (var i=0; i<beers.length; i++) {
            $('.beers-list').append('<li>Beer Name: ' + beers[i].name + ' Beer Category: ' + beers[i].category + ' Beer Rating: ' + beers[i].rating + '</li>');
        }  
        $('.sort-beers').html(text);
    }

    var isNotSortedFromBest = true;
    $('.sort-beers').click(function () {
        $('.beers-list').find('li').remove();
        if (isNotSortedFromBest) {
            apppendListItems(beers.sort(function (a, b) {return b.rating - a.rating}), 'Sort beers from worst to best'); 
            isNotSortedFromBest = false;
        } else {
            apppendListItems(beers.sort(function (a, b) {return a.rating - b.rating}), 'Sort beers from Best to worst'); 
            isNotSortedFromBest = true;
        } 
    });
});