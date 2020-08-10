$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});


$(document).ready(function(){
    
    /* TOP SLIDER*/ 
    $('.js-top-slider').on('init', function(event, slick){
        $('.top-slider-dots li').removeClass('active');
        $('.top-slider-dots li[data-slide="00"]').addClass('active');
    });
    
    $('.js-top-slider').slick({
            infinite: true,
            arrows:false,
            dots:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            autoplay:true,
            appendDots:$('.top-slider-dots'),
            pauseOnFocus:false,
            pauseOnHover:false            
        });
     
    $('.top-slider-nav-arrow').on('click', function(){
        $('.js-top-slider').slick('slickNext');
        return false;
    });
     
     $('.top-slider-nav__slide').on('click', function(){
         var ds=$(this).attr('data-slide');
        $('.js-top-slider').slick('slickGoTo', ds);
         $('.top-slider-nav__slide').removeClass('active');
         $(this).addClass('active');
        return false;
    });
     
     $('.top-slider-dots li').on('click', function(){
         var ds=$(this).attr('data-slide');
        $('.js-top-slider').slick('slickGoTo', ds);
         $('.top-slider-dots li').removeClass('active');
         $(this).addClass('active');
        return false;
    });  
     
     $('.js-top-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.top-slider-nav__slide').removeClass('active');
        $('.top-slider-nav__slide[data-slide="0'+nextSlide+'"]').addClass('active');
         
        $('.top-slider-dots li').removeClass('active');
        $('.top-slider-dots li[data-slide="0'+nextSlide+'"]').addClass('active');         
    });
    
    /*END TOP SLIDER*/
    
    /*  ADVANTAGES SLIDER*/ 
        $('.js-slider-advantages').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:2,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            fade:false,
            variableWidth:true,
            responsive: [   
                {
                  breakpoint: 741,
                  settings: {
                    variableWidth:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
        });
    });
     /* END ADVANTAGES SLIDER*/ 
    
    /* Team SLIDER*/ 
    
    $('.js-slider-team').on('init', function(event, slick){
        $(this).parents('.slider-team-wrapper').find('.slider-team-nav__item').removeClass('active');
        $(this).parents('.slider-team-wrapper').find('.slider-team-nav__item[data-slide="00"]').addClass('active');
    });
    
    $('.js-slider-team').slick({
        infinite: true,
        arrows:false,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true
    });
    
    $('.slider-team-nav__item').on('click', function(){
         var ds=$(this).attr('data-slide');
         $(this).parents('.slider-team-wrapper').find('.js-slider-team').slick('slickGoTo', ds);
         $(this).parents('.slider-team-wrapper').find('.slider-team-nav__item').removeClass('active');
         $(this).addClass('active');
         return false;
    });     
     
    $('.js-slider-team').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(this).parents('.slider-team-wrapper').find('.slider-team-nav__item').removeClass('active');
        $(this).parents('.slider-team-wrapper').find('.slider-team-nav__item[data-slide="0'+nextSlide+'"]').addClass('active');        
    });
    
    $('.team-nav__item').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.team-nav__item').removeClass('active');
		$(this).parents('.section-team').find('.team-tab').removeClass('active');
		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
        $("#"+tab_id).find('.js-slider-team').slick('refresh');
	})
    
    /*END TEAM SLIDER*/
    
      /* NICE INPUT*/
    $(".input-phone").mask("+7 (999) 999-99-99");
    
    $('.nice-input__input').blur(function() {        
        if($(this).val().length>0){
            $(this).addClass('nice-input__input--filled');
        }
        else{
            $(this).removeClass('nice-input__input--filled');
        }        
      })
      .focus(function() {});   
     
    /* END NICE INPUT*/
    
    /* PARTNERS SLIDER DESKTOP*/ 
    $('.js-slider-partners').slick({
        infinite: true,
        arrows:false,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });     
    
    $('.js-slider-partners-next').on('click', function(){
        $('.js-slider-partners').slick('slickNext');
        return false;
    });
    
    $('.js-slider-partners-prev').on('click', function(){
        $('.js-slider-partners').slick('slickPrev');
        return false;
    });
     
    $('.js-slider-partners')
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
        var i=currentSlide+1;
            $('.js-slider-num span').html(i);
    });    
    
    /*END PARTNERS SLIDER DESKTOP*/
    
    /* PARTNERS SLIDER TABLET*/     
    $('.js-slider-partners-2').slick({
        infinite: true,
        arrows:false,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        });
     
    $('.js-slider-partners-next-2').on('click', function(){
        $('.js-slider-partners-2').slick('slickNext');
        return false;
    });
    
    $('.js-slider-partners-prev-2').on('click', function(){
        $('.js-slider-partners-2').slick('slickPrev');
        return false;
    });
     
    $('.js-slider-partners-2')
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
        var i=currentSlide+1;
            $('.js-slider-num-2 span').html(i);
    });    
    
    /*END PARTNERS SLIDER TABLET*/
    
    
    /* SOLUTIONS SLIDER*/ 
    $('.js-slider-solutions').on('init', function(event, slick){
        $('.slider-solutions-dots li').removeClass('active');
        $('.slider-solutions-dots li[data-slide="00"]').addClass('active');
    });
    $('.js-slider-solutions').slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
        });
    
     $('.slider-solutions-dots li').on('click', function(){
         var ds=$(this).attr('data-slide');
        $('.js-slider-solutions').slick('slickGoTo', ds);
         $('.slider-solutions-dots li').removeClass('active');
         $(this).addClass('active');
        return false;
    });  
     
     $('.js-slider-solutions').on('beforeChange', function(event, slick, currentSlide, nextSlide){        
        $('.slider-solutions-dots li').removeClass('active');
        $('.slider-solutions-dots li[data-slide="0'+nextSlide+'"]').addClass('active');         
    });
    
    /*END SOLUTIONS SLIDER*/
    
    /* NEWS SLIDER*/ 
    
    if($('.js-slider-news').length){
        
    
    
    options={
        infinite: false,
        arrows:true,
        dots:false,
        rows:2,
        slidesPerRow:2,
        appendArrows:$('.slider-news-arrows'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    rows:2,
                    slidesPerRow:1,
                }
            }
        ]
    }
    
    $('.js-slider-news').slick(options);
    $('.slider-press-tabs__item').on('click', function(element){
        var f=$(this).attr('data-filter');          
        if (typeof f !== typeof undefined && f !== false) {
            if(!$(this).hasClass('active')){            
                if(f!=0){                
                    if($('.js-slider-news').hasClass('slick-initialized')){
                        $('.js-slider-news').slick('unslick');
                    }                
                    if($('.js-slider-news-2').hasClass('slick-initialized')){
                        $('.js-slider-news-2').slick('unslick');
                    }              
                    $('.js-slider-news').hide();
                    $('.js-slider-news-2').show();
                    $('.js-slider-news-2').html($('.js-slider-news').html());
                    $('.js-slider-news-2').find('.slider-news__slide').not('.'+f).remove();        
                    $('.js-slider-news-2').slick(options);    
                }
                else{
                    $('.js-slider-news').show();
                    $('.js-slider-news').slick(options);    
                    $('.js-slider-news-2').hide();
                }
                $('.slider-press-tabs__item').removeClass('active');
                $(this).addClass('active');
            }       
            return false; 
        }
    });
 
        
    }
    /*END NEWS SLIDER*/
    
    
    /* PRESS CENTER SLIDER*/ 
    
    if($('.js-slider-press').length){
        
    
    
    options={
        infinite:true,
        arrows:true,
        dots:false,
        rows:5,
        slidesPerRow:2,
        appendArrows:$('.slider-news-arrows'),
        adaptiveHeight:true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    rows:2,
                    slidesPerRow:1,
                }
            }
        ]
    }
    
    $('.js-slider-press').slick(options);
    $('.slider-press-tabs__item').on('click', function(element){
        var f=$(this).attr('data-filter');          
        if (typeof f !== typeof undefined && f !== false) {
            if(!$(this).hasClass('active')){            
                if(f!=0){                
                    if($('.js-slider-press').hasClass('slick-initialized')){
                        $('.js-slider-press').slick('unslick');
                    }                
                    if($('.js-slider-press-2').hasClass('slick-initialized')){
                        $('.js-slider-press-2').slick('unslick');
                    }              
                    $('.js-slider-press').hide();
                    $('.js-slider-press-2').show();
                    $('.js-slider-press-2').html($('.js-slider-press').html());
                    $('.js-slider-press-2').find('.slider-news__slide').not('.'+f).remove();      
                    
                    $('.js-slider-press-2').on('init', function(event, slick){                        
                        $('.js-slider-num').html('<span>1</span>/'+slick.slideCount);
                    });
                    
                    $('.js-slider-press-2').slick(options);    
                }
                else{
                    $('.js-slider-press').show();
                    $('.js-slider-press').on('init', function(event, slick){                        
                        $('.js-slider-num').html('<span>1</span>/'+slick.slideCount);
                    });
                    $('.js-slider-press').slick(options);    
                    $('.js-slider-press-2').hide();
                }
                $('.slider-press-tabs__item').removeClass('active');
                $(this).addClass('active');
            }       
            return false; 
        }
    });
        
    $('.js-slider-press').on('afterChange', function(event, slick, currentSlide, nextSlide){        
        var tt= $('#section-press').offset().top;	
            var wid=window.innerWidth;
			if (window.innerWidth >639){
                $('html, body').animate({
                    scrollTop: tt
                }, 500);	
            }
   
        
        var i=currentSlide+1;
        $('.js-slider-num span').html(i);
    });
        
    $('.js-slider-press-2').on('afterChange', function(event, slick, currentSlide, nextSlide){        
         var wid=window.innerWidth;
			if (window.innerWidth >639){
                $('html, body').animate({
                    scrollTop: tt
                }, 500);
            }
        
        var i=currentSlide+1;
        $('.js-slider-num span').html(i);
    });
 
        
    }
    /*END press SLIDER*/
    
    /*MOBILE MENU*/
     $('.mobile-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            $('.sidebar').fadeIn(300);
            $(this).addClass('is-active');
        }else{
            $('body').removeClass('menu-open');
            $('.sidebar').fadeOut(300); 
            $(this).removeClass('is-active');
        }
	});
    /*END MOBILE MENU*/
    
    /* PRODUCTION SLIDER*/
    
    var $pr_slider = $('.js-slider-production');
    var pr_slider_settings = {infinite: false,
        arrows:true,
        dots:false,
        rows:2,
        slidesPerRow:3,
        appendArrows:$('.slider-production-arrows'),
            responsive: [
                {
                  breakpoint: 9999,
                  settings:"unslick" 
                },
                {
                  breakpoint: 992,
                  settings: {
                    rows:2,
                    slidesPerRow:3,
                  }
                },
                {
                  breakpoint: 641,
                  settings: {
                    rows:2,
                    slidesPerRow:2,
                  }
                }
              ]
    };
    
    // Init Slider
    $pr_slider.slick(pr_slider_settings);

    // Reslick only if it's not slick()
    $(window).on('resize', function() {
      if (!$pr_slider.hasClass('slick-initialized')) {
        return $pr_slider.slick(pr_slider_settings);
      }
    });
  
    /* END PRODUCTION SLIDER*/
    
    
    /* PARTNERS FORM VALIDATE*/
    
    $('.form-partners').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parent().append(error);
            },
                rules: {
                    name: "required",
                    phone: "required"                				
                },
                messages: {
                    name: "Необходимо заполнить «Имя».",
                    phone: "Необходимо заполнить «Телефон»."							
                },
                submitHandler: function(form){
                    $(form).parents('.partner-form').find('.partner-form__form').addClass('o-hide');
                    $(form).parents('.partner-form').find('.partner-form__thank').addClass('o-show');

                }
         });
    });
    /* END PARTNERS FORM VALIDATE*/
    
    /* SUBSCRIBE FORM VALIDATE*/
    
    $('.form-subscribe').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                    element.parent().append(error);
             },
            rules: {
                email: {
                        required: true,
                        email: true
                    }	               				
                },
                messages: {
                    email: {
                        required: "Необходимо заполнить «E-mail».",
                        email: "Введите корректный e-mail."
                    }								
                },
                submitHandler: function(form){
                    $(form).parents('.press-form').find('.press-form__form').addClass('o-hide');
                    $(form).parents('.press-form').find('.press-form__thank').addClass('o-show');

                }
         });
    });
    
    $('.form-subscribe-2').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                    element.parent().append(error);
             },
            rules: {
                email: {
                        required: true,
                        email: true
                    }	               				
                },
                messages: {
                    email: {
                        required: "Необходимо заполнить «E-mail».",
                        email: "Введите корректный e-mail."
                    }								
                },
                submitHandler: function(form){
                    $(form).parents('.section-subscribe').find('.section-subscribe__form').addClass('o-hide');
                    $(form).parents('.section-subscribe').find('.section-subscribe__thank').addClass('o-show');

                }
         });
    });
     $('.form-subscribe-3').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                    element.parent().append(error);
             },
            rules: {
                email: {
                        required: true,
                        email: true
                    }	               				
                },
                messages: {
                    email: {
                        required: "Необходимо заполнить «E-mail».",
                        email: "Введите корректный e-mail."
                    }								
                },
                submitHandler: function(form){
                    $(form).parents('.block-excel').find('.block-excel__form').addClass('o-hide');
                    $(form).parents('.block-excel').find('.block-excel__thank').addClass('o-show');

                }
         });
    });
    
    /*
    $("#form-subscribe").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				email: {
					required: true,
					email: true
				}	               				
			},
			messages: {
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный e-mail."
                }								
			},
            submitHandler: function(){}
     });
    
    $("#form-subscribe-2").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				email: {
					required: true,
					email: true
				}	               				
			},
			messages: {
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный e-mail."
                }								
			},
            submitHandler: function(){}
     });
     */
    
    /* END SUBSCRIBE FORM VALIDATE*/
    
    
    /*  NUMBERS SLIDER*/ 
        $('.js-slider-numbers').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:3,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            fade:false,
            variableWidth:true,
            responsive: [ 
                {
                  breakpoint: 480,
                  settings: {
                    variableWidth:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
        });
    });
     /* END NUMBERS SLIDER*/ 
    
    /* HISTORY SLIDER*/
    
    $('.js-slider-history').each(function () {
          $(this).slick({
            infinite: false,
            arrows:true,
            dots:false,
            slidesToShow:6,
            slidesToScroll: 1,
            swipeToSlide:true,
            centerMode:false,
            fade:false,
            swipeToSlide:true, 
            responsive: [   
                {
                  breakpoint: 1281,
                  settings: {
                    slidesToShow:5
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    variableWidth:false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 741,
                  settings: {
                    variableWidth:false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    variableWidth:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                }
              ]
        });
    });
    
    $('.item-history').on('click', function(){
        var id=$(this).attr('data-tab');
        $('.item-history').removeClass('active');
        $(this).addClass('active');
        indexToGet = $('.slider-history-tabs .slick-slide').index( $('#'+id) );
        $('.slider-history-tabs').slick('slickGoTo', indexToGet);        
        return false;
    });
    
    
    
    
    $('.slider-history-tabs').each(function () {
          $(this).slick({
            infinite: true,
            arrows:false,
            dots:false,
            slidesToShow:1,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:false,
            centerMode:false,
            fade:true,
            swipe:false,
            responsive: [                   
                {
                  breakpoint: 640,
                  settings: {
                    arrows:true,
                      swipe:true
                  }
                }
              ]
        });
    });   
    // Reslick only if it's not slick()
    $(window).on('resize', function() {
      if (!$('.slider-history-tabs').hasClass('slick-initialized')) {
          return $('.slider-history-tabs').each(function () {
            $(this).slick({
                infinite: true,
                arrows:true,
                dots:false,
                slidesToShow:3,
                slidesToScroll: 1,
                appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
                swipeToSlide:true,
                centerMode:false,
                fade:true,
                responsive: [   
                    {
                      breakpoint: 9999,
                      settings: "unslick"
                    },
                    {
                      breakpoint: 640,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    }
                  ]
            });
        });
      }
    });
    
    
    /* END HISTORY SLIDER*/
    
    /* PROUD SLIDER*/
    
  
    
    $('.js-slider-proud').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:3,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            fade:false,
            responsive: [   
                {
                  breakpoint: 9999,
                  settings: "unslick"
                },
                {
                  breakpoint: 992,
                  settings: {
                    variableWidth:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    variableWidth:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
        });
    });   
    // Reslick only if it's not slick()
    $(window).on('resize', function() {
      if (!$('.js-slider-proud').hasClass('slick-initialized')) {
          return $('.js-slider-proud').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:3,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            fade:false,
            responsive: [   
                {
                  breakpoint: 9999,
                  settings: "unslick"
                },
                {
                  breakpoint: 992,
                  settings: {
                    variableWidth:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    variableWidth:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
        });
    });
      }
    });
    
        $('.js-slider-garant').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:3,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            fade:false,
            responsive: [   
                {
                  breakpoint: 992,
                  settings: {
                    variableWidth:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    variableWidth:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
        });
    });
    
    /* END PROUD SLIDER*/
    
    /*CUSTOM SELECT*/
    $('.custom-select').selectric({
         disableOnMobile: false,         
         nativeOnMobile: true,
         onChange: function() {
             $(this).parents('.selectric-wrapper').addClass('selectric-selected');
          },
     });
    /*END CUSTOM SELECT*/
    
    if($('#filter-range-1').length){
        var handlesSlider = document.getElementById("filter-range-1"),
            priceFrom = parseInt($("#weight_from").val()),
            priceTo = parseInt($("#weight_to").val());

        var max = typeof maxPrice != "undefined"? maxPrice : 2000;

        noUiSlider.create(handlesSlider, {
            start: [ priceFrom, priceTo > 0? priceTo : max ],
            step: 10,
            connect:true,
            range: {
                "min": [  0 ],
                "max": [ max ]
            }
        });
    
        var valueInput = document.getElementById('weight_from');
        var valueInput2 = document.getElementById('weight_to');

        handlesSlider.noUiSlider.on('update', function( values, handle ) {
            
            if ( handle ) {
                 valueInput2.value = parseInt(values[handle]);         
            } else {
                valueInput.value = parseInt(values[handle]);
            }
            
        });

        valueInput.addEventListener('change', function(){
            handlesSlider.noUiSlider.set([this.value, null]);
        });

        valueInput2.addEventListener('change', function(){
            handlesSlider.noUiSlider.set([null, this.value]);
        });
     }
    
    if($('#filter-range-frequency').length){
        var handlesSlider2 = document.getElementById("filter-range-frequency"),
            priceFrom2 = parseInt($("#frequency_from").val()),
            priceTo2 = parseInt($("#frequency_to").val());

        var max2 = typeof maxPrice != "undefined"? maxPrice : 2000;

        noUiSlider.create(handlesSlider2, {
            start: [ priceFrom, priceTo > 0? priceTo : max ],
            step: 10,
            connect:true,
            range: {
                "min": [  0 ],
                "max": [ max ]
            }
        });
    
        var valueInput_2 = document.getElementById('frequency_from');
        var valueInput2_2 = document.getElementById('frequency_to');

        handlesSlider2.noUiSlider.on('update', function( values, handle ) {            
            if ( handle ) {
                 valueInput2_2.value = parseInt(values[handle]);         
            } else {
                valueInput_2.value = parseInt(values[handle]);
            }            
        });

        valueInput_2.addEventListener('change', function(){
            handlesSlider2.noUiSlider.set([this.value, null]);
        });

        valueInput2_2.addEventListener('change', function(){
            handlesSlider2.noUiSlider.set([null, this.value]);
        });
     }
    
    
    
    /* mobile filter*/
    $('.js-mobile-filter').on('click', function(event) {
        if(!$('body').hasClass('filter-open')){
            event.preventDefault();		
            $('body').addClass('filter-open');
            $('.catalog-aside').addClass('catalog-aside-active');
            
            $('.filter-list').each(function(){
                if(!$(this).hasClass('full')){
                    var h=0;
                    for(let i=1; i<6; i++){
                        h=h+$(this).find('.filter-list-item:nth-child('+i+')').innerHeight();
                    }          
                    $(this).css('max-height', h + 'px');
                }
            });
            
        }
	});	

	$('.js-filter-close').on('click', function(event) {        
        if($('body').hasClass('filter-open')){ 
            $('body').removeClass('filter-open');
            $('.catalog-aside').removeClass('catalog-aside-active');	
            
        }
        return false;        
	});

 
    /* mobile filter*/
    
    /*PRODUCT IMAGES*/
    $('.slider-product-image').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-product-image-nav'
    });
    $('.slider-product-image-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-product-image',
        dots: false,
        arrows:false,
        centerMode:false,
        focusOnSelect: true,
        variableWidth:true
    });
     
    $('[data-fancybox=gallery]').fancybox({
         loop: true,
         infobar: false,       
    });
    /*END PRODUCT IMAGES*/
    
    
    /*  PRODUCTS SLIDER*/ 
        $('.js-slider-products').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:5,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            fade:false,
            responsive: [   
                {
                  breakpoint: 1281,
                  settings: {
                    slidesToShow: 4
                  }
                },{
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3
                  }
                },{
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]
        });
    });
     /* END PRODUCTS SLIDER*/ 
    
    /*CALC FORM*/
    $('.calc-form__btn-plus').on('click', function(event) {
         var val=$(this).parents('.calc-form').find('.calc-form__input').val();
        
         var new_val = parseInt(val) + 1;
         $(this).parents('.calc-form').find('.calc-form__input').val(new_val)
         return false;
     });
     
     $('.calc-form__btn-minus').on('click', function(event) {
         var val=$(this).parents('.calc-form').find('.calc-form__input').val();
        
         var new_val = parseInt(val) - 1;
         
         if(new_val<1) new_val=1;
         $(this).parents('.calc-form').find('.calc-form__input').val(new_val)
         return false;
     });
    /*END CALC FORM*/
    
     /* SUBSCRIBE FORM VALIDATE*/
    $("#form-order").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
                name: "required",
				phone: "required" ,
				email: {
					required: true,
					email: true
				}	    ,
                inn: "required"
			},
			messages: {
                name: "Необходимо заполнить «ФИО».",
				phone: "Необходимо заполнить «Телефон».",
                inn: "Необходимо заполнить «ИНН».",	
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный e-mail."
                }								
			},
            submitHandler: function(){
                $('.block-order__thank').show();
                $('.block-order__order').css('opacity', '0');
            }
     });
    /* END SUBSCRIBE FORM VALIDATE*/
    
    if($('.maps').length){
        initMap();
    }
    
    $('.js-gotomap').on('click', function(event) {        
       var m=$(this).attr('href');
        $('.map').removeClass('active');
        $('.item-location').removeClass('active');
        $(this).parents('.item-location').addClass('active');
        $(m).addClass('active');
        

			var wid=window.innerWidth;
			
			if (window.innerWidth < 992){
				var tt= $(m).offset().top;	
                $('html, body').animate({
                  scrollTop: tt
                }, 1500);	
			}			 		 
				
     
        
        return false;        
	});
    
    $('.js-all-employees').on('click', function(event) {    
        if($(this).hasClass('active')){
            $(this).prev('.block-employees').find('.block-employees__col:nth-child(n+3)').slideUp();
            $(this).find('span').toggle();
            $(this).removeClass('active');
        }else{
            $(this).prev('.block-employees').find('.block-employees__col').slideDown();
            $(this).find('span').toggle();
            $(this).addClass('active');
        }
      
        return false;        
	});
    
    $('.item-department__title').on('click', function(event) {    
        $(this).parents('.item-department').toggleClass('active');
        $(this).next('.item-department__content').slideToggle();
        return false;
    });
    
    $('.filter-list').each(function(event) {   
        var h=0;
        for(let i=1; i<6; i++){
            h=h+$(this).find('.filter-list-item:nth-child('+i+')').innerHeight();
        }          
        $(this).css('max-height', h + 'px');
        return false;        
	});
    
    
    $('.js-link-more-filter').on('click', function(event) {    
        if($(this).hasClass('active')){
            var h=0;
            for(let i=1; i<6; i++){
                h=h+$(this).prev('.filter-list').find('.filter-list-item:nth-child('+i+')').innerHeight();
            }          
            $(this).prev('.filter-list').css('max-height', h + 'px');
            $(this).prev('.filter-list').removeClass('full');
            $(this).removeClass('active');
        }else{
            
            $(this).prev('.filter-list').addClass('full');
            $(this).prev('.filter-list').css('max-height', '1000px');
            $(this).addClass('active');
        }
      
        return false;        
	});
    
    $(window).bind('resize orientationchange', function(event) { 
        $('.filter-list').each(function(){
            if(!$(this).hasClass('full')){
                var h=0;
                for(let i=1; i<6; i++){
                    h=h+$(this).find('.filter-list-item:nth-child('+i+')').innerHeight();
                }          
                $(this).css('max-height', h + 'px');
            }
        });
        
    });
    
    $('.calc-form__input').on('input', function () { $(this).prev('.calc-form__text').text($(this).val()); });
    
    
     /* CARRIER SLIDER*/ 
    
    if($('.js-slider-carrier').length){
    
        options={
            infinite:true,
            arrows:true,
            dots:false,
            rows:2,
            slidesPerRow:2,
            appendArrows:$('.slider-news-arrows'),
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        rows:4,
                        slidesPerRow:1,
                    }
                }
            ]
        }
    
        $('.js-slider-carrier').slick(options);
        $('.js-slider-carrier').on('afterChange', function(event, slick, currentSlide, nextSlide){  
            var i=currentSlide+1;
            $('.js-slider-num span').html(i);
        });
        
        $('.slider-carrier__slide').matchHeight();
       
        $(window).bind('resize orientationchange', function(event) { $('.slider-carrier__slide').matchHeight();});
    }
    /*END CARRIER SLIDER*/
    
     /* vacancy FORM VALIDATE*/
    $("#form-vacancy").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
                name: "required",
                surname: "required",
				phone: "required" ,
				email: {
					required: true,
					email: true
				},
                city: "required"
			},
			messages: {
                name: "Необходимо заполнить «Имя».",
                surname: "Необходимо заполнить «Фамилия».",
				phone: "Необходимо заполнить «Телефон».",
                city: "Необходимо заполнить «Индекс/город».",	
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный e-mail."
                }								
			},
            submitHandler: function(form){
                $(form).parents('.vacancy-form').find('.vacancy-form__form').addClass('o-hide');
                $(form).parents('.vacancy-form').find('.vacancy-form__thank').addClass('o-show');
            }
     });
    /* END vacancy FORM VALIDATE*/
    if($('.solution__title-btm').length){
        $('.solution__title-btm').matchHeight();
    }
    
    if($('.item-feature__title').length){
        $('.item-feature__title').matchHeight();
    }
    
    if($('.block-features__col').length){
        $('.block-features__col').matchHeight();
    }
    
    
    $("#form-consult").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				email: {
					required: true,
					email: true
				}	               				
			},
			messages: {
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный e-mail."
                }								
			},
            submitHandler: function(form){
                $(form).parents('.consult-form').find('.consult-form__form').addClass('o-hide');
                $(form).parents('.consult-form').find('.consult-form__thank').addClass('o-show');
            }
     });
    
    $("#form-project").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
                name: "required",
				phone: "required" ,
				email: {
					required: true,
					email: true
				},
                
			},
			messages: {
                name: "Необходимо заполнить «ФИО».",
				phone: "Необходимо заполнить «Телефон».",                
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный e-mail."
                }								
			},
            submitHandler: function(form){
                $(form).parents('.partner-form').find('.partner-form__form').addClass('o-hide');
                $(form).parents('.partner-form').find('.partner-form__thank').addClass('o-show');
            }
     });
    
    /*  PRODUCTS SLIDER 2*/ 
        $('.js-slider-products-2').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:4,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            fade:false,
            responsive: [   
               {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3
                  }
                },{
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]
        });
    });
     /* END PRODUCTS SLIDER 2*/ 
    
    
    /* FEATURES SLIDER*/
    
    var $f_slider = $('.js-block-features');
    var f_slider_settings = {infinite: false,
        arrows:false,
        dots:true,
        slidesToShow:1,
        slidesToScroll: 1,
        variableWidth:true,   
        swipeToSlide:true,
        infinite:true,
            responsive: [
                {
                  breakpoint: 9999,
                  settings:"unslick" 
                },
                {
                  breakpoint: 740,
                  settings: {
                    
                  }
                }
              ]
    };
    
    // Init Slider
    
    
    
    $f_slider.on('init', function(event, slick){
        if($('.block-features__col').length){
            $('.block-features__col').matchHeight();
        }
    });
    
    $f_slider.slick(f_slider_settings);

    // Reslick only if it's not slick()
    $(window).on('resize', function() {
      if (!$f_slider.hasClass('slick-initialized')) {
        return $f_slider.slick(f_slider_settings);
      }
    });
  
    /* END FEATURES SLIDER*/
    
     /* CALLBACK FORM VALIDATE*/
    $("#form-callback").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
                name: "required",
				phone: "required" ,
				email: {
					required: true,
					email: true
				}	    ,
                inn: "required"
			},
			messages: {
                name: "Необходимо заполнить «ФИО».",
				phone: "Необходимо заполнить «Телефон».",
                inn: "Необходимо заполнить «ИНН».",	
				email: {
                    required: "Необходимо заполнить «E-mail».",
					email: "Введите корректный e-mail."
                }								
			},
            submitHandler: function(){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-callback-thank',
                    type : 'inline',
                     touch: false,
                    
                });
            }
     });
    /* END CALLBACK FORM VALIDATE*/
    
    $('[data-fancybox]').fancybox({
        touch: false,
        closeExisting: true,
        autoFocus: false,
        afterShow : function( instance, current ) {
            
        }
    });
    
    $('.js-popup-close').on('click', function(event) {    
        $.fancybox.close();
        return false;
    });
    
    if($('#aside-filter').length){       
        
         var asidefilter = document.getElementById('aside-filter');
         
          var stickySidebar = new StickySidebar('#aside-filter', {
            topSpacing: 20,
            bottomSpacing: 20,
            minWidth: 740
          });
     }
    
   $('.js-link-more-text').on('click', function(event) {    
        if($(this).hasClass('active')){             
            $(this).prev('.text-overflow').removeClass('full');
            $(this).removeClass('active');
        }else{            
            $(this).prev('.text-overflow').addClass('full');
            $(this).addClass('active');
            var tt= $('#product-info').offset().top;	
            $('html, body').animate({
                scrollTop: tt
            }, 1000);
        }
      
        return false;        
	});
    
    
    
    $('.js-sp-slider').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:1,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.block-solution-projects').find('.slider-news-arrows'),
            centerMode:false,
            fade:true,
            responsive: [
               
                {
                  breakpoint: 992,
                  settings: {
                    adaptiveHeight:true
                  }
                }
              ]
        });
        
        $(this).find('.slider-sp-item').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: $(this).find('.slider-sp-item-nav')
        });
        $(this).find('.slider-sp-item-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: $(this).find('.slider-sp-item'),
          dots: false,
          centerMode: false,
          arrows: false,
          focusOnSelect: true
        });
        
    });
    
    
    
    
    $(window).on('resize', function() {
        $('.slider-sp-item').each(function () {
          $(this).slick('setPosition', 0);
        });
        $('.slider-sp-item-nav').each(function () {
          $(this).slick('setPosition', 0);
        });
      
    });
		
    
 });

