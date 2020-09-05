$(document).ready(function(){
    
   $(document).on("click",".js-vacancy", function(){    
         $('#fixed-panel').addClass('active');
         $('body').addClass('v-open');        
        return false;
    });  
     
     $('.fixed-panel__close').click(function(){    
         $('#fixed-panel').removeClass('active');
         $('body').removeClass('v-open');        
        return false;
     });
    
    $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".fixed-panel").length) return;
        $('.fixed-panel').removeClass('active');
        $('body').removeClass('v-open');        

        event.stopPropagation();
      });
    
    
    if($('#aside-filter').length){       
        
          var asidefilter = document.getElementById('aside-filter');
         
          var stickySidebar = new StickySidebar('#aside-filter', {
            topSpacing: 20,
            bottomSpacing: 20,
            minWidth: 740
          });
        
         asidefilter.addEventListener('affixed.container-bottom.stickySidebar', function (event) {
             $('.aside-filter-btn').addClass('aside-filter-btn_relative');
        });
        
                 
        var scrollPos = 0;
        window.addEventListener('scroll', function(){
            var dd=(document.body.getBoundingClientRect()).top;
            if ((document.body.getBoundingClientRect()).top > scrollPos){
                tt=$('.section-catalog-inside .wrapper').offset().top;
                tt2= tt + $('.section-catalog-inside .wrapper').height() - $(window).innerHeight();
                ttt=$('.section-catalog-inside .wrapper').offset().top - $(window).innerHeight() + 140;
                
                if (Math.abs(scrollPos) >= tt && Math.abs(scrollPos) <= tt2) {
                    $('.aside-filter-btn').removeClass('aside-filter-btn_relative');
                }
                
                if (Math.abs(scrollPos) < ttt) {
                    $('.aside-filter-btn').addClass('aside-filter-btn_relative');
                }
            }
            else {            
                tt=$('.section-catalog-inside .wrapper').offset().top;
                tt2= tt + $('.section-catalog-inside .wrapper').height() - $(window).innerHeight();
                ttt=$('.section-catalog-inside .wrapper').offset().top - $(window).innerHeight() + 140;
              
                if (Math.abs(scrollPos) > tt2 || Math.abs(scrollPos) < ttt) {
                    $('.aside-filter-btn').addClass('aside-filter-btn_relative');
                    
                }          
                else{
                     $('.aside-filter-btn').removeClass('aside-filter-btn_relative');
                }
            }
            
            scrollPos = (document.body.getBoundingClientRect()).top;
        });
        
        tt=$('.section-catalog-inside .wrapper').offset().top;
        tt2= tt + $('.section-catalog-inside .wrapper').height() - $(window).innerHeight();
        ttt=$('.section-catalog-inside .wrapper').offset().top - $(window).innerHeight() + 140;
              
        if (Math.abs(scrollPos) > tt2 || Math.abs(scrollPos) < ttt) {
            $('.aside-filter-btn').addClass('aside-filter-btn_relative');
        }else{
            $('.aside-filter-btn').removeClass('aside-filter-btn_relative');
        }
         
         
     }
		
    
 });
