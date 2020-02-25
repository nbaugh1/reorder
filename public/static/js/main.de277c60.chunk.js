(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{53:function(e,t,n){e.exports=n(69)},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(26),o=n.n(c),u=n(17),l=n(22),i=(n(62),n(29)),m=n(23);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={orders:[],items:[],neededItems:[],loading:!1,ordersLoaded:!1,currentOrder:null,itemsLoaded:!1};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={items:[],loading:!1,itemsLoaded:!1,onHand:0,par:0,currentItem:"",amountNeeded:0,saved:!1},O=Object(l.combineReducers)({ordersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ORDER":return d({},e,{neededItems:[].concat(Object(i.a)(e.neededItems),[t.item])});case"GET_ORDER":return d({},e,{loading:!1,currentOrder:t.order});case"GET_ORDERS":return d({},e,{orders:t.orders,loading:!1,ordersLoaded:!0});case"ADD_ORDER":return d({},e,{orders:[].concat(Object(i.a)(e.orders),[t.order])});case"LOADING_ORDERS":return d({},e,{loading:!0});default:return e}},itemsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return E({},e,{items:t.items,loading:!1,itemsLoaded:!0});case"UPDATE_ITEM_NAME":return E({},e,{name:t.name});case"UPDATE_ITEM_PAR":return E({},e,{par:t.par});case"CLEAR_ITEM_COUNTS":return E({},e,{items:t.clearedItems});case"UPDATE_CURRENT_ITEM":return E({},e,{currentItem:t.item,saved:!0});case"UPDATE_ON_HAND":return E({},e,{onHand:t.onHand});case"LOADING_ITEMS":return E({},e,{loading:!0});case"ADD_ITEM":return E({},e,{items:[].concat(Object(i.a)(e.items),[t.item])});default:return e}}}),b=(n(63),n(10)),y=n(11),v=n(13),j=n(12),g=n(14),D=n(7),I=n(24),S=n(72),R=n(75),T=n(71),_=n(46),C=n(79),P=function(){return a.a.createElement(R.a,{bg:"light",expand:"lg",fixed:"top"},a.a.createElement(T.a,null,a.a.createElement(_.a,null,a.a.createElement(D.b,{to:"/"},a.a.createElement(R.a.Brand,null,"ReOrder")),a.a.createElement(D.b,{to:"/items/new"},a.a.createElement(C.a,null,"Add New Item")),a.a.createElement(D.b,{to:"/orders"},a.a.createElement(C.a,null,"Order History")))))},N=function(){return a.a.createElement(P,null)},A=n(77),w="http://localhost:3001",L=function(){return function(e){return e({type:"LOADING_ITEMS"}),fetch(w+"/items").then((function(e){return e.json()})).then((function(t){return e({type:"GET_ITEMS",items:t})}))}},k=function(e){return{type:"UPDATE_CURRENT_ITEM",item:e}},M=n(76),U=function(e){function t(){var e,n;Object(b.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(a)))).handleSubmit=function(e){e.preventDefault();var t=e.target,r=t.name,a=t.par,c={name:r.value,par:a.value};n.props.addItem(c,n.props.history)},n}return Object(g.a)(t,e),Object(y.a)(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.id,r=t.value;e.preventDefault(),"name"===n?this.props.updateItemName(r):"par"===n&&this.props.updateItemPar(r)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"container"},a.a.createElement(M.a,{id:"new-item",onSubmit:this.handleSubmit},a.a.createElement("br",null),a.a.createElement(T.a,null,a.a.createElement(_.a,null),a.a.createElement(_.a,null,a.a.createElement(M.a.Group,null,a.a.createElement(M.a.Label,null,"Item Name: "),a.a.createElement(M.a.Control,{as:"input",type:"text",value:this.props.itemName,onChange:function(t){return e.handleChange(t)},id:"name"})),a.a.createElement(M.a.Group,null,a.a.createElement(M.a.Label,null,"Item Par: "),a.a.createElement(M.a.Control,{as:"input",type:"number",value:this.props.itemPar,onChange:function(t){return e.handleChange(t)},id:"par"}),a.a.createElement("br",null),a.a.createElement(C.a,{type:"submit"},"Save"))),a.a.createElement(_.a,null))))}}]),t}(r.Component),H=Object(u.b)((function(e){return{itemName:e.itemsReducer.itemName,itemPar:e.itemsReducer.itemPar}}),{addItem:function(e,t){return function(n){return fetch(w+"/items",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({item:e})}).then((function(e){return e.json()})).then((function(e){n({type:"ADD_ITEM",item:e}),t.push("/items")}))}},updateItemName:function(e){return function(t){t({type:"UPDATE_ITEM_NAME",name:e})}},updateItemPar:function(e){return function(t){t({type:"UPDATE_ITEM_PAR",par:e})}}})(U),x=n(73),G=n(78),J=n(52),z=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(v.a)(this,Object(j.a)(t).call(this,e))).handleChange=function(e){var t=e.target,r=t.name,a=t.value;n.setState(Object(m.a)({},r,a))},n.handleSubmit=function(e){e.preventDefault();var t={name:n.props.item.name,par:n.props.item.par,on_hand:n.state.onHand,amount_needed:n.props.item.par-n.state.onHand,id:n.props.item.id};n.setState({amountNeeded:t.amount_needed}),n.props.updateCurrentItem(t,n.props.history)},n.state={onHand:0,amountNeeded:0},n}return Object(g.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.id,n=e.name,r=e.par;return a.a.createElement(A.a,{className:"item-card"},a.a.createElement(A.a.Body,null,a.a.createElement(G.a,null,a.a.createElement(J.a,null,"Name: ",n),a.a.createElement(J.a,null,a.a.createElement("h2",null,"Amount Needed: ",this.state.amountNeeded)),a.a.createElement(J.a,null,a.a.createElement("h2",null,"Par: ",r)),a.a.createElement(M.a,{id:"on-hand",onSubmit:this.handleSubmit},a.a.createElement(M.a.Label,null,"On Hand:"),a.a.createElement(M.a.Control,{as:"input",type:"number",value:this.state.onHand,onChange:this.handleChange,id:t,name:"onHand"}),a.a.createElement("br",null),a.a.createElement(C.a,{type:"submit"},"Save")))))}}]),t}(r.Component),B=function(e){function t(){var e,n;Object(b.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(a)))).handleSubmitOrder=function(e){e.preventDefault()},n}return Object(g.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.itemsLoaded||this.props.getItems()}},{key:"render",value:function(){var e=this;if(this.props.loading)return a.a.createElement("div",{className:"items-list"},a.a.createElement("h1",null,"Loading..."));var t=this.props.items.map((function(t,n){return a.a.createElement(z,{key:t.id,item:t,updateCurrentItem:e.props.updateCurrentItem})}));return a.a.createElement(S.a,null,a.a.createElement(x.a,null,t),a.a.createElement("br",null),a.a.createElement(D.b,{to:"/orders/new"},a.a.createElement(C.a,{variant:"secondary",size:"lg",block:!0},"Review Order")))}}]),t}(r.Component),F=Object(u.b)((function(e){return{neededItems:e.ordersReducer.neededItems,items:e.itemsReducer.items,loading:e.itemsReducer.loading,itemsLoaded:e.itemsReducer.itemsLoaded,currentItem:e.itemsReducer.currentItem}}),{getItems:L,updateOnHand:function(e){return function(t){t({type:"UPDATE_ON_HAND",onHand:e})}},updateCurrentItem:function(e){return function(t){return fetch(w+"/items/".concat(e.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({item:e})}).then((function(e){return e.json()})).then((function(e){t(k(e))}))}}})(B),q=function(e){var t=e.item;return a.a.createElement("div",null,a.a.createElement(T.a,null,a.a.createElement(_.a,null,a.a.createElement("h1",null,t.name)),a.a.createElement(_.a,null,a.a.createElement("h1",null," ",t.amount_needed))))},K=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(v.a)(this,Object(j.a)(t).call(this,e))).handleChange=function(e){var t=e.target,r=t.name,a=t.value;n.setState(Object(m.a)({},r,a))},n.handleSubmit=function(e){e.preventDefault();var t=n.props.items.map((function(e){return"".concat(e.name," ").concat(e.amount_needed)})),r={name:e.target.name.value,neededItems:t};n.props.addOrder(r,n.props.history)},n.state={name:""},n}return Object(g.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){var e=this.props.items.filter((function(e){return e.amount_needed})).map((function(e){return a.a.createElement(q,{item:e,key:e.id})}));return a.a.createElement("div",null,a.a.createElement("h4",null,e),a.a.createElement(T.a,null,a.a.createElement(M.a,{onSubmit:this.handleSubmit},a.a.createElement(M.a.Label,{htmlFor:"order-name"},"Order Title: "),a.a.createElement(M.a.Control,{as:"input",name:"name",type:"text",value:this.state.name,onChange:this.handleChange}),a.a.createElement("br",null),a.a.createElement(C.a,{type:"submit"},"Save"))))}}]),t}(r.Component),Q=Object(u.b)((function(e){return{items:e.itemsReducer.items}}),{addOrder:function(e,t){return function(n){return fetch(w+"/orders",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({order:e})}).then((function(e){return e.json()})).then((function(e){n({type:"ADD_ORDER",order:e}),t.push("/orders")}))}},getItems:L,clearItemCounts:function(e){return function(t){return t({type:"CLEAR_ITEM_COUNTS",clearedItems:e})}}})(K),V=n(74),W=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(v.a)(this,Object(j.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target.value;n.setState({searchTerm:t})},n.handleSearch=function(e){e.preventDefault(),n.filterOrders(n.state.searchTerm)},n.filterOrders=function(e){var t=n.props.orders;t=t.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.toLowerCase())})),n.setState({filteredOrders:t})},n.state={searchTerm:"",allOrders:[],filteredOrders:[]},n}return Object(g.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.getOrders()}},{key:"render",value:function(){var e=this.state.filteredOrders,t=this.props.orders.map((function(e){return a.a.createElement("tbody",{key:e.id},a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(D.b,{to:"/orders/".concat(e.id)},e.id)),a.a.createElement("td",null,a.a.createElement(D.b,{to:"/orders/".concat(e.id)},e.name)),a.a.createElement("td",null,new Date(e.created_at).toLocaleDateString("en-US",{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}))))})),n=e.map((function(e){return a.a.createElement("tbody",{key:e.id},a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(D.b,{to:"/orders/".concat(e.id)},e.id)),a.a.createElement("td",null,a.a.createElement(D.b,{to:"/orders/".concat(e.id)},e.name)),a.a.createElement("td",null,new Date(e.created_at).toLocaleDateString("en-US",{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}))))}));return a.a.createElement("div",null,a.a.createElement(T.a,null,a.a.createElement(M.a,{inline:"true",onSubmit:this.handleSearch},a.a.createElement(M.a.Label,null,"Search:"),a.a.createElement(M.a.Control,{as:"input",name:"searchTerm",id:"search",onChange:this.handleChange,type:"text"}),a.a.createElement(C.a,{type:"submit"},"Search"))),a.a.createElement("h5",null,"Search Results:"),a.a.createElement(V.a,{bordered:!0,hover:!0,size:"sm"},n),a.a.createElement(V.a,{bordered:!0,hover:!0,size:"sm"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Order No."),a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Timestamp"))),t))}}]),t}(r.Component),X=Object(u.b)((function(e){return{orders:e.ordersReducer.orders}}),{getOrders:function(){return function(e){return e({type:"LOADING_ORDERS"}),fetch(w+"/orders").then((function(e){return e.json()})).then((function(t){return e({type:"GET_ORDERS",orders:t})}))}}})(W),Y=function(e){function t(){return Object(b.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getOrder(e)}},{key:"render",value:function(){if(!this.props.loading&&this.props.currentOrder){var e=this.props.currentOrder.neededItems;return a.a.createElement("h1",null,e.join("; "))}return a.a.createElement("div",null,a.a.createElement("h1",null,"Loading..."))}}]),t}(r.Component),Z=Object(u.b)((function(e){return{currentOrder:e.ordersReducer.currentOrder,loading:e.ordersReducer.loading}}),{getOrder:function(e){return function(t){return t({type:"LOADING_ORDER"}),fetch(w+"/orders/"+e).then((function(e){return e.json()})).then((function(e){return t({type:"GET_ORDER",order:e})}))}}})(Y),$=(n(67),n(68),function(e){function t(){return Object(b.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return a.a.createElement(D.a,null,a.a.createElement(S.a,null,a.a.createElement(N,null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(I.c,null,a.a.createElement(I.a,{exact:!0,path:"/",component:F}),a.a.createElement(I.a,{exact:!0,path:"/items/new",component:H}),a.a.createElement(I.a,{exact:!0,path:"/items",component:F}),a.a.createElement(I.a,{exact:!0,path:"/orders/new",component:Q}),a.a.createElement(I.a,{exact:!0,path:"/orders",component:X}),a.a.createElement(I.a,{exact:!0,path:"/orders/:id",component:Z}))))}}]),t}(r.Component)),ee=n(51),te=Object(l.createStore)(O,Object(l.compose)(Object(l.applyMiddleware)(ee.a)));o.a.render(a.a.createElement(u.a,{store:te},a.a.createElement($,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.de277c60.chunk.js.map