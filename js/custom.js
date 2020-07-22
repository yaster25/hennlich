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
 
    /*END NEWS SLIDER*/
    
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
    $("#form-partners").validate({
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
            submitHandler: function(){}
     });
    /* END PARTNERS FORM VALIDATE*/
    
    /* SUBSCRIBE FORM VALIDATE*/
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
        $('.slider-history-tab').removeClass('active');
        $('#'+id).addClass('active');
        return false;
    });
    
    
    
    
    $('.slider-history-tabs').each(function () {
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
                
            }
     });
    /* END SUBSCRIBE FORM VALIDATE*/
    
     
 });
