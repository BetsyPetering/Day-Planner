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

currentHour = moment().format('HH');

$("textarea").each(function() {
    console.log($(this));
    if (parseInt($(this).parent().attr("id")) < parseInt(currentHour) ) {        
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass( "past" )
    } else if (parseInt($(this).parent().attr("id")) > parseInt(currentHour) ) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        console.log($(this).parent().attr("id"));
        $(this).addClass( "future" )
    } else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass( "present" )
    }
});

const today = document.getElementById("currentDay");
today.innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm a');

$(".saveBtn").on("click", saveInfo);  
console.log($(".saveBtn").on("click", saveInfo));

function saveInfo() {
    localStorage.setItem(this.id, $(this).siblings(".form-control").val())
    console.log(this.id);
    console.log($(this));
}