(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{156:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},172:function(e,t,n){},410:function(e,t,n){},411:function(e,t,n){},413:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),i=n(36),s=n.n(i),o=(n(156),n(101)),l=n(133),j=n(14),d=n(17),u=n(44),h=n(54),b=n(124),p=n(55),O=n(48),x=n(26),g=n(2),m=p.a.div(c||(c=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n"])));function v(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.a,{bg:"light",expand:"lg",children:Object(g.jsx)(x.a,{children:Object(g.jsx)(O.a.Brand,{href:"/",children:"ReactGoogleAuthStarter"})})}),Object(g.jsx)(m,{children:Object(g.jsx)(b.a,{animation:"border",role:"status"})})]})}function f(){if(void 0===window.gapi||void 0===window.gapi.auth2)return null;var e=window.gapi.auth2.getAuthInstance();if(!1===e.isSignedIn.get())return null;var t=e.currentUser.get().getBasicProfile();return{id:t.getId(),fullName:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName(),imageUrl:t.getImageUrl(),email:t.getEmail(),signOut:e.signOut}}var w=n(52),y=n(103);function C(e){var t=e.user;return Object(g.jsx)(O.a,{"data-testid":"NavBar",bg:"light",expand:"lg",children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(O.a.Brand,{href:"/",children:"TypingTest"}),Object(g.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(O.a.Collapse,{id:"basic-navbar-nav",children:[Object(g.jsxs)(w.a,{className:"mr-auto",children:[Object(g.jsx)(w.a.Link,{href:"/",children:"Home"}),Object(g.jsx)(w.a.Link,{href:"/language",children:"Language"}),Object(g.jsx)(w.a.Link,{href:"/practice",children:"Practice"}),t&&Object(g.jsx)(w.a.Link,{href:"/profile",children:"Profile"})]}),Object(g.jsx)(w.a,{children:t?Object(g.jsx)(y.a,{title:Object(g.jsxs)("span",{children:["Hello, ",t.fullName," ",Object(g.jsx)("img",{src:t.imageUrl,alt:"profile",style:{width:"24px",height:"24px"}})," "]}),id:"basic-nav-dropdown",children:Object(g.jsx)(y.a.Item,{onClick:t.signOut,children:"Logout"})}):Object(g.jsx)("div",{id:"login-button"})})]})]})})}function N(e){var t=e.user;return Object(g.jsxs)("div",{children:[Object(g.jsx)(C,{user:t}),e.children]})}var S=n(482),T=n(483),k=n(7),P=(n(166),n.p+"static/media/video.17cf6613.mp4");var W,_=function(){var e;return Object(g.jsxs)("div",{className:"home-container",children:[Object(g.jsx)("video",(e={controls:!0,autostart:!0,autoPlay:!0,src:P,type:"video/mp4"},Object(k.a)(e,"autoPlay",!0),Object(k.a)(e,"loop",!0),Object(k.a)(e,"muted",!0),e)),Object(g.jsx)("h1",{children:"TYPING TEST FOR PROGRAMMERS"})]})},E=n(484);n(167),p.a.div(W||(W=Object(h.a)(["\n  width: 700px;\n  max-width: 100%;\n"])));function I(){var e=f();return Object(g.jsxs)(N,{user:e,children:[Object(g.jsx)(_,{}),Object(g.jsx)(S.a,{children:Object(g.jsxs)(T.a,{children:[Object(g.jsx)(E.a,{sx:{mb:1.5},variant:"h5",color:"#3699cf",children:"What is TypingTest?"}),Object(g.jsx)(E.a,{variant:"p",children:"It's a webapp that helps improve coding speed and gauge coding level. We will include a clock and accuracy in our API. The user can choose the language and difficulty of the coding problems and we want to expand it into a more code learning web by adding some questions so users can think about while they are coding to improve the coding skills."})]})}),Object(g.jsx)(u.b,{to:"/Language",children:Object(g.jsx)("button",{type:"button",className:"Navlink",children:"Start Typing"})})]})}var L,A=n.p+"static/media/doggo.60600ade.jpg",M=p.a.img(L||(L=Object(h.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"])));function R(){var e=f();return Object(g.jsx)(N,{user:e,children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)("h1",{children:"This is your Profile page!"}),Object(g.jsx)("div",{children:"Here's what this app knows about you based on your Google login:"}),Object(g.jsx)("pre",{children:JSON.stringify(e,null,"\t")}),Object(g.jsxs)("div",{children:['Your name is "',e.fullName,'" and your email is "',e.email,'."']}),Object(g.jsx)("div",{children:"Google also thinks you'll like this picture :)"}),Object(g.jsx)("br",{}),Object(g.jsx)(M,{src:A})]})})}function D(){var e=f();return Object(g.jsx)(N,{user:e,children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)("h1",{children:"This page is private!"}),Object(g.jsx)("div",{children:"(meaning you have to login to view the page)"}),Object(g.jsx)("br",{})]})})}n(172),n(485),n(480),n(469);var G=n(58),B=n(59),H=n(60),J=n(93),U=n(89),F=n(479),K=(r.a.Component,n(61)),V=n.n(K),z=n(85),Y=n(131),q=n.n(Y),Q=n(27),X=n(473),Z=n(476),$=n(478),ee=n(487),te=n(474),ne=n(477),ce=n(472),ae=n(475),re=Object(Q.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(ee.a),ie=Object(Q.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(ce.a),se=Object(X.a)({table:{minWidth:700}}),oe=function(){var e=se(),t=Object(a.useState)([]),n=Object(j.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),s=Object(j.a)(i,2),o=s[0],l=s[1],d=function(){var e=Object(z.a)(V.a.mark((function e(){var t;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get("http://127.0.0.1:5000/codesnippet/Java");case 3:t=e.sent,console.log(t.data),r(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{children:"Code"}),Object(g.jsx)("input",{type:"text",placeholder:"Search here",onChange:function(e){l(e.target.value)}}),Object(g.jsx)(te.a,{component:ae.a,children:Object(g.jsxs)(Z.a,{className:e.table,"aria-label":"customized table",children:[Object(g.jsx)(ne.a,{children:Object(g.jsxs)(ce.a,{children:[Object(g.jsx)(re,{children:"Problem Name"}),Object(g.jsx)(re,{align:"right",children:"Problem Index"})]})}),Object(g.jsx)($.a,{children:c.filter((function(e){return""==o||e.name.toLowerCase().includes(o.toLowerCase())?e:void 0})).map((function(e,t){return Object(g.jsxs)(ie,{children:[Object(g.jsx)(re,{align:"right",children:Object(g.jsx)(u.b,{to:"/Java/".concat(e._id),children:e.name})}),Object(g.jsx)(re,{component:"th",scope:"row",children:e.difficulty})]},e.name)}))})]})})]})},le=n(19),je=(n(410),function(e){Object(J.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(G.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={text:e.props.text,inputValue:"",lastLetter:"",words:[],completedWords:[],completed:!1,startTime:void 0,timeElapsed:0,wpm:0,started:!1,progress:0,lineCount:0,lineWCompleted:0,highlight_length:[]},e.setText=function(){for(var t=e.state.text.split(" ").filter((function(e){return""!=e})),n=0;n<e.state.text;n++){var c=e.state.text[n];console.log(c)}e.setState({words:t,completedWords:[]})},e.startGame=function(){e.setText(),e.setState({started:!0,startTime:Date.now(),completed:!1,progress:0})},e.handleChange=function(t){var n=e.state,c=n.words,a=n.completedWords,r=n.lineWCompleted,i=t.target.value,s=i[i.length-1],o=c[0];if(" "===s){if(i.trim()===o){var l=Object(le.a)(c.slice(1)),j=[].concat(Object(le.a)(a),[o]),d=r+1,u=j.length/(l.length+j.length)*100;e.setState({words:l,completedWords:j,inputValue:"",completed:0===l.length,progress:u,lineWCompleted:d})}}else e.setState({inputValue:i,lastLetter:s});e.calculateWPM()},e._handleKeyPress=function(t){var n=t.target.value;if("Enter"===t.key){var c=e.state,a=c.words,r=c.completedWords,i=c.lineCount,s=(c.lineWCompleted,a[0]);if(s==n+"\n"){var o=Object(le.a)(a.slice(1)),l=[].concat(Object(le.a)(r),[s]),j=i+1,d=l.length/(o.length+l.length)*100;e.setState({words:o,completedWords:l,inputValue:"",completed:0===o.length,progress:d,lineCount:j,lineWCompleted:0})}}e.calculateWPM()},e.calculateWPM=function(){var t=e.state,n=t.startTime,c=t.completedWords,a=(Date.now()-n)/1e3/60,r=Math.ceil(c.reduce((function(e,t){return e+t.length}),0)/5),i=Math.ceil(r/a);e.setState({wpm:i,timeElapsed:a})},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.text,n=e.inputValue,c=(e.completedWords,e.wpm),a=e.timeElapsed,r=e.started,i=e.completed,s=e.progress,o=e.lineCount,l=e.lineWCompleted;return r?t?i?Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("h2",{children:["Your WPM is ",Object(g.jsx)("strong",{children:c})]}),Object(g.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Play again"})]}):Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"wpm",children:[Object(g.jsx)("strong",{children:"WPM: "}),c,Object(g.jsx)("br",{}),Object(g.jsx)("strong",{children:"Time: "}),Math.floor(60*a),"s"]}),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h4",{children:"Type the text below"}),Object(g.jsx)("progress",{value:s,max:"100"}),Object(g.jsx)("p",{className:"text",children:t.split("\n").map((function(e,t){return Object(g.jsx)("div",{children:e.split(" ").map((function(e,c){var a=!1,r=!1;return(l>c||t<o)&&(a=!0),l===c&&o==t&&(r=!0),Object(g.jsx)("span",{className:"word \n                                  ".concat(a&&"green"," \n                                  ").concat(r&&"underline"),children:e.split("").map((function(e,a){var r=c===l&&t==o,i=e!==n[a]&&t==o,s=a<n.length&&t==o;return Object(g.jsx)("span",{className:"letter ".concat(r&&s?i?"red":"green":""),children:e},a)}))},c)}))},t)}))}),Object(g.jsx)("input",{type:"text",onChange:this.handleChange,onKeyPress:this._handleKeyPress,value:n,autoFocus:!0})]})]}):Object(g.jsx)("p",{children:"Loading..."}):Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h2",{children:"Welcome to the Typing game"}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Rules:"})," ",Object(g.jsx)("br",{}),"Type in the input field the highlighted word. ",Object(g.jsx)("br",{}),"The correct words will turn ",Object(g.jsx)("span",{className:"green",children:"green"}),".",Object(g.jsx)("br",{}),"Incorrect letters will turn ",Object(g.jsx)("span",{className:"red",children:"red"}),".",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),"Have fun!"]}),Object(g.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Start game"})]})}}]),n}(a.Component)),de=je;function ue(){var e=f();return Object(g.jsx)(N,{user:e,children:Object(g.jsx)(x.a,{children:Object(g.jsx)("div",{children:Object(g.jsx)(de,{ID:"3687284161695356416"})})})})}function he(){return Object(g.jsx)(N,{children:Object(g.jsx)(x.a,{children:Object(g.jsx)("h1",{children:"This page was not found :("})})})}var be=n(488),pe=(n(411),[{id:1,name:"C++",version:11},{id:2,name:"Python",version:3},{id:3,name:"Java",version:17}].map((function(e){return Object(g.jsx)(u.b,{to:"/Java",children:Object(g.jsxs)("button",{type:"button",className:"LangButton",children:[Object(g.jsx)(E.a,{sx:{fontSize:20},color:"#3699cf",gutterBottom:!0,children:e.name}),Object(g.jsxs)(E.a,{sx:{mb:1.5},color:"text.secondary",children:["version.",e.version]})]})})})));function Oe(){return Object(g.jsx)(be.a,{sx:{width:300,m:10,px:70},children:pe})}function xe(){var e=f();return Object(g.jsx)(N,{user:e,children:Object(g.jsx)(Oe,{})})}function ge(){var e=f();return Object(g.jsx)(N,{user:e,children:Object(g.jsx)(x.a,{children:Object(g.jsx)("div",{children:Object(g.jsx)(oe,{})})})})}function me(e){Object(a.useEffect)((function(){b(),console.log(e.match.params._id)}),[]);var t=Object(a.useState)([]),n=Object(j.a)(t,2),c=(n[0],n[1]),r=Object(a.useState)(""),i=Object(j.a)(r,2),s=i[0],o=i[1],l=Object(a.useState)(),d=Object(j.a)(l,2),u=d[0],h=d[1],b=function(){var t=Object(z.a)(V.a.mark((function t(){var n,a,r,i;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://127.0.0.1:5000/codesnippet/Java");case 2:return n=t.sent,t.next=5,n.json();case 5:for(a=t.sent,c(a),console.log(a),console.log(a[0]),console.log(a[0].code),console.log(s),console.log(typeof s),r=0;r<a.length;r++)(i=a[r])._id==e.match.params._id&&(console.log(i),o(i.code),h(i._id));console.log(u);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return""!=s?Object(g.jsx)("div",{children:Object(g.jsx)(de,{text:s})}):Object(g.jsx)("div",{})}var ve=["component"];function fe(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1],r=document.createElement("script");function i(e){var t=e.component,c=Object(l.a)(e,ve);return Object(g.jsx)(d.a,Object(o.a)(Object(o.a)({},c),{},{component:n?t:D}))}return r.src="https://apis.google.com/js/platform.js",r.onload=function(){return window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_CLIENT_ID}).then((function(){var e=window.gapi.auth2.getAuthInstance(),t=e.isSignedIn.get();c(t),e.isSignedIn.listen((function(e){c(e)}))}))})),void window.gapi.load("signin2",(function(){window.gapi.signin2.render("login-button",{theme:"dark"})}))},document.body.appendChild(r),null!==n?Object(g.jsx)(u.a,{children:Object(g.jsxs)(d.c,{children:[Object(g.jsx)(d.a,{exact:!0,path:"/",component:I}),Object(g.jsx)(i,{exact:!0,path:"/profile",component:R}),Object(g.jsx)(d.a,{exact:!0,path:"/practice",component:ue}),Object(g.jsx)(d.a,{exact:!0,path:"/language",component:xe}),Object(g.jsx)(d.a,{path:"/java",exact:!0,component:ge}),Object(g.jsx)(d.a,{path:"/java/:_id",component:me}),Object(g.jsx)(d.a,{path:"/",component:he})]})}):Object(g.jsx)(v,{})}n(412);s.a.render(Object(g.jsx)(fe,{}),document.getElementById("root"))}},[[413,1,2]]]);
//# sourceMappingURL=main.6a21b51d.chunk.js.map