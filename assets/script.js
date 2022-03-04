// autocomplete variables
var foodCatNames = [];
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
var drinkCatContainerEl = document.getElementById('drink-cat-container');

var foodCatInputEl = document.getElementById('food-cat-input');
var drinkCatInputEl = document.getElementById('drink-cat-input');



var foodModalSearch = function() {
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
    drinkCatContainerEl.classList.add('hidden');
}

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
        console.log("all drinks");
        //calll function to return all drinks

    } else if (e.target && e.target.id === 'cat-drinks') {
        console.log("cat drinks");
        drinkModalSearch();
    } else if (e.target && e.target.id === 'sub-drink-cat') {
        resetModal();
        console.log("submit drink cateorgy");
        // call function to return one category of food

    } else if (e.target && e.target.id === 'name-drinks') {
        console.log("name drinks");
    } else if (e.target && e.target.id === 'all-food') {
        resetModal();
        console.log("all food");
        //call function to return all food

    } else if (e.target && e.target.id === 'cat-food') {
        console.log("cat food");
        foodModalSearch();
    } else if (e.target && e.target.id === 'sub-food-cat') {
        resetModal();
        console.log("submit food cateorgy");
        // call function to return one category of food

    } else if (e.target && e.target.id === 'name-food') {
        // call function to return one food item based on name
        console.log("name food");
    } else if (e.target && e.target.id === 'close-modal') {
        console.log("close modal");
        resetModal();
    }
    
})

//auto complete for categories
$(function() {
    $('#food-cat-input').autocomplete({
        minLength: 1,
        source: foodCatNames
    });
});

$(function() {
    $('#drink-cat-input').autocomplete({
        minLength: 1,
        source: drinkCatNames
    });
});


