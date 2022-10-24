(this["webpackJsonpweb3-barber-shop"]=this["webpackJsonpweb3-barber-shop"]||[]).push([[0],{368:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},372:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_service","type":"string"},{"internalType":"string","name":"_day","type":"string"},{"internalType":"string","name":"_time","type":"string"},{"internalType":"string","name":"_priority","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"string","name":"_expiration_time","type":"string"}],"name":"bookAppointment","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getPrices","outputs":[{"components":[{"internalType":"uint256","name":"hair_cut","type":"uint256"},{"internalType":"uint256","name":"treatment","type":"uint256"},{"internalType":"uint256","name":"washing","type":"uint256"},{"internalType":"uint256","name":"beard_trim","type":"uint256"},{"internalType":"uint256","name":"regular","type":"uint256"},{"internalType":"uint256","name":"vip","type":"uint256"},{"internalType":"uint256","name":"home_service","type":"uint256"}],"internalType":"struct BarberShop.prices","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTransactions","outputs":[{"components":[{"internalType":"string","name":"service","type":"string"},{"internalType":"string","name":"day","type":"string"},{"internalType":"string","name":"time","type":"string"},{"internalType":"string","name":"priority","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"expiration_time","type":"string"}],"internalType":"struct BarberShop.TransactionDetails[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"servicePrices","outputs":[{"internalType":"uint256","name":"hair_cut","type":"uint256"},{"internalType":"uint256","name":"treatment","type":"uint256"},{"internalType":"uint256","name":"washing","type":"uint256"},{"internalType":"uint256","name":"beard_trim","type":"uint256"},{"internalType":"uint256","name":"regular","type":"uint256"},{"internalType":"uint256","name":"vip","type":"uint256"},{"internalType":"uint256","name":"home_service","type":"uint256"}],"stateMutability":"view","type":"function"}]')},386:function(e,t,n){},405:function(e,t){},407:function(e,t){},419:function(e,t){},420:function(e,t){},443:function(e,t){},449:function(e,t){},451:function(e,t){},477:function(e,t){},507:function(e,t){},508:function(e,t){},565:function(e,t){},744:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(56),s=n.n(r),c=n(7),o=(n(386),n(84)),l=n(12),u=n(805),j=n.p+"static/media/barber.7bdd66ad.png",p=n(364),d=n.n(p),b=n(365),m=n.n(b),h=n(809),x=n(1),y=function(e){e.isConnected;return Object(x.jsxs)("div",{className:"landing",children:[Object(x.jsxs)("div",{className:"landing-text",children:[Object(x.jsxs)("h2",{children:["We are looking to make you"," ",Object(x.jsx)("span",{style:{color:"#5f9094"},children:"handsome"})]}),Object(x.jsxs)("p",{children:["You'll leave"," ",Object(x.jsx)("span",{style:{color:"#f4ac45",fontWeight:"500"},children:"lookin' sharp"}),", relaxed and ready to take on the world, with the swagger in your stride. Make a reservation, be a gentleman."]}),Object(x.jsx)(o.b,{to:"/dashboard",children:Object(x.jsx)(u.a,{variant:"contained",sx:{textTransform:"capitalize",marginTop:"1rem"},size:"large",startIcon:Object(x.jsx)(h.a,{component:d.a}),children:"Book Appointment"})}),Object(x.jsxs)("div",{className:"celo",children:[Object(x.jsx)("div",{className:"celo-logo",children:Object(x.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"celo logo"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:"#1 Payment Option"}),Object(x.jsx)("small",{children:"Pay Seemlessly with Celo usd"}),Object(x.jsx)("div",{style:{marginTop:"0.2rem"},children:[1,2,3,4,5].map((function(e){return Object(x.jsx)(h.a,{component:m.a,sx:{fontSize:"1rem",color:"#f4ac45"}},e)}))})]})]})]}),Object(x.jsxs)("div",{className:"landing-img",children:[Object(x.jsx)("img",{src:j,alt:"A Barber"}),Object(x.jsx)("div",{className:"landing-img-box-1"}),Object(x.jsx)("div",{className:"landing-img-box-2"})]})]})},O=n(374),g=n(808),f=n(806),A=n(366),v=n.n(A),w=function(){return Object(x.jsxs)("div",{className:"logo",children:[Object(x.jsx)(h.a,{component:v.a,color:"primary"}),Object(x.jsxs)("div",{className:"logo-text",children:[Object(x.jsx)("span",{children:"The"}),Object(x.jsx)("span",{style:{color:"#5f9094"},children:"cut"})]})]})},S=function(e){var t=e.active,n=e.setActive;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"ham ".concat(t?"active":""),onClick:function(){n(!t)},children:[Object(x.jsx)("div",{className:"top"}),Object(x.jsx)("div",{className:"bottom"})]})})},k=function(){var e=Object(l.j)(),t=Object(a.useState)(!1),n=Object(c.a)(t,2),i=n[0],r=n[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("nav",{className:"nav",children:[Object(x.jsx)(o.b,{to:"/",children:Object(x.jsx)(w,{})}),"/"===e.pathname&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("ul",{className:"menu-nav",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#home",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#services",children:"Services"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#about",children:"About"})})]}),Object(x.jsx)("div",{className:"menu-btn",children:Object(x.jsx)(o.b,{to:"/dashboard",children:Object(x.jsx)(u.a,{variant:"contained",sx:{textTransform:"capitalize"},children:"Book appointment"})})}),Object(x.jsx)(S,{active:i,setActive:r})]}),"/dashboard"===e.pathname&&Object(x.jsx)("h3",{children:"User Dashboard"})]}),"/"===e.pathname&&Object(x.jsx)("div",{children:Object(x.jsx)(K,{active:i})})]})},K=function(e){var t=e.active;return Object(x.jsx)("div",{className:"mobile-nav ".concat(t?"active":""),children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("ul",{className:"",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#home",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#services",children:"Services"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#about",children:"About"})})]}),Object(x.jsx)("div",{className:"",children:Object(x.jsx)(o.b,{to:"/dashboard",children:Object(x.jsx)(u.a,{variant:"contained",sx:{textTransform:"capitalize"},children:"Book appointment"})})})]})})},T=n(17),C=n(30),B=n(367),Q=n(801),W=n(819),U=n(818),N=n.p+"static/media/celo.dff72c15.png",F=n(812),H=n(816),J=n(815),D=n(810),R=n(813),P=n(814),X=n(811),E=n(36),I=n.n(E),M=function(e){var t=e.transactions;return Object(x.jsxs)("div",{className:"book-history",children:[Object(x.jsx)("h1",{children:"Booking History"}),Object(x.jsx)(D.a,{component:X.a,children:Object(x.jsxs)(F.a,{sx:{minWidth:650},size:"small","aria-label":"a dense table",children:[Object(x.jsx)(R.a,{children:Object(x.jsxs)(P.a,{children:[Object(x.jsx)(J.a,{sx:{fontWeight:"bold"},children:"S/N"}),Object(x.jsx)(J.a,{align:"right",sx:{fontWeight:"bold"},children:"Service"}),Object(x.jsx)(J.a,{align:"right",sx:{fontWeight:"bold"},children:"Day"}),Object(x.jsx)(J.a,{align:"right",sx:{fontWeight:"bold"},children:"Time"}),Object(x.jsx)(J.a,{align:"right",sx:{fontWeight:"bold"},children:"Priority"}),Object(x.jsx)(J.a,{align:"right",sx:{fontWeight:"bold"},children:"Expired"}),Object(x.jsx)(J.a,{align:"right",sx:{fontWeight:"bold"},children:"Amount(cUSD)"})]})}),t?t.map((function(e,t){return Object(x.jsx)(H.a,{children:Object(x.jsxs)(P.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(x.jsx)(J.a,{component:"th",scope:"row",children:t}),Object(x.jsx)(J.a,{align:"right",children:e.service}),Object(x.jsx)(J.a,{align:"right",children:e.day}),Object(x.jsx)(J.a,{align:"right",children:e.time}),Object(x.jsx)(J.a,{align:"right",children:e.priority}),Object(x.jsx)(J.a,{align:"right",children:Number(e.expiration_time)-Date.now()>0?"false":"true"}),Object(x.jsx)(J.a,{align:"right",children:new I.a(e.amount).c/1e4})]})},t)})):Object(x.jsx)("small",{style:{padding:"1rem"},children:"No Transactions!"})]})})]})},z=n(817),V=n(803),q=n(799),Z=n(802),L=function(e){var t=e.label,n=e.value,a=e.onChange,i=e.menu;return Object(x.jsxs)(z.a,{fullWidth:!0,sx:{marginTop:"1rem"},children:[Object(x.jsx)(V.a,{id:t,sx:{textTransform:"capitalize"},children:t}),Object(x.jsx)(q.a,{labelId:t,id:"".concat(t,"_id"),value:n,label:t,size:"small",onChange:a,required:!0,children:i.map((function(e,n){return Object(x.jsx)(Z.a,{value:e,children:"service"===t||"priority"===t||"day"===t?e.split("#")[1]:e},n)}))})]})},Y=function(e){return{date:e.toLocaleDateString("en-us",{weekday:"short",month:"short",day:"numeric"}),time_:e.toLocaleTimeString("en-us",{hour:"numeric",minute:"numeric",hour12:!0})}},G=function(e){var t=e.contract,n=e.approve,a=e.setMsg,r=e.kit,s=e.getBalance,o=e.getTransactions,l=e.transactions,j=i.a.useState(""),p=Object(c.a)(j,2),d=p[0],b=p[1],m=i.a.useState(""),h=Object(c.a)(m,2),y=h[0],O=h[1],g=i.a.useState(""),f=Object(c.a)(g,2),A=f[0],v=f[1],w=i.a.useState(""),S=Object(c.a)(w,2),k=S[0],K=S[1],B=i.a.useState(0),Q=Object(c.a)(B,2),W=Q[0],U=Q[1],F=function(e){return new Date((new Date).setDate((new Date).getDate()+e))},H=function(){var e=Object(C.a)(Object(T.a)().mark((function e(i){var c;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=1e18,i.preventDefault(),a({show:!0,message:"Waiting for Payment approval",severity:"warning"}),e.prev=3,e.next=6,n(new I.a(Number(W)*c));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),a({show:!0,message:e.t0.message,severity:"error"});case 11:return a({show:!0,message:"Awaiting Payment...",severity:"warning"}),e.prev=12,e.next=15,t.methods.bookAppointment(d.split("#")[1],y.split("#")[1],A,k.split("#")[1],new I.a(Number(W)*c),"".concat(Date.now()+Number(y.split("#")[0]))).send({from:r.defaultAccount});case 15:return a({show:!0,message:"You successfully Booked an Appointment with a barber.",severity:"success"}),e.next=18,s();case 18:return e.next=20,o();case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(12),a({show:!0,message:e.t1.message,severity:"error"});case 25:case"end":return e.stop()}}),e,null,[[3,8],[12,22]])})));return function(t){return e.apply(this,arguments)}}();return i.a.useEffect((function(){var e=[Number(d.split("#")[0]),Number(k.split("#")[0])],t=e[0],n=e[1];U((function(){return t+n}))}),[d,k]),Object(x.jsxs)("div",{className:"book",children:[Object(x.jsxs)("form",{className:"appointment-form",onSubmit:H,children:[Object(x.jsx)("h3",{children:"Book Appointment"}),Object(x.jsx)(L,{label:"service",onChange:function(e){return b(e.target.value)},value:d,menu:["5#Hair Cut","3#Beard Trim","7#Treatment","4#Wash"]}),Object(x.jsx)(L,{label:"day",onChange:function(e){return O(e.target.value)},value:y,menu:["8.64e7#".concat(Y(F(1)).date),"1.728e8#".concat(Y(F(2)).date),"2.592e8#".concat(Y(F(3)).date),"3.456e8#".concat(Y(F(4)).date),"4.32e8#".concat(Y(F(5)).date)]}),Object(x.jsx)(L,{label:"time",onChange:function(e){return v(e.target.value)},value:A,menu:["9am","10:30am","12pm","1:30pm","3pm"]}),Object(x.jsx)(L,{label:"priority",onChange:function(e){return K(e.target.value)},value:k,menu:["5# VIP","0# Regular","10# Home service"]}),Object(x.jsxs)("p",{children:["Amount Payable:"," ",Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"".concat(W," cUSD")})]}),Object(x.jsxs)(u.a,{variant:"contained",fullWidth:!0,type:"submit",children:["Pay with Celo USD"," ",Object(x.jsx)("img",{src:N,alt:"",style:{height:"100%",width:"1.5rem"}})]})]}),Object(x.jsx)(M,{transactions:l})]})},_=n(373),$=n.n(_),ee=function(e){var t=e.balance;return Object(x.jsx)("div",{style:{display:"flex",justifyContent:"end"},children:Object(x.jsxs)("div",{className:"wallet",children:[t," cUSD"]})})},te=n(368),ne=n(369),ae=n(215),ie=n.n(ae),re=n(372),se=["setWarning","setSuccess","severity"],ce=function(){var e=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(c.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(""),j=Object(c.a)(u,2),p=j[0],d=j[1],b=Object(a.useState)(!1),m=Object(c.a)(b,2),h=m[0],x=m[1],y=Object(a.useState)(""),O=Object(c.a)(y,2),g=O[0],f=O[1];return{setWarning:function(e,t){i(!0),l(t),d(e)},setSuccess:function(e){i(!1),x(!0),f(e)},severity:p,successMsg:g,warningMsg:o,showWarning:n,showSuccess:h}}(),t=e.setWarning,n=e.setSuccess,r=e.severity,s=Object(B.a)(e,se),o=s.showSuccess,l=s.showWarning,u=s.warningMsg,j=s.successMsg,p=i.a.useState(!0),d=Object(c.a)(p,2),b=d[0],m=d[1],h=i.a.useState({show:!1,message:"",severity:"warning"}),y=Object(c.a)(h,2),O=y[0],g=y[1],f=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(),s=Object(c.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(),j=Object(c.a)(u,2),p=j[0],d=j[1],b=function(){var e=Object(C.a)(Object(T.a)().mark((function e(t){var n,a,r,s;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new ie.a(window.celo),a=Object(ne.newKitFromWeb3)(n),e.next=4,a.web3.eth.getAccounts();case 4:r=e.sent,a.defaultAccount=r[0],s=new a.web3.eth.Contract(re,t),l(a),i(a.defaultAccount),d(s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{initializeContractKit:b,kit:o,account:n,contract:p}}(),A=f.initializeContractKit,v=f.kit,w=f.account,S=f.contract,k=function(e,t){var n=i.a.useState(0),a=Object(c.a)(n,2),r=a[0],s=a[1],o=function(){var n=Object(C.a)(Object(T.a)().mark((function n(){var a,i;return Object(T.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.getTotalBalance(e.defaultAccount);case 3:a=n.sent,i=a.cUSD.shiftedBy(-t).toFixed(2),s(i),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return{getBalance:o,balance:r}}(v,18),K=k.getBalance,N=k.balance,F={cUSDContractAddress:"0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",contractAddress:"0x7116F8E6Bf3dfAaf85B8071D909DfAA9E043F29A"},H=F.cUSDContractAddress,J=F.contractAddress,D=function(e){var t=Object(a.useState)(),n=Object(c.a)(t,2),i=n[0],r=n[1],s=function(){var t=Object(C.a)(Object(T.a)().mark((function t(){var n;return Object(T.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.getTransactions().call();case 3:n=t.sent,r(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return{transactions:i,getTransactions:s}}(S),R=D.getTransactions,P=D.transactions,X=function(){var e=Object(C.a)(Object(T.a)().mark((function e(){return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.celo){e.next=15;break}return t("warning","Please approve this DApp to use it."),e.prev=2,e.next=5,window.celo.enable();case 5:return n("Celo Wallet is Enabled!"),e.next=8,A(J);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t("error",e.t0.message);case 13:e.next=15;break;case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(C.a)(Object(T.a)().mark((function e(t){var n,a;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new v.web3.eth.Contract(te,H),e.next=3,n.methods.approve(J,t).send({from:v.defaultAccount});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.useEffect((function(){X()}),[]),i.a.useEffect((function(){v&&w&&S&&(K(),R())}),[v,w,S]),Object(x.jsxs)(x.Fragment,{children:[l&&Object(x.jsx)(Q.a,{severity:r,sx:{mb:2},children:u}),O.show&&Object(x.jsx)(Q.a,{severity:O.severity,sx:{mb:2},children:O.message}),o&&!l?Object(x.jsx)(W.a,{in:b,children:Object(x.jsx)(Q.a,{action:Object(x.jsx)(U.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){m(!1)},children:Object(x.jsx)($.a,{fontSize:"inherit"})}),sx:{mb:2},children:j})}):Object(x.jsx)(x.Fragment,{}),!l&&Object(x.jsxs)("div",{className:"dashboard",children:[Object(x.jsx)(ee,{balance:N}),Object(x.jsx)("div",{children:Object(x.jsx)(G,{contract:S,approve:E,setMsg:g,kit:v,getBalance:K,getTransactions:R,transactions:P})})]})]})};n(743);var oe=function(){var e=Object(O.a)({palette:{primary:{main:"#5f9094"}}}),t=Object(a.useState)(!1),n=Object(c.a)(t,2),i=n[0];return n[1],Object(x.jsx)(g.a,{theme:e,children:Object(x.jsx)(f.a,{children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(k,{})}),Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{path:"/",element:Object(x.jsx)(y,{isConnected:i})}),Object(x.jsx)(l.a,{path:"/dashboard",element:Object(x.jsx)(ce,{})})]})]})})})};s.a.render(Object(x.jsx)(oe,{}),document.getElementById("root"))}},[[744,1,2]]]);
//# sourceMappingURL=main.aee66c9a.chunk.js.map