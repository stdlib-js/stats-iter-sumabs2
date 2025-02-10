"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(l,i){
var s=require('@stdlib/assert-is-iterator-like/dist'),n=require('@stdlib/stats-incr-sumabs2/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function o(e){var r,a;if(!s(e))throw new TypeError(v('1LV3w',e));for(r=n();a=e.next(),!a.done;)typeof a.value=="number"?r(a.value):r(NaN);return r()}i.exports=o
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
