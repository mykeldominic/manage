(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{271:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),o=a(0),i=a.n(o),l=a(1),c=a.n(l),s=(a(355),a(289),a(290),a(296)),m=a(434),d=a(292),u=a.n(d);var p,g,b,E,f,h,x=[(p="Date",g="Customer",b="Leaves",E="Pickup Branch",f="Status",h="Action",{first:p,second:g,third:b,fourth:E,fifth:f,sixth:h})];function y(e,t,a,n,r,o,i){return{date:e,customername:t,customerphone:a,leaves:n,branch:r,status:o,action:i}}var N=[y("2nd Jun, 2019","Tochi Onuchukwu","0149988767","40 Leaves","Ikeja","Pending","Start Process"),y("2nd Jul, 2019","Alex Iwobi","0149988767","100 Leaves","Ikorodu","Processing","Mark as done"),y("2nd Aug, 2019","Anthony Joshua","0149988767","40 Leaves","Ajah","Pending","Start Process"),y("2nd Jun, 2019","Tochi Onuchukwu","0149988767","40 Leaves","Ikeja","Pending","Start Process")],w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={open:!1},a}return r()(t,e),t.prototype.render=function(){return 0==N.length?i.a.createElement(s.a,null,i.a.createElement("div",{className:"n-container"},i.a.createElement("p",{className:"n-headtext"},"CHEQUE BOOK REQUESTS (0)"),i.a.createElement("p",null,"Handle all cheque book requests from your customers"),i.a.createElement("div",{className:"n-box"},i.a.createElement("img",{src:"/images/safebox.png",className:"n-img"}),i.a.createElement("p",{className:"n-headtext"},"NO CHEQUE BOOK REQUEST"),i.a.createElement("p",{className:"n-center"},"You haven’t received any cheque book request from ",i.a.createElement("br",null),"your customers.")))):i.a.createElement(s.a,null,i.a.createElement("div",{className:"n-container"},i.a.createElement("p",{className:"n-headtext"},"CHEQUE BOOK REQUESTS (",N.length,")"),i.a.createElement("p",null,"Handle all cheque book requests from your customers"),i.a.createElement("div",{className:"n-filterrow"},i.a.createElement(u.a,{className:"n-primarybutton"},"SEND A NOTIFICATION")),i.a.createElement(m.a,{headers:x,rows:N})))},t}(i.a.Component);w.propTypes={data:c.a.object.isRequired,location:c.a.object},t.default=w},289:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),l=a(54),c=a.n(l);a.d(t,"a",function(){return c.a}),a.d(t,"b",function(){return l.navigate});a(291),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},290:function(e,t,a){"use strict";a.d(t,"b",function(){return m}),a.d(t,"a",function(){return d}),a.d(t,"c",function(){return g}),a.d(t,"d",function(){return b}),a.d(t,"e",function(){return E});var n=a(300),r=a.n(n),o=(a(298),a(301)),i=a.n(o),l=a(302),c=a.n(l),s=(a(289),function(){return"undefined"!=typeof window}),m=function(){return s()&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},d=function(){return s()&&window.localStorage.getItem("gatsbyToken")?JSON.parse(window.localStorage.getItem("gatsbyToken")):{}},u=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},p=function(e){return window.localStorage.setItem("gatsbyRefreshToken",JSON.stringify(e))},g=function(){var e=i()(r.a.mark(function e(t){var a,n,o,i,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,"http://173.255.212.65:8080/v1/api/app/auth/admin/login",o={headers:{"client-key":"julklsjdmmaludnm01#"}},i={email:a,password:n},e.prev=4,e.next=7,c.a.post("http://173.255.212.65:8080/v1/api/app/auth/admin/login",i,o);case 7:if(200!==(l=e.sent).status){e.next=14;break}return r=l.data.data.accessToken,window.localStorage.setItem("gatsbyToken",JSON.stringify(r)),p(l.data.data.refreshToken),e.abrupt("return",u(l.data.data.adminUser));case 14:console.log("error");case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),console.log("the error"),console.log(e.t0);case 21:case"end":return e.stop()}var r},e,null,[[4,17]])}));return function(t){return e.apply(this,arguments)}}(),b=function(){return!!m().firstName},E=function(e){u({}),e()}},291:function(e,t,a){var n;e.exports=(n=a(295))&&n.default||n},295:function(e,t,a){"use strict";a.r(t);a(55);var n=a(0),r=a.n(n),o=a(1),i=a.n(o),l=a(85),c=a(4),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},296:function(e,t,a){"use strict";a(55);var n=a(0),r=a.n(n),o=a(1),i=a.n(o),l=a(83),c=a(130),s=a.n(c),m=a(297),d=a.n(m),u=(a(57),a(84)),p=a.n(u),g=a(289),b=a(290),E=a(288),f=a.n(E),h=a(315),x=a.n(h),y=a(307),N=a.n(y),w=a(309),v=a.n(w),k=a(317),S=a.n(k),C=a(316),T=a.n(C),R=a(323),A=a.n(R),O=a(321),j=a.n(O),q=a(322),D=a.n(q),B=a(318),I=a.n(B),P=a(319),L=a.n(P),M=a(324),z=a.n(M),U=a(320),W=a.n(U),J=a(325),H=a.n(J),Q=a(326),F=a.n(Q),K=a(327),V=a.n(K);function X(e){var t=e.classes,a=e.location,n=void 0===a?null:a,o=p()(e,["classes","location"]),i=(n&&n.pathname.replace(/\//g,""),r.a.useState(!0)),l=i[0],c=i[1];return r.a.createElement(x.a,Object.assign({variant:"permanent"},o),r.a.createElement(N.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:t.root},r.a.createElement(v.a,{className:t.lists},r.a.createElement(T.a,null)),r.a.createElement(g.a,{style:{textDecoration:"none",color:"inherit"},to:"/notifications"},r.a.createElement(v.a,{button:!0,dense:!0,className:f()(t.item,t.itemActionable)},r.a.createElement(S.a,null,r.a.createElement(I.a,null)),r.a.createElement(T.a,{className:t.text,primary:"Notifications"}))),r.a.createElement(g.a,{style:{textDecoration:"none",color:"inherit"},to:"/adverts"},r.a.createElement(v.a,{button:!0,dense:!0,className:f()(t.item,t.itemActionable,t.itemActiveItem)},r.a.createElement(S.a,null,r.a.createElement(L.a,null)),r.a.createElement(T.a,{className:t.text,primary:"Adverts"}))),r.a.createElement(v.a,{button:!0,dense:!0,onClick:function(){c(!l)},className:f()(t.item,t.itemActionable)},r.a.createElement(S.a,null,r.a.createElement(W.a,null)),r.a.createElement(T.a,{className:t.text,primary:"Requests"}),l?r.a.createElement(j.a,null):r.a.createElement(D.a,null)),r.a.createElement(A.a,{in:l,timeout:"auto",unmountOnExit:!0},r.a.createElement(N.a,{component:"div",disablePadding:!0},r.a.createElement(g.a,{style:{textDecoration:"none",color:"inherit"},to:"/debit-card-request"},r.a.createElement(v.a,{button:!0,dense:!0,className:f()(t.itemActionable,t.nested)},r.a.createElement(T.a,{className:t.text,primary:"Debit card request"}))),r.a.createElement(g.a,{style:{textDecoration:"none",color:"inherit"},to:"/cheque-book-request"},r.a.createElement(v.a,{button:!0,dense:!0,className:f()(t.itemActionable,t.nested)},r.a.createElement(T.a,{className:t.text,primary:"Cheque book request"}))),r.a.createElement(g.a,{style:{textDecoration:"none",color:"inherit"},to:"/transaction-limit"},r.a.createElement(v.a,{button:!0,dense:!0,className:f()(t.itemActionable,t.nested)},r.a.createElement(T.a,{className:t.text,primary:"Transaction Limit"}))))),r.a.createElement(v.a,{button:!0,dense:!0,onClick:function(){c(!l)},className:f()(t.item,t.itemActionable)},r.a.createElement(S.a,null,r.a.createElement(z.a,null)),r.a.createElement(T.a,{className:t.text,primary:"Request History"}),l?r.a.createElement(j.a,null):r.a.createElement(D.a,null)),r.a.createElement(A.a,{in:l,timeout:"auto",unmountOnExit:!0},r.a.createElement(N.a,{component:"div",disablePadding:!0},r.a.createElement(g.a,{style:{textDecoration:"none",color:"inherit"},to:"/debit-card-request-history"},r.a.createElement(v.a,{button:!0,dense:!0,className:f()(t.itemActionable,t.nested)},r.a.createElement(T.a,{className:t.text,primary:"Debit card request"}))),r.a.createElement(g.a,{style:{textDecoration:"none",color:"inherit"},to:"/cheque-book-request-history"},r.a.createElement(v.a,{button:!0,dense:!0,className:f()(t.itemActionable,t.nested)},r.a.createElement(T.a,{className:t.text,primary:"Cheque book request"}))),r.a.createElement(g.a,{style:{textDecoration:"none",color:"inherit"},to:"/transaction-limit-history"},r.a.createElement(v.a,{button:!0,dense:!0,className:f()(t.itemActionable,t.nested)},r.a.createElement(T.a,{className:t.text,primary:"Transaction Limit"}))))),r.a.createElement(g.a,{style:{textDecoration:"none",color:"inherit"},to:"/admins"},r.a.createElement(v.a,{button:!0,dense:!0,className:f()(t.item,t.itemActionable)},r.a.createElement(S.a,null,r.a.createElement(H.a,null)),r.a.createElement(T.a,{className:t.text,primary:"Admins"}))),r.a.createElement(g.a,{style:{textDecoration:"none",color:"inherit"},to:"/settings"},r.a.createElement(v.a,{button:!0,dense:!0,className:f()(t.item,t.itemActionable)},r.a.createElement(S.a,null,r.a.createElement(F.a,null)),r.a.createElement(T.a,{className:t.text,primary:"Profile Settings"}))),r.a.createElement(v.a,{button:!0,dense:!0,className:f()(t.item,t.itemActionable)},r.a.createElement(S.a,null,r.a.createElement(V.a,null)),r.a.createElement(T.a,{className:t.text},Object(b.d)()?r.a.createElement("a",{href:"/",style:{textDecoration:"none",color:"inherit",width:"100px"},onClick:function(e){e.preventDefault(),Object(b.e)(function(){return Object(g.b)("/app/login")})}},"Logout"):null))))}X.propTypes={classes:i.a.object.isRequired,location:i.a.object};var Y=Object(l.withStyles)(function(e){return{categoryHeader:{paddingTop:16,paddingBottom:16},categoryHeaderPrimary:{color:e.palette.common.white},lists:{marginTop:50},nested:{paddingTop:12,paddingBottom:12,paddingLeft:55},item:{marginTop:15,marginBottom:15,paddingTop:12,paddingBottom:12,paddingLeft:20,color:"#5E5E5E"},text:{fontSize:"0.9em"},itemCategory:{backgroundColor:"#fff",boxShadow:"0 -1px 0 #404854 inset",paddingTop:12,paddingBottom:12,marginTop:0,marginBottom:0},itemActionable:{"&:hover":{backgroundColor:"rgba(179, 140, 10, 0.1)"}},itemActiveItem:{color:"#B38C0A",backgroundColor:"rgba(179, 140, 10, 0.1)",fontWeight:600,paddingLeft:17,borderLeft:"3px solid #B38C0A"},decoration:{textDecoration:"none",color:"#5E5E5E"},textDense:{}}})(X),G=(a(328),a(304)),Z=a.n(G),$=a(331),_=a.n($),ee=a(293),te=a.n(ee),ae=a(305),ne=a.n(ae),re=a(329),oe=a.n(re),ie=a(330),le=a.n(ie),ce=a(310),se=a.n(ce),me=a(303),de=a.n(me);function ue(e){var t=e.classes,a=e.onDrawerToggle;e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{color:"primary",position:"sticky",className:t.appBar,elevation:0},r.a.createElement(se.a,null,r.a.createElement(te.a,{container:!0,spacing:8,alignItems:"center"},r.a.createElement(d.a,{smUp:!0},r.a.createElement(te.a,{item:!0},r.a.createElement(ne.a,{color:"inherit","aria-label":"Open drawer",onClick:a,className:t.menuButton},r.a.createElement(oe.a,null)))),r.a.createElement(te.a,{item:!0,xs:!0},r.a.createElement("img",{src:"/images/logo.png"})),r.a.createElement(te.a,{item:!0},r.a.createElement(de.a,{title:"Alerts • No alters"},r.a.createElement(ne.a,{color:"inherit"},r.a.createElement(le.a,null)))),r.a.createElement(te.a,{item:!0},r.a.createElement(te.a,{container:!0,alignItems:"center",spacing:16,direction:"row"},r.a.createElement(_.a,{className:t.avatar,src:"/images/user.png"}),r.a.createElement(te.a,{item:!0,className:t.link},Object(b.b)().firstName)))))))}ue.propTypes={classes:i.a.object.isRequired,onDrawerToggle:i.a.func.isRequired,title:i.a.string.isRequired};var pe,ge,be,Ee=Object(l.withStyles)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1,padding:4,background:"#fff",borderTop:"3px solid #58966A",borderBottom:"1.5px solid #EDEDED"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing.unit},iconButtonAvatar:{padding:4},link:{color:"#131212","&:hover":{color:"#131212"},fontWeight:500},button:{borderColor:"#131212"},avatar:{img:{margin:0}}}})(ue),fe=Object(l.createMuiTheme)({typography:{useNextVariants:!0,h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},shape:{borderRadius:8}});fe=Object.assign({},fe,{overrides:{MuiDrawer:{paper:{backgroundColor:"#fff"}},MuiButton:{label:{textTransform:"initial"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:fe.spacing.unit},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:fe.palette.common.white}},MuiTab:{root:(pe={textTransform:"initial",margin:"0 16px",minWidth:0},pe[fe.breakpoints.up("md")]={minWidth:0},pe),labelContainer:(ge={padding:0},ge[fe.breakpoints.up("md")]={padding:0},ge)},MuiIconButton:{root:{padding:fe.spacing.unit}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:fe.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}},props:{MuiTab:{disableRipple:!0}},mixins:Object.assign({},fe.mixins,{toolbar:{minHeight:48}})});var he=256,xe={root:{display:"flex",minHeight:"100vh"},drawer:(be={},be[fe.breakpoints.up("sm")]={width:he,flexShrink:0},be),appContent:{flex:1,display:"flex",flexDirection:"column"},mainContent:{flex:1,padding:"0px",backgroundColor:"#E8F9ED"}};function ye(e){var t=e.location,a=(e.title,e.children),o=e.classes,i=Object(n.useState)(!1),c=i[0],m=i[1];return r.a.createElement(l.MuiThemeProvider,{theme:fe},r.a.createElement(s.a,null),r.a.createElement(Ee,{onDrawerToggle:function(){return m(!c)}}),r.a.createElement("div",{className:o.root},r.a.createElement("nav",{className:o.drawer},r.a.createElement(d.a,{smUp:!0,implementation:"js"},r.a.createElement(Y,{PaperProps:{style:{width:he}},variant:"temporary",open:c,onClose:function(){return m(!c)}})),r.a.createElement(d.a,{xsDown:!0,implementation:"css"},r.a.createElement(Y,{PaperProps:{style:{width:he}},location:t}))),r.a.createElement("div",{className:o.appContent},r.a.createElement("main",{className:o.mainContent},a))))}ye.propTypes={classes:i.a.object.isRequired,location:i.a.object.isRequired,title:i.a.string.isRequired,children:i.a.object};t.a=Object(l.withStyles)(xe)(ye)},434:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(83),i=(a(288),a(358)),l=a.n(i),c=a(360),s=a.n(c),m=a(356),d=a.n(m),u=a(359),p=a.n(u),g=a(357),b=a.n(g),E=a(306),f=a.n(E),h=a(292),x=a.n(h),y=Object(o.withStyles)(function(e){return{head:{backgroundColor:"#D5E4D9",color:"#414943",fontWeight:"bold",fontSize:"0.9em"},body:{fontSize:"0.95em"}}})(d.a),N=Object(o.withStyles)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"#fff"}}}})(b.a);t.a=Object(o.withStyles)(function(e){return{root:{width:"100%",overflowX:"auto",boxShadow:"0px 2px 8px rgba(0, 0, 0, 0.05)",borderRadius:"3px"},headRow:{height:"0px"},headRowCell:{padding:"10px 15px 10px 15px"},headPadding:{padding:"10px 0px 10px 0px"},padding:{padding:"0px"},tableCell:{padding:"20px 15px 20px 15px"},tableRow:{borderBottom:"0.75px solid rgba(224, 224, 224, 0.5)"},flex:{display:"grid",gridTemplateColumns:"repeat(2, auto)",borderBottom:"#fff"},initials:{padding:"10px",color:"#B38C0A",background:"rgba(179, 140, 10, 0.2)",letterSpacing:"0.02em",marginRight:"10px",borderRadius:"100%",width:"fit-content"},pendingstatus:{background:"rgba(179, 140, 10, 0.08)",borderRadius:"100px",padding:"8px 20px",width:"fit-content",color:"#B38C0A",fontWeight:"bold",fontSize:"0.9em",letterSpacing:"0.02em"},processingstatus:{background:"rgba(39, 174, 96, 0.08)",borderRadius:"100px",padding:"8px 20px",width:"fit-content",color:"#27AE60",fontWeight:"bold",fontSize:"0.9em",letterSpacing:"0.02em"},startbutton:{border:"1.5px solid #427A52",borderRadius:"3px",padding:"6px 20px",color:"#427A52",fontWeight:"bold",fontSize:"0.9em",background:"#fff",letterSpacing:"0.02em","&:hover":{opacity:"0.9"}},markbutton:{border:"1.5px solid #427A52",borderRadius:"3px",padding:"6px 20px",color:"#fff",fontWeight:"bold",fontSize:"0.9em",background:"#427A52",letterSpacing:"0.02em","&:hover":{opacity:"0.9"}}}})(function(e){e.data;var t=e.classes,a=e.rows,n=e.headers;return console.log(n),r.a.createElement(f.a,{className:t.root},r.a.createElement(l.a,{className:t.table},r.a.createElement(p.a,null,n.map(function(e){return r.a.createElement(b.a,{className:t.headRow},r.a.createElement(y,{className:t.headRowCell},e.first),r.a.createElement(y,{className:t.headPadding},e.second),r.a.createElement(y,{className:t.headRowCell},e.third),r.a.createElement(y,{className:t.headRowCell},e.fourth),r.a.createElement(y,{className:t.headRowCell},e.fifth),r.a.createElement(y,{className:t.headRowCell},e.sixth))})),r.a.createElement(s.a,null,a.map(function(e){return r.a.createElement(N,{key:e.date,className:t.tableRow},r.a.createElement(y,{className:t.tableCell,component:"th",scope:"row"},e.date),r.a.createElement(y,{className:t.padding},r.a.createElement("p",{style:{padding:"0",margin:"0"}},e.customername),r.a.createElement("p",{style:{padding:"0",margin:"0",marginTop:"7px",fontSize:"0.9em",color:"#727272"}},e.customerphone)),r.a.createElement(y,{className:t.tableCell},e.card,e.leaves),r.a.createElement(y,{className:t.tableCell},e.branch),r.a.createElement(y,{className:t.tableCell},r.a.createElement("div",{className:t.pendingstatus},e.status)),r.a.createElement(y,{className:t.tableCell},r.a.createElement(x.a,{className:t.startbutton},e.action)))}))))})}}]);
//# sourceMappingURL=component---src-pages-cheque-book-request-js-fbf1e966ffadd2b45b2a.js.map