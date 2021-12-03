(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{111:function(e,t,n){},167:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},183:function(e,t,n){},570:function(e,t,n){},572:function(e,t,n){"use strict";n.r(t);var r,a=n(0),s=n.n(a),c=n(17),i=n.n(c),o=(n(167),n(102)),l=n(148),d=n(14),j=n(16),u=n(59),h=n(36),b=n(137),p=n(56),g=n(48),x=n(29),m=n(2),O=p.a.div(r||(r=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n"])));function f(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g.a,{bg:"light",expand:"lg",children:Object(m.jsx)(x.a,{children:Object(m.jsx)(g.a.Brand,{href:"/",children:"ReactGoogleAuthStarter"})})}),Object(m.jsx)(O,{children:Object(m.jsx)(b.a,{animation:"border",role:"status"})})]})}function v(){if(void 0===window.gapi||void 0===window.gapi.auth2)return null;var e=window.gapi.auth2.getAuthInstance();if(!1===e.isSignedIn.get())return null;var t=e.currentUser.get().getBasicProfile();return{id:t.getId(),fullName:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName(),imageUrl:t.getImageUrl(),email:t.getEmail(),signOut:e.signOut}}var y=n(55),w=n(104);function k(e){var t=e.user;return Object(m.jsx)(g.a,{"data-testid":"NavBar",bg:"light",expand:"lg",children:Object(m.jsxs)(x.a,{children:[Object(m.jsx)(g.a.Brand,{href:"/",children:"TypingTest"}),Object(m.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsxs)(g.a.Collapse,{id:"basic-navbar-nav",children:[Object(m.jsxs)(y.a,{className:"mr-auto",children:[Object(m.jsx)(y.a.Link,{href:"/",children:"Home"}),Object(m.jsx)(y.a.Link,{href:"/language",children:"Language"}),Object(m.jsx)(y.a.Link,{href:"/practice",children:"Practice"}),t&&Object(m.jsx)(y.a.Link,{href:"/profile",children:"Profile"})]}),Object(m.jsx)(y.a,{children:t?Object(m.jsx)(w.a,{title:Object(m.jsxs)("span",{children:["Hello, ",t.fullName," ",Object(m.jsx)("img",{src:t.imageUrl,alt:"profile",style:{width:"24px",height:"24px"}})," "]}),id:"basic-nav-dropdown",children:Object(m.jsx)(w.a.Item,{onClick:t.signOut,children:"Logout"})}):Object(m.jsx)("div",{id:"login-button"})})]})]})})}function S(e){var t=e.user;return Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{user:t}),e.children]})}var N=n(615),C=n(616),W=n(7),P=(n(177),n.p+"static/media/video.17cf6613.mp4");var F,T=function(){var e;return Object(m.jsxs)("div",{className:"home-container",children:[Object(m.jsx)("video",(e={controls:!0,autostart:!0,autoPlay:!0,src:P,type:"video/mp4"},Object(W.a)(e,"autoPlay",!0),Object(W.a)(e,"loop",!0),Object(W.a)(e,"muted",!0),e)),Object(m.jsx)("h1",{children:"TYPING TEST FOR PROGRAMMERS"})]})},I=n(617);n(178),p.a.div(F||(F=Object(h.a)(["\n  width: 700px;\n  max-width: 100%;\n"])));function D(){var e=v();return Object(m.jsxs)(S,{user:e,children:[Object(m.jsx)(T,{}),Object(m.jsx)(N.a,{children:Object(m.jsxs)(C.a,{children:[Object(m.jsx)(I.a,{sx:{mb:1.5},variant:"h5",color:"#3699cf",children:"What is TypingTest?"}),Object(m.jsx)(I.a,{variant:"p",children:"It's a webapp that helps improve coding speed and gauge coding level. We will include a clock and accuracy in our API. The user can choose the language and difficulty of the coding problems and we want to expand it into a more code learning web by adding some questions so users can think about while they are coding to improve the coding skills."})]})}),Object(m.jsx)(u.b,{to:"/Language",children:Object(m.jsx)("button",{type:"button",className:"Navlink",children:"Start Typing"})})]})}n.p;var L,B,M,E=n(34),A=n(35),H=n(46),V=n(45),G=(n(111),n(62)),J=G.a.div(L||(L=Object(h.a)(["\n  display: inline-block;\n  border-radius: 100%;\n  position: relative;"]))),R=G.a.div(B||(B=Object(h.a)(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center,"]))),z=G.a.circle(M||(M=Object(h.a)(["\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;"]))),_=function(e){var t=e.percentage,n=e.text,r=e.width,a=e.strokeWidth,s=e.fontSize,c=e.fontColor,i=e.fontFamily,o=e.primaryColor,l=e.secondaryColor,d=e.fill,j=e.hidePercentageText,u=e.strokeLinecap,h=r/2-2*a,b=6.28*h,p=b-t/100*b,g="".concat(o[0]).concat(o[1]).replace(/#/g,"");return Object(m.jsxs)(J,{className:"react-super-progressbar__base",style:{height:"".concat(r,"px"),width:"".concat(r,"px")},children:[j?null:Object(m.jsx)(R,{className:"react-super-progressbar__percentage-container",children:Object(m.jsxs)("span",{className:"react-super-progressbars__percentage",style:{fontSize:s,fontFamily:i,color:c},children:[t,"%",Object(m.jsx)("br",{}),n]})}),Object(m.jsxs)("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(m.jsxs)("linearGradient",{id:g,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[Object(m.jsx)("stop",{offset:"0%",stopColor:o[0]}),Object(m.jsx)("stop",{offset:"100%",stopColor:o[1]})]}),Object(m.jsx)("circle",{strokeWidth:a,fill:"transparent",r:h,cx:r/2,cy:r/2,stroke:l,strokeDasharray:"".concat(b," ").concat(b)}),Object(m.jsx)(z,{strokeWidth:a,fill:d,r:h,cx:r/2,cy:r/2,stroke:"url(#".concat(g,")"),strokeLinecap:u,strokeDasharray:"".concat(b," ").concat(b),strokeDashoffset:p})]})]})};_.defaultProps={width:200,strokeWidth:5,strokeLinecap:"round",fontSize:"inherit",fontColor:"inherit",fontFamily:"inherit",primaryColor:["#00BBFF","#92D7F1"],secondaryColor:"transparent",fill:"transparent"};var U,Y=_,q=function(e){Object(H.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={user:e.props.user,easyProblems:0,mediumProblems:0,hardProblems:0,listOfProblems:[]},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href;t+="/",t+=this.state.user.id.toString().substr(0,17),console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({easyProblems:JSON.stringify(t[0].Easy),mediumProblems:JSON.stringify(t[0].Medium),hardProblems:JSON.stringify(t[0].Hard),listOfProblems:JSON.stringify(t[0].problemsSolved)})}))}},{key:"render",value:function(){var e=this.state.easyProblems,t=this.state.mediumProblems,n=this.state.hardProblems;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h1",{children:["Welcome back ",this.state.user.fullName,"!"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(Y,{percentage:(100*e/15).toFixed(1),strokeWidth:7,text:"Easy",primaryColor:["#AAFFB9","#AAFFB9"],secondaryColor:"#F0F0F0"}),Object(m.jsx)(Y,{percentage:(100*t/9).toFixed(1),text:"Medium",strokeWidth:7,secondaryColor:"#F0F0F0"}),Object(m.jsx)(Y,{percentage:(100*n/6).toFixed(1),text:"Hard",strokeWidth:7,primaryColor:["#EB1547","#EB1547"],secondaryColor:"#F0F0F0"})]}),Object(m.jsx)("br",{})]})}}]),n}(a.Component),K=q;p.a.img(U||(U=Object(h.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"])));function Q(){var e=v();return Object(m.jsx)(S,{user:e,children:Object(m.jsx)(x.a,{children:Object(m.jsx)(K,{user:e})})})}function X(){var e=v();return Object(m.jsx)(S,{user:e,children:Object(m.jsxs)(x.a,{children:[Object(m.jsx)("h1",{children:"This page is private!"}),Object(m.jsx)("div",{children:"(meaning you have to login to view the page)"}),Object(m.jsx)("br",{})]})})}n(183);var Z=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),c=Object(d.a)(s,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){var e=null;return i?e=setInterval((function(){r((function(e){return e+1}))}),1e3):i||0===n||clearInterval(e),function(){return clearInterval(e)}}),[i,n]),Object(m.jsxs)("div",{className:"app",children:[Object(m.jsxs)("div",{className:"time",children:[n,"s"]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("button",{className:"button button-primary button-primary-".concat(i?"active":"inactive"),onClick:function(){o(!i)},children:i?"Pause":"Start"}),Object(m.jsx)("button",{className:"button",onClick:function(){r(0),o(!1)},children:"Reset"})]})]})},$=n(618),ee=n(613),te=n(611);function ne(){return Object(m.jsx)($.a,{sx:{minWidth:275},children:Object(m.jsxs)(C.a,{children:[Object(m.jsx)(I.a,{sx:{fontSize:18},color:"text.secondary",gutterBottom:!0,children:"Coding problems"}),Object(m.jsx)(I.a,{variant:"h5",component:"div"}),Object(m.jsx)(I.a,{children:Object(m.jsx)(ee.a,{language:"c++",style:te.a,children:"vector<int> twoSum(vector<int>& nums, int target) {\n  int i,j;\n  for(i=0;i<nums.size()-1;i++)\n  {\n      for(j=i+1;j<nums.size();j++)\n      {\n          if(nums[i]+nums[j]==target)\n          {\n             return {i,j};\n          }\n      }\n  }\n  return {i,j};"})}),Object(m.jsx)(I.a,{variant:"body2",children:"Given an array of integers nums\xa0and an integer target, return indices of the two numbers such that they add up to target."})]})})}var re=n(60),ae=n(612),se=function(e){Object(H.a)(n,e);var t=Object(V.a)(n);function n(e){var r;return Object(E.a)(this,n),(r=t.call(this,e)).state={firstValue:"",secondValue:"",needWords:"",wordCount:"",limWords:null},r.firstHandle=r.firstHandle.bind(Object(re.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(re.a)(r)),r.secondHandle=r.secondHandle.bind(Object(re.a)(r)),r}return Object(A.a)(n,[{key:"firstHandle",value:function(e){this.setState({firstValue:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({needWords:this.state.firstValue})}},{key:"secondHandle",value:function(e){this.setState({secondValue:e.target.value,wordCount:""===e.target.value?0:this.state.secondValue.split(" ").length})}},{key:"render",value:function(){var e=this.state.wordCount;return Object(m.jsxs)("div",{children:[Object(m.jsx)(ae.a,{data:this.state.wordCount,type:"text",value:this.state.value,onChange:this.secondHandle,variant:"outlined",color:"primary",multiline:!0,minRows:"10",placeholder:"Start typing",fullWidth:!0}),Object(m.jsxs)("p",{children:["You have written ",e," words"]})]})}}]),n}(s.a.Component),ce=n(144),ie=n.n(ce),oe=(n(412),function(e){Object(H.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={persons:[]},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this;ie.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){console.log(t),e.setState({persons:t.data})}))}},{key:"render",value:function(){return this.state.persons.map((function(e){return Object(m.jsx)("li",{children:e.email})}))}}]),n}(s.a.Component)),le=n(21),de=function(e){Object(H.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={text:"",user:e.props.user,textID:e.props.codesnippetID,inputValue:"",lastLetter:"",words:[],completedWords:[],completed:!1,startTime:void 0,timeElapsed:0,wpm:0,started:!1,progress:0},e.setText=function(){var t=e.state.text.split(" ");e.setState({words:t,completedWords:[]})},e.startGame=function(){e.setText(),e.setState({started:!0,startTime:Date.now(),completed:!1,progress:0})},e.handleChange=function(t){var n=e.state,r=n.words,a=n.completedWords,s=t.target.value,c=s[s.length-1],i=r[0];if(console.log(i,"currentWord")," "===c||"."===c){if(s.trim()===i){var o=Object(le.a)(r.slice(1));console.log(o,"newWords"),console.log(o.length,"newWords.length");var l=[].concat(Object(le.a)(a),[i]);console.log(l,"newCompletedWords"),console.log("----------------");var d=l.length/(o.length+l.length)*100;e.setState({words:o,completedWords:l,inputValue:"",completed:0===o.length,progress:d})}}else e.setState({inputValue:s,lastLetter:c}),console.log(e.state.inputValue,"this.state.inputValue"),console.log(e.state.lastLetter,"this.state.lastLetter"),console.log("================================");e.calculateWPM()},e.calculateWPM=function(){var t=e.state,n=t.startTime,r=t.completedWords,a=Date.now(),s=(a-n)/1e3/60;console.log(a,"now"),console.log(n,"startTime"),console.log(s,"diff"),console.log("**************");var c=Math.ceil(r.reduce((function(e,t){return e+t.length}),0)/5);console.log(r,"completedWords"),console.log(c,"wordsTyped"),console.log("+=+=+=+=+=+=");var i=Math.ceil(c/s);e.setState({wpm:i,timeElapsed:s})},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href;t=t.replace("practice","codesnippetID/"),t+=this.state.textID,console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),console.log(e.state.text),e.setState({text:JSON.stringify(t.code)})}));var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:this.state.user.id.toString().substr(0,17),problemID:this.state.textID})};fetch(t,n).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this.state,t=e.text,n=e.inputValue,r=e.completedWords,a=e.wpm,s=e.timeElapsed,c=e.started,i=e.completed,o=e.progress;return c?t?i?Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("h2",{children:["Your WPM is ",Object(m.jsx)("strong",{children:a})]}),Object(m.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Play again"})]}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"wpm",children:[Object(m.jsx)("strong",{children:"WPM: "}),a,Object(m.jsx)("br",{}),Object(m.jsx)("strong",{children:"Time: "}),Math.floor(60*s),"s"]}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h4",{children:"Type the text below"}),Object(m.jsx)("progress",{value:o,max:"100"}),Object(m.jsx)("p",{className:"text",children:t.split(" ").map((function(e,t){var a=!1,s=!1;return r.length>t&&(a=!0),r.length===t&&(s=!0),Object(m.jsx)("span",{className:"word \n                                ".concat(a&&"green"," \n                                ").concat(s&&"underline"),children:e.split("").map((function(e,a){var s=t===r.length,c=e!==n[a],i=a<n.length;return Object(m.jsx)("span",{className:"letter ".concat(s&&i?c?"red":"green":""),children:e},a)}))},t)}))}),Object(m.jsx)("input",{type:"text",onChange:this.handleChange,value:n,autoFocus:!0})]})]}):Object(m.jsx)("p",{children:"Loading..."}):Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h2",{children:"Welcome to the Typing game"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Rules:"})," ",Object(m.jsx)("br",{}),"Type in the input field the highlighted word. ",Object(m.jsx)("br",{}),"The correct words will turn ",Object(m.jsx)("span",{className:"green",children:"green"}),".",Object(m.jsx)("br",{}),"Incorrect letters will turn ",Object(m.jsx)("span",{className:"red",children:"red"}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Have fun!"]}),Object(m.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Start game"})]})}}]),n}(a.Component),je=de;function ue(){var e=v();return Object(m.jsx)(S,{user:e,children:Object(m.jsx)(x.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(Z,{}),Object(m.jsx)(ne,{}),Object(m.jsx)(oe,{}),Object(m.jsx)(se,{}),Object(m.jsx)(je,{codesnippetID:"-4862049077753703823",user:e})]})})})}function he(){return Object(m.jsx)(S,{children:Object(m.jsx)(x.a,{children:Object(m.jsx)("h1",{children:"This page was not found :("})})})}var be=n(620),pe=(n(570),[{id:1,name:"C++",version:11},{id:2,name:"Python",version:3},{id:3,name:"Java",version:17}].map((function(e){return Object(m.jsx)(u.b,{to:"/Practice",children:Object(m.jsxs)("button",{type:"button",className:"LangButton",children:[Object(m.jsx)(I.a,{sx:{fontSize:20},color:"#3699cf",gutterBottom:!0,children:e.name}),Object(m.jsxs)(I.a,{sx:{mb:1.5},color:"text.secondary",children:["version.",e.version]})]})})})));function ge(){return Object(m.jsx)(be.a,{sx:{width:300,m:10,px:70},children:pe})}function xe(){var e=v();return Object(m.jsx)(S,{user:e,children:Object(m.jsx)(ge,{})})}var me=["component"];function Oe(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],s=document.createElement("script");function c(e){var t=e.component,r=Object(l.a)(e,me);return Object(m.jsx)(j.a,Object(o.a)(Object(o.a)({},r),{},{component:n?t:X}))}return s.src="https://apis.google.com/js/platform.js",s.onload=function(){return window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"361825927079-ug2rgcfc6152dpahls5uhq0nntiobr5f.apps.googleusercontent.com"}).then((function(){var e=window.gapi.auth2.getAuthInstance(),t=e.isSignedIn.get();r(t),e.isSignedIn.listen((function(e){r(e)}))}))})),void window.gapi.load("signin2",(function(){window.gapi.signin2.render("login-button",{theme:"dark"})}))},document.body.appendChild(s),null!==n?Object(m.jsx)(u.a,{children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/",component:D}),Object(m.jsx)(c,{exact:!0,path:"/profile",component:Q}),Object(m.jsx)(j.a,{exact:!0,path:"/practice",component:ue}),Object(m.jsx)(j.a,{exact:!0,path:"/language",component:xe}),Object(m.jsx)(j.a,{path:"/",component:he})]})}):Object(m.jsx)(f,{})}n(571);i.a.render(Object(m.jsx)(Oe,{}),document.getElementById("root"))}},[[572,1,2]]]);
//# sourceMappingURL=main.a4eb9654.chunk.js.map