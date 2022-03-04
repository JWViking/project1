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

favoritesBtn.addEventListener("click", retrieveRecipes);