let userInput = document.querySelector("input");
var expression = "";
function press(num) {
  expression += num;
  userInput.value = expression;
}

function equal() {
  userInput.value = eval(expression);
  expression = "";
}

function erese() {
  expression = "";
  userInput.value = expression;
}