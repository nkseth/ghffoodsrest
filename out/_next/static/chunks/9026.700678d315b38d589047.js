(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9026],{10770:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(22122),a=t(85061),o=t(2949),i=t(67294),c=(t(59864),t(45697),t(86010)),l=t(52543),s=t(22318),u=t(59693),d=(0,t(63786).Z)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(32467);var p=(0,l.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,u._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var r=e.classes,t=(0,o.Z)(e,["classes"]);return i.createElement(m.Z,(0,n.Z)({component:"li",className:r.root,focusRipple:!0},t),i.createElement(d,{className:r.icon}))}));var h=i.forwardRef((function(e,r){var t=e.children,l=e.classes,u=e.className,d=e.component,m=void 0===d?"nav":d,h=e.expandText,f=void 0===h?"Show path":h,x=e.itemsAfterCollapse,v=void 0===x?1:x,b=e.itemsBeforeCollapse,g=void 0===b?1:b,j=e.maxItems,Z=void 0===j?8:j,y=e.separator,C=void 0===y?"/":y,O=(0,o.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),w=i.useState(!1),S=w[0],k=w[1],z=i.Children.toArray(t).filter((function(e){return i.isValidElement(e)})).map((function(e,r){return i.createElement("li",{className:l.li,key:"child-".concat(r)},e)}));return i.createElement(s.Z,(0,n.Z)({ref:r,component:m,color:"textSecondary",className:(0,c.Z)(l.root,u)},O),i.createElement("ol",{className:l.ol},function(e,r,t){return e.reduce((function(n,a,o){return o<e.length-1?n=n.concat(a,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:r},t)):n.push(a),n}),[])}(S||Z&&z.length<=Z?z:function(e){return g+v>=e.length?e:[].concat((0,a.Z)(e.slice(0,g)),[i.createElement(p,{"aria-label":f,key:"ellipsis",onClick:function(e){k(!0);var r=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");r&&r.focus()}})],(0,a.Z)(e.slice(e.length-v,e.length)))}(z),l.separator,C)))})),f=(0,l.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},76324:function(e,r,t){"use strict";var n=t(95318),a=t(20862);r.Z=void 0;var o=a(t(67294)),i=(0,n(t(2108)).default)(o.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");r.Z=i},57948:function(e,r,t){"use strict";t.d(r,{nB:function(){return y},dx:function(){return O},Vr:function(){return v},mr:function(){return p}});var n=t(85893),a=t(38347),o=t(26265),i=(t(67294),t(41120)),c=t(28889),l=t(22318),s=t(86010);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=(0,i.Z)((function(e){return{pageHeaderRoot:(0,o.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,o.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),p=function(e){var r=e.heading,t=e.breadcrumbComponent,o=e.children,i=(0,a.Z)(e,["heading","breadcrumbComponent","children"]),u=m();return(0,n.jsxs)(c.Z,d(d({className:(0,s.Z)(u.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},i),{},{children:[(0,n.jsx)(l.Z,{component:"div",variant:"h1",className:(0,s.Z)(u.titleRoot,"title"),children:r}),(0,n.jsx)(c.Z,{ml:{sm:"auto"},children:t}),o]}))},h=t(10770),f=t(41664),x=(0,i.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),v=function(e){var r=e.items,t=((0,a.Z)(e,["items"]),x());return(0,n.jsx)(h.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:r.map((function(e,r){return e.isActive?(0,n.jsx)(l.Z,{className:t.textSm,color:"textPrimary",children:e.label},r):(0,n.jsx)(f.default,{href:e.link||"/",children:(0,n.jsx)("a",{className:(0,s.Z)(t.textSm,t.linkBlock),children:e.label})},r)}))})},b=t(41749),g=t(14490),j=t(67757),Z=t(75322),y=function(e){var r=e.SourceCodeComponent,t=e.SettingsComponent,a=e.children;return(0,n.jsx)(Z.Z,{children:(0,n.jsxs)(j.Z,{children:[(0,n.jsxs)(b.Z,{item:!0,xs:12,md:7,children:[(0,n.jsx)(p,{heading:"Preview"}),(0,n.jsx)(c.Z,{mb:8,children:a}),(0,n.jsx)(g.Z,{children:r})]}),(0,n.jsx)(b.Z,{item:!0,xs:12,md:5,children:t})]})})},C=t(42890),O=function(e){var r=e.pageTitle,t=e.menus,a=e.children,o=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:r,isActive:!0}];return(0,n.jsx)(C.Z,{pageTitle:r,breadcrumbs:o,menus:t,children:a})}},42890:function(e,r,t){"use strict";var n=t(85893),a=t(26265),o=(t(67294),t(28889)),i=t(82598),c=t(22318),l=t(62822),s=t(50998),u=t(95757),d=t(41120),m=t(75322),p=(0,d.Z)((function(e){var r;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(r={width:"100%"},(0,a.Z)(r,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,a.Z)(r,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),r),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));r.Z=function(e){var r=e.pageTitle,t=e.menus,a=e.breadcrumbs,d=e.children,h=p();return(0,n.jsx)(m.Z,{heading:r,breadcrumbs:a,children:(0,n.jsxs)(o.Z,{className:h.root,children:[(0,n.jsx)(o.Z,{className:h.contentArea,children:d}),(0,n.jsx)(i.Z,{xsDown:!0,children:(0,n.jsxs)(o.Z,{className:h.contentSidebar,children:[(0,n.jsx)(c.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,n.jsx)(l.Z,{children:t.map((function(e,r){return(0,n.jsx)(s.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,n.jsx)(u.Z,{primary:e.label})},r)}))})]})})]})})}},75322:function(e,r,t){"use strict";var n=t(26265),a=t(85893),o=(t(67294),t(28889)),i=t(57948),c=t(82285),l=t(32427),s=t(86010);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=(0,l.Z)((function(e){return{pageFull:{width:"100%",height:"100%",paddingBottom:"70px"}}}));r.Z=function(e){var r=e.heading,t=e.breadcrumbs,n=e.children,l=e.className,u=e.restProps,p=m();return(0,a.jsx)(c.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,a.jsxs)(o.Z,d(d({className:(0,s.Z)(p.pageFull,l)},u),{},{children:[(r||t)&&(0,a.jsx)(i.mr,{heading:r,breadcrumbComponent:t&&(0,a.jsx)(i.Vr,{items:t})}),n]}))})}},69026:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Z}});var n=t(85893),a=t(67294),o=t(57948),i=t(13502),c=t(61974),l=t(60788),s=t(51855),u=t(28889),d=t(54504),m=function(){var e=(0,a.useContext)(i.Z),r=e.variant,t=e.setVariant,o=e.size,m=e.setSize,p=e.color,h=e.setColor;return(0,n.jsxs)(c.f5,{title:"Cmt Avatar",children:[(0,n.jsx)(c.r4,{title:"Variants",children:[{label:"Circular",value:"circular"},{label:"Rounded",value:"rounded"},{label:"Square",value:"square"}].map((function(e,a){return(0,n.jsx)(l.Z,{name:"avatar-variant",label:e.label,value:e.value,checked:r===e.value,onChange:function(){return t(e.value)}},a)}))}),(0,n.jsxs)(c.r4,{title:"Sizes",children:[[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}].map((function(e,r){return(0,n.jsx)(l.Z,{name:"avatar-size",label:e.label,value:e.value,checked:o===e.value,onChange:function(){return m(e.value)}},r)})),(0,n.jsx)(l.Z,{name:"avatar-size",label:"Custom",checked:"number"===typeof o,onChange:function(){return m(80)}})]}),"number"===typeof o&&(0,n.jsx)(c.r4,{children:(0,n.jsxs)(u.Z,{flex:1,children:[(0,n.jsx)(u.Z,{fontSize:12,mb:1,children:"Set custom size"}),(0,n.jsx)(d.Z,{defaultValue:80,getAriaValueText:function(){return o},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:5,min:30,max:100,onChange:function(e,r){return m(r)}}),(0,n.jsxs)(u.Z,{display:"flex",justifyContent:"space-between",mt:-2,mb:2,children:[(0,n.jsx)(u.Z,{fontSize:12,children:"30px"}),(0,n.jsx)(u.Z,{fontSize:12,children:"100px"})]})]})}),(0,n.jsx)(c.r4,{title:"Colors",children:["amber","brown","orange","purple","primary","red","green","blue","grey","yellow","secondary","random"].map((function(e,r){return(0,n.jsx)(l.Z,{style:{minWidth:135},name:"avatar-color",label:(0,s.Yu)(e),value:e,checked:p===e,onChange:function(){return h(e)}},r)}))})]})},p=t(72092),h=t(88241),f=t(76324),x=t(10266),v=(0,t(41120).Z)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap","& > *":{margin:e.spacing(1)}}}})),b=function(){var e=v(),r=(0,a.useContext)(i.Z),t=r.variant,o=r.size,c=r.color;return(0,n.jsx)(p.Z,{children:(0,n.jsxs)(u.Z,{className:e.root,children:[(0,n.jsx)(h.Z,{color:c,size:o,variant:t,src:x.K.avatar,alt:"avatar"}),(0,n.jsx)(h.Z,{color:c,size:o,variant:t,children:"NP"}),(0,n.jsx)(h.Z,{color:c,size:o,variant:t,children:(0,n.jsx)(f.Z,{})}),(0,n.jsx)(h.Z,{color:c,size:o,variant:t})]})})},g=function(e){var r=e.children,t=(0,a.useState)("circular"),o=t[0],c=t[1],l=(0,a.useState)("medium"),s=l[0],u=l[1],d=(0,a.useState)("random"),m=d[0],p=d[1];return(0,n.jsx)(i.Z.Provider,{value:{variant:o,setVariant:c,size:s,setSize:u,color:m,setColor:p},children:r})},j=function(){var e=(0,a.useContext)(i.Z),r=e.size,t=e.variant,o=e.color,l=function(){return"string"===typeof r?'size="'.concat(r,'"'):"size={".concat(r,"}")};return(0,n.jsx)(c.fB,{sourceCode:'\n<CmtAvatar color="'.concat(o,'" ')+l()+' variant="'.concat(t,'" alt="avatar" ')+'src="'.concat(x.K.avatar,'"')+' />\n<CmtAvatar color="'.concat(o,'" ')+l()+' variant="'.concat(t,'">\n  NP\n</CmtAvatar>\n<CmtAvatar color="').concat(o,'" ')+l()+' variant="'.concat(t,'">\n  <FavoriteIcon />\n</CmtAvatar>\n<CmtAvatar color="').concat(o,'" ')+l()+' variant="'.concat(t,'" />\n')})},Z=function(){return(0,n.jsx)(g,{children:(0,n.jsx)(o.nB,{SourceCodeComponent:(0,n.jsx)(j,{}),SettingsComponent:(0,n.jsx)(m,{}),children:(0,n.jsx)(b,{})})})}}}]);