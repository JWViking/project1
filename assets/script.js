var getDrinks = function () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(function (response) {
        response.json().then(function (data) {
            createDrinkCards(data);
        });
    });
};

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
        //innerDivEl.innerHTML = "<p></p><button class='self-start'><i class='fa fa-heart-o></i></button>"
        var pEl = document.createElement("p");
        pEl.innerHTML = drink.strDrink // get help here!!!
        innerDivEl.appendChild(pEl);

        //create button
        var buttonEl = document.createElement("button");
        buttonEl.className = "self-start"
        innerDivEl.appendChild(buttonEl);

        //add event listener buttonEl.addEventListener();

        //create heart icon
        buttonEl.innerHTML = "<i class='fa fa-heart-o'></i>";
        //    var heartEl = document.createElement("i");
        //    heartEl.className = "fa fa-heart-o";
        //    buttonEl.appendChild(heartEl);

    };





   


};
