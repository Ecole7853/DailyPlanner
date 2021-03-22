$(document).ready(function () {
function setTime() {
    setInterval(function() {
        var today = moment();
        $("#currentDay").text(today.format("[The current time is] MMM Do, YYYY, h:mm:ss a"));
      }
    , 1000);
    }

function startUp() {
    $('#text-9').text(localStorage.getItem("9"))
    $('#text-10').text(localStorage.getItem("10"))
    $('#text-11').text(localStorage.getItem("11"))
    $('#text-12').text(localStorage.getItem("12"))
    $('#text-13').text(localStorage.getItem("13"))
    $('#text-14').text(localStorage.getItem("14"))
    $('#text-15').text(localStorage.getItem("15"))
    $('#text-16').text(localStorage.getItem("16"))
    $('#text-17').text(localStorage.getItem("17"))
}

$('.saveBtn').on('click', function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("hour-")[1];
    localStorage.setItem(time, value);
    $("#saved").text("💾Entry saved💾").show(1).delay(500).hide(1);
})

$('.time-block').each(function(){
    var time = parseInt($(this).attr("id").split("hour-")[1]);
    var currentHour = moment().hour(); 
        if (currentHour === time){
            $("#hour-" + time).addClass("present");
        }
        if (currentHour > time){
            $("#hour-" + time).addClass("past");
        }
        if (currentHour < time){
            $("#hour-" + time).addClass("future");
        }
});
setTime();
startUp();
})