(function(e){function t(t){for(var r,c,s=t[0],i=t[1],u=t[2],l=0,f=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0783":function(e,t,n){},"0b5b":function(e,t,n){"use strict";n("9bf0")},"25dc":function(e,t,n){"use strict";n("4097")},4097:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"};function o(e,t,n,o,c,s){var i=Object(r["y"])("Header"),u=Object(r["y"])("router-view"),d=Object(r["y"])("Footer");return Object(r["r"])(),Object(r["d"])("div",a,[Object(r["g"])(i,{onToogleAddTask:s.toogleAddTask,title:"Task Tracker",showAddTask:c.showAddTask},null,8,["onToogleAddTask","showAddTask"]),Object(r["g"])(u,{showAddTask:c.showAddTask},null,8,["showAddTask"]),Object(r["g"])(d)])}function c(e,t,n,a,o,c){var s=Object(r["y"])("Button");return Object(r["r"])(),Object(r["d"])("header",null,[Object(r["e"])("h1",null,Object(r["A"])(n.title),1),Object(r["H"])(Object(r["g"])(s,{onBtnClick:t[0]||(t[0]=function(t){return e.$emit("toogleAddTask")}),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"]),[[r["E"],c.homePage]])])}function s(e,t,n,a,o,c){return Object(r["r"])(),Object(r["d"])("button",{onClick:t[0]||(t[0]=function(e){return c.onClick()}),style:Object(r["n"])({background:n.color}),class:"btn"},Object(r["A"])(n.text),5)}var i={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}};i.render=s;var u=i,d={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:u},computed:{homePage:function(){return"/"===this.$route.path}}};n("0b5b");d.render=c,d.__scopeId="data-v-7d704572";var l=d;Object(r["u"])("data-v-65603e03");var f=Object(r["e"])("p",null,"Copyright © 2021",-1),b=Object(r["f"])("About");function p(e,t){var n=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["d"])("footer",null,[f,Object(r["g"])(n,{to:"/about"},{default:Object(r["G"])((function(){return[b]})),_:1})])}Object(r["s"])();n("ef40");const m={};m.render=p,m.__scopeId="data-v-65603e03";var k=m,j={name:"App",components:{Header:l,Footer:k},data:function(){return{showAddTask:!1}},methods:{toogleAddTask:function(){this.showAddTask=!this.showAddTask}}};n("d1fc");j.render=o;var O=j,h=n("6c02");function v(e,t,n,a,o,c){var s=Object(r["y"])("AddTask"),i=Object(r["y"])("Tasks");return Object(r["r"])(),Object(r["d"])(r["a"],null,[Object(r["H"])(Object(r["g"])(s,{onAddTask:c.addTask},null,8,["onAddTask"]),[[r["E"],n.showAddTask]]),Object(r["g"])(i,{onToogleReminder:c.toogleReminder,onDeleteTask:c.deleteTask,tasks:o.tasks},null,8,["onToogleReminder","onDeleteTask","tasks"])],64)}var T=n("5530"),g=n("2909"),y=n("1da1");n("96cf"),n("d3b7"),n("99af"),n("4de4"),n("d81d");function w(e,t,n,a,o,c){var s=Object(r["y"])("Task");return Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(n.tasks,(function(t){return Object(r["r"])(),Object(r["d"])("div",{key:t.id},[Object(r["g"])(s,{onToggleReminder:function(n){return e.$emit("toogle-reminder",t.id)},onDeleteTask:function(n){return e.$emit("delete-task",t.id)},task:t},null,8,["onToggleReminder","onDeleteTask","task"])])})),128)}function x(e,t,n,a,o,c){return Object(r["r"])(),Object(r["d"])("div",{onDblclick:t[1]||(t[1]=function(t){return e.$emit("toggle-reminder",n.task.id)}),class:Object(r["m"])([n.task.reminder?"reminder":"","task"])},[Object(r["e"])("h3",null,[Object(r["f"])(Object(r["A"])(n.task.text)+" ",1),Object(r["e"])("i",{onClick:t[0]||(t[0]=function(t){return e.$emit("delete-task",n.task.id)}),class:"fas fa-times"})]),Object(r["e"])("p",null,Object(r["A"])(n.task.day),1)],34)}var A={name:"Task",props:{task:Object}};n("25dc");A.render=x,A.__scopeId="data-v-7011f8c8";var R=A,S={name:"Tasks",props:{tasks:Array},components:{Task:R},emits:["delete-task","toogle-reminder"]};S.render=w;var _=S;Object(r["u"])("data-v-4ea7fe33");var D={class:"form-control"},P=Object(r["e"])("label",{for:"text"},"Task",-1),C={class:"form-control"},H=Object(r["e"])("label",{for:"day"},"Day & Time",-1),$={class:"form-control form-control-check"},B=Object(r["e"])("label",{for:"reminder"},"Set Reminder",-1),E=Object(r["e"])("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1);function M(e,t,n,a,o,c){return Object(r["r"])(),Object(r["d"])("form",{onSubmit:t[3]||(t[3]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(r["e"])("div",D,[P,Object(r["H"])(Object(r["e"])("input",{id:"text",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.text=e}),name:"text",placeholder:"Add Task"},null,512),[[r["D"],o.text]])]),Object(r["e"])("div",C,[H,Object(r["H"])(Object(r["e"])("input",{id:"day",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.day=e}),name:"day",placeholder:"Month Day & Time"},null,512),[[r["D"],o.day]])]),Object(r["e"])("div",$,[B,Object(r["H"])(Object(r["e"])("input",{id:"reminder",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.reminder=e}),name:"reminder"},null,512),[[r["C"],o.reminder]])]),E],32)}Object(r["s"])();var I={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}};n("a20a");I.render=M,I.__scopeId="data-v-4ea7fe33";var J=I,U={name:"Home",props:{showAddTask:Boolean},components:{Tasks:_,AddTask:J},data:function(){return{tasks:[]}},methods:{addTask:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("api/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,t.tasks=[].concat(Object(g["a"])(t.tasks),[a]);case 7:case"end":return n.stop()}}),n)})))()},deleteTask:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!confirm("Are you sure?")){n.next=5;break}return n.next=3,fetch("api/tasks/".concat(e),{method:"DELETE"});case 3:r=n.sent,200===r.status?t.tasks=t.tasks.filter((function(t){return t.id!==e})):alert("Error Deleting Task!");case 5:case"end":return n.stop()}}),n)})))()},toogleReminder:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchTask(e);case 2:return r=n.sent,a=Object(T["a"])(Object(T["a"])({},r),{},{reminder:!r.reminder}),n.next=6,fetch("api/tasks/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 6:return o=n.sent,n.next=9,o.json();case 9:c=n.sent,t.tasks=t.tasks.map((function(t){return t.id===e?Object(T["a"])(Object(T["a"])({},t),{},{reminder:c.reminder}):t}));case 11:case"end":return n.stop()}}),n)})))()},fetchTasks:function(){return Object(y["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},fetchTask:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/tasks/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTasks();case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};U.render=v;var V=U,F=[{path:"/",name:"Home",component:V}],N=Object(h["a"])({history:Object(h["b"])("/"),routes:F}),G=N;Object(r["c"])(O).use(G).mount("#app")},"9bf0":function(e,t,n){},a20a:function(e,t,n){"use strict";n("c9ac")},c9ac:function(e,t,n){},d1fc:function(e,t,n){"use strict";n("0783")},e67c:function(e,t,n){},ef40:function(e,t,n){"use strict";n("e67c")}});
//# sourceMappingURL=app.490a9bec.js.map