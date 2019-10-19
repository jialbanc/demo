/* ============================================================
 * Charts
 * This files shows how Pages uses Rickshaw, NVD3 and Sparkline
 * to render charts
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */

(function($) {

    'use strict';

    /* ============================================================
     * Rickshaw Charts
     * ============================================================ */

    $(document).ready(function() {


        /* ============================================================
         * Sparkline Charts
         * ============================================================ */

        // Renders a pie chart
        var drawSparklinePie = function() {
            $("#sparkline-pie").sparkline([4, 3, 2, 1], {
                type: 'pie',
                width: $("#sparkline-pie").width(),
                height: '200',
                sliceColors: [$.Pages.getColor('warning'), $.Pages.getColor('danger'), $.Pages.getColor('master-light'), $.Pages.getColor('master')]

            });

        }

        // Renders a line chart 
        var drawSparklineLine = function() {
            var elemWidth = $("#sparkline-line").width();
            $("#sparkline-line").sparkline([0, 10, 8, 20, 15, 10, 15, 5], {
                type: 'line',
                width: Math.round(elemWidth),
                height: '200',
                chartRangeMax: 40,
                fillColor: $.Pages.getColor('danger', .3), // Get Pages contextual color
                lineColor: 'rgba(0,0,0,0)',
                highlightLineColor: 'rgba(0,0,0,.09)',
                highlightSpotColor: 'rgba(0,0,0,.21)',

            });

            $("#sparkline-line").sparkline([10, 10, 25, 29, 20, 22, 20, 22], {
                type: 'line',
                width: Math.round(elemWidth),
                height: '200',
                fillColor: $.Pages.getColor('warning', .3), // Get Pages contextual color
                lineColor: 'rgba(0,0,0,0)',
                highlightLineColor: 'rgba(0,0,0,.09)',
                highlightSpotColor: 'rgba(0,0,0,.21)',
                composite: true // draws the new chart on top of a previously rendered chart
            });
        }

        drawSparklineLine();
        drawSparklinePie();

        var sparkResize;

        // Make charts to have responsive widths and heights
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(function() {
                drawSparklineLine();
                drawSparklinePie();
            }, 500);
        });

        $('#tabs-sparkline a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            var target = $(e.target).attr('data-target');
            var tabPane = $(target);

            if (tabPane.find('#sparkline-pie').length) {
                drawSparklinePie();
            } else if (tabPane.find('#sparkline-line').length) {
                drawSparklineLine();
            }

        });

    });
})(window.jQuery);