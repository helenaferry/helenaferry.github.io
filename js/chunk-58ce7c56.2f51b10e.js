(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58ce7c56"],{1276:function(t,e,n){"use strict";var a=n("d784"),r=n("44e7"),i=n("825a"),l=n("1d80"),o=n("4840"),s=n("8aa5"),c=n("50c4"),u=n("14c3"),d=n("9263"),p=n("d039"),f=[].push,h=Math.min,g=4294967295,v=!p((function(){return!RegExp(g,"y")}));a("split",2,(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(l(this)),i=void 0===n?g:n>>>0;if(0===i)return[];if(void 0===t)return[a];if(!r(t))return e.call(a,t,i);var o,s,c,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,p+"g");while(o=d.call(v,a)){if(s=v.lastIndex,s>h&&(u.push(a.slice(h,o.index)),o.length>1&&o.index<a.length&&f.apply(u,o.slice(1)),c=o[0].length,h=s,u.length>=i))break;v.lastIndex===o.index&&v.lastIndex++}return h===a.length?!c&&v.test("")||u.push(""):u.push(a.slice(h)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=l(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,n):a.call(String(r),e,n)},function(t,r){var l=n(a,t,this,r,a!==e);if(l.done)return l.value;var d=i(t),p=String(this),f=o(d,RegExp),m=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),x=new f(v?d:"^(?:"+d.source+")",b),y=void 0===r?g:r>>>0;if(0===y)return[];if(0===p.length)return null===u(x,p)?[p]:[];var E=0,L=0,_=[];while(L<p.length){x.lastIndex=v?L:0;var S,k=u(x,v?p:p.slice(L));if(null===k||(S=h(c(x.lastIndex+(v?0:L)),p.length))===E)L=s(p,L,m);else{if(_.push(p.slice(E,L)),_.length===y)return _;for(var R=1;R<=k.length-1;R++)if(_.push(k[R]),_.length===y)return _;L=E=S}}return _.push(p.slice(E)),_}]}),!v)},"14c3":function(t,e,n){var a=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"3f23":function(t,e,n){"use strict";var a=n("6f10"),r=n.n(a);r.a},"44e7":function(t,e,n){var a=n("861d"),r=n("c6b6"),i=n("b622"),l=i("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[l])?!!e:"RegExp"==r(t))}},"6f10":function(t,e,n){},"765c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("PageLayout",[n("div",{attrs:{slot:"main"},slot:"main"},[n("plate-spottings-data-provider",{scopedSlots:t._u([{key:"default",fn:function(t){return n("div",{},[n("add-form",{attrs:{plate:t.nextPlate},on:{create:t.addPlateSpotting}})],1)}}])})],1)])],1)},r=[],i=n("2b0e"),l=n("08c8"),o=n("e157"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-form has-text-centered"},[t.submitted?n("p",{staticClass:"mt-6"},[t._v("Yay!"),n("br"),n("br"),t._v(" "),n("a",{on:{click:t.resetSubmitted}},[t._v("Jag har hittat en till!")])]):n("div",[n("p",[t._v("Jag har hittat")]),n("number-plate",{attrs:{plate:t.plate}}),n("div",{staticClass:"columns is-centered mx-4"},[n("div",{staticClass:"column is-6"},[n("form",{staticClass:"has-text-left",on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[n("b-field",{attrs:{label:"Datum"}},[n("b-datepicker",{attrs:{placeholder:"Skriv eller välj ett datum...",icon:"calendar-today",locale:"sv-SE",editable:"",required:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),n("map-current-location",{on:{updateLocation:t.updateLocation}}),t.location?n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b-field",{attrs:{label:"Latitud"}},[n("b-input",{attrs:{type:"text"},model:{value:t.location.Lat,callback:function(e){t.$set(t.location,"Lat",e)},expression:"location.Lat"}})],1)],1),n("div",{staticClass:"column"},[n("b-field",{attrs:{label:"Longitud"}},[n("b-input",{attrs:{type:"text"},model:{value:t.location.Lng,callback:function(e){t.$set(t.location,"Lng",e)},expression:"location.Lng"}})],1)],1)]):t._e(),t.teamEffort?n("b-field",{attrs:{label:"Vilka teammedlemmar såg?"}},[n("b-checkbox",{attrs:{"native-value":"Jonas"},model:{value:t.seenBy,callback:function(e){t.seenBy=e},expression:"seenBy"}},[t._v(" Jonas ")]),n("b-checkbox",{attrs:{"native-value":"Helena"},model:{value:t.seenBy,callback:function(e){t.seenBy=e},expression:"seenBy"}},[t._v(" Helena ")]),n("b-checkbox",{attrs:{"native-value":"Sander"},model:{value:t.seenBy,callback:function(e){t.seenBy=e},expression:"seenBy"}},[t._v(" Sander ")]),n("b-checkbox",{attrs:{"native-value":"Ava"},model:{value:t.seenBy,callback:function(e){t.seenBy=e},expression:"seenBy"}},[t._v(" Ava ")])],1):t._e(),n("b-field",{attrs:{label:"Anteckning"}},[n("b-input",{attrs:{maxlength:"200",type:"textarea"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1),t.errorMsg?n("p",{staticClass:"has-text-danger mb-5"},[t._v(t._s(t.errorMsg))]):t._e(),n("b-button",{attrs:{type:"is-primary","native-type":"submit",disabled:!t.submittable,rounded:"",expanded:""}},[t._v("Spara")])],1)])])],1)])},c=[],u=(n("a9e3"),n("ac1f"),n("1276"),n("fa65")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-with-markers"},[n("l-map",{style:"height:"+t.height+";",attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),n("l-marker",{attrs:{"lat-lng":t.center,draggable:!0},on:{"update:latLng":t.updateLocation}})],1)],1)},p=[],f=n("e11e"),h=n("2699"),g=n("a40a"),v=n("4e2b");function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var b=function t(){m(this,t),this.Lat=0,this.Lng=0,this.Text=""};delete f["Icon"].Default.prototype._getIconUrl,f["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")});var x=i["a"].extend({name:"MapCurrentLocation",props:{locations:{type:Array,default:function(){return[]}},height:{type:String,default:"250px"},zoom:{type:Number,default:15}},components:{LMap:h["a"],LTileLayer:g["a"],LMarker:v["a"]},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',currentZoom:11.5,mapOptions:{zoomSnap:.5},lat:0,lng:0}},computed:{center:function(){return Object(f["latLng"])(this.$data.lat,this.$data.lng)}},methods:{updateLocation:function(t){if(t&&t.lat&&t.lng){var e=new b;e.Lat=t.lat,e.Lng=t.lng,this.$emit("updateLocation",e)}}},mounted:function(){var t=this;"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){t.$data.lat=e.coords.latitude,t.$data.lng=e.coords.longitude}))}}),y=x,E=n("2877"),L=Object(E["a"])(y,d,p,!1,null,null,null),_=L.exports,S=n("289d");i["a"].use(S["a"]);var k=i["a"].extend({name:"AddForm",props:{plate:{type:Number,default:0},teamEffort:{type:Boolean,default:!0}},data:function(){return{date:new Date,location:new b,seenBy:[],note:"",submitted:!1,errorMsg:null}},components:{NumberPlate:u["a"],MapCurrentLocation:_},computed:{submittable:function(){return!!this.date&&(!(!this.location||0==this.location.Lat||0==this.location.Lng)&&(!this.teamEffort||0!=this.seenBy.length))}},methods:{save:function(){this.teamEffort&&0===this.seenBy.length?this.$data.errorMsg="Du måste ange vilka som såg den!":(this.$data.errorMsg=null,this.$emit("create",{plate:this.plate,date:this.date.toISOString().split("T")[0],location:this.location,seenBy:this.seenBy,note:this.note}),this.submitted=!0)},resetSubmitted:function(){this.submitted=!1},updateLocation:function(t){this.location=t}},mounted:function(){this.resetSubmitted()}}),R=k,I=(n("3f23"),Object(E["a"])(R,s,c,!1,null,"1e2548c9",null)),C=I.exports;i["a"].use(S["a"]);var w=i["a"].extend({name:"AddSpotting",components:{PageLayout:l["a"],PlateSpottingsDataProvider:o["a"],AddForm:C}}),B=w,$=Object(E["a"])(B,a,r,!1,null,null,null);e["default"]=$.exports},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),r=n("9f7f"),i=RegExp.prototype.exec,l=String.prototype.replace,o=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=s||u||c;d&&(o=function(t){var e,n,r,o,d=this,p=c&&d.sticky,f=a.call(d),h=d.source,g=0,v=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),n=new RegExp("^(?:"+h+")",f)),u&&(n=new RegExp("^"+h+"$(?!\\s)",f)),s&&(e=d.lastIndex),r=i.call(p?n:d,v),p?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:s&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&l.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=o},"9f7f":function(t,e,n){"use strict";var a=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),i=n("b622"),l=n("9263"),o=n("9112"),s=i("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=i(t),g=!r((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),v=g&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!g||!v||"replace"===t&&(!c||!u||p)||"split"===t&&!f){var m=/./[h],b=n(h,""[t],(function(t,e,n,a,r){return e.exec===l?g&&!r?{done:!0,value:m.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=b[0],y=b[1];a(String.prototype,t,x),a(RegExp.prototype,h,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}d&&o(RegExp.prototype[h],"sham",!0)}}}]);
//# sourceMappingURL=chunk-58ce7c56.2f51b10e.js.map