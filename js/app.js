require( 'app', function(exports, module) {  var Widget = require("wdg");
var Statistics = require("statistics");
var CyclicBuffer = require("tfw.cyclic-buffer");

var D = Widget.div;
var T = Widget.tag;

exports.start = function() {
    console.info("[app] navigator=...", navigator);

    window.setTimeout(function() {
        var arr = [];
        var buf = new CyclicBuffer({ capacity: 2048 });

        var t1 = chrono(function() {
            var i;
            for (i = 0 ; i < 2048 ; i++) {
                arr.push( i );
            }
            for (i = 0 ; i < 2048 ; i++) {
                arr.pop();
            }
        });
        console.info("[app] t1=...", t1);
        var t2 = chrono(function() {
            var i;
            for (i = 0 ; i < 2048 ; i++) {
                buf.push( i );
            }
            for (i = 0 ; i < 2048 ; i++) {
                buf.pop();
            }
        });
        console.info("[app] t2=...", t2);
        var t3 = chrono(function() {
            var i;
            for (i = 0 ; i < 2048 ; i++) {
                arr.push( "A" + i );
            }
            for (i = 0 ; i < 2048 ; i++) {
                arr.pop();
            }
        });
        console.info("[app] t3=...", t3);
        var t4 = chrono(function() {
            var i;
            for (i = 0 ; i < 2048 ; i++) {
                buf.push( "A" + i );
            }
            for (i = 0 ; i < 2048 ; i++) {
                buf.pop();
            }
        });
        console.info("[app] t4=...", t4);

        var div = new Widget({ id: 'TEST' });
        div.clear(
            T('p').text( "Tests performed on " + navigator.userAgent ),
            T('h1').text( "Test 1" ),
            new Statistics({ Array: t1, Buffer: t2 }),
            T('h1').text( "Test 2" ),
            new Statistics({ Array: t3, Buffer: t4 })
        );
        
    }, 1200);
};



function chrono( f ) {
    var t0 = Date.now();

    for( var i = 0 ; i < 10000 ; i++ ) {
        f();
    }
    return Date.now() - t0;
}
 });
