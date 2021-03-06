// var game = {};
// game.init = function() {
//     setupModeButtons();
//     setupSquares();
//     reset();
// }
// game.init();


// var colors = [];

// [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)",
// ]

var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");


init();
function init() {
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();    
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
            // if (this.textContent === "EASY") {
            //     numSquares = 3;
            // }   else {
            //     numSquares = 6;
            // }
            reset();

            //figure out how many colors to show

            //pick new colors

            //pick a new pickedColors

            //update page to reflect changes


        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // Add click listener to squares.
        squares[i].addEventListener("click", function () {

            // Grab color of picked square.
            var clickedColor = this.style.backgroundColor;

            // Compare clickedColor to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "PLAY AGAIN?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    //change color of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];            
        }   else {
            squares[i].style.display = "none";
        }
        
    }
}


// easyBtn.addEventListener("click", function () {
//     hardBtn.classList.remove("selected");
//     this.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0;  i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }   else {
//             squares[i].style.display = "none";
//         }
        
//     }

// })

// hardBtn.addEventListener("click", function () {
//     this.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";

//     }
// })

resetButton.addEventListener("click", function () {
    reset();
    // //generate all new colors
    // colors = generateRandomColors(numSquares);
    // //pick a new random color from array
    // pickedColor = pickColor();
    // messageDisplay.textContent = "";
    // h1.style.backgroundColor = "steelblue";
    // //change colorDisplay to match picked color
    // colorDisplay.textContent = pickedColor;
    // this.textContent = "New Colors";
    // //change color of squares
    // for (var i = 0; i < squares.length; i++) {
    //     squares[i].style.backgroundColor = colors[i];
    // }
    
})

function changeColors(color) {
    // Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // Change each color to match the given
        squares[i].style.backgroundColor = color;
    }

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors (num) {
    //make an Array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
         //get random color and push into the array
         arr.push(randomColors());
        
    }

   


    //return the arr
    return arr;


}

function randomColors() {
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}