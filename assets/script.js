// autocomplete variables
var foodCatNames = [];
var foodIngNames = [];
var foodAreaNames = [];
var drinkCatNames = [];
var drinkIngNames = [];

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
var drinkIngContainerEl = document.getElementById('drink-ing-container');

var alcBtn = document.getElementById('alc');
var drinkCatInputEl = document.getElementById('drink-cat-input');
var drinkIngInputEl = document.getElementById('drink-ing-input');
var favContainerEl = document.getElementById('fav-container');

var drinkContainerEl = document.getElementById("drink-container");
var foodContEl = document.getElementById("food-container");


var foodCatModalSearch = function() {
    foodOptEl.classList.add('hidden');
    foodCatContainerEl.classList.remove('hidden');
    //modalContainerEl.innerHTML = "";
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            if (foodCatNames.length < 1){
                for(var i=0; i < data.meals.length; i++){
                    foodCatNames.push(data.meals[i].strCategory);
                }
            }
        });
    });
}

var foodIngModalSearch = function() {
    foodOptEl.classList.add('hidden');
    foodIngContainerEl.classList.remove('hidden');
    //modalContainerEl.innerHTML = "";
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            if (foodIngNames.length < 1){
                for(var i=0; i < data.meals.length; i++){
                    foodIngNames.push(data.meals[i].strIngredient);
                }
            }
        });
    });
}

var foodAreaModalSearch = function() {
    foodOptEl.classList.add('hidden');
    foodAreaContainerEl.classList.remove('hidden');
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            if (foodIngNames.length < 1){
                for(var i=0; i < data.meals.length; i++){
                    foodAreaNames.push(data.meals[i].strArea);
                }
            };
        })
    })
}


var drinkCatModalSearch = function() {
    drinkOptEl.classList.add('hidden');
    drinkCatContainerEl.classList.remove('hidden');
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

var drinkIngModalSearch = function() {
    drinkOptEl.classList.add('hidden');
    drinkIngContainerEl.classList.remove('hidden');
    //modalContainerEl.innerHTML = "";
    var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            
            if (drinkCatNames.length < 1){
                for(var i=0; i < data.drinks.length; i++){
                    drinkIngNames.push(data.drinks[i].strIngredient1);
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
    foodIngContainerEl.classList.add('hidden');
    drinkCatContainerEl.classList.add('hidden');
    drinkIngContainerEl.classList.add('hidden');
    alcBtn.classList.add('hidden');
    
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

$(function() {
    $('#drink-ing-input').autocomplete({
        minLength: 1,
        source: drinkIngNames
    });
});


var getLetterMeals = function () {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b").then(function (response) {
        response.json().then(function (data) {
            createMealCards(data);
        });
    });
};

var getCategoryMeals = function () {
    var category = foodCatInputEl.value;
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category).then(function (response) {
        response.json().then(function (data) {
            createMealCards(data);
        });
    });
    foodContEl.innerHTML = "";
    foodCatInputEl.value = "";
    favContainerEl.classList.add('hidden');
};

var getMainIngredientMeals = function () {
    var ingredient = foodIngInputEl.value;
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient).then(function (response) {
        response.json().then(function (data) {
            createMealCards(data);
        });
    });
    foodContEl.innerHTML = "";
    foodIngInputEl.value = "";
    favContainerEl.classList.add('hidden');
};

var getAreaMeals = function () {
    var area = foodAreaInputEl.value;
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + area).then(function (response) {
        response.json().then(function (data) {
            createMealCards(data);
        });
    });
    foodContEl.innerHTML = "";
    foodAreaInputEl.value = "";
    favContainerEl.classList.add('hidden');
};

var getDefaultMeals = function () {
    for (let step = 0; step<10; step++) {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(function (response) {
            response.json().then(function (data) {
                createMealCards(data);
            });
        });
    };
    favContainerEl.classList.add('hidden');
};


