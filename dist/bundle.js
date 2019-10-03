!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-svg"),require("uuid")):"function"==typeof define&&define.amd?define(["exports","react","react-svg","uuid"],t):t((e=e||self)["react-smart-tabs"]={},e.React,e.ReactSVG,e.uuid)}(this,function(e,t,n,r){"use strict";var i="default"in t?t.default:t;n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t,n){return e.splice(n,0,e.splice(t,1)[0]),e}e.Tab=function(e){return i.createElement("div",{className:"tab-wrapper"},i.createElement("div",null,e.children))},e.TabBar=function(e){var u=o(t.useState(""),2),s=u[0],f=u[1],p=o(t.useState(null),2),d=(p[0],p[1]),g=t.useRef(null),m=t.useRef(null),b=t.useRef(0),h=t.useRef(0),y=o(t.useState(null),2),v=y[0],x=y[1],C=o(t.useState([]),2),w=C[0],R=C[1],O=t.useRef(i.Children.toArray(e.children).map(function(){return t.createRef()}));function S(e){return O.current.find(function(t){return t.current.id===e.id})}function E(e){if(v){var t=S(v).current,n=t.nextSibling,r=t.previousSibling;n&&(n.style.marginLeft="0",n.style.marginRight="-1px"),r&&(r.style.marginLeft="0",r.style.marginRight="-1px"),t.style.position="relative",t.style.left="auto",g.current.onmouseup=null,x(null)}}t.useEffect(function(){var t=i.Children.toArray(e.children).map(function(e,t){return{tabComponent:e,id:r(),arrayIndex:t}});R(t)},[]),t.useEffect(function(){e.onTabsChange&&e.onTabsChange(w,e.children)},[w]),t.useEffect(function(){var n=i.Children.toArray(e.children),o=n[n.length-1];if(!(0===w.length&&n.length>1)){if(n.length>w.length&&n.length>0){w.find(function(e){return e.tabComponent.props===o.props});var l={tabComponent:o,id:r(),arrayIndex:n.length-1};R([].concat(c(w),[l])),L(l),O.current.push(t.createRef())}if(n.length<w.length){var u=n.map(function(e,t){return{tabComponent:e,id:r(),arrayIndex:t}});R(u)}if(n.length===w.length){if(v)return;var s=w.map(function(e){var t=n.find(function(t,n){return n===e.arrayIndex});return function(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}else Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t]));return e}({},e,{tabComponent:t})});R(c(s))}}},[e.children]);var L=function(e){f(e.id),d(e)},T=function(t){if(e.inactive)return!1;var n=i.Children.toArray(e.children).find(function(e){return e.props.active}),r=n&&n.props===t.tabComponent.props?n:null;return!!r||t.id===s||!r&&""===s&&!n&&i.Children.toArray(e.children)[0].props===t.tabComponent.props&&(L(w[0]),!0)};return i.createElement("div",{className:e.className},!e.hiddenTabs&&i.createElement("div",{className:"bar__wrapper"},i.createElement("ul",{className:"tab__bar",onMouseMove:function(e){if(v){var t=function(e){return b.current=h.current-e.clientX,h.current=e.clientX,S(v).current.offsetLeft-b.current}(e),n=S(v).current,r=n.nextSibling,i=n.previousSibling,a=n.getBoundingClientRect().width-1;n.style.left="".concat(t,"px"),n.style.position="absolute",r&&r.getBoundingClientRect().left-70<t&&(i&&(i.style.marginRight="-1px",i.style.marginLeft="0"),r.style.marginLeft="0px",r.style.marginRight="".concat(a-1,"px"),r.className="animated",l(w,w.indexOf(v),w.indexOf(v)+1),R(c(w))),i&&i.getBoundingClientRect().right-80>t&&(r&&(r.style.marginRight="-1px",r.style.marginLeft="0"),i.style.marginRight="-1px",i.style.marginLeft="".concat(a,"px"),i.className="deanimated",l(w,w.indexOf(v),w.indexOf(v)-1),R(c(w)))}},onMouseLeave:E,ref:g},w.length>0&&w.map(function(t,r){var a=t.tabComponent.props.className,o=t.tabComponent.props.classNameActive,c=t.tabComponent.props.closeable,l=e.closeable,u=void 0!==c?c&&l:l;return i.createElement("li",{id:t.id,key:t.id,ref:O.current[r],className:T(t)?"".concat(o||"active"," reposition"):a,onMouseDown:function(n){return function(t,n){if("close"!==t.target.classNam){e.onTabClick&&e.onTabClick(n);var r=S(n).current;if(L(n),!n.tabComponent.props.blocked&&e.reorderable){x(n),h.current=t.clientX,r.style.left="".concat(r.getBoundingClientRect().left,"px"),r.style.position="absolute",r.style.width="".concat(r.offsetWidth,"px");var i=r.nextSibling,a=r.previousSibling;i&&a?i.style.marginLeft="".concat(r.getBoundingClientRect().width-1,"px"):a?a.style.marginRight="".concat(r.getBoundingClientRect().width-2,"px"):i.style.marginLeft="".concat(r.getBoundingClientRect().width-1,"px")}}}(n,t)},onMouseUp:E},t.tabComponent.props.tabHeader||t.tabComponent.props.text,u&&i.createElement("span",{ref:m,className:"close",onClick:function(n){return function(t,n,r){if(T(r)&&w.length>1){var i=w[w.indexOf(r)+1],a=w[w.indexOf(r)-1];i?e.onTabClose&&e.onTabClose(r,i):e.onTabClose&&e.onTabClose(r,a)}else e.onTabClose(r,null);f("")}(t.id,0,t)}},e.closeIcon||i.createElement(n,{className:"close-icon",src:'<svg width="64" version="1.1" xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">\n  <g>\n    <path fill="#1D1D1B" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>\n  </g>\n</svg>'.toString()})))})),e.newTab&&i.createElement("span",{className:"addButton",onClick:function(n){return e.newTab(),void O.current.push(t.createRef())}},"+")),w.length>0&&w.map(function(t){return i.createElement("div",{id:"".concat(t.id,"-panel"),key:"".concat(t.id,"-panel"),className:"tab-panel ".concat(T(t)&&!e.hiddenPanel?"active":"")},t.tabComponent)}))},Object.defineProperty(e,"__esModule",{value:!0})});
