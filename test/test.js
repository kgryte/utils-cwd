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

	it( 'should export a string', function test() {
		expect( cwd ).to.be.a( 'string' );
	});

	it( 'should return the current working directory', function test() {
		assert.strictEqual( cwd, process.cwd() );
	});

});
