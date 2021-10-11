
var score = JSON.parse(localStorage.getItem('score'));

$(".container").hide()
$("#score").hide()
$(".container").append('<div id="text">your score isssss</div>')
$(".container").append('<div id="score">'+score+'</div>')

$(".container").show(5000)