/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));


function initMap() {
    
    const styledMapType = new google.maps.StyledMapType(
        [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
],
        {
            name: "Styled Map"
        });
    
    const image = "img/icon-map.svg";
    
    const map1 = new google.maps.Map(document.getElementById("map-1"), {
          zoom: 17,
          center: {
            lat: 56.9030306,
            lng: 60.6113864
          }
    });
        
    const marker1 = new google.maps.Marker({
          position: {
            lat: 56.9030306,
            lng: 60.6113864
          },
          map:map1,
          icon: image
    });
    
    map1.mapTypes.set("styled_map", styledMapType);
    map1.setMapTypeId("styled_map");
    
    const map2 = new google.maps.Map(document.getElementById("map-2"), {
          zoom: 17,
          center: {
            lat: 55.342833,
            lng: 86.0990913
          }
    });
        
    const marker2 = new google.maps.Marker({
          position: {
            lat: 55.342833,
            lng: 86.0990913
          },
          map:map2,
          icon: image
    });
    
    map2.mapTypes.set("styled_map", styledMapType);
    map2.setMapTypeId("styled_map");
    
    const map3 = new google.maps.Map(document.getElementById("map-3"), {
          zoom: 17,
          center: {
            lat: 56.845349,
            lng: 35.9414963
          }
    });
        
    const marker3 = new google.maps.Marker({
          position: {
            lat: 56.845349,
            lng: 35.9414963
          },
          map:map3,
          icon: image
    });
    
    map3.mapTypes.set("styled_map", styledMapType);
    map3.setMapTypeId("styled_map");
    
    const map4 = new google.maps.Map(document.getElementById("map-4"), {
          zoom: 17,
          center: {
            lat: 54.9982501,
            lng: 82.8808023
          }
    });
        
    const marker4 = new google.maps.Marker({
          position: {
            lat: 54.9982501,
            lng: 82.8808023
          },
          map:map4,
          icon: image
    });
    
    map4.mapTypes.set("styled_map", styledMapType);
    map4.setMapTypeId("styled_map");
    
}