var createMealCards = function (data) {
    foodContEl.classList.remove('hidden');
    favContainerEl.classList.add('hidden');
    drinkContainerEl.classList.add('hidden');

    var container = document.getElementById("food-container");

    for (const meal of data.meals) {
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
        var pEl = document.createElement("p");
        pEl.innerHTML = meal.strMeal
        innerDivEl.appendChild(pEl);

        //create button
        var buttonEl = document.createElement("button");
        buttonEl.className = "self-start";
        
        innerDivEl.appendChild(buttonEl);

        var mealId = meal.idMeal;
        buttonEl.setAttribute('id', 'fav-food-button');
        buttonEl.setAttribute('data-id', mealId);
        buttonEl.classList.add('w-1/2', 'h-14', 'm-1', 'bg-red-900', 'hover:bg-red-600', 'text-white', 'text-sm', 'font-bold', 'py-2', 'px-4', 'rounded');
        buttonEl.textContent = 'Add to Favorites';
    };
};



getCategoryDrinks = function () {
    var category = drinkCatInputEl.value;
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + category).then(function (response) {
        response.json().then(function (data) {
        createDrinkCards(data);
        });
    });
    drinkCatInputEl.value = "";
}

// https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
getAlcoholDrinks = function (alc) {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" + alc).then(function (response) {
        response.json().then(function (data) {
        createDrinkCards(data);
        });
    });
}

// https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka
getIngredientDrinks = function () {
    var ingredient = drinkIngInputEl.value;
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient).then(function (response) {
        response.json().then(function (data) {
        createDrinkCards(data);
        });
    });
    drinkIngInputEl.value = '';
}


var createDrinkCards = function (data) {
    
    foodContEl.classList.add('hidden');
    favContainerEl.classList.add('hidden');
    drinkContainerEl.classList.remove('hidden');

    var container = document.getElementById("drink-container");
    container.innerHTML = '';

    for (const drink of data.drinks) {
        
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
        buttonEl.className = "self-start";
        innerDivEl.appendChild(buttonEl);

        var drinkId = drink.idDrink;
        buttonEl.setAttribute('id', 'fav-drink-button');
        buttonEl.setAttribute('data-id', drinkId);
        buttonEl.classList.add('w-1/2', 'h-14', 'm-1', 'bg-red-900', 'hover:bg-red-600', 'text-white', 'text-sm', 'font-bold', 'py-2', 'px-4', 'rounded');
        buttonEl.textContent = 'Add to Favorites';
    };
};


var favIdStorage = [];
var favDrinkIdStorage = [];

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'fav-food-button'){
        var element = e.target;
        var favId = element.getAttribute('data-id');
        favIdStorage.push(favId);
        displayFavorites(favId);
        localStorage.setItem("favorites", JSON.stringify(favIdStorage));
    }
});
window.addEventListener('click', (e)=>{
    if(e.target && e.target.id== 'fav-drink-button'){
        var element = e.target;
        var drinkId = element.getAttribute('data-id');
        favDrinkIdStorage.push(drinkId);
        displayFavoriteDrinks(drinkId);
        localStorage.setItem("favorite-drinks", JSON.stringify(favDrinkIdStorage));
    }
});


