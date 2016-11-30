jQuery(document).ready(function($) {

    $('.entityreference-dragdrop-label').each(function(){
        $(this).clone().removeClass().addClass('entityreference-dragdrop-label2').insertBefore(this);

    });
    $( document ).ajaxComplete(function() {
        $('.entityreference-dragdrop-label').each(function(){
            if($(this).parent().find('div').hasClass('entityreference-dragdrop-label2')){

            }else{
                $(this).clone().removeClass().addClass('entityreference-dragdrop-label2').insertBefore(this);
            }


        });
    });
});
