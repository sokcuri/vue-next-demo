(function(t){function e(e){for(var c,r,l=e[0],i=e[1],u=e[2],b=0,j=[];b<l.length;b++)r=l[b],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&j.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);s&&s(e);while(j.length)j.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(c=!1)}c&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var c={},o={app:0},a=[];function r(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=c,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)r.d(n,c,function(e){return t[e]}.bind(null,c));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-next-demo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1afb":function(t,e,n){"use strict";n("d321")},2721:function(t,e,n){},"27f7":function(t,e,n){"use strict";n("7559")},"2b76":function(t,e,n){"use strict";n("8c5b")},"2ee9":function(t,e,n){},"341f":function(t,e,n){"use strict";n("2721")},"362f":function(t,e,n){},4363:function(t,e,n){"use strict";n("2ee9")},"470f":function(t,e,n){"use strict";n("8e6a")},"4fa3":function(t,e,n){"use strict";n("7c37")},6425:function(t,e,n){"use strict";n("362f")},7559:function(t,e,n){},"7b2b":function(t,e,n){},"7c37":function(t,e,n){},"8c5b":function(t,e,n){},"8d11":function(t,e,n){"use strict";n("cdea")},"8e6a":function(t,e,n){},a5f0:function(t,e,n){"use strict";n("bf0e")},b47c:function(t,e,n){},bf0e:function(t,e,n){},c0ae:function(t,e,n){},c544:function(t,e,n){"use strict";n("b47c")},c5bf:function(t,e,n){"use strict";n("d2de")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("6d93"),n("bb7e");var c=n("7a23"),o=n("8d09"),a={id:"nav"},r=Object(c["j"])("div",{id:"modal-container"},null,-1);function l(t,e,n,o,l,i){return Object(c["n"])(),Object(c["g"])("div",null,[Object(c["j"])("div",a,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.routes,(function(e){return Object(c["n"])(),Object(c["g"])("a",{href:"javascript:;",key:e.path,onClick:function(n){return t.goto(e.path)}},Object(c["x"])(e.path),9,["onClick"])})),128))]),(Object(c["n"])(),Object(c["g"])(Object(c["w"])(t.view))),r])}n("99af"),n("4160"),n("159b"),n("fb6a"),n("b0c0");var i=Object(c["H"])("data-v-23069bd8");Object(c["p"])("data-v-23069bd8");var u={class:"commitsapp"},s=Object(c["j"])("h1",null,"Latest Vue.js Commits",-1),b=Object(c["i"])(" - "),j={class:"message"},d=Object(c["j"])("br",null,null,-1),O=Object(c["i"])(" by "),f={class:"author"},p=Object(c["i"])(" at "),m={class:"date"};Object(c["o"])();var h=i((function(t,e,n,o,a,r){return Object(c["n"])(),Object(c["g"])("div",u,[s,(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.branches,(function(n){return Object(c["n"])(),Object(c["g"])("div",{key:n},[Object(c["F"])(Object(c["j"])("input",{type:"radio",id:n,value:n,name:"branch","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.currentBranch=e})},null,8,["id","value"]),[[c["A"],t.currentBranch]]),Object(c["j"])("label",{for:n},Object(c["x"])(n),9,["for"])])})),128)),Object(c["j"])("p",null,"vuejs/vue@"+Object(c["x"])(t.currentBranch),1),Object(c["j"])("ul",null,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.commits,(function(e){var n=e.html_url,o=e.sha,a=e.author,r=e.commit;return Object(c["n"])(),Object(c["g"])("li",{key:o},[Object(c["j"])("a",{href:n,target:"_blank",class:"commit"},Object(c["x"])(o.slice(0,7)),9,["href"]),b,Object(c["j"])("span",j,Object(c["x"])(t.truncate(r.message)),1),d,O,Object(c["j"])("span",f,[Object(c["j"])("a",{href:a.html_url,target:"_blank"},Object(c["x"])(r.author.name),9,["href"])]),p,Object(c["j"])("span",m,Object(c["x"])(t.formatDate(r.author.date)),1)])})),128))])])})),v=(n("c975"),n("d3b7"),n("ac1f"),n("5319"),"https://api.github.com/repos/vuejs/vue-next/commits?per_page=3&sha="),g=function(t){var e=t.indexOf("\n");return e>0?t.slice(0,e):t},y=function(t){return t.replace(/T|Z/g," ")},k=Object(c["k"])({setup:function(){var t=Object(c["r"])("master"),e=Object(c["r"])(null);return Object(c["D"])((function(){fetch("".concat(v).concat(t.value)).then((function(t){return t.json()})).then((function(t){Array.isArray(t)?e.value=t:e.value=[]}))})),{branches:["master","sync"],currentBranch:t,commits:e,truncate:g,formatDate:y}}});n("1afb");k.render=h,k.__scopeId="data-v-23069bd8";var x=k,w=Object(c["H"])("data-v-71e93230");Object(c["p"])("data-v-71e93230");var C={id:"search"},T=Object(c["i"])(" Search "),_={key:0},F={key:1};Object(c["o"])();var D=w((function(t,e,n,o,a,r){return Object(c["n"])(),Object(c["g"])("div",null,[Object(c["j"])("form",C,[T,Object(c["F"])(Object(c["j"])("input",{name:"query","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.filterKey=e})},null,512),[[c["B"],t.filterKey]])]),t.filteredData.length?(Object(c["n"])(),Object(c["g"])("table",_,[Object(c["j"])("thead",null,[Object(c["j"])("tr",null,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.columns,(function(e){return Object(c["n"])(),Object(c["g"])("th",{key:e,onClick:function(n){return t.sortBy(e)},class:{active:t.state.sortKey==e}},[Object(c["i"])(Object(c["x"])(t.capitalize(e))+" ",1),Object(c["j"])("span",{class:["arrow",t.state.sortOrders[e]>0?"asc":"dsc"]},null,2)],10,["onClick"])})),128))])]),Object(c["j"])("tbody",null,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.filteredData,(function(e,n){return Object(c["n"])(),Object(c["g"])("tr",{key:n},[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.columns,(function(t){return Object(c["n"])(),Object(c["g"])("td",{key:n+t},Object(c["x"])(e[t]),1)})),128))])})),128))])])):(Object(c["n"])(),Object(c["g"])("p",F,"No matches found."))])})),B=(n("4de4"),n("13d5"),n("45fc"),n("4e82"),n("b64b"),function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),E=Object(c["k"])({setup:function(){var t=Object(c["r"])(""),e=Object(c["q"])(["name","power"]),n=Object(c["q"])([{name:"Chuck Norris",power:1/0},{name:"Bruce Lee",power:9e3},{name:"Jackie Chan",power:7e3},{name:"Jet Li",power:8e3}]),o=Object(c["q"])({sortKey:"",sortOrders:e.reduce((function(t,e){return t[e]=1,t}),{})}),a=Object(c["e"])((function(){var e=n;if(t.value){var c=t.value.toLowerCase();e=e.filter((function(t){return Object.keys(t).some((function(e){return String(t[e]).toLowerCase().indexOf(c)>-1}))}))}var a=o.sortKey;if(a){var r=o.sortOrders[a];e=e.slice().sort((function(t,e){return t=t[a],e=e[a],(t===e?0:t>e?1:-1)*r}))}return e}));function r(t){o.sortKey=t,o.sortOrders[t]*=-1}return{filterKey:t,columns:e,data:n,state:o,filteredData:a,sortBy:r,capitalize:B}}});n("470f");E.render=D,E.__scopeId="data-v-71e93230";var M=E,L=Object(c["H"])("data-v-363e4682");Object(c["p"])("data-v-363e4682");var U={id:"editor"};Object(c["o"])();var V=L((function(t,e,n,o,a,r){return Object(c["n"])(),Object(c["g"])("div",U,[Object(c["j"])("textarea",{value:t.input,onInput:e[1]||(e[1]=function(){return t.update.apply(t,arguments)})},null,40,["value"]),Object(c["j"])("div",{innerHTML:t.output},null,8,["innerHTML"])])})),I=n("2ef0"),K=n.n(I),S=n("0e54"),A=n.n(S),H="#test"===window.location.hash?16:300,N=Object(c["k"])({setup:function(){var t=Object(c["r"])("# hello"),e=Object(c["e"])((function(){return A()(t.value,{sanitize:!0})})),n=K.a.debounce((function(e){t.value=e.target.value}),H);return{input:t,output:e,update:n}}});n("a5f0");N.render=V,N.__scopeId="data-v-363e4682";var P=N,q={class:"svgapp"},z={width:"200",height:"200"},J={id:"add"},G={id:"raw"};function $(t,e,n,o,a,r){var l=Object(c["u"])("polygraph");return Object(c["n"])(),Object(c["g"])("div",q,[(Object(c["n"])(),Object(c["g"])("svg",z,[Object(c["j"])(l,{stats:t.stats},null,8,["stats"])])),(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.stats,(function(e){return Object(c["n"])(),Object(c["g"])("div",{key:e.label},[Object(c["j"])("label",null,Object(c["x"])(e.label),1),Object(c["F"])(Object(c["j"])("input",{type:"range","onUpdate:modelValue":function(t){return e.value=t},min:"0",max:"100"},null,8,["onUpdate:modelValue"]),[[c["B"],e.value]]),Object(c["j"])("span",null,Object(c["x"])(e.value),1),Object(c["j"])("button",{onClick:function(n){return t.remove(e)},class:"remove"},"X",8,["onClick"])])})),128)),Object(c["j"])("form",J,[Object(c["F"])(Object(c["j"])("input",{name:"newlabel","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.newLabel=e})},null,512),[[c["B"],t.newLabel]]),Object(c["j"])("button",{onClick:e[2]||(e[2]=function(){return t.add.apply(t,arguments)})},"Add a Stat")]),Object(c["j"])("pre",G,Object(c["x"])(t.stats),1)])}n("a434");var R=Object(c["j"])("circle",{cx:"100",cy:"100",r:"80"},null,-1);function W(t,e,n,o,a,r){var l=Object(c["u"])("axis-label");return Object(c["n"])(),Object(c["g"])("g",null,[Object(c["j"])("polygon",{points:t.points},null,8,["points"]),R,(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.stats,(function(e,n){return Object(c["n"])(),Object(c["g"])(l,{key:n,stat:e,index:n,total:t.stats.length},null,8,["stat","index","total"])})),128))])}n("a15b"),n("d81d");function X(t,e,n,o,a,r){return Object(c["n"])(),Object(c["g"])("text",{x:t.point.x,y:t.point.y},Object(c["x"])(t.stat.label),9,["x","y"])}n("a9e3");function Y(t,e,n){var c=0,o=.8*-t,a=2*Math.PI/n*e,r=Math.cos(a),l=Math.sin(a),i=c*r-o*l+100,u=c*l+o*r+100;return{x:i,y:u}}var Z=Object(c["k"])({props:{stat:Object,index:Number,total:Number},setup:function(t){return{point:Object(c["e"])((function(){return Y(+t.stat.value+10,t.index,t.total)}))}}});Z.render=X;var Q=Z,tt=Object(c["k"])({props:["stats"],setup:function(t){return{points:Object(c["e"])((function(){var e=t.stats.length;return t.stats.map((function(t,n){var c=Y(t.value,n,e);return c.x+","+c.y})).join(" ")}))}},components:{AxisLabel:Q}});tt.render=W;var et=tt,nt=[{label:"A",value:100},{label:"B",value:100},{label:"C",value:100},{label:"D",value:100},{label:"E",value:100},{label:"F",value:100}],ct=Object(c["k"])({components:{Polygraph:et},setup:function(){var t=Object(c["r"])(""),e=Object(c["q"])(nt);function n(n){n.preventDefault(),t.value&&(e.push({label:t.value,value:100}),t.value="")}function o(t){e.length>3?e.splice(e.indexOf(t),1):alert("Can't delete more!")}return{newLabel:t,stats:e,add:n,remove:o}}});n("f11e");ct.render=$;var ot=ct,at=Object(c["H"])("data-v-5efb4f00");Object(c["p"])("data-v-5efb4f00");var rt={class:"todoapp"},lt={class:"header"},it=Object(c["j"])("h1",null,"todos",-1),ut={class:"main"},st=Object(c["j"])("label",{for:"toggle-all"},"Mark all as complete",-1),bt={class:"todo-list"},jt={class:"view"},dt={class:"footer"},Ot={class:"todo-count"},ft={class:"filters"};Object(c["o"])();var pt=at((function(t,e,n,o,a,r){var l=Object(c["v"])("todo-focus");return Object(c["n"])(),Object(c["g"])("div",null,[Object(c["j"])("section",rt,[Object(c["j"])("header",lt,[it,Object(c["F"])(Object(c["j"])("input",{class:"new-todo",autofocus:"",autocomplete:"off",placeholder:"What needs to be done?","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.state.newTodo=e}),onKeyup:e[2]||(e[2]=Object(c["G"])((function(){return t.addTodo.apply(t,arguments)}),["enter"]))},null,544),[[c["B"],t.state.newTodo]])]),Object(c["F"])(Object(c["j"])("section",ut,[Object(c["F"])(Object(c["j"])("input",{id:"toggle-all",class:"toggle-all",type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.state.allDone=e})},null,512),[[c["z"],t.state.allDone]]),st,Object(c["j"])("ul",bt,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.state.filteredTodos,(function(e){return Object(c["n"])(),Object(c["g"])("li",{class:["todo",{completed:e.completed,editing:e===t.state.editedTodo}],key:e.id},[Object(c["j"])("div",jt,[Object(c["F"])(Object(c["j"])("input",{class:"toggle",type:"checkbox","onUpdate:modelValue":function(t){return e.completed=t}},null,8,["onUpdate:modelValue"]),[[c["z"],e.completed]]),Object(c["j"])("label",{onDblclick:function(n){return t.editTodo(e)}},Object(c["x"])(e.title),41,["onDblclick"]),Object(c["j"])("button",{class:"destroy",onClick:function(n){return t.removeTodo(e)}},null,8,["onClick"])]),Object(c["F"])(Object(c["j"])("input",{class:"edit",type:"text","onUpdate:modelValue":function(t){return e.title=t},onBlur:function(n){return t.doneEdit(e)},onKeyup:[Object(c["G"])((function(n){return t.doneEdit(e)}),["enter"]),Object(c["G"])((function(n){return t.cancelEdit(e)}),["escape"])]},null,40,["onUpdate:modelValue","onBlur","onKeyup"]),[[c["B"],e.title],[l,e===t.state.editedTodo]])],2)})),128))])],512),[[c["C"],t.state.todos.length]]),Object(c["F"])(Object(c["j"])("footer",dt,[Object(c["j"])("span",Ot,[Object(c["j"])("strong",null,Object(c["x"])(t.state.remaining),1),Object(c["j"])("span",null,Object(c["x"])(t.state.remainingText),1)]),Object(c["j"])("ul",ft,[Object(c["j"])("li",null,[Object(c["j"])("a",{href:"javascript:;",onClick:e[4]||(e[4]=function(e){return t.state.visibility="all"}),class:{selected:"all"===t.state.visibility}},"All",2)]),Object(c["j"])("li",null,[Object(c["j"])("a",{href:"javascript:;",onClick:e[5]||(e[5]=function(e){return t.state.visibility="active"}),class:{selected:"active"===t.state.visibility}},"Active",2)]),Object(c["j"])("li",null,[Object(c["j"])("a",{href:"javascript:;",onClick:e[6]||(e[6]=function(e){return t.state.visibility="completed"}),class:{selected:"completed"===t.state.visibility}},"Completed",2)])]),Object(c["F"])(Object(c["j"])("button",{class:"clear-completed",onClick:e[7]||(e[7]=function(){return t.removeCompleted.apply(t,arguments)})}," Clear completed ",512),[[c["C"],t.state.todos.length>t.state.remaining]])],512),[[c["C"],t.state.todos.length]])])])})),mt=(n("498a"),"todos-vuejs-3.x"),ht={fetch:function(){var t=JSON.parse(localStorage.getItem(mt)||"[]");return t.forEach((function(t,e){t.id=e})),ht.uid=t.length,t},save:function(t){localStorage.setItem(mt,JSON.stringify(t))}},vt={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.completed}))},completed:function(t){return t.filter((function(t){return t.completed}))}};function gt(t){return 1===t?"item":"items"}var yt=Object(c["k"])({setup:function(){var t=Object(c["q"])({todos:ht.fetch(),editedTodo:null,newTodo:"",beforeEditCache:"",visibility:"all",remaining:Object(c["e"])((function(){return vt.active(t.todos).length})),remainingText:Object(c["e"])((function(){return" ".concat(gt(t.remaining)," left")})),filteredTodos:Object(c["e"])((function(){return vt[t.visibility](t.todos)})),allDone:Object(c["e"])({get:function(){return 0===t.remaining},set:function(e){t.todos.forEach((function(t){t.completed=e}))}})});function e(){var e=t.newTodo&&t.newTodo.trim();e&&(t.todos.push({id:ht.uid++,title:e,completed:!1}),t.newTodo="")}function n(e){t.todos.splice(t.todos.indexOf(e),1)}function o(e){t.beforeEditCache=e.title,t.editedTodo=e}function a(e){t.editedTodo&&(t.editedTodo=null,e.title=e.title.trim(),e.title||n(e))}function r(e){t.editedTodo=null,e.title=t.beforeEditCache}function l(){t.todos=vt.active(t.todos)}return Object(c["D"])((function(){ht.save(t.todos)})),{state:t,addTodo:e,removeTodo:n,editTodo:o,doneEdit:a,cancelEdit:r,removeCompleted:l}},directives:{"todo-focus":function(t,e){var n=e.value;n&&t.focus()}}});n("e7b1");yt.render=pt,yt.__scopeId="data-v-5efb4f00";var kt=yt,xt=Object(c["H"])("data-v-a3f9f1ea");Object(c["p"])("data-v-a3f9f1ea");var wt=Object(c["j"])("p",null,"(You can double click on an item to turn it into a folder.)",-1),Ct={id:"demo"};Object(c["o"])();var Tt=xt((function(t,e,n,o,a,r){var l=Object(c["u"])("tree-item");return Object(c["n"])(),Object(c["g"])("div",null,[wt,Object(c["j"])("ul",Ct,[Object(c["j"])(l,{class:"item",model:t.treeData},null,8,["model"])])])})),_t={key:0},Ft={key:0};function Dt(t,e,n,o,a,r){var l=Object(c["u"])("tree-item");return Object(c["n"])(),Object(c["g"])("li",null,[Object(c["j"])("div",{class:{bold:t.isFolder},onClick:e[1]||(e[1]=function(){return t.toggle.apply(t,arguments)}),onDblclick:e[2]||(e[2]=function(){return t.changeType.apply(t,arguments)})},[Object(c["i"])(Object(c["x"])(t.model.name)+" ",1),t.isFolder?(Object(c["n"])(),Object(c["g"])("span",_t,"["+Object(c["x"])(t.open?"-":"+")+"]",1)):Object(c["h"])("",!0)],34),t.isFolder?Object(c["F"])((Object(c["n"])(),Object(c["g"])("ul",Ft,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.model.children,(function(t,e){return Object(c["n"])(),Object(c["g"])(l,{class:"item",key:e,model:t},null,8,["model"])})),128)),Object(c["j"])("li",{class:"add",onClick:e[3]||(e[3]=function(){return t.addChild.apply(t,arguments)})},"+")],512)),[[c["C"],t.open]]):Object(c["h"])("",!0)])}var Bt=n("5530"),Et=n("bae6"),Mt=Object(c["k"])({name:"TreeItem",props:{model:{type:Object,required:!0}},setup:function(t){var e=Object(c["q"])({open:!1,isFolder:Object(c["e"])((function(){return Object(Et["a"])(t.model,["children","length"])}))});function n(){e.open=!e.open}function o(){t.model.children.push({name:"new stuff"})}function a(){e.isFolder||(Object(Et["b"])(t.model,"children",[]),o(),e.open=!0)}return Object(Bt["a"])(Object(Bt["a"])({},Object(c["y"])(e)),{},{toggle:n,changeType:a,addChild:o})}});Mt.render=Dt;var Lt=Mt,Ut={name:"My Tree",children:[{name:"hello"},{name:"wat2"},{name:"child folder",children:[{name:"child folder",children:[{name:"hello"},{name:"wat"}]},{name:"hello"},{name:"wat"},{name:"child folder",children:[{name:"hello"},{name:"wat"}]}]}]},Vt=Object(c["k"])({components:{TreeItem:Lt},data:function(){return{treeData:Ut}}});n("fe39");Vt.render=Tt,Vt.__scopeId="data-v-a3f9f1ea";var It=Vt,Kt=[{path:"/composition/commits",component:x},{path:"/composition/grid",component:M},{path:"/composition/markdown",component:P},{path:"/composition/svg",component:ot},{path:"/composition/todomvc",component:kt},{path:"/composition/tree",component:It}],St=Object(c["H"])("data-v-53f89832");Object(c["p"])("data-v-53f89832");var At={class:"commitsapp"},Ht=Object(c["j"])("h1",null,"Latest Vue.js Commits",-1),Nt=Object(c["i"])(" - "),Pt={class:"message"},qt=Object(c["j"])("br",null,null,-1),zt=Object(c["i"])(" by "),Jt={class:"author"},Gt=Object(c["i"])(" at "),$t={class:"date"};Object(c["o"])();var Rt=St((function(t,e,n,o,a,r){return Object(c["n"])(),Object(c["g"])("div",At,[Ht,(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.branches,(function(n){return Object(c["n"])(),Object(c["g"])("div",{key:n},[Object(c["F"])(Object(c["j"])("input",{type:"radio",id:n,value:n,name:"branch","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.currentBranch=e})},null,8,["id","value"]),[[c["A"],t.currentBranch]]),Object(c["j"])("label",{for:n},Object(c["x"])(n),9,["for"])])})),128)),Object(c["j"])("p",null,"vuejs/vue@"+Object(c["x"])(t.currentBranch),1),Object(c["j"])("ul",null,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.commits,(function(e){var n=e.html_url,o=e.sha,a=e.author,r=e.commit;return Object(c["n"])(),Object(c["g"])("li",{key:o},[Object(c["j"])("a",{href:n,target:"_blank",class:"commit"},Object(c["x"])(o.slice(0,7)),9,["href"]),Nt,Object(c["j"])("span",Pt,Object(c["x"])(t.truncate(r.message)),1),qt,zt,Object(c["j"])("span",Jt,[Object(c["j"])("a",{href:a.html_url,target:"_blank"},Object(c["x"])(r.author.name),9,["href"])]),Gt,Object(c["j"])("span",$t,Object(c["x"])(t.formatDate(r.author.date)),1)])})),128))])])})),Wt="https://api.github.com/repos/vuejs/vue-next/commits?per_page=3&sha=",Xt=Object(c["k"])({data:function(){return{branches:["master","sync"],currentBranch:"master",commits:[]}},created:function(){this.fetchData()},watch:{currentBranch:"fetchData"},methods:{fetchData:function(){var t=this;fetch("".concat(Wt).concat(this.currentBranch)).then((function(t){return t.json()})).then((function(e){Array.isArray(e)?t.commits=e:t.commits=[]}))},truncate:function(t){var e=t.indexOf("\n");return e>0?t.slice(0,e):t},formatDate:function(t){return t.replace(/T|Z/g," ")}}});n("8d11");Xt.render=Rt,Xt.__scopeId="data-v-53f89832";var Yt=Xt,Zt=Object(c["H"])("data-v-6fdb4342");Object(c["p"])("data-v-6fdb4342");var Qt={id:"search"},te=Object(c["i"])(" Search "),ee={key:0},ne={key:1};Object(c["o"])();var ce=Zt((function(t,e,n,o,a,r){return Object(c["n"])(),Object(c["g"])("div",null,[Object(c["j"])("form",Qt,[te,Object(c["F"])(Object(c["j"])("input",{name:"query","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.filterKey=e})},null,512),[[c["B"],t.filterKey]])]),t.filteredData.length?(Object(c["n"])(),Object(c["g"])("table",ee,[Object(c["j"])("thead",null,[Object(c["j"])("tr",null,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.columns,(function(e){return Object(c["n"])(),Object(c["g"])("th",{key:e,onClick:function(n){return t.sortBy(e)},class:{active:t.state.sortKey==e}},[Object(c["i"])(Object(c["x"])(t.capitalize(e))+" ",1),Object(c["j"])("span",{class:["arrow",t.state.sortOrders[e]>0?"asc":"dsc"]},null,2)],10,["onClick"])})),128))])]),Object(c["j"])("tbody",null,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.filteredData,(function(e,n){return Object(c["n"])(),Object(c["g"])("tr",{key:n},[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.columns,(function(t){return Object(c["n"])(),Object(c["g"])("td",{key:n+t},Object(c["x"])(e[t]),1)})),128))])})),128))])])):(Object(c["n"])(),Object(c["g"])("p",ne,"No matches found."))])})),oe=Object(c["k"])({data:function(){var t=["name","power"];return{filterKey:"",columns:t,data:[{name:"Chuck Norris",power:1/0},{name:"Bruce Lee",power:9e3},{name:"Jackie Chan",power:7e3},{name:"Jet Li",power:8e3}],state:{sortKey:"",sortOrders:t.reduce((function(t,e){return t[e]=1,t}),{})}}},computed:{filteredData:function(){var t=this.data,e=this.state;if(this.filterKey){var n=this.filterKey.toLowerCase();t=t.filter((function(t){return Object.keys(t).some((function(e){return String(t[e]).toLowerCase().indexOf(n)>-1}))}))}var c=e.sortKey;if(c){var o=e.sortOrders[c];t=t.slice().sort((function(t,e){return t=t[c],e=e[c],(t===e?0:t>e?1:-1)*o}))}return t}},methods:{sortBy:function(t){this.state.sortKey=t,this.state.sortOrders[t]*=-1},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}});n("27f7");oe.render=ce,oe.__scopeId="data-v-6fdb4342";var ae=oe,re=Object(c["H"])("data-v-5e895898");Object(c["p"])("data-v-5e895898");var le={id:"editor"};Object(c["o"])();var ie=re((function(t,e,n,o,a,r){return Object(c["n"])(),Object(c["g"])("div",le,[Object(c["j"])("textarea",{value:a.input,onInput:e[1]||(e[1]=function(){return r.update.apply(r,arguments)})},null,40,["value"]),Object(c["j"])("div",{innerHTML:r.output},null,8,["innerHTML"])])})),ue="#test"===window.location.hash?16:300,se={data:function(){return{input:"# hello"}},computed:{output:function(){return A()(this.input,{sanitize:!0})}},methods:{update:K.a.debounce((function(t){this.input=t.target.value}),ue)}};n("2b76");se.render=ie,se.__scopeId="data-v-5e895898";var be=se,je={class:"svgapp"},de={width:"200",height:"200"},Oe={id:"add"},fe={id:"raw"};function pe(t,e,n,o,a,r){var l=Object(c["u"])("polygraph");return Object(c["n"])(),Object(c["g"])("div",je,[(Object(c["n"])(),Object(c["g"])("svg",de,[Object(c["j"])(l,{stats:t.stats},null,8,["stats"])])),(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.stats,(function(e){return Object(c["n"])(),Object(c["g"])("div",{key:e.label},[Object(c["j"])("label",null,Object(c["x"])(e.label),1),Object(c["F"])(Object(c["j"])("input",{type:"range","onUpdate:modelValue":function(t){return e.value=t},min:"0",max:"100"},null,8,["onUpdate:modelValue"]),[[c["B"],e.value]]),Object(c["j"])("span",null,Object(c["x"])(e.value),1),Object(c["j"])("button",{onClick:function(n){return t.remove(e)},class:"remove"},"X",8,["onClick"])])})),128)),Object(c["j"])("form",Oe,[Object(c["F"])(Object(c["j"])("input",{name:"newlabel","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.newLabel=e})},null,512),[[c["B"],t.newLabel]]),Object(c["j"])("button",{onClick:e[2]||(e[2]=function(){return t.add.apply(t,arguments)})},"Add a Stat")]),Object(c["j"])("pre",fe,Object(c["x"])(t.stats),1)])}var me=Object(c["j"])("circle",{cx:"100",cy:"100",r:"80"},null,-1);function he(t,e,n,o,a,r){var l=Object(c["u"])("axis-label");return Object(c["n"])(),Object(c["g"])("g",null,[Object(c["j"])("polygon",{points:t.points},null,8,["points"]),me,(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.stats,(function(e,n){return Object(c["n"])(),Object(c["g"])(l,{key:n,stat:e,index:n,total:t.stats.length},null,8,["stat","index","total"])})),128))])}function ve(t,e,n,o,a,r){return Object(c["n"])(),Object(c["g"])("text",{x:t.point.x,y:t.point.y},Object(c["x"])(t.stat.label),9,["x","y"])}function ge(t,e,n){var c=0,o=.8*-t,a=2*Math.PI/n*e,r=Math.cos(a),l=Math.sin(a),i=c*r-o*l+100,u=c*l+o*r+100;return{x:i,y:u}}var ye=Object(c["k"])({props:{stat:Object,index:Number,total:Number},computed:{point:function(){return ge(+this.stat.value+10,this.index,this.total)}}});ye.render=ve;var ke=ye,xe=Object(c["k"])({props:["stats"],computed:{points:function(){var t=this.stats.length;return this.stats.map((function(e,n){var c=ge(e.value,n,t);return c.x+","+c.y})).join(" ")}},components:{AxisLabel:ke}});xe.render=he;var we=xe,Ce=[{label:"A",value:100},{label:"B",value:100},{label:"C",value:100},{label:"D",value:100},{label:"E",value:100},{label:"F",value:100}],Te=Object(c["k"])({components:{Polygraph:we},data:function(){return{newLabel:"",stats:Ce}},methods:{add:function(t){t.preventDefault(),this.newLabel&&(this.stats.push({label:this.newLabel,value:100}),this.newLabel="")},remove:function(t){this.stats.length>3?this.stats.splice(this.stats.indexOf(t),1):alert("Can't delete more!")}}});n("c5bf");Te.render=pe;var _e=Te,Fe=Object(c["H"])("data-v-662aff09");Object(c["p"])("data-v-662aff09");var De={class:"todoapp"},Be={class:"header"},Ee=Object(c["j"])("h1",null,"todos",-1),Me={class:"main"},Le=Object(c["j"])("label",{for:"toggle-all"},"Mark all as complete",-1),Ue={class:"todo-list"},Ve={class:"view"},Ie={class:"footer"},Ke={class:"todo-count"},Se={class:"filters"};Object(c["o"])();var Ae=Fe((function(t,e,n,o,a,r){var l=Object(c["v"])("todo-focus");return Object(c["n"])(),Object(c["g"])("div",null,[Object(c["j"])("section",De,[Object(c["j"])("header",Be,[Ee,Object(c["F"])(Object(c["j"])("input",{class:"new-todo",autofocus:"",autocomplete:"off",placeholder:"What needs to be done?","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.newTodo=e}),onKeyup:e[2]||(e[2]=Object(c["G"])((function(){return t.addTodo.apply(t,arguments)}),["enter"]))},null,544),[[c["B"],t.newTodo]])]),Object(c["F"])(Object(c["j"])("section",Me,[Object(c["F"])(Object(c["j"])("input",{id:"toggle-all",class:"toggle-all",type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.allDone=e})},null,512),[[c["z"],t.allDone]]),Le,Object(c["j"])("ul",Ue,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.filteredTodos,(function(e){return Object(c["n"])(),Object(c["g"])("li",{class:["todo",{completed:e.completed,editing:e===t.editedTodo}],key:e.id},[Object(c["j"])("div",Ve,[Object(c["F"])(Object(c["j"])("input",{class:"toggle",type:"checkbox","onUpdate:modelValue":function(t){return e.completed=t}},null,8,["onUpdate:modelValue"]),[[c["z"],e.completed]]),Object(c["j"])("label",{onDblclick:function(n){return t.editTodo(e)}},Object(c["x"])(e.title),41,["onDblclick"]),Object(c["j"])("button",{class:"destroy",onClick:function(n){return t.removeTodo(e)}},null,8,["onClick"])]),Object(c["F"])(Object(c["j"])("input",{class:"edit",type:"text","onUpdate:modelValue":function(t){return e.title=t},onBlur:function(n){return t.doneEdit(e)},onKeyup:[Object(c["G"])((function(n){return t.doneEdit(e)}),["enter"]),Object(c["G"])((function(n){return t.cancelEdit(e)}),["escape"])]},null,40,["onUpdate:modelValue","onBlur","onKeyup"]),[[c["B"],e.title],[l,e===t.editedTodo]])],2)})),128))])],512),[[c["C"],t.todos.length]]),Object(c["F"])(Object(c["j"])("footer",Ie,[Object(c["j"])("span",Ke,[Object(c["j"])("strong",null,Object(c["x"])(t.remaining),1),Object(c["j"])("span",null,Object(c["x"])(t.remainingText),1)]),Object(c["j"])("ul",Se,[Object(c["j"])("li",null,[Object(c["j"])("a",{href:"javascript:;",onClick:e[4]||(e[4]=function(e){return t.visibility="all"}),class:{selected:"all"===t.visibility}},"All",2)]),Object(c["j"])("li",null,[Object(c["j"])("a",{href:"javascript:;",onClick:e[5]||(e[5]=function(e){return t.visibility="active"}),class:{selected:"active"===t.visibility}},"Active",2)]),Object(c["j"])("li",null,[Object(c["j"])("a",{href:"javascript:;",onClick:e[6]||(e[6]=function(e){return t.visibility="completed"}),class:{selected:"completed"===t.visibility}},"Completed",2)])]),Object(c["F"])(Object(c["j"])("button",{class:"clear-completed",onClick:e[7]||(e[7]=function(){return t.removeCompleted.apply(t,arguments)})}," Clear completed ",512),[[c["C"],t.todos.length>t.remaining]])],512),[[c["C"],t.todos.length]])])])})),He="todos-vuejs-3.x",Ne={fetch:function(){var t=JSON.parse(localStorage.getItem(He)||"[]");return t.forEach((function(t,e){t.id=e})),Ne.uid=t.length,t},save:function(t){localStorage.setItem(He,JSON.stringify(t))}},Pe={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.completed}))},completed:function(t){return t.filter((function(t){return t.completed}))}};function qe(t){return 1===t?"item":"items"}var ze=Object(c["k"])({data:function(){return{todos:Ne.fetch(),editedTodo:null,newTodo:"",beforeEditCache:"",visibility:"all"}},computed:{remaining:function(){return Pe.active(this.todos).length},remainingText:function(){return" ".concat(qe(this.remaining)," left")},filteredTodos:function(){return Pe[this.visibility](this.todos)},allDone:{get:function(){return 0===this.remaining},set:function(t){this.todos.forEach((function(e){e.completed=t}))}}},watch:{todos:function(){Ne.save(this.todos)}},methods:{addTodo:function(){var t=this.newTodo&&this.newTodo.trim();t&&(this.todos.push({id:Ne.uid++,title:t,completed:!1}),this.newTodo="")},removeTodo:function(t){this.todos.splice(this.todos.indexOf(t),1)},editTodo:function(t){this.beforeEditCache=t.title,this.editedTodo=t},doneEdit:function(t){this.editedTodo&&(this.editedTodo=null,t.title=t.title.trim(),t.title||this.removeTodo(t))},cancelEdit:function(t){this.editedTodo=null,t.title=this.beforeEditCache},removeCompleted:function(){this.todos=Pe.active(this.todos)}},directives:{"todo-focus":function(t,e){var n=e.value;n&&t.focus()}}});n("c544");ze.render=Ae,ze.__scopeId="data-v-662aff09";var Je=ze,Ge=Object(c["H"])("data-v-20333cef");Object(c["p"])("data-v-20333cef");var $e=Object(c["j"])("p",null,"(You can double click on an item to turn it into a folder.)",-1),Re={id:"demo"};Object(c["o"])();var We=Ge((function(t,e,n,o,a,r){var l=Object(c["u"])("tree-item");return Object(c["n"])(),Object(c["g"])("div",null,[$e,Object(c["j"])("ul",Re,[Object(c["j"])(l,{class:"item",model:t.treeData},null,8,["model"])])])})),Xe={key:0},Ye={key:0};function Ze(t,e,n,o,a,r){var l=Object(c["u"])("tree-item");return Object(c["n"])(),Object(c["g"])("li",null,[Object(c["j"])("div",{class:{bold:t.isFolder},onClick:e[1]||(e[1]=function(){return t.toggle.apply(t,arguments)}),onDblclick:e[2]||(e[2]=function(){return t.changeType.apply(t,arguments)})},[Object(c["i"])(Object(c["x"])(t.model.name)+" ",1),t.isFolder?(Object(c["n"])(),Object(c["g"])("span",Xe,"["+Object(c["x"])(t.open?"-":"+")+"]",1)):Object(c["h"])("",!0)],34),t.isFolder?Object(c["F"])((Object(c["n"])(),Object(c["g"])("ul",Ye,[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.model.children,(function(t,e){return Object(c["n"])(),Object(c["g"])(l,{class:"item",key:e,model:t},null,8,["model"])})),128)),Object(c["j"])("li",{class:"add",onClick:e[3]||(e[3]=function(){return t.addChild.apply(t,arguments)})},"+")],512)),[[c["C"],t.open]]):Object(c["h"])("",!0)])}var Qe=Object(c["k"])({name:"TreeItem",props:{model:Object},data:function(){return{open:!1}},computed:{isFolder:function(){return Object(Et["a"])(this.model,"children.length")}},methods:{toggle:function(){this.open=!this.open},addChild:function(){this.model.children.push({name:"new stuff"})},changeType:function(){this.isFolder||(Object(Et["b"])(this.model,"children",[]),this.addChild(),this.open=!0)}}});Qe.render=Ze;var tn=Qe,en={name:"My Tree",children:[{name:"hello"},{name:"wat"},{name:"child folder",children:[{name:"child folder",children:[{name:"hello"},{name:"wat"}]},{name:"hello"},{name:"wat"},{name:"child folder",children:[{name:"hello"},{name:"wat"}]}]}]},nn=Object(c["k"])({components:{TreeItem:tn},data:function(){return{treeData:en}}});n("341f");nn.render=We,nn.__scopeId="data-v-20333cef";var cn=nn,on=[{path:"/classic/commits",component:Yt},{path:"/classic/grid",component:ae},{path:"/classic/markdown",component:be},{path:"/classic/svg",component:_e},{path:"/classic/todomvc",component:Je},{path:"/classic/tree",component:cn}],an={class:"listapp"};function rn(t,e,n,o,a,r){var l=Object(c["u"])("item");return Object(c["n"])(),Object(c["g"])("div",an,[Object(c["j"])("button",{onClick:e[1]||(e[1]=function(){return t.insert.apply(t,arguments)})},"insert at random index"),Object(c["j"])("button",{onClick:e[2]||(e[2]=function(){return t.reset.apply(t,arguments)})},"reset"),Object(c["j"])("button",{onClick:e[3]||(e[3]=function(){return t.shuffle.apply(t,arguments)})},"shuffle"),Object(c["j"])(c["d"],{tag:"ul",name:"fade",class:"container"},{default:Object(c["E"])((function(){return[(Object(c["n"])(!0),Object(c["g"])(c["a"],null,Object(c["s"])(t.items,(function(e){return Object(c["n"])(),Object(c["g"])(l,{class:"item",msg:e,key:e,onRm:function(n){return t.remove(e)}},null,8,["msg","onRm"])})),128))]})),_:1})])}function ln(t,e,n,o,a,r){return Object(c["n"])(),Object(c["g"])("div",null,[Object(c["i"])(Object(c["x"])(n.msg)+" ",1),Object(c["j"])("button",{onClick:e[1]||(e[1]=function(e){return t.$emit("rm")})},"x")])}var un={props:["msg"]};un.render=ln;var sn=un,bn=function(){return[1,2,3,4,5]},jn=bn().length+1,dn=Object(c["k"])({components:{Item:sn},data:function(){return{items:bn()}},methods:{insert:function(){var t=Math.round(Math.random()*this.items.length);this.items.splice(t,0,jn++)},reset:function(){this.items=bn()},shuffle:function(){this.items=K.a.shuffle(this.items)},remove:function(t){var e=this.items.indexOf(t);e>-1&&this.items.splice(e,1)}}});n("4363");dn.render=rn;var On=dn,fn=Object(c["j"])("h3",null,"custom header",-1);function pn(t,e,n,o,a,r){var l=Object(c["u"])("modal");return Object(c["n"])(),Object(c["g"])("div",null,[Object(c["j"])("div",null,[Object(c["j"])("button",{id:"show-modal",onClick:e[1]||(e[1]=function(e){return t.showModal=!0})},"Show Modal"),(Object(c["n"])(),Object(c["g"])(c["b"],{to:"#modal-container"},[Object(c["j"])(l,{show:t.showModal,onClose:e[2]||(e[2]=function(e){return t.showModal=!1})},{header:Object(c["E"])((function(){return[fn]})),_:1},8,["show"])]))])])}var mn={key:0,class:"modal-mask"},hn={class:"modal-wrapper"},vn={class:"modal-container"},gn={class:"modal-header"},yn=Object(c["i"])(" default header "),kn={class:"modal-body"},xn=Object(c["i"])(" default body "),wn={class:"modal-footer"},Cn=Object(c["i"])(" default footer ");function Tn(t,e,n,o,a,r){return Object(c["n"])(),Object(c["g"])(c["c"],{name:"modal"},{default:Object(c["E"])((function(){return[t.show?(Object(c["n"])(),Object(c["g"])("div",mn,[Object(c["j"])("div",hn,[Object(c["j"])("div",vn,[Object(c["j"])("div",gn,[Object(c["t"])(t.$slots,"header",{},(function(){return[yn]}))]),Object(c["j"])("div",kn,[Object(c["t"])(t.$slots,"body",{},(function(){return[xn]}))]),Object(c["j"])("div",wn,[Object(c["t"])(t.$slots,"footer",{},(function(){return[Cn,Object(c["j"])("button",{class:"modal-default-button",onClick:e[1]||(e[1]=function(e){return t.$emit("close")})}," OK ")]}))])])])])):Object(c["h"])("",!0)]})),_:1})}var _n={props:["show"]},Fn=_n;Fn.render=Tn;var Dn=Fn,Bn={components:{Modal:Dn},data:function(){return{showModal:!1}}};n("4fa3");Bn.render=pn;var En=Bn,Mn=[{path:"/transition/list",component:On},{path:"/transition/modal",component:En}],Ln=Object(c["k"])({setup:function(){var t=Object(c["r"])("/"),e=Object(c["q"])(Object(c["m"])([{path:"/"}].concat(Kt,on,Mn))),n=Object(c["e"])((function(){var n="";return e.forEach((function(e){e.path===t.value&&(n=e.component)})),n}));function o(e){t.value=e}return{routes:e,view:n,goto:o}}});n("6425");Ln.render=l;var Un=Ln,Vn=Object(o["a"])(),In=Object(c["f"])(Un,{myroot:1,xRoot:2});In.use(Vn).mount("#app")},cdea:function(t,e,n){},d2de:function(t,e,n){},d321:function(t,e,n){},e5d6:function(t,e,n){},e7b1:function(t,e,n){"use strict";n("7b2b")},f11e:function(t,e,n){"use strict";n("c0ae")},fe39:function(t,e,n){"use strict";n("e5d6")}});
//# sourceMappingURL=app.a20a3057.js.map