var displayFavorites = function(favId) {
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + favId;
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            var divEl = document.createElement("div");
            divEl.className = "fav-card";
            favContainerEl.appendChild(divEl);

            var mealPic = document.createElement("img");
            mealPic.src = data.meals[0].strMealThumb;
            divEl.appendChild(mealPic);

            var innerDivEl = document.createElement('div');
            divEl.appendChild(innerDivEl);

            var mealName = document.createElement('h1');
            mealName.textContent = data.meals[0].strMeal;
            innerDivEl.appendChild(mealName);

            var seeRecipe = document.createElement("a");
            seeRecipe.textContent = "Go to Recipe";
            seeRecipe.classList = "text-center";
            seeRecipe.setAttribute("href", "./assets/foodRecipe.html?=" + favId );
            seeRecipe.setAttribute("target", "_blank");
            innerDivEl.appendChild(seeRecipe);

        });
    });
}
var displayFavoriteDrinks = function(drinkId) {
    var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId;
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            var divEl = document.createElement("div");
            divEl.className = "fav-card";
            favContainerEl.appendChild(divEl);

            var mealPic = document.createElement("img");
            mealPic.src = data.drinks[0].strDrinkThumb;
            divEl.appendChild(mealPic);

            var innerDivEl = document.createElement('div');
            divEl.appendChild(innerDivEl);

            var drinkName = document.createElement('h1');
            drinkName.textContent = data.drinks[0].strDrink;
            innerDivEl.appendChild(drinkName);

            var seeRecipe = document.createElement("a");
            seeRecipe.textContent = "Go to Recipe";
            seeRecipe.classList = "object-center";
            seeRecipe.setAttribute("href", "./assets/drinkRecipe.html?=" + drinkId);
            seeRecipe.setAttribute("target", "_blank");
            innerDivEl.appendChild(seeRecipe);

        });
    });
}

var displayStorage = function() {
    var getFavorites = JSON.parse(localStorage.getItem("favorites"));


    if (getFavorites) {
        for(var i=0; i< getFavorites.length; i++){
            displayFavorites(getFavorites[i]);
        }
    }
}
displayStorage();

var displayDrinkStorage = function() {
    var getFavoriteDrinks = JSON.parse(localStorage.getItem("favorite-drinks"));


    if (getFavoriteDrinks) {
        for(var i=0; i< getFavoriteDrinks.length; i++){
            displayFavoriteDrinks(getFavoriteDrinks[i]);
        }
    }
}
displayDrinkStorage();


// We want the modal to open when the Open button is clicked
openModalBtn.onclick = function() {
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
        //Drink button functions
    } else if (e.target && e.target.id === 'cat-drinks') {
        drinkCatContainerEl.classList.remove('hidden');
        drinkOptEl.classList.add('hidden');
        
        drinkCatModalSearch();
    } else if (e.target && e.target.id === 'sub-drink-cat') {
        getCategoryDrinks();
        resetModal();
    }else if (e.target && e.target.id === 'ingredient-drinks') {
        drinkIngContainerEl.classList.remove('hidden');
        drinkOptEl.classList.add('hidden');
        drinkIngModalSearch();
    }  else if (e.target && e.target.id === 'sub-drink-ing') {
        getIngredientDrinks();
        resetModal();
    } else if (e.target && e.target.id === 'alc-drinks') {
        drinkOptEl.classList.add('hidden');
        alcBtn.classList.remove('hidden');
    } else if (e.target && e.target.id === 'alcoholic') {
        var alc = "Alcoholic"
        getAlcoholDrinks(alc);
        resetModal();
    } else if (e.target && e.target.id === 'non-alc') {
        var alc = "Non_Alcoholic"
        getAlcoholDrinks(alc);
        resetModal();
    } else if (e.target && e.target.id === 'area-food') {
        foodAreaModalSearch();
    } else if (e.target && e.target.id === 'cat-food') {
        foodCatModalSearch();
    } else if (e.target && e.target.id === 'sub-food-cat') {
        resetModal();
        getCategoryMeals();
    } else if (e.target && e.target.id === 'sub-food-ing') {
        resetModal();
        getMainIngredientMeals();
    } else if (e.target && e.target.id === 'sub-food-area') {
        resetModal();
        getAreaMeals();
    }else if (e.target && e.target.id === 'ingredient-food') {
        // call function to return one food item based on name
        foodIngModalSearch();
    } else if (e.target && e.target.id === 'close-modal') {
        resetModal();
    } else if (e.target && e.target.id === 'favs-btn') {
        foodContEl.classList.add('hidden');
        drinkContainerEl.classList.add('hidden');
        favContainerEl.classList.remove('hidden');
    } 
})

getDefaultMeals ();
