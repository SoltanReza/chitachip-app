(this["webpackJsonpardbit-trade"]=this["webpackJsonpardbit-trade"]||[]).push([[16],{711:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(20),n={tiny:320,small:480,medium:768,large:1200,xlarge:1201};Object.keys(n).reduce((function(e,t){return e[t]=function(e){for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return Object(r.b)(["@media (max-width:","px){",";}"],n[t],r.b.apply(void 0,[e].concat(o)))},e}),{})},827:function(e,t,a){var r;e.exports=(r=a(0),function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=a(6),i=r(o),c=r(a(4)),s={className:c.default.string,onloadCallbackName:c.default.string,elementID:c.default.string,onloadCallback:c.default.func,verifyCallback:c.default.func,expiredCallback:c.default.func,render:c.default.oneOf(["onload","explicit"]),sitekey:c.default.string,theme:c.default.oneOf(["light","dark"]),type:c.default.string,verifyCallbackName:c.default.string,expiredCallbackName:c.default.string,size:c.default.oneOf(["invisible","compact","normal"]),tabindex:c.default.string,hl:c.default.string,badge:c.default.oneOf(["bottomright","bottomleft","inline"])},l=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.grecaptcha&&"function"==typeof window.grecaptcha.render},p=void 0,d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a._renderGrecaptcha=a._renderGrecaptcha.bind(a),a.reset=a.reset.bind(a),a.state={ready:l(),widget:null},a.state.ready||"undefined"==typeof window||(p=setInterval(a._updateReadyState.bind(a),1e3)),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.state.ready&&this._renderGrecaptcha()}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,r=a.render,n=a.onloadCallback;"explicit"===r&&n&&this.state.ready&&!t.ready&&this._renderGrecaptcha()}},{key:"componentWillUnmount",value:function(){clearInterval(p)}},{key:"reset",value:function(){var e=this.state,t=e.ready,a=e.widget;t&&null!==a&&grecaptcha.reset(a)}},{key:"execute",value:function(){var e=this.state,t=e.ready,a=e.widget;t&&null!==a&&grecaptcha.execute(a)}},{key:"_updateReadyState",value:function(){l()&&(this.setState({ready:!0}),clearInterval(p))}},{key:"_renderGrecaptcha",value:function(){this.state.widget=grecaptcha.render(this.props.elementID,{sitekey:this.props.sitekey,callback:this.props.verifyCallback?this.props.verifyCallback:void 0,theme:this.props.theme,type:this.props.type,size:this.props.size,tabindex:this.props.tabindex,hl:this.props.hl,badge:this.props.badge,"expired-callback":this.props.expiredCallback?this.props.expiredCallback:void 0}),this.props.onloadCallback&&this.props.onloadCallback()}},{key:"render",value:function(){return"explicit"===this.props.render&&this.props.onloadCallback?i.default.createElement("div",{id:this.props.elementID,"data-onloadcallbackname":this.props.onloadCallbackName,"data-verifycallbackname":this.props.verifyCallbackName}):i.default.createElement("div",{id:this.props.elementID,className:this.props.className,"data-sitekey":this.props.sitekey,"data-theme":this.props.theme,"data-type":this.props.type,"data-size":this.props.size,"data-badge":this.props.badge,"data-tabindex":this.props.tabindex})}}]),t}(o.Component);t.default=d,d.propTypes=s,d.defaultProps={elementID:"g-recaptcha",className:"g-recaptcha",onloadCallback:void 0,onloadCallbackName:"onloadCallback",verifyCallback:void 0,verifyCallbackName:"verifyCallback",expiredCallback:void 0,expiredCallbackName:"expiredCallback",render:"onload",theme:"light",type:"image",size:"normal",tabindex:"0",hl:"en",badge:"bottomright"},e.exports=t.default},function(e,t){"use strict";function a(e){return function(){return e}}var r=function(){};r.thatReturns=a,r.thatReturnsFalse=a(!1),r.thatReturnsTrue=a(!0),r.thatReturnsNull=a(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,a){"use strict";var r=function(e){};e.exports=function(e,t,a,n,o,i,c,s){if(r(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[a,n,o,i,c,s],d=0;(l=new Error(t.replace(/%s/g,(function(){return p[d++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,a){"use strict";var r=a(1),n=a(2),o=a(5);e.exports=function(){function e(e,t,a,r,i,c){c!==o&&n(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return a.checkPropTypes=r,a.PropTypes=a,a}},function(e,t,a){e.exports=a(3)()},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=r}]))},861:function(e,t,a){"use strict";a.r(t),a.d(t,"RegisterPage",(function(){return A}));var r=a(59),n=a(367),o=a(853),i=a(696),c=a(697),s=a(214),l=a(49),p=a(0),d=a.n(p),u=a(58),m=a(44),f=a(699),b=a(212),g=a(35),h=a(29),y=a(95),k=a(7),v=a(14),x=a.n(v),O=x.a.mark(w);function w(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),O)}var C=a(38),j=a(253),E={},_=Object(j.a)({name:"registerPage",initialState:E,reducers:{someAction:function(e,t){}}}),N=(_.actions,_.reducer),R=_.name,L=Object(C.a)([function(e){return e.registerPage||E}],(function(e){return e})),P=a(20),T=a(711),I=a(69),S=P.c.section.withConfig({componentId:"au28g3-0"})(["background-image:url('/assest/back_img.png');background-size:cover;background-position:center;height:100vh;background-repeat:no-repeat;display:flex;justify-content:center;justify-items:center;align-items:center;.recaptcha{margin-top:2em !important;}.form{width:30%;padding:36px;box-shadow:0 0 100px rgba(0,0,0,0.08);border-radius:6px;background-color:",";.inputLoginStyle{border-top:none;border-left:none;border-right:none;border-color:#000;}.btnDir{direction:ltr;}.actionPass{display:flex;justify-content:space-between;}.btnLogin{background:#ff9800;border-color:#ff9800;border-radius:20px;padding:0 2em 0 2em;}.titleLogin{margin:1.65em 0 1.5em 0;font-size:2em;font-weight:bold;color:#000;}.descPassowrd{margin-bottom:1em;}.notifLogin{margin-top:1em;margin-bottom:1em;}p{text-align:center;margin-top:16px;font-size:12px;display:flex;justify-content:space-between;}}.logo{text-align:center;cursor:pointer;display:flex;justify-content:center;align-items:center;img{width:130px;}span{vertical-align:text-bottom;font-size:16px;text-transform:uppercase;display:inline-block;font-weight:700;}}.textLink{color:",";margin-top:1em;}.footer{margin-top:2em;direction:ltr;}@media (max-width:","px){.form{width:96%;}}"],I.a.LOGIN_FORM_BACKGROUND,I.a.TEXT_COLOR_INVERT,T.a.small),z=(Object(P.c)(o.a).withConfig({componentId:"au28g3-1"})(["padding:30px;background-color:rgba(45,105,144,0.4);box-shadow:0 0 30px #1b3f56;border-radius:1.5em;width:40em;max-width:95%;margin:auto;.goToRegister{margin-top:1em;cursor:pointer;color:",";font-weight:bold;}.container{background-color:",";padding:2em;border-radius:0.5em;.header{position:relative;color:rgba(0,0,0,0.54);margin-bottom:3em;.title{font-size:1.5rem;font-weight:400;line-height:1.334em;}.description{font-size:1rem;opacity:0.7;}.logo{position:absolute;background:url('assets/images/logo.png');background-size:100%;background-position:center;background-repeat:no-repeat;width:3em;height:3em;top:1em;left:1em;}}}@media (max-width:","px){padding:1em;}@media (max-height:","px){padding:0em;}"],I.a.REGISTER_COLOR,I.a.light,T.a.small,T.a.small),a(827)),D=a.n(z);function A(e){var t=e.className;Object(b.a)({key:R,reducer:N}),Object(b.b)({key:R,saga:w});Object(m.d)(L);var a=Object(f.f)(),v=Object(u.b)().t,x=Object(f.h)(),O=Object(m.c)(),C=Object(p.useState)(!1),j=Object(r.a)(C,2),E=j[0],_=j[1],P=Object(p.useState)(!1),T=Object(r.a)(P,2),I=(T[0],T[1]),z=Object(p.useState)(!1),A=Object(r.a)(z,2),G=A[0],F=A[1],M=Object(m.d)(y.p),U=Object(p.useMemo)((function(){return!!M.params}),[M.params]),B=(Object(p.useCallback)((function(){return a.push(h.a.login)}),[a]),Object(p.useCallback)((function(e){G?O(k.a.register({password:e.password,mobile:x.mobile})):alert("\u0644\u0637\u0641\u0627 \u06af\u0632\u06cc\u0646\u0647 \u0645\u0646 \u0631\u0628\u0627\u062a \u0646\u06cc\u0633\u062a\u0645 \u0631\u0627 \u062a\u06cc\u06a9 \u0628\u0632\u0646\u06cc\u062f")}),[O,G,x.mobile])),q=Object(p.useCallback)((function(e){I(!0),Object(g.C)({code:e.code}).then((function(e){200===e.status?(I(!1),n.a.info("\u0644\u0637\u0641\u0627 \u0628\u0631\u0627\u06cc \u062a\u06a9\u0645\u06cc\u0644 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0627\u0631\u0628\u0631\u06cc \u0628\u0647 \u0635\u0641\u062d\u0647 \u067e\u0631\u0648\u0641\u0627\u06cc\u0644 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0645\u0631\u0627\u062c\u0639\u0647 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f"),a.push(h.a.home)):400===e.status?(n.a.info("\u06a9\u062f \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0635\u062d\u06cc\u062d \u0646\u0645\u06cc\u0628\u0627\u0634\u062f"),a.push(h.a.register)):I(!1)})).catch((function(){}))}),[a]),J=Object(p.useCallback)((function(){return a.push(h.a.home)}),[a]),V=Object(p.useCallback)((function(){}),[]),W=Object(p.useCallback)((function(e){e&&F(!0)}),[]);return Object(p.useEffect)((function(){M.data&&201===M.data.status&&_(!0),O(k.a.registerClear())}),[O,M.data]),console.log(x),d.a.createElement(S,{className:"RegisterPage ".concat(t||""),title:v(l.a.pages.RegisterPage.title)},E?d.a.createElement("div",{className:"form"},d.a.createElement("div",{className:"logo",onClick:J},d.a.createElement("img",{alt:"logo",src:"/assest/Chitachip.svg"})),d.a.createElement("div",{className:"titleLogin"},"\u06a9\u062f \u0627\u0631\u0633\u0627\u0644\u06cc"),d.a.createElement(o.a,{onFinish:q},d.a.createElement(o.a.Item,{name:"code",rules:[{required:!0}]},d.a.createElement(i.a,{className:"inputLoginStyle",placeholder:v(l.a.global.placeholder.code),disabled:U})),d.a.createElement(c.a,{className:"btnDir"},d.a.createElement(s.a,{type:"primary",htmlType:"submit",className:"btnLogin",loading:U},v(l.a.pages.RegisterPage.RegisterForm.registerBtn))," "))):d.a.createElement("div",{className:"form"},d.a.createElement("div",{className:"logo",onClick:J},d.a.createElement("img",{alt:"logo",src:"/assest/Chitachip.svg"})),d.a.createElement("div",{className:"titleLogin"},"\u062b\u0628\u062a \u0646\u0627\u0645"),d.a.createElement(o.a,{onFinish:B},d.a.createElement(o.a.Item,{name:"mobile"},d.a.createElement(i.a,{className:"inputLoginStyle",placeholder:v(l.a.global.placeholder.username),defaultValue:"".concat(x.mobile),disabled:!0})),d.a.createElement(o.a.Item,{name:"password",rules:[{required:!0,message:"\u0644\u0637\u0641\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"}]},d.a.createElement(i.a,{type:"password",className:"inputLoginStyle",placeholder:v(l.a.global.placeholder.password),disabled:U})),d.a.createElement(c.a,{className:"btnDir"},d.a.createElement(s.a,{type:"primary",htmlType:"submit",className:"btnLogin",loading:U},v(l.a.pages.LoginPage.LoginForm.continue))," "),d.a.createElement("div",{className:"recaptcha"},d.a.createElement(D.a,{sitekey:"6LdjRe0aAAAAAL_CiGrh0ABjzgcRbtLIF6tJZEfr",render:"explicit",verifyCallback:W,onloadCallback:V})))))}}}]);