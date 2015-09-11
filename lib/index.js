'use strict';

// CWD //

/**
* FUNCTION: cwd()
*	Aliases `process.cwd()`.
*
* @returns {String} current working directory of the process
*/
function cwd() {
	return process.cwd();
} // end FUNCTION cwd()


// EXPORTS //

module.exports = cwd;
