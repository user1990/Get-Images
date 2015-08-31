$(document).ready(function() {
    $(".button").on('click', function(e) {
        e.preventDefault();
        var email = $("#email").val();
        var username = $("#username").val();
        var password = $("#password").val();
        $('.triangle-isosceles').show();
        $('.triangle-isosceles:after').show();
    });
});
