"use strict";var t=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=t(function(l,i){
var s=require('@stdlib/assert-is-iterator-like/dist'),n=require('@stdlib/stats-incr-sumabs2/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function o(a){var r,e;if(!s(a))throw new TypeError(v('1LV3w',a));for(r=n();e=a.next(),!e.done;)typeof e.value=="number"?r(e.value):r(NaN);return r()}i.exports=o
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
