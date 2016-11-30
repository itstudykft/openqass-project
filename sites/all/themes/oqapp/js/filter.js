
jQuery(document).ready(function($) {





    $('body .form-type-checkbox').on('click','label',function(){
        var cica = $(this).prev().attr('class');

        if (/pipalva/i.test(cica)){
            //alert(cica);
            $Input = $(this).prev();
            $Input.removeClass('pipalva');
            var form = $(this).parents('fieldset.field-group-fieldset').find('.form-item .form-checkboxes');
            $(this).parent().appendTo(form);
        }
        else{
            // alert(cica);
            $Input = $(this).prev();
            var szuro = $(this).parents('fieldset.field-group-fieldset').find('.szurok');
            // var elem = $(szuro).find('input').removeClass('pipalva').parent();

            //$(elem).appendTo(form);
            //$(szuro).find('.form-item').remove();
            $Input.checked = true;
            $Input.addClass('pipalva');
            var form = $(this).parent();
            $(form).appendTo(szuro);
            // $(this).parent().parent().parent().parent().parent().parent().find('input.pipalva').parent().remove();

        }

    });
    $('a.facetapi-inactive').parent().addClass('facetapi-inactive');
    $('a.facetapi-active').parent().addClass('facetapi-active');
    $( document ).ajaxComplete(function() {
        $('a.facetapi-inactive').parent().addClass('facetapi-inactive');
        $('a.facetapi-active').parent().addClass('facetapi-active');
    });
});



