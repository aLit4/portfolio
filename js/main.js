(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-full-width').cubeportfolio({
        // loadMore: '#js-loadMore-full-width',
        // loadMoreAction: 'auto',
        layoutMode: 'mosaic',
        sortToPreventGaps: true,
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'moveRight',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // SINGLE PAGE

        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: false,
        singlePageAnimation: 'right',
        singlePageCounter: '',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
              url: url,
              type: 'GET',
              dataType: 'html',
              timeout: 30000
            })
            .done(function(result) {
              t.updateSinglePage(result);
            })
            .fail(function() {
              t.updateSinglePage('AJAX Error! Please refresh the page!');
            });
            },

    });


})(jQuery, window, document);
