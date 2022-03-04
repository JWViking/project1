// Fetch drinks from thecocktaildb API
var getDrinks = function () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then(function (response) {
        response.json().then(function (data) {
            createDrinkCards(data);
        });
    });
};

// Fetch drink function
getDrinks();

var createDrinkCards = function (data) {
    console.log("here");

    console.log(data);

    var container = document.getElementById("drink-container");

    for (const drink of data.drinks) {
        console.log(drink);
        //create card div
        var divEl = document.createElement("div");
        divEl.className = "card";
        container.appendChild(divEl);

        //create image element
        var imgEl = document.createElement("img");
        imgEl.src = drink.strDrinkThumb //get help here!!!
        divEl.appendChild(imgEl);

        //create inner div
        var innerDivEl = document.createElement("div");
        divEl.appendChild(innerDivEl);

        //create inner div <p>
        var pEl = document.createElement("p");
        pEl.innerHTML = drink.strDrink 
        innerDivEl.appendChild(pEl);

        //create button
        var buttonEl = document.createElement("button");
        buttonEl.className = "self-start"
        innerDivEl.appendChild(buttonEl);
    };

};
