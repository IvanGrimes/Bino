$(window).on("load",function(){
    $('.services-slider').coreSlider({
        interval: 5000,                                         // Interval of time between slide changes
        loop: true,                                             // When slider finish, should it loop again from first slide?
        slideshow: true,                                        // Enable/Disable automatic slideshow
        resize: true,                                           // Should be slider responsive on screen resize
        pauseOnHover: true,                                     // Pause the slideshow when hovering over slider
        startOnHover: false,                                    // Start the slideshow when hovering over slider
        sliderSelector: '.services-slider__list',                    // List selector (all items are inside this container)
        viewportSelector: '.services-slider__viewport',              // Viewport selector
        itemSelector: '.services-slider__item',                      // Slider items selector
        navEnabled: true,                                       // Enable/Disable navigation arrows
        navSelector: '.services-slider__nav',                        // Selector for navigation arrows container
        navItemNextSelector: '.services-slider__arrow_right',       // 'Next' arrow selector
        navItemPrevSelector: '.services-slider__arrow_left',        // 'Prev' arrow selector
        controlNavEnabled: false,                               // Enable/Disable control navigation (dots)
        controlNavSelector: '.services-slider__control-nav',         // Control navigation container selector (inside will be created dots items)
        controlNavItemSelector: 'services-slider__control-nav-item', // Single control nav dot (created dynamically. Write without dot. If you need more that one class - add them with space separator)
        loadedClass: 'is-loaded',                               // Classname, that will be added when slider is fully loaded
        clonedClass: 'is-cloned',                               // Classname, that will be added to cloned slides (see option 'clone')
        disabledClass: 'is-disabled',                           // Classname, that will be added it item is disabled (in most of cases - item will be display: noned)
        activeClass: 'is-active',                               // Classname, that will be added to active items (for example control navs, etc.)
        reloadGif: false,                                       // Reload gif's on slide change for replaying cycled animation inside current slide
        clone: false,                                           // Indicates, that at begin and at end of slider carousel items will be cloned to create 'infitite' carousel illusion
        items: 1,                                               // How mutch items will be placed inside viewport. Leave 1 if this is slider, 2 ot more - it will look like a carousel
        itemsPerSlide: 1,                                       // How many items must be slided by one action (NOTE: Must be less than 'items' option)
        cloneItems: 0                                           // How mutch items will be cloned at begin and at end of slider
    });
});
