(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1798],{23606:function(e,n,o){var a={"./ActionsInAccordionSummary.txt":69078,"./ControlledAccordions.txt":63375,"./CustomizedAccordions.txt":99693,"./DetailedAccordion.txt":12855,"./SimpleAccordion.txt":25919};function t(e){var n=r(e);return o(n)}function r(e){if(!o.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}t.keys=function(){return Object.keys(a)},t.resolve=r,e.exports=t,t.id=23606},53537:function(e,n,o){"use strict";var a=o(22122),t=o(2949),r=o(67294),i=(o(45697),o(86010)),c=o(52543),l=r.forwardRef((function(e,n){var o=e.classes,c=e.className,l=e.disableSpacing,s=void 0!==l&&l,d=(0,t.Z)(e,["classes","className","disableSpacing"]);return r.createElement("div",(0,a.Z)({className:(0,i.Z)(o.root,c,!s&&o.spacing),ref:n},d))}));n.Z=(0,c.Z)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiAccordionActions"})(l)},10770:function(e,n,o){"use strict";o.d(n,{Z:function(){return g}});var a=o(22122),t=o(85061),r=o(2949),i=o(67294),c=(o(59864),o(45697),o(86010)),l=o(52543),s=o(22318),d=o(59693),p=(0,o(63786).Z)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=o(32467);var u=(0,l.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,d._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var n=e.classes,o=(0,r.Z)(e,["classes"]);return i.createElement(m.Z,(0,a.Z)({component:"li",className:n.root,focusRipple:!0},o),i.createElement(p,{className:n.icon}))}));var h=i.forwardRef((function(e,n){var o=e.children,l=e.classes,d=e.className,p=e.component,m=void 0===p?"nav":p,h=e.expandText,g=void 0===h?"Show path":h,x=e.itemsAfterCollapse,y=void 0===x?1:x,f=e.itemsBeforeCollapse,b=void 0===f?1:f,Z=e.maxItems,A=void 0===Z?8:Z,j=e.separator,v=void 0===j?"/":j,S=(0,r.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=i.useState(!1),C=k[0],T=k[1],I=i.Children.toArray(o).filter((function(e){return i.isValidElement(e)})).map((function(e,n){return i.createElement("li",{className:l.li,key:"child-".concat(n)},e)}));return i.createElement(s.Z,(0,a.Z)({ref:n,component:m,color:"textSecondary",className:(0,c.Z)(l.root,d)},S),i.createElement("ol",{className:l.ol},function(e,n,o){return e.reduce((function(a,t,r){return r<e.length-1?a=a.concat(t,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(r),className:n},o)):a.push(t),a}),[])}(C||A&&I.length<=A?I:function(e){return b+y>=e.length?e:[].concat((0,t.Z)(e.slice(0,b)),[i.createElement(u,{"aria-label":g,key:"ellipsis",onClick:function(e){T(!0);var n=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");n&&n.focus()}})],(0,t.Z)(e.slice(e.length-y,e.length)))}(I),l.separator,v)))})),g=(0,l.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},13258:function(e,n,o){"use strict";o.d(n,{Z:function(){return b}});var a=o(22122),t=o(2949),r=o(67294),i=(o(45697),o(86010)),c=o(56608),l=o(63786),s=(0,l.Z)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=(0,l.Z)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=o(59693),m=(0,l.Z)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=o(93871),h=o(52543),g=r.createElement(d,null),x=r.createElement(s,null),y=r.createElement(m,null),f=r.forwardRef((function(e,n){var o=e.checkedIcon,l=void 0===o?g:o,s=e.classes,d=e.color,p=void 0===d?"secondary":d,m=e.icon,h=void 0===m?x:m,f=e.indeterminate,b=void 0!==f&&f,Z=e.indeterminateIcon,A=void 0===Z?y:Z,j=e.inputProps,v=e.size,S=void 0===v?"medium":v,k=(0,t.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),C=b?A:h,T=b?A:l;return r.createElement(c.Z,(0,a.Z)({type:"checkbox",classes:{root:(0,i.Z)(s.root,s["color".concat((0,u.Z)(p))],b&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:p,inputProps:(0,a.Z)({"data-indeterminate":b},j),icon:r.cloneElement(C,{fontSize:void 0===C.props.fontSize&&"small"===S?S:C.props.fontSize}),checkedIcon:r.cloneElement(T,{fontSize:void 0===T.props.fontSize&&"small"===S?S:T.props.fontSize}),ref:n},k))})),b=(0,h.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(f)},57948:function(e,n,o){"use strict";o.d(n,{nB:function(){return j},dx:function(){return S},Vr:function(){return y},mr:function(){return u}});var a=o(85893),t=o(38347),r=o(26265),i=(o(67294),o(41120)),c=o(28889),l=o(22318),s=o(86010);function d(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function p(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?d(Object(o),!0).forEach((function(n){(0,r.Z)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var m=(0,i.Z)((function(e){return{pageHeaderRoot:(0,r.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,r.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),u=function(e){var n=e.heading,o=e.breadcrumbComponent,r=e.children,i=(0,t.Z)(e,["heading","breadcrumbComponent","children"]),d=m();return(0,a.jsxs)(c.Z,p(p({className:(0,s.Z)(d.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},i),{},{children:[(0,a.jsx)(l.Z,{component:"div",variant:"h1",className:(0,s.Z)(d.titleRoot,"title"),children:n}),(0,a.jsx)(c.Z,{ml:{sm:"auto"},children:o}),r]}))},h=o(10770),g=o(41664),x=(0,i.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),y=function(e){var n=e.items,o=((0,t.Z)(e,["items"]),x());return(0,a.jsx)(h.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:n.map((function(e,n){return e.isActive?(0,a.jsx)(l.Z,{className:o.textSm,color:"textPrimary",children:e.label},n):(0,a.jsx)(g.default,{href:e.link||"/",children:(0,a.jsx)("a",{className:(0,s.Z)(o.textSm,o.linkBlock),children:e.label})},n)}))})},f=o(41749),b=o(14490),Z=o(67757),A=o(75322),j=function(e){var n=e.SourceCodeComponent,o=e.SettingsComponent,t=e.children;return(0,a.jsx)(A.Z,{children:(0,a.jsxs)(Z.Z,{children:[(0,a.jsxs)(f.Z,{item:!0,xs:12,md:7,children:[(0,a.jsx)(u,{heading:"Preview"}),(0,a.jsx)(c.Z,{mb:8,children:t}),(0,a.jsx)(b.Z,{children:n})]}),(0,a.jsx)(f.Z,{item:!0,xs:12,md:5,children:o})]})})},v=o(42890),S=function(e){var n=e.pageTitle,o=e.menus,t=e.children,r=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:n,isActive:!0}];return(0,a.jsx)(v.Z,{pageTitle:n,breadcrumbs:r,menus:o,children:t})}},42890:function(e,n,o){"use strict";var a=o(85893),t=o(26265),r=(o(67294),o(28889)),i=o(82598),c=o(22318),l=o(62822),s=o(50998),d=o(95757),p=o(41120),m=o(75322),u=(0,p.Z)((function(e){var n;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(n={width:"100%"},(0,t.Z)(n,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,t.Z)(n,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),n),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));n.Z=function(e){var n=e.pageTitle,o=e.menus,t=e.breadcrumbs,p=e.children,h=u();return(0,a.jsx)(m.Z,{heading:n,breadcrumbs:t,children:(0,a.jsxs)(r.Z,{className:h.root,children:[(0,a.jsx)(r.Z,{className:h.contentArea,children:p}),(0,a.jsx)(i.Z,{xsDown:!0,children:(0,a.jsxs)(r.Z,{className:h.contentSidebar,children:[(0,a.jsx)(c.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,a.jsx)(l.Z,{children:o.map((function(e,n){return(0,a.jsx)(s.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,a.jsx)(d.Z,{primary:e.label})},n)}))})]})})]})})}},75322:function(e,n,o){"use strict";var a=o(26265),t=o(85893),r=(o(67294),o(28889)),i=o(57948),c=o(82285),l=o(32427),s=o(86010);function d(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function p(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?d(Object(o),!0).forEach((function(n){(0,a.Z)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var m=(0,l.Z)((function(e){return{pageFull:{width:"100%",height:"100%",paddingBottom:"70px"}}}));n.Z=function(e){var n=e.heading,o=e.breadcrumbs,a=e.children,l=e.className,d=e.restProps,u=m();return(0,t.jsx)(c.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,t.jsxs)(r.Z,p(p({className:(0,s.Z)(u.pageFull,l)},d),{},{children:[(n||o)&&(0,t.jsx)(i.mr,{heading:n,breadcrumbComponent:o&&(0,t.jsx)(i.Vr,{items:o})}),a]}))})}},71798:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return H}});var a=o(85893),t=o(67294),r=o(57948),i=o(28889),c=o(22318),l=o(94111),s=o(39137),d=o(41120),p=o(59693),m=o(36939),u=o(50743),h=o(61201),g=o(64566),x=(0,d.Z)((function(e){return{root:{width:"100%","& .MuiPaper-root":{backgroundColor:(0,p.$n)(e.palette.background.paper,.1)}},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function y(){var e=x();return(0,a.jsxs)(i.Z,{className:e.root,children:[(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(u.Z,{expandIcon:(0,a.jsx)(g.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,a.jsx)(c.Z,{className:e.heading,children:"Accordion 1"})}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(c.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(u.Z,{expandIcon:(0,a.jsx)(g.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,a.jsx)(c.Z,{className:e.heading,children:"Accordion 2"})}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(c.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),(0,a.jsx)(m.Z,{disabled:!0,children:(0,a.jsx)(u.Z,{expandIcon:(0,a.jsx)(g.Z,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:(0,a.jsx)(c.Z,{className:e.heading,children:"Disabled Accordion"})})})]})}var f=o(64121),b=(0,d.Z)((function(e){return{root:{width:"100%","& .MuiPaper-root":{backgroundColor:(0,p.$n)(e.palette.background.paper,.1)}},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}));function Z(){var e=b(),n=t.useState(!1),o=(0,f.Z)(n,2),r=o[0],l=o[1],s=function(e){return function(n,o){l(!!o&&e)}};return(0,a.jsxs)(i.Z,{className:e.root,children:[(0,a.jsxs)(m.Z,{expanded:"panel1"===r,onChange:s("panel1"),children:[(0,a.jsxs)(u.Z,{expandIcon:(0,a.jsx)(g.Z,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[(0,a.jsx)(c.Z,{className:e.heading,children:"General settings"}),(0,a.jsx)(c.Z,{className:e.secondaryHeading,children:"I am an accordion"})]}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(c.Z,{children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."})})]}),(0,a.jsxs)(m.Z,{expanded:"panel2"===r,onChange:s("panel2"),children:[(0,a.jsxs)(u.Z,{expandIcon:(0,a.jsx)(g.Z,{}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:[(0,a.jsx)(c.Z,{className:e.heading,children:"Users"}),(0,a.jsx)(c.Z,{className:e.secondaryHeading,children:"You are currently not an owner"})]}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(c.Z,{children:"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."})})]}),(0,a.jsxs)(m.Z,{expanded:"panel3"===r,onChange:s("panel3"),children:[(0,a.jsxs)(u.Z,{expandIcon:(0,a.jsx)(g.Z,{}),"aria-controls":"panel3bh-content",id:"panel3bh-header",children:[(0,a.jsx)(c.Z,{className:e.heading,children:"Advanced settings"}),(0,a.jsx)(c.Z,{className:e.secondaryHeading,children:"Filtering has been entirely disabled for whole web server"})]}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(c.Z,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]}),(0,a.jsxs)(m.Z,{expanded:"panel4"===r,onChange:s("panel4"),children:[(0,a.jsx)(u.Z,{expandIcon:(0,a.jsx)(g.Z,{}),"aria-controls":"panel4bh-content",id:"panel4bh-header",children:(0,a.jsx)(c.Z,{className:e.heading,children:"Personal data"})}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(c.Z,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]})]})}var A=o(52543),j=(0,A.Z)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(m.Z),v=(0,A.Z)((function(e){return{root:{backgroundColor:(0,p.Fq)(e.palette.common.black,.05),borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}}}))(u.Z),S=(0,A.Z)((function(e){return{root:{padding:e.spacing(4)}}}))(h.Z);function k(){var e=t.useState("panel1"),n=(0,f.Z)(e,2),o=n[0],r=n[1],l=function(e){return function(n,o){r(!!o&&e)}};return(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(j,{square:!0,expanded:"panel1"===o,onChange:l("panel1"),children:[(0,a.jsx)(v,{"aria-controls":"panel1d-content",id:"panel1d-header",children:(0,a.jsx)(c.Z,{children:"Collapsible Group Item #1"})}),(0,a.jsx)(S,{children:(0,a.jsx)(c.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),(0,a.jsxs)(j,{square:!0,expanded:"panel2"===o,onChange:l("panel2"),children:[(0,a.jsx)(v,{"aria-controls":"panel2d-content",id:"panel2d-header",children:(0,a.jsx)(c.Z,{children:"Collapsible Group Item #2"})}),(0,a.jsx)(S,{children:(0,a.jsx)(c.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),(0,a.jsxs)(j,{square:!0,expanded:"panel3"===o,onChange:l("panel3"),children:[(0,a.jsx)(v,{"aria-controls":"panel3d-content",id:"panel3d-header",children:(0,a.jsx)(c.Z,{children:"Collapsible Group Item #3"})}),(0,a.jsx)(S,{children:(0,a.jsx)(c.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}var C=o(13258),T=o(30553),I=(0,d.Z)((function(e){return{root:{width:"100%","& .MuiPaper-root":{backgroundColor:(0,p.$n)(e.palette.background.paper,.1)}}}}));function N(){var e=I();return(0,a.jsxs)(i.Z,{className:e.root,children:[(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(u.Z,{expandIcon:(0,a.jsx)(g.Z,{}),"aria-label":"Expand","aria-controls":"additional-actions1-content",id:"additional-actions1-header",children:(0,a.jsx)(T.Z,{"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:(0,a.jsx)(C.Z,{}),label:"I acknowledge that I should stop the click event propagation"})}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(c.Z,{color:"textSecondary",children:"The click event of the nested action will propagate up and expand the accordion unless you explicitly stop it."})})]}),(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(u.Z,{expandIcon:(0,a.jsx)(g.Z,{}),"aria-label":"Expand","aria-controls":"additional-actions2-content",id:"additional-actions2-header",children:(0,a.jsx)(T.Z,{"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:(0,a.jsx)(C.Z,{}),label:"I acknowledge that I should stop the focus event propagation"})}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(c.Z,{color:"textSecondary",children:"The focus event of the nested action will propagate up and also focus the accordion unless you explicitly stop it."})})]}),(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(u.Z,{expandIcon:(0,a.jsx)(g.Z,{}),"aria-label":"Expand","aria-controls":"additional-actions3-content",id:"additional-actions3-header",children:(0,a.jsx)(T.Z,{"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:(0,a.jsx)(C.Z,{}),label:"I acknowledge that I should provide an aria-label on each action that I add"})}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(c.Z,{color:"textSecondary",children:"If you forget to put an aria-label on the nested action, the label of the action will also be included in the label of the parent button that controls the accordion expansion."})})]})]})}var w=o(86010),D=o(53537),E=o(71267),P=o(282),B=o(55517),M=(0,d.Z)((function(e){return{root:{width:"100%","& .MuiPaper-root":{backgroundColor:(0,p.$n)(e.palette.background.paper,.1)}},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:e.spacing(2,4)},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}}));function O(){var e=M();return(0,a.jsx)(i.Z,{className:e.root,children:(0,a.jsxs)(m.Z,{defaultExpanded:!0,children:[(0,a.jsxs)(u.Z,{expandIcon:(0,a.jsx)(g.Z,{}),"aria-controls":"panel1c-content",id:"panel1c-header",children:[(0,a.jsx)("div",{className:e.column,children:(0,a.jsx)(c.Z,{className:e.heading,children:"Location"})}),(0,a.jsx)("div",{className:e.column,children:(0,a.jsx)(c.Z,{className:e.secondaryHeading,children:"Select trip destination"})})]}),(0,a.jsxs)(h.Z,{className:e.details,children:[(0,a.jsx)("div",{className:e.column}),(0,a.jsx)("div",{className:e.column,children:(0,a.jsx)(E.Z,{label:"Barbados",onDelete:function(){}})}),(0,a.jsx)("div",{className:(0,w.Z)(e.column,e.helper),children:(0,a.jsxs)(c.Z,{variant:"caption",children:["Select your destination of choice",(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"#secondary-heading-and-columns",className:e.link,children:"Learn more"})]})})]}),(0,a.jsx)(B.Z,{}),(0,a.jsxs)(D.Z,{children:[(0,a.jsx)(P.Z,{size:"small",children:"Cancel"}),(0,a.jsx)(P.Z,{size:"small",color:"primary",children:"Save"})]})]})})}var R=(0,l.Z)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),z=o(23606),L=[{label:"Simple accordion",link:"simple-accordion",component:(0,a.jsx)(y,{}),filename:"./SimpleAccordion.txt"},{label:"Controlled accordion",link:"controlled-accordion",component:(0,a.jsx)(Z,{}),filename:"./ControlledAccordions.txt"},{label:"Customized accordions",link:"customized-accordions",component:(0,a.jsx)(k,{}),filename:"./CustomizedAccordions.txt"},{label:"Additional actions",link:"additional-actions",component:(0,a.jsx)(N,{}),filename:"./ActionsInAccordionSummary.txt"},{label:"Secondary heading and columns",link:"secondary-heading-and-columns",component:(0,a.jsx)(O,{}),filename:"./DetailedAccordion.txt"}];function H(){var e=R();return(0,a.jsx)(r.dx,{pageTitle:"Accordion",menus:L,children:L.map((function(n,o){return(0,a.jsxs)(i.Z,{id:n.link,className:e.section,children:[(0,a.jsx)(c.Z,{component:"h3",variant:"inherit",className:e.sectionHeading,children:n.label}),(0,a.jsx)(s.Z,{code:z(n.filename).default,language:"jsx",children:n.component})]},o)}))})}},69078:function(e,n,o){"use strict";o.r(n),n.default='import React from \'react\';\nimport { lighten, makeStyles } from \'@material-ui/core/styles\';\nimport Accordion from \'@material-ui/core/Accordion\';\nimport AccordionSummary from \'@material-ui/core/AccordionSummary\';\nimport AccordionDetails from \'@material-ui/core/AccordionDetails\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport Typography from \'@material-ui/core/Typography\';\nimport ExpandMoreIcon from \'@material-ui/icons/ExpandMore\';\nimport { Box } from \'@material-ui/core\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: \'100%\',\n    \'& .MuiPaper-root\': {\n      backgroundColor: lighten(theme.palette.background.paper, 0.1),\n    },\n  },\n}));\n\nexport default function ActionsInAccordionSummary() {\n  const classes = useStyles();\n\n  return (\n    <Box className={classes.root}>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-label="Expand"\n          aria-controls="additional-actions1-content"\n          id="additional-actions1-header">\n          <FormControlLabel\n            aria-label="Acknowledge"\n            onClick={event => event.stopPropagation()}\n            onFocus={event => event.stopPropagation()}\n            control={<Checkbox />}\n            label="I acknowledge that I should stop the click event propagation"\n          />\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography color="textSecondary">\n            The click event of the nested action will propagate up and expand the accordion unless you explicitly stop it.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-label="Expand"\n          aria-controls="additional-actions2-content"\n          id="additional-actions2-header">\n          <FormControlLabel\n            aria-label="Acknowledge"\n            onClick={event => event.stopPropagation()}\n            onFocus={event => event.stopPropagation()}\n            control={<Checkbox />}\n            label="I acknowledge that I should stop the focus event propagation"\n          />\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography color="textSecondary">\n            The focus event of the nested action will propagate up and also focus the accordion unless you explicitly stop\n            it.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary\n          expandIcon={<ExpandMoreIcon />}\n          aria-label="Expand"\n          aria-controls="additional-actions3-content"\n          id="additional-actions3-header">\n          <FormControlLabel\n            aria-label="Acknowledge"\n            onClick={event => event.stopPropagation()}\n            onFocus={event => event.stopPropagation()}\n            control={<Checkbox />}\n            label="I acknowledge that I should provide an aria-label on each action that I add"\n          />\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography color="textSecondary">\n            If you forget to put an aria-label on the nested action, the label of the action will also be included in the\n            label of the parent button that controls the accordion expansion.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </Box>\n  );\n}\n'},63375:function(e,n,o){"use strict";o.r(n),n.default="import React from 'react';\nimport { lighten, makeStyles } from '@material-ui/core/styles';\nimport Accordion from '@material-ui/core/Accordion';\nimport AccordionDetails from '@material-ui/core/AccordionDetails';\nimport AccordionSummary from '@material-ui/core/AccordionSummary';\nimport Typography from '@material-ui/core/Typography';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: '100%',\n    '& .MuiPaper-root': {\n      backgroundColor: lighten(theme.palette.background.paper, 0.1),\n    },\n  },\n  heading: {\n    fontSize: theme.typography.pxToRem(15),\n    flexBasis: '33.33%',\n    flexShrink: 0,\n  },\n  secondaryHeading: {\n    fontSize: theme.typography.pxToRem(15),\n    color: theme.palette.text.secondary,\n  },\n}));\n\nexport default function ControlledAccordions() {\n  const classes = useStyles();\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleChange = panel => (event, isExpanded) => {\n    setExpanded(isExpanded ? panel : false);\n  };\n\n  return (\n    <Box className={classes.root}>\n      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls=\"panel1bh-content\" id=\"panel1bh-header\">\n          <Typography className={classes.heading}>General settings</Typography>\n          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls=\"panel2bh-content\" id=\"panel2bh-header\">\n          <Typography className={classes.heading}>Users</Typography>\n          <Typography className={classes.secondaryHeading}>You are currently not an owner</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit.\n            Pellentesque convallis laoreet laoreet.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls=\"panel3bh-content\" id=\"panel3bh-header\">\n          <Typography className={classes.heading}>Advanced settings</Typography>\n          <Typography className={classes.secondaryHeading}>\n            Filtering has been entirely disabled for whole web server\n          </Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.\n            Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>\n        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls=\"panel4bh-content\" id=\"panel4bh-header\">\n          <Typography className={classes.heading}>Personal data</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.\n            Duis vel est augue.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </Box>\n  );\n}\n"},99693:function(e,n,o){"use strict";o.r(n),n.default="import React from 'react';\nimport { alpha, withStyles } from '@material-ui/core/styles';\nimport MuiAccordion from '@material-ui/core/Accordion';\nimport MuiAccordionSummary from '@material-ui/core/AccordionSummary';\nimport MuiAccordionDetails from '@material-ui/core/AccordionDetails';\nimport Typography from '@material-ui/core/Typography';\nimport { Box } from '@material-ui/core';\n\nconst Accordion = withStyles({\n  root: {\n    border: '1px solid rgba(0, 0, 0, .125)',\n    boxShadow: 'none',\n    '&:not(:last-child)': {\n      borderBottom: 0,\n    },\n    '&:before': {\n      display: 'none',\n    },\n    '&$expanded': {\n      margin: 'auto',\n    },\n  },\n  expanded: {},\n})(MuiAccordion);\n\nconst AccordionSummary = withStyles(theme => ({\n  root: {\n    backgroundColor: alpha(theme.palette.common.dark, 0.05),\n    borderBottom: '1px solid rgba(0, 0, 0, .125)',\n    marginBottom: -1,\n    minHeight: 56,\n    '&$expanded': {\n      minHeight: 56,\n    },\n  },\n  content: {\n    '&$expanded': {\n      margin: '12px 0',\n    },\n  },\n  expanded: {},\n}))(MuiAccordionSummary);\n\nconst AccordionDetails = withStyles(theme => ({\n  root: {\n    padding: theme.spacing(4),\n  },\n}))(MuiAccordionDetails);\n\nexport default function CustomizedAccordions() {\n  const [expanded, setExpanded] = React.useState('panel1');\n\n  const handleChange = panel => (event, newExpanded) => {\n    setExpanded(newExpanded ? panel : false);\n  };\n\n  return (\n    <Box>\n      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>\n        <AccordionSummary aria-controls=\"panel1d-content\" id=\"panel1d-header\">\n          <Typography>Collapsible Group Item #1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo\n            lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet\n            blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>\n        <AccordionSummary aria-controls=\"panel2d-content\" id=\"panel2d-header\">\n          <Typography>Collapsible Group Item #2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo\n            lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet\n            blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>\n        <AccordionSummary aria-controls=\"panel3d-content\" id=\"panel3d-header\">\n          <Typography>Collapsible Group Item #3</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo\n            lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet\n            blandit leo lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n    </Box>\n  );\n}\n"},12855:function(e,n,o){"use strict";o.r(n),n.default="import React from 'react';\nimport { lighten, makeStyles } from '@material-ui/core/styles';\nimport clsx from 'clsx';\nimport Accordion from '@material-ui/core/Accordion';\nimport AccordionDetails from '@material-ui/core/AccordionDetails';\nimport AccordionSummary from '@material-ui/core/AccordionSummary';\nimport AccordionActions from '@material-ui/core/AccordionActions';\nimport Typography from '@material-ui/core/Typography';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\nimport Chip from '@material-ui/core/Chip';\nimport Button from '@material-ui/core/Button';\nimport Divider from '@material-ui/core/Divider';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: '100%',\n    '& .MuiPaper-root': {\n      backgroundColor: lighten(theme.palette.background.paper, 0.1),\n    },\n  },\n  heading: {\n    fontSize: theme.typography.pxToRem(15),\n  },\n  secondaryHeading: {\n    fontSize: theme.typography.pxToRem(15),\n    color: theme.palette.text.secondary,\n  },\n  icon: {\n    verticalAlign: 'bottom',\n    height: 20,\n    width: 20,\n  },\n  details: {\n    alignItems: 'center',\n  },\n  column: {\n    flexBasis: '33.33%',\n  },\n  helper: {\n    borderLeft: `2px solid ${theme.palette.divider}`,\n    padding: theme.spacing(2, 4),\n  },\n  link: {\n    color: theme.palette.primary.main,\n    textDecoration: 'none',\n    '&:hover': {\n      textDecoration: 'underline',\n    },\n  },\n}));\n\nexport default function DetailedAccordion() {\n  const classes = useStyles();\n\n  return (\n    <Box className={classes.root}>\n      <Accordion defaultExpanded>\n        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls=\"panel1c-content\" id=\"panel1c-header\">\n          <div className={classes.column}>\n            <Typography className={classes.heading}>Location</Typography>\n          </div>\n          <div className={classes.column}>\n            <Typography className={classes.secondaryHeading}>Select trip destination</Typography>\n          </div>\n        </AccordionSummary>\n        <AccordionDetails className={classes.details}>\n          <div className={classes.column} />\n          <div className={classes.column}>\n            <Chip label=\"Barbados\" onDelete={() => {}} />\n          </div>\n          <div className={clsx(classes.column, classes.helper)}>\n            <Typography variant=\"caption\">\n              Select your destination of choice\n              <br />\n              <a href=\"#secondary-heading-and-columns\" className={classes.link}>\n                Learn more\n              </a>\n            </Typography>\n          </div>\n        </AccordionDetails>\n        <Divider />\n        <AccordionActions>\n          <Button size=\"small\">Cancel</Button>\n          <Button size=\"small\" color=\"primary\">\n            Save\n          </Button>\n        </AccordionActions>\n      </Accordion>\n    </Box>\n  );\n}\n"},25919:function(e,n,o){"use strict";o.r(n),n.default="import React from 'react';\nimport { lighten, makeStyles } from '@material-ui/core/styles';\nimport Accordion from '@material-ui/core/Accordion';\nimport AccordionSummary from '@material-ui/core/AccordionSummary';\nimport AccordionDetails from '@material-ui/core/AccordionDetails';\nimport Typography from '@material-ui/core/Typography';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: '100%',\n    '& .MuiPaper-root': {\n      backgroundColor: lighten(theme.palette.background.paper, 0.1),\n    },\n  },\n  heading: {\n    fontSize: theme.typography.pxToRem(15),\n    fontWeight: theme.typography.fontWeightRegular,\n  },\n}));\n\nexport default function SimpleAccordion() {\n  const classes = useStyles();\n\n  return (\n    <Box className={classes.root}>\n      <Accordion>\n        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls=\"panel1a-content\" id=\"panel1a-header\">\n          <Typography className={classes.heading}>Accordion 1</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo\n            lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion>\n        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls=\"panel2a-content\" id=\"panel2a-header\">\n          <Typography className={classes.heading}>Accordion 2</Typography>\n        </AccordionSummary>\n        <AccordionDetails>\n          <Typography>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo\n            lobortis eget.\n          </Typography>\n        </AccordionDetails>\n      </Accordion>\n      <Accordion disabled>\n        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls=\"panel3a-content\" id=\"panel3a-header\">\n          <Typography className={classes.heading}>Disabled Accordion</Typography>\n        </AccordionSummary>\n      </Accordion>\n    </Box>\n  );\n}\n"}}]);