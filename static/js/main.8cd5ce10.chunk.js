(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{14:function(e,t,n){"use strict";t.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"}},20:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"k",(function(){return p})),n.d(t,"j",(function(){return b})),n.d(t,"i",(function(){return f}));var r=n(14),c=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},a=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},i=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},o=function(e){return{type:r.a.EMAIL_SIGN_IN_START,payload:e}},s=function(){return{type:r.a.CHECK_USER_SESSION}},u=function(){return{type:r.a.SIGN_OUT_START}},l=function(){return{type:r.a.SIGN_OUT_SUCCESS}},d=function(e){return{type:r.a.SIGN_OUT_FAILURE,payload:e}},p=function(e){return{type:r.a.SIGN_UP_START,payload:e}},b=function(e){var t=e.user,n=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},f=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:e}}},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return b}));var r=n(5),c=n.n(r),a=n(8),i=n(47),o=n(38);n(86),n(81);o.a.initializeApp({apiKey:"AIzaSyBpVxf5rqvvDqEoTjJsplloe1tYYvQ-eDI",authDomain:"crwn-clothing-13221.firebaseapp.com",projectId:"crwn-clothing-13221",storageBucket:"crwn-clothing-13221.appspot.com",messagingSenderId:"857002291031",appId:"1:857002291031:web:d3f11a0721d74389591812",measurementId:"G-E982VG3LP9"});var s=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,i,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=p.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,o=t.email,s=new Date,e.prev=9,e.next=12,r.set(Object(a.a)({displayName:i,email:o,createdAt:s},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),u=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},l=function(){return new Promise((function(e,t){var n=d.onAuthStateChanged((function(t){n(),e(t)}),t)}))},d=o.a.auth(),p=o.a.firestore(),b=new o.a.auth.GoogleAuthProvider;b.setCustomParameters({prompt:"select_account"});o.a},25:function(e,t,n){"use strict";t.a={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"}},29:function(e,t,n){"use strict";t.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},34:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n(25),c=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},a=function(e){return{type:r.a.ADD_ITEM,payload:e}},i=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},o=function(e){return{type:r.a.CLEAR_ITEM_FROM_CART,payload:e}},s=function(){return{type:r.a.CLEAR_CART}}},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s}));var r=n(19),c=function(e){return e.cart},a=Object(r.a)([c],(function(e){return e.cartItems})),i=Object(r.a)([c],(function(e){return e.hidden})),o=Object(r.a)([a],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),s=Object(r.a)([a],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}))},44:function(e,t,n){"use strict";var r,c,a,i,o=n(8),s=n(53),u=(n(1),n(12)),l=n(13),d=Object(l.b)(r||(r=Object(u.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),p=Object(l.b)(c||(c=Object(u.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),b=Object(l.b)(a||(a=Object(u.a)(["\n  background-color: #4285f4;\n  color: white;\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),f=l.c.button(i||(i=Object(u.a)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ',"\n"])),(function(e){return e.isGoogleSignIn?b:e.inverted?p:d})),O=n(3);t.a=function(e){var t=e.children,n=Object(s.a)(e,["children"]);return Object(O.jsx)(f,Object(o.a)(Object(o.a)({},n),{},{children:t}))}},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(29),c=(n(21),function(){return{type:r.a.FETCH_COLLECTIONS_START}}),a=function(e){return{type:r.a.FETCH_COLLECTIONS_SUCCESS,payload:e}},i=function(e){return{type:r.a.FETCH_COLLECTIONS_FAILURE,payload:e}}},54:function(e,t,n){"use strict";n(1);var r,c,a=n(12),i=n(13),o=i.c.div(r||(r=Object(a.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),s=i.c.div(c||(c=Object(a.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),u=n(3);t.a=function(){return Object(u.jsx)(o,{children:Object(u.jsx)(s,{})})}},76:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(41),i=n.n(a),o=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,92)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},s=n(28),u=n(58),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(76);var p,b,f,O,h,j,x,g,m,v,S,E,_,w,I,y,C=n(35),T=n(15),k=n(19),U=n(12),N=n(13),R=Object(N.a)(p||(p=Object(U.a)(['\nbody {\n  font-family: "Open Sans Condensed";\n  padding: 20px 40px;\n\n  @media screen and (max-width: 800px) {\n    padding: 10px;\n  }\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n']))),A=n(34),L=n(37);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function M(e,t){var n=e.title,c=e.titleId,a=F(e,["title","titleId"]);return r.createElement("svg",G({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),b||(b=r.createElement("g",null)),f||(f=r.createElement("g",null)),O||(O=r.createElement("g",null)),h||(h=r.createElement("g",null)),j||(j=r.createElement("g",null)),x||(x=r.createElement("g",null)),g||(g=r.createElement("g",null)),m||(m=r.createElement("g",null)),v||(v=r.createElement("g",null)),S||(S=r.createElement("g",null)),E||(E=r.createElement("g",null)),_||(_=r.createElement("g",null)),w||(w=r.createElement("g",null)),I||(I=r.createElement("g",null)),y||(y=r.createElement("g",null)))}var H,P,D,z,W,q,V,B,K,J,Y,Q,X,$,Z,ee,te=r.forwardRef(M),ne=(n.p,N.c.div(H||(H=Object(U.a)(["\n  width: 45px;\n  height: 45px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"])))),re=Object(N.c)(te)(P||(P=Object(U.a)(["\n  width: 24px;\n  height: 24px;\n"]))),ce=N.c.span(D||(D=Object(U.a)(["\n  position: absolute;\n  font-size: 10px;\n  font-weight: bold;\n  bottom: 12px;\n"]))),ae=n(3),ie=Object(k.b)({itemCount:L.c}),oe=Object(s.b)(ie,(function(e){return{toggleCartHidden:function(){return e(Object(A.e)())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(ae.jsxs)(ne,{onClick:t,children:[Object(ae.jsx)(re,{}),Object(ae.jsx)(ce,{children:n})]})})),se=n(44),ue=N.c.div(z||(z=Object(U.a)(["\n  width: 100%;\n  display: flex;\n  height: 80px;\n  margin-bottom: 15px;\n"]))),le=N.c.img(W||(W=Object(U.a)(["\n  width: 30%;\n"]))),de=N.c.div(q||(q=Object(U.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 10px 20px;\n"]))),pe=function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object(ae.jsxs)(ue,{children:[Object(ae.jsx)(le,{src:n,alt:"item"}),Object(ae.jsxs)(de,{children:[Object(ae.jsx)("span",{children:c}),Object(ae.jsxs)("span",{children:[a," x $",r]})]})]})},be=N.c.div(V||(V=Object(U.a)(["\n  position: absolute;\n  width: 240px;\n  height: 340px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n  background-color: white;\n  top: 90px;\n  right: 40px;\n  z-index: 5;\n"]))),fe=Object(N.c)(se.a)(B||(B=Object(U.a)(["\n  margin-top: auto;\n"]))),Oe=N.c.span(K||(K=Object(U.a)(["\n  font-size: 18px;\n  margin: 50px auto;\n"]))),he=N.c.div(J||(J=Object(U.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n"]))),je=Object(k.b)({cartItems:L.b}),xe=Object(T.g)(Object(s.b)(je)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(ae.jsxs)(be,{children:[Object(ae.jsx)(he,{children:t.length?t.map((function(e){return Object(ae.jsx)(pe,{item:e},e.id)})):Object(ae.jsx)(Oe,{children:"Your cart is empty"})}),Object(ae.jsx)(fe,{onClick:function(){n.push("/checkout"),r(Object(A.e)())},children:"GO TO CHECKOUT"})]})}))),ge=Object(k.a)([function(e){return e.user}],(function(e){return e.currentUser})),me=n(20),ve=N.c.div(Y||(Y=Object(U.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"]))),Se=Object(N.c)(C.b)(Q||(Q=Object(U.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0;\n  }\n"]))),Ee=N.c.div(X||(X=Object(U.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]))),_e=Object(N.c)(C.b)($||($=Object(U.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"])));function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ye(e,t){var n=e.title,c=e.titleId,a=Ie(e,["title","titleId"]);return r.createElement("svg",we({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},a),void 0===n?r.createElement("title",{id:c},"Group"):n?r.createElement("title",{id:c},n):null,Z||(Z=r.createElement("desc",null,"Created with Sketch.")),ee||(ee=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Ce,Te,ke,Ue=r.forwardRef(ye),Ne=(n.p,Object(k.b)({currentUser:ge,hidden:L.a})),Re=Object(s.b)(Ne,(function(e){return{signOutStart:function(){return e(Object(me.g)())}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return Object(ae.jsxs)(ve,{children:[Object(ae.jsx)(Se,{to:"/",children:Object(ae.jsx)(Ue,{className:"logo"})}),Object(ae.jsxs)(Ee,{children:[Object(ae.jsx)(_e,{to:"/shop",children:"SHOP"}),Object(ae.jsx)(_e,{to:"/shop",children:"CONTACT"}),t?Object(ae.jsx)(_e,{as:"div",onClick:r,children:"SIGN OUT"}):Object(ae.jsx)(_e,{to:"/signin",children:"SIGN IN"}),Object(ae.jsx)(oe,{})]}),n?null:Object(ae.jsx)(xe,{})]})})),Ae=n(54),Le=n(62),Ge=n(63),Fe=n(68),Me=n(65),He=N.c.div(Ce||(Ce=Object(U.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Pe=N.c.div(Te||(Te=Object(U.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"])),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),De=N.c.h2(ke||(ke=Object(U.a)(["\n  font-size: 28px;\n  color: #2f8e89;\n"]))),ze=function(e){Object(Fe.a)(n,e);var t=Object(Me.a)(n);function n(){var e;return Object(Le.a)(this,n),(e=t.call(this)).state={hasErrored:!1},e}return Object(Ge.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasErrored?Object(ae.jsxs)(He,{children:[Object(ae.jsx)(Pe,{imageUrl:"https://i.imgur.com/yW2W9SC.png"}),Object(ae.jsx)(De,{children:"Sorry this page is broken"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),n}(c.a.Component),We=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,95))})),qe=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,93))})),Ve=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,94))})),Be=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,96))}));var Ke=Object(k.b)({currentUser:ge}),Je=Object(s.b)(Ke,(function(e){return{checkUserSession:function(){return e(Object(me.c)())}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(r.useEffect)((function(){t()}),[]),Object(ae.jsx)("div",{className:"App",children:Object(ae.jsxs)(C.a,{basename:"/crwn-clothing",children:[Object(ae.jsx)(R,{}),Object(ae.jsx)(Re,{}),Object(ae.jsx)(T.d,{children:Object(ae.jsx)(ze,{children:Object(ae.jsxs)(r.Suspense,{fallback:Object(ae.jsx)(Ae.a,{}),children:[Object(ae.jsx)(T.b,{exact:!0,path:"/",component:We}),Object(ae.jsx)(T.b,{path:"/shop",component:qe}),Object(ae.jsx)(T.b,{exact:!0,path:"/checkout",component:Be}),Object(ae.jsx)(T.b,{exact:!0,path:"/signin",render:function(){return n?Object(ae.jsx)(T.a,{to:"/"}):Object(ae.jsx)(Ve,{})}})]})})})]})})})),Ye=n(27),Qe=(n(79),n(43)),Xe=n(67),$e=n(5),Ze=n.n($e),et=n(9),tt=n(21),nt=n(48),rt=n(29),ct=Ze.a.mark(ot),at=Ze.a.mark(st),it=Ze.a.mark(ut);function ot(){var e,t,n;return Ze.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=tt.d.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(et.b)(tt.b,t);case 7:return n=r.sent,r.next=10,Object(et.c)(Object(nt.c)(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(et.c)(Object(nt.a)(r.t0.message));case 16:case"end":return r.stop()}}),ct,null,[[0,12]])}function st(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.d)(rt.a.FETCH_COLLECTIONS_START,ot);case 2:case"end":return e.stop()}}),at)}function ut(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.a)([Object(et.b)(st)]);case 2:case"end":return e.stop()}}),it)}var lt=n(8),dt=n(14),pt=Ze.a.mark(It),bt=Ze.a.mark(yt),ft=Ze.a.mark(Ct),Ot=Ze.a.mark(Tt),ht=Ze.a.mark(kt),jt=Ze.a.mark(Ut),xt=Ze.a.mark(Nt),gt=Ze.a.mark(Rt),mt=Ze.a.mark(At),vt=Ze.a.mark(Lt),St=Ze.a.mark(Gt),Et=Ze.a.mark(Ft),_t=Ze.a.mark(Mt),wt=Ze.a.mark(Ht);function It(e,t){var n,r;return Ze.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(et.b)(tt.c,e,t);case 3:return n=c.sent,c.next=6,n.get();case 6:return r=c.sent,c.next=9,Object(et.c)(Object(me.b)(Object(lt.a)({id:r.id},r.data())));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(et.c)(Object(me.a)(c.t0));case 15:case"end":return c.stop()}}),pt,null,[[0,11]])}function yt(){var e,t;return Ze.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,tt.a.signInWithPopup(tt.f);case 3:return e=n.sent,t=e.user,n.next=7,It(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(et.c)(Object(me.a)(n.t0));case 13:case"end":return n.stop()}}),bt,null,[[0,9]])}function Ct(e){var t,n,r,c,a;return Ze.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,tt.a.signInWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,It(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(et.c)(Object(me.a)(i.t0));case 14:case"end":return i.stop()}}),ft,null,[[1,10]])}function Tt(){var e;return Ze.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(tt.e)();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,It(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(et.c)(Object(me.a)(t.t0));case 14:case"end":return t.stop()}}),Ot,null,[[0,10]])}function kt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,tt.a.signOut();case 3:return e.next=5,Object(et.c)(Object(me.h)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(et.c)(Object(me.f)(e.t0));case 11:case"end":return e.stop()}}),ht,null,[[0,7]])}function Ut(e){var t,n,r,c,a,i;return Ze.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.displayName,r=t.email,c=t.password,o.prev=1,o.next=4,tt.a.createUserWithEmailAndPassword(r,c);case 4:return a=o.sent,i=a.user,o.next=8,Object(et.c)(Object(me.j)({user:i,additionalData:{displayName:n}}));case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(et.c)(Object(me.i)(o.t0));case 14:case"end":return o.stop()}}),jt,null,[[1,10]])}function Nt(e){var t,n,r;return Ze.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=3,It(n,r);case 3:case"end":return c.stop()}}),xt)}function Rt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.d)(dt.a.GOOGLE_SIGN_IN_START,yt);case 2:case"end":return e.stop()}}),gt)}function At(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.d)(dt.a.EMAIL_SIGN_IN_START,Ct);case 2:case"end":return e.stop()}}),mt)}function Lt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.d)(dt.a.CHECK_USER_SESSION,Tt);case 2:case"end":return e.stop()}}),vt)}function Gt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.d)(dt.a.SIGN_OUT_START,kt);case 2:case"end":return e.stop()}}),St)}function Ft(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.d)(dt.a.SIGN_UP_START,Ut);case 2:case"end":return e.stop()}}),Et)}function Mt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.d)(dt.a.SIGN_UP_SUCCESS,Nt);case 2:case"end":return e.stop()}}),_t)}function Ht(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.a)([Object(et.b)(Rt),Object(et.b)(At),Object(et.b)(Lt),Object(et.b)(Gt),Object(et.b)(Ft),Object(et.b)(Mt)]);case 2:case"end":return e.stop()}}),wt)}var Pt=n(32),Dt=Ze.a.mark(qt),zt=Ze.a.mark(Vt),Wt=Ze.a.mark(Bt);function qt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pt.c)(Object(A.b)());case 2:case"end":return e.stop()}}),Dt)}function Vt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pt.d)(dt.a.SIGN_OUT_SUCCESS,qt);case 2:case"end":return e.stop()}}),zt)}function Bt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pt.a)([Object(Pt.b)(Vt)]);case 2:case"end":return e.stop()}}),Wt)}var Kt=Ze.a.mark(Jt);function Jt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.a)([Object(et.b)(ut),Object(et.b)(Ht),Object(et.b)(Bt)]);case 2:case"end":return e.stop()}}),Kt)}var Yt=n(64),Qt=n.n(Yt),Xt={currentUser:null,error:null},$t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case dt.a.SIGN_IN_SUCCESS:return Object(lt.a)(Object(lt.a)({},e),{},{currentUser:t.payload,error:null});case dt.a.SIGN_OUT_SUCCESS:return Object(lt.a)(Object(lt.a)({},e),{},{currentUser:null,error:null});case dt.a.SIGN_IN_FAILURE:case dt.a.SIGN_OUT_FAILURE:case dt.a.SIGN_UP_FAILURE:return Object(lt.a)(Object(lt.a)({},e),{},{error:t.payload});default:return e}},Zt=n(25),en=n(66),tn=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(lt.a)(Object(lt.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(en.a)(e),[Object(lt.a)(Object(lt.a)({},t),{},{quantity:1})])},nn=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(lt.a)(Object(lt.a)({},e),{},{quantity:e.quantity-1}):e}))},rn={hidden:!0,cartItems:[]},cn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Zt.a.TOGGLE_CART_HIDDEN:return Object(lt.a)(Object(lt.a)({},e),{},{hidden:!e.hidden});case Zt.a.ADD_ITEM:return Object(lt.a)(Object(lt.a)({},e),{},{cartItems:tn(e.cartItems,t.payload)});case Zt.a.REMOVE_ITEM:return Object(lt.a)(Object(lt.a)({},e),{},{cartItems:nn(e.cartItems,t.payload)});case Zt.a.CLEAR_ITEM_FROM_CART:return Object(lt.a)(Object(lt.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case Zt.a.CLEAR_CART:return Object(lt.a)(Object(lt.a)({},e),{},{cartItems:[]});default:return e}},an={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},on=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,t=arguments.length>1?arguments[1]:void 0;return t.type,e},sn={collections:null,isFetching:!1,errorMessage:void 0},un=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case rt.a.FETCH_COLLECTIONS_START:return Object(lt.a)(Object(lt.a)({},e),{},{isFetching:!0});case rt.a.FETCH_COLLECTIONS_SUCCESS:return Object(lt.a)(Object(lt.a)({},e),{},{isFetching:!1,collections:t.payload});case rt.a.FETCH_COLLECTIONS_FAILURE:return Object(lt.a)(Object(lt.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},ln={key:"root",storage:Qt.a,whitelist:["cart"]},dn=Object(Ye.b)({user:$t,cart:cn,directory:on,shop:un}),pn=Object(Qe.a)(ln,dn),bn=Object(Xe.a)(),fn=[bn];var On=Object(Ye.d)(pn,Ye.a.apply(void 0,fn));bn.run(Jt);var hn=Object(Qe.b)(On);i.a.render(Object(ae.jsx)(s.a,{store:On,children:Object(ae.jsx)(c.a.StrictMode,{children:Object(ae.jsx)(u.a,{persistor:hn,children:Object(ae.jsx)(Je,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/crwn-clothing",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/crwn-clothing","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):d(t,e)}))}}(),o()}},[[85,1,2]]]);
//# sourceMappingURL=main.8cd5ce10.chunk.js.map