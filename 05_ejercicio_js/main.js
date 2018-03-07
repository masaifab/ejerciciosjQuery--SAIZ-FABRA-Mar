$(document).ready(function () {
    $("#carrete").hide();
});

$(document).on("click", function () {
    $("#carrete").show();
    $("h1").hide();
});

$("img").hover(function () {
    $(this).css("width", "300px")
},function() {
    $(this).css("width", "250px")
});