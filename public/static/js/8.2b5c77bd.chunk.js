(this.webpackJsonpclient2=this.webpackJsonpclient2||[]).push([[8],{1010:function(e,t,a){"use strict";a.r(t);var n=a(64),r=a.n(n),o=a(97),s=a(46),c=a(22),l=a(13),u=a(1),i=a(0),b=a.n(i),d=a(258),j=a(28),h=a.n(j),p=a(149),m=a(192),f=a(947),O=a(83),x=a(260),v=a(259);t.default=function(e){var t=b.a.useState(null),a=Object(l.a)(t,2),n=a[0],i=a[1],j={location:{},content:"",categories:null,number:n,username:"",platform:"",brand:"",fault:""},g=b.a.useState(j),y=Object(l.a)(g,2),C=y[0],E=y[1],w=b.a.useState(null),A=Object(l.a)(w,2),G=A[0],L=A[1],S=b.a.useState(!1),I=Object(l.a)(S,2),P=I[0],B=I[1],k=function(e,t){E((function(){return Object(c.a)(Object(c.a)({},C),{},Object(s.a)({},t.target.name,t.target.value))}))},N=function(e,t){console.log("name is",e,"val is",t),E((function(a){return Object(c.a)(Object(c.a)({},a),{},Object(s.a)({},e,t))})),console.log("formValues:",C)},D=function(){var t=Object(o.a)(r.a.mark((function t(a){var o,s,c,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.preventDefault(),a.persist(),t.next=5,B(!0);case 5:return t.next=7,L(null);case 7:return o=h.a.User.current(),s=h.a.Object.extend("TotalInfo5"),c=new s,(l=new h.a.ACL).setWriteAccess(o,!0),l.setPublicReadAccess(!0),c.setACL(l),c.set("location",C.location),c.set("location_geo",new h.a.GeoPoint({latitude:C.location.lat,longitude:C.location.lng})),c.set("content",C.content),c.set("number",n),c.set("username",C.username),c.set("brand",C.brand),c.set("fault",C.fault),c.set("platform",C.platform),c.set("categories",C.categories),c.set("user",o),console.log("post is",c),t.next=27,c.save();case 27:return t.next=29,B(!1);case 29:e.history.push("/add4"),t.next=39;break;case 32:return t.prev=32,t.t0=t.catch(0),console.log("eror is :",t.t0),t.next=37,B(!1);case 37:return t.next=39,L(G.message);case 39:case"end":return t.stop()}}),t,null,[[0,32]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"repair",children:Object(u.jsxs)(m.a,{onSubmit:D,children:[Object(u.jsxs)(m.a.Group,{controlId:"formBasicName",children:[Object(u.jsx)(m.a.Label,{children:"Name"}),Object(u.jsx)(m.a.Control,{type:"text",placeholder:"Enter your name",onChange:k.bind(this,"username"),value:C.value,name:"username"})]}),Object(u.jsxs)(m.a.Group,{controlId:"formBasicNumber",children:[Object(u.jsx)(m.a.Label,{children:"Enter Phone number"}),Object(u.jsx)(m.a.Control,{type:"number",placeholder:"Enter your phone number",onChange:function(e){console.log("onChange fired with value:",+e.target.value),i((function(){return+e.target.value}))},value:n})]}),Object(u.jsxs)(m.a.Group,{controlId:"formBasicAddress",children:[Object(u.jsx)(m.a.Label,{children:"Enter Pos brand"}),Object(u.jsx)(m.a.Control,{type:"text",placeholder:"Enter Pos brand",onChange:k.bind(this,"brand"),value:C.value,name:"brand"})]}),Object(u.jsxs)(m.a.Group,{controlId:"formBasicAddress",children:[Object(u.jsx)(m.a.Label,{children:"Enter fault"}),Object(u.jsx)(m.a.Control,{type:"text",placeholder:"Enter your fault",onChange:k.bind(this,"fault"),value:C.value,name:"fault"})]}),Object(u.jsxs)(m.a.Group,{controlId:"formBasicAddress",children:[Object(u.jsx)(m.a.Label,{children:"Pos platform"}),Object(u.jsx)(m.a.Control,{type:"text",placeholder:"Enter your current platform",onChange:k.bind(this,"platform"),value:C.value,name:"platform"})]}),Object(u.jsx)(v.a,{title:"Gender",handleChange:N.bind(this,"categories"),options:[{value:"Male",label:"Male"},{value:"Female ",label:"Female"}]}),Object(u.jsx)(x.a,{handleDescription:N.bind(this,"content"),value:C.content,placeholder:"Enter your message",title:"Quantity"}),Object(u.jsx)(O.a,{title:"Enter your current address",value:C.location&&C.location.formatted_address||"",onHandleSelect:function(e,t){E((function(a){return Object(c.a)(Object(c.a)({},a),{},Object(s.a)({},e,t))}))}.bind(this,"location"),options:""}),G&&Object(u.jsx)(d.a,{message:G}),P&&Object(u.jsx)(p.a,{}),Object(u.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}}]);
//# sourceMappingURL=8.2b5c77bd.chunk.js.map