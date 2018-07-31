var urlCount = 1;
var animalCont = document.getElementById("animal-info");
var btn = document.getElementById('btn');

btn.addEventListener('click', function (){
    var ourRequest = new XMLHttpRequest;
    ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-"+ urlCount +".json");
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        disHtml(ourData);
    }
    ourRequest.send();
    urlCount++;
    if(urlCount > 3) {
        btn.classList.add("hide");
    }
});

function disHtml(data) {
    var dataSt = "";

    for(i = 0; i < data.length; i++) {
        dataSt += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat";
        for(x = 0; x < data[i].foods.likes.length; x++) {
            if(x == 0) {
                dataSt += data[i].foods.likes[x];
            } else {
                dataSt += " and " + data[i].foods.likes[i];
            }
        }
        dataSt += " and dislike eat ";
        for(x = 0; x < data[i].foods.dislikes.length; x++) {
            if(x == 0) {
                dataSt += data[i].foods.dislikes[x];
            } else {
                dataSt += " and " + data[i].foods.dislikes[i];
            }
        }

        dataSt += ".</p>";
    }

    animalCont.insertAdjacentHTML('beforeend', dataSt);

}