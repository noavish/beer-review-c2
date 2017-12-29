$(document).ready(function () {
    var beers = [];
    var isNotSortedFromBest = true;
    
    function addBeer(name, category, rating) {
        beers.push({ name: name, category: category, rating: rating });
    }

    $('.post-beer').click(function () {
        addBeer($('.beer-input').val(), $('.category-input').val(), $('.rating-input').val());
        renderBeers();
    });

    function renderBeers() {
        $('.beers-list').find('li').remove();
        for (var i = 0; i < beers.length; i++) {
            $('.beers-list').append('<li>Beer Name: ' + beers[i].name + ' Beer Category: ' + beers[i].category + ' Beer Rating: ' + beers[i].rating + '</li>');
        }
    }

    $('.sort-beers').click(function () {
        if (isNotSortedFromBest) {
            $('.sort-beers').html('Sort beers from worst to best');
            beers.sort(function (a, b) { return b.rating - a.rating })
            renderBeers();
            isNotSortedFromBest = false;
        } else {
            $('.sort-beers').html('Sort beers from Best to worst');
            beers.sort(function (a, b) { return a.rating - b.rating })
            renderBeers();
            isNotSortedFromBest = true;
        }
    });
});