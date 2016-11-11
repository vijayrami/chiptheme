<?php
/**
 * 
 * @category  Magazento
 * @author    Ivan Proskuryakov http://www.magazento.com <volgodark@gmail.com>
 * @copyright Copyright (C)2013 Magazento
 *
 */
class Magazento_Chip_Block_Homepage_Category extends Mage_Core_Block_Template {

        public function __construct()
        {
            parent::__construct();
            $this->setTemplate('magazento_chip/category_homepage.phtml');
        }


        public function getCategoryCollection() {
            $categoryCollection = Mage::getModel('catalog/category')
                ->getCollection()
                ->setStoreId(Mage::app()->getStore()->getId())
                ->addAttributeToSelect('*')
                ->addFieldToFilter('image', array('neq' => 'NULL' ));

            return $categoryCollection;
        }

    
}