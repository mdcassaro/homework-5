
// var modalEl = document.querySelector("#modal-container");
// var modalNameEl = document.querySelector("#modal-name");
// var descriptionEl = document.querySelector("#description");
// var closeEl = document.querySelector(".close");
// var saveBtn = document.querySelector("#save");

var text9 = $("#text9").val().trim();
var text10 = $("#text10").val().trim();
var text11 = $("#text11").val().trim();
var text12 = $("#text12").val().trim();
var text1 = $("#text1").val().trim();
var text2 = $("#text2").val().trim();
var text3 = $("#text3").val().trim();
var text4 = $("#text4").val().trim();
var text5 = $("#text5").val().trim();

// var texts = [text9, text10, text11, text12, text1, text2, text3, text4, text5]

var NowMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment;






// var toDo = [slot9, slot10, slot11, slot12, slot1, slot2, slot3, slot4, slot5]





// var modalEl = $("#modal-container");
// var modalNameEl = $("#modal-name");
// var descriptionEl = $("#description");
// var closeEl = $(".close");
// var saveBtn = $("#save");
// var nameEl = $("#name");

// var slot9 = $("#9")
// var slot10 = $("#10")
// var slot11 = $("#11")
// var slot12 = $("#12")
// var slot1 = $("#1")
// var slot2 = $("#2")
// var slot3 = $("#3")
// var slot4 = $("#4")
// var slot5 = $("#5")







function storeTodos9() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos9", JSON.stringify(text9));
}
function storeTodos10() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos10", JSON.stringify(text10));
}
function storeTodos11() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos11", JSON.stringify(text11));
}
function storeTodos12() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos12", JSON.stringify(text12));
}
function storeTodos1() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos1", JSON.stringify(text1));
}
function storeTodos2() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos2", JSON.stringify(text2));
}
function storeTodos3() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos3", JSON.stringify(text3));
}
function storeTodos4() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos4", JSON.stringify(text4));
}
function storeTodos5() {
        // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos5", JSON.stringify(text5));
}

function init() {
    alert("2nd button works")
    
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTodos !== null) {
      texts = storedTodos;
    }
}
$("button").on("click", function(event){
    event.preventDefault();

    alert("button worked");

    storeTodos9();
    storeTodos10();
    storeTodos11();
    storeTodos12();
    storeTodos1();
    storeTodos2();
    storeTodos3();
    storeTodos4();
    storeTodos5();


  
})


  
    // Render todos to the DOM





// renderTodos();




