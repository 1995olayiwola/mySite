(this.webpackJsonpclient2=this.webpackJsonpclient2||[]).push([[20],{1015:function(e,t,c){"use strict";c.r(t);var n=c(64),s=c.n(n),r=c(100),i=c(16),d=c(1),a=c(0),j=c.n(a),l=c(28),h=c.n(l),o=c(153),b=c.n(o),u=c(155),x=c.n(u),O=c(953);t.default=function(e){var t=j.a.useState({results:[],count:0}),c=Object(i.a)(t,2),n=c[0],a=c[1];return j.a.useEffect((function(){(function(){var e=Object(r.a)(s.a.mark((function e(){var t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new h.a.Query("TotalInfo")).descending("createdAt"),t.withCount(),e.next=5,t.find();case 5:return c=e.sent,e.next=8,a(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log("data is:",n),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-2",children:"left"}),Object(d.jsx)("div",{className:"col-10",children:n.results.length>0&&Object(d.jsxs)(O.a,{striped:!0,bordered:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"First Name"}),Object(d.jsx)("th",{children:"Last Name"}),Object(d.jsx)("th",{children:"Username"})]})}),Object(d.jsx)("tbody",{children:n.results.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:e.get("content")}),Object(d.jsxs)("td",{children:[Object(d.jsx)("div",{children:e.get("location").formatted_address}),Object(d.jsx)("div",{style:{fontWeight:"bold"},children:b()(e.get("createdAt")).fromNow()})]}),Object(d.jsx)("td",{children:x()(Object(d.jsx)("p",{children:"@mdo"}))})]})}))})]})})]})})}}}]);
//# sourceMappingURL=20.85d49c13.chunk.js.map