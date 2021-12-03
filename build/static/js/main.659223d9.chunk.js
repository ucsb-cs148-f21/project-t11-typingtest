(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{111:function(e,t,n){},167:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},183:function(e,t,n){},570:function(e,t,n){},572:function(e,t,n){"use strict";n.r(t);var r,a=n(0),s=n.n(a),c=n(17),o=n.n(c),i=(n(167),n(102)),l=n(148),d=n(14),j=n(16),u=n(59),h=n(36),b=n(137),p=n(56),m=n(48),g=n(29),O=n(2),x=p.a.div(r||(r=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n"])));function f(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m.a,{bg:"light",expand:"lg",children:Object(O.jsx)(g.a,{children:Object(O.jsx)(m.a.Brand,{href:"/",children:"ReactGoogleAuthStarter"})})}),Object(O.jsx)(x,{children:Object(O.jsx)(b.a,{animation:"border",role:"status"})})]})}function v(){if(void 0===window.gapi||void 0===window.gapi.auth2)return null;var e=window.gapi.auth2.getAuthInstance();if(!1===e.isSignedIn.get())return null;var t=e.currentUser.get().getBasicProfile();return{id:t.getId(),fullName:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName(),imageUrl:t.getImageUrl(),email:t.getEmail(),signOut:e.signOut}}var y=n(55),w=n(104);function k(e){var t=e.user;return Object(O.jsx)(m.a,{"data-testid":"NavBar",bg:"light",expand:"lg",children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(m.a.Brand,{href:"/",children:"TypingTest"}),Object(O.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsxs)(m.a.Collapse,{id:"basic-navbar-nav",children:[Object(O.jsxs)(y.a,{className:"mr-auto",children:[Object(O.jsx)(y.a.Link,{href:"/",children:"Home"}),Object(O.jsx)(y.a.Link,{href:"/language",children:"Language"}),Object(O.jsx)(y.a.Link,{href:"/practice",children:"Practice"}),t&&Object(O.jsx)(y.a.Link,{href:"/profile",children:"Profile"})]}),Object(O.jsx)(y.a,{children:t?Object(O.jsx)(w.a,{title:Object(O.jsxs)("span",{children:["Hello, ",t.fullName," ",Object(O.jsx)("img",{src:t.imageUrl,alt:"profile",style:{width:"24px",height:"24px"}})," "]}),id:"basic-nav-dropdown",children:Object(O.jsx)(w.a.Item,{onClick:t.signOut,children:"Logout"})}):Object(O.jsx)("div",{id:"login-button"})})]})]})})}function N(e){var t=e.user;return Object(O.jsxs)("div",{children:[Object(O.jsx)(k,{user:t}),e.children]})}var S=n(615),C=n(616),P=n(7),W=(n(177),n.p+"static/media/video.17cf6613.mp4");var F,T=function(){var e;return Object(O.jsxs)("div",{className:"home-container",children:[Object(O.jsx)("video",(e={controls:!0,autostart:!0,autoPlay:!0,src:W,type:"video/mp4"},Object(P.a)(e,"autoPlay",!0),Object(P.a)(e,"loop",!0),Object(P.a)(e,"muted",!0),e)),Object(O.jsx)("h1",{children:"TYPING TEST FOR PROGRAMMERS"})]})},I=n(617);n(178),p.a.div(F||(F=Object(h.a)(["\n  width: 700px;\n  max-width: 100%;\n"])));function D(){var e=v();return Object(O.jsxs)(N,{user:e,children:[Object(O.jsx)(T,{}),Object(O.jsx)(S.a,{children:Object(O.jsxs)(C.a,{children:[Object(O.jsx)(I.a,{sx:{mb:1.5},variant:"h5",color:"#3699cf",children:"What is TypingTest?"}),Object(O.jsx)(I.a,{variant:"p",children:"It's a webapp that helps improve coding speed and gauge coding level. We will include a clock and accuracy in our API. The user can choose the language and difficulty of the coding problems and we want to expand it into a more code learning web by adding some questions so users can think about while they are coding to improve the coding skills."})]})}),Object(O.jsx)(u.b,{to:"/Language",children:Object(O.jsx)("button",{type:"button",className:"Navlink",children:"Start Typing"})})]})}n.p;var L,B,M,E=n(34),A=n(35),H=n(46),V=n(45),G=(n(111),n(62)),J=G.a.div(L||(L=Object(h.a)(["\n  display: inline-block;\n  border-radius: 100%;\n  position: relative;"]))),R=G.a.div(B||(B=Object(h.a)(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center,"]))),z=G.a.circle(M||(M=Object(h.a)(["\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;"]))),_=function(e){var t=e.percentage,n=e.width,r=e.strokeWidth,a=e.fontSize,s=e.fontColor,c=e.fontFamily,o=e.primaryColor,i=e.secondaryColor,l=e.fill,d=e.hidePercentageText,j=e.strokeLinecap,u=n/2-2*r,h=6.28*u,b=h-t/100*h,p="".concat(o[0]).concat(o[1]).replace(/#/g,"");return Object(O.jsxs)(J,{className:"react-super-progressbar__base",style:{height:"".concat(n,"px"),width:"".concat(n,"px")},children:[d?null:Object(O.jsx)(R,{className:"react-super-progressbar__percentage-container",children:Object(O.jsxs)("span",{className:"react-super-progressbars__percentage",style:{fontSize:a,fontFamily:c,color:s},children:[t,"%"]})}),Object(O.jsxs)("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsxs)("linearGradient",{id:p,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[Object(O.jsx)("stop",{offset:"0%",stopColor:o[0]}),Object(O.jsx)("stop",{offset:"100%",stopColor:o[1]})]}),Object(O.jsx)("circle",{strokeWidth:r,fill:"transparent",r:u,cx:n/2,cy:n/2,stroke:i,strokeDasharray:"".concat(h," ").concat(h)}),Object(O.jsx)(z,{strokeWidth:r,fill:l,r:u,cx:n/2,cy:n/2,stroke:"url(#".concat(p,")"),strokeLinecap:j,strokeDasharray:"".concat(h," ").concat(h),strokeDashoffset:b})]})]})};_.defaultProps={width:200,strokeWidth:5,strokeLinecap:"round",fontSize:"inherit",fontColor:"inherit",fontFamily:"inherit",primaryColor:["#00BBFF","#92D7F1"],secondaryColor:"transparent",fill:"transparent"};var U,Y=_,q=function(e){Object(H.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={user:e.props.user,easyProblems:0,mediumProblems:0,hardProblems:0,listOfProblems:[]},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href;t+="/",t+=this.state.user.id.toString().substr(0,17),console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({easyProblems:JSON.stringify(t[0].Easy),mediumProblems:JSON.stringify(t[0].Medium),hardProblems:JSON.stringify(t[0].Hard),listOfProblems:JSON.stringify(t[0].problemsSolved)})}))}},{key:"render",value:function(){var e=this.state.easyProblems,t=this.state.mediumProblems,n=this.state.hardProblems;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{children:["Welcome back ",this.state.user.fullName,"!"]}),Object(O.jsxs)("div",{children:["Easy:",Object(O.jsx)(Y,{percentage:(100*e/15).toFixed(1),primaryColor:["#AAFFB9","#AAFFB9"],secondaryColor:"#F0F0F0"}),"Medium:",Object(O.jsx)(Y,{percentage:(100*t/9).toFixed(1),strokeWidth:8,secondaryColor:"#F0F0F0"}),"Hard:",Object(O.jsx)(Y,{percentage:(100*n/6).toFixed(1),strokeWidth:8,primaryColor:["#EB1547","#EB1547"],secondaryColor:"#F0F0F0"})]}),"Number of easy problems completed: ",e,Object(O.jsxs)("div",{children:["Number of medium problems completed: ",t]}),"Number of hard problems completed: ",n,Object(O.jsx)("br",{})]})}}]),n}(a.Component),K=q;p.a.img(U||(U=Object(h.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"])));function Q(){var e=v();return Object(O.jsx)(N,{user:e,children:Object(O.jsx)(g.a,{children:Object(O.jsx)(K,{user:e})})})}function X(){var e=v();return Object(O.jsx)(N,{user:e,children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)("h1",{children:"This page is private!"}),Object(O.jsx)("div",{children:"(meaning you have to login to view the page)"}),Object(O.jsx)("br",{})]})})}n(183);var Z=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),c=Object(d.a)(s,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){var e=null;return o?e=setInterval((function(){r((function(e){return e+1}))}),1e3):o||0===n||clearInterval(e),function(){return clearInterval(e)}}),[o,n]),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsxs)("div",{className:"time",children:[n,"s"]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("button",{className:"button button-primary button-primary-".concat(o?"active":"inactive"),onClick:function(){i(!o)},children:o?"Pause":"Start"}),Object(O.jsx)("button",{className:"button",onClick:function(){r(0),i(!1)},children:"Reset"})]})]})},$=n(618),ee=n(613),te=n(611);function ne(){return Object(O.jsx)($.a,{sx:{minWidth:275},children:Object(O.jsxs)(C.a,{children:[Object(O.jsx)(I.a,{sx:{fontSize:18},color:"text.secondary",gutterBottom:!0,children:"Coding problems"}),Object(O.jsx)(I.a,{variant:"h5",component:"div"}),Object(O.jsx)(I.a,{children:Object(O.jsx)(ee.a,{language:"c++",style:te.a,children:"vector<int> twoSum(vector<int>& nums, int target) {\n  int i,j;\n  for(i=0;i<nums.size()-1;i++)\n  {\n      for(j=i+1;j<nums.size();j++)\n      {\n          if(nums[i]+nums[j]==target)\n          {\n             return {i,j};\n          }\n      }\n  }\n  return {i,j};"})}),Object(O.jsx)(I.a,{variant:"body2",children:"Given an array of integers nums\xa0and an integer target, return indices of the two numbers such that they add up to target."})]})})}var re=n(60),ae=n(612),se=function(e){Object(H.a)(n,e);var t=Object(V.a)(n);function n(e){var r;return Object(E.a)(this,n),(r=t.call(this,e)).state={firstValue:"",secondValue:"",needWords:"",wordCount:"",limWords:null},r.firstHandle=r.firstHandle.bind(Object(re.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(re.a)(r)),r.secondHandle=r.secondHandle.bind(Object(re.a)(r)),r}return Object(A.a)(n,[{key:"firstHandle",value:function(e){this.setState({firstValue:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({needWords:this.state.firstValue})}},{key:"secondHandle",value:function(e){this.setState({secondValue:e.target.value,wordCount:""===e.target.value?0:this.state.secondValue.split(" ").length})}},{key:"render",value:function(){var e=this.state.wordCount;return Object(O.jsxs)("div",{children:[Object(O.jsx)(ae.a,{data:this.state.wordCount,type:"text",value:this.state.value,onChange:this.secondHandle,variant:"outlined",color:"primary",multiline:!0,minRows:"10",placeholder:"Start typing",fullWidth:!0}),Object(O.jsxs)("p",{children:["You have written ",e," words"]})]})}}]),n}(s.a.Component),ce=n(144),oe=n.n(ce),ie=(n(412),function(e){Object(H.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={persons:[]},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this;oe.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){console.log(t),e.setState({persons:t.data})}))}},{key:"render",value:function(){return this.state.persons.map((function(e){return Object(O.jsx)("li",{children:e.email})}))}}]),n}(s.a.Component)),le=n(21),de=function(e){Object(H.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={text:"",user:e.props.user,textID:e.props.codesnippetID,inputValue:"",lastLetter:"",words:[],completedWords:[],completed:!1,startTime:void 0,timeElapsed:0,wpm:0,started:!1,progress:0},e.setText=function(){var t=e.state.text.split(" ");e.setState({words:t,completedWords:[]})},e.startGame=function(){e.setText(),e.setState({started:!0,startTime:Date.now(),completed:!1,progress:0})},e.handleChange=function(t){var n=e.state,r=n.words,a=n.completedWords,s=t.target.value,c=s[s.length-1],o=r[0];if(console.log(o,"currentWord")," "===c||"."===c){if(s.trim()===o){var i=Object(le.a)(r.slice(1));console.log(i,"newWords"),console.log(i.length,"newWords.length");var l=[].concat(Object(le.a)(a),[o]);console.log(l,"newCompletedWords"),console.log("----------------");var d=l.length/(i.length+l.length)*100;e.setState({words:i,completedWords:l,inputValue:"",completed:0===i.length,progress:d})}}else e.setState({inputValue:s,lastLetter:c}),console.log(e.state.inputValue,"this.state.inputValue"),console.log(e.state.lastLetter,"this.state.lastLetter"),console.log("================================");e.calculateWPM()},e.calculateWPM=function(){var t=e.state,n=t.startTime,r=t.completedWords,a=Date.now(),s=(a-n)/1e3/60;console.log(a,"now"),console.log(n,"startTime"),console.log(s,"diff"),console.log("**************");var c=Math.ceil(r.reduce((function(e,t){return e+t.length}),0)/5);console.log(r,"completedWords"),console.log(c,"wordsTyped"),console.log("+=+=+=+=+=+=");var o=Math.ceil(c/s);e.setState({wpm:o,timeElapsed:s})},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href;t=t.replace("practice","codesnippetID/"),t+=this.state.textID,console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),console.log(e.state.text),e.setState({text:JSON.stringify(t.code)})}));var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:this.state.user.id.toString().substr(0,17),problemID:this.state.textID})};fetch(t,n).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this.state,t=e.text,n=e.inputValue,r=e.completedWords,a=e.wpm,s=e.timeElapsed,c=e.started,o=e.completed,i=e.progress;return c?t?o?Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("h2",{children:["Your WPM is ",Object(O.jsx)("strong",{children:a})]}),Object(O.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Play again"})]}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"wpm",children:[Object(O.jsx)("strong",{children:"WPM: "}),a,Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Time: "}),Math.floor(60*s),"s"]}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h4",{children:"Type the text below"}),Object(O.jsx)("progress",{value:i,max:"100"}),Object(O.jsx)("p",{className:"text",children:t.split(" ").map((function(e,t){var a=!1,s=!1;return r.length>t&&(a=!0),r.length===t&&(s=!0),Object(O.jsx)("span",{className:"word \n                                ".concat(a&&"green"," \n                                ").concat(s&&"underline"),children:e.split("").map((function(e,a){var s=t===r.length,c=e!==n[a],o=a<n.length;return Object(O.jsx)("span",{className:"letter ".concat(s&&o?c?"red":"green":""),children:e},a)}))},t)}))}),Object(O.jsx)("input",{type:"text",onChange:this.handleChange,value:n,autoFocus:!0})]})]}):Object(O.jsx)("p",{children:"Loading..."}):Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{children:"Welcome to the Typing game"}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Rules:"})," ",Object(O.jsx)("br",{}),"Type in the input field the highlighted word. ",Object(O.jsx)("br",{}),"The correct words will turn ",Object(O.jsx)("span",{className:"green",children:"green"}),".",Object(O.jsx)("br",{}),"Incorrect letters will turn ",Object(O.jsx)("span",{className:"red",children:"red"}),".",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Have fun!"]}),Object(O.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Start game"})]})}}]),n}(a.Component),je=de;function ue(){var e=v();return Object(O.jsx)(N,{user:e,children:Object(O.jsx)(g.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(Z,{}),Object(O.jsx)(ne,{}),Object(O.jsx)(ie,{}),Object(O.jsx)(se,{}),Object(O.jsx)(je,{codesnippetID:"-4862049077753703823",user:e})]})})})}function he(){return Object(O.jsx)(N,{children:Object(O.jsx)(g.a,{children:Object(O.jsx)("h1",{children:"This page was not found :("})})})}var be=n(620),pe=(n(570),[{id:1,name:"C++",version:11},{id:2,name:"Python",version:3},{id:3,name:"Java",version:17}].map((function(e){return Object(O.jsx)(u.b,{to:"/Practice",children:Object(O.jsxs)("button",{type:"button",className:"LangButton",children:[Object(O.jsx)(I.a,{sx:{fontSize:20},color:"#3699cf",gutterBottom:!0,children:e.name}),Object(O.jsxs)(I.a,{sx:{mb:1.5},color:"text.secondary",children:["version.",e.version]})]})})})));function me(){return Object(O.jsx)(be.a,{sx:{width:300,m:10,px:70},children:pe})}function ge(){var e=v();return Object(O.jsx)(N,{user:e,children:Object(O.jsx)(me,{})})}var Oe=["component"];function xe(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],s=document.createElement("script");function c(e){var t=e.component,r=Object(l.a)(e,Oe);return Object(O.jsx)(j.a,Object(i.a)(Object(i.a)({},r),{},{component:n?t:X}))}return s.src="https://apis.google.com/js/platform.js",s.onload=function(){return window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"361825927079-ug2rgcfc6152dpahls5uhq0nntiobr5f.apps.googleusercontent.com"}).then((function(){var e=window.gapi.auth2.getAuthInstance(),t=e.isSignedIn.get();r(t),e.isSignedIn.listen((function(e){r(e)}))}))})),void window.gapi.load("signin2",(function(){window.gapi.signin2.render("login-button",{theme:"dark"})}))},document.body.appendChild(s),null!==n?Object(O.jsx)(u.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:D}),Object(O.jsx)(c,{exact:!0,path:"/profile",component:Q}),Object(O.jsx)(j.a,{exact:!0,path:"/practice",component:ue}),Object(O.jsx)(j.a,{exact:!0,path:"/language",component:ge}),Object(O.jsx)(j.a,{path:"/",component:he})]})}):Object(O.jsx)(f,{})}n(571);o.a.render(Object(O.jsx)(xe,{}),document.getElementById("root"))}},[[572,1,2]]]);
//# sourceMappingURL=main.659223d9.chunk.js.map