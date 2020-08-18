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
		
    
 });
