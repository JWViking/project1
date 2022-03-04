
//Declaring name of favorites button
var favoritesBtn = document.getElementById("favs-btn")
// Declaring food container name
var foodContEl = document.getElementById("food-container");
// Laying out each card for testing purposes
var cardEl = $(".card");
var imgEl = $("img");
var recipeNameEl = $("p")
//Declaring name of hearts
var heartRecipeEl = $(".self-start");


// array for saving recipe url's to Local Storage
var favFood = JSON.parse(localStorage.getItem("food-URL")) || [];
var favDrinks = JSON.parse(localStorage.getItem("drink-URL")) || [];

// how do I get food into the food array/ drinks into the drink array?
// Refigure how to get the ID from each card to save them
// how to pass the data into the new function

// Save URLs of recipes saved
// function getFavFoods(){

//     var apiUrl = "www.themealdb.com/api/json/v1/1/lookup.php?i="+ favFood[i].idMeal;


// };

// function getFavDrinks(){
//     var apiUrl = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + favDrinks[i].idDrink;
// };


$(heartRecipeEl).on("click",function(){
    var selectedRecipe = $(this).parents();
    var selectedImage = $(selectedRecipe).siblings("img");
    // imgURL represents the link
    var imgUrl = selectedImage.attr('src');

    favRecipies.push(imgUrl);
    
    localStorage.setItem("recipe-URL", JSON.stringify(favRecipies));

    console.log(imgUrl);
})


function displayFavorites(){


    foodContEl.innerHTML = "";

    for(let i=0; i<favRecipies.length; i++){
        // var recipeimage = ; will be finished after data is passed in
        // var recipeTitle = ;       
        
        var favCard = document.createElement("div");
        favCard.setAttribute("class", "card");

        var infoHouse = document.createElement('div');

        var recipeimageEl = document.createElement('img');
        recipeimageEl.setAttribute("src", recipeimage);
        
        var recipeTitleEl = document.createElement('p')
        recipeTitleEl.textContent = recipeTitle;

        var recipeButtonEl = document.createElement('button')
        recipeButtonEl.innerHTML = ("class='self-start'><i class='fa fa-heart-o'></i>");

        
        
        favCard.appendChild(recipeimageEl);
        infoHouse.appendChild(recipeTitleEl);
        infoHouse.appendChild(recipeButtonEl);
        favCard.appendChild(infoHouse);

        foodContEl.appendChild(favCard);



    }
};

// favoritesBtn.addEventListener("click", getRecipes);


// var getMeals = function () {
//     var searchAll = "abcdefghijklmnopqrstuvwxyz"

//     for(i=0; i<searchAll.length; i++) {
//         console.log(searchAll.charAt(i));
//         var key = searchAll.charAt(i);
//         var url = "https:www.themealdb.com/api/json/v1/1/search.php?f=" + key;
//         console.log("key",key);
//         console.log(url);


//         fetch("https:www.themealdb.com/api/json/v1/1/search.php?f=" + key).then (function(response) {
//             response.json().then(function(data) {
//                 createMealCards(data);
//             });
//         });
//     };
// };

var getMeals = function () {
    fetch("https:www.themealdb.com/api/json/v1/1/search.php?f=a").then(function (response) {
        response.json().then(function (data) {
            createMealCards(data);
        });
    });
};

getMeals();

var createMealCards = function (data) {
    console.log("here");

    console.log(data);

    var container = document.getElementById("food-container");

    for (const meal of data.meals) {
        console.log(meal);
        //create card div
        var divEl = document.createElement("div");
        divEl.className = "card";
        container.appendChild(divEl);

        //create image element
        var imgEl = document.createElement("img");
        imgEl.src = meal.strMealThumb //get help here!!!
        divEl.appendChild(imgEl);

        //create inner div
        var innerDivEl = document.createElement("div");
        divEl.appendChild(innerDivEl);

        //create inner div <p>
        //innerDivEl.innerHTML = "<p></p><button class='self-start'><i class='fa fa-heart-o></i></button>"
        var pEl = document.createElement("p");
        pEl.innerHTML = meal.strMeal // get help here!!!
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

