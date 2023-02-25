$('.restaurant-details-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
        breakpoint: 1200,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false
        }
    },
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false
        }
    },
    {
        breakpoint: 348,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
        }
    }
    ]
});