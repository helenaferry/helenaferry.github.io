(function(t){function e(e){for(var r,a,u=e[0],l=e[1],s=e[2],c=0,p=[];c<u.length;c++)a=u[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function u(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9abee129","chunk-c0dc9f04":"6fd79d54"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-c0dc9f04":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-c0dc9f04":"271b8bc6"}[t]+".css",o=l.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===r||c===o))return e()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],c=s.getAttribute("data-href");if(c===r||c===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(t);var p=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"1cc0":function(t,e,n){"use strict";var r=n("76b7"),a=n.n(r);a.a},"74b8":function(t,e,n){"use strict";var r=n("be46"),a=n.n(r);a.a},"76b7":function(t,e,n){},"85ec":function(t,e,n){},be46:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=r["a"].extend({name:"App"}),u=i,l=(n("034f"),n("2877")),s=Object(l["a"])(u,a,o,!1,null,null,null),c=s.exports,p=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("PageLayout",[n("div",{attrs:{slot:"main"},slot:"main"},[n("plate-spottings-data-provider",{scopedSlots:t._u([{key:"default",fn:function(e){return n("div",{},[t._l(e.plateSpottings,(function(e){return n("plate-spotting",t._b({},"plate-spotting",e,!1))})),n("map-with-markers",{attrs:{locations:e.plateSpottings.map((function(t){return t.location})),zoom:6,height:"500px"}})],2)}}])})],1)])],1)},d=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[t._v("Platespotting Sverige")]),n("main",[t._t("main")],2)])},m=[],h=r["a"].extend({name:"PageLayout"}),b=h,v=Object(l["a"])(b,g,m,!1,null,null,null),y=v.exports,S={name:"PlateSpottingsDataProvider",computed:{plateSpottings:function(){return this.$store.getters["plateSpottings/plateSpottings"]}},render:function(){if(this.$scopedSlots.default){var t={plateSpottings:this.plateSpottings};return this.$scopedSlots.default(t)}},created:function(){this.$store.dispatch("plateSpottings/fetchPlateSpottings")}},_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plate-spotting"},[n("p",[t._v(t._s(t.plate))]),n("p",[t._v(t._s(t.date))]),n("p",[t._v(t._s(t.note))]),n("map-with-markers",{attrs:{locations:[t.location]}})],1)},w=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-with-markers"},[n("l-map",{style:"height:"+t.height+";",attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.locations,(function(e){return n("l-marker",{attrs:{"lat-lng":t.createLatLong(e)}})}))],2)],1)},O=[],P=(n("a9e3"),n("e11e")),k=n("2699"),j=n("a40a"),x=n("4e2b");delete P["Icon"].Default.prototype._getIconUrl,P["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")});var E=r["a"].extend({name:"MapWithMarkers",props:{locations:{type:Array,default:function(){return[]}},height:{type:String,default:"200px"},zoom:{type:Number,default:15}},components:{LMap:k["a"],LTileLayer:j["a"],LMarker:x["a"]},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',currentZoom:11.5,mapOptions:{zoomSnap:.5}}},computed:{center:function(){var t=this.locations[0];if(t&&t.Lat&&t.Long)return Object(P["latLng"])(t.Lat,t.Long)}},methods:{createLatLong:function(t){return Object(P["latLng"])(t.Lat,t.Long)}},created:function(){}}),M=E,A=(n("74b8"),Object(l["a"])(M,L,O,!1,null,"3863cf5e",null)),C=A.exports,$=r["a"].extend({name:"PlateSpotting",props:{id:{type:String,default:"someId"},plate:{type:String,default:"001"},date:{type:String,default:"2020-09-18"},location:{type:Object,default:function(){}},note:{type:String,default:"Såg den från bussen"}},components:{MapWithMarkers:C}}),T=$,U=(n("1cc0"),Object(l["a"])(T,_,w,!1,null,"e9eb3b50",null)),z=U.exports,D={name:"Home",components:{PageLayout:y,PlateSpottingsDataProvider:S,PlateSpotting:z,MapWithMarkers:C}},N=D,I=Object(l["a"])(N,f,d,!1,null,null,null),H=I.exports;r["a"].use(p["a"]);var W=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/helloworld",name:"HelloWorld",component:function(){return n.e("chunk-c0dc9f04").then(n.bind(null,"587e"))}}],B=new p["a"]({routes:W}),q=B,J=n("2f62"),F=n("bc3a"),K=n.n(F);r["a"].use(J["a"]);var R=K.a.create(),Z={plateSpottingsUrl:"plateSpottings.json",plateSpottings:Array()},G={plateSpottings:function(t){return t.plateSpottings}},Q={fetchPlateSpottings:function(t){var e=t.state,n=t.commit;return new Promise((function(t){R.get(e.plateSpottingsUrl).then((function(e){e&&e.data&&(n("setplateSpottings",e.data),t())}))}))}},V={setplateSpottings:function(t,e){r["a"].set(t,"plateSpottings",e)}},X={namespaced:!0,state:Z,getters:G,actions:Q,mutations:V};r["a"].use(J["a"]);var Y=new J["a"].Store({modules:{plateSpottings:X}});n("6cc5");r["a"].config.productionTip=!1,new r["a"]({router:q,store:Y,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.54d9a119.js.map