<?php
/**
 * 
 * @category  Magazento
 * @author    Ivan Proskuryakov http://www.magazento.com <volgodark@gmail.com>
 * @copyright Copyright (C)2013 Magazento
 *
 */

class Magazento_Chip_Helper_Template extends Mage_Core_Helper_Abstract {

    function getInstallationContent() {
        $content = '
                    <strong>Pages:</strong>
                    <ul>
                        <li>home</li>
                        <li>sample</li>
                    </ul><br/>
                    <strong>Static Blocks:</strong>
                    <ul>
                        <li>footer_one</li>
                        <li>new_products</li>
                        <li>sale_products</li>
                        <li>no_products_category</li>
                        <li>no_products_cart</li>
                        <li>product_tabs_info1</li>
                        <li>product_tabs_info2</li>
                        <li>footer_map_info</li>
                        <li>product_info1</li>
                        <li>product_info2</li>
                        <li>product_info3</li>
                        <li>website_menu</li>
                        <li>cart_crosssell</li>
                        <li>product_upsell</li>
                        <li>reviews</li>
                        <li>product_viewed</li>
                    </ul>';
        return $content;
    }
    function getInstallationNote() {
        $content = 'Make sure that you have at least 5 products marked as new and 5 products with special price to display widgets on pages correctly.';
        return $content;
    }
}
