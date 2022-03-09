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
function recipeInfo(recipeid){
    

    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeid).then(function(response){
        
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

    var mealName = data.meals[0].strMeal;

    var recipeName = document.createElement("h1");
    recipeName.innerHTML = mealName;

    var foodImg = document.createElement("img");
    foodImg.setAttribute("src", data.meals[0].strMealThumb);

    var ingredientsUl = document.createElement("ul");

    
    var ingredientsLi1 = document.createElement('li');
    ingredientsLi1.textContent = data.meals[0].strMeasure1 + " " + data.meals[0].strIngredient1;
    var ingredientsLi2 = document.createElement('li');
    ingredientsLi2.textContent = data.meals[0].strMeasure2 + " " +  data.meals[0].strIngredient2;
    var ingredientsLi3 = document.createElement('li');
    ingredientsLi3.textContent = data.meals[0].strMeasure3 + " " +  data.meals[0].strIngredient3;
    var ingredientsLi4 = document.createElement('li');
    ingredientsLi4.textContent = data.meals[0].strMeasure4 + " " +  data.meals[0].strIngredient4;
    var ingredientsLi5 = document.createElement('li');
    ingredientsLi5.textContent = data.meals[0].strMeasure5 + " " +  data.meals[0].strIngredient5;
    var ingredientsLi6 = document.createElement('li');
    ingredientsLi6.textContent = data.meals[0].strMeasure6 + " " +  data.meals[0].strIngredient6;
    var ingredientsLi7 = document.createElement('li');
    ingredientsLi7.textContent = data.meals[0].strMeasure7 + " " +  data.meals[0].strIngredient7;
    var ingredientsLi8 = document.createElement('li');
    ingredientsLi8.textContent = data.meals[0].strMeasure8 + " " +  data.meals[0].strIngredient8;
    var ingredientsLi9 = document.createElement('li');
    ingredientsLi9.textContent = data.meals[0].strMeasure9 + " " +  data.meals[0].strIngredient9;
    var ingredientsLi10 = document.createElement('li');
    ingredientsLi10.textContent = data.meals[0].strMeasure10 + " " +  data.meals[0].strIngredient10;
    

    

    var recipeText = document.createElement("p");
    recipeText.textContent = data.meals[0].strInstructions;

    recipeNameEl.appendChild(recipeName);
    heroEl.appendChild(foodImg);
    ingredientsEl.appendChild(ingredientsUl);
    ingredientsUl.appendChild(ingredientsLi1);
    ingredientsUl.appendChild(ingredientsLi2);
    ingredientsUl.appendChild(ingredientsLi3);
    ingredientsUl.appendChild(ingredientsLi4);
    ingredientsUl.appendChild(ingredientsLi5);
    ingredientsUl.appendChild(ingredientsLi6);
    ingredientsUl.appendChild(ingredientsLi7);
    ingredientsUl.appendChild(ingredientsLi8);
    ingredientsUl.appendChild(ingredientsLi9);
    ingredientsUl.appendChild(ingredientsLi10);
    recipeTextEl.appendChild(recipeText);
}

getFavorite();

