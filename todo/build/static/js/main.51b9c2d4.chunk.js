(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(6),s=n(1),u=n(2),d=n(4),m=n(3),f=n(5),b=(n(16),n(17),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"My Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).onChange=function(e){var t=e.target;n.props.onChanged(t.value)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search",onChange:this.onChange})}}]),t}(a.Component),h=n(10),g=(n(18),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=e.important,l="todo-list-item";return e.done&&(l+=" done"),c&&(l+=" important"),o.a.createElement("span",{className:l},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}}]),t}(a.Component)),v=(n(19),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=t.map((function(e){var t=e.id,c=Object(h.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(g,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},c)}),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).onChosen=function(e){document.querySelectorAll(".btn-group button").forEach((function(t){e.target===t?(t.classList.remove("btn-outline-secondary"),t.classList.add("btn-info")):(t.classList.add("btn-outline-secondary"),t.classList.remove("btn-info"))})),n.props.onFiltered(e.target)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{type:"button",value:"all",className:"btn btn-info",onClick:this.onChosen},"All"),o.a.createElement("button",{type:"button",value:"active",className:"btn btn-outline-secondary",onClick:this.onChosen},"Active"),o.a.createElement("button",{type:"button",value:"done",className:"btn btn-outline-secondary",onClick:this.onChosen},"Done"))}}]),t}(a.Component),y=(n(20),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onAdded(n.state.label),n.setState({label:""})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done",value:this.state.label}),o.a.createElement("button",{className:"add-item-button btn btn-dark"},"Add Item"))}}]),t}(a.Component));function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).avId=100,n.state={todoData:[n.createTodoItem("Drink Coffee"),n.createTodoItem("Make Awesome App"),n.createTodoItem("Have a lunch")],term:"",filter:""},n.deleteItem=function(e){n.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(i.a)(n.slice(0,a)),Object(i.a)(n.slice(a+1)))}}))},n.addItem=function(e){var t=n.createTodoItem(e);n.setState((function(e){var n=e.todoData;return{todoData:[].concat(Object(i.a)(n),[t])}}))},n.filterItems=function(e){n.setState((function(t){t.filter;return{filter:e.value}}))},n.sortItems=function(e){n.setState((function(t){t.term;return{term:e}}))},n.onToggleImportant=function(e){n.setState((function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"important")}}))},n.onToggleDone=function(e){n.setState((function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"done")}}))},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.avId++}}},{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=e[a],r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,Object(l.a)({},n,!o[n]));return[].concat(Object(i.a)(e.slice(0,a)),[r],Object(i.a)(e.slice(a+1)))}},{key:"toSearch",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"toFilter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=this.toFilter(this.toSearch(t,n),a),c=t.filter((function(e){return e.done})).length,l=t.length-c;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(b,{toDo:l,done:c}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(p,{onChanged:this.sortItems}),o.a.createElement(O,{onFiltered:this.filterItems})),o.a.createElement(v,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(y,{onAdded:this.addItem}))}}]),t}(a.Component);c.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.51b9c2d4.chunk.js.map