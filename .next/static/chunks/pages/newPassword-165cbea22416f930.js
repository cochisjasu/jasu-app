(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[973],{19897:function(n){!function(r){"use strict";var t={bytesToHex:function(n){return function(n){return n.map((function(n){return r=n.toString(16),t=2,r.length>t?r:Array(t-r.length+1).join("0")+r;var r,t})).join("")}(n)},hexToBytes:function(n){if(n.length%2===1)throw new Error("hexToBytes can't have a string with an odd number of characters.");return 0===n.indexOf("0x")&&(n=n.slice(2)),n.match(/../g).map((function(n){return parseInt(n,16)}))}};n.exports?n.exports=t:r.convertHex=t}(this)},36496:function(n){!function(r){"use strict";var t={bytesToString:function(n){return n.map((function(n){return String.fromCharCode(n)})).join("")},stringToBytes:function(n){return n.split("").map((function(n){return n.charCodeAt(0)}))}};t.UTF8={bytesToString:function(n){return decodeURIComponent(escape(t.bytesToString(n)))},stringToBytes:function(n){return t.stringToBytes(unescape(encodeURIComponent(n)))}},n.exports?n.exports=t:r.convertString=t}(this)},10526:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newPassword",function(){return t(44378)}])},44378:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var e=t(47568),s=t(14924),o=t(26042),a=t(69396),i=t(70655),u=t(85893),c=t(67294),f=t(11163),v=t(66252),h=t(76935),g=t(54165),l=t.n(g),p=t(16426),d=t(13381),w=t(33632);function x(){var n=(0,c.useState)(!1),r=n[0],t=n[1],g=(0,c.useState)({}),x=g[0],y=g[1],T=(0,c.useState)(!1),b=T[0],m=T[1],S=(0,v.x)(),_=(0,h.Ds)().enqueueSnackbar,P=(0,f.useRouter)(),C=P.query.recoverId,Z=(0,c.useContext)(p.ZP.Context),E=Z.session,k=Z.dictionary,B=(0,c.useCallback)((0,e.Z)((function(){var n,r;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return n=function(){var n=(0,e.Z)((function(){var n,r,t;return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,S.mutate({mutation:w.redeemRecovery,variables:{password:l()(x.password),recovery:C||""}})];case 1:if(n=e.sent(),r=n.errors,t=n.data,r&&r.length>0)throw new Error(r[0].message);return[2,t.redeemRecovery]}}))}));return function(){return n.apply(this,arguments)}}(),x.password!=x.confirmPassword?[2,_(k.session.passMismatch,{variant:"warning"})]:[4,n()];case 1:if(!(r=t.sent()))return[2,_(k.session.newPasswordError,{variant:"warning"})];switch(r.status){case 0:return[2,m(!0)];case 1:return[2,_(k.session.invalidToken,{variant:"error"})];case 2:return[2,_(k.session.expiredToken,{variant:"error"})]}return[2]}}))})),[x]),H=function(){var n=(0,e.Z)((function(n){var r;return(0,i.__generator)(this,(function(e){switch(e.label){case 0:t(!0),n.preventDefault(),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,B()];case 2:return e.sent(),[3,4];case 3:return r=e.sent(),_(r.toString(),{variant:"error"}),[3,4];case 4:return t(!1),[2]}}))}));return function(r){return n.apply(this,arguments)}}();(0,c.useEffect)((function(){E&&P.push("/")}),[]);return(0,u.jsx)(c.Fragment,{children:(0,u.jsx)(d.ZP.SessionPanel,{children:b?(0,u.jsx)(d.ZP.Message,{message:k.session.newPasswordMessage}):(0,u.jsx)(d.ZP.NewPasswordForm,{onSubmit:H,handleInputChange:function(n){y((function(r){return(0,a.Z)((0,o.Z)({},r),(0,s.Z)({},n.target.name,n.target.value))}))},loading:r})})})}},54165:function(n,r,t){!function(r){"use strict";var e={};n.exports?(e.bytesToHex=t(19897).bytesToHex,e.convertString=t(36496),n.exports=i):(e.bytesToHex=r.convertHex.bytesToHex,e.convertString=r.convertString,r.sha256=i);var s=[];!function(){function n(n){for(var r=Math.sqrt(n),t=2;t<=r;t++)if(!(n%t))return!1;return!0}function r(n){return 4294967296*(n-(0|n))|0}for(var t=2,e=0;e<64;)n(t)&&(s[e]=r(Math.pow(t,1/3)),e++),t++}();var o=[],a=function(n,r,t){for(var e=n[0],a=n[1],i=n[2],u=n[3],c=n[4],f=n[5],v=n[6],h=n[7],g=0;g<64;g++){if(g<16)o[g]=0|r[t+g];else{var l=o[g-15],p=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,d=o[g-2],w=(d<<15|d>>>17)^(d<<13|d>>>19)^d>>>10;o[g]=p+o[g-7]+w+o[g-16]}var x=e&a^e&i^a&i,y=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),T=h+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&f^~c&v)+s[g]+o[g];h=v,v=f,f=c,c=u+T|0,u=i,i=a,a=e,e=T+(y+x)|0}n[0]=n[0]+e|0,n[1]=n[1]+a|0,n[2]=n[2]+i|0,n[3]=n[3]+u|0,n[4]=n[4]+c|0,n[5]=n[5]+f|0,n[6]=n[6]+v|0,n[7]=n[7]+h|0};function i(n,r){n.constructor===String&&(n=e.convertString.UTF8.stringToBytes(n));var t=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s=function(n){for(var r=[],t=0,e=0;t<n.length;t++,e+=8)r[e>>>5]|=n[t]<<24-e%32;return r}(n),o=8*n.length;s[o>>5]|=128<<24-o%32,s[15+(o+64>>9<<4)]=o;for(var i=0;i<s.length;i+=16)a(t,s,i);var u=function(n){for(var r=[],t=0;t<32*n.length;t+=8)r.push(n[t>>>5]>>>24-t%32&255);return r}(t);return r&&r.asBytes?u:r&&r.asString?e.convertString.bytesToString(u):e.bytesToHex(u)}i.x2=function(n,r){return i(i(n,{asBytes:!0}),r)}}(this)}},function(n){n.O(0,[384,381,774,888,179],(function(){return r=10526,n(n.s=r);var r}));var r=n.O();_N_E=r}]);