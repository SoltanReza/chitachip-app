(this["webpackJsonpardbit-trade"]=this["webpackJsonpardbit-trade"]||[]).push([[3],{727:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(50),o=n.n(r);function i(e,t){"function"===typeof e?e(t):"object"===o()(e)&&e&&"current"in e&&(e.current=t)}function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){i(t,e)}))}}},751:function(e,t,n){"use strict";var r=n(752),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,l,c,s,u=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),l=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),s&&document.body.removeChild(s),a()}return u}},752:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},753:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(754))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},754:function(e,t,n){"use strict";var r=n(46),o=n(55);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=r(n(755)),l=r(n(60)),c=function(e,t){return i.createElement(l.default,Object.assign({},e,{ref:t,icon:a.default}))};c.displayName="EditOutlined";var s=i.forwardRef(c);t.default=s},755:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"}},756:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(757))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},757:function(e,t,n){"use strict";var r=n(46),o=n(55);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=r(n(758)),l=r(n(60)),c=function(e,t){return i.createElement(l.default,Object.assign({},e,{ref:t,icon:a.default}))};c.displayName="CheckOutlined";var s=i.forwardRef(c);t.default=s},758:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}},759:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(760))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},760:function(e,t,n){"use strict";var r=n(46),o=n(55);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=r(n(761)),l=r(n(60)),c=function(e,t){return i.createElement(l.default,Object.assign({},e,{ref:t,icon:a.default}))};c.displayName="CopyOutlined";var s=i.forwardRef(c);t.default=s},761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"}},762:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(763))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},763:function(e,t,n){"use strict";var r=n(46),o=n(55);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=r(n(764)),l=r(n(60)),c=function(e,t){return i.createElement(l.default,Object.assign({},e,{ref:t,icon:a.default}))};c.displayName="EnterOutlined";var s=i.forwardRef(c);t.default=s},764:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"}},856:function(e,t,n){"use strict";var r=n(7),o=n.n(r),i=n(5),a=n.n(i),l=n(0),c=n(8),s=n.n(c),u=n(83),d=n(95),p=n(727),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},y=function(e,t){var n=e.prefixCls,r=e.component,i=void 0===r?"article":r,c=e.className,y=e["aria-label"],v=e.setContentRef,h=e.children,m=f(e,["prefixCls","component","className","aria-label","setContentRef","children"]),b=t;return v&&(Object(d.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),b=Object(p.a)(t,v)),l.createElement(u.a,null,(function(e){var t=e.getPrefixCls,r=e.direction,u=i,d=t("typography",n),p=s()(d,c,a()({},"".concat(d,"-rtl"),"rtl"===r));return l.createElement(u,o()({className:p,"aria-label":y,ref:b},m),h)}))},v=l.forwardRef(y);v.displayName="Typography";var h=v,m=n(50),b=n.n(m),g=n(254),x=n.n(g),E=n(36),C=n.n(E),O=n(38),w=n.n(O),j=n(39),k=n.n(j),S=n(45),R=n.n(S),N=n(27),P=n.n(N),T=n(133),D=n(119),M=n(751),_=n.n(M),I=n(56),A=n(753),z=n.n(A),H=n(756),K=n.n(H),U=n(759),L=n.n(U),F=n(737),B=n(52),V=n(172),W=n(87);function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P()(e);if(t){var o=P()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R()(this,n)}}var X=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},q={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},G=function(e){k()(n,e);var t=J(n);function n(){var e;return C()(this,n),(e=t.apply(this,arguments)).onKeyDown=function(e){e.keyCode===W.a.ENTER&&e.preventDefault()},e.onKeyUp=function(t){var n=t.keyCode,r=e.props.onClick;n===W.a.ENTER&&r&&r()},e.setRef=function(t){e.div=t},e}return w()(n,[{key:"componentDidMount",value:function(){this.props.autoFocus&&this.focus()}},{key:"focus",value:function(){this.div&&this.div.focus()}},{key:"blur",value:function(){this.div&&this.div.blur()}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.noStyle,r=e.disabled,i=X(e,["style","noStyle","disabled"]),a={};return n||(a=o()({},q)),r&&(a.pointerEvents="none"),a=o()(o()({},a),t),l.createElement("div",o()({role:"button",tabIndex:0,ref:this.setRef},i,{onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,style:a}))}}]),n}(l.Component),Q=n(244),Y=function(e){if("undefined"!==typeof window&&window.document&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1},Z=(Y(["flex","webkitFlex","Flex","msFlex"]),Y),$=n(361),ee=n(762),te=n.n(ee),ne=n(283);function re(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P()(e);if(t){var o=P()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R()(this,n)}}var oe,ie=function(e){k()(n,e);var t=re(n);function n(){var e;return C()(this,n),(e=t.apply(this,arguments)).inComposition=!1,e.state={current:""},e.onChange=function(t){var n=t.target.value;e.setState({current:n.replace(/[\n\r]/g,"")})},e.onCompositionStart=function(){e.inComposition=!0},e.onCompositionEnd=function(){e.inComposition=!1},e.onKeyDown=function(t){var n=t.keyCode;e.inComposition||(e.lastKeyCode=n)},e.onKeyUp=function(t){var n=t.keyCode,r=t.ctrlKey,o=t.altKey,i=t.metaKey,a=t.shiftKey,l=e.props.onCancel;e.lastKeyCode!==n||e.inComposition||r||o||i||a||(n===W.a.ENTER?e.confirmChange():n===W.a.ESC&&l())},e.onBlur=function(){e.confirmChange()},e.confirmChange=function(){var t=e.state.current;(0,e.props.onSave)(t.trim())},e.setTextarea=function(t){e.textarea=t},e}return w()(n,[{key:"componentDidMount",value:function(){if(this.textarea&&this.textarea.resizableTextArea){var e=this.textarea.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}},{key:"render",value:function(){var e=this.state.current,t=this.props,n=t.prefixCls,r=t["aria-label"],o=t.className,i=t.style,c=t.direction,u=s()(n,o,"".concat(n,"-edit-content"),a()({},"".concat(n,"-rtl"),"rtl"===c));return l.createElement("div",{className:u,style:i},l.createElement(ne.a,{ref:this.setTextarea,value:e,onChange:this.onChange,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,onCompositionStart:this.onCompositionStart,onCompositionEnd:this.onCompositionEnd,onBlur:this.onBlur,"aria-label":r,autoSize:!0}),l.createElement(te.a,{className:"".concat(n,"-edit-content-confirm")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevValue,r=e.value,o={prevValue:r};return n!==r&&(o.current=r),o}}]),n}(l.Component),ae=n(24),le={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function ce(e){if(!e)return 0;var t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0}var se=function(e,t,n,r,o){oe||((oe=document.createElement("div")).setAttribute("aria-hidden","true"),document.body.appendChild(oe));var i,a=t.rows,c=t.suffix,s=void 0===c?"":c,u=window.getComputedStyle(e),d=(i=u,Array.prototype.slice.apply(i).map((function(e){return"".concat(e,": ").concat(i.getPropertyValue(e),";")})).join("")),p=ce(u.lineHeight),f=Math.round(p*(a+1)+ce(u.paddingTop)+ce(u.paddingBottom));oe.setAttribute("style",d),oe.style.position="fixed",oe.style.left="0",oe.style.height="auto",oe.style.minHeight="auto",oe.style.maxHeight="auto",oe.style.top="-999999px",oe.style.zIndex="-1000",oe.style.textOverflow="clip",oe.style.whiteSpace="normal",oe.style.webkitLineClamp="none";var y=function(e){var t=[];return e.forEach((function(e){var n=t[t.length-1];"string"===typeof e&&"string"===typeof n?t[t.length-1]+=e:t.push(e)})),t}(Object(T.a)(n));function v(){return oe.offsetHeight<f}if(Object(ae.render)(l.createElement("div",{style:le},l.createElement("span",{style:le},y,s),l.createElement("span",{style:le},r)),oe),v())return Object(ae.unmountComponentAtNode)(oe),{content:n,text:oe.innerHTML,ellipsis:!1};var h=Array.prototype.slice.apply(oe.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((function(e){return 8!==e.nodeType})),m=Array.prototype.slice.apply(oe.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(ae.unmountComponentAtNode)(oe);var b=[];oe.innerHTML="";var g=document.createElement("span");oe.appendChild(g);var x=document.createTextNode(o+s);function E(e){g.insertBefore(e,x)}function C(e,t){var n=e.nodeType;if(1===n)return E(e),v()?{finished:!1,reactNode:y[t]}:(g.removeChild(e),{finished:!0,reactNode:null});if(3===n){var r=e.textContent||"",o=document.createTextNode(r);return E(o),function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=Math.floor((r+o)/2),l=n.slice(0,a);if(t.textContent=l,r>=o-1)for(var c=o;c>=r;c-=1){var s=n.slice(0,c);if(t.textContent=s,v()||!s)return c===n.length?{finished:!1,reactNode:n}:{finished:!0,reactNode:s}}return v()?e(t,n,a,o,a):e(t,n,r,a,i)}(o,r)}return{finished:!1,reactNode:null}}return g.appendChild(x),m.forEach((function(e){oe.appendChild(e)})),h.some((function(e,t){var n=C(e,t),r=n.finished,o=n.reactNode;return o&&b.push(o),r})),{content:b,text:oe.innerHTML,ellipsis:!0}};function ue(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P()(e);if(t){var o=P()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R()(this,n)}}var de=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},pe=Z("webkitLineClamp"),fe=Z("textOverflow");var ye=function(e){k()(n,e);var t=ue(n);function n(){var e;return C()(this,n),(e=t.apply(this,arguments)).contentRef=l.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls;return(0,e.context.getPrefixCls)("typography",t)},e.onExpandClick=function(t){var n=e.getEllipsis().onExpand;e.setState({expanded:!0}),n&&n(t)},e.onEditClick=function(){e.triggerEdit(!0)},e.onEditChange=function(t){var n=e.getEditable().onChange;n&&n(t),e.triggerEdit(!1)},e.onEditCancel=function(){e.triggerEdit(!1)},e.onCopyClick=function(){var t=e.props,n=t.children,r=t.copyable,i=o()({},"object"===b()(r)?r:null);void 0===i.text&&(i.text=String(n)),_()(i.text||""),e.setState({copied:!0},(function(){i.onCopy&&i.onCopy(),e.copyId=window.setTimeout((function(){e.setState({copied:!1})}),3e3)}))},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var n=e.getEditable().onStart;t&&n&&n(),e.setState({edit:t},(function(){!t&&e.editIcon&&e.editIcon.focus()}))},e.resizeOnNextFrame=function(){Q.a.cancel(e.rafId),e.rafId=Object(Q.a)((function(){e.syncEllipsis()}))},e}return w()(n,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(e){var t=this.props.children,n=this.getEllipsis(),r=this.getEllipsis(e);t===e.children&&n.rows===r.rows||this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),Q.a.cancel(this.rafId)}},{key:"getEditable",value:function(e){var t=this.state.edit,n=(e||this.props).editable;return n?o()({editing:t},"object"===b()(n)?n:null):{editing:t}}},{key:"getEllipsis",value:function(e){var t=(e||this.props).ellipsis;return t?o()({rows:1,expandable:!1},"object"===b()(t)?t:null):{}}},{key:"canUseCSSEllipsis",value:function(){var e=this.state.clientRendered,t=this.props,n=t.editable,r=t.copyable,o=this.getEllipsis(),i=o.rows,a=o.expandable,l=o.suffix,c=o.onEllipsis;return!l&&(!(n||r||a||!e||c)&&(1===i?fe:pe))}},{key:"syncEllipsis",value:function(){var e=this.state,t=e.ellipsisText,n=e.isEllipsis,r=e.expanded,o=this.getEllipsis(),i=o.rows,a=o.suffix,l=o.onEllipsis,c=this.props.children;if(i&&!(i<0)&&this.contentRef.current&&!r&&!this.canUseCSSEllipsis()){Object(d.a)(Object(T.a)(c).every((function(e){return"string"===typeof e})),"Typography","`ellipsis` should use string as children only.");var s=se(Object(D.a)(this.contentRef.current),{rows:i,suffix:a},c,this.renderOperations(!0),"..."),u=s.content,p=s.text,f=s.ellipsis;t===p&&n===f||(this.setState({ellipsisText:p,ellipsisContent:u,isEllipsis:f}),n!==f&&l&&l(f))}}},{key:"renderExpand",value:function(e){var t,n=this.getEllipsis(),r=n.expandable,o=n.symbol,i=this.state,a=i.expanded,c=i.isEllipsis;return r&&(e||!a&&c)?(t=o||this.expandStr,l.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},t)):null}},{key:"renderEdit",value:function(){if(this.props.editable)return l.createElement($.a,{key:"edit",title:this.editStr},l.createElement(G,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":this.editStr},l.createElement(z.a,{role:"button"})))}},{key:"renderCopy",value:function(){var e,t,n=this.state.copied,r=this.props.copyable;if(r){var o=this.getPrefixCls(),i=n?(null===(e=r.tooltips)||void 0===e?void 0:e[1])||this.copiedStr:(null===(t=r.tooltips)||void 0===t?void 0:t[0])||this.copyStr,a="string"===typeof i?i:"";return l.createElement($.a,{key:"copy",title:i},l.createElement(G,{className:s()("".concat(o,"-copy"),n&&"".concat(o,"-copy-success")),onClick:this.onCopyClick,"aria-label":a},n?l.createElement(K.a,null):r.icon||l.createElement(L.a,null)))}}},{key:"renderEditInput",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,o=this.context.direction;return l.createElement(ie,{value:"string"===typeof t?t:"",onSave:this.onEditChange,onCancel:this.onEditCancel,prefixCls:this.getPrefixCls(),className:n,style:r,direction:o})}},{key:"renderOperations",value:function(e){return[this.renderExpand(e),this.renderEdit(),this.renderCopy()].filter((function(e){return e}))}},{key:"renderContent",value:function(){var e,t=this,n=this.state,r=n.ellipsisContent,i=n.isEllipsis,c=n.expanded,u=this.props,d=u.component,p=u.children,f=u.className,y=u.type,v=u.disabled,m=u.style,b=de(u,["component","children","className","type","disabled","style"]),g=this.context.direction,E=this.getEllipsis(),C=E.rows,O=E.suffix,w=this.getPrefixCls(),j=Object(I.a)(b,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat(x()(B.a))),k=this.canUseCSSEllipsis(),S=1===C&&k,R=C&&C>1&&k,N=p;if(C&&i&&!c&&!k){var P=b.title;e=P,P||"string"!==typeof p&&"number"!==typeof p||(e=String(p)),N=l.createElement("span",{title:e,"aria-hidden":"true"},r,"...",O)}else N=l.createElement(l.Fragment,null,p,O);return N=function(e,t){var n=e.mark,r=e.code,o=e.underline,i=e.delete,a=e.strong,c=e.keyboard,s=t;function u(e,t){e&&(s=l.createElement(t,{},s))}return u(a,"strong"),u(o,"u"),u(i,"del"),u(r,"code"),u(n,"mark"),u(c,"kbd"),s}(this.props,N),l.createElement(V.a,{componentName:"Text"},(function(n){var r,i=n.edit,c=n.copy,u=n.copied,p=n.expand;return t.editStr=i,t.copyStr=c,t.copiedStr=u,t.expandStr=p,l.createElement(F.a,{onResize:t.resizeOnNextFrame,disabled:!C},l.createElement(h,o()({className:s()(f,(r={},a()(r,"".concat(w,"-").concat(y),y),a()(r,"".concat(w,"-disabled"),v),a()(r,"".concat(w,"-ellipsis"),C),a()(r,"".concat(w,"-ellipsis-single-line"),S),a()(r,"".concat(w,"-ellipsis-multiple-line"),R),r)),style:o()(o()({},m),{WebkitLineClamp:R?C:null}),component:d,ref:t.contentRef,"aria-label":e,direction:g},j),N,t.renderOperations()))}))}},{key:"render",value:function(){return this.getEditable().editing?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.children,n=e.editable;return Object(d.a)(!n||"string"===typeof t,"Typography","When `editable` is enabled, the `children` should use string."),{}}}]),n}(l.Component);ye.contextType=u.b,ye.defaultProps={children:""};var ve=ye,he=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},me=function(e){var t=e.ellipsis,n=he(e,["ellipsis"]);return Object(d.a)("object"!==b()(t),"Typography.Text","`ellipsis` only supports boolean value."),l.createElement(ve,o()({},n,{ellipsis:!!t,component:"span"}))},be=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},ge=function(e,t){var n=e.ellipsis,r=e.rel,i=be(e,["ellipsis","rel"]);Object(d.a)("object"!==b()(n),"Typography.Link","`ellipsis` only supports boolean value.");var a=l.useRef(null);l.useImperativeHandle(t,(function(){var e;return null===(e=a.current)||void 0===e?void 0:e.contentRef.current}));var c=o()(o()({},i),{rel:void 0===r&&"_blank"===i.target?"noopener noreferrer":r});return l.createElement(ve,o()({},c,{ref:a,ellipsis:!!n,component:"a"}))},xe=l.forwardRef(ge),Ee=n(86),Ce=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Oe=Object(Ee.b)(1,2,3,4),we=function(e){var t,n=e.level,r=void 0===n?1:n,i=Ce(e,["level"]);return-1!==Oe.indexOf(r)?t="h".concat(r):(Object(d.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4` as `level` value."),t="h1"),l.createElement(ve,o()({},i,{component:t}))},je=function(e){return l.createElement(ve,o()({},e,{component:"div"}))},ke=h;ke.Text=me,ke.Link=xe,ke.Title=we,ke.Paragraph=je;t.a=ke}}]);