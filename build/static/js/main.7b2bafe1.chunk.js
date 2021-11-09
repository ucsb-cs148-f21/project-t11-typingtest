(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{165:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},181:function(e,t,n){},567:function(e,t,n){},569:function(e,t,n){"use strict";n.r(t);var a,i=n(0),c=n.n(i),r=n(17),s=n.n(r),o=(n(165),n(101)),l=n(146),j=n(14),d=n(16),u=n(55),h=n(51),b=n(135),O=n(52),x=n(43),g=n(29),p=n(2),v=O.a.div(a||(a=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n"])));function m(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x.a,{bg:"light",expand:"lg",children:Object(p.jsx)(g.a,{children:Object(p.jsx)(x.a.Brand,{href:"/",children:"ReactGoogleAuthStarter"})})}),Object(p.jsx)(v,{children:Object(p.jsx)(b.a,{animation:"border",role:"status"})})]})}function f(){if(void 0===window.gapi||void 0===window.gapi.auth2)return null;var e=window.gapi.auth2.getAuthInstance();if(!1===e.isSignedIn.get())return null;var t=e.currentUser.get().getBasicProfile();return{id:t.getId(),fullName:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName(),imageUrl:t.getImageUrl(),email:t.getEmail(),signOut:e.signOut}}var w=n(50),y=n(103);function S(e){var t=e.user;return Object(p.jsx)(x.a,{"data-testid":"NavBar",bg:"light",expand:"lg",children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(x.a.Brand,{href:"/",children:"TypingTest"}),Object(p.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(x.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsxs)(w.a,{className:"mr-auto",children:[Object(p.jsx)(w.a.Link,{href:"/",children:"Home"}),Object(p.jsx)(w.a.Link,{href:"/language",children:"Language"}),Object(p.jsx)(w.a.Link,{href:"/practice",children:"Practice"}),t&&Object(p.jsx)(w.a.Link,{href:"/profile",children:"Profile"})]}),Object(p.jsx)(w.a,{children:t?Object(p.jsx)(y.a,{title:Object(p.jsxs)("span",{children:["Hello, ",t.fullName," ",Object(p.jsx)("img",{src:t.imageUrl,alt:"profile",style:{width:"24px",height:"24px"}})," "]}),id:"basic-nav-dropdown",children:Object(p.jsx)(y.a.Item,{onClick:t.signOut,children:"Logout"})}):Object(p.jsx)("div",{id:"login-button"})})]})]})})}function k(e){var t=e.user;return Object(p.jsxs)("div",{children:[Object(p.jsx)(S,{user:t}),e.children]})}var N=n(612),T=n(613),C=n(7),I=(n(175),n.p+"static/media/video.17cf6613.mp4");var P,E=function(){var e;return Object(p.jsxs)("div",{className:"home-container",children:[Object(p.jsx)("video",(e={controls:!0,autostart:!0,autoPlay:!0,src:I,type:"video/mp4"},Object(C.a)(e,"autoPlay",!0),Object(C.a)(e,"loop",!0),Object(C.a)(e,"muted",!0),e)),Object(p.jsx)("h1",{children:"TYPING TEST FOR PROGRAMMERS"})]})},H=n(614);n(176),O.a.div(P||(P=Object(h.a)(["\n  width: 700px;\n  max-width: 100%;\n"])));function _(){var e=f();return Object(p.jsxs)(k,{user:e,children:[Object(p.jsx)(E,{}),Object(p.jsx)(N.a,{children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(H.a,{sx:{mb:1.5},variant:"h5",color:"#3699cf",children:"What is TypingTest?"}),Object(p.jsx)(H.a,{variant:"p",children:"It's a webapp that helps improve coding speed and gauge coding level. We will include a clock and accuracy in our API. The user can choose the language and difficulty of the coding problems and we want to expand it into a more code learning web by adding some questions so users can think about while they are coding to improve the coding skills."})]})}),Object(p.jsx)(u.b,{to:"/Language",children:Object(p.jsx)("button",{type:"button",className:"Navlink",children:"Start Typing"})})]})}var R,A=n.p+"static/media/doggo.60600ade.jpg",L=O.a.img(R||(R=Object(h.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"])));function W(){var e=f();return Object(p.jsx)(k,{user:e,children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)("h1",{children:"This is your Profile page!"}),Object(p.jsx)("div",{children:"Here's what this app knows about you based on your Google login:"}),Object(p.jsx)("pre",{children:JSON.stringify(e,null,"\t")}),Object(p.jsxs)("div",{children:['Your name is "',e.fullName,'" and your email is "',e.email,'."']}),Object(p.jsx)("div",{children:"Google also thinks you'll like this picture :)"}),Object(p.jsx)("br",{}),Object(p.jsx)(L,{src:A})]})})}function B(){var e=f();return Object(p.jsx)(k,{user:e,children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)("h1",{children:"This page is private!"}),Object(p.jsx)("div",{children:"(meaning you have to login to view the page)"}),Object(p.jsx)("br",{})]})})}n(181);var D=function(){var e=Object(i.useState)(0),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),r=Object(j.a)(c,2),s=r[0],o=r[1];return Object(i.useEffect)((function(){var e=null;return s?e=setInterval((function(){a((function(e){return e+1}))}),1e3):s||0===n||clearInterval(e),function(){return clearInterval(e)}}),[s,n]),Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)("div",{className:"time",children:[n,"s"]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("button",{className:"button button-primary button-primary-".concat(s?"active":"inactive"),onClick:function(){o(!s)},children:s?"Pause":"Start"}),Object(p.jsx)("button",{className:"button",onClick:function(){a(0),o(!1)},children:"Reset"})]})]})},G=n(615),U=n(610),V=n(607);function F(){return Object(p.jsx)(G.a,{sx:{minWidth:275},children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(H.a,{sx:{fontSize:18},color:"text.secondary",gutterBottom:!0,children:"Coding problems"}),Object(p.jsx)(H.a,{variant:"h5",component:"div"}),Object(p.jsx)(H.a,{children:Object(p.jsx)(U.a,{language:"c++",style:V.a,children:"vector<int> twoSum(vector<int>& nums, int target) {\n  int i,j;\n  for(i=0;i<nums.size()-1;i++)\n  {\n      for(j=i+1;j<nums.size();j++)\n      {\n          if(nums[i]+nums[j]==target)\n          {\n             return {i,j};\n          }\n      }\n  }\n  return {i,j};"})}),Object(p.jsx)(H.a,{variant:"body2",children:"Given an array of integers nums\xa0and an integer target, return indices of the two numbers such that they add up to target."})]})})}var z=n(56),J=n(57),K=n(58),M=n(87),Y=n(84),q=n(609),Q=function(e){Object(M.a)(n,e);var t=Object(Y.a)(n);function n(e){var a;return Object(z.a)(this,n),(a=t.call(this,e)).state={firstValue:"",secondValue:"",needWords:"",wordCount:"",limWords:null},a.firstHandle=a.firstHandle.bind(Object(K.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(K.a)(a)),a.secondHandle=a.secondHandle.bind(Object(K.a)(a)),a}return Object(J.a)(n,[{key:"firstHandle",value:function(e){this.setState({firstValue:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({needWords:this.state.firstValue})}},{key:"secondHandle",value:function(e){this.setState({secondValue:e.target.value,wordCount:""===e.target.value?0:this.state.secondValue.split(" ").length})}},{key:"render",value:function(){var e=this.state.wordCount;return Object(p.jsxs)("div",{children:[Object(p.jsx)(q.a,{data:this.state.wordCount,type:"text",value:this.state.value,onChange:this.secondHandle,variant:"outlined",color:"primary",multiline:!0,minRows:"10",placeholder:"Start typing",fullWidth:!0}),Object(p.jsxs)("p",{children:["You have written ",e," words"]})]})}}]),n}(c.a.Component),X=n(142),Z=n.n(X),$=(n(409),function(e){Object(M.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(z.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={persons:[]},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){var e=this;Z.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){console.log(t),e.setState({persons:t.data})}))}},{key:"render",value:function(){return this.state.persons.map((function(e){return Object(p.jsx)("li",{children:e.email})}))}}]),n}(c.a.Component));function ee(){var e=f();return Object(p.jsx)(k,{user:e,children:Object(p.jsx)(g.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(D,{}),Object(p.jsx)(F,{}),Object(p.jsx)($,{}),Object(p.jsx)(Q,{})]})})})}function te(){return Object(p.jsx)(k,{children:Object(p.jsx)(g.a,{children:Object(p.jsx)("h1",{children:"This page was not found :("})})})}var ne=n(617),ae=(n(567),[{id:1,name:"C++",version:11},{id:2,name:"Python",version:3},{id:3,name:"Java",version:17}].map((function(e){return Object(p.jsx)(u.b,{to:"/Practice",children:Object(p.jsxs)("button",{type:"button",className:"LangButton",children:[Object(p.jsx)(H.a,{sx:{fontSize:20},color:"#3699cf",gutterBottom:!0,children:e.name}),Object(p.jsxs)(H.a,{sx:{mb:1.5},color:"text.secondary",children:["version.",e.version]})]})})})));function ie(){return Object(p.jsx)(ne.a,{sx:{width:300,m:10,px:70},children:ae})}function ce(){var e=f();return Object(p.jsx)(k,{user:e,children:Object(p.jsx)(ie,{})})}var re=["component"];function se(){var e=Object(i.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1],c=document.createElement("script");function r(e){var t=e.component,a=Object(l.a)(e,re);return Object(p.jsx)(d.a,Object(o.a)(Object(o.a)({},a),{},{component:n?t:B}))}return c.src="https://apis.google.com/js/platform.js",c.onload=function(){return window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_CLIENT_ID}).then((function(){var e=window.gapi.auth2.getAuthInstance(),t=e.isSignedIn.get();a(t),e.isSignedIn.listen((function(e){a(e)}))}))})),void window.gapi.load("signin2",(function(){window.gapi.signin2.render("login-button",{theme:"dark"})}))},document.body.appendChild(c),null!==n?Object(p.jsx)(u.a,{children:Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/",component:_}),Object(p.jsx)(r,{exact:!0,path:"/profile",component:W}),Object(p.jsx)(d.a,{exact:!0,path:"/practice",component:ee}),Object(p.jsx)(d.a,{exact:!0,path:"/language",component:ce}),Object(p.jsx)(d.a,{path:"/",component:te})]})}):Object(p.jsx)(m,{})}n(568);s.a.render(Object(p.jsx)(se,{}),document.getElementById("root"))}},[[569,1,2]]]);
//# sourceMappingURL=main.7b2bafe1.chunk.js.map