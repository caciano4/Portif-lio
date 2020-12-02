$(document).ready(function () {
        $(window).scroll(function () {
            if (this.scrollY > 10) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }

        });
        // menu/navbar scripit
        $('.menu-btn').click(function () {
                $('.navbar .menu').toggleClass ("active");
                $('.navbar .menu-btn.i').toggleClass ("active");

            });


    });
