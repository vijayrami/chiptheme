<?php
/**
 * 
 * @category  Magazento
 * @author    Ivan Proskuryakov http://www.magazento.com <volgodark@gmail.com>
 * @copyright Copyright (C)2013 Magazento
 *
 */
class Magazento_Chip_Block_Homepage_Popularproducts extends Mage_Catalog_Block_Product_List
{
    protected $products;

    protected function _construct() {
        parent::_construct();
    }

    public function getProductsCollection () {

        $storeId = Mage::app()->getStore()->getId();
        $collection = Mage::getResourceModel('reports/product_collection')
            ->addAttributeToSelect('*')
            ->setStoreId($storeId)
            ->addStoreFilter($storeId)
            ->addViewsCount()
            ->setPageSize(3)
            ->setCurPage(1)
            ->setOrder('views_count', 'desc');

        Mage::getSingleton('catalog/product_status')->addVisibleFilterToCollection($collection);
        Mage::getSingleton('catalog/product_visibility')->addVisibleInCatalogFilterToCollection($collection);


        $this->setProductCollection($collection);

        return $collection;
    }

}
