$(document).ready(function(){
    $('.project_carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 2 ,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type="button" class="slick-prev"> < </button>`,
        nextArrow: `<button type="button" class="slick-next"> > </button>`
    });
    $('.rent_info_carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1 ,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type="button" class="slick-prev_rent"> < </button>`,
        nextArrow: `<button type="button" class="slick-next_rent"> > </button>`
    });
        $('ul.catalog_tabs').on('click','button:not(.catalog_tab_active)', function () {
        $(this)
            .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
            .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active')
    });
    $(window).scroll(function (){
        if ($(this).scrollTop()>500){
            $('.pageup').fadeIn()
        }else {
            $('.pageup').fadeOut()
        }
    });

});
