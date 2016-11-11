<?php
/**
 * 
 * @category  Magazento
 * @author    Ivan Proskuryakov http://www.magazento.com <volgodark@gmail.com>
 * @copyright Copyright (C)2013 Magazento
 *
 */
class Magazento_Chip_Block_Homepage_Saleproducts extends Mage_Catalog_Block_Product_List
{
    protected $products;

    protected function _construct() {
        parent::_construct();
    }

    public function getProductsCollection () {
        $collection = Mage::getResourceModel('catalog/product_collection')
            ->setVisibility(Mage::getSingleton('catalog/product_visibility')->getVisibleInCatalogIds())
            ->addAttributeToSelect(array('name', 'price', 'small_image', 'short_description'), 'inner')
            ->addAttributeToSelect('special_price')
            ->addAttributeToFilter(
                array(
                    array('attribute' => 'special_price', 'is'=>new Zend_Db_Expr('not null'))
                )
            )
            ->addAttributeToSelect('status')
            ->addStoreFilter()
            ->setPageSize(3)
            ->setCurPage(1);

        return $collection;
    }

}
