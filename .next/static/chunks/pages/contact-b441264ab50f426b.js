(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{80721:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"sendComment"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"NewComment"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sendComment"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[]}]}},{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"sendUserComment"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"NewUserComment"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sendUserComment"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[]}]}}],loc:{start:0,end:165}};n.loc.source={body:"mutation sendComment($input: NewComment!)\n{\n    sendComment(input: $input)\n}\n\nmutation sendUserComment($input: NewUserComment!){\n    sendUserComment(input: $input)\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var i={};function a(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}function o(e,n){var t={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=i[n]||new Set,s=new Set,r=new Set;for(o.forEach((function(e){r.add(e)}));r.size>0;){var l=r;r=new Set,l.forEach((function(e){s.has(e)||(s.add(e),(i[e]||new Set).forEach((function(e){r.add(e)})))}))}return s.forEach((function(n){var i=a(e,n);i&&t.definitions.push(i)})),t}n.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),i[e.name.value]=n}})),e.exports=n,e.exports.sendComment=o(n,"sendComment"),e.exports.sendUserComment=o(n,"sendUserComment")},78367:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(71958)}])},65233:function(e,n,t){"use strict";var i=t(50542);n.Z=function(e){return function(n,t){i.ZP.event({category:e,action:n,label:t})}}},71958:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var i=t(47568),a=t(14924),o=t(26042),s=t(69396),r=t(70655),l=t(85893),u=t(67294),m=t(66252),c=t(76935),d=t(16426),f=t(13381),p=t(41120),v=t(50253),h=t(22318),g=t(57863),k=(0,p.Z)((function(e){return{root:(0,a.Z)({display:"flex",flexDirection:"column",paddingInline:e.spacing(2),marginBlock:e.spacing(10),alignItems:"stretch",width:"100%"},e.breakpoints.up("md"),{maxWidth:600}),title:{color:e.palette.secondary.main,fontSize:40,lineHeight:"60px",textAlign:"center"},subtitle:{textAlign:"center"},form:{display:"flex",flexDirection:"column",marginBlock:e.spacing(3)},inputBox:(0,a.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("md"),{flexDirection:"row",flexWrap:"wrap"}),textField:(0,a.Z)({marginBottom:e.spacing(3)},e.breakpoints.up("md"),{width:"50%","&:nth-of-type(odd)":{paddingRight:e.spacing(1.5)},"&:nth-of-type(even)":{paddingLeft:e.spacing(1.5)},"&:last-child":{paddingInline:0}}),multiline:{width:"100%"},button:{marginTop:e.spacing(3),width:"fit-content",marginInline:"auto"}}}));function N(e){var n=e.onSubmit,t=e.contactData,i=e.handleInputChange,a=e.loading,o=k(),s=(0,u.useContext)(d._y).dictionary;return(0,l.jsxs)(v.Z,{className:o.root,children:[(0,l.jsx)(h.Z,{variant:"h1",component:"h1",className:o.title,children:s.session.contactTitle}),(0,l.jsx)(h.Z,{className:o.subtitle,children:s.session.required}),(0,l.jsxs)("form",{className:o.form,onSubmit:n,autoComplete:"on",children:[(0,l.jsxs)(v.Z,{className:o.inputBox,children:[(0,l.jsx)(g.tH,{value:t.name,className:o.textField,required:!0,label:s.session.name,name:"name",onChange:i,autoComplete:"name"}),(0,l.jsx)(g.tH,{value:t.email,className:o.textField,required:!0,label:s.session.email,name:"email",onChange:i,type:"email",autoComplete:"email"}),(0,l.jsx)(g.tH,{value:t.phone,className:o.textField,required:!0,label:s.session.phone,name:"phone",onChange:i,type:"tel",autoComplete:"tel"}),(0,l.jsx)(g.tH,{value:t.companyName,className:o.textField,required:!0,label:s.session.companyName,name:"companyName",onChange:i,autoComplete:"organization"}),(0,l.jsx)(g.tH,{value:t.message,className:o.multiline,required:!0,label:s.session.message,name:"message",onChange:i,multiline:!0,minRows:5})]}),(0,l.jsx)(g.Sn,{className:o.button,loading:a,label:s.session.sendMessage,type:"submit"})]})]})}var b=t(80721),x=t(11163),C=t(65233);function y(){var e=(0,u.useState)(!1),n=e[0],t=e[1],p=(0,u.useState)({name:"",email:"",phone:"",companyName:"",message:""}),v=p[0],h=p[1],g=(0,u.useState)(!1),k=g[0],y=g[1],w=(0,m.x)(),S=(0,c.Ds)().enqueueSnackbar,Z=(0,u.useContext)(d._y).dictionary,_=(0,x.useRouter)(),D=(0,u.useCallback)((0,i.Z)((function(){var e;return(0,r.__generator)(this,(function(n){switch(n.label){case 0:return e=function(){var e=(0,i.Z)((function(){var e,n,t;return(0,r.__generator)(this,(function(i){switch(i.label){case 0:return[4,w.mutate({mutation:b.sendComment,variables:{input:v}})];case 1:if(e=i.sent(),n=e.errors,t=e.data,n&&n.length>0)throw new Error(n[0].message);return[2,t.sendComment]}}))}));return function(){return e.apply(this,arguments)}}(),[4,e()];case 1:return n.sent()?(y(!0),[2]):[2,S(Z.session.contactError,{variant:"error"})]}}))})),[v]),E=function(){var e=(0,i.Z)((function(e){var n;return(0,r.__generator)(this,(function(i){switch(i.label){case 0:t(!0),e.preventDefault(),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,D()];case 2:return i.sent(),(0,C.Z)("Contact")(v.name,v.message),[3,4];case 3:return n=i.sent(),S(n.toString(),{variant:"error"}),[3,4];case 4:return t(!1),[2]}}))}));return function(n){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){_.query.email&&h((function(e){return(0,s.Z)((0,o.Z)({},e),{email:_.query.email})}))}),[]),(0,l.jsx)(u.Fragment,{children:(0,l.jsx)(f.ZP.SessionPanel,{children:k?(0,l.jsx)(f.ZP.Message,{message:Z.session.signUpMessage}):(0,l.jsx)(N,{onSubmit:E,contactData:v,handleInputChange:function(e){h((function(n){return(0,s.Z)((0,o.Z)({},n),(0,a.Z)({},e.target.name,e.target.value))}))},loading:n})})})}}},function(e){e.O(0,[384,381,774,888,179],(function(){return n=78367,e(e.s=n);var n}));var n=e.O();_N_E=n}]);