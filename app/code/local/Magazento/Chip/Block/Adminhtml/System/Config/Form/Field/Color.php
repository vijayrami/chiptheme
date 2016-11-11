<?php
/**
 *
 * @category  Magazento
 * @author    Ivan Proskuryakov http://www.magazento.com <volgodark@gmail.com>
 * @copyright Copyright (C)2013 Magazento
 *
 */
class Magazento_Chip_Block_Adminhtml_System_Config_Form_Field_Color extends Mage_Adminhtml_Block_System_Config_Form_Field
{
    /**
     * Override field method to add js
     *
     * @param Varien_Data_Form_Element_Abstract $element
     * @return String
     */
    protected function _getElementHtml(Varien_Data_Form_Element_Abstract $element)
    {

        // Get the default HTML for this option
        $html = parent::_getElementHtml($element);

        if ( !Mage::registry('mColorPicker') ) {
            $html .= '
                <script type="text/javascript" src="'.$this->getJsUrl('magazento/jquery.min.js').'"></script>
                <script type="text/javascript" src="'.$this->getJsUrl('magazento/mColorPicker.min.js').'"></script>
                <script type="text/javascript">
                jQuery.noConflict();
                jQuery.fn.mColorPicker.init.replace = false;
                jQuery.fn.mColorPicker.init.enhancedSwatches = false;
                jQuery.fn.mColorPicker.init.allowTransparency = true;
                jQuery.fn.mColorPicker.init.showLogo = false;
                jQuery.fn.mColorPicker.defaults.imageFolder = "'.$this->getJsUrl('magazento/mColorPicker/').'";
                </script>
                ';
            Mage::register('mColorPicker', 1);
        }
        $html .= '
        <script type="text/javascript">
        jQuery(function($){
            $("#'.$element->getHtmlId().'").width("250px").attr("data-hex", true).mColorPicker({swatches: [
              "#9a1212",
              "#93ad2a",
              "#00ff00",
              "#00ffff",
              "#0000ff",
              "#ff00ff",
              "#ff0000",
              "#4c2b11",
              "#3b3b3b",
              "#000000"
            ]});
        });
        </script>
        ';
        return $html;
    }
}