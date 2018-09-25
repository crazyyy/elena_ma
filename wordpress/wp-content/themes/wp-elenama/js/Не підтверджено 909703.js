"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(e){return void 0===e?"undefined":_typeof(e)}):function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof(e)}))(e)}!function(e){if("object"==("undefined"==typeof exports?"undefined":_typeof(exports)))module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.ShareButton=e()}}(function(){return function i(r,s,a){function c(n,e){if(!s[n]){if(!r[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(u)return u(n,!0);throw new Error("Cannot find module '"+n+"'")}var o=s[n]={exports:{}};r[n][0].call(o.exports,function(e){var t=r[n][1][e];return c(t||e)},o,o.exports,i,r,s,a)}return s[n].exports}for(var u="function"==typeof require&&require,e=0;e<a.length;e++)c(a[e]);return c}({1:[function(e,t,n){e("../../modules/es6.array.iterator"),t.exports=e("../../modules/$.core").Array.values},{"../../modules/$.core":6,"../../modules/es6.array.iterator":34}],2:[function(e,t,n){e("../../modules/es6.math.trunc"),t.exports=e("../../modules/$.core").Math.trunc},{"../../modules/$.core":6,"../../modules/es6.math.trunc":35}],3:[function(e,t,n){e("../../modules/es6.symbol"),t.exports=e("../../modules/$.core").Symbol},{"../../modules/$.core":6,"../../modules/es6.symbol":36}],4:[function(e,t,n){var o=e("./$.is-object");t.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},{"./$.is-object":17}],5:[function(e,t,n){var o={}.toString;t.exports=function(e){return o.call(e).slice(8,-1)}},{}],6:[function(e,t,n){var o=t.exports={version:"1.2.3"};"number"==typeof __e&&(__e=o)},{}],7:[function(e,t,n){var d=e("./$.global"),h=e("./$.core"),p=e("./$.hide"),y=e("./$.redef"),g="prototype",m=function(e,t){return function(){return e.apply(t,arguments)}},o=function e(t,n,o){var i,r,s,a,c=t&e.G,u=t&e.P,l=c?d:t&e.S?d[n]||(d[n]={}):(d[n]||{})[g],f=c?h:h[n]||(h[n]={});for(i in c&&(o=n),o)s=((r=!(t&e.F)&&l&&i in l)?l:o)[i],a=t&e.B&&r?m(s,d):u&&"function"==typeof s?m(Function.call,s):s,l&&!r&&y(l,i,s),f[i]!=s&&p(f,i,a),u&&((f[g]||(f[g]={}))[i]=s)};d.core=h,o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,t.exports=o},{"./$.core":6,"./$.global":12,"./$.hide":14,"./$.redef":26}],8:[function(e,t,n){t.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},{}],9:[function(e,t,n){var a=e("./$");t.exports=function(e){var t=a.getKeys(e),n=a.getSymbols;if(n)for(var o,i=n(e),r=a.isEnum,s=0;i.length>s;)r.call(e,o=i[s++])&&t.push(o);return t}},{"./$":22}],10:[function(e,t,n){t.exports=function(e){try{return!!e()}catch(e){return!0}}},{}],11:[function(e,t,n){var o={}.toString,i=e("./$.to-iobject"),r=e("./$").getNames,s="object"==("undefined"==typeof window?"undefined":_typeof(window))&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.get=function(e){return s&&"[object Window]"==o.call(e)?function(e){try{return r(e)}catch(e){return s.slice()}}(e):r(i(e))}},{"./$":22,"./$.to-iobject":30}],12:[function(e,t,n){var o=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)},{}],13:[function(e,t,n){var o={}.hasOwnProperty;t.exports=function(e,t){return o.call(e,t)}},{}],14:[function(e,t,n){var o=e("./$"),i=e("./$.property-desc");t.exports=e("./$.support-desc")?function(e,t,n){return o.setDesc(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},{"./$":22,"./$.property-desc":25,"./$.support-desc":28}],15:[function(e,t,n){var o=e("./$.cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},{"./$.cof":5}],16:[function(e,t,n){var o=e("./$.cof");t.exports=Array.isArray||function(e){return"Array"==o(e)}},{"./$.cof":5}],17:[function(e,t,n){t.exports=function(e){return"object"==(void 0===e?"undefined":_typeof(e))?null!==e:"function"==typeof e}},{}],18:[function(o,e,t){var i=o("./$"),r={};o("./$.hide")(r,o("./$.wks")("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=i.create(r,{next:o("./$.property-desc")(1,n)}),o("./$.tag")(e,t+" Iterator")}},{"./$":22,"./$.hide":14,"./$.property-desc":25,"./$.tag":29,"./$.wks":33}],19:[function(y,e,t){var g=y("./$.library"),m=y("./$.def"),v=y("./$.redef"),b=y("./$.hide"),k=y("./$.has"),w=y("./$.wks")("iterator"),_=y("./$.iterators"),$=!([].keys&&"next"in[].keys()),S="@@iterator",j="values",x=function(){return this};e.exports=function(e,t,n,o,i,r,s){y("./$.iter-create")(n,t,o);var a,c,u=function(e){switch(e){case"keys":case j:return function(){return new n(this,e)}}return function(){return new n(this,e)}},l=t+" Iterator",f=e.prototype,d=f[w]||f[S]||i&&f[i],h=d||u(i);if(d){var p=y("./$").getProto(h.call(new e));y("./$.tag")(p,l,!0),!g&&k(f,S)&&b(p,w,x)}if((!g||s)&&b(f,w,h),_[t]=h,_[l]=x,i)if(a={values:i==j?h:u(j),keys:r?h:u("keys"),entries:i!=j?h:u("entries")},s)for(c in a)c in f||v(f,c,a[c]);else m(m.P+m.F*$,t,a)}},{"./$":22,"./$.def":7,"./$.has":13,"./$.hide":14,"./$.iter-create":18,"./$.iterators":21,"./$.library":24,"./$.redef":26,"./$.tag":29,"./$.wks":33}],20:[function(e,t,n){t.exports=function(e,t){return{value:t,done:!!e}}},{}],21:[function(e,t,n){t.exports={}},{}],22:[function(e,t,n){var o=Object;t.exports={create:o.create,getProto:o.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:o.getOwnPropertyDescriptor,setDesc:o.defineProperty,setDescs:o.defineProperties,getKeys:o.keys,getNames:o.getOwnPropertyNames,getSymbols:o.getOwnPropertySymbols,each:[].forEach}},{}],23:[function(e,t,n){var a=e("./$"),c=e("./$.to-iobject");t.exports=function(e,t){for(var n,o=c(e),i=a.getKeys(o),r=i.length,s=0;s<r;)if(o[n=i[s++]]===t)return n}},{"./$":22,"./$.to-iobject":30}],24:[function(e,t,n){t.exports=!1},{}],25:[function(e,t,n){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],26:[function(e,t,n){var i=e("./$.global"),r=e("./$.hide"),s=e("./$.uid")("src"),o="toString",a=Function[o],c=(""+a).split(o);e("./$.core").inspectSource=function(e){return a.call(e)},(t.exports=function(e,t,n,o){"function"==typeof n&&(n.hasOwnProperty(s)||r(n,s,e[t]?""+e[t]:c.join(String(t))),n.hasOwnProperty("name")||r(n,"name",t)),e===i?e[t]=n:(o||delete e[t],r(e,t,n))})(Function.prototype,o,function(){return"function"==typeof this&&this[s]||a.call(this)})},{"./$.core":6,"./$.global":12,"./$.hide":14,"./$.uid":31}],27:[function(e,t,n){var o=e("./$.global"),i="__core-js_shared__",r=o[i]||(o[i]={});t.exports=function(e){return r[e]||(r[e]={})}},{"./$.global":12}],28:[function(e,t,n){t.exports=!e("./$.fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./$.fails":10}],29:[function(e,t,n){var o=e("./$").setDesc,i=e("./$.has"),r=e("./$.wks")("toStringTag");t.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,r)&&o(e,r,{configurable:!0,value:t})}},{"./$":22,"./$.has":13,"./$.wks":33}],30:[function(e,t,n){var o=e("./$.iobject"),i=e("./$.defined");t.exports=function(e){return o(i(e))}},{"./$.defined":8,"./$.iobject":15}],31:[function(e,t,n){var o=0,i=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++o+i).toString(36))}},{}],32:[function(e,t,n){var o=e("./$.wks")("unscopables");null==[][o]&&e("./$.hide")(Array.prototype,o,{}),t.exports=function(e){[][o][e]=!0}},{"./$.hide":14,"./$.wks":33}],33:[function(t,e,n){var o=t("./$.shared")("wks"),i=t("./$.global").Symbol;e.exports=function(e){return o[e]||(o[e]=i&&i[e]||(i||t("./$.uid"))("Symbol."+e))}},{"./$.global":12,"./$.shared":27,"./$.uid":31}],34:[function(e,t,n){var o=e("./$.unscope"),i=e("./$.iter-step"),r=e("./$.iterators"),s=e("./$.to-iobject");e("./$.iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):i(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},{"./$.iter-define":19,"./$.iter-step":20,"./$.iterators":21,"./$.to-iobject":30,"./$.unscope":32}],35:[function(e,t,n){var o=e("./$.def");o(o.S,"Math",{trunc:function(e){return(0<e?Math.floor:Math.ceil)(e)}})},{"./$.def":7}],36:[function(e,t,n){var o=e("./$"),i=e("./$.global"),r=e("./$.has"),s=e("./$.support-desc"),a=e("./$.def"),c=e("./$.redef"),u=e("./$.fails"),l=e("./$.shared"),f=e("./$.tag"),d=e("./$.uid"),h=e("./$.wks"),p=e("./$.keyof"),y=e("./$.get-names"),g=e("./$.enum-keys"),m=e("./$.is-array"),v=e("./$.an-object"),b=e("./$.to-iobject"),k=e("./$.property-desc"),w=o.getDesc,_=o.setDesc,$=o.create,S=y.get,j=i.Symbol,x=i.JSON,O=x&&x.stringify,C=!1,P=h("_hidden"),L=o.isEnum,E=l("symbol-registry"),F=l("symbols"),A="function"==typeof j,I=Object.prototype,N=s&&u(function(){return 7!=$(_({},"a",{get:function(){return _(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=w(I,t);o&&delete I[t],_(e,t,n),o&&e!==I&&_(I,t,o)}:_,T=function(t){var e=F[t]=$(j.prototype);return e._k=t,s&&C&&N(I,t,{configurable:!0,set:function(e){r(this,P)&&r(this[P],t)&&(this[P][t]=!1),N(this,t,k(1,e))}}),e},B=function(e){return"symbol"==(void 0===e?"undefined":_typeof(e))},D=function(e,t,n){return n&&r(F,t)?(n.enumerable?(r(e,P)&&e[P][t]&&(e[P][t]=!1),n=$(n,{enumerable:k(0,!1)})):(r(e,P)||_(e,P,k(1,{})),e[P][t]=!0),N(e,t,n)):_(e,t,n)},M=function(e,t){v(e);for(var n,o=g(t=b(t)),i=0,r=o.length;i<r;)D(e,n=o[i++],t[n]);return e},H=function(e,t){return void 0===t?$(e):M($(e),t)},q=function(e){var t=L.call(this,e);return!(t||!r(this,e)||!r(F,e)||r(this,P)&&this[P][e])||t},W=function(e,t){var n=w(e=b(e),t);return!n||!r(F,t)||r(e,P)&&e[P][t]||(n.enumerable=!0),n},z=function(e){for(var t,n=S(b(e)),o=[],i=0;n.length>i;)r(F,t=n[i++])||t==P||o.push(t);return o},U=function(e){for(var t,n=S(b(e)),o=[],i=0;n.length>i;)r(F,t=n[i++])&&o.push(F[t]);return o},R=u(function(){var e=j();return"[null]"!=O([e])||"{}"!=O({a:e})||"{}"!=O(Object(e))});A||(c((j=function(){if(B(this))throw TypeError("Symbol is not a constructor");return T(d(0<arguments.length?arguments[0]:void 0))}).prototype,"toString",function(){return this._k}),B=function(e){return e instanceof j},o.create=H,o.isEnum=q,o.getDesc=W,o.setDesc=D,o.setDescs=M,o.getNames=y.get=z,o.getSymbols=U,s&&!e("./$.library")&&c(I,"propertyIsEnumerable",q,!0));var J={for:function(e){return r(E,e+="")?E[e]:E[e]=j(e)},keyFor:function(e){return p(E,e)},useSetter:function(){C=!0},useSimple:function(){C=!1}};o.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(e){var t=h(e);J[e]=A?t:T(t)}),C=!0,a(a.G+a.W,{Symbol:j}),a(a.S,"Symbol",J),a(a.S+a.F*!A,"Object",{create:H,defineProperty:D,defineProperties:M,getOwnPropertyDescriptor:W,getOwnPropertyNames:z,getOwnPropertySymbols:U}),x&&a(a.S+a.F*(!A||R),"JSON",{stringify:function(e){for(var t,n,o=[e],i=1,r=arguments;r.length>i;)o.push(r[i++]);return"function"==typeof(t=o[1])&&(n=t),(n||!m(t))&&(t=function(e,t){return n&&(t=n.call(this,e,t)),B(t)?void 0:t}),o[1]=t,O.apply(x,o)}}),f(j,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)},{"./$":22,"./$.an-object":4,"./$.def":7,"./$.enum-keys":9,"./$.fails":10,"./$.get-names":11,"./$.global":12,"./$.has":13,"./$.is-array":16,"./$.keyof":23,"./$.library":24,"./$.property-desc":25,"./$.redef":26,"./$.shared":27,"./$.support-desc":28,"./$.tag":29,"./$.to-iobject":30,"./$.uid":31,"./$.wks":33}],37:[function(e,t,n){var o,i=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),m=function(e,t,n){for(var o=!0;o;){var i=e,r=t,s=n;o=!1,null===i&&(i=Function.prototype);var a=Object.getOwnPropertyDescriptor(i,r);if(void 0!==a){if("value"in a)return a.value;var c=a.get;return void 0===c?void 0:c.call(s)}var u=Object.getPrototypeOf(i);if(null===u)return;e=u,t=r,n=s,o=!0,a=u=void 0}},r=e("./share-utils"),s=(o=r)&&o.__esModule?o:{default:o};e("core-js/fn/symbol"),e("core-js/fn/array/iterator"),e("core-js/fn/math/trunc");var a=function(e){function g(e,t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,g),m(Object.getPrototypeOf(g.prototype),"constructor",this).call(this),"object"==(void 0===e?"undefined":_typeof(e))?(this.element=void 0,t=e):this.element=e,this.el={head:document.getElementsByTagName("head")[0],body:document.getElementsByTagName("body")[0]},this.config={enabledNetworks:0,protocol:"//",url:window.location.href,caption:null,title:this._defaultTitle(),image:this._defaultImage(),description:this._defaultDescription(),ui:{flyout:"sb-top sb-center",buttonText:"Share",namespace:"sb-",networkOrder:[],collision:!1},networks:{googlePlus:{enabled:!0,url:null},twitter:{enabled:!0,url:null,description:null},facebook:{enabled:!0,loadSdk:!0,url:null,appId:null,title:null,caption:null,description:null,image:null},pinterest:{enabled:!0,url:null,image:null,description:null},reddit:{enabled:!0,url:null,title:null},linkedin:{enabled:!0,url:null,title:null,description:null},whatsapp:{enabled:!0,description:null,url:null},email:{enabled:!0,title:null,description:null}}},this.listener=null,this._setup(this.element,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":_typeof(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(g,s["default"]),i(g,[{key:"open",value:function(){this._public("Open")}},{key:"close",value:function(){this._public("Close")}},{key:"toggle",value:function(){this._public("Toggle")}},{key:"toggleListen",value:function(){this._public("Listen")}},{key:"_public",value:function(e){var t=void 0;t="undefined"==typeof element?m(Object.getPrototypeOf(g.prototype),"_objToArray",this).call(this,document.getElementsByTagName("share-button")):document.querySelectorAll(element);var n=!0,o=!1,i=void 0;try{for(var r,s=t[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var a=r.value,c=a.getElementsByClassName(this.config.ui.namespace+"social")[0];this["_event"+e](a,c)}}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}}},{key:"_setup",value:function(e,t){var n=void 0;void 0===e?n=m(Object.getPrototypeOf(g.prototype),"_objToArray",this).call(this,document.getElementsByTagName("share-button")):"object"==(void 0===(n=document.querySelectorAll("share-button"+e))?"undefined":_typeof(n))&&(n=m(Object.getPrototypeOf(g.prototype),"_objToArray",this).call(this,n)),this._merge(this.config,t),this.config.networks.whatsapp.enabled&&!this._isMobile()&&(this.config.networks.whatsapp.enabled=!1),0===this.config.ui.networkOrder.length&&(this.config.ui.networkOrder=["pinterest","twitter","facebook","whatsapp","googlePlus","reddit","linkedin","email"]);var o=!0,i=!1,r=void 0;try{for(var s,a=Object.keys(this.config.networks)[Symbol.iterator]();!(o=(s=a.next()).done);o=!0){var c=s.value;this.config.ui.networkOrder.indexOf(c.toString())<0&&(this.config.networks[c].enabled=!1,this.config.ui.networkOrder.push(c))}}catch(e){i=!0,r=e}finally{try{!o&&a.return&&a.return()}finally{if(i)throw r}}this._fixFlyout(),this._detectNetworks(),this._normalizeNetworkConfiguration(),this.config.networks.facebook.enabled&&this.config.networks.facebook.loadSdk&&this._injectFacebookSdk();var u=0,l=!0,f=!1,d=void 0;try{for(var h,p=n[Symbol.iterator]();!(l=(h=p.next()).done);l=!0){var y=h.value;this._setupInstance(y,u++)}}catch(e){f=!0,d=e}finally{try{!l&&p.return&&p.return()}finally{if(f)throw d}}}},{key:"_setupInstance",value:function(i,e){var r=this;this._hide(i),this._addClass(i,"sharer-"+e),this._injectHtml(i),this._show(i);var t=i.getElementsByClassName(this.config.ui.namespace+"social")[0],s=i.getElementsByTagName("li");this._addClass(t,"networks-"+this.config.enabledNetworks),i.addEventListener("click",function(){return r._eventToggle(i,t)});var n=function(e){var t,n,o=s[e];void 0!==o&&(t=o.getAttribute("data-network"),n=o.getElementsByTagName("a")[0],r._addClass(o,r.config.networks[t].class),"email"!==o.className&&n.setAttribute("onclick","return false"),n.addEventListener("mousedown",function(){r._hook("before",t,i)}),n.addEventListener("mouseup",function(){r["_network"+t.capFLetter()](o)}),n.addEventListener("click",function(){r._hook("after",t,i)}))};for(var o in Object.keys(s))n(o)}},{key:"_eventToggle",value:function(e,t){this._hasClass(t,"active")?this._eventClose(t):this._eventOpen(e,t)}},{key:"_eventOpen",value:function(e,t){this._hasClass(t,"load")&&this._removeClass(t,"load"),this.collision&&this._collisionDetection(e,t),this._addClass(t,"active")}},{key:"_eventClose",value:function(e){this._removeClass(e,"active")}},{key:"_eventListen",value:function(e,t){var n=this,o=this._getDimensions(e,t);null===this.listener?this.listener=window.setInterval(function(){return n._adjustClasses(e,t,o)},100):(window.clearInterval(this.listener),this.listener=null)}},{key:"_fixFlyout",value:function(){var e=this.config.ui.flyout.split(" ");e[0].substring(0,this.config.ui.namespace.length)!==this.config.ui.namespace&&(e[0]=""+this.config.ui.namespace+e[0]),e[1].substring(0,this.config.ui.namespace.length)!==this.config.ui.namespace&&(e[1]=""+this.config.ui.namespace+e[1]),this.config.ui.flyout=e.join(" ")}},{key:"_collisionDetection",value:function(e,t){var n=this,o=this._getDimensions(e,t);this._adjustClasses(e,t,o),e.classList.contains("clicked")||(window.addEventListener("scroll",function(){return n._adjustClasses(e,o)}),window.addEventListener("resize",function(){return n._adjustClasses(e,o)}),e.classList.add("clicked"))}},{key:"_getDimensions",value:function(e,t){return{networksWidth:t.offsetWidth,buttonHeight:e.offsetHeight,buttonWidth:e.offsetWidth}}},{key:"_adjustClasses",value:function(e,t,n){var o=window.innerWidth,i=window.innerHeight,r=e.getBoundingClientRect().left+n.buttonWidth/2,s=o-r,a=e.getBoundingClientRect().top+n.buttonHeight/2,c=this._findLocation(r,a,o,i);if("middle"===c[1]&&"center"!==c[0]&&("left"===c[0]&&o<=r+220+n.buttonWidth/2||"right"===c[0]&&o<=s+220+n.buttonWidth/2))t.classList.add(this.config.ui.namespace+"top"),t.classList.remove(this.config.ui.namespace+"middle"),t.classList.remove(this.config.ui.namespace+"bottom");else{switch(c[0]){case"left":t.classList.add(this.config.ui.namespace+"right"),t.classList.remove(this.config.ui.namespace+"center"),t.classList.remove(this.config.ui.namespace+"left");break;case"center":"top"!==c[1]&&t.classList.add(this.config.ui.namespace+"top"),t.classList.add(this.config.ui.namespace+"center"),t.classList.remove(this.config.ui.namespace+"left"),t.classList.remove(this.config.ui.namespace+"right"),t.classList.remove(this.config.ui.namespace+"middle");break;case"right":t.classList.add(this.config.ui.namespace+"left"),t.classList.remove(this.config.ui.namespace+"center"),t.classList.remove(this.config.ui.namespace+"right")}switch(c[1]){case"top":t.classList.add(this.config.ui.namespace+"bottom"),t.classList.remove(this.config.ui.namespace+"middle"),"center"!==c[0]&&t.classList.remove(this.config.ui.namespace+"top");break;case"middle":"center"!==c[0]&&(t.classList.add(this.config.ui.namespace+"middle"),t.classList.remove(this.config.ui.namespace+"top")),t.classList.remove(this.config.ui.namespace+"bottom");break;case"bottom":t.classList.add(this.config.ui.namespace+"top"),t.classList.remove(this.config.ui.namespace+"middle"),t.classList.remove(this.config.ui.namespace+"bottom")}}}},{key:"_findLocation",value:function(e,t,n,o){var i=Math.trunc(3*(1-(n-e)/n)),r=Math.trunc(3*(1-(o-t)/o));return 3<=i?i=2:i<=-1&&(i=0),3<=r?r=2:r<=-1&&(r=0),[["left","center","right"][i],["top","middle","bottom"][r]]}},{key:"_networkFacebook",value:function(e){return this.config.networks.facebook.loadSdk?window.FB?(this._updateHref(e,"https://www.facebook.com/sharer/sharer.php",{u:this.config.networks.facebook.url}),FB.ui({method:"feed",name:this.config.networks.facebook.title,link:this.config.networks.facebook.url,picture:this.config.networks.facebook.image,caption:this.config.networks.facebook.caption,description:this.config.networks.facebook.description})):console.error("The Facebook JS SDK hasn't loaded yet."):this._updateHref(e,"https://www.facebook.com/sharer/sharer.php",{u:this.config.networks.facebook.url})}},{key:"_networkTwitter",value:function(e){this._updateHref(e,"https://twitter.com/intent/tweet",{text:this.config.networks.twitter.description,url:this.config.networks.twitter.url})}},{key:"_networkGooglePlus",value:function(e){this._updateHref(e,"https://plus.google.com/share",{url:this.config.networks.googlePlus.url})}},{key:"_networkPinterest",value:function(e){this._updateHref(e,"https://www.pinterest.com/pin/create/button",{url:this.config.networks.pinterest.url,media:this.config.networks.pinterest.image,description:this.config.networks.pinterest.description})}},{key:"_networkLinkedin",value:function(e){this._updateHref(e,"https://www.linkedin.com/shareArticle",{mini:"true",url:this.config.networks.linkedin.url,title:this.config.networks.linkedin.title,summary:this.config.networks.linkedin.description})}},{key:"_networkEmail",value:function(e){this._updateHref(e,"mailto:",{subject:this.config.networks.email.title,body:this.config.networks.email.description})}},{key:"_networkReddit",value:function(e){this._updateHref(e,"http://www.reddit.com/submit",{url:this.config.networks.reddit.url,title:this.config.networks.reddit.title})}},{key:"_networkWhatsapp",value:function(e){this._updateHref(e,"whatsapp://send",{text:this.config.networks.whatsapp.description+" "+this.config.networks.whatsapp.url})}},{key:"_injectStylesheet",value:function(e){if(!this.el.head.querySelector("link[href='"+e+"']")){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),this.el.head.appendChild(t)}}},{key:"_injectHtml",value:function(e){var t=this.config.ui.networkOrder,n="",o=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done);o=!0){var c=s.value;n+="<li class='"+c+"' data-network='"+c+"'><a></a></li>"}}catch(e){i=!0,r=e}finally{try{!o&&a.return&&a.return()}finally{if(i)throw r}}e.innerHTML=this.config.ui.buttonText+"<div class='"+this.config.ui.namespace+"social load "+this.config.ui.flyout+"'><ul>"+n+"</ul></div>"}},{key:"_injectFacebookSdk",value:function(){if(!window.FB&&this.config.networks.facebook.appId&&!this.el.body.querySelector("#fb-root")){var e=document.createElement("script");e.text="window.fbAsyncInit=function(){FB.init({appId:'"+this.config.networks.facebook.appId+"',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if (e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='//connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk');";var t=document.createElement("div");t.id="fb-root",this.el.body.appendChild(t),this.el.body.appendChild(e)}}},{key:"_hook",value:function(e,t,n){var o=this.config.networks[t][e];if("function"==typeof o){var i=o.call(this.config.networks[t],n);void 0!==i&&(i=this._normalizeFilterConfigUpdates(i),this.extend(this.config.networks[t],i,!0),this._normalizeNetworkConfiguration())}}},{key:"_defaultTitle",value:function(){var e=void 0;return(e=document.querySelector('meta[property="og:title"]')||document.querySelector('meta[name="twitter:title"]'))?e.getAttribute("content"):(e=document.querySelector("title"))?e.textContent||e.innerText:void 0}},{key:"_defaultImage",value:function(){var e=void 0;return(e=document.querySelector('meta[property="og:image"]')||document.querySelector('meta[name="twitter:image"]'))?e.getAttribute("content"):void 0}},{key:"_defaultDescription",value:function(){var e=void 0;return(e=document.querySelector('meta[property="og:description"]')||document.querySelector('meta[name="twitter:description"]')||document.querySelector('meta[name="description"]'))?e.getAttribute("content"):""}},{key:"_detectNetworks",value:function(){var e=!0,t=!1,n=void 0;try{for(var o,i=Object.keys(this.config.networks)[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var r=o.value,s=!0,a=!1,c=void 0;try{for(var u,l=Object.keys(this.config.networks[r])[Symbol.iterator]();!(s=(u=l.next()).done);s=!0){var f=u.value;null===this.config.networks[r][f]&&(this.config.networks[r][f]=this.config[f])}}catch(e){a=!0,c=e}finally{try{!s&&l.return&&l.return()}finally{if(a)throw c}}this.config.networks[r].enabled?(this.class="enabled",this.config.enabledNetworks+=1):this.class="disabled",this.config.networks[r].class=this.class}}catch(e){t=!0,n=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw n}}}},{key:"_normalizeNetworkConfiguration",value:function(){this.config.networks.facebook.appId||(this.config.networks.facebook.loadSdk=!1),this.config.networks.twitter.description&&(this._isEncoded(this.config.networks.twitter.description)||(this.config.networks.twitter.description=encodeURIComponent(this.config.networks.twitter.description))),"number"==typeof this.config.networks.facebook.appId&&(this.config.networks.facebook.appId=this.config.networks.facebook.appId.toString())}},{key:"_normalizeFilterConfigUpdates",value:function(e){return this.config.networks.facebook.appId!==e.appId&&(console.warn("You are unable to change the Facebook appId after the button has been initialized. Please update your Facebook filters accordingly."),delete e.appId),this.config.networks.facebook.loadSdk!==e.loadSdk&&(console.warn("You are unable to change the Facebook loadSdk option after the button has been initialized. Please update your Facebook filters accordingly."),delete e.appId),e}}]),g}();t.exports=a},{"./share-utils":38,"core-js/fn/array/iterator":1,"core-js/fn/math/trunc":2,"core-js/fn/symbol":3}],38:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"_getStyle",value:function(e,t){var n="";return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,"").getPropertyValue(t):e.currentStyle&&(t=t.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()}),n=e.currentStyle[t]),n}},{key:"_hide",value:function(e){e.style.display="none"}},{key:"_show",value:function(e){e.style.display="initial"}},{key:"_hasClass",value:function(e,t){return e.classList.contains(t)}},{key:"_addClass",value:function(e,t){e.classList.add(t)}},{key:"_removeClass",value:function(e,t){e.classList.remove(t)}},{key:"_isEncoded",value:function(e){return e=e.toRFC3986(),decodeURIComponent(e)!==e}},{key:"_encode",value:function(e){return null==e||this._isEncoded(e)?encodeURIComponent(e):e.toRFC3986()}},{key:"_getUrl",value:function(e){var c=this,u=(!(arguments.length<=1||void 0===arguments[1])&&arguments[1],arguments.length<=2||void 0===arguments[2]?{}:arguments[2]),t=function(){var e=[],t=!0,n=!1,o=void 0;try{for(var i,r=Object.keys(u)[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value,a=u[s];e.push(s+"="+c._encode(a))}}catch(e){n=!0,o=e}finally{try{!t&&r.return&&r.return()}finally{if(n)throw o}}return e.join("&")}();return t&&(t="?"+t),e+t}},{key:"_updateHref",value:function(e,t,n){var o=0<=t.indexOf("mailto:"),i=e.getElementsByTagName("a")[0];if(i.setAttribute("href",this._getUrl(t,!o,n)),!(o||this.config.networks.facebook.loadSdk&&"facebook"===e.getAttribute("class"))){var r={width:500,height:350};r.top=screen.height/2-r.height/2,r.left=screen.width/2-r.width/2,window.open(i.href,"targetWindow","\n          toolbar=no,\n          location=no,\n          status=no,\n          menubar=no,\n          scrollbars=yes,\n          resizable=yes,\n          left="+r.left+",\n          top="+r.top+",\n          width="+r.width+",\n          height="+r.height+"\n        ")}}},{key:"popup",value:function(e){var c=this,u=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t={width:500,height:350};t.top=screen.height/2-t.height/2,t.left=screen.width/2-t.width/2;var n=function(){var e=[],t=!0,n=!1,o=void 0;try{for(var i,r=Object.keys(u)[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value,a=u[s];e.push(s+"="+c._encode(a))}}catch(e){n=!0,o=e}finally{try{!t&&r.return&&r.return()}finally{if(n)throw o}}return e.join("&")}();n&&(n="?"+n),window.open(e+n,"targetWindow","\n        toolbar=no,\n        location=no,\n        status=no,\n        menubar=no,\n        scrollbars=yes,\n        resizable=yes,\n        left="+t.left+",\n        top="+t.top+",\n        width="+t.width+",\n        height="+t.height+"\n      ")}},{key:"_merge",value:function(n){function e(e,t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(e,t){for(var n in"object"!=(void 0===e?"undefined":_typeof(e))&&(e={}),t)if(t.hasOwnProperty(n)){var o=t[n];if("object"==(void 0===o?"undefined":_typeof(o))){e[n]=this._merge(e[n],o);continue}e[n]=o}for(var i=2,r=arguments.length;i<r;i++)_merge(e,arguments[i]);return e})},{key:"_objToArray",value:function(e){var t=[];for(var n in e)"object"==_typeof(e[n])&&t.push(e[n]);return t}},{key:"_isMobile",value:function(){return!(!navigator.userAgent.match(/Android|iPhone|PhantomJS/i)||navigator.userAgent.match(/iPod|iPad/i))}}]),e}();String.prototype.toRFC3986=function(){encodeURIComponent(this).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})},String.prototype.capFLetter=function(){return this.charAt(0).toUpperCase()+this.slice(1)},n.default=i,t.exports=n.default},{}]},{},[37])(37)});
//# sourceMappingURL=maps/Не підтверджено 909703.js.map
