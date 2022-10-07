var presentDate = moment().format("dddd, MMMM Do");

var interval = setInterval(function() {
  var timeNow = moment();
  $("#currentDay").html(timeNow.format("dddd, MMMM Do").substring(0,3));
  $("#currentDay").html(presentDate + " " + timeNow.format("hh:mm:ss A"));
}, 100);