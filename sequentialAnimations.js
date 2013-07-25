/* Jquery SequentialAnimations */
(function($){
    $.sequentialAnimations = {
        defaultOptions : {
            animationDelay : 500, // milliseconds
            animationSpeed : 1000, // milliseconds
            animateFrom : {},
            animateTo : {},
            callback : null,
        }
    }

    $.fn.extend({
        sequentialAnimations: function(newOptions){
            var options = $.extend($.sequentialAnimations.defaultOptions, newOptions),
                elements = this,
                elementsLength = elements.length,
                elementIdx = 0;

            elements.css(options.animateFrom).each(function(i){
                var delay = i * options.animationDelay,
                    animationSpeed = options.animationSpeed,
                    element = $(this);

                element.delay(delay).animate(options.animateTo, animationSpeed, function(){
                    elementIdx++;
                    element.removeClass('hiddenForAnimation').removeAttr('style');
                    if(typeof options.callback === 'function' && elementIdx >= elementsLength) options.callback();
                });
            });

            return this;
        }
    });
})(jQuery);