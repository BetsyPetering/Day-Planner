console.log("hello");


var info8 = document.getElementById("t8:00");
var info9 = document.getElementById("t9:00");
var info10 = document.getElementById("t10:00");
var info11 = document.getElementById("t11:00");
var info12 = document.getElementById("t12:00");
var info13 = document.getElementById("t1:00");
var info14 = document.getElementById("t2:00");
var info15 = document.getElementById("t3:00");
var info16 = document.getElementById("t4:00");
var info17 = document.getElementById("t5:00");

info8.innerHTML = localStorage.getItem("t8:00");
info9.innerHTML = localStorage.getItem("t9:00");
info10.innerHTML = localStorage.getItem("t10:00");
info11.innerHTML = localStorage.getItem("t11:00");
info12.innerHTML = localStorage.getItem("t12:00");
info13.innerHTML = localStorage.getItem("t1:00");
info14.innerHTML = localStorage.getItem("t2:00");
info15.innerHTML = localStorage.getItem("t3:00");
info16.innerHTML = localStorage.getItem("t4:00");
info17.innerHTML = localStorage.getItem("t5:00");



const today = document.getElementById("currentDay");
today.innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm a');

$(".saveBtn").on("click", saveInfo);  //this covers all #saveBtn tags

function saveInfo() {
    localStorage.setItem(this.id, $(this).siblings(".form-control").val())
    console.log(this.id);
    console.log($(this));
}

//if time = after, then set class to pass
//if time = now, then set class to present
//if time = future, then set class to future

// each time-block loop for the time
// $(".time-block").each()
//need a class input-group-prepend check to see if past, current, futuee
//do military time and change to hours ONLY
//then compare the hours (military time)