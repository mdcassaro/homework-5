
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

var currentTime = moment().format('H');
currentTime = parseInt(currentTime);

var time9 = $("#9").text;
time9 = parseInt(time9[0]);


var time10 = $("#10").text;
time10 = parseInt(time10[0]);
var text10 = document.querySelector("text10");

var time11 = $("#11").text;
time11 = parseInt(time11[0]);
var text11 = $("text11");

var time12 = $("12").text;
time12 = parseInt(time12[0]);

var time1 = $("1").text;
time1 = parseInt(time1[0]);


var time2 = $("2").text;
time2 = parseInt(time10[0]);


var time3 =$("3").text;
time3 = parseInt(time3[0]);


var time4 = $("4").text;
time4 = parseInt(time4[0]);


var time5 = $("5").text;
time5 = parseInt(time5[0]);




var times  = [time9, time10, time11, time12, time1, time2, time3, time4, time5];
var texts = [text9, text10, text11, text12, text1, text2, text3, text4, text5];
function colorChange() {
    for (i = 0; i < times.length; i ++) {
        if (times[i] < currentTime) {
            texts[i].addClass("past");
        }
        else if (times[i] === currentTime) {
            texts[i].addClass("now");
        }
        else if (times[i] > currentTime){
            texts[i].addClass("future");
        }
    }
}
colorChange();





$("#btn9").on("click", function(){
    var todo = $("#text9").val().trim();
    localStorage.setItem("9:00 A.M.", todo);

});
$(text9).val(localStorage.getItem("9:00 A.M."))

$("#btn10").on("click", function(){
    var todo = $("#text10").val().trim();
    localStorage.setItem("10:00 A.M.", todo);

});
$(text10).val(localStorage.getItem("10:00 A.M."))

$("#btn11").on("click", function(){
    var todo = $("#text11").val().trim();
    localStorage.setItem("11:00 A.M.", todo);

});
$(text11).val(localStorage.getItem("11:00 A.M."))

$("#btn12").on("click", function(){
    var todo = $("#text12").val().trim();
    localStorage.setItem("12:00 A.M.", todo);

});
$(text12).val(localStorage.getItem("12:00 A.M."))

$("#btn1").on("click", function(){
    var todo = $("#text1").val().trim();
    localStorage.setItem("1:00 P.M.", todo);

});
$(text1).val(localStorage.getItem("1:00 P.M."))

$("#btn2").on("click", function(){
    var todo = $("#text2").val().trim();
    localStorage.setItem("2:00 P.M.", todo);

});
$(text2).val(localStorage.getItem("2:00 P.M."))

$("#btn3").on("click", function(){
    var todo = $("#text3").val().trim();
    localStorage.setItem("3:00 P.M.", todo);

});
$(text3).val(localStorage.getItem("3:00 P.M."))

$("#btn4").on("click", function(){
    var todo = $("#text4").val().trim();
    localStorage.setItem("4:00 P.M.", todo);

});
$(text4).val(localStorage.getItem("4:00 P.M."))

$("#btn5").on("click", function(){
    var todo = $("#text5").val().trim();
    localStorage.setItem("5:00 P.M.", todo);

});
$(text5).val(localStorage.getItem("5:00 P.M."))















