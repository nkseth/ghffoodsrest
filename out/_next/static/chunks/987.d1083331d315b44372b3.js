(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{75658:function(e,n,t){var o={"./BadgeAlignment.txt":30177,"./BadgeMax.txt":22882,"./BadgeOverlap.txt":41044,"./BadgeVisibility.txt":28415,"./CustomizedBadges.txt":57915,"./DotBadge.txt":18043,"./ShowZeroBadge.txt":20264,"./SimpleBadge.txt":91636};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=75658},10770:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var o=t(22122),r=t(85061),a=t(2949),i=t(67294),l=(t(59864),t(45697),t(86010)),c=t(52543),s=t(22318),m=t(59693),d=(0,t(63786).Z)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),u=t(32467);var g=(0,c.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,m._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var n=e.classes,t=(0,a.Z)(e,["classes"]);return i.createElement(u.Z,(0,o.Z)({component:"li",className:n.root,focusRipple:!0},t),i.createElement(d,{className:n.icon}))}));var p=i.forwardRef((function(e,n){var t=e.children,c=e.classes,m=e.className,d=e.component,u=void 0===d?"nav":d,p=e.expandText,h=void 0===p?"Show path":p,f=e.itemsAfterCollapse,x=void 0===f?1:f,b=e.itemsBeforeCollapse,y=void 0===b?1:b,v=e.maxItems,B=void 0===v?8:v,Z=e.separator,j=void 0===Z?"/":Z,C=(0,a.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),S=i.useState(!1),O=S[0],w=S[1],N=i.Children.toArray(t).filter((function(e){return i.isValidElement(e)})).map((function(e,n){return i.createElement("li",{className:c.li,key:"child-".concat(n)},e)}));return i.createElement(s.Z,(0,o.Z)({ref:n,component:u,color:"textSecondary",className:(0,l.Z)(c.root,m)},C),i.createElement("ol",{className:c.ol},function(e,n,t){return e.reduce((function(o,r,a){return a<e.length-1?o=o.concat(r,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(a),className:n},t)):o.push(r),o}),[])}(O||B&&N.length<=B?N:function(e){return y+x>=e.length?e:[].concat((0,r.Z)(e.slice(0,y)),[i.createElement(g,{"aria-label":h,key:"ellipsis",onClick:function(e){w(!0);var n=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");n&&n.focus()}})],(0,r.Z)(e.slice(e.length-x,e.length)))}(N),c.separator,j)))})),h=(0,c.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(p)},6562:function(e,n,t){"use strict";var o=t(22122),r=t(2949),a=t(67294),i=(t(45697),t(86010)),l=t(52543),c=a.forwardRef((function(e,n){var t=e.classes,l=e.className,c=e.row,s=void 0!==c&&c,m=(0,r.Z)(e,["classes","className","row"]);return a.createElement("div",(0,o.Z)({className:(0,i.Z)(t.root,l,s&&t.row),ref:n},m))}));n.Z=(0,l.Z)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(c)},52541:function(e,n,t){"use strict";var o=t(22122),r=t(28481),a=t(2949),i=t(67294),l=(t(45697),t(6562)),c=t(17294),s=t(22775),m=t(79305),d=t(95001),u=i.forwardRef((function(e,n){var t=e.actions,u=e.children,g=e.name,p=e.value,h=e.onChange,f=(0,a.Z)(e,["actions","children","name","value","onChange"]),x=i.useRef(null),b=(0,s.Z)({controlled:p,default:e.defaultValue,name:"RadioGroup"}),y=(0,r.Z)(b,2),v=y[0],B=y[1];i.useImperativeHandle(t,(function(){return{focus:function(){var e=x.current.querySelector("input:not(:disabled):checked");e||(e=x.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var Z=(0,c.Z)(n,x),j=(0,d.Z)(g);return i.createElement(m.Z.Provider,{value:{name:j,onChange:function(e){B(e.target.value),h&&h(e,e.target.value)},value:v}},i.createElement(l.Z,(0,o.Z)({role:"radiogroup",ref:Z},f),u))}));n.Z=u},62865:function(e,n,t){"use strict";var o=t(95318),r=t(20862);n.Z=void 0;var a=r(t(67294)),i=(0,o(t(2108)).default)(a.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Mail");n.Z=i},28346:function(e,n,t){"use strict";var o=t(95318),r=t(20862);n.Z=void 0;var a=r(t(67294)),i=(0,o(t(2108)).default)(a.createElement("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),"ShoppingCart");n.Z=i},57948:function(e,n,t){"use strict";t.d(n,{nB:function(){return Z},dx:function(){return C},Vr:function(){return x},mr:function(){return g}});var o=t(85893),r=t(38347),a=t(26265),i=(t(67294),t(41120)),l=t(28889),c=t(22318),s=t(86010);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=(0,i.Z)((function(e){return{pageHeaderRoot:(0,a.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,a.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),g=function(e){var n=e.heading,t=e.breadcrumbComponent,a=e.children,i=(0,r.Z)(e,["heading","breadcrumbComponent","children"]),m=u();return(0,o.jsxs)(l.Z,d(d({className:(0,s.Z)(m.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},i),{},{children:[(0,o.jsx)(c.Z,{component:"div",variant:"h1",className:(0,s.Z)(m.titleRoot,"title"),children:n}),(0,o.jsx)(l.Z,{ml:{sm:"auto"},children:t}),a]}))},p=t(10770),h=t(41664),f=(0,i.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),x=function(e){var n=e.items,t=((0,r.Z)(e,["items"]),f());return(0,o.jsx)(p.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:n.map((function(e,n){return e.isActive?(0,o.jsx)(c.Z,{className:t.textSm,color:"textPrimary",children:e.label},n):(0,o.jsx)(h.default,{href:e.link||"/",children:(0,o.jsx)("a",{className:(0,s.Z)(t.textSm,t.linkBlock),children:e.label})},n)}))})},b=t(41749),y=t(14490),v=t(67757),B=t(75322),Z=function(e){var n=e.SourceCodeComponent,t=e.SettingsComponent,r=e.children;return(0,o.jsx)(B.Z,{children:(0,o.jsxs)(v.Z,{children:[(0,o.jsxs)(b.Z,{item:!0,xs:12,md:7,children:[(0,o.jsx)(g,{heading:"Preview"}),(0,o.jsx)(l.Z,{mb:8,children:r}),(0,o.jsx)(y.Z,{children:n})]}),(0,o.jsx)(b.Z,{item:!0,xs:12,md:5,children:t})]})})},j=t(42890),C=function(e){var n=e.pageTitle,t=e.menus,r=e.children,a=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:n,isActive:!0}];return(0,o.jsx)(j.Z,{pageTitle:n,breadcrumbs:a,menus:t,children:r})}},42890:function(e,n,t){"use strict";var o=t(85893),r=t(26265),a=(t(67294),t(28889)),i=t(82598),l=t(22318),c=t(62822),s=t(50998),m=t(95757),d=t(41120),u=t(75322),g=(0,d.Z)((function(e){var n;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(n={width:"100%"},(0,r.Z)(n,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,r.Z)(n,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),n),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));n.Z=function(e){var n=e.pageTitle,t=e.menus,r=e.breadcrumbs,d=e.children,p=g();return(0,o.jsx)(u.Z,{heading:n,breadcrumbs:r,children:(0,o.jsxs)(a.Z,{className:p.root,children:[(0,o.jsx)(a.Z,{className:p.contentArea,children:d}),(0,o.jsx)(i.Z,{xsDown:!0,children:(0,o.jsxs)(a.Z,{className:p.contentSidebar,children:[(0,o.jsx)(l.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,o.jsx)(c.Z,{children:t.map((function(e,n){return(0,o.jsx)(s.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,o.jsx)(m.Z,{primary:e.label})},n)}))})]})})]})})}},75322:function(e,n,t){"use strict";var o=t(26265),r=t(85893),a=(t(67294),t(28889)),i=t(57948),l=t(82285),c=t(32427),s=t(86010);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=(0,c.Z)((function(e){return{pageFull:{width:"100%",height:"100%",paddingBottom:"70px"}}}));n.Z=function(e){var n=e.heading,t=e.breadcrumbs,o=e.children,c=e.className,m=e.restProps,g=u();return(0,r.jsx)(l.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,r.jsxs)(a.Z,d(d({className:(0,s.Z)(g.pageFull,c)},m),{},{children:[(n||t)&&(0,r.jsx)(i.mr,{heading:n,breadcrumbComponent:t&&(0,r.jsx)(i.Vr,{items:t})}),o]}))})}},40987:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var o=t(85893),r=t(67294),a=t(57948),i=t(28889),l=t(22318),c=t(94111),s=t(39137),m=t(41120),d=t(59009),u=t(62865),g=(0,m.Z)((function(e){return{root:{"& > *":{margin:e.spacing(2)}}}}));function p(){var e=g();return(0,o.jsxs)(i.Z,{className:e.root,children:[(0,o.jsx)(d.Z,{badgeContent:4,color:"primary",children:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(d.Z,{badgeContent:4,color:"secondary",children:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(d.Z,{badgeContent:4,color:"error",children:(0,o.jsx)(u.Z,{})})]})}var h=t(52543),f=t(17812),x=t(28346),b=(0,h.Z)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"}}}))(d.Z);function y(){return(0,o.jsx)(f.Z,{"aria-label":"cart",children:(0,o.jsx)(b,{badgeContent:4,color:"secondary",children:(0,o.jsx)(x.Z,{})})})}var v=(0,m.Z)((function(e){return{root:{"& > *":{margin:e.spacing(2)}}}}));function B(){var e=v();return(0,o.jsxs)(i.Z,{className:e.root,children:[(0,o.jsx)(d.Z,{color:"secondary",badgeContent:0,children:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(d.Z,{color:"secondary",badgeContent:0,showZero:!0,children:(0,o.jsx)(u.Z,{})})]})}var Z=t(26265);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){(0,Z.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S=(0,m.Z)((function(e){return{root:{"& > *":{margin:e.spacing(4)}}}})),O={color:"secondary",children:(0,o.jsx)(u.Z,{})};function w(){var e=S();return(0,o.jsxs)(i.Z,{className:e.root,children:[(0,o.jsx)(d.Z,C({badgeContent:99},O)),(0,o.jsx)(d.Z,C({badgeContent:100},O)),(0,o.jsx)(d.Z,C({badgeContent:1e3,max:999},O))]})}var N=(0,m.Z)((function(e){return{root:{"& > *":{margin:e.spacing(2)}}}}));function k(){var e=N();return(0,o.jsxs)(i.Z,{className:e.root,children:[(0,o.jsx)(d.Z,{color:"secondary",variant:"dot",children:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(d.Z,{color:"secondary",variant:"dot",children:(0,o.jsx)(l.Z,{children:"Typography"})})]})}var R=t(86010),z=(0,m.Z)((function(e){return{root:{"& > *":{margin:e.spacing(2)}},shape:{backgroundColor:e.palette.primary.main,width:40,height:40},shapeCircle:{borderRadius:"50%"}}}));function M(){var e=z(),n=(0,o.jsx)(i.Z,{className:e.shape}),t=(0,o.jsx)(i.Z,{className:(0,R.Z)(e.shape,e.shapeCircle)});return(0,o.jsxs)(i.Z,{className:e.root,children:[(0,o.jsx)(d.Z,{color:"secondary",badgeContent:" ",children:n}),(0,o.jsx)(d.Z,{color:"secondary",badgeContent:" ",variant:"dot",children:n}),(0,o.jsx)(d.Z,{color:"secondary",overlap:"circular",badgeContent:" ",children:t}),(0,o.jsx)(d.Z,{color:"secondary",overlap:"circular",badgeContent:" ",variant:"dot",children:t})]})}var I=t(64121),P=t(64436),E=t(30553),D=t(96019),F=t(48662),T=t(52541),L=t(5694),H=(0,m.Z)((function(e){return{root:{width:"100%"},formControl:{margin:e.spacing(6)},row:{display:"flex",justifyContent:"center"},margin:{margin:e.spacing(4)}}}));function V(){var e=H(),n=r.useState("right"),t=(0,I.Z)(n,2),a=t[0],l=t[1],c=r.useState("top"),s=(0,I.Z)(c,2),m=s[0],g=s[1],p="\n<Badge\n  anchorOrigin={{\n    vertical: '".concat(m,"',\n    horizontal: '").concat(a,"',\n  }}\n>\n");return(0,o.jsxs)(i.Z,{className:e.root,children:[(0,o.jsxs)(i.Z,{className:e.row,children:[(0,o.jsxs)(P.Z,{component:"fieldset",className:e.formControl,children:[(0,o.jsx)(D.Z,{component:"legend",children:"Vertical"}),(0,o.jsxs)(T.Z,{name:"vertical",value:m,onChange:function(e){g(e.target.value)},children:[(0,o.jsx)(E.Z,{value:"top",control:(0,o.jsx)(F.Z,{}),label:"Top"}),(0,o.jsx)(E.Z,{value:"bottom",control:(0,o.jsx)(F.Z,{}),label:"Bottom"})]})]}),(0,o.jsxs)(P.Z,{component:"fieldset",className:e.formControl,children:[(0,o.jsx)(D.Z,{component:"legend",children:"Horizontal"}),(0,o.jsxs)(T.Z,{name:"horizontal",value:a,onChange:function(e){l(e.target.value)},children:[(0,o.jsx)(E.Z,{value:"right",control:(0,o.jsx)(F.Z,{}),label:"Right"}),(0,o.jsx)(E.Z,{value:"left",control:(0,o.jsx)(F.Z,{}),label:"Left"})]})]})]}),(0,o.jsxs)(i.Z,{className:e.row,children:[(0,o.jsx)(d.Z,{color:"secondary",variant:"dot",badgeContent:1,anchorOrigin:{horizontal:a,vertical:m},className:e.margin,children:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(d.Z,{color:"secondary",badgeContent:1,anchorOrigin:{horizontal:a,vertical:m},className:e.margin,children:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(d.Z,{color:"secondary",badgeContent:12,anchorOrigin:{horizontal:a,vertical:m},className:e.margin,children:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(d.Z,{color:"secondary",badgeContent:123,anchorOrigin:{horizontal:a,vertical:m},className:e.margin,children:(0,o.jsx)(u.Z,{})}),(0,o.jsx)(d.Z,{color:"secondary",max:999,badgeContent:1337,anchorOrigin:{horizontal:a,vertical:m},className:e.margin,children:(0,o.jsx)(u.Z,{})})]}),(0,o.jsx)(L.BN,{code:p,language:"jsx"})]})}var A=(0,c.Z)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),G=t(75658),_=[{label:"Basic badges",link:"basic-badges",component:(0,o.jsx)(p,{}),filename:"./SimpleBadge.txt"},{label:"Customized badges",link:"customized-badges",component:(0,o.jsx)(y,{}),filename:"./CustomizedBadges.txt"},{label:"Badge visibility",link:"badge-visibility",component:(0,o.jsx)(y,{}),filename:"./CustomizedBadges.txt"},{label:"Show Zero Badge",link:"show-zero-badge",component:(0,o.jsx)(B,{}),filename:"./ShowZeroBadge.txt"},{label:"Maximum value",link:"maximum-value",component:(0,o.jsx)(w,{}),filename:"./BadgeMax.txt"},{label:"Dot badge",link:"Dot badge",component:(0,o.jsx)(k,{}),filename:"./DotBadge.txt"},{label:"Badge overlap",link:"badge-overlap",component:(0,o.jsx)(M,{}),filename:"./BadgeOverlap.txt"},{label:"Badge alignment",link:"badge-alignment",component:(0,o.jsx)(V,{}),filename:"./BadgeAlignment.txt"}];function q(){var e=A();return(0,o.jsx)(a.dx,{pageTitle:"Badge",menus:_,children:_.map((function(n,t){return(0,o.jsxs)(i.Z,{id:n.link,className:e.section,children:[(0,o.jsx)(l.Z,{component:"h3",variant:"inherit",className:e.sectionHeading,children:n.label}),(0,o.jsx)(s.Z,{code:G(n.filename).default,language:"jsx",children:n.component})]},t)}))})}},30177:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport Badge from \'@material-ui/core/Badge\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\nimport Radio from \'@material-ui/core/Radio\';\nimport RadioGroup from \'@material-ui/core/RadioGroup\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport MailIcon from \'@material-ui/icons/Mail\';\nimport { Box } from \'@material-ui/core\';\nimport { HighlightedCode } from \'../../../../../../@jumbo/components/Common\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: \'100%\',\n  },\n  formControl: {\n    margin: theme.spacing(6),\n  },\n  row: {\n    display: \'flex\',\n    justifyContent: \'center\',\n  },\n  margin: {\n    margin: theme.spacing(4),\n  },\n}));\n\nexport default function BadgeAlignment() {\n  const classes = useStyles();\n  const [horizontal, setHorizontal] = React.useState(\'right\');\n  const [vertical, setVertical] = React.useState(\'top\');\n\n  const handleHorizontalChange = event => {\n    setHorizontal(event.target.value);\n  };\n\n  const handleVerticalChange = event => {\n    setVertical(event.target.value);\n  };\n\n  const jsx = `\n<Badge\n  anchorOrigin={{\n    vertical: \'${vertical}\',\n    horizontal: \'${horizontal}\',\n  }}\n>\n`;\n\n  return (\n    <Box className={classes.root}>\n      <Box className={classes.row}>\n        <FormControl component="fieldset" className={classes.formControl}>\n          <FormLabel component="legend">Vertical</FormLabel>\n          <RadioGroup name="vertical" value={vertical} onChange={handleVerticalChange}>\n            <FormControlLabel value="top" control={<Radio />} label="Top" />\n            <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />\n          </RadioGroup>\n        </FormControl>\n        <FormControl component="fieldset" className={classes.formControl}>\n          <FormLabel component="legend">Horizontal</FormLabel>\n          <RadioGroup name="horizontal" value={horizontal} onChange={handleHorizontalChange}>\n            <FormControlLabel value="right" control={<Radio />} label="Right" />\n            <FormControlLabel value="left" control={<Radio />} label="Left" />\n          </RadioGroup>\n        </FormControl>\n      </Box>\n      <Box className={classes.row}>\n        <Badge\n          color="secondary"\n          variant="dot"\n          badgeContent={1}\n          anchorOrigin={{\n            horizontal,\n            vertical,\n          }}\n          className={classes.margin}>\n          <MailIcon />\n        </Badge>\n        <Badge\n          color="secondary"\n          badgeContent={1}\n          anchorOrigin={{\n            horizontal,\n            vertical,\n          }}\n          className={classes.margin}>\n          <MailIcon />\n        </Badge>\n        <Badge\n          color="secondary"\n          badgeContent={12}\n          anchorOrigin={{\n            horizontal,\n            vertical,\n          }}\n          className={classes.margin}>\n          <MailIcon />\n        </Badge>\n        <Badge\n          color="secondary"\n          badgeContent={123}\n          anchorOrigin={{\n            horizontal,\n            vertical,\n          }}\n          className={classes.margin}>\n          <MailIcon />\n        </Badge>\n        <Badge\n          color="secondary"\n          max={999}\n          badgeContent={1337}\n          anchorOrigin={{\n            horizontal,\n            vertical,\n          }}\n          className={classes.margin}>\n          <MailIcon />\n        </Badge>\n      </Box>\n      <HighlightedCode code={jsx} language="jsx" />\n    </Box>\n  );\n}\n'},22882:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport MailIcon from '@material-ui/icons/Mail';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    '& > *': {\n      margin: theme.spacing(4),\n    },\n  },\n}));\n\nconst defaultProps = {\n  color: 'secondary',\n  children: <MailIcon />,\n};\n\nexport default function BadgeMax() {\n  const classes = useStyles();\n\n  return (\n    <Box className={classes.root}>\n      <Badge badgeContent={99} {...defaultProps} />\n      <Badge badgeContent={100} {...defaultProps} />\n      <Badge badgeContent={1000} max={999} {...defaultProps} />\n    </Box>\n  );\n}\n"},41044:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport clsx from \'clsx\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Badge from \'@material-ui/core/Badge\';\nimport { Box } from \'@material-ui/core\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    \'& > *\': {\n      margin: theme.spacing(2),\n    },\n  },\n  shape: {\n    backgroundColor: theme.palette.primary.main,\n    width: 40,\n    height: 40,\n  },\n  shapeCircle: {\n    borderRadius: \'50%\',\n  },\n}));\n\nexport default function BadgeOverlap() {\n  const classes = useStyles();\n\n  const rectangle = <Box className={classes.shape} />;\n  const circle = <Box className={clsx(classes.shape, classes.shapeCircle)} />;\n\n  return (\n    <Box className={classes.root}>\n      <Badge color="secondary" badgeContent=" ">\n        {rectangle}\n      </Badge>\n      <Badge color="secondary" badgeContent=" " variant="dot">\n        {rectangle}\n      </Badge>\n      <Badge color="secondary" overlap="circular" badgeContent=" ">\n        {circle}\n      </Badge>\n      <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">\n        {circle}\n      </Badge>\n    </Box>\n  );\n}\n'},28415:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\nimport Button from '@material-ui/core/Button';\nimport AddIcon from '@material-ui/icons/Add';\nimport RemoveIcon from '@material-ui/icons/Remove';\nimport MailIcon from '@material-ui/icons/Mail';\nimport Switch from '@material-ui/core/Switch';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    '& > *': {\n      marginBottom: theme.spacing(4),\n    },\n    '& .MuiBadge-root': {\n      marginRight: theme.spacing(8),\n    },\n  },\n}));\n\nexport default function BadgeVisibility() {\n  const classes = useStyles();\n  const [count, setCount] = React.useState(1);\n  const [invisible, setInvisible] = React.useState(false);\n\n  const handleBadgeVisibility = () => {\n    setInvisible(!invisible);\n  };\n\n  return (\n    <Box className={classes.root}>\n      <Box>\n        <Badge color=\"secondary\" badgeContent={count}>\n          <MailIcon />\n        </Badge>\n        <ButtonGroup>\n          <Button\n            aria-label=\"reduce\"\n            onClick={() => {\n              setCount(Math.max(count - 1, 0));\n            }}>\n            <RemoveIcon fontSize=\"small\" />\n          </Button>\n          <Button\n            aria-label=\"increase\"\n            onClick={() => {\n              setCount(count + 1);\n            }}>\n            <AddIcon fontSize=\"small\" />\n          </Button>\n        </ButtonGroup>\n      </Box>\n      <Box>\n        <Badge color=\"secondary\" variant=\"dot\" invisible={invisible}>\n          <MailIcon />\n        </Badge>\n        <FormControlLabel\n          control={<Switch color=\"primary\" checked={!invisible} onChange={handleBadgeVisibility} />}\n          label=\"Show Badge\"\n        />\n      </Box>\n    </Box>\n  );\n}\n"},57915:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Badge from '@material-ui/core/Badge';\nimport { withStyles } from '@material-ui/core/styles';\nimport IconButton from '@material-ui/core/IconButton';\nimport ShoppingCartIcon from '@material-ui/icons/ShoppingCart';\n\nconst StyledBadge = withStyles(theme => ({\n  badge: {\n    right: -3,\n    top: 13,\n    border: `2px solid ${theme.palette.background.paper}`,\n    padding: '0 4px',\n  },\n}))(Badge);\n\nexport default function CustomizedBadges() {\n  return (\n    <IconButton aria-label=\"cart\">\n      <StyledBadge badgeContent={4} color=\"secondary\">\n        <ShoppingCartIcon />\n      </StyledBadge>\n    </IconButton>\n  );\n}\n"},18043:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport MailIcon from '@material-ui/icons/Mail';\nimport Typography from '@material-ui/core/Typography';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    '& > *': {\n      margin: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function DotBadge() {\n  const classes = useStyles();\n\n  return (\n    <Box className={classes.root}>\n      <Badge color=\"secondary\" variant=\"dot\">\n        <MailIcon />\n      </Badge>\n      <Badge color=\"secondary\" variant=\"dot\">\n        <Typography>Typography</Typography>\n      </Badge>\n    </Box>\n  );\n}\n"},20264:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport MailIcon from '@material-ui/icons/Mail';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    '& > *': {\n      margin: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function ShowZeroBadge() {\n  const classes = useStyles();\n\n  return (\n    <Box className={classes.root}>\n      <Badge color=\"secondary\" badgeContent={0}>\n        <MailIcon />\n      </Badge>\n      <Badge color=\"secondary\" badgeContent={0} showZero>\n        <MailIcon />\n      </Badge>\n    </Box>\n  );\n}\n"},91636:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport MailIcon from '@material-ui/icons/Mail';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    '& > *': {\n      margin: theme.spacing(2),\n    },\n  },\n}));\n\nexport default function SimpleBadge() {\n  const classes = useStyles();\n\n  return (\n    <Box className={classes.root}>\n      <Badge badgeContent={4} color=\"primary\">\n        <MailIcon />\n      </Badge>\n      <Badge badgeContent={4} color=\"secondary\">\n        <MailIcon />\n      </Badge>\n      <Badge badgeContent={4} color=\"error\">\n        <MailIcon />\n      </Badge>\n    </Box>\n  );\n}\n"}}]);