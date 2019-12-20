(this["webpackJsonpreact-social"]=this["webpackJsonpreact-social"]||[]).push([[27],{496:function(e,t,a){"use strict";a.r(t);var n,i=a(8),o=a(43),r=a(49),l=a(45),s=a(48),c=a(16),p=a(154),m=a.n(p),d=a(179),u=a(550),g=a(0),h=a.n(g),b=a(106),f=a(61),x=a(95),v=a(22),E=a(15),O=a(86),w=a(800),j=a(521),k=a(696),I=a(524),y=a(522),N=a(50),C=a(33),S=a(4),A=a(180);!function(e){e.GITHUB="GITHUB",e.FACEBOOK="FACEBOOK",e.GOOGLE="GOOGLE"}(n||(n={}));a(211),a(14).a;var R=a(81),T=a(19),W=a(547),B=a.n(W),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).styles={singinOptions:{paddingBottom:10,justifyContent:"space-around",display:"flex"},divider:{marginBottom:10,marginTop:15}},a.handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,i=t.name;switch(a.setState(Object(E.a)({},i,n)),i){case"emailInput":a.setState({emailInputError:""});break;case"passwordInput":a.setState({confirmInputError:"",passwordInputError:""})}},a.handleForm=function(){var e=a.props.t,t=!1;""===a.state.emailInput&&(a.setState({emailInputError:e("login.emailRequiredError")}),t=!0),""===a.state.passwordInput&&(a.setState({passwordInputError:e("login.passwordRequiredError")}),t=!0),t||a.props.login(a.state.emailInput,a.state.passwordInput)},a.state={emailInput:"",emailInputError:"",passwordInput:"",passwordInputError:"",confirmInputError:""},a.handleForm=a.handleForm.bind(Object(O.a)(a)),a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.loginWithOAuth,i=e.t,o=e.loginRequest,r=this.state.emailInput,l=h.a.createElement("div",{style:this.styles.singinOptions},h.a.createElement(I.a,{onClick:function(){return a(n.FACEBOOK)}},h.a.createElement("div",{className:"icon-fb icon"})),h.a.createElement(I.a,{onClick:function(){return a(n.GOOGLE)}}," ",h.a.createElement("div",{className:"icon-google icon"})," "),h.a.createElement(I.a,{onClick:function(){return a(n.GITHUB)}}," ",h.a.createElement("div",{className:"icon-github icon"})," ")),s=N.a.createServerRequestId(C.a.AuthLogin,r),c=o.get(s,{status:T.a.NoAction}).status===T.a.Sent;return h.a.createElement("form",{className:t.paper},h.a.createElement("div",{className:t.root},v.a.settings.enabledOAuthLogin?l:"",h.a.createElement(k.a,null),h.a.createElement(y.a,{className:t.textField,color:"secondary",autoFocus:!0,onChange:this.handleInputChange,helperText:this.state.emailInputError,error:""!==this.state.emailInputError.trim(),name:"emailInput",label:i("login.emailLabel"),type:"email",tabIndex:1}),h.a.createElement("br",null),h.a.createElement(y.a,{color:"secondary",className:t.textField,onChange:this.handleInputChange,helperText:this.state.passwordInputError,error:""!==this.state.passwordInputError.trim(),name:"passwordInput",label:i("login.passwordLabel"),type:"password",tabIndex:2}),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("div",{className:"login__button-box"},h.a.createElement("div",{className:t.wrapperButton},h.a.createElement(w.a,{variant:"contained",color:"secondary",disabled:c,onClick:this.handleForm,fullWidth:!0,tabIndex:3},i("login.loginButton")),c&&h.a.createElement(j.a,{size:24,className:t.buttonProgress}))),h.a.createElement("div",{className:t.forgotRoot},h.a.createElement("span",{className:t.bottomPaper},h.a.createElement(A.a,{to:"/resetPassword",className:t.forgotText},i("login.forgetPasswordMessage")))),h.a.createElement(k.a,null),h.a.createElement("div",{className:t.forgotRoot},h.a.createElement("span",{className:t.bottomPaper},i("login.createAccountText")," ",h.a.createElement(A.a,{to:"/signup",className:t.link},i("login.createAccountButton"))))))}}]),t}(g.Component),z=Object(b.c)("translations")(P),L=Object(x.withRouter)(Object(f.connect)((function(e,t){return{loginRequest:e.getIn(["server","request"],Object(S.Map)({}))}}),(function(e,t){return{login:function(t,a){e(R.dbLogin(t,a))},loginWithOAuth:function(t){return e(R.dbLoginWithOAuth(t))},signupPage:function(){e(Object(d.a)("/signup"))}}}))(Object(c.a)((function(e){return{textField:{minWidth:280,marginTop:20},root:Object(E.a)({padding:"48px 40px 36px"},e.breakpoints.down("xs"),{padding:"0px 40px 36px"}),contain:{margin:"0 auto",marginTop:50},paper:{textAlign:"center",display:"block",margin:"auto"},bottomPaper:{display:"inherit",fontSize:"small",marginTop:"25px",marginBottom:15},link:{color:e.palette.primary.main,display:"inline-block"},logo:{height:60},wrapperButton:{position:"relative",width:"100%",maxWidth:280,minWidth:280},buttonSuccess:{backgroundColor:B.a[500],"&:hover":{backgroundColor:B.a[700]}},buttonProgress:{color:B.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},title:Object(E.a)({fontSize:30,fontWeight:300,marginTop:"-19px"},e.breakpoints.down("xs"),{display:"none"}),forgotText:{fontSize:11}}}))(z))),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return h.a.createElement("div",{className:e.root},h.a.createElement("div",{className:e.appbar},h.a.createElement("img",{src:v.a.settings.logo,alt:v.a.settings.appName,className:e.logo})),h.a.createElement("div",{className:e.pageContainer},h.a.createElement("div",{className:m()(e.centerRoot,"animate-bottom")},h.a.createElement("div",{className:e.centerContainer},h.a.createElement("div",{className:m()(e.contain,e.pageItem)},h.a.createElement(L,null)))),h.a.createElement("div",{style:{height:30}}),h.a.createElement(u.a,null)))}}]),t}(g.Component),D=Object(b.c)("translations")(F),G=Object(c.a)((function(e){var t,a;return{logo:{fill:"currentColor",height:"2em",display:"inline-block",fontSize:"21px",transition:"fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",userSelect:"none",flexShrink:0},pageContainer:(t={position:"relative",flexDirection:"row",justifyContent:"center",alignItems:"center",flex:"1 0 auto",padding:"55px 0 11px 0"},Object(E.a)(t,e.breakpoints.down("xs"),{padding:"0px 0 11px 0"}),Object(E.a)(t,"&:before",{position:"absolute",top:"-145px",left:"0",width:"100%",minHeight:"365px",height:"60vh",content:'" "',backgroundRepeat:"no-repeat",backgroundSize:"cover",transition:"background .4s",backgroundPositionY:"initial",backgroundPositionX:"center"}),t),pageItem:Object(E.a)({zIndex:1,minWidth:435},e.breakpoints.down("xs"),{minWidth:"100%"}),appbar:{position:"relative",display:"flex",justifyContent:"center",marginTop:15},contain:Object(E.a)({backgroundColor:"white"},e.breakpoints.down("xs"),{margin:0,padding:0,width:"100%",backgroundColor:"transparent"}),loginContent:{position:"relative",display:"flex",flexDirection:"column",minHeight:382,height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPositionY:"initial",backgroundPositionX:"center"},loginSide:{maxWidth:260,minWidth:260},sideTitle:{color:"white",textAlign:"center",fontWeight:300},sideBody:{color:"white",textAlign:"center",fontWeight:300},sideContain:{position:"absolute",width:"100%",height:"100%",zIndex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},sideButton:{border:"1px solid rgba(255, 255, 255, 0.72)",color:"rgba(255, 255, 255, 0.87)"},colorCover:{position:"absolute",width:"100%",height:"100%",backgroundColor:"#3366ff"},centerRoot:Object(E.a)({maxWidth:1240,height:519,width:"100%",margin:"0 auto",padding:"0 20px"},e.breakpoints.down("xs"),{margin:0,padding:0,height:330}),centerContainer:(a={display:"flex",margin:"0 auto",boxShadow:" 0 20px 40px rgba(0,0,0,.1)",textAlign:"center",borderRadius:5,width:435,overflow:"hidden"},Object(E.a)(a,e.breakpoints.down("xs"),{boxShadow:"unset",margin:0,padding:0,width:"100% !important",borderRadius:0}),Object(E.a)(a,e.breakpoints.down("sm"),{width:435}),a)}}),{withTheme:!0})(D),H=Object(x.withRouter)(Object(f.connect)((function(){return{}}),(function(e,t){return{signupPage:function(){e(Object(d.a)("/signup"))}}}))(G));t.default=H},547:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};t.default=n},550:function(e,t,a){"use strict";var n=a(8),i=a(43),o=a(49),r=a(45),l=a(48),s=a(780),c=a(16),p=a(0),m=a.n(p),d=a(106),u=a(61),g=a(180),h=a(22),b=a(15),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.t;return m.a.createElement("div",{className:t.root},m.a.createElement("div",{className:t.content},m.a.createElement(s.a,{item:!0,xs:12,sm:9,md:9,lg:9},m.a.createElement("nav",{className:t.nav},m.a.createElement("ul",{className:t.list},m.a.createElement("li",{className:t.item},m.a.createElement(g.a,{to:"/terms"},a("terms.privacyTitle"))),m.a.createElement("li",{className:t.item},m.a.createElement("a",{href:"mailto:".concat(h.a.settings.supportEmail,"?Subject=Hola"),target:"_top"},a("footer.supportEmail")))))),m.a.createElement("span",{className:t.companyName},"\xa9 ",(new Date).getFullYear()," ",h.a.settings.companyName)))}}]),t}(p.Component),x=Object(d.c)("translations")(f),v=Object(u.connect)((function(){return{}}),(function(e,t){return{}}))(Object(c.a)((function(e){return{root:{backgroundColor:"#fafafa",order:5,padding:"0 20px",alignItems:"stretch",display:"flex",flexDirection:"column",flexShrink:0,margin:0,position:"relative",width:"100%"},content:Object(b.a)({fontSize:"12px",fontWeight:500,display:"flex",margin:"0 auto",textTransform:"uppercase",width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center"}),nav:{alignItems:"stretch",display:"flex",flex:1,flexDirection:"column",flexShrink:0,margin:0,padding:0,position:"relative"},list:Object(b.a)({flexGrow:1,marginBottom:"3px",marginRight:"16px"},e.breakpoints.down("xs"),{maxWidth:"100%",textAlign:"center"}),item:{display:"inline-block",marginBottom:"7px",marginRight:"16px",fontWeight:500,whiteSpace:"nowrap"},companyName:{color:"#999",lineHeight:3,whiteSpace:"nowrap"},getAppRoot:{alignItems:"stretch",display:"flex",flexDirection:"column",flexShrink:0,margin:0,padding:0,position:"relative",marginTop:"15px"},getApp:{color:"#262626",fontSize:"14px",lineHeight:"18px",margin:"10px 20px",textAlign:"center"},getAppIconRoot:{flexDirection:"row",justifyContent:"center",margin:"10px 0",alignItems:"stretch",boxSizing:"border-box",display:"flex",flexShrink:0,padding:0,position:"relative"},iosAppLink:{marginRight:"8px",lineHeight:"85px"},appStoreIcon:{height:"40px"},googlePlayIcon:{height:"56px"}}}))(x));t.a=v},696:function(e,t,a){"use strict";var n=a(3),i=a(7),o=a(0),r=a.n(o),l=(a(12),a(11)),s=a(16),c=a(65),p=r.a.forwardRef((function(e,t){var a=e.absolute,o=void 0!==a&&a,s=e.classes,c=e.className,p=e.component,m=void 0===p?"hr":p,d=e.light,u=void 0!==d&&d,g=e.orientation,h=void 0===g?"horizontal":g,b=e.role,f=void 0===b?"hr"!==m?"separator":void 0:b,x=e.variant,v=void 0===x?"fullWidth":x,E=Object(i.a)(e,["absolute","classes","className","component","light","orientation","role","variant"]);return r.a.createElement(m,Object(n.a)({className:Object(l.default)(s.root,c,"fullWidth"!==v&&s[v],o&&s.absolute,u&&s.light,{vertical:s.vertical}[h]),role:f,ref:t},E))}));t.a=Object(s.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1}}}),{name:"MuiDivider"})(p)}}]);