'use strict';

var path = require( 'path' ),
	cwd = require( './../lib' );

var parts = cwd.split( path.sep );
console.log( parts );
