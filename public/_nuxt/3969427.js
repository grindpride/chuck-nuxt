(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{212:function(t,e,r){var content=r(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(119).default)("00815680",content,!0,{sourceMap:!1})},213:function(t,e,r){"use strict";r(212)},214:function(t,e,r){var n=r(118)(!1);n.push([t.i,".card{padding:16px;border:1px solid;border-radius:4px;font-size:24px}",""]),t.exports=n},215:function(t,e,r){"use strict";r.r(e);var n={name:"Card",props:{joke:String}},o=(r(213),r(36)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"card"},[t._v(t._s(t.joke))])}),[],!1,null,null,null);e.default=component.exports},217:function(t,e,r){var content=r(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(119).default)("fc09b4b6",content,!0,{sourceMap:!1})},220:function(t,e,r){"use strict";r(217)},221:function(t,e,r){var n=r(118)(!1);n.push([t.i,".cards[data-v-eba882ac]{display:grid;grid-gap:16px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}.back[data-v-eba882ac],.cards[data-v-eba882ac]{margin-bottom:16px}.back[data-v-eba882ac]{display:block;font-size:24px}",""]),t.exports=n},223:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(47),r(16),r(90),r(48),r(120),{components:{Card:r(215).default},data:function(){return{jokes:[],search:""}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.search=t.$route.params.query,e.next=3,fetch("https://api.chucknorris.io/jokes/search?query=".concat(t.search));case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,t.jokes=n.result.length?n.result:[{value:"Only Chuck Norris knows joke about ".concat(t.search),id:"No joke"}];case 8:case"end":return e.stop()}}),e)})))()}))}),c=o,l=(r(220),r(36)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Search for "+t._s(t.$route.params.query))]),t._v(" "),r("nuxt-link",{staticClass:"back",attrs:{to:"/"}},[t._v("Назад")]),t._v(" "),r("div",{staticClass:"cards"},t._l(t.jokes,(function(t){return r("Card",{key:t.id,attrs:{joke:t.value}})})),1)],1)}),[],!1,null,"eba882ac",null);e.default=component.exports;installComponents(component,{Card:r(215).default})}}]);