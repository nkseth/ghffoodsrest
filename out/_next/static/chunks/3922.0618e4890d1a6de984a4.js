(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3922,7956,9769],{10770:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var n=t(22122),a=t(85061),i=t(2949),o=t(67294),l=(t(59864),t(45697),t(86010)),s=t(52543),c=t(22318),d=t(59693),u=(0,t(63786).Z)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(32467);var p=(0,s.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,d._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var r=e.classes,t=(0,i.Z)(e,["classes"]);return o.createElement(m.Z,(0,n.Z)({component:"li",className:r.root,focusRipple:!0},t),o.createElement(u,{className:r.icon}))}));var f=o.forwardRef((function(e,r){var t=e.children,s=e.classes,d=e.className,u=e.component,m=void 0===u?"nav":u,f=e.expandText,h=void 0===f?"Show path":f,b=e.itemsAfterCollapse,x=void 0===b?1:b,g=e.itemsBeforeCollapse,Z=void 0===g?1:g,v=e.maxItems,y=void 0===v?8:v,j=e.separator,w=void 0===j?"/":j,k=(0,i.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),O=o.useState(!1),C=O[0],E=O[1],P=o.Children.toArray(t).filter((function(e){return o.isValidElement(e)})).map((function(e,r){return o.createElement("li",{className:s.li,key:"child-".concat(r)},e)}));return o.createElement(c.Z,(0,n.Z)({ref:r,component:m,color:"textSecondary",className:(0,l.Z)(s.root,d)},k),o.createElement("ol",{className:s.ol},function(e,r,t){return e.reduce((function(n,a,i){return i<e.length-1?n=n.concat(a,o.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:r},t)):n.push(a),n}),[])}(C||y&&P.length<=y?P:function(e){return Z+x>=e.length?e:[].concat((0,a.Z)(e.slice(0,Z)),[o.createElement(p,{"aria-label":h,key:"ellipsis",onClick:function(e){E(!0);var r=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");r&&r.focus()}})],(0,a.Z)(e.slice(e.length-x,e.length)))}(P),s.separator,w)))})),h=(0,s.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},96394:function(e,r,t){"use strict";var n=t(22122),a=t(2949),i=t(67294),o=(t(45697),t(86010)),l=t(89345),s=t(22601),c=t(52543),d=t(96019),u=i.forwardRef((function(e,r){var t=e.classes,c=e.className,u=e.disableAnimation,m=void 0!==u&&u,p=(e.margin,e.shrink),f=(e.variant,(0,a.Z)(e,["classes","className","disableAnimation","margin","shrink","variant"])),h=(0,s.Z)(),b=p;"undefined"===typeof b&&h&&(b=h.filled||h.focused||h.adornedStart);var x=(0,l.Z)({props:e,muiFormControl:h,states:["margin","variant"]});return i.createElement(d.Z,(0,n.Z)({"data-shrink":b,className:(0,o.Z)(t.root,c,h&&t.formControl,!m&&t.animated,b&&t.shrink,"dense"===x.margin&&t.marginDense,{filled:t.filled,outlined:t.outlined}[x.variant]),classes:{focused:t.focused,disabled:t.disabled,error:t.error,required:t.required,asterisk:t.asterisk},ref:r},f))}));r.Z=(0,c.Z)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(u)},39803:function(e,r,t){"use strict";var n=t(22122),a=t(2949),i=t(67294),o=(t(45697),t(86010)),l=t(38799),s=t(59446),c=t(66718),d=t(96394),u=t(64436),m=t(30585),p=t(110),f=t(52543),h={standard:l.Z,filled:s.Z,outlined:c.Z},b=i.forwardRef((function(e,r){var t=e.autoComplete,l=e.autoFocus,s=void 0!==l&&l,c=e.children,f=e.classes,b=e.className,x=e.color,g=void 0===x?"primary":x,Z=e.defaultValue,v=e.disabled,y=void 0!==v&&v,j=e.error,w=void 0!==j&&j,k=e.FormHelperTextProps,O=e.fullWidth,C=void 0!==O&&O,E=e.helperText,P=e.hiddenLabel,S=e.id,N=e.InputLabelProps,R=e.inputProps,D=e.InputProps,B=e.inputRef,T=e.label,F=e.multiline,I=void 0!==F&&F,A=e.name,W=e.onBlur,z=e.onChange,L=e.onFocus,M=e.placeholder,q=e.required,H=void 0!==q&&q,V=e.rows,$=e.rowsMax,_=e.maxRows,U=e.minRows,X=e.select,Y=void 0!==X&&X,G=e.SelectProps,J=e.type,K=e.value,Q=e.variant,ee=void 0===Q?"standard":Q,re=(0,a.Z)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","maxRows","minRows","select","SelectProps","type","value","variant"]);var te={};if("outlined"===ee&&(N&&"undefined"!==typeof N.shrink&&(te.notched=N.shrink),T)){var ne,ae=null!==(ne=null===N||void 0===N?void 0:N.required)&&void 0!==ne?ne:H;te.label=i.createElement(i.Fragment,null,T,ae&&"\xa0*")}Y&&(G&&G.native||(te.id=void 0),te["aria-describedby"]=void 0);var ie=E&&S?"".concat(S,"-helper-text"):void 0,oe=T&&S?"".concat(S,"-label"):void 0,le=h[ee],se=i.createElement(le,(0,n.Z)({"aria-describedby":ie,autoComplete:t,autoFocus:s,defaultValue:Z,fullWidth:C,multiline:I,name:A,rows:V,rowsMax:$,maxRows:_,minRows:U,type:J,value:K,id:S,inputRef:B,onBlur:W,onChange:z,onFocus:L,placeholder:M,inputProps:R},te,D));return i.createElement(u.Z,(0,n.Z)({className:(0,o.Z)(f.root,b),disabled:y,error:w,fullWidth:C,hiddenLabel:P,ref:r,required:H,color:g,variant:ee},re),T&&i.createElement(d.Z,(0,n.Z)({htmlFor:S,id:oe},N),T),Y?i.createElement(p.Z,(0,n.Z)({"aria-describedby":ie,id:S,labelId:oe,value:K,input:se},G),c):se,E&&i.createElement(m.Z,(0,n.Z)({id:ie},k),E))}));r.Z=(0,f.Z)({root:{}},{name:"MuiTextField"})(b)},57948:function(e,r,t){"use strict";t.d(r,{nB:function(){return j},dx:function(){return k},Vr:function(){return x},mr:function(){return p}});var n=t(85893),a=t(38347),i=t(26265),o=(t(67294),t(41120)),l=t(28889),s=t(22318),c=t(86010);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=(0,o.Z)((function(e){return{pageHeaderRoot:(0,i.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,i.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),p=function(e){var r=e.heading,t=e.breadcrumbComponent,i=e.children,o=(0,a.Z)(e,["heading","breadcrumbComponent","children"]),d=m();return(0,n.jsxs)(l.Z,u(u({className:(0,c.Z)(d.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},o),{},{children:[(0,n.jsx)(s.Z,{component:"div",variant:"h1",className:(0,c.Z)(d.titleRoot,"title"),children:r}),(0,n.jsx)(l.Z,{ml:{sm:"auto"},children:t}),i]}))},f=t(10770),h=t(41664),b=(0,o.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),x=function(e){var r=e.items,t=((0,a.Z)(e,["items"]),b());return(0,n.jsx)(f.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:r.map((function(e,r){return e.isActive?(0,n.jsx)(s.Z,{className:t.textSm,color:"textPrimary",children:e.label},r):(0,n.jsx)(h.default,{href:e.link||"/",children:(0,n.jsx)("a",{className:(0,c.Z)(t.textSm,t.linkBlock),children:e.label})},r)}))})},g=t(41749),Z=t(14490),v=t(67757),y=t(75322),j=function(e){var r=e.SourceCodeComponent,t=e.SettingsComponent,a=e.children;return(0,n.jsx)(y.Z,{children:(0,n.jsxs)(v.Z,{children:[(0,n.jsxs)(g.Z,{item:!0,xs:12,md:7,children:[(0,n.jsx)(p,{heading:"Preview"}),(0,n.jsx)(l.Z,{mb:8,children:a}),(0,n.jsx)(Z.Z,{children:r})]}),(0,n.jsx)(g.Z,{item:!0,xs:12,md:5,children:t})]})})},w=t(42890),k=function(e){var r=e.pageTitle,t=e.menus,a=e.children,i=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:r,isActive:!0}];return(0,n.jsx)(w.Z,{pageTitle:r,breadcrumbs:i,menus:t,children:a})}},42890:function(e,r,t){"use strict";var n=t(85893),a=t(26265),i=(t(67294),t(28889)),o=t(82598),l=t(22318),s=t(62822),c=t(50998),d=t(95757),u=t(41120),m=t(75322),p=(0,u.Z)((function(e){var r;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(r={width:"100%"},(0,a.Z)(r,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,a.Z)(r,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),r),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));r.Z=function(e){var r=e.pageTitle,t=e.menus,a=e.breadcrumbs,u=e.children,f=p();return(0,n.jsx)(m.Z,{heading:r,breadcrumbs:a,children:(0,n.jsxs)(i.Z,{className:f.root,children:[(0,n.jsx)(i.Z,{className:f.contentArea,children:u}),(0,n.jsx)(o.Z,{xsDown:!0,children:(0,n.jsxs)(i.Z,{className:f.contentSidebar,children:[(0,n.jsx)(l.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,n.jsx)(s.Z,{children:t.map((function(e,r){return(0,n.jsx)(c.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,n.jsx)(d.Z,{primary:e.label})},r)}))})]})})]})})}},75322:function(e,r,t){"use strict";var n=t(26265),a=t(85893),i=(t(67294),t(28889)),o=t(57948),l=t(82285),s=t(32427),c=t(86010);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=(0,s.Z)((function(e){return{pageFull:{width:"100%",height:"100%",paddingBottom:"70px"}}}));r.Z=function(e){var r=e.heading,t=e.breadcrumbs,n=e.children,s=e.className,d=e.restProps,p=m();return(0,a.jsx)(l.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,a.jsxs)(i.Z,u(u({className:(0,c.Z)(p.pageFull,s)},d),{},{children:[(r||t)&&(0,a.jsx)(o.mr,{heading:r,breadcrumbComponent:t&&(0,a.jsx)(o.Vr,{items:t})}),n]}))})}},23922:function(e,r,t){"use strict";t.r(r);var n=t(85893),a=t(26265),i=t(67294),o=t(15467),l=t(32427),s=t(67757),c=t(75322),d=t(41749),u=t(39803),m=t(282),p=(0,l.Z)((function(e){return{orderLg2:(0,a.Z)({},e.breakpoints.up("lg"),{order:2}),orderLg1:(0,a.Z)({},e.breakpoints.up("lg"),{order:1}),Boxgrid1:{background:"white",width:"100%"},title:{fontSize:"1.5rem",fontWeight:"bold",marginBottom:"8%"},subtitle:{fontSize:".8rem",fontWeight:"normal",marginBottom:"8%"},button:{fontSize:".7rem"},Boxgrid11:{background:"white",width:"100%"}}})),f=[{label:"Home",link:"/"},{label:"Dashboard",link:"/dashboard"},{label:"DeliveryZone",link:"/dashboard/DeliveryZone"},{label:"EditAreaFields",isActive:!0}];r.default=function(){p();var e=(0,i.useState)([]),r=(e[0],e[1]),t=(0,i.useState)([]),a=(t[0],t[1]),l=(0,i.useState)("");l[0],l[1];(0,i.useEffect)((function(){r(o.XE.DeliveryZone),a(o.XE.DeliveryZone[0])}),[]);var h=(0,i.useState)(!1);h[0],h[1];return(0,n.jsx)(c.Z,{heading:"Delivery Zone Management",breadcrumbs:f,children:(0,n.jsxs)(s.Z,{spacing:6,style:{width:"100%",height:"100%",background:"white",minHeight:"300px"},alignItems:"center",children:[(0,n.jsx)(d.Z,{item:!0,sm:12,md:6,children:(0,n.jsx)(u.Z,{label:"Delivery Zone Name",variant:"outlined",fullWidth:!0})}),(0,n.jsx)(d.Z,{item:!0,sm:12,md:6,children:(0,n.jsx)(u.Z,{label:"Admin Email",variant:"outlined",fullWidth:!0})}),(0,n.jsx)(d.Z,{item:!0,sm:12,md:6,children:(0,n.jsx)(u.Z,{label:"Admin Name",variant:"outlined",fullWidth:!0})}),(0,n.jsx)(d.Z,{item:!0,sm:12,md:6,children:(0,n.jsx)(u.Z,{label:"Contact",variant:"outlined",fullWidth:!0})}),(0,n.jsx)(d.Z,{item:!0,sm:12,container:!0,justifyContent:"center",children:(0,n.jsx)(m.Z,{variant:"contained",color:"primary",children:"Update Delivery Zone"})})]})})}}}]);