var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");


colorDisplay.textContent = pickedColor;


resetButton.addEventListener("click", function(){
    // generate all new colors
    resetButton.textContent = "New Colors"
    colors = generateRandomColors(6);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change coloDisplay to matched picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = null;
    // alert("Reset Button Clicked");
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});


for (var i = 0; i < squares.length; i++){
     
    squares[i].style.backgroundColor = colors[i]

    //Add click listeners
    squares[i].addEventListener("click", function(){
        //grab color of the clicked square
        var clickedColor = this.style.backgroundColor
        // compare color to the picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}


// function to change the colors of all the squares
function changeColors(color){
    //loop through all the squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


// Function randomly selects a correct color to be picked
function pickColor(){
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}



// function to generate random colors
function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}



// function to generate a random color
function randomColor(){
    // generate random red 0-255
    var r = Math.floor(Math.random() * 256);
    // generate randdom blue 0-255
    var g = Math.floor(Math.random() * 256);
    // generate random green 0-255
    var b = Math.floor(Math.random() * 256);
    var clr = "rgb(" + r + ", " + g + ", " + b + ")";
    return clr;
}