(this.webpackJsonpclient2=this.webpackJsonpclient2||[]).push([[0],{149:function(e,t,n){"use strict";var a=n(1),c=(n(0),n(931));t.a=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{style:{textAlign:"center",fontSize:"48px",color:"blue"},children:Object(a.jsx)(c.a,{animation:"border",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})})})}},151:function(e,t,n){"use strict";var a=n(1),c=(n(0),n(192));t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)(c.a.Group,{controlId:e.name,children:[e.title&&Object(a.jsx)(c.a.Label,{style:{fontWeight:"bold",marginTop:"10px"},children:e.title}),Object(a.jsx)(c.a.Control,{type:e.type,placeholder:e.placeholder,name:e.name,value:e.value,onChange:e.handleChange}),e.description&&Object(a.jsx)(c.a.Text,{className:"text-muted",children:e.description})]})})}},258:function(e,t,n){"use strict";var a=n(1),c=(n(0),n(932));function r(e){return Object(a.jsx)("div",{children:Object(a.jsx)(c.a,{variant:e.variant,children:e.message})})}r.defaultProps={variant:"warning"},t.a=r},259:function(e,t,n){"use strict";var a=n(1),c=(n(0),n(427));t.a=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{style:{fontWeight:"bold"},children:e.title}),Object(a.jsx)(c.a,{options:e.options,onChange:e.handleChange})]})}},260:function(e,t,n){"use strict";var a=n(1),c=(n(0),n(426)),r=n.n(c);n(923),n(924);t.a=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:Object(a.jsx)("strong",{children:e.title})}),Object(a.jsx)(r.a,{theme:"snow",value:e.value,placeholder:e.placeholder,className:"rulebox",style:{minHeight:"200px"},modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],["link","image","video"],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]},onChange:e.handleDescription})]})}},420:function(e,t,n){"use strict";n.r(t);var a=n(13),c=n(1),r=n(0),s=n.n(r),l=n(421),i=n.n(l);n(806);t.default=function(){var e=s.a.useState("00"),t=Object(a.a)(e,2),n=t[0],r=t[1],l=s.a.useState("00"),o=Object(a.a)(l,2),d=o[0],j=o[1],b=s.a.useState("00"),u=Object(a.a)(b,2),h=u[0],x=u[1],O=s.a.useState("00"),p=Object(a.a)(O,2),m=p[0],f=p[1],v=s.a.useRef();return s.a.useEffect((function(){return function(){var e=new Date("December 31,2020 00:00:00").getTime();v=setInterval((function(){var t=(new Date).getTime(),n=e-t,a=Math.floor(n/864e5),c=Math.floor(n%864e5/36e5),s=Math.floor(n%36e5/6e4),l=Math.floor(n%6e4/1e3);n<0?clearInterval(v.current):(r(a),j(c),x(s),f(l))}),1e3)}(),function(){clearInterval(v.current)}})),Object(c.jsx)("div",{children:Object(c.jsx)("section",{className:"timer__container",children:Object(c.jsxs)("section",{className:"timer",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"mdi mdi-calender-clock timer-icon",children:Object(c.jsx)(i.a,{})}),Object(c.jsx)("h2",{children:"CountDown Timer"})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{children:n}),Object(c.jsx)("p",{children:Object(c.jsx)("small",{children:"Days"})})]}),Object(c.jsx)("span",{children:":"}),Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{children:d}),Object(c.jsx)("p",{children:Object(c.jsx)("small",{children:"Hours"})})]}),Object(c.jsx)("span",{children:":"}),Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{children:h}),Object(c.jsx)("p",{children:Object(c.jsx)("small",{children:"Minutes"})})]}),Object(c.jsx)("span",{children:":"}),Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{children:m}),Object(c.jsx)("p",{children:Object(c.jsx)("small",{children:"Seconds"})})]})]})]})})})}},435:function(e,t,n){},671:function(e,t){},673:function(e,t){},683:function(e,t){},685:function(e,t){},712:function(e,t){},714:function(e,t){},715:function(e,t){},720:function(e,t){},722:function(e,t){},741:function(e,t){},753:function(e,t){},756:function(e,t){},802:function(e,t,n){},803:function(e,t,n){},805:function(e,t,n){},806:function(e,t,n){},83:function(e,t,n){"use strict";var a=n(13),c=n(422),r=n(1),s=n(0),l=n.n(s),i=n(423),o=n.n(i),d=n(933);t.a=function(e){var t=e.options,n=e.value,s=e.title,i=e.onHandleSelect,j=l.a.useState(null),b=Object(a.a)(j,2),u=b[0],h=b[1],x=l.a.useRef(null);return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"form-group ",style:{position:"relative"},children:[s&&Object(r.jsx)("label",{style:{fontWeight:"bold"},children:s}),Object(r.jsx)(o.a,{className:"form-control",id:Object(d.a)(),ref:x,defaultValue:n,onPlaceSelected:function(e){if(console.log("the place selected is",e),e.formatted_address){var t={street_number:"short_name",route:"long_name",neighborhood:"long_name",locality:"short_name",administrative_area_level_2:"short_name",administrative_area_level_1:"short_name",country:"long_name",postal_code:"long_name",postal_code_suffix:"short_name"},n={};n.formatted_address=e.formatted_address,n.lat=e.geometry.location.lat(),n.lng=e.geometry.location.lng();for(var a=0;a<e.address_components.length;a++){var c=e.address_components[a].types[0];if(t[c]){var r=t[c],s=e.address_components[a][r];"locality"==c?c="city":"administrative_area_level_1"==c?c="state":"administrative_area_level_2"==c&&(c="county"),n[c]=s}}console.log("obj is",n),i(n),h(n.formatted_address)}else window.alert("please choose your current address")},types:t}),u&&Object(r.jsx)("button",{type:"button",style:{fontSize:"24px",position:"absolute",right:"10px",top:"30px",border:"none",background:"transparent"},onClick:function(){Object(c.a)("onHandleSelect"),i={},h(null),x.current.refs.input.value="",x.current.refs.input.focus()},children:Object(r.jsx)("span",{children:"\xd7"})})]})})}},924:function(e,t,n){},926:function(e,t,n){},927:function(e,t,n){},930:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(49),l=n.n(s),i=(n(435),n(28)),o=n.n(i),d=n(39),j=n(23),b=n(187),u=n(188),h=n(190),x=n(189),O=function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.a.Component),p=n(22),m=n(428),f=function(e){var t=e.layout,n=e.component,c=Object(m.a)(e,["layout","component"]),r=o.a.User.current();return Object(a.jsx)(j.b,Object(p.a)(Object(p.a)({},c),{},{render:function(e){return r?Object(a.jsx)(t,{children:Object(a.jsx)(n,Object(p.a)({user:r},e))}):Object(a.jsx)(j.a,{to:"/auth"})}}))},v=(n(802),n.p+"static/media/decent.8628bd14.png"),g=(n(803),n(415)),y=n.n(g),w=n(417),N=n.n(w),S=n(418),_=n.n(S),k=n(419),C=n.n(k),P=n(257),T=n.n(P),z=[{title:"Home",icon:Object(a.jsx)(y.a,{}),link:"/"},{title:"Wallet",icon:Object(a.jsx)(N.a,{}),link:"/"},{title:"Dashboard",icon:Object(a.jsx)(_.a,{}),link:"/dashboard"},{title:"Admin",icon:Object(a.jsx)(C.a,{}),link:"/admin"},{title:"Transfer",icon:Object(a.jsx)(T.a,{}),link:"/transfer"},{title:"Withdraw",icon:Object(a.jsx)(T.a,{}),link:"/withdraw"}],E=function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsxs)("nav",{className:"navbar   navbar-expand-lg navbar-light bg-primary ",children:[Object(a.jsxs)(d.b,{to:"/",children:["  ",Object(a.jsx)("a",{className:"navbar-brand text-light",href:"#",children:Object(a.jsx)("img",{src:v,alt:"decent ventures",className:"logo"})})]}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item active",children:Object(a.jsxs)(d.b,{to:"/",children:["   ",Object(a.jsxs)("a",{className:"nav-link text-light p-10",href:"#",children:["Home ",Object(a.jsx)("span",{className:"sr-only",children:"(current)"})]})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)(d.b,{to:"/subscribe",children:[" ",Object(a.jsx)("a",{className:"nav-link text-light p-10",href:"#",children:"Create POS Account"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)(d.b,{to:"/pos",children:["  ",Object(a.jsx)("a",{className:"nav-link text-light p-10",href:"#",children:"Get POS"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)(d.b,{to:"/paper",children:["   ",Object(a.jsx)("a",{className:"nav-link text-light p-10",href:"#",children:"Buy POS Paper"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)(d.b,{to:"/repair",children:["   ",Object(a.jsx)("a",{className:"nav-link text-light p-10",href:"#",children:"Repair your POS"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)(d.b,{to:"/chat",children:[" ",Object(a.jsx)("a",{className:"nav-link text-light p-10",href:"#",children:"Chat Support"})]})}),Object(a.jsxs)("li",{className:"nav-item dropdown",children:[Object(a.jsx)(d.b,{})," ",Object(a.jsx)("a",{className:"nav-link text-light dropdown-toggle p-10",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Service"}),Object(a.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:Object(a.jsx)("div",{className:"dropdown-item",children:Object(a.jsx)("div",{className:"list",children:z.map((function(e,t){return Object(a.jsxs)("li",{style:{padding:"10px",margin:"10px",cursor:"pointer",display:"flex"},className:"row",id:window.location.pathname==e.link?"active":"",onClick:function(){window.location.pathname=e.link},children:[Object(a.jsx)("div",{id:"icon",children:e.icon})," ",Object(a.jsx)("div",{id:"title",children:e.title})]},t)}))})})})]})]})})]})})},R=(n(805),function(){return Object(a.jsx)("div",{className:"footer-group",children:Object(a.jsx)("div",{className:"container m-0 p-0 col-md-12",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"container col-md-12 col-lg-12 ",children:[Object(a.jsx)("footer",{className:"footer col-md-12 col-lg-12",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-3 m-b-30",children:[Object(a.jsx)("div",{className:"footer-title m-t-5 m-b-20 p-b-8",children:"About us"}),Object(a.jsxs)("p",{className:"white-text",children:["Click the button to know about us.",Object(a.jsx)("button",{type:"button",class:"btn btn-primary",children:"Know about us"})]})]}),Object(a.jsxs)("div",{className:"col-md-3 m-b-30",children:[Object(a.jsx)("div",{className:"footer-title m-t-5 m-b-20 p-b-8",children:"Quick Links"}),Object(a.jsxs)("div",{className:"footer-links",children:[Object(a.jsx)("a",{href:"#",children:"FAQ"}),Object(a.jsx)("a",{href:"#",children:"Terms & conditions"})]})]}),Object(a.jsxs)("div",{className:"col-md-3 m-b-30",children:[Object(a.jsx)("div",{className:"footer-title m-t-5 m-b-20 p-b-8",children:"Support"}),Object(a.jsxs)("div",{className:"footer-links",children:[Object(a.jsx)("a",{href:"#",children:Object(a.jsx)(d.b,{to:"/logout",children:"Logout"})}),Object(a.jsx)("a",{href:"#",children:"Support forum"}),Object(a.jsxs)("div",{className:"footer-social-links m-t-30 row",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{className:"fa fa-linkedin","aria-hidden":"true"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{className:"fa fa-youtube","aria-hidden":"true"})})})]})]})]})]})})}),Object(a.jsx)("div",{className:"footer-bottom",children:"Copyright \xa9 2020, All Rights Reserved"})]})})})})}),A=n(420);var L=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(E,{}),Object(a.jsx)(A.default,{}),Object(a.jsx)(R,{})]})},I=function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(c.Component),M=Object(j.g)(I),F=n(149),D=n(83),G=n(64),W=n.n(G),B=n(97),H=n(13),U=n(46),Q=n(150),K=n.n(Q),q=n(151),J=n(152),V=n.n(J),X=n(947),Y=n(948);function Z(e){var t=e.page_rw,n=e.startRow_rw,c=e.SetPage_rw,r=e.SetStartRow_rw,s=e.max,l=e.Total_row,i=e.Total_pages,o=e.url,d=e.history;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:["Records ",n+1," to ",Math.min(n+s,l)," of ",l]}),Object(a.jsx)("table",{border:"0",align:"center",width:"50%",cellPadding:"5",children:Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("span",{style:{cursor:"pointer"},onClick:function(){c(0),r(0),d.push("".concat(o,"/0"))},children:" First"})}),Object(a.jsx)("td",{children:Object(a.jsx)("span",{style:{cursor:"pointer"},onClick:function(){var e=Math.max(0,t-1),n=e*s;c(e),r(n),d.push("".concat(o,"/").concat(e))},children:"Previous"})}),Object(a.jsx)("td",{children:Object(a.jsx)("span",{onClick:function(){var e=Math.min(t+1,i),n=e*s;c(e),r(n),d.push("".concat(o,"/").concat(e))},style:{cursor:"pointer"},children:"Next"})}),Object(a.jsx)("td",{children:Object(a.jsx)("span",{onClick:function(){var e=i*s;c(i),r(e),d.push("".concat(o,"/").concat(i))},style:{cursor:"pointer"},children:"Last"})})]})})})]})}var $=function(e){console.log("props is",e);var t=r.a.useState({results:[],count:0}),n=Object(H.a)(t,2),c=n[0],s=n[1],l=e.history,i=r.a.useState(null),d=Object(H.a)(i,2),j=d[0],b=d[1],u=r.a.useState(null),h=Object(H.a)(u,2),x=(h[0],h[1],r.a.useState({location:null,keyword:""})),O=Object(H.a)(x,2),m=O[0],f=O[1],v=e.match.params.pageId||0,g=5*v,y=r.a.useState(v),w=Object(H.a)(y,2),N=w[0],S=w[1],_=r.a.useState(g),k=Object(H.a)(_,2),C=k[0],P=k[1],T=c&&c.count||0,z=Math.ceil(T/5)-1,E=j&&j.lat,R=j&&j.lng,A=null;return E&&R&&(A=new o.a.GeoPoint({latitude:E,longitude:R})),r.a.useEffect((function(){(function(){var e=Object(B.a)(W.a.mark((function e(){var t,n,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null,null,t=null,n=new o.a.Query("TotalInfo5"),t?n.withinMiles("location_geo",t,1e4,!0):n.descending("createdAt"),n.skip(C),n.limit(5),n.withCount(),e.next=11,n.find();case 11:return a=e.sent,e.next=14,s(a);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[C,E,R]),console.log("data is:",c),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"row",style:{marginTop:"10px",marginLeft:"10px",marginRight:"10px",justifyContent:"center",flexWrap:"wrap"},children:[Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("h3",{children:"Search Records"}),Object(a.jsx)(D.a,{title:"Enter the  address",value:m.location&&m.location.formatted_address||"",onHandleSelect:function(e,t){f((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(U.a)({},e,t))}))}.bind(undefined,"location"),options:""}),Object(a.jsx)(q.a,{name:"keyword",title:"Keyword",placeholder:" Search for keywords",value:m.keyword,handleChange:function(e){e.persist(),f((function(t){return Object(p.a)(Object(p.a)({},t),{},Object(U.a)({},e.target.name,e.target.value))}))}.bind("")}),Object(a.jsx)(X.a,{type:"button",variant:"primary",onClick:function(){b(m.location)},children:"Search"})]}),Object(a.jsx)("div",{className:"col-12",children:c.results.length>0&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(Y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Username"}),Object(a.jsx)("th",{children:"Phone number"}),Object(a.jsx)("th",{children:"Pos brand "}),Object(a.jsx)("th",{children:"Pos fault "}),Object(a.jsx)("th",{children:"Pos platform"}),Object(a.jsx)("th",{children:"Gender"}),Object(a.jsx)("th",{children:"Quantity"}),Object(a.jsx)("th",{children:"Location"})]})}),Object(a.jsx)("tbody",{children:c.results.map((function(e){var t=e.get("categories"),n=t&&t.label,c=null;return A&&(c=e.get("location_geo").milesTo(A).toFixed(2)),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.get("username")}),Object(a.jsx)("td",{children:e.get("number")}),Object(a.jsx)("td",{children:e.get("brand")}),Object(a.jsx)("td",{children:e.get("fault")}),Object(a.jsx)("td",{children:e.get("platform")}),Object(a.jsx)("td",{children:n}),Object(a.jsx)("td",{children:V()(e.get("content"))}),Object(a.jsxs)("td",{children:[Object(a.jsx)("div",{children:e.get("location").formatted_address}),Object(a.jsx)("div",{style:{fontWeight:"bold"},children:K()(e.get("createdAt")).fromNow()}),c&&Object(a.jsxs)("div",{style:{fontWeight:"bold"},children:[c," miles"]})]})]},e.id)}))})]}),Object(a.jsx)(Z,{page_rw:N,startRow_rw:C,SetPage_rw:S,SetStartRow_rw:P,max:5,Total_row:T,Total_pages:z,url:"/page",history:l})]})})]})})};function ee(e){var t=e.page_rw,n=e.startRow_rw,c=e.SetPage_rw,r=e.SetStartRow_rw,s=e.max,l=e.Total_row,i=e.Total_pages,o=e.url,d=e.history;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:["Records ",n+1," to ",Math.min(n+s,l)," of ",l]}),Object(a.jsx)("table",{border:"0",align:"center",width:"50%",cellPadding:"5",children:Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("span",{style:{cursor:"pointer"},onClick:function(){c(0),r(0),d.push("".concat(o,"/0"))},children:" First"})}),Object(a.jsx)("td",{children:Object(a.jsx)("span",{style:{cursor:"pointer"},onClick:function(){var e=Math.max(0,t-1),n=e*s;c(e),r(n),d.push("".concat(o,"/").concat(e))},children:"Previous"})}),Object(a.jsx)("td",{children:Object(a.jsx)("span",{onClick:function(){var e=Math.min(t+1,i),n=e*s;c(e),r(n),d.push("".concat(o,"/").concat(e))},style:{cursor:"pointer"},children:"Next"})}),Object(a.jsx)("td",{children:Object(a.jsx)("span",{onClick:function(){var e=i*s;c(i),r(e),d.push("".concat(o,"/").concat(i))},style:{cursor:"pointer"},children:"Last"})})]})})})]})}var te=function(e){console.log("props is",e);var t=r.a.useState({results:[],count:0}),n=Object(H.a)(t,2),c=n[0],s=n[1],l=e.history,i=r.a.useState(null),d=Object(H.a)(i,2),j=d[0],b=d[1],u=r.a.useState(null),h=Object(H.a)(u,2),x=(h[0],h[1],r.a.useState({location:null,keyword:""})),O=Object(H.a)(x,2),m=O[0],f=O[1],v=e.match.params.pageId||0,g=5*v,y=r.a.useState(v),w=Object(H.a)(y,2),N=w[0],S=w[1],_=r.a.useState(g),k=Object(H.a)(_,2),C=k[0],P=k[1],T=c&&c.count||0,z=Math.ceil(T/5)-1,E=j&&j.lat,R=j&&j.lng,A=null;return E&&R&&(A=new o.a.GeoPoint({latitude:E,longitude:R})),r.a.useEffect((function(){(function(){var e=Object(B.a)(W.a.mark((function e(){var t,n,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null,null,t=null,n=new o.a.Query("TotalInfo7"),t?n.withinMiles("location_geo",t,1e4,!0):n.descending("createdAt"),n.skip(C),n.limit(5),n.withCount(),e.next=11,n.find();case 11:return a=e.sent,e.next=14,s(a);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[C,E,R]),console.log("data is:",c),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"row",style:{marginTop:"10px",marginLeft:"10px",marginRight:"10px",justifyContent:"center",flexWrap:"wrap"},children:[Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("h3",{children:"Search Records"}),Object(a.jsx)(D.a,{title:"Enter the  address",value:m.location&&m.location.formatted_address||"",onHandleSelect:function(e,t){f((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(U.a)({},e,t))}))}.bind(undefined,"location"),options:""}),Object(a.jsx)(q.a,{name:"keyword",title:"Keyword",placeholder:" Search for keywords",value:m.keyword,handleChange:function(e){e.persist(),f((function(t){return Object(p.a)(Object(p.a)({},t),{},Object(U.a)({},e.target.name,e.target.value))}))}.bind("")}),Object(a.jsx)(X.a,{type:"button",variant:"primary",onClick:function(){b(m.location)},children:"Search"})]}),Object(a.jsx)("div",{className:"col-12",children:c.results.length>0&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(Y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Username"}),Object(a.jsx)("th",{children:"Phone number"}),Object(a.jsx)("th",{children:"Pos brand "}),Object(a.jsx)("th",{children:"Pos platform"}),Object(a.jsx)("th",{children:"Gender"}),Object(a.jsx)("th",{children:"Quantity"}),Object(a.jsx)("th",{children:"Location"}),Object(a.jsx)("th",{children:"Average daily withdrawal"}),Object(a.jsx)("th",{children:"Average daily deposit withdrawal"})]})}),Object(a.jsx)("tbody",{children:c.results.map((function(e){var t=e.get("categories"),n=t&&t.label,c=null;return A&&(c=e.get("location_geo").milesTo(A).toFixed(2)),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.get("username")}),Object(a.jsx)("td",{children:e.get("number")}),Object(a.jsx)("td",{children:e.get("brand")}),Object(a.jsx)("td",{children:e.get("platform")}),Object(a.jsx)("td",{children:n}),Object(a.jsx)("td",{children:V()(e.get("content"))}),Object(a.jsxs)("td",{children:[Object(a.jsx)("div",{children:e.get("location").formatted_address}),Object(a.jsx)("div",{style:{fontWeight:"bold"},children:K()(e.get("createdAt")).fromNow()}),c&&Object(a.jsxs)("div",{style:{fontWeight:"bold"},children:[c," miles"]})]}),Object(a.jsx)("td",{children:e.get("number2")}),Object(a.jsx)("td",{children:e.get("number3")})]},e.id)}))})]}),Object(a.jsx)(ee,{page_rw:N,startRow_rw:C,SetPage_rw:S,SetStartRow_rw:P,max:5,Total_row:T,Total_pages:z,url:"/page",history:l})]})})]})})},ne=n(258),ae=n(192),ce=n(260),re=n(259);var se=function(e){var t=r.a.useState(null),n=Object(H.a)(t,2),c=n[0],s=n[1],l=r.a.useState(null),i=Object(H.a)(l,2),d=i[0],j=i[1],b=r.a.useState(null),u=Object(H.a)(b,2),h=u[0],x=u[1],O={location:{},content:"",categories:null,number:c,number2:d,number3:h,username:"",platform:"",brand:""},m=r.a.useState(O),f=Object(H.a)(m,2),v=f[0],g=f[1],y=r.a.useState(null),w=Object(H.a)(y,2),N=w[0],S=w[1],_=r.a.useState(!1),k=Object(H.a)(_,2),C=k[0],P=k[1],T=function(e,t){g((function(){return Object(p.a)(Object(p.a)({},v),{},Object(U.a)({},t.target.name,t.target.value))}))},z=function(e,t){console.log("name is",e,"val is",t),g((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(U.a)({},e,t))})),console.log("formValues:",v)},E=function(){var t=Object(B.a)(W.a.mark((function t(n){var a,r,s,l;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.preventDefault(),n.persist(),t.next=5,P(!0);case 5:return t.next=7,S(null);case 7:return a=o.a.User.current(),r=o.a.Object.extend("TotalInfo7"),s=new r,(l=new o.a.ACL).setWriteAccess(a,!0),l.setPublicReadAccess(!0),s.setACL(l),s.set("location",v.location),s.set("location_geo",new o.a.GeoPoint({latitude:v.location.lat,longitude:v.location.lng})),s.set("content",v.content),s.set("number",c),s.set("number2",d),s.set("number3",h),s.set("username",v.username),s.set("brand",v.brand),s.set("platform",v.platform),s.set("categories",v.categories),s.set("user",a),console.log("post is",s),t.next=28,s.save();case 28:return t.next=30,P(!1);case 30:e.history.push("/add5"),t.next=40;break;case 33:return t.prev=33,t.t0=t.catch(0),console.log("eror is :",t.t0),t.next=38,P(!1);case 38:return t.next=40,S(N.message);case 40:case"end":return t.stop()}}),t,null,[[0,33]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"repair",children:Object(a.jsxs)(ae.a,{onSubmit:E,children:[Object(a.jsxs)(ae.a.Group,{controlId:"formBasicName",children:[Object(a.jsx)(ae.a.Label,{children:"Name"}),Object(a.jsx)(ae.a.Control,{type:"text",placeholder:"Enter your name",onChange:T.bind(this,"username"),value:v.value,name:"username"})]}),Object(a.jsxs)(ae.a.Group,{controlId:"formBasicNumber",children:[Object(a.jsx)(ae.a.Label,{children:"Enter Phone number"}),Object(a.jsx)(ae.a.Control,{type:"number",placeholder:"Enter your phone number",onChange:function(e){console.log("onChange fired with value:",+e.target.value),s((function(){return+e.target.value}))},value:c})]}),Object(a.jsxs)(ae.a.Group,{controlId:"formBasicAddress",children:[Object(a.jsx)(ae.a.Label,{children:"Enter Pos brand"}),Object(a.jsx)(ae.a.Control,{type:"text",placeholder:"Enter Pos brand",onChange:T.bind(this,"brand"),value:v.value,name:"brand"})]}),Object(a.jsxs)(ae.a.Group,{controlId:"formBasicAddress",children:[Object(a.jsx)(ae.a.Label,{children:"Currently used platform"}),Object(a.jsx)(ae.a.Control,{type:"text",placeholder:"Enter your current platform",onChange:T.bind(this,"platform"),value:v.value,name:"platform"})]}),Object(a.jsx)(re.a,{title:"Gender",handleChange:z.bind(this,"categories"),options:[{value:"Male",label:"Male"},{value:"Female ",label:"Female"}]}),Object(a.jsx)(ce.a,{handleDescription:z.bind(this,"content"),value:v.content,placeholder:"Enter your message",title:"Reason for requesting new POS"}),Object(a.jsxs)(ae.a.Group,{controlId:"formBasicNumber",children:[Object(a.jsx)(ae.a.Label,{children:"Enter Average daily withdrawal amount"}),Object(a.jsx)(ae.a.Control,{type:"number",placeholder:"Enter average daily withdrawer amount",onChange:function(e){console.log("onChange fired with value:",+e.target.value),j((function(){return+e.target.value}))},value:d})]}),Object(a.jsxs)(ae.a.Group,{controlId:"formBasicNumber",children:[Object(a.jsx)(ae.a.Label,{children:"Enter Average daily deposit withdrawal amount"}),Object(a.jsx)(ae.a.Control,{type:"number",placeholder:"Enter average daily deposit withdrawer amount",onChange:function(e){console.log("onChange fired with value:",+e.target.value),x((function(){return+e.target.value}))},value:h})]}),Object(a.jsx)(D.a,{title:"Enter your current address",value:v.location&&v.location.formatted_address||"",onHandleSelect:function(e,t){g((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(U.a)({},e,t))}))}.bind(this,"location"),options:""}),N&&Object(a.jsx)(ne.a,{message:N}),C&&Object(a.jsx)(F.a,{}),Object(a.jsx)(X.a,{variant:"primary",type:"submit",children:"Submit"})]})})},le=(n(926),function(){return Object(a.jsx)("div",{className:"chat",children:Object(a.jsx)("a",{className:"link",href:"https://api.whatsapp.com/send?phone=+2348034600714",children:"Chat Us now!!!"})})}),ie=r.a.lazy((function(){return n.e(15).then(n.bind(null,998))})),oe=r.a.lazy((function(){return n.e(14).then(n.bind(null,999))})),de=r.a.lazy((function(){return n.e(7).then(n.bind(null,1013))})),je=r.a.lazy((function(){return n.e(9).then(n.bind(null,1e3))})),be=r.a.lazy((function(){return n.e(10).then(n.bind(null,1001))})),ue=r.a.lazy((function(){return n.e(11).then(n.bind(null,1002))})),he=r.a.lazy((function(){return n.e(12).then(n.bind(null,1003))})),xe=r.a.lazy((function(){return n.e(19).then(n.bind(null,1004))})),Oe=r.a.lazy((function(){return n.e(13).then(n.bind(null,1005))})),pe=r.a.lazy((function(){return n.e(20).then(n.bind(null,1006))})),me=r.a.lazy((function(){return Promise.resolve().then(n.bind(null,420))})),fe=r.a.lazy((function(){return n.e(4).then(n.bind(null,1007))})),ve=r.a.lazy((function(){return n.e(16).then(n.bind(null,1014))})),ge=r.a.lazy((function(){return n.e(5).then(n.bind(null,1008))})),ye=r.a.lazy((function(){return n.e(8).then(n.bind(null,1009))})),we=r.a.lazy((function(){return n.e(6).then(n.bind(null,1010))})),Ne=r.a.lazy((function(){return Promise.all([n.e(3),n.e(18)]).then(n.bind(null,1015))})),Se=r.a.lazy((function(){return n.e(17).then(n.bind(null,1011))})),_e=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(O,{children:Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(F.a,{}),children:Object(a.jsx)(d.a,{children:Object(a.jsx)(M,{children:Object(a.jsxs)(j.d,{children:[Object(a.jsx)(f,{component:oe,layout:L,path:"/",exact:!0}),Object(a.jsx)(j.b,{component:je,layout:L,path:"/page/:pageId",exact:!0}),Object(a.jsx)(j.b,{component:Se,layout:L,path:"/admin2",exact:!0}),Object(a.jsx)(j.b,{component:je,layout:L,path:"/add",exact:!0}),Object(a.jsx)(j.b,{component:be,layout:L,path:"/add2",exact:!0}),Object(a.jsx)(j.b,{component:ue,layout:L,path:"/add3",exact:!0}),Object(a.jsx)(j.b,{component:$,layout:L,path:"/add4",exact:!0}),Object(a.jsx)(j.b,{component:he,layout:L,path:"/add5",exact:!0}),Object(a.jsx)(j.b,{component:te,layout:L,path:"/add6",exact:!0}),Object(a.jsx)(j.b,{component:de,layout:L,path:"/subscribe",exact:!0}),Object(a.jsx)(j.b,{component:Ne,layout:L,path:"/register",exact:!0}),Object(a.jsx)(j.b,{component:ve,layout:L,path:"/payment",exact:!0}),Object(a.jsx)(j.b,{component:le,layout:L,path:"/chat",exact:!0}),Object(a.jsx)(j.b,{component:xe,layout:L,path:"/transfer",exact:!0}),Object(a.jsx)(j.b,{component:we,layout:L,path:"/pos",exact:!0}),Object(a.jsx)(j.b,{component:se,layout:L,path:"/paper",exact:!0}),Object(a.jsx)(j.b,{component:ye,layout:L,path:"/repair",exact:!0}),Object(a.jsx)(j.b,{component:pe,layout:L,path:"/withdraw",exact:!0}),Object(a.jsx)(j.b,{component:Oe,layout:L,path:"/admin",exact:!0}),Object(a.jsx)(f,{component:me,path:"/dashboard",exact:!0}),Object(a.jsx)(j.b,{component:fe,path:"/auth",exact:!0}),Object(a.jsx)(j.b,{component:ge,layout:L,path:"/logout",exact:!0}),Object(a.jsx)(j.b,{component:ie,path:"/notfound",exact:!0}),Object(a.jsx)(j.a,{to:"/notfound"})]})})})})})})};n(927);var ke=function(){return Object(a.jsx)("div",{className:"app",children:Object(a.jsx)(_e,{})})},Ce=function(e){e&&e instanceof Function&&n.e(21).then(n.bind(null,1012)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(928);o.a.initialize("myAppId"),o.a.serverURL="http://localhost:1339/parse",l.a.render(Object(a.jsx)(ke,{}),document.getElementById("root")),Ce()}},[[930,1,2]]]);
//# sourceMappingURL=main.b82ef898.chunk.js.map