(()=>{var e,t,o={155:e=>{e.exports={exec:function(){const e=document.getElementById("reachable");console.log("eager",e)}}},377:e=>{e.exports={exec:function(){const e=document.getElementById("reachable");console.log("lazy",e)}}}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var c=r[e]={exports:{}};return o[e](c,c.exports,n),c.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var c=Object.create(null);n.r(c);var l={};e=e||[null,t({}),t([]),t(t)];for(var f=2&r&&o;"object"==typeof f&&!~e.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((e=>l[e]=()=>o[e]));return l.default=()=>o,n.d(c,l),c},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},Promise.resolve().then(n.t.bind(n,377,23)).then((e=>{e.exec()})),Promise.resolve().then(n.t.bind(n,155,23)).then((e=>{e.exec()}))})();