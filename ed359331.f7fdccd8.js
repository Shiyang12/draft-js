/*! For license information please see ed359331.f7fdccd8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),o=(n(181),n(180)),c={id:"api-reference-entity",title:"Entity"},i={id:"api-reference-entity",title:"Entity",description:"Entity is a static module containing the API for creating, retrieving, and",source:"@site/../docs/APIReference-Entity.md",permalink:"/docs/api-reference-entity",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-Entity.md",lastUpdatedBy:"Kevin Chavez",lastUpdatedAt:1585256396,sidebar:"docs",previous:{title:"CharacterMetadata",permalink:"/docs/api-reference-character-metadata"},next:{title:"SelectionState",permalink:"/docs/api-reference-selection-state"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>create</code> <em>(Deprecated in favour of contentState.createEntity)</em>",id:"create-deprecated-in-favour-of-contentstatecreateentity",children:[]},{value:"<code>add</code> <em>(Deprecated in favour of contentState.addEntity)</em>",id:"add-deprecated-in-favour-of-contentstateaddentity",children:[]},{value:"<code>get</code> <em>(Deprecated in favour of contentState.getEntity)</em>",id:"get-deprecated-in-favour-of-contentstategetentity",children:[]},{value:"<code>mergeData</code> <em>(Deprecated in favour of contentState.mergeEntityData)</em>",id:"mergedata-deprecated-in-favour-of-contentstatemergeentitydata",children:[]},{value:"<code>replaceData</code> <em>(Deprecated in favour of contentState.replaceEntityData)</em>",id:"replacedata-deprecated-in-favour-of-contentstatereplaceentitydata",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Entity")," is a static module containing the API for creating, retrieving, and\nupdating entity objects, which are used for annotating text ranges with metadata.\nThis module also houses the single store used to maintain entity data."),Object(o.b)("p",null,"This article is dedicated to covering the details of the API. See the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/advanced-topics-entities"}),"advanced topics article on entities"),"\nfor more detail on how entities may be used."),Object(o.b)("p",null,"Please note that the API for entity storage and management has changed recently;\nfor details on updating your application\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/v0-10-api-migration#content"}),"see our v0.10 API Migration Guide"),"."),Object(o.b)("p",null,"Entity objects returned by ",Object(o.b)("inlineCode",{parentName:"p"},"Entity")," methods are represented as\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/entity/DraftEntityInstance.js"}),"DraftEntityInstance")," immutable records. These have a small set of getter functions and should\nbe used only for retrieval."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Methods")),Object(o.b)("ul",{class:"apiIndex"},Object(o.b)("li",null,Object(o.b)("a",{href:"#create"},Object(o.b)("pre",null,"create(...): DraftEntityInstance"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#add"},Object(o.b)("pre",null,"add(instance: DraftEntityInstance): string"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#get"},Object(o.b)("pre",null,"get(key: string): DraftEntityInstance"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#mergedata"},Object(o.b)("pre",null,"mergeData(...): DraftEntityInstance"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#replacedata"},Object(o.b)("pre",null,"replaceData(...): DraftEntityInstance")))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"create-deprecated-in-favour-of-contentstatecreateentity"},Object(o.b)("inlineCode",{parentName:"h3"},"create")," ",Object(o.b)("em",{parentName:"h3"},"(Deprecated in favour of ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api-reference-content-state#createentity"}),Object(o.b)("inlineCode",{parentName:"a"},"contentState.createEntity")),")")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"create(\n  type: DraftEntityType,\n  mutability: DraftEntityMutability,\n  data?: Object\n): string\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"create")," method should be used to generate a new entity object with the\nsupplied properties."),Object(o.b)("p",null,"Note that a string is returned from this function. This is because entities\nare referenced by their string key in ",Object(o.b)("inlineCode",{parentName:"p"},"ContentState"),". The string value should\nbe used within ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," objects to track the entity for annotated\ncharacters."),Object(o.b)("h3",{id:"add-deprecated-in-favour-of-contentstateaddentity"},Object(o.b)("inlineCode",{parentName:"h3"},"add")," ",Object(o.b)("em",{parentName:"h3"},"(Deprecated in favour of ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api-reference-content-state#addentity"}),Object(o.b)("inlineCode",{parentName:"a"},"contentState.addEntity")),")")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"add(instance: DraftEntityInstance): string\n")),Object(o.b)("p",null,"In most cases, you will use ",Object(o.b)("inlineCode",{parentName:"p"},"Entity.create()"),". This is a convenience method\nthat you probably will not need in typical Draft usage."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"add")," function is useful in cases where the instances have already been\ncreated, and now need to be added to the ",Object(o.b)("inlineCode",{parentName:"p"},"Entity")," store. This may occur in cases\nwhere a vanilla JavaScript representation of a ",Object(o.b)("inlineCode",{parentName:"p"},"ContentState")," is being revived\nfor editing."),Object(o.b)("h3",{id:"get-deprecated-in-favour-of-contentstategetentity"},Object(o.b)("inlineCode",{parentName:"h3"},"get")," ",Object(o.b)("em",{parentName:"h3"},"(Deprecated in favour of ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api-reference-content-state#getentity"}),Object(o.b)("inlineCode",{parentName:"a"},"contentState.getEntity")),")")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"get(key: string): DraftEntityInstance\n")),Object(o.b)("p",null,"Returns the ",Object(o.b)("inlineCode",{parentName:"p"},"DraftEntityInstance")," for the specified key. Throws if no instance\nexists for that key."),Object(o.b)("h3",{id:"mergedata-deprecated-in-favour-of-contentstatemergeentitydata"},Object(o.b)("inlineCode",{parentName:"h3"},"mergeData")," ",Object(o.b)("em",{parentName:"h3"},"(Deprecated in favour of ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api-reference-content-state#mergeentitydata"}),Object(o.b)("inlineCode",{parentName:"a"},"contentState.mergeEntityData")),")")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"mergeData(\n  key: string,\n  toMerge: {[key: string]: any}\n): DraftEntityInstance\n")),Object(o.b)("p",null,"Since ",Object(o.b)("inlineCode",{parentName:"p"},"DraftEntityInstance")," objects are immutable, you cannot update an entity's\nmetadata through typical mutative means."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"mergeData")," method allows you to apply updates to the specified entity."),Object(o.b)("h3",{id:"replacedata-deprecated-in-favour-of-contentstatereplaceentitydata"},Object(o.b)("inlineCode",{parentName:"h3"},"replaceData")," ",Object(o.b)("em",{parentName:"h3"},"(Deprecated in favour of ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api-reference-content-state#replaceentitydata"}),Object(o.b)("inlineCode",{parentName:"a"},"contentState.replaceEntityData")),")")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"replaceData(\n  key: string,\n  newData: {[key: string]: any}\n): DraftEntityInstance\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"replaceData")," method is similar to the ",Object(o.b)("inlineCode",{parentName:"p"},"mergeData")," method, except it will\ntotally discard the existing ",Object(o.b)("inlineCode",{parentName:"p"},"data")," value for the instance and replace it with\nthe specified ",Object(o.b)("inlineCode",{parentName:"p"},"newData"),"."))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.concurrent_mode"):60111,d=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,y=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function j(e,t,n,r,a,o,c,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,c,i],u=0;(e=Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function O(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);j(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function E(){}function N(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&O("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=w.prototype;var C=N.prototype=new E;C.constructor=N,r(C,w.prototype),C.isPureReactComponent=!0;var S={current:null},D={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r=void 0,a={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:D.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var I=/\/+/g,T=[];function $(e,t,n,r){if(T.length){var a=T.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function M(e,t,n){return null==e?0:function e(t,n,r,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case c:l=!0}}if(l)return r(a,t,""===n?"."+A(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+A(i=t[u],u);l+=e(i,s,r,a)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,s=n+A(i,u++),r,a);else"object"===i&&O("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(I,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(I,"$&/")+"/"),M(e,q,t=$(t,o,r,a)),R(t)}function L(){var e=S.current;return null===e&&O("307"),e}var V={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,U,t=$(null,null,t,n)),R(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return _(e)||O("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:N,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,n){return L().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,n){return L().useReducer(e,t,n)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:i,StrictMode:l,Suspense:b,createElement:x,cloneElement:function(e,t,n){null==e&&O("267",e);var a=void 0,c=r({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,u=D.current),void 0!==t.key&&(i=""+t.key);var s=void 0;for(a in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)k.call(t,a)&&!P.hasOwnProperty(a)&&(c[a]=void 0===t[a]&&void 0!==s?s[a]:t[a])}if(1===(a=arguments.length-2))c.children=n;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];c.children=s}return{$$typeof:o,type:e.type,key:i,ref:l,props:c,_owner:u}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.8.4",unstable_ConcurrentMode:p,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:S,ReactCurrentOwner:D,assign:r}},z={default:V},B=z&&V||z;e.exports=B.default||B},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var f=0;f<i.length;f++)o.call(n,i[f])&&(l[i[f]]=n[i[f]])}}return l}}}]);