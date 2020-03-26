
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

//cods for modal container opening
function handleClick(event) {
    if (event.target.matches("button")) {
      //if tbis button is clicked
      event.preventDefault();
      //prevents the name from being removed
      modalEl.style.display = "block";
      currentId = parseInt(event.target.parentElement.id);
      var name = people[currentId].name;
      var description = people[currentId].description;
      modalNameEl.textContent = name;
      if(description) {
        descriptionEl.value = description;
      } else {
        descriptionEl.value = "";
      }
    }
  }











localStorage.setItem("slot8", value)
localStorage.setItem("slot9", value)
localStorage.setItem("slot10", value)
localStorage.setItem("slot11", value)
localStorage.setItem("slot12", value)
localStorage.setItem("slot1", value)
localStorage.setItem("slot2", value)
localStorage.setItem("slot3", value)
localStorage.setItem("slot4", value)
localStorage.setItem("slot5", value)


var slots = [1,2,3];
localStorage.setItem("slots", JSON.stringify(slots));
slots = JSOn.parse(localStorage.getItem("slots"));
//make the divs have an id and var the id to the slot