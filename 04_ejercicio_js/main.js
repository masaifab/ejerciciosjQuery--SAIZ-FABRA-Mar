let colores = ["blue", "green", "yellow", "red", "pink", "orange"]

$("div").ready(function () {
    $("#anuncio").text("¡CLICK! para cambiar de color")
        .width(500)
        .height(100)
        .hide()
        .fadeIn(3000)
});


$("div").on("click", function () {
    
    let color = colores[Math.floor(Math.random() * colores.length)];

    $("#anuncio").css("background", color);
});

