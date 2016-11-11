<?php
/**
 *
 * @category  Magazento
 * @author    Ivan Proskuryakov http://www.magazento.com <volgodark@gmail.com>
 * @copyright Copyright (C)2013 Magazento
 *
 */
class Magazento_Chip_RestoreController extends Mage_Adminhtml_Controller_Action
{
    public function indexAction()
    {

     $this->loadLayout(array('default'));

         $this->_addLeft($this->getLayout()
                ->createBlock('core/text')
             ->setText(Mage::helper('chip/template')->getInstallationContent()));
		$this->_addContent($this->getLayout()->createBlock('chip/adminhtml_restore_edit'));
		$this->renderLayout();
    }

    public function saveAction() {
        if ($data = $this->getRequest()->getPost()) {
        	
        $stores = $this->getRequest()->getParam('stores', array(0));
        $setup_package = $this->getRequest()->getParam('setup_package', 0);
        $clear_scope = $this->getRequest()->getParam('clear_scope', false);
        $setup_pages = $this->getRequest()->getParam('setup_pages', 0);
        $setup_blocks = $this->getRequest()->getParam('setup_blocks', 0);
        $scope = 'stores';

        try {

            if ($setup_package) {
                foreach ($stores as $store) {
                    Mage::getConfig()->saveConfig('design/package/name', 'default', $scope, $store);
                }
            }

            if ($clear_scope) {
                foreach ($stores as $store) {
                    Mage::getModel('chip/template')->setDefaultSettings($scope, $store);
                }
            }

            if ($setup_pages) {
                Mage::getModel('chip/template')->setupPages();
            }

            if ($setup_blocks) {
                Mage::getModel('chip/template')->setupBlocks();
            }

            Mage::getSingleton('adminhtml/session')->addSuccess(
                Mage::helper('chip')->__('Selected changes has been applied! Please clear all the cache and re-login to see changes.'));
        
        }
        catch (Exception $e) {
            Mage::getSingleton('adminhtml/session')->addError(Mage::helper('ThemeOptions')->__('An error occurred while restoring theme. '.$e->getMessage()));
        }

        $this->getResponse()->setRedirect($this->getUrl("*/*/"));
        }
    }


}