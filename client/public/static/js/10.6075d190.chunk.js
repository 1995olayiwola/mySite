(this.webpackJsonpclient2=this.webpackJsonpclient2||[]).push([[10],{1010:function(e,t,n){},1037:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var o=n(1),r=n(0),a=n(28),i=n.n(a),l=(n(1010),function(){return(l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)});function c(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(t){a(t)}}function l(e){try{c(o.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))}function s(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var u={},p="https://checkout.flutterwave.com/v3.js";function d(e){var t=function(){var e=Object(r.useState)({loaded:!1,error:!1}),t=e[0],n=e[1];return Object(r.useEffect)((function(){if(!u.hasOwnProperty(p)){u.src=p;var e=document.createElement("script");e.src=p,e.async=!0;var t=function(){n({loaded:!0,error:!1})},o=function(){delete u.src,n({loaded:!0,error:!0})};return e.addEventListener("load",t),e.addEventListener("complete",t),e.addEventListener("error",o),document.body.appendChild(e),function(){e.removeEventListener("load",t),e.removeEventListener("error",o)}}n({loaded:!0,error:!1})}),[]),[t.loaded,t.error]}(),n=t[0],o=t[1];return Object(r.useEffect)((function(){if(o)throw new Error("Unable to load flutterwave payment modal")}),[o]),function(t){var r,a,i=this,u=t.callback,p=t.onClose;if(o)throw new Error("Unable to load flutterwave payment modal");if(n){var d=l(l({},e),{amount:null!==(r=e.amount)&&void 0!==r?r:0,callback:function(t){return c(i,void 0,void 0,(function(){var n;return s(this,(function(o){switch(o.label){case 0:return"successful"!==t.status?[3,2]:[4,fetch("https://cors-anywhere.herokuapp.com/https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:e.public_key,language:"Flutterwave-React-v3",version:"1.0.7",title:(null===e||void 0===e?void 0:e.payment_options.split(",").length)>1?"Initiate-Charge-Multiple":"Initiate-Charge-"+(null===e||void 0===e?void 0:e.payment_options),message:"15s"})})];case 1:return o.sent(),u(t),[3,4];case 2:return[4,fetch("https://cors-anywhere.herokuapp.com/https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:null!==(n=e.public_key)&&void 0!==n?n:"",language:"Flutterwave-React-v3",version:"1.0.7",title:(null===e||void 0===e?void 0:e.payment_options.split(",").length)>1?"Initiate-Charge-Multiple-error":"Initiate-Charge-"+(null===e||void 0===e?void 0:e.payment_options)+"-error",message:"15s"})})];case 3:o.sent(),u(t),o.label=4;case 4:return[2]}}))}))},onclose:p,payment_options:null!==(a=null===e||void 0===e?void 0:e.payment_options)&&void 0!==a?a:"card, ussd, mobilemoney"});return window.FlutterwaveCheckout&&window.FlutterwaveCheckout(d)}}}function f(){var e=i.a.User.current(),t=d({public_key:"FLWPUBK-0d4e141809a7a2e0cf4085f54b4355fa-X",tx_ref:Date.now(),amount:2,currency:"NGN",payment_options:"card,mobilemoney,ussd",customer:{email:"olayiwolarahmon84@gmail.com",phonenumber:"08055049241",name:"olayiwola abdur rahmon"},customizations:{title:"Monthly subscription payment",description:"Payment for monthly due",logo:"https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg"}});return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsxs)("h1",{children:["Hello , ",e&&e.get("email")]}),Object(o.jsx)("button",{style:{backgroundColor:"blue"},onClick:function(){t({callback:function(e){console.log(e),document.getElementsByName("checkout")[0].setAttribute("style","position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;"),document.body.style.overflow=""},onClose:function(){}})},children:"Payment with askmeaboutpos.com.ng"})]})}}}]);
//# sourceMappingURL=10.6075d190.chunk.js.map