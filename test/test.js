/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	cwd = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'utils-cwd', function tests() {

	it( 'should alias `process.cwd()` and export a function', function test() {
		expect( cwd ).to.be.a( 'function' );
	});

	it( 'should return the current working directory', function test() {
		assert.strictEqual( cwd(), process.cwd() );
	});

});
