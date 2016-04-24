/**********************************************************************
 require( 'tfw.cyclic-buffer' )
 -----------------------------------------------------------------------
 The goal of a cyclic buffer is to speed up `push`, `pop`, `shift` and
 `unshift` operations.
 **********************************************************************/


function CyclicBuffer( args ) {
    if( typeof args === 'undefined' ) args = {};
    if( typeof args.capacity === 'undefined' ) args.capacity = 128;
    
    this._buffer = new Array( args.capacity );
    // Number of elements stored in the Cyclic Buffer.
    this._length = 0;
    // Index of the next free element.
    this._cursor = 0;

    if( Array.isArray( args.init ) ) {
        args.init.forEach(function ( item ) {
            this.push( item );
        }, this);
    }
}

/**
 * Add `item` at the end of the list.
 */
CyclicBuffer.prototype.push = function( item ) {
    var buffer = this._buffer;
    buffer[ this._cursor++ ] = item;
    this._length++;
    if( this._cursor == buffer.length ) this._cursor = 0;
};

/**
 * Remove the last element of the list.
 * @return The last element of the list, or `undefined` if the list is empty.
 */
CyclicBuffer.prototype.pop = function() {
    if( this._length == 0 ) return undefined;
    this._length--;
    this._cursor--;
    var buffer = this._buffer;
    if( this._cursor < 0 ) this._cursor = buffer.length - 1;
    return buffer[ this._cursor ];
};

/**
 * Remove all items from this buffer.
 */
CyclicBuffer.prototype.reset = function() {
    this._length = 0;
};


/**
 * Get the length of the buffer. That means the number of items in it,
 * not its capacity.
 */
Object.defineProperty( CyclicBuffer.prototype, 'length', {
    get: function() { return this._length; },
    set: function(v) {},
    configurable: true,
    enumerable: true
});


module.exports = CyclicBuffer;
