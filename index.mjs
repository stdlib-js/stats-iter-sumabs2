// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-sumabs2@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var i=t,n=s,a=e,o=r;var d=function(t){var s,e;if(!i(t))throw new TypeError(o("invalid argument. Must provide an iterator. Value: `%s`.",t));for(s=a();"number"==typeof(e=t.next()).value?s(e.value):n(e,"value")&&s(NaN),!e.done;);return s()};export{d as default};
//# sourceMappingURL=index.mjs.map
