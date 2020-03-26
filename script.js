
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var slot9 = $("#9")
var slot10 = $("#10")
var slot11 = $("#11")
var slot12 = $("#12")
var slot1 = $("#1")
var slot2 = $("#2")
var slot3 = $("#3")
var slot4 = $("#4")
var slot5 = $("#5")



var toDo = [slot9, slot10, slot11, slot12, slot1, slot2, slot3, slot4, slot5]


//cods for modal container opening
function handleClick(event) {
    if (event.target.matches("button")) {
      //if tbis button is clicked
      event.preventDefault();
      //prevents the name from being removed
      modalEl.style.display = "block";
      currentId = parseInt(event.target.parentElement.id);
      var name = todo.name;
      var description = toDo.description;
      modalNameEl.textContent = name;
      if(description) {
        descriptionEl.value = description;
      } else {
        descriptionEl.value = "";
      }
    }
}
function close() {
    modalEl.style.display = "none";
}

  
//codes save button
closeEl.addEventListener("click", close);
  saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    people[currentId].description = descriptionEl.value;
    close();
});











// localStorage.setItem("slot8", value)
// localStorage.setItem("slot9", value)
// localStorage.setItem("slot10", value)
// localStorage.setItem("slot11", value)
// localStorage.setItem("slot12", value)
// localStorage.setItem("slot1", value)
// localStorage.setItem("slot2", value)
// localStorage.setItem("slot3", value)
// localStorage.setItem("slot4", value)
// localStorage.setItem("slot5", value)


// var slots = [1,2,3];
// localStorage.setItem("slots", JSON.stringify(slots));
// slots = JSOn.parse(localStorage.getItem("slots"));
// //make the divs have an id and var the id to the slot