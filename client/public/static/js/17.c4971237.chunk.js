(this.webpackJsonpclient2=this.webpackJsonpclient2||[]).push([[17],{1022:function(e,t,n){"use strict";n.r(t);var c=n(64),r=n.n(c),a=n(100),s=n(16),i=n(46),l=n(22),o=n(1),d=n(0),j=n.n(d),h=n(28),b=n.n(h),u=n(153),O=n.n(u),x=n(83),p=n(154),g=n(155),f=n.n(g),w=n(952),m=n(953);function v(e){var t=e.page_rw,n=e.startRow_rw,c=e.SetPage_rw,r=e.SetStartRow_rw,a=e.max,s=e.Total_row,i=e.Total_pages,l=e.url,d=e.history;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:["Records ",n+1," to ",Math.min(n+a,s)," of ",s]}),Object(o.jsx)("table",{border:"0",align:"center",width:"50%",cellPadding:"5",children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("span",{style:{cursor:"pointer"},onClick:function(){c(0),r(0),d.push("".concat(l,"/0"))},children:" First"})}),Object(o.jsx)("td",{children:Object(o.jsx)("span",{style:{cursor:"pointer"},onClick:function(){var e=Math.max(0,t-1),n=e*a;c(e),r(n),d.push("".concat(l,"/").concat(e))},children:"Previous"})}),Object(o.jsx)("td",{children:Object(o.jsx)("span",{onClick:function(){var e=Math.min(t+1,i),n=e*a;c(e),r(n),d.push("".concat(l,"/").concat(e))},style:{cursor:"pointer"},children:"Next"})}),Object(o.jsx)("td",{children:Object(o.jsx)("span",{onClick:function(){var e=i*a;c(i),r(e),d.push("".concat(l,"/").concat(i))},style:{cursor:"pointer"},children:"Last"})})]})})})]})}t.default=function(e){console.log("props is",e);var t=j.a.useState({results:[],count:0}),n=Object(s.a)(t,2),c=n[0],d=n[1],h=e.history,u=j.a.useState(null),g=Object(s.a)(u,2),y=g[0],S=g[1],_=j.a.useState(null),k=Object(s.a)(_,2),P=(k[0],k[1],j.a.useState({location:null,keyword:""})),C=Object(s.a)(P,2),R=C[0],T=C[1],M=e.match.params.pageId||0,N=5*M,A=j.a.useState(M),F=Object(s.a)(A,2),L=F[0],W=F[1],E=j.a.useState(N),G=Object(s.a)(E,2),I=G[0],J=G[1],Q=c&&c.count||0,H=Math.ceil(Q/5)-1,K=y&&y.lat,U=y&&y.lng,q=null;return K&&U&&(q=new b.a.GeoPoint({latitude:K,longitude:U})),j.a.useEffect((function(){(function(){var e=Object(a.a)(r.a.mark((function e(){var t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null,null,t=null,n=new b.a.Query("TotalInfo6"),t?n.withinMiles("location_geo",t,1e4,!0):n.descending("createdAt"),n.skip(I),n.limit(5),n.withCount(),e.next=11,n.find();case 11:return c=e.sent,e.next=14,d(c);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[I,K,U]),console.log("data is:",c),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"row",style:{marginTop:"10px",marginLeft:"10px",marginRight:"10px",justifyContent:"center",flexWrap:"wrap"},children:[Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("h3",{children:"Search Records"}),Object(o.jsx)(x.a,{title:"Enter the  address",value:R.location&&R.location.formatted_address||"",onHandleSelect:function(e,t){T((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(i.a)({},e,t))}))}.bind(undefined,"location"),options:""}),Object(o.jsx)(p.a,{name:"keyword",title:"Keyword",placeholder:" Search for keywords",value:R.keyword,handleChange:function(e){e.persist(),T((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(i.a)({},e.target.name,e.target.value))}))}.bind("")}),Object(o.jsx)(w.a,{type:"button",variant:"primary",onClick:function(){S(R.location)},children:"Search"})]}),Object(o.jsx)("div",{className:"col-12",children:c.results.length>0&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Username"}),Object(o.jsx)("th",{children:"Phone number"}),Object(o.jsx)("th",{children:"Pos brand "}),Object(o.jsx)("th",{children:"Pos fault "}),Object(o.jsx)("th",{children:"Pos platform"}),Object(o.jsx)("th",{children:"Gender"}),Object(o.jsx)("th",{children:"Quantity"}),Object(o.jsx)("th",{children:"Location"}),Object(o.jsx)("th",{children:"Average daily withdrawal"})]})}),Object(o.jsx)("tbody",{children:c.results.map((function(e){var t=e.get("categories"),n=t&&t.label,c=null;return q&&(c=e.get("location_geo").milesTo(q).toFixed(2)),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.get("username")}),Object(o.jsx)("td",{children:e.get("number")}),Object(o.jsx)("td",{children:e.get("brand")}),Object(o.jsx)("td",{children:e.get("platform")}),Object(o.jsx)("td",{children:n}),Object(o.jsx)("td",{children:f()(e.get("content"))}),Object(o.jsxs)("td",{children:[Object(o.jsx)("div",{children:e.get("location").formatted_address}),Object(o.jsx)("div",{style:{fontWeight:"bold"},children:O()(e.get("createdAt")).fromNow()}),c&&Object(o.jsxs)("div",{style:{fontWeight:"bold"},children:[c," miles"]})]}),Object(o.jsx)("td",{children:e.get("number2")})]},e.id)}))})]}),Object(o.jsx)(v,{page_rw:L,startRow_rw:I,SetPage_rw:W,SetStartRow_rw:J,max:5,Total_row:Q,Total_pages:H,url:"/page",history:h})]})})]})})}}}]);
//# sourceMappingURL=17.c4971237.chunk.js.map