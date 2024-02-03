$(document).ready(function() {
    $("p:first").click(function() {
        $(this).hide();
    });

    $("h1").click(function() {
        alert("Bora aprender C#!");
    });

});

$(document).ready(function() {
    $("#windows").click(function() {
        $("#p1").fadeIn();
        $("#p2").fadeIn("slow");
        $("#p3").fadeIn(3000);
    });
});

$(document).ready(function() {
    $("#web").click(function() {
        $("#p4").fadeIn();
        $("#p5").fadeIn("slow");
        $("#p6").fadeIn(3000);
    });
});

$(document).ready(function() {
    $("#mobile").click(function() {
        $("#p7").fadeIn();
        $("#p8").fadeIn("slow");
        $("#p9").fadeIn(3000);
    });
});