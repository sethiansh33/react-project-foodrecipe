(this["webpackJsonpreact-food-recipe"]=this["webpackJsonpreact-food-recipe"]||[]).push([[0],{16:function(e,a,t){e.exports=t(41)},21:function(e,a,t){},23:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),i=t.n(r),s=(t(21),t(2)),o=t.n(s),l=t(14),m=t(3),u=(t(23),function(e){var a=e.search,t=e.onInputChange,n=e.onSearchClick;return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"display-1"},c.a.createElement("i",{className:"material-icons brand-icon"},"fastfood")," Food Recipe"),c.a.createElement("div",{className:"input-group w-50 mx-auto"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Your Recipe...",value:a,onChange:t}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-dark",onClick:n},"Search Recipe"))))}),p=function(e){var a=e.name,t=e.image,n=e.ingredientLines;return c.a.createElement("div",{className:"card py-2 text-center"},c.a.createElement("img",{src:t,alt:"",className:"img-fluid w-50 mx-auto rounded-circle"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},a)),c.a.createElement("ul",{className:"list-group list-group-flush"},n.map((function(e,a){return c.a.createElement("li",{className:"list-group-item",key:a},e)}))))},d=function(e){var a=e.recipes;return c.a.createElement("div",{className:"card-columns"},a.map((function(e){return c.a.createElement(p,{key:100*Math.random(),name:e.recipe.label,image:e.recipe.image,ingredientLines:e.recipe.ingredientLines})})))},f=t(15),h=t.n(f);var E=function(){var e=Object(n.useState)("mango"),a=Object(m.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)([]),s=Object(m.a)(i,2),p=s[0],f=s[1],E=function(){var e=Object(l.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("547fce8c","&app_key=").concat("686012e9db3b065fc08ae36bdd8cc088"));case 2:a=e.sent,f(a.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(u,{search:t,onInputChange:function(e){r(e.target.value)},onSearchClick:function(){E()}}),c.a.createElement("div",{className:"container"},c.a.createElement(d,{recipes:p})))};i.a.render(c.a.createElement(E,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9621e3f7.chunk.js.map