(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),a=e(2),c=e.n(a),u=e(3),i=e(4),l=e(6),s=e(5);e(12);function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){return f().then((function(t){return t.sort((function(t,n){var e=t.name,o=n.name;return e.localeCompare(o)})).slice(0,5)}))},m=function(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},g=function(t){var n=t.goods;return r.a.createElement("ul",null,n.map((function(t){var n=t.id,e=t.color,o=t.name;return r.a.createElement("li",{key:n,style:{color:e}},o)})))},h=function(t){Object(l.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(u.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={goods:[]},t.onClickFilters=function(n){return n().then((function(n){return t.setState({goods:n})}))},t}return Object(i.a)(e,[{key:"render",value:function(){var t=this,n=this.state.goods;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.onClickFilters(f)}},"Load All goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.onClickFilters(d)}},"Load 5 first goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.onClickFilters(m)}},"Load red goods"),r.a.createElement(g,{goods:n}))}}]),e}(r.a.Component);c.a.render(r.a.createElement(h,null),document.getElementById("root"))},7:function(t,n,e){t.exports=e(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.eb8063f8.chunk.js.map