

jQuery( document ).ready(function() {

});

(function($, Drupal, window, document, undefined) {

    Drupal.behaviors.handleTermHover = {

        attach: function (context, settings) {

            $(document).ready(function() {

                    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
                    $('.tree li.parent_li > span').on('click', function (e) {
                        var children = $(this).parent('li.parent_li').find(' > ul > li');
                        if (children.is(":visible")) {
                            children.hide('fast');
                            $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
                        } else {
                            children.show('fast');
                            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
                        }
                        e.stopPropagation();
                    });





                    $('fieldset.field-group-fieldset.collapsible .entityreference-dragdrop-container-available').prepend('<div><input type="text" name="search"/></div>'); //add input box
                    $('fieldset.field-group-fieldset.collapsible .entityreference-dragdrop-container-available').on('keyup','input',function(e){

                        var text = $('fieldset.field-group-fieldset.collapsible .entityreference-dragdrop-container-available input').val().toLowerCase();;
                        text = new RegExp(text);
                        $('fieldset.field-group-fieldset.collapsible .entityreference-dragdrop-container-available ul').find('li').css('color','black').hide(0);
                        $('fieldset.field-group-fieldset.collapsible .entityreference-dragdrop-container-available ul').find('li').each(function(){

                            $(this).find('a').filter(function () {
                                var filtered = $(this).text().toLowerCase();
                                var res = text.test(filtered);
                                $Cica = $(this);
                                if(res == true){
                                    $Cica.parent().parent().parent().css('color','red').show();
                                }
                            })
                        })
                    });


                    $('fieldset.field-group-fieldset.collapsible').each(function(){
                        $(this).find('.fieldset-legend').append('<div class="szurok"></div>');
                        var szuro = $(this).find('.szurok');

                        var elem = $(this).find('.form-checkboxes input[type="checkbox"]');

                        $(elem).each(function(){
                            if($(this).attr('checked') == 'checked'){
                                $(this).addClass('pipalva').parent().appendTo(szuro);
                            }
                        })

                        //$(this,'.form-item .form-radios .form-item input.pipalva').parent().remove();
                    });


                    $('.node-form .form-radios').on('click','label',function(){
                        if (!$(this).prev().hasClass('.pipalva')){
                            $Input = $(this).prev();
                            $Input.prop('checked',true);
                            if($Input.is(':checked')){
                                var szuro = $(this).parents('fieldset.field-group-fieldset').find('.szurok');
                                var elem = $(szuro).find('input').removeClass('pipalva').parent().detach();
                                var form = $(this).parents('fieldset.field-group-fieldset').find('.form-item .form-radios');
                                $(elem).appendTo(form);
                                $(szuro).find('.form-item').remove();

                                $Input.addClass('pipalva').parent().appendTo(szuro);
                                // $(this).parent().parent().parent().parent().parent().parent().find('input.pipalva').parent().remove();
                            }
                        }

                    })




                    $('body').on('click','label',function(){
                        var cica = $(this).prev().attr('class');

                        if (/pipalva/i.test(cica)){
                            $Input = $(this).prev();
                            $Input.removeClass('pipalva');
                            var form = $(this).parents('fieldset.field-group-fieldset').find('.form-item .form-checkboxes');
                            $(this).parent().appendTo(form);
                        }
                        else{
                                $Input = $(this).prev();
                                var szuro = $(this).parents('fieldset.field-group-fieldset').find('.szurok');
                                // var elem = $(szuro).find('input').removeClass('pipalva').parent();
                                var form = $(this).parents('fieldset.field-group-fieldset').find('.form-item .form-checkboxes');
                                //$(elem).appendTo(form);
                                //$(szuro).find('.form-item').remove();
                                $Input.checked = true;
                                $Input.addClass('pipalva').parent().appendTo(szuro);
                                // $(this).parent().parent().parent().parent().parent().parent().find('input.pipalva').parent().remove();

                        }







                    });




                }
            );
        }
    }
})(jQuery, Drupal, this, this.document);