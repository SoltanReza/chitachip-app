(this["webpackJsonpardbit-trade"]=this["webpackJsonpardbit-trade"]||[]).push([[13],{711:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(20),n={tiny:320,small:480,medium:768,large:1200,xlarge:1201};Object.keys(n).reduce((function(e,t){return e[t]=function(e){for(var a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return Object(r.b)(["@media (max-width:","px){",";}"],n[t],r.b.apply(void 0,[e].concat(i)))},e}),{})},713:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(843),n=a(361),i=a(0),o=a.n(i);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e?e.length<=t?e:o.a.createElement(o.a.Fragment,null,e.substring(0,t),o.a.createElement(n.a,{title:e,style:{maxWidth:"30em"}},o.a.createElement(r.a,{style:{transform:"rotate(90deg)",margin:" 0 .15em",fontSize:"1.5em"}}))):null}},714:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var r=a(59),n=a(0),i=a.n(n),o=a(20).c.section.withConfig({componentId:"sc-1b5k4rb-0"})([".offerCard{display:flex;flex-direction:column;background:#fff;padding:1em;border-radius:6px;min-width:100%;box-shadow:0px 4px 4px rgba(0,0,0,0.25);position:relative;height:275px;justify-content:space-between;&:hover{.buyProduct{display:none;}.voteStyle{display:flex;}}@media screen and (max-width:640px){.buyProduct{font-size:0.9em;}.anticon{transform:scale(0.9);}}}.imgProductWrapper-slider{display:flex;justify-content:center;align-items:center;height:150px;.imgProduct{cursor:pointer;background-position:center;background-repeat:no-repeat;height:100%;width:100%;object-fit:contain;}}.titleProduct{font-weight:bold;margin-bottom:0.7em;cursor:pointer;@media screen and (max-width:640px){font-size:0.9em;}}.buyProduct{display:flex;flex-direction:row;justify-content:space-between !important;align-items:center;margin-top:0.5em;}.price{display:flex;justify-content:space-between;font-weight:bold;font-size:0.9em;}.priceBtn{display:flex;flex-direction:revert;justify-content:space-between;}.iconeShop{margin-left:0.2em;}.discountBtn{border-radius:11px;background:#ff9800;}.priceStyle{display:flex;flex-direction:column;}.currency{font-size:0.6em;line-height:2.5em;}.discount{margin-left:1em;color:red;font-weight:bold;}.priceDiscount{line-height:1.9em;}.voteLike{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#9e9e9e;z-index:9999;opacity:0.9;display:flex;justify-content:center;flex-direction:column;align-items:center;color:#ff0000;font-size:1em;font-weight:bold;}.voteLikeNone{display:none;}.voteStyle{display:none;flex-direction:row;justify-content:space-between !important;margin-top:1.6em;}.count-wrapper{border:1px solid #ff9800;border-radius:10px;display:grid;place-items:center;background:transparent;padding:0.25em 0.3em;box-shadow:0px 0px 4px #ffb14d;}.count{display:flex;justify-content:center;align-items:center;color:black;font-size:1.2em;text-align:center;.icon{font-size:0.9em;margin-top:-10px;cursor:pointer;color:#f2ab4f;}.text{margin-top:-7px;flex:none;padding:0 2px;font-size:0.9em;}}"]),c=a(58),l=a(844),s=a(747),d=a(748),m=a(713),u=a(84),p=a(44),g=a(95),f=a(29),b=a(7),x=Object(n.memo)((function(e){var t,a,x=e.className,y=e.data,h=(Object(c.b)().t,y),E=Object(n.useState)(!1),w=Object(r.a)(E,2),v=(w[0],w[1]),j=Object(n.useState)(0),C=Object(r.a)(j,2),k=(C[0],C[1]),N=Object(n.useState)(""),O=Object(r.a)(N,2),L=O[0],z=O[1],P=Object(p.c)(),S=Object(n.useCallback)((function(e){return function(){return Object(u.b)(f.a.productDetails,{id:e})}}),[]),I=Object(p.d)(g.c),T=Object(p.d)(g.m),F=Object(p.d)(g.b),_=Object(n.useCallback)((function(e){var t,a=e.currentTarget.dataset;k(null===(t=F.data)||void 0===t?void 0:t.quantity),z(a.id),P(b.a.addToBasket({product_id:a.id,quantity:-1}))}),[F.data,P]),A=Object(n.useCallback)((function(e){var t=e.currentTarget.dataset;z(t.id),P(b.a.addToBasket({product_id:t.id,quantity:1}))}),[P]),B=Object(n.useCallback)((function(e){var t=e.currentTarget.dataset;I&&(I.data?P(b.a.likeProduct({product_id:t.id})):v(!0))}),[I,P]);return i.a.createElement(o,{className:"ProductCard ".concat(x||"")},i.a.createElement("div",{className:"offerCard"},i.a.createElement("div",{"data-id":h.id,onClick:S(h.id)},i.a.createElement("div",{className:"titleProduct"},Object(m.a)("".concat(h.title),24)),i.a.createElement("div",{className:"imgProductWrapper-slider"},i.a.createElement("img",{src:h.image,className:"imgProduct",alt:h.title}))),i.a.createElement("div",{className:"buyProduct",id:"buyProduct".concat(h.id)},i.a.createElement("div",null,i.a.createElement(l.a,{style:{color:"#ffc107",fontSize:"1.5em"}}),h.avg_stars),i.a.createElement("div",{className:"priceStyle"},i.a.createElement("div",{className:"price"},i.a.createElement("div",{className:"discount"},h.discount>0&&h.discount),i.a.createElement("s",{className:"priceDiscount"},h.discount>0&&h.price.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g,","))),i.a.createElement("div",{className:"price"},i.a.createElement("div",{className:"currency"},"\u062a\u0648\u0645\u0627\u0646"),i.a.createElement("div",null,h.price.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g,","))))),i.a.createElement("div",{className:"voteStyle"},i.a.createElement("div",null,T&&T.data?201===T.data.status?i.a.createElement(s.a,{style:{color:"#ffc107",fontSize:"1.7em"},"data-id":h.id,onClick:B}):i.a.createElement(d.a,{style:{color:"#ffc107",fontSize:"1.7em"},"data-id":h.id,onClick:B}):i.a.createElement(s.a,{style:{color:"#ffc107",fontSize:"1.7em"},"data-id":h.id,onClick:B})),i.a.createElement("div",{className:"count-wrapper"},i.a.createElement("span",{className:"count"},i.a.createElement("span",{className:"icon","data-id":h.id,onClick:A},"+"),L===h.id?402===(null===(t=F.data)||void 0===t?void 0:t.status)?i.a.createElement("span",{className:"text"},"0"):i.a.createElement("span",{className:"text"},null===(a=F.data)||void 0===a?void 0:a.quantity):i.a.createElement("span",{className:"text"},"0"),i.a.createElement("span",{className:"icon","data-id":h.id,onClick:_},"-"))))))}))},737:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var r=a(59),n=a(712),i=a(124),o=a(697),c=a(698),l=a(845),s=a(846),d=a(29),m=a(0),u=a.n(m),p=a(58),g=a(44),f=a(84),b=a(20),x=a(69),y=a(711),h=b.c.section.withConfig({componentId:"sc-1hqz3cu-0"})(["background:",";background:#fff;width:100%;border-radius:10px;box-shadow:2px 2px 15px rgba(0,0,0,0.25);&.collapsed{overflow:hidden;}h3{cursor:pointer;}.categoryTitle{padding:1em 1em 0.6em 0em;font-weight:bold;color:black;}.iconCategory{width:20px;}.rowCategory{cursor:pointer;margin-bottom:1em;list-style-type:none;&:hover{.hoverCategory{display:inline;}.rowCategoryItem{background:#f9ae3b !important;padding:0.5em;opacity:0.5;}.titleCategory{color:#000 !important;}}}.rowCategoryItem{padding:0.5em;}.ulCategotry{padding-right:1.5em;}.titleCategory{margin-right:1em;color:#000;}.ant-layout-sider{background:",";background:#fff;border-radius:5px;-webkit-box-shadow:-1px 0px 5px 0px rgb(0 0 0 / 75%);-moz-box-shadow:-1px 0px 5px 0px rgba(0,0,0,0.75);box-shadow:-1px 0px 5px 0px rgb(0 0 0 / 75%);}.hoverCategory{display:none;position:absolute;right:calc(100% - 7px);background:#fff;z-index:4;width:150%;padding:1em;border:solid 1px #f2ab4f;border-radius:5px;border-bottom-right-radius:0;border-top-right-radius:0;max-height:250px;height:110%;overflow-y:auto;margin-top:-2.78em;-webkit-box-shadow:-1px 0px 5px 0px rgb(0 0 0 / 75%);-moz-box-shadow:-1px 0px 5px 0px rgba(0,0,0,0.75);box-shadow:-1px 0px 5px 0px rgb(0 0 0 / 75%);}.colCategoryList{margin-bottom:1em;}.imgCategoryList{width:80px;height:80px;}.rowImgCategoryList{display:flex;justify-content:center;}.colCategoryList:hover{background:#fff;border-radius:8px;box-shadow:0px 0px 30px rgba(0,0,0,0.161);}.subCategoryListTitle{display:flex;justify-content:center;color:#000;font-weight:bold;}@media (max-width:","px){min-width:60px !important;.categoryTitle{display:none;}}"],x.a.LAYOUT_HEADER_COLOR,x.a.LAYOUT_HEADER_COLOR,y.a.small),E=(i.a.Sider,Object(m.memo)((function(e){var t=e.className,a=e.categories,i=e.collapse,b=(Object(p.b)().t,Object(m.useRef)(null),Object(g.c)(),Object(n.a)(),Object(m.useState)(i)),x=Object(r.a)(b,2),y=x[0],E=x[1],w=Object(m.useCallback)((function(e){var t=e.currentTarget.dataset;Object(f.b)(d.a.productList,{catId:t.catId,subId:t.subId,catName:t.catName})}),[]);return u.a.createElement(h,{className:"MenuSider ".concat(y&&"collapsed"," ").concat(t||""),style:{overflowX:"hidden"}},u.a.createElement("ul",{className:"ulCategotry",style:{height:"100%",borderRight:0}},u.a.createElement("h3",{className:"categoryTitle",onClick:function(){return E(!y)}},"\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0647\u0627",y?u.a.createElement(l.a,{style:{marginRight:"20px"}}):u.a.createElement(s.a,{style:{marginRight:"20px"}})),a&&!y&&a.map((function(e){return u.a.createElement("li",{className:"rowCategory",key:e.category.id},u.a.createElement("div",{className:"rowCategoryItem"},u.a.createElement("span",{"data-cat-id":e.category.id,"data-cat-name":e.category.name,onClick:w},u.a.createElement("img",{src:e.category.icon,className:"iconCategory",alt:e.category.name}),u.a.createElement("span",{className:"titleCategory"},e.category.name))),u.a.createElement("div",{className:"hoverCategory"},u.a.createElement(o.a,{gutter:16},e.sub.map((function(e){return u.a.createElement(c.a,{span:8,className:"colCategoryList","data-sub-id":e.id,"data-cat-name":e.name,onClick:w},u.a.createElement(o.a,{className:"rowImgCategoryList"},u.a.createElement("img",{src:e.icon,className:"imgCategoryList",alt:e.name})),u.a.createElement(o.a,{className:"subCategoryListTitle"},e.name))})))))}))))})))},865:function(e,t,a){"use strict";a.r(t),a.d(t,"ProductListPage",(function(){return A}));var r=a(59),n=a(868),i=a(869),o=a(870),c=a(697),l=a(698),s=a(840),d=a(842),m=a(848),u=a(853),p=a(866),g=a(49),f=a(0),b=a.n(f),x=a(58),y=a(44),h=a(699),E=a(212),w=a(95),v=a(7),j=a(14),C=a.n(j),k=C.a.mark(N);function N(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),k)}var O=a(253),L=Object(O.a)({name:"productListPage",initialState:{},reducers:{someAction:function(e,t){}}}),z=(L.actions,L.reducer),P=L.name,S=a(20),I=a(168),T=Object(S.c)(I.a).withConfig({componentId:"sc-1hi49ar-0"})([".categoryList,.filter{margin-top:1em;background:#fff;border-radius:10px;box-shadow:2px 2px 15px rgba(0,0,0,0.25);padding:1em;}.titleCategoryItem{font-size:1.8em;font-weight:bold;color:#000;}.breadcrumb{font-size:0.8em;font-weight:bold;}.rowFilterAction{margin-top:0.8em;}.checkboxFilter{> label{margin-left:2em;font-size:0.8em;font-weight:bold;color:#000;}}.radioFilter{font-size:0.8em;font-weight:bold;color:#000;}.SwitchTitle{> div > label{font-size:0.8em;font-weight:bold;color:#000;}}.colOfferCard{margin-top:1em;}.rowOfferCard{margin-bottom:1em;}.offerCard{display:flex;flex-direction:column;background:#fff;padding:1em;border-radius:6px;min-width:100%;cursor:pointer;box-shadow:0px 4px 4px rgba(0,0,0,0.25);position:relative;height:275px;}.imgProductWrapper{display:flex;justify-content:center;height:130px;}.imgProduct{background-position:center;background-repeat:no-repeat;height:100%;width:100%;object-fit:cover;}.titleProduct{font-weight:bold;margin-bottom:0.7em;}.buyProduct{display:flex;flex-direction:row;justify-content:space-between !important;margin-top:0.7em;}.price{display:flex;justify-content:space-between;font-weight:bold;}.priceBtn{display:flex;flex-direction:revert;justify-content:space-between;}.iconeShop{margin-left:0.2em;}.discountBtn{border-radius:11px;background:#ff9800;}.priceStyle{display:flex;flex-direction:column;}.currency{font-size:0.6em;line-height:2.5em;}.discount{margin-left:1em;color:red;font-weight:bold;}.priceDiscount{font-size:0.8em;line-height:1.9em;}.voteLike{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#9e9e9e;z-index:9999;opacity:0.9;display:flex;justify-content:center;flex-direction:column;align-items:center;color:#ff0000;font-size:1.5em;font-weight:bold;}.voteLikeNone{display:none;}.voteStyle{display:none;flex-direction:row;justify-content:space-between !important;margin-top:1.6em;}.btnLogin{}.alertLogin{.ant-modal-close{background:red !important;}}.subTitle{color:#000;font-size:1.5em;font-weight:bold;padding:0.1em;margin-bottom:0.5em;}.subList{color:#000;font-size:1em;font-weight:bold;padding-right:0.5em;padding-bottom:0.5em;cursor:pointer;&:hover{background:rgba(249,174,59,0.5);}}"]),F=a(737),_=a(714);function A(e){var t=e.className;Object(E.a)({key:P,reducer:z}),Object(E.b)({key:P,saga:N});var a=Object(y.c)(),j=Object(y.d)(w.h),C=Object(y.d)(w.g),k=Object(y.d)(w.l),O=Object(x.b)().t,L=Object(h.h)(),S=Object(f.useState)(1),I=Object(r.a)(S,2),A=I[0],B=I[1];var R=Object(f.useCallback)((function(e){return function(){return a(v.a.browseCategories({sub_id:e}))}}),[a]);return Object(f.useEffect)((function(){"undefined"!==L.item&&a(v.a.getHomeListProducts({item:L.item})),"undefined"!==L.catId&&a(v.a.browseCategories({cat_id:L.catId})),"undefined"!==L.subId&&a(v.a.browseCategories({sub_id:L.subId}))}),[a,L.catId,L.item,L.subId]),b.a.createElement(T,{className:"ProductListPage ".concat(t||""),title:O(g.a.pages.ProductListPage.title),description:O(g.a.pages.ProductListPage.description)},b.a.createElement(c.a,{gutter:32},b.a.createElement(l.a,{xs:4,sm:4,md:6,lg:6,xl:6},j&&j.data&&b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{gutter:16},b.a.createElement(F.a,{collapse:!0,categories:j.data.categories})),b.a.createElement(c.a,{gutter:16},b.a.createElement(l.a,{span:24,className:"categoryList"},b.a.createElement("div",{className:"subTitle"},L.catName),C&&C.data&&C.data.sub.map((function(e){return b.a.createElement("div",{className:"subList"},b.a.createElement("div",{onClick:R(e.id)},e.name))})))),b.a.createElement(c.a,{gutter:16},b.a.createElement(l.a,{span:24,className:"filter"},b.a.createElement("div",{className:"filterTitle"},"\u0641\u06cc\u0644\u062a\u0631\u0647\u0627"),b.a.createElement("div",{className:"filterList"}))))),b.a.createElement(l.a,{xs:20,sm:20,md:6,lg:18,xl:18},b.a.createElement("div",{className:"titleCategoryItem"},L.catName),b.a.createElement(s.a,{className:"breadcrumb"},b.a.createElement(s.a.Item,null,b.a.createElement("a",{href:"/"},"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc")),b.a.createElement(s.a.Item,null,b.a.createElement("a",null,L.catName))),b.a.createElement(c.a,{gutter:16,className:"rowFilterAction"},b.a.createElement(l.a,{xs:20,sm:20,md:6,lg:14,xl:14},b.a.createElement(d.a.Group,{className:"checkboxFilter",options:["\u062c\u062f\u06cc\u062f\u062a\u0631\u06cc\u0646","\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0648\u06cc\u0698\u0647"],defaultValue:["Apple"],onChange:function(e){console.log("checked = ",e)}}),b.a.createElement(m.default.Group,{onChange:function(e){console.log("radio checked",e.target.value),B(e.target.value)},value:A},b.a.createElement(m.default,{value:1},b.a.createElement("span",{className:"radioFilter"},"\u0627\u0631\u0632\u0627\u0646\u062a\u0631\u06cc\u0646")),b.a.createElement(m.default,{value:2}," ",b.a.createElement("span",{className:"radioFilter"},"\u06af\u0631\u0627\u0646\u062a\u0631\u06cc\u0646")))),b.a.createElement(l.a,{xs:20,sm:20,md:6,lg:8,xl:8},b.a.createElement(l.a,{xs:12,sm:12,md:12,lg:12,xl:12},b.a.createElement(u.a.Item,{label:"\u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f",className:"SwitchTitle"},b.a.createElement(p.a,null))),b.a.createElement(l.a,{xs:4,sm:4,md:6,lg:4,xl:4},b.a.createElement(n.a,null)),b.a.createElement(l.a,{xs:4,sm:4,md:6,lg:4,xl:4},b.a.createElement(i.a,null)),b.a.createElement(l.a,{xs:4,sm:4,md:6,lg:4,xl:4},b.a.createElement(o.a,null)))),b.a.createElement(c.a,{gutter:32,className:"rowOfferCard"},k.data?k&&k.data&&k.data.data.map((function(e){return b.a.createElement(l.a,{xs:24,sm:24,md:12,lg:6,xl:6,className:"colOfferCard"},b.a.createElement(_.a,{data:e}))})):C&&C.data&&C.data.data.map((function(e){return b.a.createElement(l.a,{xs:24,sm:24,md:12,lg:6,xl:6,className:"colOfferCard"},b.a.createElement(_.a,{data:e}))}))))))}}}]);