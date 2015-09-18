$(document).ready(function() {
    $(window).on('resize', function() {
    if($(window).width() < 500) {
        $('#first-copy').removeClass('chunck-one');
         $('#second-copy').removeClass('chunck-two');
         $('#third-copy').removeClass('chunck-three');
    }else{
        $('#first-copy').addClass('chunck-one');
         $('#second-copy').addClass('chunck-two');
         $('#third-copy').addClass('chunck-three');
    }
})
    
    jQuery(function($) {
        function fixDiv() {
            var windowPosY = $(this).scrollTop();
            var $fixedWindow = $('.scroll-fixed');
            
            var $firstImg = $('.first-img');
            var $secondImg = $('.second-img');
            var $thirdImg = $('.third-img');
            
            var $firstCopy = $('.chunck-one');
            var $secondCopy = $('.chunck-two');
            var $thirdCopy = $('.chunck-three');
            
            if (windowPosY >= 500 && windowPosY <= 1160)
              $fixedWindow.addClass('fixedSection');
            else
              $fixedWindow.removeClass('fixedSection');
        
            
            if (windowPosY > 1160)
              $fixedWindow.addClass('pushBottom');
            else
              $fixedWindow.removeClass('pushBottom');
            
            if (windowPosY >= 600)
              $secondCopy.fadeIn(200),
              $firstImg.fadeOut(200);
             else
                $secondCopy.fadeOut(200),
                $firstImg.fadeIn(200);
            
            if (windowPosY >= 900)
              $thirdCopy.fadeIn(200),
              $secondImg.fadeOut(200);
             else
                $thirdCopy.fadeOut(200),
                $secondImg.fadeIn(200);
        
        } 
   
    $(window).scroll(fixDiv);
    fixDiv();
    });
    
    
});