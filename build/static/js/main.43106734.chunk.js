(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{110:function(e,t,n){},166:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},182:function(e,t,n){},568:function(e,t,n){},570:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),s=n(17),i=n.n(s),o=(n(166),n(101)),l=n(147),d=n(14),j=n(16),u=n(59),h=n(55),b=n(136),p=n(56),m=n(47),g=n(29),O=n(2),x=p.a.div(a||(a=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n"])));function f(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m.a,{bg:"light",expand:"lg",children:Object(O.jsx)(g.a,{children:Object(O.jsx)(m.a.Brand,{href:"/",children:"ReactGoogleAuthStarter"})})}),Object(O.jsx)(x,{children:Object(O.jsx)(b.a,{animation:"border",role:"status"})})]})}function v(){if(void 0===window.gapi||void 0===window.gapi.auth2)return null;var e=window.gapi.auth2.getAuthInstance();if(!1===e.isSignedIn.get())return null;var t=e.currentUser.get().getBasicProfile();return{id:t.getId(),fullName:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName(),imageUrl:t.getImageUrl(),email:t.getEmail(),signOut:e.signOut}}var w=n(54),y=n(103);function N(e){var t=e.user;return Object(O.jsx)(m.a,{"data-testid":"NavBar",bg:"light",expand:"lg",children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(m.a.Brand,{href:"/",children:"TypingTest"}),Object(O.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsxs)(m.a.Collapse,{id:"basic-navbar-nav",children:[Object(O.jsxs)(w.a,{className:"mr-auto",children:[Object(O.jsx)(w.a.Link,{href:"/",children:"Home"}),Object(O.jsx)(w.a.Link,{href:"/language",children:"Language"}),Object(O.jsx)(w.a.Link,{href:"/practice",children:"Practice"}),t&&Object(O.jsx)(w.a.Link,{href:"/profile",children:"Profile"})]}),Object(O.jsx)(w.a,{children:t?Object(O.jsx)(y.a,{title:Object(O.jsxs)("span",{children:["Hello, ",t.fullName," ",Object(O.jsx)("img",{src:t.imageUrl,alt:"profile",style:{width:"24px",height:"24px"}})," "]}),id:"basic-nav-dropdown",children:Object(O.jsx)(y.a.Item,{onClick:t.signOut,children:"Logout"})}):Object(O.jsx)("div",{id:"login-button"})})]})]})})}function S(e){var t=e.user;return Object(O.jsxs)("div",{children:[Object(O.jsx)(N,{user:t}),e.children]})}var k=n(613),T=n(614),P=n(7),W=(n(176),n.p+"static/media/video.17cf6613.mp4");var C,I=function(){var e;return Object(O.jsxs)("div",{className:"home-container",children:[Object(O.jsx)("video",(e={controls:!0,autostart:!0,autoPlay:!0,src:W,type:"video/mp4"},Object(P.a)(e,"autoPlay",!0),Object(P.a)(e,"loop",!0),Object(P.a)(e,"muted",!0),e)),Object(O.jsx)("h1",{children:"TYPING TEST FOR PROGRAMMERS"})]})},L=n(615);n(177),p.a.div(C||(C=Object(h.a)(["\n  width: 700px;\n  max-width: 100%;\n"])));function M(){var e=v();return Object(O.jsxs)(S,{user:e,children:[Object(O.jsx)(I,{}),Object(O.jsx)(k.a,{children:Object(O.jsxs)(T.a,{children:[Object(O.jsxs)(L.a,{sx:{mb:1.5},variant:"h5",color:"#3699cf",children:["What is TypingTest? ",e.id]}),Object(O.jsx)(L.a,{variant:"p",children:"It's a webapp that helps improve coding speed and gauge coding level. We will include a clock and accuracy in our API. The user can choose the language and difficulty of the coding problems and we want to expand it into a more code learning web by adding some questions so users can think about while they are coding to improve the coding skills."})]})}),Object(O.jsx)(u.b,{to:"/Language",children:Object(O.jsx)("button",{type:"button",className:"Navlink",children:"Start Typing"})})]})}n.p;var D,V=n(34),H=n(35),E=n(45),J=n(44),A=(n(110),function(e){Object(E.a)(n,e);var t=Object(J.a)(n);function n(){var e;Object(V.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:e.props.user},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href;t+="/",t+=this.state.user.id,console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({easyProblems:JSON.stringify(t.Easy),mediumProblems:JSON.stringify(t.Medium),hardProblems:JSON.stringify(t.Hard),listOfProblems:JSON.stringify(t.problemsSolved)})}))}},{key:"render",value:function(){var e=this.state,t=e.easyProblems,n=e.mediumProblems,a=e.hardProblems,c=e.listOfProblems;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{children:["Welcome back ",this.state.user.fullName,"!"]}),Object(O.jsxs)("div",{children:["Number of easy problems completed: ",t]}),"Number of medium problems completed: ",n,Object(O.jsxs)("div",{children:["Number of hard problems completed: ",a]}),"List of problems completed: ",c,Object(O.jsx)("br",{})]})}}]),n}(c.Component)),B=A;p.a.img(D||(D=Object(h.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"])));function G(){var e=v();return Object(O.jsx)(S,{user:e,children:Object(O.jsx)(g.a,{children:Object(O.jsx)(B,{user:e})})})}function R(){var e=v();return Object(O.jsx)(S,{user:e,children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)("h1",{children:"This page is private!"}),Object(O.jsx)("div",{children:"(meaning you have to login to view the page)"}),Object(O.jsx)("br",{})]})})}n(182);var F=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(d.a)(r,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){var e=null;return i?e=setInterval((function(){a((function(e){return e+1}))}),1e3):i||0===n||clearInterval(e),function(){return clearInterval(e)}}),[i,n]),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsxs)("div",{className:"time",children:[n,"s"]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("button",{className:"button button-primary button-primary-".concat(i?"active":"inactive"),onClick:function(){o(!i)},children:i?"Pause":"Start"}),Object(O.jsx)("button",{className:"button",onClick:function(){a(0),o(!1)},children:"Reset"})]})]})},z=n(616),U=n(611),Y=n(608);function q(){return Object(O.jsx)(z.a,{sx:{minWidth:275},children:Object(O.jsxs)(T.a,{children:[Object(O.jsx)(L.a,{sx:{fontSize:18},color:"text.secondary",gutterBottom:!0,children:"Coding problems"}),Object(O.jsx)(L.a,{variant:"h5",component:"div"}),Object(O.jsx)(L.a,{children:Object(O.jsx)(U.a,{language:"c++",style:Y.a,children:"vector<int> twoSum(vector<int>& nums, int target) {\n  int i,j;\n  for(i=0;i<nums.size()-1;i++)\n  {\n      for(j=i+1;j<nums.size();j++)\n      {\n          if(nums[i]+nums[j]==target)\n          {\n             return {i,j};\n          }\n      }\n  }\n  return {i,j};"})}),Object(O.jsx)(L.a,{variant:"body2",children:"Given an array of integers nums\xa0and an integer target, return indices of the two numbers such that they add up to target."})]})})}var _=n(60),K=n(610),Q=function(e){Object(E.a)(n,e);var t=Object(J.a)(n);function n(e){var a;return Object(V.a)(this,n),(a=t.call(this,e)).state={firstValue:"",secondValue:"",needWords:"",wordCount:"",limWords:null},a.firstHandle=a.firstHandle.bind(Object(_.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(_.a)(a)),a.secondHandle=a.secondHandle.bind(Object(_.a)(a)),a}return Object(H.a)(n,[{key:"firstHandle",value:function(e){this.setState({firstValue:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({needWords:this.state.firstValue})}},{key:"secondHandle",value:function(e){this.setState({secondValue:e.target.value,wordCount:""===e.target.value?0:this.state.secondValue.split(" ").length})}},{key:"render",value:function(){var e=this.state.wordCount;return Object(O.jsxs)("div",{children:[Object(O.jsx)(K.a,{data:this.state.wordCount,type:"text",value:this.state.value,onChange:this.secondHandle,variant:"outlined",color:"primary",multiline:!0,minRows:"10",placeholder:"Start typing",fullWidth:!0}),Object(O.jsxs)("p",{children:["You have written ",e," words"]})]})}}]),n}(r.a.Component),X=n(143),Z=n.n(X),$=(n(410),function(e){Object(E.a)(n,e);var t=Object(J.a)(n);function n(){var e;Object(V.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={persons:[]},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this;Z.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){console.log(t),e.setState({persons:t.data})}))}},{key:"render",value:function(){return this.state.persons.map((function(e){return Object(O.jsx)("li",{children:e.email})}))}}]),n}(r.a.Component)),ee=n(20),te=function(e){Object(E.a)(n,e);var t=Object(J.a)(n);function n(){var e;Object(V.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={text:"",user:e.props.user,textID:e.props.codesnippetID,inputValue:"",lastLetter:"",words:[],completedWords:[],completed:!1,startTime:void 0,timeElapsed:0,wpm:0,started:!1,progress:0},e.setText=function(){var t=e.state.text.split(" ");e.setState({words:t,completedWords:[]})},e.startGame=function(){e.setText(),e.setState({started:!0,startTime:Date.now(),completed:!1,progress:0})},e.handleChange=function(t){var n=e.state,a=n.words,c=n.completedWords,r=t.target.value,s=r[r.length-1],i=a[0];if(console.log(i,"currentWord")," "===s||"."===s){if(r.trim()===i){var o=Object(ee.a)(a.slice(1));console.log(o,"newWords"),console.log(o.length,"newWords.length");var l=[].concat(Object(ee.a)(c),[i]);console.log(l,"newCompletedWords"),console.log("----------------");var d=l.length/(o.length+l.length)*100;e.setState({words:o,completedWords:l,inputValue:"",completed:0===o.length,progress:d})}}else e.setState({inputValue:r,lastLetter:s}),console.log(e.state.inputValue,"this.state.inputValue"),console.log(e.state.lastLetter,"this.state.lastLetter"),console.log("================================");e.calculateWPM()},e.calculateWPM=function(){var t=e.state,n=t.startTime,a=t.completedWords,c=Date.now(),r=(c-n)/1e3/60;console.log(c,"now"),console.log(n,"startTime"),console.log(r,"diff"),console.log("**************");var s=Math.ceil(a.reduce((function(e,t){return e+t.length}),0)/5);console.log(a,"completedWords"),console.log(s,"wordsTyped"),console.log("+=+=+=+=+=+=");var i=Math.ceil(s/r);e.setState({wpm:i,timeElapsed:r})},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href;t=t.replace("practice","codesnippetID/"),t+=this.state.textID,console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),console.log(e.state.text),e.setState({text:JSON.stringify(t.code)})}));var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.state.user.id,problemID:this.state.text})};fetch(t,n).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this.state,t=e.text,n=e.inputValue,a=e.completedWords,c=e.wpm,r=e.timeElapsed,s=e.started,i=e.completed,o=e.progress;return s?t?i?Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("h2",{children:["Your WPM is ",Object(O.jsx)("strong",{children:c})]}),Object(O.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Play again"})]}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"wpm",children:[Object(O.jsx)("strong",{children:"WPM: "}),c,Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Time: "}),Math.floor(60*r),"s"]}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h4",{children:"Type the text below"}),Object(O.jsx)("progress",{value:o,max:"100"}),Object(O.jsx)("p",{className:"text",children:t.split(" ").map((function(e,t){var c=!1,r=!1;return a.length>t&&(c=!0),a.length===t&&(r=!0),Object(O.jsx)("span",{className:"word \n                                ".concat(c&&"green"," \n                                ").concat(r&&"underline"),children:e.split("").map((function(e,c){var r=t===a.length,s=e!==n[c],i=c<n.length;return Object(O.jsx)("span",{className:"letter ".concat(r&&i?s?"red":"green":""),children:e},c)}))},t)}))}),Object(O.jsx)("input",{type:"text",onChange:this.handleChange,value:n,autoFocus:!0})]})]}):Object(O.jsx)("p",{children:"Loading..."}):Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{children:"Welcome to the Typing game"}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Rules:"})," ",Object(O.jsx)("br",{}),"Type in the input field the highlighted word. ",Object(O.jsx)("br",{}),"The correct words will turn ",Object(O.jsx)("span",{className:"green",children:"green"}),".",Object(O.jsx)("br",{}),"Incorrect letters will turn ",Object(O.jsx)("span",{className:"red",children:"red"}),".",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Have fun!"]}),Object(O.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Start game"})]})}}]),n}(c.Component),ne=te;function ae(){var e=v();return Object(O.jsx)(S,{user:e,children:Object(O.jsx)(g.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(F,{}),Object(O.jsx)(q,{}),Object(O.jsx)($,{}),Object(O.jsx)(Q,{}),Object(O.jsx)(ne,{codesnippetID:"-4862049077753703823",user:e})]})})})}function ce(){return Object(O.jsx)(S,{children:Object(O.jsx)(g.a,{children:Object(O.jsx)("h1",{children:"This page was not found :("})})})}var re=n(618),se=(n(568),[{id:1,name:"C++",version:11},{id:2,name:"Python",version:3},{id:3,name:"Java",version:17}].map((function(e){return Object(O.jsx)(u.b,{to:"/Practice",children:Object(O.jsxs)("button",{type:"button",className:"LangButton",children:[Object(O.jsx)(L.a,{sx:{fontSize:20},color:"#3699cf",gutterBottom:!0,children:e.name}),Object(O.jsxs)(L.a,{sx:{mb:1.5},color:"text.secondary",children:["version.",e.version]})]})})})));function ie(){return Object(O.jsx)(re.a,{sx:{width:300,m:10,px:70},children:se})}function oe(){var e=v();return Object(O.jsx)(S,{user:e,children:Object(O.jsx)(ie,{})})}var le=["component"];function de(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],r=document.createElement("script");function s(e){var t=e.component,a=Object(l.a)(e,le);return Object(O.jsx)(j.a,Object(o.a)(Object(o.a)({},a),{},{component:n?t:R}))}return r.src="https://apis.google.com/js/platform.js",r.onload=function(){return window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"361825927079-ug2rgcfc6152dpahls5uhq0nntiobr5f.apps.googleusercontent.com"}).then((function(){var e=window.gapi.auth2.getAuthInstance(),t=e.isSignedIn.get();a(t),e.isSignedIn.listen((function(e){a(e)}))}))})),void window.gapi.load("signin2",(function(){window.gapi.signin2.render("login-button",{theme:"dark"})}))},document.body.appendChild(r),null!==n?Object(O.jsx)(u.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:M}),Object(O.jsx)(s,{exact:!0,path:"/profile",component:G}),Object(O.jsx)(j.a,{exact:!0,path:"/practice",component:ae}),Object(O.jsx)(j.a,{exact:!0,path:"/language",component:oe}),Object(O.jsx)(j.a,{path:"/",component:ce})]})}):Object(O.jsx)(f,{})}n(569);i.a.render(Object(O.jsx)(de,{}),document.getElementById("root"))}},[[570,1,2]]]);
//# sourceMappingURL=main.43106734.chunk.js.map