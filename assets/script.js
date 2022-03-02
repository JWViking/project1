
var getMeals = function () {
    var searchAll = "abcdefghijklmnopqrstuvwxyz"

    for(i=0; i<searchAll.length; i++) {
        console.log(searchAll.charAt(i));
        var key = searchAll.charAt(i);
        var url = "https:www.themealdb.com/api/json/v1/1/search.php?f=" + key;
        console.log("key",key);
        console.log(url);
    

        fetch("https:www.themealdb.com/api/json/v1/1/search.php?f=" + key).then (function(response) {
            response.json().then(function(data) {
                createMealCards(data);
            });
        });
    };
};

getMeals();

var createMealCards = function (data) {
    console.log("here");

    console.log(data);

    //create card div
   var container = document.getElementById("food-container");
   var divEl = document.createElement("div");
   divEl.className = "card";
   container.appendChild(divEl);
   
   //create image element
   var imgEl = document.createElement("img");
   //imgEl.src = strMealThumb //get help here!!!
   divEl.appendChild(imgEl);

   //create inner div
   var innerDivEl = document.createElement("div");
   divEl.appendChild(innerDivEl);

   //create inner div <p>
   var pEl = document.createElement("p");
   //pEl.innerHTML = data[i].strMeal get help here!!!
   innerDivEl.appendChild(pEl);

   //create button
   var buttonEl = document.createElement("button");
   buttonEl.className = "self-start"
   innerDivEl.appendChild(buttonEl);

   //create heart icon
   var heartEl = document.createElement("i");
   heartEl.className = "fa fa-heart-o";
   buttonEl.appendChild(heartEl);


};