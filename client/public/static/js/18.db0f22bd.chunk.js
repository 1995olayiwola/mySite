(this.webpackJsonpclient2=this.webpackJsonpclient2||[]).push([[18],{1024:function(e,a,n){"use strict";n.r(a);var t=n(64),l=n.n(t),r=n(100),i=n(46),u=n(22),c=n(16),s=n(1),o=n(0),b=n.n(o),k=n(265),v=n(28),B=n.n(v),d=n(152),h=n(199),m=n(952),j=n(266);a.default=function(e){var a=b.a.useState(null),n=Object(c.a)(a,2),t=n[0],o=n[1],v=b.a.useState(null),g=Object(c.a)(v,2),p=g[0],f=g[1],x=b.a.useState(null),O=Object(c.a)(x,2),C=O[0],M=O[1],S={categories:null,number:t,number1:p,number2:C},y=b.a.useState(S),L=Object(c.a)(y,2),T=L[0],A=L[1],F=b.a.useState(null),w=Object(c.a)(F,2),P=w[0],N=w[1],E=b.a.useState(!1),G=Object(c.a)(E,2),U=G[0],I=G[1],J=function(){var a=Object(r.a)(l.a.mark((function a(n){var r,i,u,c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n.preventDefault(),n.persist(),a.next=5,I(!0);case 5:return a.next=7,N(null);case 7:return r=B.a.User.current(),i=B.a.Object.extend("TotalInfo3"),u=new i,(c=new B.a.ACL).setWriteAccess(r,!0),c.setPublicReadAccess(!0),u.setACL(c),u.set("number",t),u.set("number1",p),u.set("number2",C),u.set("categories",T.categories),u.set("user",r),console.log("post is",u),a.next=22,u.save();case 22:return a.next=24,I(!1);case 24:e.history.push("/add3"),a.next=34;break;case 27:return a.prev=27,a.t0=a.catch(0),console.log("error is :",a.t0),a.next=32,I(!1);case 32:return a.next=34,N(a.t0.message);case 34:case"end":return a.stop()}}),a,null,[[0,27]])})));return function(e){return a.apply(this,arguments)}}();return Object(s.jsx)("div",{className:"admin",children:Object(s.jsxs)(h.a,{onSubmit:J,children:[Object(s.jsxs)(h.a.Group,{controlId:"formBasicNumber",children:[Object(s.jsx)(h.a.Label,{children:"Enter the current price"}),Object(s.jsx)(h.a.Control,{type:"number",placeholder:"Enter Amount in #",name:"number",onChange:function(e){console.log("onChange fired with value:",+e.target.value),o((function(){return+e.target.value}))},value:t})]}),Object(s.jsxs)(h.a.Group,{controlId:"formBasicNumber",children:[Object(s.jsx)(h.a.Label,{children:"Enter the current withdrawal charges"}),Object(s.jsx)(h.a.Control,{type:"number",placeholder:"Enter Amount in #",name:"number",onChange:function(e){console.log("onChange fired with value:",+e.target.value),f((function(){return+e.target.value}))},value:p})]}),Object(s.jsxs)(h.a.Group,{controlId:"formBasicNumber",children:[Object(s.jsx)(h.a.Label,{children:"Enter the current transfer charges"}),Object(s.jsx)(h.a.Control,{type:"number",placeholder:"Enter Amount in #",name:"number",onChange:function(e){console.log("onChange fired with value:",+e.target.value),M((function(){return+e.target.value}))},value:C})]}),Object(s.jsx)(j.a,{title:"Choose bank category",handleChange:function(e,a){console.log("name is",e,"val is",a),A((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(i.a)({},e,a))})),console.log("formValues:",T)}.bind(this,"categories"),options:[{value:"Gt bank",label:"Gt bank"},{value:"First bank",label:"First bank"},{value:"Sterling Bank",label:"Sterling bank"},{value:"Access Bank",label:"Access Bank"},{value:"Fidelity Bank",label:"Fidelity Bank"},{value:"First City Monument Bank",label:"First City Monument Bank"},{value:"Union Bank ",label:"Union Bank "},{value:"United Bank",label:"United Bank"},{value:"Zenith Bank ",label:"Zenith Bank "},{value:"Citibank ",label:"Citibank "},{value:"Ecobank",label:"Ecobank "},{value:"Heritage Bank ",label:"Heritage Bank "},{value:"Keystone Bank ",label:"Keystone Bank "},{value:"Polaris Bank  ",label:"Polaris Bank  "},{value:"Stanbic IBTC Bank ",label:"Stanbic IBTC Bank "},{value:"Standard Chartered ",label:"Standard Chartered"},{value:" Titan Trust Bank ",label:"Titan Trust Bank "},{value:"Unity Bank Plc ",label:"Unity Bank Plc "},{value:"Wema Bank Plc ",label:"Wema Bank Plc "},{value:"Globus Bank Limited ",label:"Globus Bank Limited "},{value:"SunTrust Bank Nigeria Limited ",label:"SunTrust Bank Nigeria Limited "},{value:"Providus Bank Limited",label:"Providus Bank Limited "},{value:"Jaiz Bank Plc ",label:"Jaiz Bank Plc "},{value:"TAJBank Limited ",label:"TAJBank Limited "},{value:"Mutual Trust Microfinance Bank",label:"Mutual Trust Microfinance Bank "},{value:"Finca Microfinance Bank Limited ",label:"Finca Microfinance Bank Limited "},{value:"Coronation Merchant Bank",label:"Coronation Merchant Bank "},{value:"FBNQuest Merchant Bank ",label:"FBNQuest Merchant Bank"},{value:"FSDH Merchant Bank ",label:"FSDH Merchant Bank"},{value:"Rand Merchant Bank",label:"Rand Merchant Bank"},{value:"Nova Merchant Bank ",label:"Nova Merchant Bank"}]}),P&&Object(s.jsx)(k.a,{message:P}),U&&Object(s.jsx)(d.a,{}),Object(s.jsx)(m.a,{variant:"primary",type:"submit",style:{textAlign:"center",marginTop:"10px"},children:"Submit"})]})})}}}]);
//# sourceMappingURL=18.db0f22bd.chunk.js.map