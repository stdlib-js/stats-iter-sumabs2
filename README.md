<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# itersumabs2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the sum of squared absolute values for all [iterated][mdn-iterator-protocol] values.

<section class="intro">

The sum of squared absolute values is defined as

<!-- <equation class="equation" label="eq:sum_squared_absolute_values" align="center" raw="s = \sum_{i=0}^{n-1} x_i^2" alt="Equation for the sum of squared absolute values."> -->

<div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{n-1} x_i^2" data-equation="eq:sum_squared_absolute_values">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/8105c9026f79efd4edf93c9377c3319699a8d61d/lib/node_modules/@stdlib/stats/iterators/sumabs2/docs/img/equation_sum_squared_absolute_values.svg" alt="Equation for the sum of squared absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-iter-sumabs2
```

</section>

<section class="usage">

## Usage

```javascript
var itersumabs2 = require( '@stdlib/stats-iter-sumabs2' );
```

#### itersumabs2( iterator )

Computes the sum of squared absolute values for all [iterated][mdn-iterator-protocol] values.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ -1.0, 2.0, -3.0, 4.0 ] );

var s = itersumabs2( arr );
// returns 30.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [`iterator`][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   For iterators which can generate many values or which may output large numbers, care should be taken to prevent overflow.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random-iter-uniform' );
var itersumabs2 = require( '@stdlib/stats-iter-sumabs2' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Compute the sum of squared absolute values:
var s = itersumabs2( rand );
// returns <number>

console.log( 'sumabs2: %d.', s );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-sumabs2.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-sumabs2

[test-image]: https://github.com/stdlib-js/stats-iter-sumabs2/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-iter-sumabs2/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-sumabs2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-sumabs2?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-sumabs2
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-sumabs2/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-sumabs2/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
