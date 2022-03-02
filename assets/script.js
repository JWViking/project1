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
var favRecipies = JSON.parse(localStorage.getItem("recipe-URL")) || [];


// Save URLs of recipes saved


$(heartRecipeEl).on("click",function(){
    var selectedRecipe = $(this).parent();
    var selectedImage = $(selectedRecipe).siblings("img");
    // imgURL represents the 
    var imgUrl = selectedImage.attr('src');

    favRecipies.push(imgUrl);
    localStorage.setItem("recipe-URL", JSON.stringify(favRecipies));

    console.log(imgUrl);

})

/*<div class="card">
 <img src="https://www.themealdb.com/images/media/meals/1548772327.jpg">
<div>
    <p>baked salmon with fennel & tomatoes</p>
    <button class="self-start"><i class="fa fa-heart-o"></i></button>
</div>
</div> */


function getRecipes(){
    
    foodContEl.innerHTML = "";

    for(let i=0;)

    console.log("button pressed")



}

function displayRecipes(){

};

favoritesBtn.addEventListener("click", retrieveRecipes);