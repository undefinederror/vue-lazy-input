import{throttle as n,debounce as e,get as t}from"lodash";var o={throttle:n,debounce:e,get:t},i={bind:function(n,e,t){var i=["debounce","throttle"].includes(e.arg)?e.arg:"debounce",a=Number(e.value)||500,r=u(t),c=r.removeListener,d=r.addListener,p=(0,r.getInputEvents)(t);p.length||console.log("[v-lazy-input] no input events found during bind"),p.map(function(n){c("input",n._wrapper||n)}),d("input",o[i](function(n){o.get(t.context,e.expression)!==n&&p.map(function(e){e(n)})},a),!1)},unbind:function(n,e,t){var o=u(t),i=o.removeListener;(0,o.getInputEvents)(t).map(function(n){i("input",n)})}};function u(n){var e=!!n.componentInstance;return{removeListener:e?n.componentInstance.$off.bind(n.componentInstance):function(e,t){n.elm.removeEventListener(e,t),delete n.data.on[e]},addListener:e?n.componentInstance.$on.bind(n.componentInstance):function(e,t,o){n.elm.addEventListener(e,t,o),n.data.on[e]=t},getInputEvents:e?function(){return[].concat(n.componentInstance._events.input||[])}:function(){return[n.data.on.input]}}}var a=Object.freeze({lazyInput:i});var r={install:function n(e){n.installed||(n.installed=!0,Object.keys(a).forEach(function(n){e.directive(n,a[n])}))}},c=null;"undefined"!=typeof window?c=window.Vue:"undefined"!=typeof global&&(c=global.Vue),c&&c.use(r);export default r;export{i as lazyInput};