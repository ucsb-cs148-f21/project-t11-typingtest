(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{156:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},172:function(e,t,n){},410:function(e,t,n){},411:function(e,t,n){},413:function(e,t,n){"use strict";n.r(t);var c,a=n(0),o=n.n(a),r=n(36),s=n.n(r),i=(n(156),n(101)),l=n(133),d=n(14),j=n(17),h=n(44),u=n(54),b=n(124),g=n(55),p=n(48),x=n(26),O=n(2),m=g.a.div(c||(c=Object(u.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n"])));function f(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p.a,{bg:"light",expand:"lg",children:Object(O.jsx)(x.a,{children:Object(O.jsx)(p.a.Brand,{href:"/",children:"ReactGoogleAuthStarter"})})}),Object(O.jsx)(m,{children:Object(O.jsx)(b.a,{animation:"border",role:"status"})})]})}function v(){if(void 0===window.gapi||void 0===window.gapi.auth2)return null;var e=window.gapi.auth2.getAuthInstance();if(!1===e.isSignedIn.get())return null;var t=e.currentUser.get().getBasicProfile();return{id:t.getId(),fullName:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName(),imageUrl:t.getImageUrl(),email:t.getEmail(),signOut:e.signOut}}var w=n(52),y=n(103);function N(e){var t=e.user;return Object(O.jsx)(p.a,{"data-testid":"NavBar",bg:"light",expand:"lg",children:Object(O.jsxs)(x.a,{children:[Object(O.jsx)(p.a.Brand,{href:"/",children:"TypingTest"}),Object(O.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsxs)(p.a.Collapse,{id:"basic-navbar-nav",children:[Object(O.jsxs)(w.a,{className:"mr-auto",children:[Object(O.jsx)(w.a.Link,{href:"/",children:"Home"}),Object(O.jsx)(w.a.Link,{href:"/language",children:"Language"}),Object(O.jsx)(w.a.Link,{href:"/practice",children:"Practice"}),t&&Object(O.jsx)(w.a.Link,{href:"/profile",children:"Profile"})]}),Object(O.jsx)(w.a,{children:t?Object(O.jsx)(y.a,{title:Object(O.jsxs)("span",{children:["Hello, ",t.fullName," ",Object(O.jsx)("img",{src:t.imageUrl,alt:"profile",style:{width:"24px",height:"24px"}})," "]}),id:"basic-nav-dropdown",children:Object(O.jsx)(y.a.Item,{onClick:t.signOut,children:"Logout"})}):Object(O.jsx)("div",{id:"login-button"})})]})]})})}function k(e){var t=e.user;return Object(O.jsxs)("div",{children:[Object(O.jsx)(N,{user:t}),e.children]})}var S=n(482),W=n(483),T=n(7),P=(n(166),n.p+"static/media/video.17cf6613.mp4");var I,C=function(){var e;return Object(O.jsxs)("div",{className:"home-container",children:[Object(O.jsx)("video",(e={controls:!0,autostart:!0,autoPlay:!0,src:P,type:"video/mp4"},Object(T.a)(e,"autoPlay",!0),Object(T.a)(e,"loop",!0),Object(T.a)(e,"muted",!0),e)),Object(O.jsx)("h1",{children:"TYPING TEST FOR PROGRAMMERS"})]})},L=n(484);n(167),g.a.div(I||(I=Object(u.a)(["\n  width: 700px;\n  max-width: 100%;\n"])));function E(){var e=v();return Object(O.jsxs)(k,{user:e,children:[Object(O.jsx)(C,{}),Object(O.jsx)(S.a,{children:Object(O.jsxs)(W.a,{children:[Object(O.jsx)(L.a,{sx:{mb:1.5},variant:"h5",color:"#3699cf",children:"What is TypingTest?"}),Object(O.jsx)(L.a,{variant:"p",children:"It's a webapp that helps improve coding speed and gauge coding level. We will include a clock and accuracy in our API. The user can choose the language and difficulty of the coding problems and we want to expand it into a more code learning web by adding some questions so users can think about while they are coding to improve the coding skills."})]})}),Object(O.jsx)(h.b,{to:"/Language",children:Object(O.jsx)("button",{type:"button",className:"Navlink",children:"Start Typing"})})]})}var M,D=n.p+"static/media/doggo.60600ade.jpg",G=g.a.img(M||(M=Object(u.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"])));function J(){var e=v();return Object(O.jsx)(k,{user:e,children:Object(O.jsxs)(x.a,{children:[Object(O.jsx)("h1",{children:"This is your Profile page!"}),Object(O.jsx)("div",{children:"Here's what this app knows about you based on your Google login:"}),Object(O.jsx)("pre",{children:JSON.stringify(e,null,"\t")}),Object(O.jsxs)("div",{children:['Your name is "',e.fullName,'" and your email is "',e.email,'."']}),Object(O.jsx)("div",{children:"Google also thinks you'll like this picture :)"}),Object(O.jsx)("br",{}),Object(O.jsx)(G,{src:D})]})})}function _(){var e=v();return Object(O.jsx)(k,{user:e,children:Object(O.jsxs)(x.a,{children:[Object(O.jsx)("h1",{children:"This page is private!"}),Object(O.jsx)("div",{children:"(meaning you have to login to view the page)"}),Object(O.jsx)("br",{})]})})}n(172),n(485),n(480),n(469);var A=n(58),B=n(59),V=n(60),R=n(93),F=n(89),H=n(479),U=(o.a.Component,n(61)),z=n.n(U),K=n(85),Y=n(131),q=n.n(Y),$=n(27),Q=n(473),X=n(476),Z=n(478),ee=n(487),te=n(474),ne=n(477),ce=n(472),ae=n(475),oe=Object($.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(ee.a),re=Object($.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(ce.a),se=Object(Q.a)({table:{minWidth:700}}),ie=function(){var e=se(),t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(""),s=Object(d.a)(r,2),i=s[0],l=s[1],j=function(){var e=Object(K.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get("http://127.0.0.1:5000/codesnippet/Java");case 3:t=e.sent,console.log(t.data),o(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){j()}),[]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Code"}),Object(O.jsx)("input",{type:"text",placeholder:"Search here",onChange:function(e){l(e.target.value)}}),Object(O.jsx)(te.a,{component:ae.a,children:Object(O.jsxs)(X.a,{className:e.table,"aria-label":"customized table",children:[Object(O.jsx)(ne.a,{children:Object(O.jsxs)(ce.a,{children:[Object(O.jsx)(oe,{children:"Problem Name"}),Object(O.jsx)(oe,{align:"right",children:"Problem Index"})]})}),Object(O.jsx)(Z.a,{children:c.filter((function(e){return""==i||e.name.toLowerCase().includes(i.toLowerCase())?e:void 0})).map((function(e,t){return Object(O.jsxs)(re,{children:[Object(O.jsx)(oe,{align:"right",children:Object(O.jsx)(h.b,{to:"/Java/".concat(e._id),children:e.name})}),Object(O.jsx)(oe,{component:"th",scope:"row",children:e.difficulty})]},e.name)}))})]})})]})},le=n(19),de=(n(410),function(e){Object(R.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(A.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={text:"",textID:e.props.ID,inputValue:"",lastLetter:"",words:[],completedWords:[],completed:!1,startTime:void 0,timeElapsed:0,wpm:0,started:!1,progress:0},e.setText=function(){var t=e.state.text.split(" ");console.log(t),e.setState({words:t,completedWords:[]})},e.startGame=function(){e.setText(),e.setState({started:!0,startTime:Date.now(),completed:!1,progress:0})},e.handleChange=function(t){var n=e.state,c=n.words,a=n.completedWords,o=t.target.value,r=o[o.length-1],s=c[0];if(console.log(s,"currentWord")," "===r||"."===r){if(o.trim()===s){var i=Object(le.a)(c.slice(1));console.log(i,"newWords"),console.log(i.length,"newWords.length");var l=[].concat(Object(le.a)(a),[s]);console.log(l,"newCompletedWords"),console.log("----------------");var d=l.length/(i.length+l.length)*100;e.setState({words:i,completedWords:l,inputValue:"",completed:0===i.length,progress:d})}}else e.setState({inputValue:o,lastLetter:r}),console.log(e.state.inputValue,"this.state.inputValue"),console.log(e.state.lastLetter,"this.state.lastLetter"),console.log("================================");e.calculateWPM()},e._handleKeyPress=function(t){if("Enter"===t.key){var n=e.state,c=n.words,a=n.completedWords,o=c[0];if(console.log(o,"currentWord"),"\n"===o){var r=Object(le.a)(c.slice(1));console.log(r,"newWords"),console.log(r.length,"newWords.length");var s=[].concat(Object(le.a)(a),[o]);console.log(s,"newCompletedWords"),console.log("----------------");var i=s.length/(r.length+s.length)*100;e.setState({words:r,completedWords:s,inputValue:"",completed:0===r.length,progress:i})}}e.calculateWPM()},e.calculateWPM=function(){var t=e.state,n=t.startTime,c=t.completedWords,a=Date.now(),o=(a-n)/1e3/60;console.log(a,"now"),console.log(n,"startTime"),console.log(o,"diff"),console.log("**************");var r=Math.ceil(c.reduce((function(e,t){return e+t.length}),0)/5);console.log(c,"completedWords"),console.log(r,"wordsTyped"),console.log("+=+=+=+=+=+=");var s=Math.ceil(r/o);e.setState({wpm:s,timeElapsed:o})},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href;t=t.replace("practice","codesnippetID/"),t+=this.state.textID,console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),console.log(e.state.text),e.setState({text:JSON.stringify(t.code).replace(/"([^"]+)":/g,"$1:")})})),console.log(this.state.text)}},{key:"render",value:function(){var e=this.state,t=e.text,n=e.inputValue,c=e.completedWords,a=e.wpm,o=e.timeElapsed,r=e.started,s=e.completed,i=e.progress;return r?t?s?Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("h2",{children:["Your WPM is ",Object(O.jsx)("strong",{children:a})]}),Object(O.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Play again"})]}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"wpm",children:[Object(O.jsx)("strong",{children:"WPM: "}),a,Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Time: "}),Math.floor(60*o),"s"]}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h4",{children:"Type the text below"}),Object(O.jsx)("progress",{value:i,max:"100"}),Object(O.jsx)("p",{className:"text",children:t.split(" ").map((function(e,t){var a=!1,o=!1;return c.length>t&&(a=!0),c.length===t&&(o=!0),Object(O.jsx)("span",{className:"word \n                                ".concat(a&&"green"," \n                                ").concat(o&&"underline"),children:e.split("").map((function(e,a){var o=t===c.length,r=e!==n[a],s=a<n.length;return Object(O.jsx)("span",{className:"letter ".concat(o&&s?r?"red":"green":""),children:e},a)}))},t)}))}),Object(O.jsx)("input",{type:"text",onChange:this.handleChange,onKeyPress:this._handleKeyPress,value:n,autoFocus:!0})]})]}):Object(O.jsx)("p",{children:"Loading..."}):Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h2",{children:"Welcome to the Typing game"}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Rules:"})," ",Object(O.jsx)("br",{}),"Type in the input field the highlighted word. ",Object(O.jsx)("br",{}),"The correct words will turn ",Object(O.jsx)("span",{className:"green",children:"green"}),".",Object(O.jsx)("br",{}),"Incorrect letters will turn ",Object(O.jsx)("span",{className:"red",children:"red"}),".",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Have fun!"]}),Object(O.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Start game"})]})}}]),n}(a.Component)),je=de;function he(){var e=v();return Object(O.jsx)(k,{user:e,children:Object(O.jsx)(x.a,{children:Object(O.jsx)("div",{children:Object(O.jsx)(je,{ID:"3687284161695356416"})})})})}function ue(){return Object(O.jsx)(k,{children:Object(O.jsx)(x.a,{children:Object(O.jsx)("h1",{children:"This page was not found :("})})})}var be=n(488),ge=(n(411),[{id:1,name:"C++",version:11},{id:2,name:"Python",version:3},{id:3,name:"Java",version:17}].map((function(e){return Object(O.jsx)(h.b,{to:"/Java",children:Object(O.jsxs)("button",{type:"button",className:"LangButton",children:[Object(O.jsx)(L.a,{sx:{fontSize:20},color:"#3699cf",gutterBottom:!0,children:e.name}),Object(O.jsxs)(L.a,{sx:{mb:1.5},color:"text.secondary",children:["version.",e.version]})]})})})));function pe(){return Object(O.jsx)(be.a,{sx:{width:300,m:10,px:70},children:ge})}function xe(){var e=v();return Object(O.jsx)(k,{user:e,children:Object(O.jsx)(pe,{})})}function Oe(){var e=v();return Object(O.jsx)(k,{user:e,children:Object(O.jsx)(x.a,{children:Object(O.jsx)("div",{children:Object(O.jsx)(ie,{})})})})}function me(e){Object(a.useEffect)((function(){b(),console.log(e.match.params._id)}),[]);var t=Object(a.useState)({code:"a"}),n=Object(d.a)(t,2),c=(n[0],n[1]),o=Object(a.useState)({code:"a"}),r=Object(d.a)(o,2),s=r[0],i=r[1],l=Object(a.useState)(),j=Object(d.a)(l,2),h=j[0],u=j[1],b=function(){var t=Object(K.a)(z.a.mark((function t(){var n,a,o,r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://127.0.0.1:5000/codesnippet/Java");case 2:return n=t.sent,t.next=5,n.json();case 5:for(a=t.sent,c(a),console.log(a),console.log(a[0]),console.log(a[0].code),console.log(s),console.log(typeof s),i(console.log(a[0].code)),o=0;o<a.length;o++)(r=a[o])._id==e.match.params._id&&(console.log(r),i(r.code),u(r._id));console.log(h);case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{children:Object(O.jsx)(je,{ID:"3687284161695356416"})})}var fe=["component"];function ve(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],o=document.createElement("script");function r(e){var t=e.component,c=Object(l.a)(e,fe);return Object(O.jsx)(j.a,Object(i.a)(Object(i.a)({},c),{},{component:n?t:_}))}return o.src="https://apis.google.com/js/platform.js",o.onload=function(){return window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"361825927079-ug2rgcfc6152dpahls5uhq0nntiobr5f.apps.googleusercontent.com"}).then((function(){var e=window.gapi.auth2.getAuthInstance(),t=e.isSignedIn.get();c(t),e.isSignedIn.listen((function(e){c(e)}))}))})),void window.gapi.load("signin2",(function(){window.gapi.signin2.render("login-button",{theme:"dark"})}))},document.body.appendChild(o),null!==n?Object(O.jsx)(h.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:E}),Object(O.jsx)(r,{exact:!0,path:"/profile",component:J}),Object(O.jsx)(j.a,{exact:!0,path:"/practice",component:he}),Object(O.jsx)(j.a,{exact:!0,path:"/language",component:xe}),Object(O.jsx)(j.a,{path:"/java",exact:!0,component:Oe}),Object(O.jsx)(j.a,{path:"/java/:_id",component:me}),Object(O.jsx)(j.a,{path:"/",component:ue})]})}):Object(O.jsx)(f,{})}n(412);s.a.render(Object(O.jsx)(ve,{}),document.getElementById("root"))}},[[413,1,2]]]);
//# sourceMappingURL=main.e7c02718.chunk.js.map