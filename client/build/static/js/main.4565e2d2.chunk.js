(this.webpackJsonpstatus_app=this.webpackJsonpstatus_app||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),l=(t(78),t(139)),i=t(160),s=t(154),m=t(155),u=t(156),d=t(157),p=t(44),f=t(144),g=t(33),E=t(161),h=t(158),b=t(159),v=t(7),x=t(65),y=t.n(x),O=t(66),k=t.n(O),j=t(67),w=t.n(j),N=t(68),S=t.n(N),D=t(19),B=t(17),T=t.n(B),P=t(145),C=t(141),F=t(143),A=function(e){var a=e.barObject,t=a.first,n=a.second,c=a.third,o=t+n+c,l=100*t/o+"%",i=100*n/o+"%",s=100*c/o+"%";return r.a.createElement("div",{style:{width:"100%",borderRadius:"25px",overflow:"hidden",height:"15px"}},r.a.createElement("div",{style:{display:"inline-block",backgroundColor:"#1976D2",height:"100%",width:l}}),r.a.createElement("div",{style:{display:"inline-block",backgroundColor:"#2196F3",height:"100%",width:i}}),r.a.createElement("div",{style:{display:"inline-block",backgroundColor:"#2196F3",opacity:"50%",height:"100%",width:s}}))},U=Object(l.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),G=function(e){var a=e.classes,t=e.partitionObject,n=t.nodes,c=t.processors,o=t.jobs;return r.a.createElement(C.a,{className:a.root},r.a.createElement(F.a,null,r.a.createElement(p.a,{variant:"h5",component:"h2"},t.name),r.a.createElement(f.a,{style:{marginTop:"3px"}}),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(p.a,{className:a.title,color:"textSecondary",gutterBottom:!0},"".concat(n.active," of ").concat(n.active+n.draining+n.free," Nodes Active (").concat(n.draining," Draining. ").concat(n.free," Free)")),r.a.createElement(A,{barObject:{first:n.active,second:n.draining,third:n.free}})),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(p.a,{className:a.title,color:"textSecondary",gutterBottom:!0},"".concat(c.active," of ").concat(c.total," Processors Active (").concat(c.draining," Draining. ").concat(c.free," Free)")),r.a.createElement(A,{barObject:{first:c.active,second:c.draining,third:c.free}})),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(p.a,{className:a.title,color:"textSecondary",gutterBottom:!0},"".concat(o.running," of ").concat(o.running+o.queued+o.blocked," Jobs Active (").concat(o.queued," Queued. ").concat(o.blocked," Blocked)")),r.a.createElement(A,{barObject:{first:o.running,second:o.queued,third:o.blocked}}))))},W=function(e){var a=e.partitionData,t=U();return r.a.createElement("div",{className:t.root},r.a.createElement(P.a,{container:!0,spacing:3},a.map((function(e,a){return r.a.createElement(P.a,{key:e.name,item:!0,xs:6},r.a.createElement(G,{classes:t,partitionObject:e}))}))))},q=function(e){var a=r.a.useState([]),t=Object(D.a)(a,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){T.a.get("/api/sharedPartitionData").then((function(e){console.log(e),o(e.data)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(W,{partitionData:c})},H=function(e){var a=r.a.useState([]),t=Object(D.a)(a,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){T.a.get("/api/user").then((function(e){return T.a.get("/api/privatePartitionData").then((function(a){var t=a.data.filter((function(a){return-1!==a.users.indexOf(e.data.username)}));console.log(e.data.username),console.log(a),console.log(t),o(t)}))})).catch(console.log)}),[]),r.a.createElement(W,{partitionData:c})},J=t(152),_=t(153),z=t(147),M=t(151),I=t(150),L=t(146),Q=t(148),R=t(149),$=t(70),K=Object(l.a)({table:{minWidth:"100%"},container:{maxHeight:400,marginTop:"20px"}}),V=function(e){var a=K(),t=e.fairshareTableData,n=t.reduce((function(e,a){return e+a.usage}),0);return r.a.createElement(L.a,{component:$.a,variant:"outlined",className:a.container},r.a.createElement(z.a,{stickyHeader:!0,className:a.table,"aria-label":"simple table"},r.a.createElement(Q.a,null,r.a.createElement(R.a,null,r.a.createElement(I.a,null,"User"),r.a.createElement(I.a,{align:"right"},"Usage"),r.a.createElement(I.a,{align:"right"},"Percent Usage"))),r.a.createElement(M.a,null,t.map((function(e,a){return r.a.createElement(R.a,{key:e.user},r.a.createElement(I.a,{component:"th",scope:"row"},e.user),r.a.createElement(I.a,{align:"right"},e.usage),r.a.createElement(I.a,{align:"right"},Math.round(100*e.usage/n)+"%"))})))))},X=Object(l.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),Y=function(e){var a=e.classes,t=e.fairshareObject,n=r.a.useState(!1),c=Object(D.a)(n,2),o=c[0],l=c[1],i=function(){l(!o)},s=t.fairshareTableData;return r.a.createElement(C.a,{className:a.root},r.a.createElement(F.a,null,r.a.createElement(p.a,{variant:"h5",component:"h2"},t.name),r.a.createElement(f.a,{style:{marginTop:"3px"}}),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(p.a,{className:a.title,color:"textSecondary",gutterBottom:!0},"Fairshare of ".concat(t.fairshare)),r.a.createElement(A,{barObject:{first:t.fairshare,second:1-t.fairshare,third:0}})),o?r.a.createElement(V,{fairshareTableData:s}):null),r.a.createElement(J.a,null,o?r.a.createElement(_.a,{color:"primary",size:"small",onClick:function(){return i()}},"Hide Fairshare Usage Breakdown"):r.a.createElement(_.a,{color:"primary",size:"small",onClick:function(){return i()}},"Show Fairshare Usage Breakdown")))},Z=function(e){var a=e.fairshareData,t=X();return r.a.createElement("div",{className:t.root},r.a.createElement(P.a,{container:!0,spacing:3},a.map((function(e,a){return r.a.createElement(P.a,{item:!0,xs:6,key:e.name},r.a.createElement(Y,{classes:t,fairshareObject:e}))}))))},ee=function(e){var a=r.a.useState([]),t=Object(D.a)(a,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){T.a.get("/api/user").then((function(e){return T.a.get("/api/fairshareData").then((function(a){var t=a.data.filter((function(a){return-1!==a.users.indexOf(e.data.username)}));o(t)}))})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(Z,{fairshareData:c})},ae=Object(l.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),te=function(e){var a=e.classes,t=e.storageObject,n=t.block,c=t.file;return r.a.createElement(C.a,{className:a.root},r.a.createElement(F.a,null,r.a.createElement(p.a,{variant:"h5",component:"h2"},t.name),r.a.createElement(p.a,{className:a.title,color:"textSecondary",gutterBottom:!0},"Path: ",t.path),r.a.createElement(f.a,{style:{marginTop:"3px"}}),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(p.a,{className:a.title,color:"textSecondary",gutterBottom:!0},"Using ".concat(n.usage," out of ").concat(n.limit," available")),r.a.createElement(A,{barObject:{first:n.usage,second:n.limit-n.usage,third:0}})),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(p.a,{className:a.title,color:"textSecondary",gutterBottom:!0},"Using ".concat(c.usage," out of ").concat(c.limit," files available")),r.a.createElement(A,{barObject:{first:c.usage,second:c.limit-c.usage,third:0}}))))},ne=function(e){var a=e.storageData,t=ae();return r.a.createElement("div",{className:t.root},r.a.createElement(P.a,{container:!0,spacing:3},a.map((function(e,a){return r.a.createElement(P.a,{item:!0,xs:6,key:e.name},r.a.createElement(te,{classes:t,storageObject:e}))}))))},re=function(e){var a=r.a.useState([]),t=Object(D.a)(a,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){T.a.get("/api/user").then((function(e){return T.a.get("/api/storageData").then((function(a){var t=a.data.filter((function(a){return-1!==a.users.indexOf(e.data.username)}));o(t)}))})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(ne,{storageData:c})},ce=Object(l.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},active:{backgroundColor:e.palette.info.light}}}));function oe(){var e=ce(),a=[{label:"Shared Partitions",icon:r.a.createElement(y.a,null),to:"shared-partitions"},{label:"Private Partitions",icon:r.a.createElement(k.a,null),to:"private-partitions"},{label:"Fairshare",icon:r.a.createElement(w.a,null),to:"fairshare"},{label:"Storage",icon:r.a.createElement(S.a,null),to:"storage"}];return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,null),r.a.createElement(m.a,{position:"fixed",className:e.appBar},r.a.createElement(u.a,null,r.a.createElement(p.a,{variant:"h6",noWrap:!0},"System Status App"))),r.a.createElement(i.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},anchor:"left"},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(f.a,null),r.a.createElement(d.a,null,a.map((function(a,t){return r.a.createElement(E.a,{button:!0,exact:!0,component:g.b,to:a.to,activeClassName:e.active,key:a.label},r.a.createElement(h.a,null,a.icon),r.a.createElement(b.a,{primary:a.label}))})))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/",component:function(){return r.a.createElement(v.a,{to:"/shared-partitions"})}}),r.a.createElement(v.b,{exact:!0,path:"/shared-partitions",component:q}),r.a.createElement(v.b,{exact:!0,path:"/private-partitions",component:H}),r.a.createElement(v.b,{exact:!0,path:"/fairshare",component:ee}),r.a.createElement(v.b,{exact:!0,path:"/storage",component:re}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,{basename:"/pun/dev/hpc_2"},r.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,a,t){e.exports=t(102)},78:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.4565e2d2.chunk.js.map