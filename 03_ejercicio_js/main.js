
$("#elem1").hover(function () {
        $("#elem1").addClass("destacar")
    },
    function () {
        $("#elem1").removeClass("destacar");
    });

    $("#elem1").on("mouseover", function () {
        $("img").attr("src", "img/rio.jpg");
    });
    
    $("#elem1").on("mouseout", function () {
        $("img").attr("src", "img/blanco.jpg");
    });

$("#elem2").hover(function () {
        $("#elem2").addClass("destacar");
    },
    function () {
        $("#elem2").removeClass("destacar");
    });
    $("#elem2").on("mouseover", function () {
        $("img").attr("src", "img/arbol.jpg");
    });
    
    $("#elem2").on("mouseout", function () {
        $("img").attr("src", "img/blanco.jpg");
    });

$("#elem3").hover(function () {
        $("#elem3").addClass("destacar");
    },
    function () {
        $("#elem3").removeClass("destacar");
    });
    $("#elem3").on("mouseover", function () {
        $("img").attr("src", "img/lago.jpg");
    });
    
    $("#elem3").on("mouseout", function () {
        $("img").attr("src", "img/blanco.jpg");
    });

$("#elem4").hover(function () {
        $("#elem4").addClass("destacar");
    },
    function () {
        $("#elem4").removeClass("destacar");
    });
    $("#elem4").on("mouseover", function () {
        $("img").attr("src", "img/sol.jpg");
    });
    
    $("#elem4").on("mouseout", function () {
        $("img").attr("src", "img/blanco.jpg");
    });
