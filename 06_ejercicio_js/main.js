$("#cerrar").on("click", function () {
    $("#banner").remove();
});

$("img").on("click", function () {
    $(this).replaceWith("<p> Agregado a carro</p>");
    $("p").addClass("texto");
});