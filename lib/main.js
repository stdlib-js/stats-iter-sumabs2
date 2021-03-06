/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isIteratorLike = require( '@stdlib/assert-is-iterator-like' );
var incrsumabs2 = require( '@stdlib/stats-incr-sumabs2' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Computes the sum of squared absolute values for all iterated values.
*
* @param {Iterator} iterator - input iterator
* @throws {TypeError} must provide an iterator
* @returns {(number|null)} sum of squared absolute values
*
* @example
* var runif = require( '@stdlib/random-iter-uniform' );
*
* var rand = runif( -10.0, 10.0, {
*     'iter': 100
* });
*
* var s = itersumabs2( rand );
* // returns <number>
*/
function itersumabs2( iterator ) {
	var acc;
	var v;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an iterator. Value: `%s`.', iterator ) );
	}
	acc = incrsumabs2();
	while ( true ) {
		v = iterator.next();
		if ( v.done ) {
			break;
		}
		if ( typeof v.value === 'number' ) {
			acc( v.value );
		} else {
			acc( NaN );
		}
	}
	return acc();
}


// EXPORTS //

module.exports = itersumabs2;
