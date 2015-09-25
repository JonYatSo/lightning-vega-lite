'use strict';

var LightningVisualization = require('lightning-visualization');
var vega = require('./deps/vega');
var vl = require('vega-lite');

/*
 * Extend the base visualization object
 */
var Visualization = LightningVega.extend({

    init: function() {
        this.render();
    },

    render: function() {
        var self = this;
        vega.parse.spec(this.data, function(chart) {
            var vis = chart({el: self.el, renderer: 'svg'});
            vis.update();
        });
    },

    formatData: function(data) {
        var d = vl.compile(data.spec);
        return d;
    },

    updateData: function(formattedData) {
        this.data = formattedData;
        this.render();
    },

    appendData: function(formattedData) {    
    }
});


module.exports = Visualization;
