(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d0bddd5":"e308aafb","chunk-2d0c1b1d":"280591c1","chunk-2d20f382":"541bf7f3","chunk-78a203a4":"38892355"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-78a203a4":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d0bddd5":"31d6cfe0","chunk-2d0c1b1d":"31d6cfe0","chunk-2d20f382":"31d6cfe0","chunk-78a203a4":"47a035de"}[t]+".css",o=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.request=n,delete r[t],p.parentNode.removeChild(p),a(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=i);var c,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(t),c=function(e){d.onerror=d.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}o[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,u.appendChild(d)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/swishy/dist/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"1efe":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"black--text",attrs:{color:"white"}},[a("v-layout",[a("v-flex",{attrs:{xs5:""}},[a("v-img",{attrs:{src:t.cloth.image,height:"125px",contain:""}})],1),a("v-flex",{attrs:{xs7:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(t.cloth.label))]),a("div",[t._v(t._s(t.cloth.brand))]),a("div",[t._v(t._s(t.cloth.year))])]),a("div",[t._l(t.cloth.stars,function(e){return a("v-icon",{key:e},[t._v("star")])}),t._l(5-t.cloth.stars,function(e){return a("v-icon",{key:6-e},[t._v("star_border")])})],2)])],1)],1),a("v-divider",{attrs:{light:""}}),a("v-card-actions",{staticClass:"pa-3"},[a("v-layout",{attrs:{rown:"",wrap:"","justify-space-around":""}},[a("v-btn",{attrs:{color:"orange",round:"",xs4:""}},[t._v("\r\n                            Amazon\r\n                        ")]),a("v-btn",{attrs:{round:"",xs4:""}},[t._v("\r\n                            Zalando\r\n                        ")]),a("v-btn",{staticClass:"white--text",attrs:{color:"black",round:"",xs4:""}},[t._v("\r\n                            Privalia\r\n                        ")])],1)],1)],1)],1)},r=[],o=a("2b0e"),i=a("e675"),s=o["a"].extend({props:{cloth:{type:i["a"],required:!0}}}),l=s,c=a("2877"),u=a("6544"),d=a.n(u),p=a("8336"),f=a("b0af"),v=a("99d9"),h=a("12b2"),m=a("ce7e"),b=a("0e8f"),g=a("132d"),_=a("adda"),w=a("a722"),y=Object(c["a"])(l,n,r,!1,null,null,null);y.options.__file="SClothCard.vue";e["a"]=y.exports;d()(y,{VBtn:p["a"],VCard:f["a"],VCardActions:v["a"],VCardTitle:h["a"],VDivider:m["a"],VFlex:b["a"],VIcon:g["a"],VImg:_["a"],VLayout:w["a"]})},"22bd":function(t,e,a){},6470:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.clothes,function(t){return a("SClothCard",{key:t.label,attrs:{cloth:t}})}),1)],1)},r=[],o=(a("cadf"),a("551c"),a("097d"),a("1efe")),i=a("716f"),s={components:{SClothCard:o["a"]},data:function(){return{clothes:i["a"]}}},l=s,c=(a("97e8"),a("2877")),u=a("6544"),d=a.n(u),p=a("a523"),f=a("a722"),v=Object(c["a"])(l,n,r,!1,null,null,null);v.options.__file="SFeed.vue";e["default"]=v.exports;d()(v,{VContainer:p["a"],VLayout:f["a"]})},"716f":function(t,e,a){"use strict";a("cadf"),a("551c"),a("097d");var n=a("e675"),r=[new n["a"]("Disruptor","Fila",2018,5,"https://www.fila.de/out/pictures/master/product/1/fila_disruptor_low_wmn_white_1715092_1133.jpg","Shoes"),new n["a"]("Stan Smith","adidas",2012,3,"https://images-na.ssl-images-amazon.com/images/I/81uVygrp6IL._UX500_.jpg","Shoes"),new n["a"]("Crewneck Sweatshirt","Champion",2017,4,"https://images-na.ssl-images-amazon.com/images/I/A1BXEoFDNZL._UX679_.jpg","Hoodie"),new n["a"]("30T3GTVT7L","Michael Kors",2016,2,"https://images-na.ssl-images-amazon.com/images/I/91mBMPQdziL._UY625_.jpg","Bag"),new n["a"]("Cintura in pelle con fibbia Doppia G","Gucci",2019,2,"https://media.gucci.com/style/White_Center_0_0_540x540/1526328906/400593_AP00T_1000_001_100_0000_Light-Cintura-in-pelle-con-Fibbia-Doppia-G.jpg","Belt"),new n["a"]('"47 MLB Black Series',"New York Yankess",2010,3,"https://lf.lids.com/hwl?set=sku[20732156],c[2],w[1000],h[750]&call=url[file:product]","Hat"),new n["a"]("Short Sleeve Tee","Levis",2016,2,"https://images-na.ssl-images-amazon.com/images/I/61Dsv7TY7FL._UX385_.jpg","T-Shirt"),new n["a"]("Abito da Sera","Dolce e Gabbana",2016,5,"https://images.stylight.net/image/upload/t_web_product_330x440bg/q_auto:eco,f_auto/pqu1wi7oaupnl9qib3hl.jpg","Dress"),new n["a"]("Maglione 6915535C2 V0001","Stone Island",2017,4,"https://www.urbanstaroma.com/32491-large_default/stone-island-maglione-6915535c2-v0001.jpg","Jumper"),new n["a"]("Rainforest K New","Napajiri",2019,5,"https://images-na.ssl-images-amazon.com/images/I/911VMkKnY6L._UX679_.jpg","Jacket")];e["a"]=r},"97e8":function(t,e,a){"use strict";var n=a("22bd"),r=a.n(n);r.a},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("bb71");a("15f5"),a("da64");n["a"].use(r["a"],{iconfont:"fa"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("SToolbar"),a("v-content",[a("router-view")],1),a("SBottomNav")],1)},i=[],s=a("6470"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"teal lighten-3",attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline"},[a("span",{staticClass:"font-italic text-uppercase white--text text-center"},[t._v("SWISHY")])]),a("v-spacer"),a("v-toolbar-title",{staticClass:"caption"},[a("span",{staticClass:"white--text font-weight-thin"},[t._v("Your digital wardrobe")])])],1)},c=[],u=a("2877"),d=a("6544"),p=a.n(d),f=a("9910"),v=a("71d9"),h=a("2a7f"),m={},b=Object(u["a"])(m,l,c,!1,null,null,null);b.options.__file="SToolbar.vue";var g=b.exports;p()(b,{VSpacer:f["a"],VToolbar:v["a"],VToolbarTitle:h["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-nav",{attrs:{active:t.active,value:!0,app:"",fixed:"",color:"teal lighten-2"},on:{"update:active":function(e){t.active=e}}},[a("v-btn",{attrs:{color:"white",flat:"",value:"feed"}},[a("span",[t._v("Feed")]),a("v-icon",[t._v("history")])],1),a("v-btn",{attrs:{color:"white",flat:"",value:"favorites"}},[a("span",[t._v("Favorites")]),a("v-icon",[t._v("favorite")])],1),a("v-btn",{attrs:{color:"white",flat:"",value:"explore"}},[a("span",[t._v("Explore")]),a("v-icon",[t._v("search")])],1),a("v-btn",{attrs:{color:"white",flat:"",value:"wardrobe"}},[a("span",[t._v("Wardrobe")]),a("v-icon",[t._v("inventory")])],1)],1)},w=[],y=n["a"].extend({data:function(){return{active:"feed"}},watch:{active:function(t){this.$router.push("/".concat(t))}}}),x=y,S=a("887a"),k=a("8336"),C=a("132d"),j=Object(u["a"])(x,_,w,!1,null,null,null);j.options.__file="SBottomNav.vue";var T=j.exports;p()(j,{VBottomNav:S["a"],VBtn:k["a"],VIcon:C["a"]});var V={name:"App",components:{SFeed:s["default"],SToolbar:g,SBottomNav:T},data:function(){return{}},mounted:function(){this.$router.push("/feed")}},B=V,E=a("7496"),O=a("549c"),L=Object(u["a"])(B,o,i,!1,null,null,null);L.options.__file="App.vue";var N=L.exports;p()(L,{VApp:E["a"],VContent:O["a"]});var P=a("8c4f");n["a"].use(P["a"]);var A=new P["a"]({mode:"history",base:"/swishy/dist/",routes:[{path:"/feed",name:"feed",component:function(){return Promise.resolve().then(a.bind(null,"6470"))}},{path:"/wardrobe",name:"wardrobe",component:function(){return a.e("chunk-2d0c1b1d").then(a.bind(null,"46af"))}},{path:"/wardrobe/:category",name:"wardrobe-category",component:function(){return a.e("chunk-2d0bddd5").then(a.bind(null,"2e8d"))},props:!0},{path:"/explore",name:"explore",component:function(){return a.e("chunk-78a203a4").then(a.bind(null,"6924"))}},{path:"/favorites",name:"favorites",component:function(){return a.e("chunk-2d20f382").then(a.bind(null,"b361"))}}]}),I=a("2f62");n["a"].use(I["a"]);var F=new I["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:A,store:F,render:function(t){return t(N)}}).$mount("#app")},e675:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var n=a("d4ec"),r=(a("cadf"),a("551c"),a("097d"),function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2018,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5?arguments[5]:void 0;Object(n["a"])(this,t),this.label=e,this.brand=a,this.year=r,this.stars=o,this.image=i,this.category=s})}});
//# sourceMappingURL=app.211fb2f9.js.map