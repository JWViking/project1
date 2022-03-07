// autocomplete variables
var foodCatNames = [];
var foodIngNames = [];
var foodAreaNames = [];
var drinkCatNames = [];

//modal variables
let modal = document.getElementById("my-modal");
let openModalBtn = document.getElementById("open-btn");
var fdOptEl = document.getElementById("fd-btns");
let foodModalBtn = document.getElementById("food-btn");
let drinkModalBtn = document.getElementById("drink-btn");
var foodOptEl = document.getElementById('food-opt');
var drinkOptEl = document.getElementById('drink-opt');
var modalDescEl = document.getElementById('modal-desc');
var foodCatContainerEl = document.getElementById('food-cat-container');
var foodCatInputEl = document.getElementById('food-cat-input');
var foodIngContainerEl = document.getElementById('food-ing-container');
var foodIngInputEl = document.getElementById('food-ing-input');
var foodAreaContainerEl = document.getElementById('food-area-container');
var foodAreaInputEl = document.getElementById('food-area-input');
var drinkCatContainerEl = document.getElementById('drink-cat-container');
var drinkCatInputEl = document.getElementById('drink-cat-input');


var foodCatModalSearch = function() {
    foodOptEl.classList.add('hidden');
    foodCatContainerEl.classList.remove('hidden');
    console.log("food function");
    //modalContainerEl.innerHTML = "";
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            if (foodCatNames.length < 1){
                for(var i=0; i < data.meals.length; i++){
                    foodCatNames.push(data.meals[i].strCategory);
                }
            }
            console.log(foodCatNames);
        });
    });
}

var foodIngModalSearch = function() {
    foodOptEl.classList.add('hidden');
    foodIngContainerEl.classList.remove('hidden');
    console.log("food function");
    //modalContainerEl.innerHTML = "";
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            if (foodIngNames.length < 1){
                for(var i=0; i < data.meals.length; i++){
                    foodIngNames.push(data.meals[i].strIngredient);
                }
            }
            console.log(foodIngNames);
        });
    });
}

var foodAreaModalSearch = function() {
    foodOptEl.classList.add('hidden');
    foodAreaContainerEl.classList.remove('hidden');
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
            if (foodIngNames.length < 1){
                for(var i=0; i < data.meals.length; i++){
                    foodAreaNames.push(data.meals[i].strArea);
                    console.log(data.meals[i].strArea);
                }
            }
            console.log(foodAreaNames);
        });
    });
}


var drinkModalSearch = function() {
    drinkOptEl.classList.add('hidden');
    drinkCatContainerEl.classList.remove('hidden');
    console.log("drink function");
    //modalContainerEl.innerHTML = "";
    var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            
            if (drinkCatNames.length < 1){
                for(var i=0; i < data.drinks.length; i++){
                    drinkCatNames.push(data.drinks[i].strCategory);
                }
            }
        });
    });
}
var resetModal = function() {
    modal.style.display = "none";
    fdOptEl.classList.remove('hidden');
    foodOptEl.classList.add('hidden');
    drinkOptEl.classList.add('hidden');
    modalDescEl.classList.remove('hidden');
    foodCatContainerEl.classList.add('hidden');
    foodAreaContainerEl.classList.add('hidden');
    drinkCatContainerEl.classList.add('hidden');
}



//auto complete for categories
$(function() {
    $('#food-cat-input').autocomplete({
        minLength: 1,
        source: foodCatNames
    });
});
$(function() {
    $('#food-ing-input').autocomplete({
        minLength: 1,
        source: foodIngNames
    });
});
$(function() {
    $('#food-area-input').autocomplete({
        minLength: 1,
        source: foodAreaNames
    });
});

$(function() {
    $('#drink-cat-input').autocomplete({
        minLength: 1,
        source: drinkCatNames
    });
});



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

var getLetterMeals = function () {
    fetch("https:www.themealdb.com/api/json/v1/1/search.php?f=b").then(function (response) {
        response.json().then(function (data) {
            createMealCards(data);
        });
    });
};

var getCategoryMeals = function () {
    var category = foodCatInputEl.value;
    console.log(foodCatInputEl.value);
    fetch("https:www.themealdb.com/api/json/v1/1/filter.php?c=" + category).then(function (response) {
        response.json().then(function (data) {
            createMealCards(data);
        });
    });
    foodContEl.innerHTML = "";
    foodCatInputEl.value = "";
};

