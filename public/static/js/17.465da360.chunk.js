(this.webpackJsonpclient2=this.webpackJsonpclient2||[]).push([[17],{1011:function(e,a,n){"use strict";n.r(a);var t=n(64),l=n.n(t),r=n(97),i=n(46),c=n(22),u=n(13),s=n(1),o=n(0),b=n.n(o),k=n(258),B=n(28),v=n.n(B),d=n(149),m=n(192),h=n(947),j=n(259);a.default=function(e){var a=b.a.useState(null),n=Object(u.a)(a,2),t=n[0],o=n[1],B={categories:null,number1:t,title:""},g=b.a.useState(B),p=Object(u.a)(g,2),f=p[0],x=p[1],O=b.a.useState(null),C=Object(u.a)(O,2),M=C[0],y=C[1],S=b.a.useState(!1),L=Object(u.a)(S,2),T=L[0],F=L[1],P=function(){var a=Object(r.a)(l.a.mark((function a(n){var r,i,c,u;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n.preventDefault(),n.persist(),a.next=5,F(!0);case 5:return a.next=7,y(null);case 7:return r=v.a.User.current(),i=v.a.Object.extend("TotalInfo7"),c=new i,(u=new v.a.ACL).setWriteAccess(r,!0),u.setPublicReadAccess(!0),c.setACL(u),c.set("formValues",f.title),c.set("number1",t),c.set("categories",f.categories),c.set("user",r),console.log("post is",c),a.next=21,c.save();case 21:return a.next=23,F(!1);case 23:e.history.push("/payment"),a.next=33;break;case 26:return a.prev=26,a.t0=a.catch(0),console.log("error is :",a.t0),a.next=31,F(!1);case 31:return a.next=33,y(a.t0.message);case 33:case"end":return a.stop()}}),a,null,[[0,26]])})));return function(e){return a.apply(this,arguments)}}();return Object(s.jsx)("div",{className:"admin",children:Object(s.jsxs)(m.a,{onSubmit:P,children:[Object(s.jsxs)(m.a.Group,{controlId:"formBasicNumber",children:[Object(s.jsx)(m.a.Label,{children:"Enter account name"}),Object(s.jsx)(m.a.Control,{type:"text",placeholder:"Enter account name",name:"title",onChange:function(e){x((function(){return Object(c.a)(Object(c.a)({},f),{},Object(i.a)({},e.target.name,e.target.value))}))},value:f.title})]}),Object(s.jsxs)(m.a.Group,{controlId:"formBasicNumber",children:[Object(s.jsx)(m.a.Label,{children:"Enter account number"}),Object(s.jsx)(m.a.Control,{type:"number",placeholder:"Enter account numb",name:"number",onChange:function(e){console.log("onChange fired with value:",+e.target.value),o((function(){return+e.target.value}))},value:t})]}),Object(s.jsx)(j.a,{title:"Choose bank category",handleChange:function(e,a){console.log("name is",e,"val is",a),x((function(n){return Object(c.a)(Object(c.a)({},n),{},Object(i.a)({},e,a))})),console.log("formValues:",f)}.bind(this,"categories"),options:[{value:"Gt bank",label:"Gt bank"},{value:"First bank",label:"First bank"},{value:"Sterling Bank",label:"Sterling bank"},{value:"Access Bank",label:"Access Bank"},{value:"Fidelity Bank",label:"Fidelity Bank"},{value:"First City Monument Bank",label:"First City Monument Bank"},{value:"Union Bank ",label:"Union Bank "},{value:"United Bank",label:"United Bank"},{value:"Zenith Bank ",label:"Zenith Bank "},{value:"Citibank ",label:"Citibank "},{value:"Ecobank",label:"Ecobank "},{value:"Heritage Bank ",label:"Heritage Bank "},{value:"Keystone Bank ",label:"Keystone Bank "},{value:"Polaris Bank  ",label:"Polaris Bank  "},{value:"Stanbic IBTC Bank ",label:"Stanbic IBTC Bank "},{value:"Standard Chartered ",label:"Standard Chartered"},{value:" Titan Trust Bank ",label:"Titan Trust Bank "},{value:"Unity Bank Plc ",label:"Unity Bank Plc "},{value:"Wema Bank Plc ",label:"Wema Bank Plc "},{value:"Globus Bank Limited ",label:"Globus Bank Limited "},{value:"SunTrust Bank Nigeria Limited ",label:"SunTrust Bank Nigeria Limited "},{value:"Providus Bank Limited",label:"Providus Bank Limited "},{value:"Jaiz Bank Plc ",label:"Jaiz Bank Plc "},{value:"TAJBank Limited ",label:"TAJBank Limited "},{value:"Mutual Trust Microfinance Bank",label:"Mutual Trust Microfinance Bank "},{value:"Finca Microfinance Bank Limited ",label:"Finca Microfinance Bank Limited "},{value:"Coronation Merchant Bank",label:"Coronation Merchant Bank "},{value:"FBNQuest Merchant Bank ",label:"FBNQuest Merchant Bank"},{value:"FSDH Merchant Bank ",label:"FSDH Merchant Bank"},{value:"Rand Merchant Bank",label:"Rand Merchant Bank"},{value:"Nova Merchant Bank ",label:"Nova Merchant Bank"}]}),M&&Object(s.jsx)(k.a,{message:M}),T&&Object(s.jsx)(d.a,{}),Object(s.jsx)(h.a,{variant:"primary",type:"submit",style:{textAlign:"center",marginTop:"10px"},children:"Submit"})]})})}}}]);
//# sourceMappingURL=17.465da360.chunk.js.map