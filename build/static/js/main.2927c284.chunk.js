(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{124:function(e,t,n){},133:function(e,t,n){},359:function(e,t,n){"use strict";n.r(t);var i,c=n(0),a=n(32),r=n.n(a),s=(n(124),n(85)),o=n(110),l=n(18),j=n(20),d=n(108),h=n(35),u=n(101),b=n(52),g=n(48),x=n(27),O=n(1),p=b.a.div(i||(i=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n"])));function m(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.a,{bg:"light",expand:"lg",children:Object(O.jsx)(x.a,{children:Object(O.jsx)(g.a.Brand,{href:"/",children:"ReactGoogleAuthStarter"})})}),Object(O.jsx)(p,{children:Object(O.jsx)(u.a,{animation:"border",role:"status"})})]})}function f(){if(void 0===window.gapi||void 0===window.gapi.auth2)return null;var e=window.gapi.auth2.getAuthInstance();if(!1===e.isSignedIn.get())return null;var t=e.currentUser.get().getBasicProfile();return{id:t.getId(),fullName:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName(),imageUrl:t.getImageUrl(),email:t.getEmail(),signOut:e.signOut}}var v,w=n(58),y=n(90);function N(e){var t=e.user;return Object(O.jsx)(g.a,{bg:"light",expand:"lg",children:Object(O.jsxs)(x.a,{children:[Object(O.jsx)(g.a.Brand,{href:"/",children:"ReactGoogleAuthStarter"}),Object(O.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsxs)(g.a.Collapse,{id:"basic-navbar-nav",children:[Object(O.jsxs)(w.a,{className:"mr-auto",children:[Object(O.jsx)(w.a.Link,{href:"/",children:"Home"}),Object(O.jsx)(w.a.Link,{href:"/practice",children:"Practice"}),t&&Object(O.jsx)(w.a.Link,{href:"/profile",children:"Profile"})]}),Object(O.jsx)(w.a,{children:t?Object(O.jsx)(y.a,{title:Object(O.jsxs)("span",{children:["Hello, ",t.fullName," ",Object(O.jsx)("img",{src:t.imageUrl,alt:"profile",style:{width:"24px",height:"24px"}})," "]}),id:"basic-nav-dropdown",children:Object(O.jsx)(y.a.Item,{onClick:t.signOut,children:"Logout"})}):Object(O.jsx)("div",{id:"login-button"})})]})]})})}function k(){return Object(O.jsxs)(x.a,{children:["App developed for CS148 S21. Check out the source code"," ",Object(O.jsx)("a",{href:"https://github.com/vincentktieu101/ReactGoogleAuthStarter",children:"here"}),".",Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})}function S(e){var t=e.user;return Object(O.jsxs)("div",{children:[Object(O.jsx)(N,{user:t}),e.children,Object(O.jsx)(k,{})]})}var I=b.a.div(v||(v=Object(h.a)(["\n  width: 700px;\n  max-width: 100%;\n"])));function C(){var e=f();return Object(O.jsx)(S,{user:e,children:Object(O.jsxs)(x.a,{children:[Object(O.jsx)("h1",{children:"Hello! This is the Home page!"}),Object(O.jsxs)(I,{children:["This project was built in React, specically in Create React App (the officially supported version of React developed by Facebook). This starter code will focus on setting up Google Authentication and demonstrating examples of public and private pages. Notice that the"," ",Object(O.jsx)("a",{href:"/profile",children:"Profile"})," page is not located in the NavBar until you login."]}),Object(O.jsx)("br",{}),Object(O.jsx)(I,{children:"This Home page is a public page, meaning that users can view this page without logging in. The Profile page is a private page, meaning that users have to login."}),Object(O.jsx)("br",{})]})})}var T,A=n.p+"static/media/doggo.60600ade.jpg",G=b.a.img(T||(T=Object(h.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"])));function P(){var e=f();return Object(O.jsx)(S,{user:e,children:Object(O.jsxs)(x.a,{children:[Object(O.jsx)("h1",{children:"This is your Profile page!"}),Object(O.jsx)("div",{children:"Here's what this app knows about you based on your Google login:"}),Object(O.jsx)("pre",{children:JSON.stringify(e,null,"\t")}),Object(O.jsxs)("div",{children:['Your name is "',e.fullName,'" and your email is "',e.email,'."']}),Object(O.jsx)("div",{children:"Google also thinks you'll like this picture :)"}),Object(O.jsx)("br",{}),Object(O.jsx)(G,{src:A})]})})}function R(){var e=f();return Object(O.jsx)(S,{user:e,children:Object(O.jsxs)(x.a,{children:[Object(O.jsx)("h1",{children:"This page is private!"}),Object(O.jsx)("div",{children:"(meaning you have to login to view the page)"}),Object(O.jsx)("br",{})]})})}n(133);var B=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),r=Object(l.a)(a,2),s=r[0],o=r[1];return Object(c.useEffect)((function(){var e=null;return s?e=setInterval((function(){i((function(e){return e+1}))}),1e3):s||0===n||clearInterval(e),function(){return clearInterval(e)}}),[s,n]),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsxs)("div",{className:"time",children:[n,"s"]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("button",{className:"button button-primary button-primary-".concat(s?"active":"inactive"),onClick:function(){o(!s)},children:s?"Pause":"Start"}),Object(O.jsx)("button",{className:"button",onClick:function(){i(0),o(!1)},children:"Reset"})]})]})},H=n(408),L=n(412),E=n(413),U=n(417),F=n(415),J=n(409),W=n(416),z=n(410),M=n(405);L.a;function q(){return Object(O.jsxs)(E.a,{sx:{minWidth:275},children:[Object(O.jsxs)(F.a,{children:[Object(O.jsx)(W.a,{sx:{fontSize:18},color:"text.secondary",gutterBottom:!0,children:"Coding problems"}),Object(O.jsx)(W.a,{variant:"h5",component:"div"}),Object(O.jsx)(W.a,{children:Object(O.jsx)(z.a,{language:"c++",style:M.a,children:"vector<int> twoSum(vector<int>& nums, int target) {"})}),Object(O.jsx)(W.a,{variant:"body2",children:"Given an array of integers nums\xa0and an integer target, return indices of the two numbers such that they add up to target."})]}),Object(O.jsx)(U.a,{children:Object(O.jsx)(J.a,{size:"small",children:"Learn More"})})]})}function Y(){var e=f();return Object(O.jsx)(S,{user:e,children:Object(O.jsx)(x.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(B,{}),Object(O.jsx)(q,{}),Object(O.jsx)(H.a,{variant:"outlined",placeholder:"Start Writing",multiline:!0,rows:5,rowsMax:10,fullWidth:!0})]})})})}function _(){return Object(O.jsx)(S,{children:Object(O.jsx)(x.a,{children:Object(O.jsx)("h1",{children:"This page was not found :("})})})}function D(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],a=document.createElement("script");function r(e){var t=e.component,i=Object(o.a)(e,["component"]);return Object(O.jsx)(j.a,Object(s.a)(Object(s.a)({},i),{},{component:n?t:R}))}return a.src="https://apis.google.com/js/platform.js",a.onload=function(){return window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"361825927079-ug2rgcfc6152dpahls5uhq0nntiobr5f.apps.googleusercontent.com"}).then((function(){var e=window.gapi.auth2.getAuthInstance(),t=e.isSignedIn.get();i(t),e.isSignedIn.listen((function(e){i(e)}))}))})),void window.gapi.load("signin2",(function(){window.gapi.signin2.render("login-button",{theme:"dark"})}))},document.body.appendChild(a),null!==n?Object(O.jsx)(d.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:C}),Object(O.jsx)(r,{exact:!0,path:"/profile",component:P}),Object(O.jsx)(j.a,{exact:!0,path:"/practice",component:Y}),Object(O.jsx)(j.a,{path:"/",component:_})]})}):Object(O.jsx)(m,{})}n(358);r.a.render(Object(O.jsx)(D,{}),document.getElementById("root"))}},[[359,1,2]]]);
//# sourceMappingURL=main.2927c284.chunk.js.map