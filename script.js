$(document).ready(function () {
    var beers = [];
    var sortingOrder = 1;
    
    function addBeer(name, category, rating) {
        beers.push({ name: name, category: category, rating: rating });
    }

    function sortingBeers (a, b) {
        return ((b.rating - a.rating) * sortingOrder);
    }

    function renderBeers() {
        $('.beers-list').find('li').remove();
        for (var i = 0; i < beers.length; i++) {
            $('.beers-list').append('<li>Beer Name: ' + beers[i].name + ' Beer Category: ' + beers[i].category + ' Beer Rating: ' + beers[i].rating + '</li>');
        }
    }

    $('.post-beer').click(function () {
        addBeer($('.beer-input').val(), $('.category-input').val(), $('.rating-input').val());
        renderBeers();
    });

    $('.sort-beers').click(function () {
        beers.sort(sortingBeers);
        renderBeers();
        sortingOrder *= -1;
        $(this).toggleClass('worst-to-best');
        $(this).toggleClass('best-to-worst');
    });
});