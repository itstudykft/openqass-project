<?php

function oqapp_form_alter(&$form, &$form_state, $form_id) {



    if($form_id == "theme_content_node_form"){
       if(isset ($_GET['field_subject'])){
           $subject= taxonomy_term_load($_GET['field_subject']);

           $szoveg = $subject->field_learning_objectives_learni["und"][0]["value"];

           $form['field_learning_objectives_learni']["und"]["#default_value"] = $szoveg;
           $form['field_learning_objectives_learni']["und"][0]["#default_value"] = $szoveg;
           $form['field_learning_objectives_learni']["und"][0]["value"]["#default_value"] = $szoveg;

           $szoveg = $subject->field_cross_curricular_links["und"][0]["value"];

           $form['field_cross_curricular_links']["und"]["#default_value"] = $szoveg;
           $form['field_cross_curricular_links']["und"][0]["#default_value"] = $szoveg;
           $form['field_cross_curricular_links']["und"][0]["value"]["#default_value"] = $szoveg;

       }
    }
}