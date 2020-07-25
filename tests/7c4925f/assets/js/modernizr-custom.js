!function(i,f,d){var s=[],e={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},l=function(){};l.prototype=e,l=new l;var c=[];function p(e,t){return typeof e===t}var m=f.documentElement,h="svg"===m.nodeName.toLowerCase();function a(e){var t=m.className,n=l._config.classPrefix||"";if(h&&(t=t.baseVal),l._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}l._config.enableClasses&&(0<e.length&&(t+=" "+n+e.join(" "+n)),h?m.className.baseVal=t:m.className=t)}function g(e){return"function"!=typeof f.createElement?f.createElement(e):h?f.createElementNS.call(f,"http://www.w3.org/2000/svg",e):f.createElement.apply(f,arguments)}h||function(e,a){var n,s,t=e.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,r="_html5shiv",l=0,c={};function u(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function f(e){var t=c[e[r]];return t||(t={},l++,e[r]=l,c[l]=t),t}function d(e,t,n){return t||(t=a),s?t.createElement(e):(n||(n=f(t)),!(r=n.cache[e]?n.cache[e].cloneNode():i.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||o.test(e)||r.tagUrn?r:n.frag.appendChild(r));var r}function p(e){e||(e=a);var t=f(e);return!m.shivCSS||n||t.hasCSS||(t.hasCSS=!!function(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||function(t,n){n.cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return m.shivMethods?d(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+u().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(m,n.frag)}(e,t),e}!function(){try{var e=a.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,s=1==e.childNodes.length||function(){a.createElement("a");var e=a.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=n=!0}}();var m={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==t.shivCSS,supportsUnknownElements:s,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:p,createElement:d,createDocumentFragment:function(e,t){if(e||(e=a),s)return e.createDocumentFragment();for(var n=(t=t||f(e)).frag.cloneNode(),r=0,o=u(),i=o.length;r<i;r++)n.createElement(o[r]);return n},addElements:function(e,t){var n=m.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),m.elements=n+" "+e,p(t)}};e.html5=m,p(a),"object"==typeof module&&module.exports&&(module.exports=m)}(void 0!==i?i:this,f),l.addTest("canvas",function(){var e=g("canvas");return!(!e.getContext||!e.getContext("2d"))});var t="Moz O ms Webkit",u=e._config.usePrefixes?t.split(" "):[];e._cssomPrefixes=u;var n={elem:g("modernizr")};l._q.push(function(){delete n.elem});var v={style:n.elem.style};function o(e,t,n,r){var o,i,a,s,l="modernizr",c=g("div"),u=function(){var e=f.body;return e||((e=g(h?"svg":"body")).fake=!0),e}();if(parseInt(n,10))for(;n--;)(a=g("div")).id=r?r[n]:l+(n+1),c.appendChild(a);return(o=g("style")).type="text/css",o.id="s"+l,(u.fake?u:c).appendChild(o),u.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(f.createTextNode(e)),c.id=l,u.fake&&(u.style.background="",u.style.overflow="hidden",s=m.style.overflow,m.style.overflow="hidden",m.appendChild(u)),i=t(c,e),u.fake?(u.parentNode.removeChild(u),m.style.overflow=s,m.offsetHeight):c.parentNode.removeChild(c),!!i}function y(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function C(e,t){var n=e.length;if("CSS"in i&&"supports"in i.CSS){for(;n--;)if(i.CSS.supports(y(e[n]),t))return!0;return!1}if("CSSSupportsRule"in i){for(var r=[];n--;)r.push("("+y(e[n])+":"+t+")");return o("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===function(e,t,n){var r;if("getComputedStyle"in i){r=getComputedStyle.call(i,e,t);var o=i.console;if(null!==r)n&&(r=r.getPropertyValue(n));else if(o)o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}(e,null,"position")})}return d}l._q.unshift(function(){delete v.style});var w,r,S=e._config.usePrefixes?t.toLowerCase().split(" "):[];function E(e,t){return function(){return e.apply(t,arguments)}}function x(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+u.join(i+" ")+i).split(" ");return p(t,"string")||p(t,"undefined")?function(e,t,n,r){if(r=!p(r,"undefined")&&r,!p(n,"undefined")){var o=C(e,n);if(!p(o,"undefined"))return o}for(var i,a,s,l,c,u=["modernizr","tspan","samp"];!v.style&&u.length;)i=!0,v.modElem=g(u.shift()),v.style=v.modElem.style;function f(){i&&(delete v.style,delete v.modElem)}for(s=e.length,a=0;a<s;a++)if(l=e[a],c=v.style[l],~(""+l).indexOf("-")&&(l=l.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),v.style[l]!==d){if(r||p(n,"undefined"))return f(),"pfx"!==t||l;try{v.style[l]=n}catch(e){}if(v.style[l]!==c)return f(),"pfx"!==t||l}return f(),!1}(a,t,r,o):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:p(r=t[e[o]],"function")?E(r,n||t):r;return!1}(a=(e+" "+S.join(i+" ")+i).split(" "),t,n)}function b(e,t,n){return x(e,d,d,t,n)}function _(e,t){if("object"==typeof e)for(var n in e)w(e,n)&&_(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=l[r[0]];if(2===r.length&&(o=o[r[1]]),void 0!==o)return l;t="function"==typeof t?t():t,1===r.length?l[r[0]]=t:(!l[r[0]]||l[r[0]]instanceof Boolean||(l[r[0]]=new Boolean(l[r[0]])),l[r[0]][r[1]]=t),a([(t&&!1!==t?"":"no-")+r.join("-")]),l._trigger(e,t)}return l}e._domPrefixes=S,e.testAllProps=x,e.testAllProps=b,l.addTest("flexbox",b("flexBasis","1px",!0)),l.addTest("flexboxtweener",b("flexAlign","end",!0)),l.addTest("svg",!!f.createElementNS&&!!f.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),w=p(r={}.hasOwnProperty,"undefined")||p(r.call,"undefined")?function(e,t){return t in e&&p(e.constructor.prototype[t],"undefined")}:function(e,t){return r.call(e,t)},e._l={},e.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),l.hasOwnProperty(e)&&setTimeout(function(){l._trigger(e,l[e])},0)},e._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},l._q.push(function(){e.addTest=_}),l.addTest("svgasimg",f.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),l.addTest("inlinesvg",function(){var e=g("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),function(){var e,t,n,r,o,i;for(var a in s)if(s.hasOwnProperty(a)){if(e=[],(t=s[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=p(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?l[i[0]]=r:(!l[i[0]]||l[i[0]]instanceof Boolean||(l[i[0]]=new Boolean(l[i[0]])),l[i[0]][i[1]]=r),c.push((r?"":"no-")+i.join("-"))}}(),a(c),delete e.addTest,delete e.addAsyncTest;for(var T=0;T<l._q.length;T++)l._q[T]();i.Modernizr=l}(window,document);