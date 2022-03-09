var recipeNameEl = document.getElementById("recipe-name")
var heroEl = document.getElementById("hero-image");
var ingredientsEl = document.getElementById("ingredients");
var recipeTextEl = document.getElementById("recipe-text");


function getFavorite(){
    var queryString = document.location.search;
    var recipeid = queryString.split("=")[1];
    if(recipeid){
        recipeInfo(recipeid);
    } else {
        document.location.replace("./index.html");
    }
    

}
function recipeInfo(drinkId){
    var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+ drinkId;

    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    displayRecipe(data);
                    console.log(data);
                })
            }
            else{
                document.location.replace("./index.html")
            }
        });
    
}
function displayRecipe(data){

    // replace data elements with cocktail db paths
    var drinkName = data.drinks[0].strDrink;

    var recipeName = document.createElement("h1");
    recipeName.innerHTML = drinkName;

    var foodImg = document.createElement("img");
    foodImg.setAttribute("src", data.drinks[0].strDrinkThumb)

    var ingredientsUl = document.createElement("ul")

    var ingredientsLi1 = document.createElement('li');
    ingredientsLi1.textContent = data.drinks[0].strMeasure1 + " " +  data.drinks[0].strIngredient1;
    var ingredientsLi2 = document.createElement('li');
    ingredientsLi2.textContent = data.drinks[0].strMeasure2 + " " +  data.drinks[0].strIngredient2;
    var ingredientsLi3 = document.createElement('li');
    ingredientsLi3.textContent = data.drinks[0].strMeasure3 + " " +  data.drinks[0].strIngredient3;
    var ingredientsLi4 = document.createElement('li');
    ingredientsLi4.textContent = data.drinks[0].strMeasure4 + " " +  data.drinks[0].strIngredient4;
    var ingredientsLi5 = document.createElement('li');
    ingredientsLi5.textContent = data.drinks[0].strMeasure5 + " " +  data.drinks[0].strIngredient5;
    var ingredientsLi6 = document.createElement('li');
    ingredientsLi6.textContent = data.drinks[0].strMeasure6 + " " +  data.drinks[0].strIngredient6;
    var ingredientsLi7 = document.createElement('li');
    ingredientsLi7.textContent = data.drinks[0].strMeasure7 + " " +  data.drinks[0].strIngredient7;
    var ingredientsLi8 = document.createElement('li');
    ingredientsLi8.textContent = data.drinks[0].strMeasure8 + " " +  data.drinks[0].strIngredient8;
    var ingredientsLi9 = document.createElement('li');
    ingredientsLi9.textContent = data.drinks[0].strMeasure9 + " " +  data.drinks[0].strIngredient9;
    var ingredientsLi10 = document.createElement('li');
    ingredientsLi10.textContent = data.drinks[0].strMeasure10 + " " +  data.drinks[0].strIngredient10;
    

    

    var recipeText = document.createElement("p");
    recipeText.textContent = data.drinks[0].strInstructions;

    recipeNameEl.appendChild(recipeName);
    heroEl.appendChild(foodImg);
    ingredientsEl.appendChild(ingredientsUl);
    ingredientsUl.appendChild(ingredientsLi1);
    ingredientsUl.appendChild(ingredientsLi2);
    ingredientsUl.appendChild(ingredientsLi3);
    ingredientsUl.appendChild(ingredientsLi4);
    ingredientsUl.appendChild(ingredientsLi5);
    ingredientsUl.appendChild(ingredientsLi6);
    ingredientsUl.appendChild(ingredientsLi6);
    ingredientsUl.appendChild(ingredientsLi8);
    ingredientsUl.appendChild(ingredientsLi9);
    ingredientsUl.appendChild(ingredientsLi10);
    recipeTextEl.appendChild(recipeText);
}

getFavorite();

