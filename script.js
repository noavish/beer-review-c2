function BeerReviewApp () {
    var beers = [];
    var sortingOrder = 1;
    var $beerList = $('.beers-list');
    
    var addBeer = function (name, category, rating) {
        beers.push({ name: name, category: category, rating: rating });
    }

    var sortingBeers = function (a, b) {
        return ((b.rating - a.rating) * sortingOrder);
    }

    var sortBeers = function () {
        beers.sort(sortingBeers);
        sortingOrder *= -1;
    }

    var renderBeers = function () {
        $beerList.find('li').remove();
        for (var i = 0; i < beers.length; i++) {
            $beerList.append('<li>Beer Name: ' + beers[i].name + ' Beer Category: ' + beers[i].category + ' Beer Rating: ' + beers[i].rating + '</li>');
        }
    }

    return {
        addBeer: addBeer, 
        updateBeers: renderBeers, 
        sortBeers: sortBeers
    };
}

var beerReviewApp = BeerReviewApp();

$('.post-beer').click(function() {
    beerReviewApp.addBeer($('.beer-input').val(), $('.category-input').val(), $('.rating-input').val());
    beerReviewApp.updateBeers();
});

$('.sort-beers').click(function () {
    beerReviewApp.sortBeers();
    beerReviewApp.updateBeers();
    $(this).toggleClass('worst-to-best');
    $(this).toggleClass('best-to-worst');
});