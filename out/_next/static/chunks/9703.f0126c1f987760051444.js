(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9703],{21673:function(t,e,o){"use strict";var r=o(95318),n=o(20862);e.Z=void 0;var i=n(o(67294)),s=(0,r(o(2108)).default)(i.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");e.Z=s},29594:function(t,e,o){"use strict";var r=o(95318),n=o(20862);e.Z=void 0;var i=n(o(67294)),s=(0,r(o(2108)).default)(i.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");e.Z=s},45272:function(t,e,o){"use strict";var r=o(85893),n=o(26265),i=o(38347),s=(o(67294),o(45697)),l=o.n(s),a=o(17857),c=o(86010),d=o(28889),x=o(32427),h=o(14490),m=o(16657),p=o(89934);function f(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?f(Object(o),!0).forEach((function(e){(0,n.Z)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var j=(0,x.Z)((function(t){return{containerRoot:{display:"flex",alignItems:"center"},containerRootCenter:{justifyContent:"center",flexDirection:"column",paddingTop:16,paddingBottom:16},contentRoot:{position:"relative"},contentRootCenter:{marginLeft:0,marginTop:13,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",textAlign:"center"},titleRoot:{marginBottom:2}}})),y=function(t){var e=t.icon,o=t.number,s=t.numberProps,l=t.label,x=t.labelProps,f=t.counterProps,y=t.color,g=t.gradientDirection,b=t.alignCenter,Z=(0,i.Z)(t,["icon","number","numberProps","label","labelProps","counterProps","color","gradientDirection","alignCenter"]),v=j();return(0,r.jsx)(h.Z,u(u({gradientDirection:g},Z),{},{children:(0,r.jsx)(m.Z,{children:(0,r.jsxs)(d.Z,{className:(0,c.Z)(v.containerRoot,"container",(0,n.Z)({},v.containerRootCenter,b)),color:y,children:["string"===typeof e?(0,r.jsx)(p.Z,{src:e,alt:l}):e,(0,r.jsxs)(d.Z,{ml:{xs:3,xl:5},className:(0,c.Z)(v.contentRoot,"content-wrapper",(0,n.Z)({},v.contentRootCenter,b)),children:[(0,r.jsx)(d.Z,u(u({component:"h3",fontSize:{xs:20,xl:24},className:(0,c.Z)(v.titleRoot,"title")},s),{},{children:"string"===typeof o?o:(0,r.jsx)(a.ZP,u({start:0,end:o,useEasing:!1,separator:","},f))})),(0,r.jsx)(d.Z,u(u({component:"p"},x),{},{children:l}))]})]})})}))};y.prototype={icon:l().oneOfType([l().string,l().element]),number:l().oneOfType([l().string,l().number]),numberProps:l().object,label:l().string,labelProps:l().object,counterProps:l().object,color:l().string,gradientDirection:l().string,alignCenter:l().bool},y.defaultProps={color:"common.white",gradientDirection:"180deg",alignCenter:!1},e.Z=y},78394:function(t,e,o){"use strict";o.d(e,{Z:function(){return m}});var r=o(85893),n=(o(67294),o(32427)),i=o(5239),s=o(15185),l=o(14117),a=o(78026),c=(0,o(94111).Z)((function(t){return{tooltip:{position:"relative",borderRadius:6,padding:"4px 8px",backgroundColor:"#8d46ef",color:t.palette.common.white}}})),d=function(t){var e=t.revenueHistory,o=c();return(0,r.jsx)(a.h2,{width:"100%",height:56,children:(0,r.jsxs)(a.vz,{data:e,margin:{top:0,right:0,left:0,bottom:0},children:[(0,r.jsx)(a.u,{labelStyle:{color:"black"},cursor:!1,content:function(t){return t.payload[0]?(0,r.jsxs)("div",{className:o.tooltip,children:[(0,r.jsxs)("div",{children:["Revenue : $",t.payload[0].payload.revenue]}),(0,r.jsxs)("div",{children:["Profit : $",t.payload[0].payload.profit]})]}):null}}),(0,r.jsx)(a.Kc,{dataKey:"month",hide:!0}),(0,r.jsx)(a.$Q,{dataKey:"revenue",stackId:"a",fill:"#6200EE",barSize:6}),(0,r.jsx)(a.$Q,{dataKey:"profit",stackId:"a",fill:"#00B3A6",barSize:6})]})})},x=o(15467),h=(0,n.Z)((function(t){return{cardContentRoot:{"& .MuiGrid-container":{alignItems:"center"}},cardContentTitle:{marginBottom:4},subTitleRoot:{fontSize:12,marginBottom:0,color:t.palette.text.secondary}}})),m=function(){var t=h(),e=x.XE.revenueHistory;return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{titleProps:{variant:"h4",component:"div"},title:"Total Revenue"}),(0,r.jsx)(s.Z,{className:t.cardContentRoot,title:"$216,759",titleProps:{variant:"h1",component:"div",className:t.cardContentTitle},subTitle:"YTD Revenue",subTitleProps:{variant:"inherit",component:"div",className:t.subTitleRoot},reverseDir:!0,children:(0,r.jsx)(d,{revenueHistory:e})})]})}},99703:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return F}});var r=o(85893),n=(o(67294),o(41749)),i=o(28889),s=o(32427),l=o(67757),a=o(78026),c=o(14490),d=o(15185),x=function(t){var e=t.data;return(0,r.jsx)(a.h2,{width:"100%",height:75,children:(0,r.jsxs)(a.wW,{data:e,margin:{top:0,right:0,left:0,bottom:0},children:[(0,r.jsx)(a.u,{labelStyle:{color:"black"},cursor:!1}),(0,r.jsx)(a.Kc,{dataKey:"month",hide:!0}),(0,r.jsx)(a.x1,{type:"monotone",dataKey:"traffic",strokeWidth:3,stroke:"#8DCD03",dot:!1})]})})},h=o(15467),m=(0,s.Z)((function(t){return{cardRoot:{display:"flex",flexDirection:"column",height:"100%"},cardContentRoot:{display:"flex",flexDirection:"column",justifyContent:"center",flex:1,"& .MuiGrid-container":{alignItems:"center"}},subTitleRoot:{fontSize:14,marginBottom:0,color:t.palette.text.secondary}}})),p=function(){var t=m();return(0,r.jsx)(c.Z,{className:t.cardRoot,children:(0,r.jsx)(d.Z,{className:t.cardContentRoot,columnSizes:[5,7],title:(0,r.jsx)(i.Z,{component:"div",fontSize:22,mb:1,fontWeight:700,lineHeight:1,children:"0.7%"}),subTitle:"Traffic raise",subTitleProps:{component:"div",className:t.subTitleRoot},reverseDir:!0,children:(0,r.jsx)(i.Z,{mt:5,children:(0,r.jsx)(x,{data:h.qI.traffics})})})})},f=o(45272),u=o(89934),j=o(26841),y=o(67033),g=o(37417),b=o(63766),Z=o(29594),v=o(21673),C=o(5239),k=(0,s.Z)((function(){return{headerRoot:{paddingBottom:8}}})),T=function(t){var e=t.growth,o=t.desc,n=t.children,s=k();return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(C.Z,{className:s.headerRoot,title:(0,r.jsxs)(i.Z,{component:"h2",color:e>0?"#8DCD03":"#E00930",children:[e,"% ",e>0?(0,r.jsx)(Z.Z,{fontSize:"small"}):(0,r.jsx)(v.Z,{fontSize:"small"})]}),subTitle:(0,r.jsx)(i.Z,{component:"p",mb:0,color:"text.secondary",fontSize:12,children:o})}),n]})},R=o(78394),O=o(14117),w=function(t){var e=t.revenueHistory;return(0,r.jsx)(a.h2,{width:"100%",height:45,children:(0,r.jsxs)(a.vz,{data:e,margin:{top:0,right:0,left:0,bottom:0},children:[(0,r.jsx)(a.u,{labelStyle:{color:"black"},cursor:!1}),(0,r.jsx)(a.Kc,{dataKey:"month",hide:!0}),(0,r.jsx)(a.$Q,{dataKey:"amt",stackId:"a",fill:"#6200EE",barSize:6})]})})},S=o(43340),D=(0,s.Z)((function(t){return{cardContentRoot:{"& .MuiGrid-container":{alignItems:"center"}},titleRoot:{fontSize:10,textTransform:"uppercase",fontWeight:"normal",color:t.palette.text.secondary},cardContentTitle:{marginBottom:4},subTitleRoot:{fontSize:14,marginBottom:0,color:t.palette.text.secondary}}})),I=function(){var t=D(),e=h.qI.queries;return(0,r.jsxs)(O.Z,{children:[(0,r.jsx)(C.Z,{titleProps:{variant:"inherit",component:"h3",className:t.titleRoot},title:"Queries",children:(0,r.jsxs)(i.Z,{display:"flex",alignItems:"center",fontSize:14,color:"#0795F4",children:[(0,r.jsx)(i.Z,{component:"span",children:"67%"}),(0,r.jsx)(S.Z,{fontSize:"small"})]})}),(0,r.jsx)(d.Z,{className:t.cardContentRoot,title:"43,856",titleProps:{variant:"h1",component:"div",className:t.cardContentTitle},subTitle:"Mail, Website and Call",subTitleProps:{variant:"inherit",component:"div",className:t.subTitleRoot},reverseDir:!0,children:(0,r.jsx)(w,{revenueHistory:e})})]})},K=function(t){var e=t.data;return(0,r.jsx)(a.h2,{width:"100%",height:80,gradientTransform:"rotate(180)",children:(0,r.jsxs)(a.TH,{data:e,margin:{top:0,right:0,left:0,bottom:0},children:[(0,r.jsx)(a.Kc,{dataKey:"month",hide:!0}),(0,r.jsx)(a.u,{labelStyle:{color:"black"},cursor:!1}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"incomeColor",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"22.02%",stopColor:"#6200EE",stopOpacity:1}),(0,r.jsx)("stop",{offset:"137.31%",stopColor:"#B819D2",stopOpacity:1})]})}),(0,r.jsx)(a.uN,{dataKey:"income",strokeWidth:0,stackId:"2",stroke:"#4D95F3",fill:"url(#incomeColor)",fillOpacity:1})]})})},P=(0,s.Z)((function(t){return{cardRoot:{display:"flex",flexDirection:"column"},cardContentRoot:{marginTop:"auto","& .MuiGrid-container":{alignItems:"center"}},titleRoot:{fontSize:10,textTransform:"uppercase",fontWeight:"normal",color:t.palette.text.secondary},cardContentTitle:{marginBottom:4},subTitleRoot:{fontSize:14,marginBottom:0,color:t.palette.text.secondary}}})),E=function(){var t=P(),e=h.qI.income;return(0,r.jsxs)(O.Z,{className:t.cardRoot,children:[(0,r.jsx)(C.Z,{titleProps:{variant:"inherit",component:"h3",className:t.titleRoot},title:"INCOME LAST YEAR",children:(0,r.jsxs)(i.Z,{display:"flex",alignItems:"center",fontSize:14,color:"#0795F4",children:[(0,r.jsx)(i.Z,{component:"span",children:"67%"}),(0,r.jsx)(S.Z,{fontSize:"small"})]})}),(0,r.jsx)(d.Z,{className:t.cardContentRoot,title:"$23,658",titleProps:{variant:"h1",component:"div",className:t.cardContentTitle},subTitle:"Total income",subTitleProps:{variant:"inherit",component:"div",className:t.subTitleRoot},reverseDir:!0,columnSizes:[5,7],children:(0,r.jsx)(i.Z,{ml:-8,mb:-6,mr:-6,mt:-1,children:(0,r.jsx)(K,{data:e})})})]})},N=o(75322),z=(0,s.Z)((function(){return{iconWrapper:{display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid",borderRadius:"50%",height:66,minWidth:66,width:66}}})),W=[{label:"App",link:"/app"},{label:"Metrics",link:"/app/metrics"},{label:"Modern",isActive:!0}],F=function(){var t=z(),e=h.qI.eCommerceData,o=h.qI.dataMetrics,s=h.qI.orders,c=h.qI.activeUsers,d=h.qI.extraRevenue,x=h.qI.trafficRaise,m=h.qI.revenueGrowth,Z=h.qI.trafficData;return(0,r.jsx)(N.Z,{heading:"Metrics Modern",breadcrumbs:W,children:(0,r.jsxs)(l.Z,{children:[e.map((function(e,o){return(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(f.Z,{icon:(0,r.jsx)(i.Z,{className:t.iconWrapper,style:{borderColor:e.color+"88"},children:(0,r.jsx)(u.Z,{src:e.imageIcon,alt:"..."})}),number:e.title,numberProps:{color:"text.primary",fontSize:{xs:20,xl:22},fontWeight:"bold"},label:e.subTitle,labelProps:{color:"text.secondary",fontSize:12,fontWeight:"normal"}})},o)})),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:3,children:(0,r.jsx)(T,{growth:84,desc:"Increment in Active users",children:(0,r.jsx)(a.h2,{width:"100%",height:75,children:(0,r.jsxs)(a.TH,{data:c,margin:{top:0,right:0,left:0,bottom:0},gradientTransform:"rotate(180)",children:[(0,r.jsx)(a.Kc,{dataKey:"month",hide:!0}),(0,r.jsx)(a.u,{labelStyle:{color:"black"},cursor:!1}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"color1",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"43.68%",stopColor:"#6200EE",stopOpacity:1}),(0,r.jsx)("stop",{offset:"126.94%",stopColor:"#B819D2",stopOpacity:1})]})}),(0,r.jsx)(a.uN,{dataKey:"users",type:"monotone",strokeWidth:0,stackId:"2",stroke:"#4D95F3",fill:"url(#color1)",fillOpacity:1})]})})})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:3,children:(0,r.jsx)(T,{growth:-38,desc:"Less orders from past year",children:(0,r.jsx)(a.h2,{width:"100%",height:75,children:(0,r.jsxs)(a.TH,{data:s,margin:{top:0,right:0,left:0,bottom:0},children:[(0,r.jsx)(a.Kc,{dataKey:"name",hide:!0}),(0,r.jsx)(a.u,{labelStyle:{color:"black"},cursor:!1}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"color2",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,r.jsx)("stop",{offset:"5%",stopColor:"#00C2B7",stopOpacity:1}),(0,r.jsx)("stop",{offset:"95%",stopColor:"#3D39FB",stopOpacity:1})]})}),(0,r.jsx)(a.uN,{dataKey:"pv",strokeWidth:0,stackId:"2",stroke:"#4D95F3",fill:"url(#color2)",fillOpacity:1})]})})})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:3,children:(0,r.jsx)(T,{growth:38,desc:"Extra revenue from last year",children:(0,r.jsx)(a.h2,{width:"100%",height:75,children:(0,r.jsxs)(a.TH,{data:d,margin:{top:0,right:0,left:0,bottom:0},children:[(0,r.jsx)(a.Kc,{dataKey:"month",hide:!0}),(0,r.jsx)(a.u,{labelStyle:{color:"black"},cursor:!1}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"color3",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,r.jsx)("stop",{offset:"10%",stopColor:"#EC1809",stopOpacity:1}),(0,r.jsx)("stop",{offset:"90%",stopColor:"#FF9F0E",stopOpacity:1})]})}),(0,r.jsx)(a.uN,{dataKey:"amt",type:"monotone",strokeWidth:0,stackId:"2",stroke:"#4D95F3",fill:"url(#color3)",fillOpacity:1})]})})})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:3,children:(0,r.jsx)(T,{growth:44,desc:"Traffic raise from past year",children:(0,r.jsx)(a.h2,{width:"100%",height:75,children:(0,r.jsxs)(a.wW,{data:x,margin:{top:5,right:5,left:5,bottom:5},children:[(0,r.jsx)(a.Kc,{dataKey:"month",hide:!0}),(0,r.jsx)(a.u,{labelStyle:{color:"black"},cursor:!1}),(0,r.jsx)(a.x1,{dataKey:"traffic",strokeWidth:2,stroke:"#6200EE",dot:{stroke:"#6200EE",strokeWidth:2}})]})})})}),o.map((function(e,o){return(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:4,xl:2,children:(0,r.jsx)(f.Z,{backgroundColor:e.bgColor,icon:(0,r.jsx)(i.Z,{className:t.iconWrapper,style:{borderColor:e.color,backgroundColor:"#ffffff"},children:(0,r.jsx)(u.Z,{src:e.imageIcon,alt:"..."})}),number:e.title,numberProps:{fontSize:22,fontWeight:"bold"},label:e.desc,labelProps:{variant:"span",fontSize:12,color:e.bgColor?e.color+"99":"text.hint"},color:e.color,alignCenter:!0})},o)})),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:4,xl:2,children:(0,r.jsx)(T,{growth:92,desc:"Growth in revenue",children:(0,r.jsx)(a.h2,{width:"100%",height:130,children:(0,r.jsxs)(a.TH,{data:m,margin:{top:2,right:0,left:0,bottom:0},children:[(0,r.jsx)(a.Kc,{dataKey:"month",hide:!0}),(0,r.jsx)(a.u,{labelStyle:{color:"black"},cursor:!1}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"color5",x1:"0",y1:"0",x2:"1",y2:"0",gradientTransform:"rotate(90)",children:[(0,r.jsx)("stop",{offset:"5%",stopColor:"#1CACCE44",stopOpacity:1}),(0,r.jsx)("stop",{offset:"95%",stopColor:"#1CACCE01",stopOpacity:1})]})}),(0,r.jsx)(a.uN,{dataKey:"revenue",type:"monotone",strokeWidth:2,stackId:"2",stroke:"#1CACCE",fill:"url(#color5)",fillOpacity:1})]})})})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:4,xl:2,children:(0,r.jsx)(T,{growth:"07",desc:"Traffic raise",children:(0,r.jsx)(a.h2,{width:"100%",height:130,children:(0,r.jsxs)(a.TH,{data:Z,margin:{top:2,right:0,left:0,bottom:0},children:[(0,r.jsx)(a.Kc,{dataKey:"month",hide:!0}),(0,r.jsx)(a.u,{labelStyle:{color:"black"},cursor:!1}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"color6",x1:"0",y1:"0",x2:"1",y2:"0",gradientTransform:"rotate(90)",children:[(0,r.jsx)("stop",{offset:"10%",stopColor:"#fde6e9",stopOpacity:1}),(0,r.jsx)("stop",{offset:"90%",stopColor:"#FFFFFF",stopOpacity:1})]})}),(0,r.jsx)(a.uN,{dataKey:"traffic",type:"monotone",strokeWidth:2,stackId:"2",stroke:"#E36978",fill:"url(#color6)",fillOpacity:1})]})})})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:4,xl:2,children:(0,r.jsx)(T,{growth:-38,desc:"Order Reduced",children:(0,r.jsx)(a.h2,{width:"100%",height:130,children:(0,r.jsxs)(a.TH,{data:d,margin:{top:2,right:0,left:0,bottom:0},children:[(0,r.jsx)(a.Kc,{dataKey:"month",hide:!0}),(0,r.jsx)(a.u,{labelStyle:{color:"black"},cursor:!1}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"color8",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,r.jsx)("stop",{offset:"10%",stopColor:"#EC1809",stopOpacity:1}),(0,r.jsx)("stop",{offset:"90%",stopColor:"#FF9F0E",stopOpacity:1})]})}),(0,r.jsx)(a.uN,{dataKey:"amt",type:"monotone",strokeWidth:0,stackId:"2",stroke:"#4D95F3",fill:"url(#color8)",fillOpacity:1})]})})})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(j.Z,{})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(y.Z,{})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(g.Z,{})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,md:3,children:(0,r.jsx)(b.Z,{})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:4,children:(0,r.jsx)(p,{})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:4,children:(0,r.jsx)(E,{})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:4,children:(0,r.jsx)(I,{})}),(0,r.jsx)(n.Z,{item:!0,xs:12,sm:6,lg:4,children:(0,r.jsx)(R.Z,{})})]})})}}}]);