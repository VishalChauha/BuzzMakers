function reveal() {
    for (var e = document.querySelectorAll(".reveal"), s = 0; s < e.length; s++) {
        var o,
            r = window.innerHeight;
        e[s].getBoundingClientRect().top < r - 150 ? e[s].classList.add("active") : e[s].classList.remove("active");
    }
}
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
            prevArrow: false,
            nextArrow: '<label class="nav-next-testimonial"><i class="bi bi-arrow-right-circle-fill"></i></label>',
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
    }),
    window.addEventListener("scroll", reveal);

$(document).ready(function () {
    $(".radio-date-scroll").slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        rows: 1,
        autoplaySpeed:false,
        infinite:false,
        // autoplay: !0,
        dots:false,
        arrows:false,
        // prevArrow: !1,
        // nextArrow: !1,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 600, settings: { slidesToShow: 1} },
        ],
    });
})
