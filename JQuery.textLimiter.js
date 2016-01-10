(function($) {
    $.fn.textLimiter = function(options) {
        var settings = $.extend({
            limit     : 250, //default char limit 
            showLabel : false, //parent element needs to be a label
        }, options);
        
        return this.each( function() {            
            if(settings.showLabel)
            {   
                var currentInnerChars=$(this).val().length;
               $(this).parent().append('<span class="limiter-label"></span>');
               $(this).parent().find('span.limiter-label').html(currentInnerChars+' of '+ settings.limit+' characters.');
            }
            $(this).keyup(function(event) {             
                var itemText=$(this).val();
                if(itemText.length>settings.limit){
                    $(this).val(itemText.substring(0, settings.limit));
                    itemText=$(this).val();
                }        

                if(settings.showLabel)
                {
                    $(this).parent().find('span.limiter-label').text(+itemText.length +' of '+ settings.limit+' characters.');
                }
            });

        });
    }
}(jQuery));