(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{19897:function(n){!function(t){"use strict";var r={bytesToHex:function(n){return function(n){return n.map((function(n){return t=n.toString(16),r=2,t.length>r?t:Array(r-t.length+1).join("0")+t;var t,r})).join("")}(n)},hexToBytes:function(n){if(n.length%2===1)throw new Error("hexToBytes can't have a string with an odd number of characters.");return 0===n.indexOf("0x")&&(n=n.slice(2)),n.match(/../g).map((function(n){return parseInt(n,16)}))}};n.exports?n.exports=r:t.convertHex=r}(this)},36496:function(n){!function(t){"use strict";var r={bytesToString:function(n){return n.map((function(n){return String.fromCharCode(n)})).join("")},stringToBytes:function(n){return n.split("").map((function(n){return n.charCodeAt(0)}))}};r.UTF8={bytesToString:function(n){return decodeURIComponent(escape(r.bytesToString(n)))},stringToBytes:function(n){return r.stringToBytes(unescape(encodeURIComponent(n)))}},n.exports?n.exports=r:t.convertString=r}(this)},28894:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return r(84835)}])},84835:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var e=r(47568),s=r(14924),a=r(26042),o=r(69396),i=r(70655),u=r(85893),c=r(11163),f=r(67294),p=r(66252),h=r(76935),g=r(54165),l=r.n(g),v=r(16426),m=r(13381),y=r(33632);function b(){var n=(0,f.useState)(!1),t=n[0],r=n[1],g=(0,f.useState)({recaptcha:(0,f.useRef)(null),firstName:"",lastName:"",email:"",password:"",confirmPassword:"",companyName:"",companyWebsite:""}),b=g[0],d=g[1],x=(0,f.useState)(!1),w=x[0],S=x[1],T=(0,c.useRouter)(),_=(0,p.x)(),N=(0,h.Ds)().enqueueSnackbar,C=(0,f.useContext)(v.ZP.Context),Z=C.session,E=C.dictionary;Z&&T.push("/");var P=(0,f.useCallback)(function(){var n=(0,e.Z)((function(n){var t,r,s;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:return t=function(){var n=(0,e.Z)((function(n){var t,r,e;return(0,i.__generator)(this,(function(s){switch(s.label){case 0:return[4,_.mutate({mutation:y.signUp,variables:{input:n}})];case 1:if(t=s.sent(),r=t.errors,e=t.data,r&&r.length>0)throw new Error(r[0].message);return[2,e.signUp]}}))}));return function(t){return n.apply(this,arguments)}}(),r={firstName:b.firstName,lastName:b.lastName,email:b.email,password:l()(b.password),companyName:b.companyName,companyWebsite:b.companyWebsite,gre:n},[4,t(r)];case 1:if(s=a.sent())switch(s.status){case 1:N(E.session.mailUnavailable,{variant:"warning"});break;case 2:N(E.session.captchaError,{variant:"error"});break;case 3:S(!0)}else N(E.session.signUpError,{variant:"error"});return[2]}}))}));return function(t){return n.apply(this,arguments)}}(),[b]),U=function(){var n=(0,e.Z)((function(n){var t,e,s,a,o;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return r(!0),n.preventDefault(),s=b.recaptcha.current.getValue(),a=b.password===b.confirmPassword,s?[3,1]:(N(E.session.emptyCaptcha,{variant:"error"}),[3,5]);case 1:return a?[3,2]:(N(E.session.passMismatch,{variant:"error"}),[3,5]);case 2:return i.trys.push([2,4,,5]),[4,P(s)];case 3:return i.sent(),[3,5];case 4:return o=i.sent(),N(o.toString(),{variant:"error"}),[3,5];case 5:return null===(t=b.recaptcha)||void 0===t||null===(e=t.current)||void 0===e||e.reset(),r(!1),[2]}}))}));return function(t){return n.apply(this,arguments)}}();return(0,u.jsx)(f.Fragment,{children:(0,u.jsx)(m.ZP.SessionPanel,{children:w?(0,u.jsx)(m.ZP.Message,{message:E.session.signUpMessage}):(0,u.jsx)(m.ZP.SignupForm,{onSubmit:U,handleInputChange:function(n){d((function(t){return(0,o.Z)((0,a.Z)({},t),(0,s.Z)({},n.target.name,n.target.value))}))},formData:b,loading:t})})})}},54165:function(n,t,r){!function(t){"use strict";var e={};n.exports?(e.bytesToHex=r(19897).bytesToHex,e.convertString=r(36496),n.exports=i):(e.bytesToHex=t.convertHex.bytesToHex,e.convertString=t.convertString,t.sha256=i);var s=[];!function(){function n(n){for(var t=Math.sqrt(n),r=2;r<=t;r++)if(!(n%r))return!1;return!0}function t(n){return 4294967296*(n-(0|n))|0}for(var r=2,e=0;e<64;)n(r)&&(s[e]=t(Math.pow(r,1/3)),e++),r++}();var a=[],o=function(n,t,r){for(var e=n[0],o=n[1],i=n[2],u=n[3],c=n[4],f=n[5],p=n[6],h=n[7],g=0;g<64;g++){if(g<16)a[g]=0|t[r+g];else{var l=a[g-15],v=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,m=a[g-2],y=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10;a[g]=v+a[g-7]+y+a[g-16]}var b=e&o^e&i^o&i,d=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),x=h+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&f^~c&p)+s[g]+a[g];h=p,p=f,f=c,c=u+x|0,u=i,i=o,o=e,e=x+(d+b)|0}n[0]=n[0]+e|0,n[1]=n[1]+o|0,n[2]=n[2]+i|0,n[3]=n[3]+u|0,n[4]=n[4]+c|0,n[5]=n[5]+f|0,n[6]=n[6]+p|0,n[7]=n[7]+h|0};function i(n,t){n.constructor===String&&(n=e.convertString.UTF8.stringToBytes(n));var r=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s=function(n){for(var t=[],r=0,e=0;r<n.length;r++,e+=8)t[e>>>5]|=n[r]<<24-e%32;return t}(n),a=8*n.length;s[a>>5]|=128<<24-a%32,s[15+(a+64>>9<<4)]=a;for(var i=0;i<s.length;i+=16)o(r,s,i);var u=function(n){for(var t=[],r=0;r<32*n.length;r+=8)t.push(n[r>>>5]>>>24-r%32&255);return t}(r);return t&&t.asBytes?u:t&&t.asString?e.convertString.bytesToString(u):e.bytesToHex(u)}i.x2=function(n,t){return i(i(n,{asBytes:!0}),t)}}(this)}},function(n){n.O(0,[384,381,774,888,179],(function(){return t=28894,n(n.s=t);var t}));var t=n.O();_N_E=t}]);