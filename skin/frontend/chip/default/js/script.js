jQuery.noConflict();
jQuery(function($){
    
//    $('.nav-container').meanmenu({ meanScreenWidth: "767"});
    $('.heading-title span').shuffleLetters();

    $.fn.mascony = function () {
        var categorycontainer = $('.products-grid');
        categorycontainer.masonry({
            itemSelector: 'li.item'
        });

    }

    $.fn.categoryTabs = function () {

        /* Category Tabs */
        jQuery('.category-tabs-content .tab-item').hide();
        jQuery('.category-tabs-content .tab-item:first').show();
        jQuery('#chip_category ul li.category-tab:first a').addClass('active');

        jQuery('#chip_category ul li.category-tab a').click(function(){
            jQuery('#chip_category ul li.category-tab a').removeClass('active');
            jQuery(this).addClass('active');
            var currentTab = jQuery(this).attr('href');
            jQuery('.category-tabs-content .tab-item').hide();
            jQuery(currentTab).show();
            if (currentTab == '#category-products') {
                jQuery('.toolbar').show();
            } else {
                jQuery('.toolbar').hide();
            }
            return false;
        });


    }

    $.fn.pageEffects = function () {

        /* Drop-downs */
        var config = {
            over: function(){
                if ($(this).hasClass('.dropdown-container')){
                    $(this).parent().addClass('over');
                } else {
                    $(this).addClass('over');
                }
                $('.dropdown-content', this).animate({opacity:1, height:'toggle'}, 200);
            },
            timeout: 0, // number = milliseconds delay before onMouseOut
            out: function(){
                var that = this;
                $('.dropdown-content', this).animate({opacity:0, height:'toggle'}, 200, function(){
                    if ($(this).hasClass('.dropdown-container')){
                        $(that).parent().removeClass('over');
                    } else {
                        $(that).removeClass('over');
                    }
                });
            }
        };
        $('.dropdown-container').hoverIntent( config );

        /* Product Grid */
        $(".products-grid .item").hover(
            function() {
                $(this).children('.product-item').children('.promo-sale').hide();
                $(this).children('.product-item').children('.promo-new').hide();
                $(this).children('.product-item-detailed').show();
            },
            function() {
                $(this).children('.product-item').children('.promo-sale').show();
                $(this).children('.product-item').children('.promo-new').show();
                $(this).children('.product-item-detailed').hide();

            }
        );


    };
    
    $().mascony();
    $().pageEffects();
    $().categoryTabs();

    // FIX LAYERED NAVIGATIOn
    jQuery(document).ajaxComplete(function() {
        $().mascony();
        $().pageEffects();
        $().categoryTabs();
     });         
        


    $(".sidebar-banner").hover(
        function() {
            $(this).animate({opacity: '0.9'}, { queue: false, duration: 500 });
        }, 
        function() {
            $(this).animate({opacity: '1'}, { queue: false, duration: 500 });          
        }
    );
        
    $(".category-description img").hover(
        function() {
            $(this).animate({opacity: '0.8'}, { queue: false, duration: 500 });
        }, 
        function() {
            $(this).animate({opacity: '1'}, { queue: false, duration: 500 });          
        }
    );

    /* Recently Viewed */
    $('#image-gallery').iosSlider({
        responsiveSlideWidth: true,
        desktopClickDrag: true,
        responsiveSlides: true,
        startAtSlide: 2,
        keyboardControls: true,
        navNextSelector: $('.gallery-more-views .scroll-left'),
        navPrevSelector: $('.gallery-more-views .scroll-right')
    });

    /* Recently Viewed */
    $('.iosSlider-recently').iosSlider({
        responsiveSlideWidth: true,
        desktopClickDrag: true,
        responsiveSlides: true,
        keyboardControls: true,
//        autoSlide: true,
        navNextSelector: $('.block-viewed .scroll-left'),
        navPrevSelector: $('.block-viewed .scroll-right')
    });
    
    /* Recently Viewed */    
    $('.iosSlider-upsell').iosSlider({
        responsiveSlideWidth: true,
        desktopClickDrag: true,
        responsiveSlides: true,
        keyboardControls: true,
//        autoSlide: true,
        navPrevSelector: $('.box-up-sell .scroll-left'),
        navNextSelector: $('.box-up-sell .scroll-right')
    });
    
    /* Related Products */    
    $('.iosSlider-related').iosSlider({
        responsiveSlideWidth: true,
        desktopClickDrag: true,
        responsiveSlides: true,
        keyboardControls: true,
//        autoSlide: true,
        navNextSelector: $('.box-related .scroll-left'),
        navPrevSelector: $('.box-related .scroll-right')        
    });
    
    /* Crosssell Products */    
    $('.iosSlider-crosssell').iosSlider({
        responsiveSlideWidth: true,
        desktopClickDrag: true,
        responsiveSlides: true,
        keyboardControls: true,
//        autoSlide: true,
        navNextSelector: $('.crosssell .scroll-left'),
        navPrevSelector: $('.crosssell .scroll-right')        
    });
    
    /* New Products */    
    $('.iosSlider-newproducts').iosSlider({
        responsiveSlideWidth: true,
        desktopClickDrag: true,
        responsiveSlides: true,
        keyboardControls: true,
        navNextSelector: $('.widget-new-products .scroll-left'),
        navPrevSelector: $('.widget-new-products .scroll-right')        
    });

    /* Sale Products */    
    $('.iosSlider-saleproducts').iosSlider({
        responsiveSlideWidth: true,
        desktopClickDrag: true,
        responsiveSlides: true,
        keyboardControls: true,
        navNextSelector: $('.widget-sale-products .scroll-left'),
        navPrevSelector: $('.widget-sale-products .scroll-right')        
    });

    /* Reviews */   
    $('.iosSlider-reviews').iosSlider({
        responsiveSlideWidth: true,
        desktopClickDrag: true,
        responsiveSlides: true,
        autoSlide: true,
        scrollbar: true,
        scrollbarDrag: true,
        scrollbarHide: false,
        scrollbarLocation: 'bottom',
        scrollbarHeight: '6px',
        scrollbarBorder: '1px solid #333',
        scrollbarMargin: '0 30px 16px 30px',
        scrollbarOpacity: '0.75'
        
    });

    /* Menu */
    $(".menu-button").bind("click", function(e) {

        var parentItem   = $('.header-overflow');

        if (!$(this).hasClass("opened")) {
            $(this).addClass("opened");
            $('.menu-container').css({height:'auto',display:'block'});
            console.log(parentHeight);

        } else {
            $(this).removeClass("opened");
            $('.menu-container').css({height:'0px',display:'none'});
        }
        return false;
    });

    /* QTY */
    $("#qty-increase").bind("click", function(e) {
        var qty = $('#qty').val();
        if (!isNaN( qty )){
            qty++;
            $('#qty').val(qty);
        }
        return false;
    });
    $("#qty-decrease").bind("click", function(e) {
        var qty = $('#qty').val();
        if( qty == 2) {
            $('.quantity_box_button_down').css({
                'visibility' : 'hidden'
            });
        }
        if( !isNaN( qty ) && qty > 1 ){
            qty--;
            $('#qty').val(qty);
        }
        return false;
    });

    /* Prouct Zoom*/
    $("#zoom-image").elevateZoom({gallery:'image-gallery', cursor: 'pointer', zoomType	: "inner", galleryActiveClass: "active"});

    $("#zoom-image").bind("click", function(e) {
      var ez =   $('#zoom-image').data('elevateZoom');
      ez.closeAll(); //NEW: This function force hides the lens, tint and window
            $.fancybox(ez.getGalleryList());
      return false;
    });

    /* Product Tabs */
    jQuery('#tabs .tab-item').hide();
    jQuery('#tabs .tab-item:first').show();
    jQuery('#tabs ul li:first').addClass('active');

    jQuery('#tabs ul li a').click(function(){
            jQuery('#tabs ul li').removeClass('active');
            jQuery(this).parent().addClass('active');
            var currentTab = jQuery(this).attr('href');
            jQuery('#tabs .tab-item').hide();
            jQuery(currentTab).show();
            return false;
            });

    /* To Top */
    if ($(window).width() >= 767 ) {    
        $().UItoTop({ easingType: 'easeOutQuart' });
    }

//    $('#joyRideTipContent').joyride({
//        autoStart : true,
//        postStepCallback : function (index, tip) {
//            if (index == 2) {
//                $(this).joyride('set_li', false, 1);
//            }
//        },
//
//        'cookieMonster'        : true,     // true or false to control whether cookies are used
//        'cookieName'           : 'joyride', // Name the cookie you'll use
//        'cookieDomain'         : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
//        'cookiePath'           : false,     // Set to '/' if you want the cookie for the whole website
//        modal:true,
//        expose: true
//    });


});