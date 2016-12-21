<?php

/**
 * @file
 * Hooks provided by the Multistep Nodeform module.
 */


/**
 * @addtogroup hooks
 * @{
 */

/**
 * Alter the step definition that will be attached to a form.
 *
 * @param array $steps_cached
 *   List of steps. @see msnf_read_steps() for structure details.
 * @param array $context
 *   Array of contextual variables you can use to determine the steps.
 *   The array contains:
 *     - entity_type: The entity type the steps are for.
 *     - bundle: The bundle the steps are for.
 *     - form: The form array of the form the steps will be attached to.
 *     - form_state: The current form_state of the form.
 */
function hook_msnf_info_steps_alter(&$steps_cached, $context) {
  if ($context['entity_type'] == 'node' && $context['bundle'] == 'article' && !empty($context['form']['node']->nid)) {
    // Disable steps on node/[nid]/edit for nodes of type "article".
    $steps_cached['node']['article'] = array();

    // Hide "skip" button for step "basics" in content type "article".
    $steps_cached['node']['article']['step_basics']->format_settings['instance_settings']['buttons']['skip'] = FALSE;
  }
}

/**
 * Alter the list of stes that are allowed to skip.
 *
 * @param array $skippable
 *   List of steps to skip.
 *   @see _msnf_steps_get_skippable() for structure details.
 * @param array $context
 *   Array of contextual variables you can use in the alter hook.
 *   The array contains:
 *     - form: The form array of the form the steps will be attached to.
 *     - form_state: The current form_state of the form.
 */
function hook_msnf_steps_skippable_alter(&$skippable, $context) {
  if ('article' === $context['form']['node']->type) {
    // All steps are required.
    $skippable = array();
  }
}

/**
 * @} End of "addtogroup hooks".
 */
