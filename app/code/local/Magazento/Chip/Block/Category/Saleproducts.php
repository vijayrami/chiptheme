<?php
/**
 * 
 * @category  Magazento
 * @author    Ivan Proskuryakov http://www.magazento.com <volgodark@gmail.com>
 * @copyright Copyright (C)2013 Magazento
 *
 */
class Magazento_Chip_Block_Category_Saleproducts extends Mage_Catalog_Block_Product_List
{
    protected $products;

    protected function _construct() {
        parent::_construct();
    }

    public function getProductsCollection () {
        $_category =  Mage::registry('current_category');
        $collection = Mage::getResourceModel('catalog/product_collection')
            ->joinField('category_id','catalog/category_product','category_id','product_id=entity_id',null,'left')
            ->addAttributeToFilter('category_id', array('in' => $_category->getId()))
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
//            ->addCategoryFilter(Mage::getModel('catalog/category')->load('#');
            ->setPageSize(10)
            ->setCurPage(1);

        return $collection;
    }

}