(function($, Drupal, window, document, undefined) {

    Drupal.behaviors.handleTermHover = {

        attach: function (context, settings) {

            $(document).ready(function() {




                    $('ul').each(function(){
                        if($(this).find('li').length < 1){
                            $(this).hide();
                        }

                    })



                    $('.tree li:has(ul)').addClass('parent_li').find('.harmas').attr('title', 'Expand this branch');

                    var parent = $('.tree li.parent_li .harmas');
                    var children = $(parent).parent('li.parent_li').find(' > ul > li');
                    children.parent().hide('fast');
                    $('.tree li.parent_li .harmas').on('click', function (e) {
                        var children = $(this).parent('li.parent_li').find(' > ul > li');
                        if (children.is(":visible")) {
                            children.parent().hide('fast');
                            $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
                        } else {
                            children.parent().show('fast');
                            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
                        }
                        e.stopPropagation();
                    });


                    $('.tree li').find('.cimke').parent().attr('title', 'Expand this branch');
                    var parent = $('.tree li.parent_li .cimke').parent();
                    var children = $(parent).parent('li.parent_li').find(' > ul > li');
                    children.parent().hide('fast');
                    $('.tree li.parent_li .cimke').parent().on('click', function (e) {
                        var children = $(this).parent('li.parent_li').find(' > ul > li');
                        if (children.is(":visible")) {
                            children.parent().hide('fast');
                            $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
                        } else {
                            children.parent().show('fast');
                            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
                        }
                        e.stopPropagation();
                    });


                    $('.entityreference-dragdrop-container-available').hide();
                    $('.entityreference-dragdrop-container-selected').on('click',function(){

                        $('.entityreference-dragdrop-container-selected').removeClass('selected');
                        $(this).addClass('selected');
                        if($(this).parent().find('.entityreference-dragdrop-container-available').hasClass('selected')){

                        }else{
                            $('.entityreference-dragdrop-container-available').slideUp(400).removeClass('selected');
                        }



                        if($(this).parent().find('.entityreference-dragdrop-container-available').hasClass('selected')){

                        }else{
                            $('.entityreference-dragdrop-container-available').removeClass('selected');
                            $(this).parent().find('.entityreference-dragdrop-container-available').addClass('selected').slideDown(400);

                        }



                    })
                    $('.entityreference-dragdrop-container-available').each(function(){
                        if ($(this).find('input').hasClass('new-search')){

                            //add input box
                        }else{

                            $(this).prepend('<div>Search: <br><input type="text" class="new-search" name="search"/></div>');
                        }
                    })

                    $('.entityreference-dragdrop-container-available')

                    $('.entityreference-dragdrop-container-available').on('keyup','input',function(e){

                        var text = $(this,'input').val().toLowerCase();
                        text = new RegExp(text);

                        $(this).parent().parent().find('li').css('color','black').hide(0);
                        $(this).parent().parent().find('li').each(function(){

                            $(this).filter(function () {
                                var filtered = $(this).text().toLowerCase();

                                var res = text.test(filtered);
                                $Cica = $(this);
                                if(res == true && $Cica.hasClass('szurt')){
                                    $Cica.show();
                                }
                            })
                        })
                    });
// Dropdown filter select list
                    $(".entityreference-dragdrop-container-available li").addClass('szurt');
                    $(".entityreference-dragdrop-container-available").on("change","#filter_select",function(e) {
                        $(this).parent().find('li').hide().removeClass('szurt');
                        var szuro = $(this).val();

                        $(this).parent().find("span.field-content").each(function(){
                            if ($(this).hasClass(szuro)){
                                $(this).parents("li").show().addClass('szurt');
                            }
                        })
                    })





                    $('.entityreference-dragdrop-container-available').each(function(){
                        if($(this).hasClass("vegzett")){
                            console.log("nope");
                        }
                        else{
                            var classList = [];
                            var classes = [];
                            if ($(this).parents('ul').hasClass('hozzaadva')){
                                console.log('Nem kell select');
                            }else{
                                $(this).prepend('<select id="filter_select"></select>');
                                $(this).find('ul').addClass('hozzaadva');
                                $(this).find('span.field-content').each(function(){
                                    var clas = $(this).attr('class').split("KLAS");
                                    if(clas.length > 1){

                                        $(this).removeClass();
                                        for (var i = 0; i < clas.length; i++) {
                                            var valami = clas[i];

                                            valami = valami.split(' ');

                                            for (var z = 0; z < valami.length; z++) {

                                                $(this).addClass(valami[z]);
                                                classes.push(valami[z]);
                                            }
                                        }
                                    }else{
                                        var clas = $(this).attr('class');
                                        var valami = clas;

                                        valami = clas.split(' ');

                                        for (var z = 0; z < valami.length; z++) {
                                            classes.push(valami[z]);
                                        }
                                    }
                                });
                                classList = unique(classes);
                                console.log(classes);
                                function unique(list) {
                                    var result = [];
                                    $.each(list, function(i, e) {
                                        if ($.inArray(e, result) == -1) result.push(e);
                                    });
                                    return result;
                                }
                                var option = '';
                                for (var i=0;i<classList.length;i++){
                                    var name = classList[i].replace(/-/g," ");
                                    if (name == "field content"){
                                        name = "- All -";
                                    }
                                    option += '<option value="'+ classList[i] + '">' + name + '</option>';
                                }
                                $(this).find('#filter_select').append(option);
                            }
                            $(this).addClass('vegzett');

                        }
                        $(this).find('select').chosen();
                    })



                    $('fieldset.field-group-fieldset.collapsible').each(function(){
                        if($(this).find('div').hasClass('szurok')){

                        }else{
                            $(this).find('.fieldset-legend').append('<div class="szurok"></div>');
                        }

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
                                var elem = $(szuro).find('input[type="checkbox"').removeClass('pipalva').parent().detach();
                                var form = $(this).parents('fieldset.field-group-fieldset').find('.form-item .form-radios');
                                $(elem).appendTo(form);
                                $(szuro).find('.form-item').remove();

                                $Input.addClass('pipalva').parent().appendTo(szuro);
                                // $(this).parent().parent().parent().parent().parent().parent().find('input.pipalva').parent().remove();
                            }
                        }

                    });









                }
            );
        }
    }
})(jQuery, Drupal, this, this.document);