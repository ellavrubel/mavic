$(function(){

    $('.products__slider').slick({

        infinite: false,

        prevArrow: '<button class="slick-prev slick-arrow products__slider-btn slider-btnLeft">' +
            '<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M9.21839 1L1 9L9.21839 17"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="slick-prev slick-arrow products__slider-btn slider-btnRight">' +
            '<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.78161 17L9 9L0.78161 1"/>\n' +
            '</svg>' +
            '</button>',

        responsive: [
            {
                breakpoint: 630,
                settings: {

                    arrows: false
                }
            }
        ]

    });

    //  questions аккардион

    $('.questions__item-title').on('click',function (){

        $('.questions__item').removeClass('questions__item--active');


        $(this).parent().addClass('questions__item--active');

    });


    //    fullPage

    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        sectionSelector: '.section',
        scrollOverflow: true,
        anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'contacts'],
        menu: '#menu__list',
    });

    //


    //  mobile menu


    $('.menu__btn').on('click', function () {

        $(this).toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');

    });

    $('.menu__list-link').on('click', function () {

        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');

    });


    //


//    animation


    wow = new WOW(
        {
        }
    );

    wow.init();











  
});