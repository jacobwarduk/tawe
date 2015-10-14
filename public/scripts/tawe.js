$(document).ready(function() {

    // Toggling responsive menu
    $(".menu-icon").on("click", function(e) {
        $(".menu").toggleClass("menu-open");
        e.preventDefault();
    });

});
