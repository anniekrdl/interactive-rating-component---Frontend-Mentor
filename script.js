let ratings = document.querySelectorAll(".vote");
var rating = 0

console.log(ratings.length)

var addSelectedClass = function() {
    deleteSelectedClass();
    this.classList.add('selected');
    rating = this.id;
    document.getElementById("error-text").style.display = "none"


}

var deleteSelectedClass = function() {
    for (let i=0; i< ratings.length; i++) {
        ratings[i].classList.remove('selected');
        
    }
}

for (let i=0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', addSelectedClass);
}

let submitButton = document.querySelector(".submit-button");

submitButton.addEventListener('click', () =>{
    console.log("change card");
    if (rating != 0) {
        document.getElementById("rating").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("stars").innerHTML = rating;
    } else {
        document.getElementById("error-text").style.display = "block"
    }

    
})
