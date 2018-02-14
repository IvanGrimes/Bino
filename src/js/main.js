//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/coreSlider/coreSlider.js
//= ../../bower_components/mixitup/dist/mixitup.js

var mixer = mixitup('.portfolio', {
    selectors: {
      target: '.portfolio__item'
    },
    classNames: {
      delineatorElement: '__',
      delineatorModifier: '_',
      block: 'portfolio',
      elementContainer: '',
      elementFilter: 'tags_tag',
    }
});


//= partials/fixnav.js
//= partials/header-slider.js
//= partials/case-slider.js
//= partials/offcanvas.js

var getWidthBlock = $('.feature__item_icon').width(),
    getHeightBlock = getWidthBlock,
    getHeightSymbol = $('.feature__item_symbol').height(),
    marginTopSymbol = (getHeightBlock / 2) - (getHeightSymbol / 2);

    $('.feature__item_symbol').css('margin-top', marginTopSymbol);
