<?php
/**
 *
 * @category  Magazento
 * @author    Ivan Proskuryakov http://www.magazento.com <volgodark@gmail.com>
 * @copyright Copyright (C)2013 Magazento
 *
 */
class Magazento_Chip_ActivationController extends Mage_Adminhtml_Controller_Action
{
    public function indexAction()
    {
        $this->loadLayout(array('default'));
         $this->_addLeft($this->getLayout()
                ->createBlock('core/text')
                ->setText(Mage::helper('chip/template')->getInstallationContent()));
		$this->_addContent($this->getLayout()->createBlock('chip/adminhtml_activation_edit'));
		$this->renderLayout();
    }

    public function saveAction($store) {
        if ($data = $this->getRequest()->getPost()) {
        	
        $stores = $this->getRequest()->getParam('stores', array(0));
        $setup_pages = $this->getRequest()->getParam('setup_pages', 0);
        $setup_blocks = $this->getRequest()->getParam('setup_blocks', 0);
        $scope = 'stores';

        try {



            foreach ($stores as $store) {
                Mage::getConfig()->saveConfig('design/package/name', 'chip', $scope, $store);
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
            Mage::getSingleton('adminhtml/session')->addError(Mage::helper('chip')->__('An error occurred while activating theme. '.$e->getMessage()));
        }

        $this->getResponse()->setRedirect($this->getUrl("*/*/"));
        }
    }
}