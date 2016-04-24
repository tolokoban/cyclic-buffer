"use strict";
var Widget = require("wdg");
var D = Widget.div;

/**
 * @example
 * var Statistics = require("statistics");
 * var instance = new Statistics( args );
 * @class Statistics
 */
var Statistics = function( args ) {
    Widget.call(this);
    this.addClass("statistics");
    // Look for max timing.
    var max = 0;
    var name, time;
    for( name in args ) {
        time = args[name];
        max = Math.max( max, time );
    }
    
    for( name in args ) {
        time = args[name];
        this.append(
            D( 'label' ).text( name ),
            newBar( time, max )
        );
    }
};

// Extension of Widget.
Statistics.prototype = Object.create(Widget.prototype);
Statistics.prototype.constructor = Statistics;

function newBar( time, max ) {
    var bar = D( 'bar' ).text( time + " ms" );
    window.setTimeout(function() {
        bar.css( "width", Math.ceil( 280 * time / max ) + "px" );
    });
    return bar;
}


Statistics.create = function( args ) {
    return new Statistics( args );
};
module.exports = Statistics;
