// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-sumabs2@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function r(r){var i,o;if(!t(r))throw new TypeError(s("0fe49",r));for(i=e();!(o=r.next()).done;)"number"==typeof o.value?i(o.value):i(NaN);return i()}export{r as default};
//# sourceMappingURL=index.mjs.map
