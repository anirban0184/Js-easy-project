let userInput = document.getElementById("user_input");
let icon = document.getElementsByClassName("icon")[0];
let listItem = document.getElementById("list_item");

icon.addEventListener("click", function() {
  listItem.innerHTML = "";
});

window.addEventListener("keydown", function(event) {
  
  if(event.key == "Enter") {
    addItem();
  }
  function addItem() {
    let h2 = document.createElement("h2");
    h2.innerHTML = "_" + userInput.value;

    h2.addEventListener("click", function() {
      h2.style.textDecoration = "line-through";
    })
    listItem.insertAdjacentElement("beforeend", h2);
    userInput.value = "";
  }

});
