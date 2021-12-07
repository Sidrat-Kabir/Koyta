$(function(){

    $(window).on('scroll',function(){
        var scrollposition = $(window).scrollTop();
        
        if(scrollposition>50){
            $('#main_nav').addClass('sticky_nav')
        }else{
            $('#main_nav').removeClass('sticky_nav');
        }
    })
    //smooth scroll
    $('a').on('click',function(e){
        e.preventDefault();
        if(this.hash != ''){
            var Hash = this.hash
            $('html,body').animate({
                scrollTop: $(Hash).offset().top-50
            },500)
        }
    })
    
    //preloader 

    $(window).on('load',function(){
        $('#preloader').fadeOut(1000);
    })

    //back to top

    $(window).on('scroll',function(){
        var scroll_position = $(window).scrollTop();

        if(scroll_position > 600){
            $('#back_to_top').fadeIn(1000);
        }else{
            $('#back_to_top').fadeOut(1000);
        }
    })

    $('#back_to_top').on('click', function(){
        $('html,body').animate({
            scrollTop: 0
        },1000)
    })

    //slick slider

    //slick slider for client section
    $('.client_content').slick({
        prevArrow: '<i class="fas fa-chevron-left client_icon client_icon_left"></i>',
        nextArrow: '<i class="fas fa-chevron-right client_icon client_icon_right"></i>',
        speed: 800
    })

    //slick slider for blog section
    $('.blog_content').slick({
        prevArrow: '<i class="fas fa-chevron-left blog_icon blog_icon_left"></i>',
        nextArrow: '<i class="fas fa-chevron-right blog_icon blog_icon_right"></i>',
        speed: 800,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                },

                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                }

            }
        ]
    })  

    //slick slider for brand section
    $('.brand_row').slick({
        arrows: false,
        speed: 800,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                },
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }

            }
        ]
    }) 

})
