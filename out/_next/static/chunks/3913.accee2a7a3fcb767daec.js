(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3913],{33664:function(t,e,r){"use strict";var n=r(85893),o=r(38347),a=r(26265),i=(r(67294),r(14117)),c=r(15185),l=r(28889),s=r(84618),d=r(15527),u=r(32427),p=r(22318);function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=(0,u.Z)((function(t){return{advCard:{borderTop:function(t){return"solid 4px ".concat(t.color)}},titleRoot:(0,a.Z)({marginBottom:10},t.breakpoints.up("lg"),{fontSize:24}),subTitleRoot:{fontSize:16,color:t.palette.common.black,letterSpacing:.15},dots:{height:8,width:8,borderRadius:"50%",boxShadow:"0px 2px 4px rgba(68, 68, 79, 0.15)"},iconSm:{fontSize:18}}}));e.Z=function(t){var e=t.title,r=t.subTitle,a=t.growth,u=t.color,x=t.labels,m=t.children,b=(0,o.Z)(t,["title","subTitle","growth","color","labels","children"]),g=f({color:u});return(0,n.jsx)(i.Z,h(h({className:g.advCard},b),{},{children:(0,n.jsxs)(c.Z,{alignCenter:!0,children:[m,(0,n.jsxs)(l.Z,{display:"flex",mt:2,children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(p.Z,{component:"div",variant:"h1",className:g.titleRoot,style:{color:u},children:e}),(0,n.jsx)(l.Z,{className:g.subTitleRoot,children:r})]}),(0,n.jsxs)(l.Z,{ml:"auto",children:[(0,n.jsxs)(l.Z,{display:"flex",alignItems:"center",justifyContent:"flex-end",color:a>0?"green":"red",children:[(0,n.jsxs)(l.Z,{children:[Math.abs(a),"%"]}),(0,n.jsx)(l.Z,{ml:1,children:a>0?(0,n.jsx)(s.Z,{className:g.iconSm}):(0,n.jsx)(d.Z,{className:g.iconSm})})]}),x&&x.length>0&&(0,n.jsx)(l.Z,{mt:1,display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center",children:x.map((function(t,e){return(0,n.jsxs)(l.Z,{ml:2,mb:1,display:"flex",alignItems:"center",children:[(0,n.jsx)(l.Z,{mr:2,component:"span",className:g.dots,style:{backgroundColor:t.color}}),(0,n.jsx)(l.Z,{component:"span",fontSize:12,color:"common.dark",children:t.name})]},e)}))})]})]})]})}))}},57948:function(t,e,r){"use strict";r.d(e,{nB:function(){return v},dx:function(){return k},Vr:function(){return b},mr:function(){return x}});var n=r(85893),o=r(38347),a=r(26265),i=(r(67294),r(41120)),c=r(28889),l=r(22318),s=r(86010);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=(0,i.Z)((function(t){return{pageHeaderRoot:(0,a.Z)({display:"flex",flexDirection:"column"},t.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,a.Z)({},t.breakpoints.down("xs"),{marginBottom:10})}})),x=function(t){var e=t.heading,r=t.breadcrumbComponent,a=t.children,i=(0,o.Z)(t,["heading","breadcrumbComponent","children"]),d=p();return(0,n.jsxs)(c.Z,u(u({className:(0,s.Z)(d.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},i),{},{children:[(0,n.jsx)(l.Z,{component:"div",variant:"h1",className:(0,s.Z)(d.titleRoot,"title"),children:e}),(0,n.jsx)(c.Z,{ml:{sm:"auto"},children:r}),a]}))},h=r(10770),f=r(41664),m=(0,i.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),b=function(t){var e=t.items,r=((0,o.Z)(t,["items"]),m());return(0,n.jsx)(h.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:e.map((function(t,e){return t.isActive?(0,n.jsx)(l.Z,{className:r.textSm,color:"textPrimary",children:t.label},e):(0,n.jsx)(f.default,{href:t.link||"/",children:(0,n.jsx)("a",{className:(0,s.Z)(r.textSm,r.linkBlock),children:t.label})},e)}))})},g=r(41749),j=r(14490),y=r(67757),Z=r(75322),v=function(t){var e=t.SourceCodeComponent,r=t.SettingsComponent,o=t.children;return(0,n.jsx)(Z.Z,{children:(0,n.jsxs)(y.Z,{children:[(0,n.jsxs)(g.Z,{item:!0,xs:12,md:7,children:[(0,n.jsx)(x,{heading:"Preview"}),(0,n.jsx)(c.Z,{mb:8,children:o}),(0,n.jsx)(j.Z,{children:e})]}),(0,n.jsx)(g.Z,{item:!0,xs:12,md:5,children:r})]})})},C=r(42890),k=function(t){var e=t.pageTitle,r=t.menus,o=t.children,a=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:e,isActive:!0}];return(0,n.jsx)(C.Z,{pageTitle:e,breadcrumbs:a,menus:r,children:o})}},42890:function(t,e,r){"use strict";var n=r(85893),o=r(26265),a=(r(67294),r(28889)),i=r(82598),c=r(22318),l=r(62822),s=r(50998),d=r(95757),u=r(41120),p=r(75322),x=(0,u.Z)((function(t){var e;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(e={width:"100%"},(0,o.Z)(e,t.breakpoints.up("sm"),{paddingRight:t.typography.pxToRem(30),width:"calc(100% - ".concat(t.typography.pxToRem(175),")")}),(0,o.Z)(e,t.breakpoints.up("lg"),{paddingRight:t.typography.pxToRem(54)}),e),contentSidebar:{width:t.typography.pxToRem(175),height:"calc(100vh - ".concat(t.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));e.Z=function(t){var e=t.pageTitle,r=t.menus,o=t.breadcrumbs,u=t.children,h=x();return(0,n.jsx)(p.Z,{heading:e,breadcrumbs:o,children:(0,n.jsxs)(a.Z,{className:h.root,children:[(0,n.jsx)(a.Z,{className:h.contentArea,children:u}),(0,n.jsx)(i.Z,{xsDown:!0,children:(0,n.jsxs)(a.Z,{className:h.contentSidebar,children:[(0,n.jsx)(c.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,n.jsx)(l.Z,{children:r.map((function(t,e){return(0,n.jsx)(s.Z,{dense:!0,button:!0,component:"a",href:"#".concat(t.link),children:(0,n.jsx)(d.Z,{primary:t.label})},e)}))})]})})]})})}},75322:function(t,e,r){"use strict";var n=r(26265),o=r(85893),a=(r(67294),r(28889)),i=r(57948),c=r(82285),l=r(32427),s=r(86010);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=(0,l.Z)((function(t){return{pageFull:{width:"100%",height:"100%",paddingBottom:"70px"}}}));e.Z=function(t){var e=t.heading,r=t.breadcrumbs,n=t.children,l=t.className,d=t.restProps,x=p();return(0,o.jsx)(c.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,o.jsxs)(a.Z,u(u({className:(0,s.Z)(x.pageFull,l)},d),{},{children:[(e||r)&&(0,o.jsx)(i.mr,{heading:e,breadcrumbComponent:r&&(0,o.jsx)(i.Vr,{items:r})}),n]}))})}},69062:function(t,e,r){"use strict";r.d(e,{Z:function(){return m}});var n=r(85893),o=(r(67294),r(14490)),a=r(5239),i=r(16657),c=r(78026),l=r(28889),s=r(32427),d=(0,s.Z)((function(t){return{customTooltip:{color:t.palette.text.primary,backgroundColor:t.palette.background.paper,padding:5}}})),u=function(t){var e=t.pieData,r=t.colors,o=d(),a=function(t){var e=t.active,r=t.payload;return e?(0,n.jsx)(l.Z,{className:o.customTooltip,children:(0,n.jsx)("label",{children:"".concat(r[0].name," : ").concat(r[0].value,"%")})}):null};return(0,n.jsxs)(c.uc,{width:194,height:194,children:[(0,n.jsx)(c.by,{data:e,color:"#000000",dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",isAnimationActive:!0,outerRadius:95,fill:"#8884d8",children:e.map((function(t,e){return(0,n.jsx)(c.bL,{fill:r[e%r.length]},"cell-".concat(e))}))}),(0,n.jsx)(c.u,{content:(0,n.jsx)(a,{})})]})},p=r(15467),x=r(89934),h=function(t){var e=t.applicationsList;return(0,n.jsx)(l.Z,{display:"flex",alignItems:"center",children:e.map((function(t,e){return(0,n.jsx)(l.Z,{ml:{xs:4,md:5},children:(0,n.jsx)(x.Z,{src:t})},e)}))})},f=(0,s.Z)({cardRoot:{height:"100%",display:"flex",flexDirection:"column",position:"relative","& .Cmt-card-content":{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",zIndex:3}}}),m=function(){var t=p.Vy.applicationsData,e=t.applicationsList,r=t.pieData,c=t.colors,l=f();return(0,n.jsxs)(o.Z,{className:l.cardRoot,children:[(0,n.jsx)(a.Z,{className:"pt-5",title:"Application",children:(0,n.jsx)(h,{applicationsList:e})}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(u,{pieData:r,colors:c})})]})}},19121:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(85893),o=(r(67294),r(78026)),a=r(28889),i=r(15467),c=r(30381),l=r.n(c)()().subtract(1,"month").format("MMM"),s=function(){var t=i.Vy.lastMonthSaleStats;return(0,n.jsx)(o.h2,{width:"100%",height:120,children:(0,n.jsxs)(o.wW,{data:t,margin:{top:0,right:0,left:0,bottom:0},children:[(0,n.jsx)(o.u,{labelStyle:{color:"black"},cursor:!1,content:function(t){return t.payload[0]?(0,n.jsx)(a.Z,{color:"#fff",children:"".concat(l," ").concat(t.label,": $").concat(t.payload[0].payload.value)}):null},wrapperStyle:{background:"#4200FF",padding:"5px 8px",borderRadius:4,overflow:"hidden"}}),(0,n.jsx)(o.Kc,{dataKey:"date",hide:!0}),(0,n.jsx)(o.x1,{dataKey:"value",type:"monotone",dot:null,strokeWidth:3,stackId:"2",stroke:"#4200FF"})]})})},d=r(33664),u=function(){return(0,n.jsx)(d.Z,{backgroundColor:["#E2E3FF -18.96%","#fff 108.17%"],gradientDirection:"180deg",color:"#4200FF",title:"$3,755",subTitle:"Last Month Sale",growth:3.5,children:(0,n.jsx)(s,{})})}},88951:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(85893),o=(r(67294),r(78026)),a=r(28889),i=r(15467),c=function(){var t=i.Vy.onlineSignups;return(0,n.jsx)(o.h2,{width:"100%",height:120,children:(0,n.jsxs)(o.wW,{data:t,margin:{top:0,right:0,left:0,bottom:0},children:[(0,n.jsx)(o.u,{cursor:!1,content:function(t){var e=t.active,r=t.label,o=t.payload;return e?(0,n.jsx)(a.Z,{color:"#fff",children:o.map((function(t,e){return(0,n.jsx)(a.Z,{children:"".concat(r,": ").concat(t.value," Signups")},e)}))}):null},wrapperStyle:{background:"#0062FF",padding:"5px 8px",borderRadius:4,overflow:"hidden"}}),(0,n.jsx)(o.Kc,{dataKey:"month",hide:!0}),(0,n.jsx)(o.x1,{dataKey:"count",type:"monotone",dot:null,strokeWidth:3,stackId:"2",stroke:"#0062FF"})]})})},l=r(33664),s=function(){return(0,n.jsx)(l.Z,{backgroundColor:["#E2EEFF -18.96%","#fff 108.17%"],gradientDirection:"180deg",color:"#0062FF",title:"10,254",subTitle:"Online Signups",growth:1.5,children:(0,n.jsx)(c,{})})}},61280:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n=r(85893),o=(r(67294),r(5239)),a=r(41120),i=r(59693),c=r(22429),l=r(8920),s=function(){var t=(0,l.Z)();return(0,n.jsx)(c.Z,{value:500,maxSegmentLabels:0,segments:4,ringWidth:25,needleColor:t.palette.text.secondary,needleHeightRatio:.5,needleTransitionDuration:4e3,needleTransition:"easeElastic",segmentColors:["#E00930","#FF8C00","#FFCA41","#8DCD03"],currentValueText:"27 Users online",valueTextFontSize:"16px",textColor:t.palette.text.primary})},d=r(28889),u=r(14490),p=r(16657),x=(0,a.Z)((function(t){return{cardRoot:{display:"flex",flexDirection:"column",height:"100%","& .Cmt-card-content":{flex:1,display:"flex",flexDirection:"column"}},badgeRoot:{fontSize:12,backgroundColor:(0,i.Fq)(t.palette.warning.main,.1),color:t.palette.warning.main,padding:"5px 12px",borderRadius:30},speedometerRoot:{"& text":{fill:t.palette.text.primary+"!important"},"& .current-value":{paddingTop:20},"& g.pointer":{fill:t.palette.text.primary+"!important"}}}})),h=function(){var t=x();return(0,n.jsxs)(u.Z,{className:t.cardRoot,children:[(0,n.jsx)(o.Z,{title:"Traffic"}),(0,n.jsx)(p.Z,{children:(0,n.jsxs)(d.Z,{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[(0,n.jsx)(d.Z,{className:t.speedometerRoot,children:(0,n.jsx)(s,{})}),(0,n.jsx)(d.Z,{textAlign:"center",mt:4,children:(0,n.jsx)(d.Z,{className:t.badgeRoot,component:"span",children:"Moderate Level"})})]})})]})}},88955:function(t,e,r){"use strict";r.d(e,{Z:function(){return f}});var n=r(85893),o=(r(67294),r(5239)),a=r(15185),i=r(14117),c=r(32427),l=r(46799),s=function(t){var e=t.getContext("2d").createLinearGradient(0,0,0,150);e.addColorStop(0,"rgba(127, 57, 251, 0.9)"),e.addColorStop(1,"rgba(151, 135, 255, 0.8)");var r=t.getContext("2d").createLinearGradient(0,0,0,150);r.addColorStop(0,"rgba(65, 65, 255, 1)"),r.addColorStop(1,"rgba(131, 125, 255, 1)");var n=t.getContext("2d").createLinearGradient(0,0,0,150);n.addColorStop(0,"rgba(3, 218, 197, 0.9)"),n.addColorStop(1,"rgba(3, 218, 197, 0.8)");var o=t.getContext("2d").createLinearGradient(0,0,0,150);return o.addColorStop(0,"rgba(255, 65, 164, 1)"),o.addColorStop(1,"rgba(255, 115, 115, 1)"),l.kL.plugins.register({afterEvent:function(a,i){var c=a.config.data.datasets;if("customRadar"===a.options.chartType){if(a.ctx.beginPath(),a.ctx.moveTo(91,69),a.ctx.lineTo(152,80),a.ctx.lineTo(192,75),a.ctx.lineTo(213,138),a.ctx.lineTo(148,168),a.ctx.lineTo(105,126),a.ctx.fill(),a.ctx.closePath(),a.ctx.isPointInPath(i.x,i.y))c[0].backgroundColor=r,a.update(),t.style.cursor="pointer";else c[0].backgroundColor=e,a.update(),t.style.cursor="default";if(a.ctx.beginPath(),a.ctx.moveTo(85,61),a.ctx.lineTo(149,66),a.ctx.lineTo(224,63),a.ctx.lineTo(179,112),a.ctx.lineTo(152,177),a.ctx.lineTo(121,117),a.ctx.fill(),a.ctx.closePath(),a.ctx.isPointInPath(i.x,i.y))c[1].backgroundColor=o,a.ctx.shadowColor="rgba(0, 0, 0, 0.10)",a.ctx.shadowBlur=10,a.update(),t.style.cursor="pointer";else c[1].backgroundColor=n,a.ctx.shadowColor="rgba(0, 0, 0, 0)",a.ctx.shadowBlur=0,a.update(),t.style.cursor="default"}}}),{labels:["","","","","",""],datasets:[{label:"Dont\xe9 Panlin",data:[70,85,65,65,85,82],fill:!0,backgroundColor:e,borderColor:"transparent",pointBackgroundColor:"transparent",pointBorderColor:"transparent",pointHoverBackgroundColor:"transparent",pointHoverBorderColor:"transparent",pointHitRadius:50},{label:"Mireska Sunbreeze",data:[80,70,80,80,75,40],fill:!0,backgroundColor:n,borderColor:"transparent",pointBackgroundColor:"transparent",pointBorderColor:"transparent",pointHoverBackgroundColor:"transparent",pointHoverBorderColor:"transparent",pointHitRadius:50}]}},d={chartType:"customRadar",borderColor:"red",legend:{display:!1,labels:{fontColor:"#AAAEB3"}},scale:{gridLines:{color:["#AAAEB3","#AAAEB3","#AAAEB3","#AAAEB3","#AAAEB3","#AAAEB3","#AAAEB3"]}},plugins:[{beforeDatasetsDraw:function(t,e){t.ctx.shadowColor="rgba(0, 0, 0, 0.50)",t.ctx.shadowBlur=10},afterDatasetsDraw:function(t,e){t.ctx.shadowColor="rgba(0, 0, 0, 0)",t.ctx.shadowBlur=0}}]},u=function(){return(0,n.jsx)(l.Fk,{data:s,options:d,height:100,width:100})},p=r(28889),x=r(86010),h=(0,c.Z)((function(t){return{cardRoot:{display:"flex",flexDirection:"column","& .Cmt-card-content":{flex:1},"& .chartjs-render-monitor":{fill:t.palette.text.primary,color:t.palette.text.primary}},dot:{height:8,width:8,borderRadius:"50%",backgroundColor:"#7F39FB"},dotBlue:{backgroundColor:"#03DAC5"}}})),f=function(){var t=h();return(0,n.jsxs)(i.Z,{className:t.cardRoot,children:[(0,n.jsx)(o.Z,{title:"Orders"}),(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(u,{}),(0,n.jsxs)(p.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:[(0,n.jsxs)(p.Z,{component:"span",display:"flex",alignItems:"center",mr:4,children:[(0,n.jsx)(p.Z,{component:"span",className:t.dot,mr:2}),(0,n.jsx)(p.Z,{component:"span",color:"text.secondary",fontSize:12,children:"Ordered"})]}),(0,n.jsxs)(p.Z,{component:"span",display:"flex",alignItems:"center",children:[(0,n.jsx)(p.Z,{component:"span",className:(0,x.Z)(t.dot,t.dotBlue),mr:2}),(0,n.jsx)(p.Z,{component:"span",color:"text.secondary",fontSize:12,children:"Pending"})]})]})]})]})}},52551:function(t,e,r){"use strict";r.d(e,{Z:function(){return d}});var n=r(85893),o=(r(67294),r(78026)),a=r(28889),i=r(15467),c={sent:"Sent",bounced:"Bounced"},l=function(){var t=i.Vy.totalEmails;return(0,n.jsx)(o.h2,{width:"100%",height:120,children:(0,n.jsxs)(o.wW,{data:t,margin:{top:0,right:0,left:0,bottom:0},children:[(0,n.jsx)(o.u,{labelStyle:{color:"black"},cursor:!1,content:function(t){var e=t.active,r=t.label,o=t.payload;return e?(0,n.jsxs)(a.Z,{color:"#fff",children:[(0,n.jsxs)(a.Z,{children:["Month: ",r]}),o.map((function(t,e){return(0,n.jsxs)(a.Z,{mt:1,children:[c[t.name]," - ",t.value]},e)}))]}):null},wrapperStyle:{background:"#FFA800",padding:"5px 8px",borderRadius:4,overflow:"hidden"}}),(0,n.jsx)(o.Kc,{dataKey:"month",hide:!0}),(0,n.jsx)(o.x1,{dataKey:"sent",type:"monotone",dot:null,strokeWidth:3,stackId:"2",stroke:"#FFA800"}),(0,n.jsx)(o.x1,{dataKey:"bounced",type:"monotone",dot:null,strokeWidth:3,stackId:"2",stroke:"#F3E5CF"})]})})},s=r(33664),d=function(){return(0,n.jsx)(s.Z,{backgroundColor:["#FFF2E2 -18.96%","#fff 108.17%"],gradientDirection:"180deg",color:"#FFA800",title:"2,355",subTitle:"Total Email Sent",growth:1.5,labels:[{name:"Sent",color:"#FFA800"},{name:"Bounced",color:"#F3E5CF"}],children:(0,n.jsx)(l,{})})}},40959:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(85893),o=(r(67294),r(78026)),a=r(28889),i=r(15467),c=function(){var t=i.Vy.totalRevenue;return(0,n.jsx)(o.h2,{width:"100%",height:120,children:(0,n.jsxs)(o.wW,{data:t,margin:{top:0,right:0,left:0,bottom:0},children:[(0,n.jsx)(o.u,{labelStyle:{color:"black"},cursor:!1,content:function(t){return t.payload[0]?(0,n.jsx)(a.Z,{color:"#fff",children:"".concat(t.label,": $").concat(t.payload[0].value)}):null},wrapperStyle:{background:"#29CF6B",padding:"5px 8px",borderRadius:4,overflow:"hidden"}}),(0,n.jsx)(o.Kc,{dataKey:"month",hide:!0}),(0,n.jsx)(o.x1,{dataKey:"amount",type:"monotone",dot:null,strokeWidth:3,stackId:"2",stroke:"#29CF6B"})]})})},l=r(33664),s=function(){return(0,n.jsx)(l.Z,{backgroundColor:["#E2FFE7 -18.96%","#fff 108.17%"],gradientDirection:"180deg",color:"#29CF6B",title:"$15,366",subTitle:"Total Revenue this year",growth:-1.5,children:(0,n.jsx)(c,{})})}},9309:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(85893),o=(r(67294),r(5239)),a=r(15185),i=r(14117),c=r(78026),l=function(t){var e=t.saleHistory;return(0,n.jsx)(c.h2,{width:"100%",height:100,children:(0,n.jsxs)(c.vz,{data:e,children:[(0,n.jsx)(c.u,{labelStyle:{color:"black"},cursor:!1,labelFormatter:function(t){return"Month: ".concat(t)},formatter:function(t){return[t,"Amount"]}}),(0,n.jsx)(c.$Q,{dataKey:"amt",fill:"#6200EE",maxBarSize:10}),(0,n.jsx)(c.Kc,{stroke:"#6200EE",dataKey:"name"})]})})},s=r(15467),d=(0,r(32427).Z)((function(t){return{cardContentRoot:{marginTop:-30,"& .MuiGrid-container":{alignItems:"center"}},subTitleRoot:{fontSize:12,color:t.palette.text.secondary,marginTop:4}}})),u=function(){var t=d(),e=s.Vy.saleHistory;return(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(o.Z,{title:"This Year Sale Report"}),(0,n.jsx)(a.Z,{className:t.cardContentRoot,title:"$685K+",titleProps:{variant:"h1",component:"div"},subTitle:"Post 9 month data",subTitleProps:{variant:"body2",component:"p",className:t.subTitleRoot},reverseDir:!0,children:(0,n.jsx)(l,{saleHistory:e})})]})}}}]);