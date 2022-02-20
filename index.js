$(document).ready(function() {
    $(".button").click(function() {
        $(this).addClass("active");
        setTimeout(function() {
            $(".button").addClass("success");
        }, 2000);

        setTimeout(function() {
            $(".button").removeClass("active");
            $(".button").removeClass("success");
        }, 2000);
    });

});