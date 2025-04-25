$('.slick1').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                // centerMode: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                slidesToShow: 1,
                // centerMode: true,
                slidesToScroll: 1
                
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                // centerMode: true,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slick2').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                // centerMode: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                slidesToShow: 1,
                // centerMode: true,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                // centerMode: true,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slick3').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    arrows: true,
    autoplay: false,
    centerPadding: '0px',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                variableWidth: true,
                centerMode: true,
                arrows: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                variableWidth: true,
                centerMode: true,
                arrows: false
            }
        }
    ]
});
