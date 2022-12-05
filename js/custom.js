$(document).ready(function () {
    $(".careersslider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        autoplay: !0,
        infinite: !0,
        autoplaySpeed: 1e4,
        dots: !1,
        prevArrow: !1,
        nextArrow: !1,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1, rows: 1, dots: !1 } },
        ],
    });
}),
    $(document).ready(function () {
        $(".testimonialsslider").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 1,
            autoplay: !0,
            infinite: !0,
            autoplaySpeed: 1e4,
            dots: !1,
            prevArrow: !1,
            nextArrow: !1,
            responsive: [
                { breakpoint: 992, settings: { slidesToShow: 2 } },
                { breakpoint: 600, settings: { slidesToShow: 1, rows: 1, dots: !1 } },
            ],
        });
    }),
    $(document).ready(function () {
        $(".sliderfeature").slick({
            slidesToShow: 6,
            slidesToScroll: 2,
            rows: 2,
            autoplaySpeed: 1e3,
            autoplay: !0,
            dots: !0,
            prevArrow: !1,
            nextArrow: !1,
            responsive: [
                { breakpoint: 992, settings: { slidesToShow: 3 } },
                { breakpoint: 600, settings: { slidesToShow: 4, rows: 2, dots: !1 } },
            ],
        });
    }),
    $(document).ready(function () {
        $(".sliderfeature-secondary").slick({
            slidesToShow: 6,
            slidesToScroll: 2,
            rows: 2,
            autoplaySpeed: 1e3,
            autoplay: !0,
            dots: !0,
            prevArrow: !1,
            nextArrow: !1,
            responsive: [
                { breakpoint: 992, settings: { slidesToShow: 3 } },
                { breakpoint: 600, settings: { slidesToShow: 4, rows: 2, dots: !1 } },
            ],
        });
    }),
    $(document).ready(function () {
        $(".casestudies").slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 1,
            autoplaySpeed: 1e3,
            autoplay: !0,
            dots: !1,
            prevArrow: !1,
            nextArrow: !1,
            responsive: [
                { breakpoint: 992, settings: { slidesToShow: 1 } },
                { breakpoint: 600, settings: { slidesToShow: 1, rows: 1, dots: !1 } },
            ],
        });
    });

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);