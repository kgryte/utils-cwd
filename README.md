cwd
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns the current working directory.


## Installation

``` bash
$ npm install utils-cwd
```


## Usage

``` javascript
var cwd = require( 'utils-cwd' );
```

#### cwd()

Alias for [`process.cwd()`](https://nodejs.org/api/process.html#process_process_cwd).

``` javascript
console.log( cwd() );
```


## Examples

``` javascript
var path = require( 'path' ),
	cwd = require( 'utils-cwd' );

var parts = cwd().split( path.sep );
console.log( parts );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-cwd.svg
[npm-url]: https://npmjs.org/package/utils-cwd

[travis-image]: http://img.shields.io/travis/kgryte/utils-cwd/master.svg
[travis-url]: https://travis-ci.org/kgryte/utils-cwd

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/utils-cwd/master.svg
[codecov-url]: https://codecov.io/github/kgryte/utils-cwd?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-cwd.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-cwd

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-cwd.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-cwd

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-cwd.svg
[github-issues-url]: https://github.com/kgryte/utils-cwd/issues
