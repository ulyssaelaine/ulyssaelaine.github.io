// http://sachinchoolur.github.io/lightGallery/docs/

// GALLERY 1
jQuery('#gallery1').on('click', function (e) {
    "use strict";   
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: false,
        autoplayControls: true,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/portfolio/3RPuzzle.png',
            // Thumbnail url
            'thumb': 'images/portfolio/3RPuzzle.png',
            // Title of the image
            'subHtml': '3RS PUZZLE'
        }, {
            'src': 'images/portfolio/operatingsystemalgorithms.png',
            'thumb': 'images/portfolio/operatingsystemalgorithms.png',
            'subHtml': "OPERATING SYSTEM SCHEDULING ALGORITHMS"
        }, {
            'src': 'images/portfolio/computerizedexam.png',
            'thumb': 'images/portfolio/computerizedexam.png',
            'subHtml': "COMPUTERIZED EXAMINATION SYSTEM"
        }]
        
    });
    
    return false;
});

// GALLERY 2
jQuery('#gallery2').on('click', function (e) {
    "use strict";   
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: false,
        autoplayControls: true,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/portfolio/elibrary.png',
            // Thumbnail url
            'thumb': 'images/portfolio/elibrary.png',
            // Title of the image
            'subHtml': 'E-LIBRARY INTERNET USAGE MONITORING SYSTEM'
        }]
        
    });
    
    return false;
});

// GALLERY 3
jQuery('#gallery3').on('click', function (e) {
    "use strict"; 
    e.preventDefault();
    
    // Initialize the plugin
    jQuery(this).lightGallery({
        
        // Settings
        dynamic: true,
        zoom: true,
        fullScreen: true,
        autoplay: true,
        autoplayControls: true,
        pause: 5000,
        thumbnail: true,
        download: true,
        counter: true,
        actualSize: true,
        
        // Images
        dynamicEl: [{
            // Image url
            'src': 'images/portfolio/laurelleafwebsite.png',
            // Thumbnail url
            'thumb': 'images/portfolio/laurelleafwebsite.png',
            // Title of the image
            'subHtml': "LAUREL LEAF WEBSITE"
        }, {
            'src': 'images/portfolio/lifeofalyceanblog.png',
            'thumb': 'images/portfolio/lifeofalyceanblog.png',
            'subHtml': 'LIFE OF A LYCEAN BLOG'
        }]
        
    });
    
    return false;
});