var getMainIngredientMeals = function () {
    var ingredient = foodIngInputEl.value;
    fetch("https:www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient).then(function (response) {
        response.json().then(function (data) {
            createMealCards(data);
        });
    });
    foodContEl.innerHTML = "";
    foodIngInputEl.value = "";
};

var getAreaMeals = function () {
    var area = foodAreaInputEl.value;
    console.log(area);
    fetch("https:www.themealdb.com/api/json/v1/1/filter.php?a=" + area).then(function (response) {
        response.json().then(function (data) {
            createMealCards(data);
        });
    });
    foodContEl.innerHTML = "";
    foodAreaInputEl.value = "";
};

var getDefaultMeals = function () {
    for (let step = 0; step<10; step++) {
        fetch("https:www.themealdb.com/api/json/v1/1/random.php").then(function (response) {
            response.json().then(function (data) {
                createMealCards(data);
            });
        });
    };
};

//getDefaultMeals();

var createMealCards = function (data) {

    var container = document.getElementById("food-container");

    for (const meal of data.meals) {
        console.log(meal);
        //create card div
        var divEl = document.createElement("div");
        divEl.className = "card";
        container.appendChild(divEl);

        //create image element
        var imgEl = document.createElement("img");
        imgEl.src = meal.strMealThumb
        divEl.appendChild(imgEl);

        //create inner div
        var innerDivEl = document.createElement("div");
        divEl.appendChild(innerDivEl);

        //create inner div <p>
        //innerDivEl.innerHTML = "<p></p><button class='self-start'><i class='fa fa-heart-o></i></button>"
        var pEl = document.createElement("p");
        pEl.innerHTML = meal.strMeal
        innerDivEl.appendChild(pEl);

        //create button
        var buttonEl = document.createElement("button");
        buttonEl.className = "self-start";
        innerDivEl.appendChild(buttonEl);
        var mealId = meal.idMeal;
        console.log(mealId);

        //add event listener buttonEl.addEventListener();

        //create heart icon
        buttonEl.innerHTML = "<i class='fa-solid fa-heart'></i>";
        //    var heartEl = document.createElement("i");
        //    heartEl.className = "fa fa-heart-o";
        //    buttonEl.appendChild(heartEl);
    };
};

// Fetch drinks from thecocktaildb API
var getDrinks = function () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then(function (response) {
        response.json().then(function (data) {
            createDrinkCards(data);
        });
    });
};

// Fetch drink function
//getDrinks();

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


// We want the modal to open when the Open button is clicked
openModalBtn.onclick = function() {
    console.log("open modal")
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        resetModal();
    }
}
//modal event listeners
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'food-btn') {
        modalDescEl.classList.add('hidden');
        foodOptEl.classList.remove('hidden');
        fdOptEl.classList.add('hidden');
    } else if (e.target && e.target.id === 'drink-btn') {
        modalDescEl.classList.add('hidden');
        drinkOptEl.classList.remove('hidden');
        fdOptEl.classList.add('hidden');
    } else if (e.target && e.target.id === 'all-drinks') {
        resetModal();
        getDrinks();
        console.log("all drinks");
        //Drink button functions
    } else if (e.target && e.target.id === 'cat-drinks') {
        console.log("cat drinks");
        drinkModalSearch();
    } else if (e.target && e.target.id === 'sub-drink-cat') {
        resetModal();
        console.log("submit drink cateorgy");
    } else if (e.target && e.target.id === 'ingredient-drinks') {
        console.log("ingredient drinks");
        // food button functions
    } else if (e.target && e.target.id === 'area-food') {
        foodAreaModalSearch();
        console.log("all food");
    } else if (e.target && e.target.id === 'cat-food') {
        console.log("cat food");
        foodCatModalSearch();
    } else if (e.target && e.target.id === 'sub-food-cat') {
        resetModal();
        getCategoryMeals();
        console.log("submit food cateorgy");  
    } else if (e.target && e.target.id === 'sub-food-ing') {
        resetModal();
        getMainIngredientMeals();
        console.log("submit food cateorgy");  
    } else if (e.target && e.target.id === 'sub-food-area') {
        resetModal();
        getAreaMeals();
        console.log("submit food area");  
    }else if (e.target && e.target.id === 'ingredient-food') {
        // call function to return one food item based on name
        foodIngModalSearch();
        console.log("ingredient food");
    } else if (e.target && e.target.id === 'close-modal') {
        console.log("close modal");
        resetModal();
    } 
})

//favoritesBtn.addEventListener("click", retrieveRecipes);
