jQuery.noConflict();

jQuery.setObservers = function() {

        
    jQuery( ".slider-range" ).slider({
        range: true,
        animate: true,
        step:1,
        min: categoryMinPrice,
        max: categoryMaxPrice,
        values: [ categoryMinPrice, categoryMaxPrice ]
    });
    
    jQuery.each(jQuery(".ajax-option-select"), function() {
        jQuery(this).on("click",function(){
            jQuery.ProcessEvent(this.value);
        })
    });  
    jQuery.each(jQuery(".ajax-option-checkbox"), function() {
        jQuery(this).on("click",function(){
            jQuery.ProcessEvent(this.value);
        })
    });  
    
    jQuery.each(jQuery(".ajax-option-link"), function() {
        jQuery(this).on("click",function(event){
            event.preventDefault();
            var query = jQuery.getUrlQuery(this.href);
            if (query) {
                var url = categoryUrl + query;
            } else {
                var url = categoryUrl;
            }
            jQuery.ProcessEvent(url);
        })
    });   
    
    jQuery.each(jQuery("a.list"), function() {
        jQuery(this).on("click",function(event){
            event.preventDefault();
            var query = jQuery.getUrlQuery(this.href);
            if (query) {
                var url = categoryUrl + query;
            } else {
                var url = categoryUrl;
            }
            jQuery.ProcessEvent(url);
        })
    }); 
    
    jQuery.each(jQuery("a.grid"), function() {
        jQuery(this).on("click",function(event){
            event.preventDefault();
            var query = jQuery.getUrlQuery(this.href);
            if (query) {
                var url = categoryUrl + query;
            } else {
                var url = categoryUrl;
            }
            jQuery.ProcessEvent(url);
        })
    });   
    
    jQuery.each(jQuery("div.sort-by select"), function(element) {
        jQuery(this).attr("onchange" , "");
        jQuery(this).on("change",function(event){
            var query = jQuery.getUrlQuery(this.value);
            if (query) {
                var url = categoryUrl + query;
            } else {
                var url = categoryUrl;
            }
            jQuery.ProcessEvent(url);
        })
    });   
    jQuery.each(jQuery("div.sort-by a"), function(element) {
        jQuery(this).on("click",function(event){
            event.preventDefault();     
            var query = jQuery.getUrlQuery(this.href);
            if (query) {
                var url = categoryUrl + query;
            } else {
                var url = categoryUrl;
            }
            jQuery.ProcessEvent(url);
        })
    });  
    
    jQuery.each(jQuery("div.sort-by a"), function(element) {
        jQuery(this).on("click",function(event){
            event.preventDefault();     
            var query = jQuery.getUrlQuery(this.href);
            if (query) {
                var url = categoryUrl + query;
            } else {
                var url = categoryUrl;
            }
            jQuery.ProcessEvent(url);
        })
    });   
    
    jQuery.each(jQuery("div.limiter a"), function(element) {
//        jQuery(this).attr("onchange" , "");        
        jQuery(this).on("click",function(event){
            event.preventDefault();     
            var query = jQuery.getUrlQuery(this.href);
            if (query) {
                var url = categoryUrl + query;
            } else {
                var url = categoryUrl;
            }
            jQuery.ProcessEvent(url);
        })
    });  
    
    jQuery.each(jQuery("div.pages li a"), function(element) {
        jQuery(this).on("click",function(event){
            event.preventDefault();     
            var query = jQuery.getUrlQuery(this.href);
            if (query) {
                var url = categoryUrl + query;
            } else {
                var url = categoryUrl;
            }
            jQuery.ProcessEvent(url);
        })
    });  
    
    jQuery.each(jQuery("a.btn-remove"), function(element) {
        jQuery(this).on("click",function(event){
            event.preventDefault();     
            var query = jQuery.getUrlQuery(this.href);
            if (query) {
                var url = categoryUrl + query;
            } else {
                var url = categoryUrl;
            }
            jQuery.ProcessEvent(url);
        })
    });  

    jQuery("#from-price-range").on("change",function(event){
        var fromValue = jQuery("#from-price-range").val();
        var toValue = jQuery("#to-price-range").val();
        if ( fromValue < categoryMinPrice ) {
            fromValue = categoryMinPrice;
            jQuery("#from-price-range").val(categoryMinPrice);
        }
        if ( fromValue > toValue ) {
            fromValue = toValue;
            jQuery("#from-price-range").val(fromValue);
        }
        jQuery( ".slider-range" ).slider( "option", "values", [fromValue,toValue] );

    })
    jQuery("#to-price-range").on("change",function(event){
        var fromValue = jQuery("#from-price-range").val();
        var toValue = jQuery("#to-price-range").val();
        if ( toValue > categoryMaxPrice ) {
            toValue = categoryMaxPrice;
            jQuery("#to-price-range").val(categoryMaxPrice);
        }
        if ( toValue < fromValue ) {
            toValue = fromValue;
            jQuery("#to-price-range").val(toValue);
        }
//        alert();
        jQuery( ".slider-range" ).slider( "option", "values", [fromValue,toValue] );
    })
    
}
jQuery.BindSlider = function() {
     jQuery( ".slider-range" ).bind( "slidechange", function(event, ui) {
        jQuery('#from-price-range').val(ui.values[0]); 
        jQuery('#to-price-range').val(ui.values[1]);           
        jQuery.ProcessEvent(jQuery.getPriceQuery(ui.values[0],ui.values[1]));
    });        
}



