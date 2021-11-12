(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{121:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},354:function(e,t,n){},360:function(e,t,n){"use strict";n.r(t);var a,c=n(0),s=n.n(c),r=n(30),i=n.n(r),o=(n(121),n(82)),l=n(105),d=n(14),j=n(16),u=n(104),h=n(45),b=n(97),g=n(46),O=n(39),p=n(27),x=n(2),m=g.a.div(a||(a=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n"])));function v(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O.a,{bg:"light",expand:"lg",children:Object(x.jsx)(p.a,{children:Object(x.jsx)(O.a.Brand,{href:"/",children:"ReactGoogleAuthStarter"})})}),Object(x.jsx)(m,{children:Object(x.jsx)(b.a,{animation:"border",role:"status"})})]})}function f(){if(void 0===window.gapi||void 0===window.gapi.auth2)return null;var e=window.gapi.auth2.getAuthInstance();if(!1===e.isSignedIn.get())return null;var t=e.currentUser.get().getBasicProfile();return{id:t.getId(),fullName:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName(),imageUrl:t.getImageUrl(),email:t.getEmail(),signOut:e.signOut}}var w=n(53),y=n(84);function N(e){var t=e.user;return Object(x.jsx)(O.a,{bg:"light",expand:"lg",children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)(O.a.Brand,{href:"/",children:"TypingTest"}),Object(x.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsxs)(O.a.Collapse,{id:"basic-navbar-nav",children:[Object(x.jsxs)(w.a,{className:"mr-auto",children:[Object(x.jsx)(w.a.Link,{href:"/",children:"Home"}),Object(x.jsx)(w.a.Link,{href:"/practice",children:"Practice"}),t&&Object(x.jsx)(w.a.Link,{href:"/profile",children:"Profile"})]}),Object(x.jsx)(w.a,{children:t?Object(x.jsx)(y.a,{title:Object(x.jsxs)("span",{children:["Hello, ",t.fullName," ",Object(x.jsx)("img",{src:t.imageUrl,alt:"profile",style:{width:"24px",height:"24px"}})," "]}),id:"basic-nav-dropdown",children:Object(x.jsx)(y.a.Item,{onClick:t.signOut,children:"Logout"})}):Object(x.jsx)("div",{id:"login-button"})})]})]})})}function S(e){var t=e.user;return Object(x.jsxs)("div",{children:[Object(x.jsx)(N,{user:t}),e.children]})}var k=n(404),T=n(406),W=n(7),C=(n(132),n.p+"static/media/video.17cf6613.mp4");var I=function(){var e;return Object(x.jsxs)("div",{className:"home-container",children:[Object(x.jsx)("video",(e={controls:!0,autostart:!0,autoPlay:!0,src:C,type:"video/mp4"},Object(W.a)(e,"autoPlay",!0),Object(W.a)(e,"loop",!0),Object(W.a)(e,"muted",!0),e)),Object(x.jsx)("h1",{children:"TYPING TEST FOR PROGRAMMERS"})]})},P=n(405);n(133);var V,G=function(e){var t=e.label;return Object(x.jsx)("div",{"data-testid":"button",className:"button-style",children:t})};g.a.div(V||(V=Object(h.a)(["\n  width: 700px;\n  max-width: 100%;\n"])));function H(){var e=f();return Object(x.jsxs)(S,{user:e,children:[Object(x.jsx)(I,{}),Object(x.jsx)(k.a,{children:Object(x.jsxs)(T.a,{children:[Object(x.jsx)(P.a,{sx:{mb:1.5},variant:"h5",color:"#3699cf",children:"What is TypingTest?"}),Object(x.jsx)(P.a,{variant:"p",children:"It's a webapp that helps improve coding speed and gauge coding level. We will include a clock and accuracy in our API. The user can choose the language and difficulty of the coding problems and we want to expand it into a more code learning web by adding some questions so users can think about while they are coding to improve the coding skills."})]})}),Object(x.jsx)(G,{label:"Get Started!"})]})}var M,E=n.p+"static/media/doggo.60600ade.jpg",L=g.a.img(M||(M=Object(h.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"])));function R(){var e=f();return Object(x.jsx)(S,{user:e,children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)("h1",{children:"This is your Profile page!"}),Object(x.jsx)("div",{children:"Here's what this app knows about you based on your Google login:"}),Object(x.jsx)("pre",{children:JSON.stringify(e,null,"\t")}),Object(x.jsxs)("div",{children:['Your name is "',e.fullName,'" and your email is "',e.email,'."']}),Object(x.jsx)("div",{children:"Google also thinks you'll like this picture :)"}),Object(x.jsx)("br",{}),Object(x.jsx)(L,{src:E})]})})}function A(){var e=f();return Object(x.jsx)(S,{user:e,children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)("h1",{children:"This page is private!"}),Object(x.jsx)("div",{children:"(meaning you have to login to view the page)"}),Object(x.jsx)("br",{})]})})}n(134);var B=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(d.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){var e=null;return i?e=setInterval((function(){a((function(e){return e+1}))}),1e3):i||0===n||clearInterval(e),function(){return clearInterval(e)}}),[i,n]),Object(x.jsxs)("div",{className:"app",children:[Object(x.jsxs)("div",{className:"time",children:[n,"s"]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("button",{className:"button button-primary button-primary-".concat(i?"active":"inactive"),onClick:function(){o(!i)},children:i?"Pause":"Start"}),Object(x.jsx)("button",{className:"button",onClick:function(){a(0),o(!1)},children:"Reset"})]})]})},D=n(407),F=n(402),J=n(399);function U(){return Object(x.jsx)(D.a,{sx:{minWidth:275},children:Object(x.jsxs)(T.a,{children:[Object(x.jsx)(P.a,{sx:{fontSize:18},color:"text.secondary",gutterBottom:!0,children:"Coding problems"}),Object(x.jsx)(P.a,{variant:"h5",component:"div"}),Object(x.jsx)(P.a,{children:Object(x.jsx)(F.a,{language:"c++",style:J.a,children:"vector<int> twoSum(vector<int>& nums, int target) {\n  int i,j;\n  for(i=0;i<nums.size()-1;i++)\n  {\n      for(j=i+1;j<nums.size();j++)\n      {\n          if(nums[i]+nums[j]==target)\n          {\n             return {i,j};\n          }\n      }\n  }\n  return {i,j};"})}),Object(x.jsx)(P.a,{variant:"body2",children:"Given an array of integers nums\xa0and an integer target, return indices of the two numbers such that they add up to target."})]})})}var Y=n(49),z=n(50),q=n(51),_=n(73),K=n(71),Q=n(401),X=function(e){Object(_.a)(n,e);var t=Object(K.a)(n);function n(e){var a;return Object(Y.a)(this,n),(a=t.call(this,e)).state={firstValue:"",secondValue:"",needWords:"",wordCount:"",limWords:null},a.firstHandle=a.firstHandle.bind(Object(q.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(q.a)(a)),a.secondHandle=a.secondHandle.bind(Object(q.a)(a)),a}return Object(z.a)(n,[{key:"firstHandle",value:function(e){this.setState({firstValue:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({needWords:this.state.firstValue})}},{key:"secondHandle",value:function(e){this.setState({secondValue:e.target.value,wordCount:""===e.target.value?0:this.state.secondValue.split(" ").length})}},{key:"render",value:function(){var e=this.state.wordCount;return Object(x.jsxs)("div",{children:[Object(x.jsx)(Q.a,{type:"text",value:this.state.value,onChange:this.secondHandle,variant:"outlined",color:"primary",multiline:!0,minRows:"10",placeholder:"Start typing",fullWidth:!0}),Object(x.jsxs)("p",{children:["You have written ",e," words"]})]})}}]),n}(s.a.Component),Z=n(19),$=(n(354),function(e){Object(_.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(Y.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={text:"",inputValue:"",lastLetter:"",words:[],completedWords:[],completed:!1,startTime:void 0,timeElapsed:0,wpm:0,started:!1,progress:0},e.setText=function(){var t=e.state.text.split(" ");e.setState({words:t,completedWords:[]})},e.startGame=function(){e.setText(),e.setState({started:!0,startTime:Date.now(),completed:!1,progress:0})},e.handleChange=function(t){var n=e.state,a=n.words,c=n.completedWords,s=t.target.value,r=s[s.length-1],i=a[0];if(console.log(i,"currentWord")," "===r||"."===r){if(s.trim()===i){var o=Object(Z.a)(a.slice(1));console.log(o,"newWords"),console.log(o.length,"newWords.length");var l=[].concat(Object(Z.a)(c),[i]);console.log(l,"newCompletedWords"),console.log("----------------");var d=l.length/(o.length+l.length)*100;e.setState({words:o,completedWords:l,inputValue:"",completed:0===o.length,progress:d})}}else e.setState({inputValue:s,lastLetter:r}),console.log(e.state.inputValue,"this.state.inputValue"),console.log(e.state.lastLetter,"this.state.lastLetter"),console.log("================================");e.calculateWPM()},e.calculateWPM=function(){var t=e.state,n=t.startTime,a=t.completedWords,c=Date.now(),s=(c-n)/1e3/60;console.log(c,"now"),console.log(n,"startTime"),console.log(s,"diff"),console.log("**************");var r=Math.ceil(a.reduce((function(e,t){return e+t.length}),0)/5);console.log(a,"completedWords"),console.log(r,"wordsTyped"),console.log("+=+=+=+=+=+=");var i=Math.ceil(r/s);e.setState({wpm:i,timeElapsed:s})},e}return Object(z.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://127.0.0.1:5000/codesnippetID/1").then((function(e){return e.json()})).then((function(t){console.log(t),console.log(e.state.text),e.setState({text:JSON.stringify(t.code)})}))}},{key:"render",value:function(){var e=this.state,t=e.text,n=e.inputValue,a=e.completedWords,c=e.wpm,s=e.timeElapsed,r=e.started,i=e.completed,o=e.progress;return r?t?i?Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("h2",{children:["Your WPM is ",Object(x.jsx)("strong",{children:c})]}),Object(x.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Play again"})]}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"wpm",children:[Object(x.jsx)("strong",{children:"WPM: "}),c,Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"Time: "}),Math.floor(60*s),"s"]}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h4",{children:"Type the text below"}),Object(x.jsx)("progress",{value:o,max:"100"}),Object(x.jsx)("p",{className:"text",children:t.split(" ").map((function(e,t){var c=!1,s=!1;return a.length>t&&(c=!0),a.length===t&&(s=!0),Object(x.jsx)("span",{className:"word \n                                ".concat(c&&"green"," \n                                ").concat(s&&"underline"),children:e.split("").map((function(e,c){var s=t===a.length,r=e!==n[c],i=c<n.length;return Object(x.jsx)("span",{className:"letter ".concat(s&&i?r?"red":"green":""),children:e},c)}))},t)}))}),Object(x.jsx)("input",{type:"text",onChange:this.handleChange,value:n,autoFocus:!0})]})]}):Object(x.jsx)("p",{children:"Loading..."}):Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{children:"Welcome to the Typing game"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Rules:"})," ",Object(x.jsx)("br",{}),"Type in the input field the highlighted word. ",Object(x.jsx)("br",{}),"The correct words will turn ",Object(x.jsx)("span",{className:"green",children:"green"}),".",Object(x.jsx)("br",{}),"Incorrect letters will turn ",Object(x.jsx)("span",{className:"red",children:"red"}),".",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Have fun!"]}),Object(x.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Start game"})]})}}]),n}(c.Component)),ee=$;function te(){var e=f();return Object(x.jsx)(S,{user:e,children:Object(x.jsx)(p.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(B,{}),Object(x.jsx)(U,{}),Object(x.jsx)(X,{}),Object(x.jsx)(ee,{})]})})})}function ne(){return Object(x.jsx)(S,{children:Object(x.jsx)(p.a,{children:Object(x.jsx)("h1",{children:"This page was not found :("})})})}var ae=["component"];function ce(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],s=document.createElement("script");function r(e){var t=e.component,a=Object(l.a)(e,ae);return Object(x.jsx)(j.a,Object(o.a)(Object(o.a)({},a),{},{component:n?t:A}))}return s.src="https://apis.google.com/js/platform.js",s.onload=function(){return window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"361825927079-ug2rgcfc6152dpahls5uhq0nntiobr5f.apps.googleusercontent.com"}).then((function(){var e=window.gapi.auth2.getAuthInstance(),t=e.isSignedIn.get();a(t),e.isSignedIn.listen((function(e){a(e)}))}))})),void window.gapi.load("signin2",(function(){window.gapi.signin2.render("login-button",{theme:"dark"})}))},document.body.appendChild(s),null!==n?Object(x.jsx)(u.a,{children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/",component:H}),Object(x.jsx)(r,{exact:!0,path:"/profile",component:R}),Object(x.jsx)(j.a,{exact:!0,path:"/practice",component:te}),Object(x.jsx)(j.a,{path:"/",component:ne})]})}):Object(x.jsx)(v,{})}n(359);i.a.render(Object(x.jsx)(ce,{}),document.getElementById("root"))}},[[360,1,2]]]);
//# sourceMappingURL=main.7f286130.chunk.js.map