function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var i,o,r,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,u=setTimeout(S,t),l?y(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function S(){var e=v();if(O(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function h(e){return u=void 0,p&&i?y(e):(i=o=void 0,a)}function w(){var e=v(),n=O(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=o=u=void 0},w.flush=function(){return void 0===u?a:h(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})},document.addEventListener("DOMContentLoaded",(function(){const n=document.querySelector(".feedback-form"),i=n.querySelector('[name="email"]'),o=n.querySelector('[name="message"]'),r=e(t)((()=>{const e={email:i.value,message:o.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);i.addEventListener("input",r),o.addEventListener("input",r),(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);i.value=t.email||"",o.value=t.message||""}})(),n.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),i.value="",o.value="",console.log("Form data submitted:",{email:i.value,message:o.value})}))}));
//# sourceMappingURL=03-feedback.c6ba1c01.js.map
