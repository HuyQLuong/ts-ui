(this["webpackJsonpreact-social"]=this["webpackJsonpreact-social"]||[]).push([[24],{500:function(e,t,a){"use strict";a.r(t);var r,n=a(15),i=a(8),o=a(43),c=a(49),s=a(45),l=a(86),p=a(48),d=a(800),u=a(521),h=a(307),m=a(309),f=a(780),g=a(305),b=a(313),v=a(308),y=a(16),E=a(178),x=a(154),w=a.n(x),O=a(576),C=a(179),S=a(9),R=a(550),N=a(0),_=a.n(N),j=a(106),k=a(61),L=a(95),I=a(29),D=a(22),P=a(81),A=a(5);!function(e){e[e.EnterEmail=0]="EnterEmail",e[e.VerificationCode=1]="VerificationCode"}(r||(r={}));var V=a(823),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e)))._authorizeService=void 0,a.handleInputChange=function(e){var t=a.props.t,r=e.target,n="checkbox"===r.type?r.checked:r.value,i=r.name;if("email"===i){var o="";n&&""===n.trim()&&(o=t("resetPassword.requiredEmailError"));var c=n.trim();a.setState({email:c,emailError:o,isNextDisabled:""!==o})}if("code"===i){var s="",l=n?n.trim():"";!n||n&&""===n.trim()?s=t("smsVerification.requiredCodeError"):n&&4!==n.trim().length&&(s=t("smsVerification.validCodeError")),a.setState({code:l,codeError:s,isVerifyDisabled:""!==s})}},a.handleNextEmail=function(){var e=a.props.showMessage,t=a.state,n=t.email,i=t.isCaptchaSuccess,o=t.captchaVerifier;if(n&&""!==n.trim()&&i){a.setState({loading:!0});var c=a.state.email;a._authorizeService.sendResetPasswordVerification(c.trim(),o).then((function(e){a.setState({step:r.VerificationCode,verifyId:e,loading:!1})})).catch((function(t){e(t.message),a.handleReset()}))}},a.handleSuccessCaptcha=function(e){a.setState({captchaVerifier:e,isCaptchaSuccess:!0})},a.handleExpiredCaptcha=function(){var e=a.props;(0,e.showMessage)((0,e.t)("resetPassword.capthaExpiredMessage")),a.handleReset()},a.handleReset=function(){a.setState({email:"",emailError:"",code:"",codeError:"",loading:!1,isNextDisabled:!0,isVerifyDisabled:!0,step:r.EnterEmail})},a.handleVerifyCode=function(){var e=a.state,t=e.code,r=e.verifyId,n=e.email,i=a.props,o=i.updatePassword,c=i.showMessage,s=i.login;a._authorizeService.confirmResetPassword(t,r,n).then((function(e){s(e),o()})).catch((function(e){c(e.message),a.handleReset()}))},a.handleErrorCapthaRender=function(){var e=a.props;(0,e.showMessage)((0,e.t)("resetPassword.capthaRenderErrorMessage")),a.handleReset()},a._authorizeService=I.a.get(S.a.AuthorizeService),a.state={email:"",emailError:"",code:"",codeError:"",isNextDisabled:!0,isVerifyDisabled:!0,verifyId:"",loading:!1,step:r.EnterEmail,isCaptchaSuccess:!1,captchaVerifier:null},a.handleNextEmail=a.handleNextEmail.bind(Object(l.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.t,i=e.logout,o=this.state,c=o.email,s=o.emailError,l=o.isNextDisabled,p=o.step,y=o.code,x=o.codeError,C=o.isVerifyDisabled,S=o.loading,N=o.isCaptchaSuccess;return _.a.createElement(f.a,{container:!0,spacing:2},_.a.createElement(f.a,{item:!0,xs:12,className:t.contain},_.a.createElement("div",{className:"animate-bottom"},_.a.createElement(v.a,{className:t.paper,elevation:1},_.a.createElement("div",{className:t.boxRoot},_.a.createElement("div",{style:{paddingLeft:"40px",paddingRight:"40px"}},_.a.createElement("img",{className:t.logo,src:D.a.settings.raisedLogo,alt:D.a.settings.companyName})),_.a.createElement("div",{className:w()(Object(n.a)({},t.noDisplay,p!==r.EnterEmail))},_.a.createElement(h.a,{className:t.formControl,error:""!==s,"aria-describedby":"email-error-text"},_.a.createElement(b.a,{htmlFor:"email"},a("resetPassword.emailLabel")),_.a.createElement(g.a,{type:"email",id:"email",value:c,name:"email",onChange:this.handleInputChange,autoFocus:!0}),_.a.createElement(m.a,{id:"email-error-text"},s)),_.a.createElement("br",null),_.a.createElement("br",null),_.a.createElement(O.a,{onSuccess:this.handleSuccessCaptcha,onExpired:this.handleExpiredCaptcha,onRenderError:this.handleErrorCapthaRender}),_.a.createElement("div",{className:"settings__button-box"},_.a.createElement("div",null,_.a.createElement(d.a,{className:t.backButton,onClick:i},a("resetPassword.backButton"))),_.a.createElement("div",{className:t.wrapper},_.a.createElement(d.a,{variant:"contained",color:"primary",className:t.nextButton,disabled:l||!N||S,onClick:this.handleNextEmail},a("resetPassword.verifyButton")," "),S&&_.a.createElement(u.a,{size:24,className:t.buttonProgress}))),_.a.createElement(E.a,{className:t.caption,variant:"caption",component:"p"},a("resetPassword.emailDescription"))),_.a.createElement("div",{className:w()(Object(n.a)({},t.noDisplay,p!==r.VerificationCode))},_.a.createElement(h.a,{className:t.formControl,error:""!==x,"aria-describedby":"code-error-text"},_.a.createElement(b.a,{htmlFor:"code"},a("resetPassword.codeLabel")),_.a.createElement(g.a,{type:"tel",id:"code",value:y,name:"code",onChange:this.handleInputChange,autoFocus:!0}),_.a.createElement(m.a,{id:"code-error-text"},x)),_.a.createElement("br",null),_.a.createElement("br",null),_.a.createElement("div",{className:"settings__button-box"},_.a.createElement("div",null,_.a.createElement(d.a,{className:t.nextButton,onClick:i},a("resetPassword.resetButton"))),_.a.createElement("div",null,_.a.createElement(d.a,{variant:"contained",color:"primary",className:t.nextButton,disabled:C,onClick:this.handleVerifyCode},a("resetPassword.verifyButton")," "))),_.a.createElement(E.a,{className:t.caption,variant:"caption",component:"p"},a("resetPassword.codeVerifyDescription"))))))),_.a.createElement(R.a,null))}}]),t}(N.Component),T=Object(j.c)("translations")(z),U=Object(L.withRouter)(Object(k.connect)((function(e,t){return{}}),(function(e,t){return{logout:function(){return e(P.dbLogout())},home:function(){return e(Object(C.a)("/"))},updatePassword:function(){return e(Object(C.a)("/newPassword"))},showMessage:function(t){return e(A.showMessage(t))},login:function(t){return e(P.login(t))}}}))(Object(y.a)((function(e){return{textField:{minWidth:280,marginTop:20},wrapper:{margin:e.spacing(1),position:"relative"},buttonProgress:{color:V.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},caption:{marginTop:30},formControl:{minWidth:280},noDisplay:{display:"none"},loading:{position:"absolute",top:"45%",left:"45%"},contain:{margin:"0 auto",marginTop:50},paper:{minHeight:370,maxWidth:450,minWidth:337,textAlign:"center",display:"block",margin:"auto"},logo:{height:50,marginBottom:30},boxRoot:{padding:"20px 40px 36px"},backButton:{margin:8}}}))(T)));t.default=U},550:function(e,t,a){"use strict";var r=a(8),n=a(43),i=a(49),o=a(45),c=a(48),s=a(780),l=a(16),p=a(0),d=a.n(p),u=a(106),h=a(61),m=a(180),f=a(22),g=a(15),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.t;return d.a.createElement("div",{className:t.root},d.a.createElement("div",{className:t.content},d.a.createElement(s.a,{item:!0,xs:12,sm:9,md:9,lg:9},d.a.createElement("nav",{className:t.nav},d.a.createElement("ul",{className:t.list},d.a.createElement("li",{className:t.item},d.a.createElement(m.a,{to:"/terms"},a("terms.privacyTitle"))),d.a.createElement("li",{className:t.item},d.a.createElement("a",{href:"mailto:".concat(f.a.settings.supportEmail,"?Subject=Hola"),target:"_top"},a("footer.supportEmail")))))),d.a.createElement("span",{className:t.companyName},"\xa9 ",(new Date).getFullYear()," ",f.a.settings.companyName)))}}]),t}(p.Component),v=Object(u.c)("translations")(b),y=Object(h.connect)((function(){return{}}),(function(e,t){return{}}))(Object(l.a)((function(e){return{root:{backgroundColor:"#fafafa",order:5,padding:"0 20px",alignItems:"stretch",display:"flex",flexDirection:"column",flexShrink:0,margin:0,position:"relative",width:"100%"},content:Object(g.a)({fontSize:"12px",fontWeight:500,display:"flex",margin:"0 auto",textTransform:"uppercase",width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center"}),nav:{alignItems:"stretch",display:"flex",flex:1,flexDirection:"column",flexShrink:0,margin:0,padding:0,position:"relative"},list:Object(g.a)({flexGrow:1,marginBottom:"3px",marginRight:"16px"},e.breakpoints.down("xs"),{maxWidth:"100%",textAlign:"center"}),item:{display:"inline-block",marginBottom:"7px",marginRight:"16px",fontWeight:500,whiteSpace:"nowrap"},companyName:{color:"#999",lineHeight:3,whiteSpace:"nowrap"},getAppRoot:{alignItems:"stretch",display:"flex",flexDirection:"column",flexShrink:0,margin:0,padding:0,position:"relative",marginTop:"15px"},getApp:{color:"#262626",fontSize:"14px",lineHeight:"18px",margin:"10px 20px",textAlign:"center"},getAppIconRoot:{flexDirection:"row",justifyContent:"center",margin:"10px 0",alignItems:"stretch",boxSizing:"border-box",display:"flex",flexShrink:0,padding:0,position:"relative"},iosAppLink:{marginRight:"8px",lineHeight:"85px"},appStoreIcon:{height:"40px"},googlePlayIcon:{height:"56px"}}}))(v));t.a=y},575:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(12),o=a.n(i),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this));return a.handleExpired=a.handleExpired.bind(a),a.handleErrored=a.handleErrored.bind(a),a.handleRecaptchaRef=a.handleRecaptchaRef.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},t.prototype.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},t.prototype.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},t.prototype.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},t.prototype.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.props.onChange&&this.props.onChange(null)},t.prototype.handleErrored=function(){this.props.onErrored&&this.props.onErrored()},t.prototype.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.props.onChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},t.prototype.componentDidMount=function(){this.explicitRender()},t.prototype.componentDidUpdate=function(){this.explicitRender()},t.prototype.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},t.prototype.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},t.prototype.handleRecaptchaRef=function(e){this.captcha=e},t.prototype.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge"]));return n.a.createElement("div",c({},t,{ref:this.handleRecaptchaRef}))},t}(n.a.Component),l=s;s.displayName="ReCAPTCHA",s.propTypes={sitekey:o.a.string.isRequired,onChange:o.a.func,grecaptcha:o.a.object,theme:o.a.oneOf(["dark","light"]),type:o.a.oneOf(["image","audio"]),tabindex:o.a.number,onExpired:o.a.func,onErrored:o.a.func,size:o.a.oneOf(["compact","normal","invisible"]),stoken:o.a.string,badge:o.a.oneOf(["bottomright","bottomleft","inline"])},s.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var p=a(89),d=a.n(p);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var h={},m=0;function f(){return"undefined"!==typeof window&&window.recaptchaOptions||{}}var g,b,v="onloadcallback",y=f(),E=(g=function(){var e=f(),t=e.lang?"&hl="+e.lang:"";return"https://"+(e.useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+v+"&render=explicit"+t},b=(b={callbackName:v,globalName:"grecaptcha",removeOnUnmount:y.removeOnUnmount||!1})||{},function(e){var t=e.displayName||e.name||"Component",a=function(t){var a,n;function i(e,a){var r;return(r=t.call(this,e,a)||this).state={},r.__scriptURL="",r}n=t,(a=i).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var o=i.prototype;return o.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+m++),this.__scriptLoaderID},o.setupScriptURL=function(){return this.__scriptURL="function"===typeof g?g():g,this.__scriptURL},o.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},o.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=h[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[b.callbackName]},o.componentDidMount=function(){var e=this,t=this.setupScriptURL(),a=this.asyncScriptLoaderGetScriptLoaderID(),r=b,n=r.globalName,i=r.callbackName,o=r.scriptId;if(n&&"undefined"!==typeof window[n]&&(h[t]={loaded:!0,observers:{}}),h[t]){var c=h[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[a]=function(t){return e.asyncScriptLoaderHandleLoad(t)},h[t]={loaded:!1,observers:s};var l=document.createElement("script");l.src=t,l.async=!0,o&&(l.id=o);var p=function(e){if(h[t]){var a=h[t].observers;for(var r in a)e(a[r])&&delete a[r]}};i&&"undefined"!==typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=h[t];e&&(e.loaded=!0,p((function(t){return!i&&(t(e),!0)})))},l.onerror=function(){var e=h[t];e&&(e.errored=!0,p((function(t){return t(e),!0})))},document.body.appendChild(l)},o.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===b.removeOnUnmount)for(var t=document.getElementsByTagName("script"),a=0;a<t.length;a+=1)t[a].src.indexOf(e)>-1&&t[a].parentNode&&t[a].parentNode.removeChild(t[a]);var r=h[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===b.removeOnUnmount&&delete h[e])},o.render=function(){var t=b.globalName,a=this.props,n=(a.asyncScriptOnLoad,a.forwardedRef),i=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(a,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=n,Object(r.createElement)(e,i)},i}(r.Component),n=Object(r.forwardRef)((function(e,t){return Object(r.createElement)(a,u({},e,{forwardedRef:t}))}));return n.displayName="AsyncScriptLoader("+t+")",n.propTypes={asyncScriptOnLoad:o.a.func},d()(n,e)})(l);t.a=E},576:function(e,t,a){"use strict";var r=a(8),n=a(43),i=a(49),o=a(45),c=a(48),s=a(16),l=a(9),p=a(0),d=a.n(p),u=a(575),h=a(61),m=a(29),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).captchaRef=void 0,a._authorizeService=void 0,a.setCaptchaRef=function(e){},a._authorizeService=m.a.get(l.a.AuthorizeService),a.state={},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.onExpired,r=t.onSuccess;return d.a.createElement("div",{className:"recaptcha"},d.a.createElement(u.a,{ref:function(t){return e.setCaptchaRef(t)},sitekey:"6LcO1EUUAAAAAK7tBHxyT1iNF0Oa_VbG6WSMnGyL",onChange:r,onExpired:a}))}}]),t}(p.Component),g=Object(h.connect)((function(e,t){return{}}),(function(e,t){return{}}))(Object(s.a)((function(e){return{dialogTitle:{padding:0}}}))(f));t.a=g},823:function(e,t,a){"use strict";t.a={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"}}}]);