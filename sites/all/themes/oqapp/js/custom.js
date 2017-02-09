jQuery(document).ready(function($) {

   /* $('.entityreference-dragdrop-label').each(function(){
        $(this).clone().removeClass().addClass('entityreference-dragdrop-label2').insertBefore(this);

    });
    $( document ).ajaxComplete(function() {
        $('.entityreference-dragdrop-label').each(function(){
            if($(this).parent().find('div').hasClass('entityreference-dragdrop-label2')){

            }else{
                $(this).clone().removeClass().addClass('entityreference-dragdrop-label2').insertBefore(this);
            }


        });
    });*/
    $("#block-system-main .block-facetapi h2").click(function () {
        $(this).toggleClass('open');
        $header = $(this);
        //getting the next element
        $content = $header.next().next();
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $content.slideToggle(500, function () {
            //execute this after slideToggle is done
            //change text of header based on visibility of content div

        });

    });


    $('.views-table td div').css('z-index','999').draggable({
        cursor: 'move',
        revert: true
    });

    $('textarea').droppable({
        drop: handleDropEvent
    });

    function handleDropEvent(event, ui) {
        var cica = $(this).val() +''+ ui.draggable.text();

        $(this).val(cica);

    }


});
jQuery.curCSS = function(element, prop, val) {
    return jQuery(element).css(prop, val);
};