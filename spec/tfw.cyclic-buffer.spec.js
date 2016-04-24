var CyclicBuffer = require("tfw.cyclic-buffer");

describe('CyclicBuffer', function() {
    describe('.pop() ', function() {
        it('should return `undefined` on empty buffers', function() {
            var buff = new CyclicBuffer();
            expect( buff.pop() ).toBeUndefined();
        });

        it('should return, in reverse order, items previouly pushed', function() {
            var buff = new CyclicBuffer();
            buff.push( "A" );
            buff.push( "B" );
            buff.push( "C" );
            buff.push( "D" );
            expect( buff.pop() ).toEqual( "D" );
            expect( buff.pop() ).toEqual( "C" );
            expect( buff.pop() ).toEqual( "B" );
            expect( buff.pop() ).toEqual( "A" );
        });
    });

    describe('.push() ', function() {
        it('should add elements at the end of the buffer', function() {
            var buff = new CyclicBuffer();
            buff.push( "A" );
            buff.push( "B" );
            expect( buff.pop() ).toEqual( "B" );
            expect( buff.pop() ).toEqual( "A" );
            expect( buff.pop() ).toBeUndefined();
        });
    });

    describe('.length ', function() {
        it('should be zero with empty buffers', function() {
            var buff = new CyclicBuffer();
            expect( buff.length ).toBe( 0 );
        });

        it('should increment when we push', function() {
            var buff = new CyclicBuffer();
            buff.push( "Yo man!" );
            expect( buff.length ).toBe( 1 );
            buff.push( "How do you do?" );
            expect( buff.length ).toBe( 2 );
        });

        it('should decrement when we pop', function() {
            var buff = new CyclicBuffer();
            buff.push( "Yo" );
            buff.pop();
            expect( buff.length ).toBe( 0 );
            buff.pop();
            expect( buff.length ).toBe( 0 );            
            buff.push( "Yo" );
            buff.push( "Yo" );
            buff.push( "Yo" );
            buff.push( "Yo" );
            expect( buff.length ).toBe( 4 );
            buff.pop();
            expect( buff.length ).toBe( 3 );            
            buff.pop();
            expect( buff.length ).toBe( 2 );            
            buff.pop();
            expect( buff.length ).toBe( 1 );            
            buff.pop();
            expect( buff.length ).toBe( 0 );
        });
    });
});
