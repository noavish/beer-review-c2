$(document).ready(function () {
    var beers = [];

    function addBeer (name, category, rating) {
        var beerObj = {};
        beerObj.name = name;
        beerObj.category = category;
        beerObj.rating = rating;
        beers.push(beerObj);
    }

    $('.post-beer').click(function () {
        // var beerName = $('.beer-input').val();
        // var beerCategory = $('.category-input').val();
        // addBeer(beerName, beerCategory);
        addBeer($('.beer-input').val(), $('.category-input').val(), $('.rating-input').val());
        renderBeers();
    });

    function renderBeers () {
        $('.beers-list').find('li').remove();
        for (var i=0; i<beers.length; i++) {
            $('.beers-list').append('<li>Beer Name: ' + beers[i].name + ' Beer Category: ' + beers[i].category + ' Beer Rating: ' + beers[i].rating + '</li>');
        }
    }

    var isSortedFromBest = false;
    $('.sort-beers').click(function () {
        $('.beers-list').find('li').remove();
        if (!isSortedFromBest) {
            console.log(isSortedFromBest);
            beers.sort(function (a, b) {return b.rating - a.rating});
            for (var i=0; i<beers.length; i++) {
                $('.beers-list').append('<li>Beer Name: ' + beers[i].name + '  Beer Category: ' + beers[i].category + '  Beer Rating: ' + beers[i].rating + '</li>');
            }
            $('.sort-beers').html('Sort beers from worst to best');
            isSortedFromBest = true;
        } else {
            console.log(isSortedFromBest);
            beers.sort(function (a, b) {return a.rating - b.rating});
            for (var i=0; i<beers.length; i++) {
                $('.beers-list').append('<li>Beer Name: ' + beers[i].name + ' Beer Category: ' + beers[i].category + ' Beer Rating: ' + beers[i].rating + '</li>');
            }  
            $('.sort-beers').html('Sort beers from Best to worst');      
            isSortedFromBest = false;
        } 
    });
});