jQuery.getUrlQuery = function(url) {
//    alert(url)
    var Href = url;
    if ( Href.indexOf("?") > -1 ){
        var data = Href.substr(Href.indexOf("?")).toLowerCase();
        return data;
    }
    return false;
}

jQuery.getPriceQuery = function(from,to) {
        
        var strReturn = "";
        var price = 'price='+from+','+to;        
        var strHref = document.location.hash;
        
        if ( strHref.indexOf("#") > -1 ){
            var strQueryString = strHref.replace('#', '');
            var aQueryString = strQueryString.split("&");
            for ( var i = 0; i < aQueryString.length; i++ ){
                if (aQueryString[i].indexOf("price=") == -1 ){
                    strReturn= strReturn + aQueryString[i] + "&" ;
                }
            }
        }
        
        strReturn = "?" + strReturn + price;
        return strReturn;
    }



jQuery.ProcessEvent = function(url) {
////    alert('Check ProcessEvent URL param')
////    window.location = url;
//
//    var hash = "";
//    if ( url.indexOf("catalogsearch/result") > -1 ){
        var hash = url.substring(url.indexOf('?'));
        hash = hash.replace('?', '#');
//        alert(hash);
        document.location.hash = hash;
//    } else {
//        hash = url.replace('?', '#');
//        document.location = hash;
////        alert(hash);
//    }





    jQuery.ShowLoader();
//    alert(url);
    jQuery.getJSON(url, function(jsondata) {
        filter =  jQuery('#filter-json-temp .block-layered-nav').html();
        jQuery('.sidebar').html(jsondata.left);
        jQuery('#chip-ajax-content').html(jsondata.content);
        console.log(jsondata.query);
        jQuery.setObservers();

        jQuery(".slider-range" ).slider({
            values: [ jsondata.minPrice, jsondata.maxPrice ]
        });
        jQuery('#from-price-range').val(jsondata.minPrice);
        jQuery('#to-price-range').val(jsondata.maxPrice);

        jQuery.BindSlider();
        jQuery.HideLoader();
    });

}




// ======================================= LOADERS ====
jQuery.ShowLoader = function() {

    var maincol = jQuery('#chip-ajax-content');

    maincol.append('<div class="ajaxnavigation-overflow-all"></div>');
    maincol.append(loadingHtml);

    jQuery(".ajaxnavigation-overflow-all").css({
        'width' : jQuery( document ).width(),
        'height' : jQuery( document ).height()
    });
    jQuery(".products-list-loader-main").css({
        'top' : (jQuery( window ).height()/2) - (30/2),
        'left' : (jQuery( window ).width()/2) - (250/2),
        'width' : 250,
        'height' : 30
    });
}

jQuery.HideLoader = function() {
    jQuery(".products-list-loader-main").remove();
    jQuery(".ajaxnavigation-overflow-all").remove();
}
