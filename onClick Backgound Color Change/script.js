// let index = 0;
// let colors = ["red", "black", "blue", "green", "yellow"];
// let button = document.querySelector("#b_change");
// let body = document.querySelector("body");

// button.addEventListener("click", function() {
//     console.log(colors[2]);
//     body.style.background = "red"
// });




let index = 0;
let colors = ["red", "black", "blue", "green", "yellow"];
let button = document.querySelector("#b_change");
let body = document.querySelector("body");


button.addEventListener("click", function() {
    body.style.background = colors[index ++];
    if(index >= colors.length) {
        index = 0;
    }
});

