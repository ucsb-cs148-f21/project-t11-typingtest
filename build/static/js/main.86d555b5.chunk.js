(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{100:function(e,t,n){},127:function(e,t,n){},137:function(e,t,n){},143:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n(41),o=n.n(a),s=(n(127),n(87)),i=n(118),l=n(9),j=n(12),d=n(28),u=n(51),h=n(114),b=n(86),p=n(43),O=n(18),g=n(1),x=b.a.div(c||(c=Object(u.a)(["\n  height: 100vh;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n"])));function m(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.a,{bg:"light",expand:"lg",children:Object(g.jsx)(O.a,{children:Object(g.jsx)(p.a.Brand,{href:"/",children:"Code Per Minute"})})}),Object(g.jsx)(x,{children:Object(g.jsx)(h.a,{animation:"border",role:"status"})})]})}function f(){if(void 0===window.gapi||void 0===window.gapi.auth2)return null;var e=window.gapi.auth2.getAuthInstance();if(!1===e.isSignedIn.get())return null;var t=e.currentUser.get().getBasicProfile();return{id:t.getId(),fullName:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName(),imageUrl:t.getImageUrl(),email:t.getEmail(),signOut:e.signOut}}var v=n(61),y=n(46);function w(e){var t=e.user;return Object(g.jsx)(p.a,{"data-testid":"NavBar",bg:"light",expand:"lg",sticky:"top",children:Object(g.jsxs)(O.a,{children:[Object(g.jsx)(p.a.Brand,{href:"/",children:"CodePerMinute"}),Object(g.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(p.a.Collapse,{id:"basic-navbar-nav",children:[Object(g.jsxs)(v.a,{className:"mr-auto",children:[Object(g.jsx)(v.a.Link,{href:"/",children:"Home"}),Object(g.jsxs)(y.a,{title:"Language",children:[Object(g.jsx)(y.a.Item,{href:"/Cpp",children:"C++"}),Object(g.jsx)(y.a.Item,{href:"/Java",children:"Java"}),Object(g.jsx)(y.a.Item,{href:"/Python",children:"Python"})]}),t&&Object(g.jsx)(v.a.Link,{href:"/profile",children:"Profile"})]}),Object(g.jsx)(v.a,{children:t?Object(g.jsx)(y.a,{title:Object(g.jsxs)("span",{children:["Hello, ",t.fullName," ",Object(g.jsx)("img",{src:t.imageUrl,alt:"profile",style:{width:"24px",height:"24px"}})," "]}),id:"basic-nav-dropdown",children:Object(g.jsx)(y.a.Item,{onClick:t.signOut,children:"Logout"})}):Object(g.jsx)("div",{id:"login-button"})})]})]})})}function k(e){var t=e.user;return Object(g.jsxs)("div",{children:[Object(g.jsx)(w,{user:t}),e.children]})}var C=n(210),S=n(213),P=n(13),W=(n(137),n.p+"static/media/video.321fe793.mp4");var N=function(){var e;return Object(g.jsxs)("div",{className:"home-container",children:[Object(g.jsx)("video",(e={controls:!0,autostart:!0,autoPlay:!0,src:W,type:"video/mp4"},Object(P.a)(e,"autoPlay",!0),Object(P.a)(e,"loop",!0),Object(P.a)(e,"muted",!0),e)),Object(g.jsx)("h1",{children:"TYPING TEST FOR PROGRAMMERS"}),Object(g.jsx)("p",{children:"Improve your typing skills with this website"}),Object(g.jsx)(d.b,{to:"/Language",children:Object(g.jsx)("button1",{children:"Start Typing"})})]})},_=n(211);function F(){var e=f();return Object(g.jsxs)(k,{user:e,children:[Object(g.jsx)(N,{}),Object(g.jsx)(C.a,{children:Object(g.jsxs)(S.a,{children:[Object(g.jsx)(_.a,{sx:{mb:1.5},variant:"h5",color:"#3699cf",children:"What is TypingTest?"}),Object(g.jsx)(_.a,{variant:"p",children:"It's a webapp that helps improve coding speed and gauge coding level. We will include a clock and accuracy in our API. The user can choose the language and difficulty of the coding problems and we want to expand it into a more code learning web by adding some questions so users can think about while they are coding to improve the coding skills."})]})})]})}var I,T,L,E=n(72),M=n(73),J=n(81),B=n(78),A=(n(100),n(53)),D=A.a.div(I||(I=Object(u.a)(["\n  display: inline-block;\n  border-radius: 100%;\n  position: relative;"]))),z=A.a.div(T||(T=Object(u.a)(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center,"]))),G=A.a.circle(L||(L=Object(u.a)(["\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;"]))),V=function(e){var t=e.percentage,n=e.text,c=e.width,r=e.strokeWidth,a=e.fontSize,o=e.fontColor,s=e.fontFamily,i=e.primaryColor,l=e.secondaryColor,j=e.fill,d=e.hidePercentageText,u=e.strokeLinecap,h=c/2-2*r,b=6.28*h,p=b-t/100*b,O="".concat(i[0]).concat(i[1]).replace(/#/g,"");return Object(g.jsxs)(D,{className:"react-super-progressbar__base",style:{height:"".concat(c,"px"),width:"".concat(c,"px")},children:[d?null:Object(g.jsx)(z,{className:"react-super-progressbar__percentage-container",children:Object(g.jsxs)("span",{className:"react-super-progressbars__percentage",style:{fontSize:a,fontFamily:s,color:o},children:[t,"%",Object(g.jsx)("br",{}),n]})}),Object(g.jsxs)("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(g.jsxs)("linearGradient",{id:O,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[Object(g.jsx)("stop",{offset:"0%",stopColor:i[0]}),Object(g.jsx)("stop",{offset:"100%",stopColor:i[1]})]}),Object(g.jsx)("circle",{strokeWidth:r,fill:"transparent",r:h,cx:c/2,cy:c/2,stroke:l,strokeDasharray:"".concat(b," ").concat(b)}),Object(g.jsx)(G,{strokeWidth:r,fill:j,r:h,cx:c/2,cy:c/2,stroke:"url(#".concat(O,")"),strokeLinecap:u,strokeDasharray:"".concat(b," ").concat(b),strokeDashoffset:p})]})]})};V.defaultProps={width:365,strokeWidth:5,strokeLinecap:"round",fontSize:"inherit",fontColor:"inherit",fontFamily:"inherit",primaryColor:["#00BBFF","#92d7f1"],secondaryColor:"transparent",fill:"transparent"};var H=V,R=function(e){Object(J.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(E.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.user,easyProblems:0,mediumProblems:0,hardProblems:0,listOfProblems:[]},e}return Object(M.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href;t+="/",t+=this.state.user.id.toString().substr(0,17),console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({easyProblems:JSON.stringify(t[0].Easy),mediumProblems:JSON.stringify(t[0].Medium),hardProblems:JSON.stringify(t[0].Hard),listOfProblems:JSON.stringify(t[0].problemsSolved)})}))}},{key:"render",value:function(){var e=this.state.easyProblems,t=this.state.mediumProblems,n=this.state.hardProblems;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h1",{children:["Welcome back ",this.state.user.fullName,"!"]}),Object(g.jsxs)("div",{children:[Object(g.jsx)(H,{percentage:(100*e/15).toFixed(1),strokeWidth:7,text:"Easy",primaryColor:["#AAFFB9","#AAFFB9"],secondaryColor:"#F0F0F0"}),Object(g.jsx)(H,{percentage:(100*t/9).toFixed(1),text:"Medium",strokeWidth:7,secondaryColor:"#F0F0F0"}),Object(g.jsx)(H,{percentage:(100*n/6).toFixed(1),text:"Hard",strokeWidth:7,primaryColor:["#EB1547","#EB1547"],secondaryColor:"#F0F0F0"})]}),Object(g.jsx)("br",{})]})}}]),n}(r.Component),U=R;function K(){var e=f();return Object(g.jsx)(k,{user:e,children:Object(g.jsx)(O.a,{children:Object(g.jsx)(U,{user:e})})})}function q(){var e=f();return Object(g.jsx)(k,{user:e,children:Object(g.jsxs)(O.a,{children:[Object(g.jsx)("h1",{children:"This page is private!"}),Object(g.jsx)("div",{children:"(meaning you have to login to view the page)"}),Object(g.jsx)("br",{})]})})}function Y(){return Object(g.jsx)(k,{children:Object(g.jsx)(O.a,{children:Object(g.jsx)("h1",{children:"This page was not found :("})})})}var Q=n(212),X=n(208),Z=(n(143),[{id:1,name:"C++",version:11,link:"/Cpp",dis:"C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language."},{id:2,name:"Python",version:3,link:"/Python",dis:"Python is an interpreted high-level general-purpose programming language."},{id:3,name:"Java",version:17,link:"/Java",dis:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."}].map((function(e){return Object(g.jsx)(d.b,{to:e.link,children:Object(g.jsxs)(X.a,{className:"LangButton",children:[Object(g.jsx)(_.a,{sx:{fontSize:23},color:"#3699cf",gutterBottom:!0,children:e.name}),Object(g.jsxs)(_.a,{sx:{mb:1.5},color:"text.secondary",children:["version.",e.version]}),Object(g.jsx)(_.a,{sx:{mb:1.5},color:"text.secondary",children:e.dis})]})})})));function $(){return Object(g.jsx)(Q.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh"},children:Object(g.jsx)(Q.a,{item:!0,xs:3,children:Z})})}var ee=n.p+"static/media/bg.84c3a67e.jpg";function te(){var e=f();return Object(g.jsx)(k,{user:e,children:Object(g.jsx)("div",{style:{backgroundImage:"url(".concat(ee,")")},children:Object(g.jsx)($,{})})})}var ne=n(15),ce=n.n(ne),re=n(29),ae=n(50),oe=n.n(ae),se=n(22),ie=n(201),le=n(204),je=n(206),de=n(214),ue=n(202),he=n(205),be=n(200),pe=n(203),Oe=Object(se.a)((function(e){return{head:{backgroundColor:"#3699cf",color:e.palette.common.white},body:{fontSize:14}}}))(de.a),ge=Object(se.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(be.a),xe=Object(ie.a)({table:{minWidth:700}}),me=function(){var e=xe(),t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),s=Object(l.a)(o,2),i=s[0],j=s[1],u=function(){var e=Object(re.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a.get("https://code-per-minute.herokuapp.com/codesnippet/Java");case 3:t=e.sent,console.log(t.data),a(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{children:"Java"}),Object(g.jsx)("input",{type:"text",placeholder:"Search here",onChange:function(e){j(e.target.value)}}),Object(g.jsx)(ue.a,{component:pe.a,children:Object(g.jsxs)(le.a,{className:e.table,"aria-label":"customized table",children:[Object(g.jsx)(he.a,{children:Object(g.jsxs)(be.a,{children:[Object(g.jsx)(Oe,{align:"center",children:"Problem Name"}),Object(g.jsx)(Oe,{align:"center",children:"Problem Index"}),Object(g.jsx)(Oe,{align:"center",children:"Skill"})]})}),Object(g.jsx)(je.a,{children:c.filter((function(e){return""===i||e.name.toLowerCase().includes(i.toLowerCase())?e:void 0})).map((function(e,t){return Object(g.jsxs)(ge,{children:[Object(g.jsx)(Oe,{align:"center",children:Object(g.jsx)(d.b,{to:"/Java/".concat(e._id),children:e.name})}),Object(g.jsx)(Oe,{align:"center",component:"th",scope:"row",children:e.difficulty}),Object(g.jsx)(Oe,{align:"center",component:"th",scope:"row",children:e.skillcategory})]},e.name)}))})]})})]})};function fe(){var e=f();return Object(g.jsx)(k,{user:e,children:Object(g.jsx)(O.a,{children:Object(g.jsx)("div",{children:Object(g.jsx)(me,{})})})})}var ve=Object(se.a)((function(e){return{head:{backgroundColor:"#3699cf",color:e.palette.common.white},body:{fontSize:14}}}))(de.a),ye=Object(se.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(be.a),we=Object(ie.a)({table:{minWidth:700}}),ke=function(){var e=we(),t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),s=Object(l.a)(o,2),i=s[0],j=s[1],u=function(){var e=Object(re.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a.get("https://code-per-minute.herokuapp.com/codesnippet/C++");case 3:t=e.sent,console.log(t.data),a(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{children:"C++"}),Object(g.jsx)("input",{type:"text",placeholder:"Search here",onChange:function(e){j(e.target.value)}}),Object(g.jsx)(ue.a,{component:pe.a,children:Object(g.jsxs)(le.a,{className:e.table,"aria-label":"customized table",children:[Object(g.jsx)(he.a,{children:Object(g.jsxs)(be.a,{children:[Object(g.jsx)(ve,{align:"center",children:"Problem Name"}),Object(g.jsx)(ve,{align:"center",children:"Problem Difficulty"}),Object(g.jsx)(ve,{align:"center",children:"Skill"})]})}),Object(g.jsx)(je.a,{children:c.filter((function(e){return""===i||e.name.toLowerCase().includes(i.toLowerCase())?e:void 0})).map((function(e,t){return Object(g.jsxs)(ye,{children:[Object(g.jsx)(ve,{align:"center",children:Object(g.jsx)(d.b,{to:"/Cpp/".concat(e._id),children:e.name})}),Object(g.jsx)(ve,{align:"center",component:"th",scope:"row",children:e.difficulty}),Object(g.jsx)(ve,{align:"center",component:"th",scope:"row",children:e.skillcategory})]},e.name)}))})]})})]})};function Ce(){var e=f();return Object(g.jsx)(k,{user:e,children:Object(g.jsx)(O.a,{children:Object(g.jsx)("div",{children:Object(g.jsx)(ke,{})})})})}var Se=Object(se.a)((function(e){return{head:{backgroundColor:"#3699cf",color:e.palette.common.white},body:{fontSize:14}}}))(de.a),Pe=Object(se.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(be.a),We=Object(ie.a)({table:{minWidth:700}}),Ne=function(){var e=We(),t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),s=Object(l.a)(o,2),i=s[0],j=s[1],u=function(){var e=Object(re.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a.get("https://code-per-minute.herokuapp.com/codesnippet/Python");case 3:t=e.sent,console.log(t.data),a(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{children:"Python"}),Object(g.jsx)("input",{type:"text",placeholder:"Search here",onChange:function(e){j(e.target.value)}}),Object(g.jsx)(ue.a,{component:pe.a,children:Object(g.jsxs)(le.a,{className:e.table,"aria-label":"customized table",children:[Object(g.jsx)(he.a,{children:Object(g.jsxs)(be.a,{children:[Object(g.jsx)(Se,{align:"center",children:"Problem Name"}),Object(g.jsx)(Se,{align:"center",children:"Problem Index"}),Object(g.jsx)(Se,{align:"center",children:"Skill"})]})}),Object(g.jsx)(je.a,{children:c.filter((function(e){return""===i||e.name.toLowerCase().includes(i.toLowerCase())?e:void 0})).map((function(e,t){return Object(g.jsxs)(Pe,{children:[Object(g.jsx)(Se,{align:"center",children:Object(g.jsx)(d.b,{to:"/Python/".concat(e._id),children:e.name})}),Object(g.jsx)(Se,{align:"center",component:"th",scope:"row",children:e.difficulty}),Object(g.jsx)(Se,{align:"center",component:"th",scope:"row",children:e.skillcategory})]},e.name)}))})]})})]})};function _e(){var e=f();return Object(g.jsx)(k,{user:e,children:Object(g.jsx)(O.a,{children:Object(g.jsx)("div",{children:Object(g.jsx)(Ne,{})})})})}var Fe=n(11),Ie=function(e){Object(J.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(E.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={text:e.props.text,textID:e.props.textID,inputValue:"",lastLetter:"",words:[],completedWords:[],completed:!1,startTime:void 0,timeElapsed:0,wpm:0,started:!1,progress:0,lineCount:0,lineWCompleted:0},e.setText=function(){var t=e.state.text.split(" ").filter((function(e){return""!=e}));console.log(t),e.setState({words:t,completedWords:[]})},e.startGame=function(){e.setText(),e.setState({started:!0,startTime:Date.now(),completed:!1,progress:0,lineCount:0,lineWCompleted:0})},e.handleChange=function(t){var n=e.state,c=n.words,r=n.completedWords,a=n.lineWCompleted,o=t.target.value,s=o[o.length-1],i=c[0];if(console.log(i,"currentWord")," "===s){if(o.trim()===i){var l=Object(Fe.a)(c.slice(1));console.log(l,"newWords"),console.log(l.length,"newWords.length");var j=[].concat(Object(Fe.a)(r),[i]);console.log(j,"newCompletedWords"),console.log("----------------");var d=a+1,u=j.length/(l.length+j.length)*100;e.setState({words:l,completedWords:j,inputValue:"",completed:0===l.length,progress:u,lineWCompleted:d})}}else e.setState({inputValue:o,lastLetter:s}),console.log(e.state.inputValue,"this.state.inputValue"),console.log(e.state.lastLetter,"this.state.lastLetter"),console.log("================================");e.calculateWPM()},e._handleKeyPress=function(t){var n=t.target.value;if("Enter"===t.key){var c=e.state,r=c.words,a=c.completedWords,o=c.lineCount,s=(c.lineWCompleted,r[0]);if(console.log(s,"currentWord"),s==n+"\n"){var i=Object(Fe.a)(r.slice(1));console.log(i,"newWords"),console.log(i.length,"newWords.length");var l=[].concat(Object(Fe.a)(a),[s]);console.log(l,"newCompletedWords"),console.log("----------------");var j=o+1,d=l.length/(i.length+l.length)*100;e.setState({words:i,completedWords:l,inputValue:"",completed:0===i.length,progress:d,lineCount:j,lineWCompleted:0})}}e.calculateWPM()},e.calculateWPM=function(){var t=e.state,n=t.startTime,c=t.completedWords,r=Date.now(),a=(r-n)/1e3/60;console.log(r,"now"),console.log(n,"startTime"),console.log(a,"diff"),console.log("**************");var o=Math.ceil(c.reduce((function(e,t){return e+t.length}),0)/5);console.log(c,"completedWords"),console.log(o,"wordsTyped"),console.log("+=+=+=+=+=+=");var s=Math.ceil(o/a);e.setState({wpm:s,timeElapsed:a})},e}return Object(M.a)(n,[{key:"componentDidMount",value:function(){console.log(this.state.text)}},{key:"render",value:function(){var e=this.state,t=e.text,n=e.inputValue,c=(e.completedWords,e.wpm),r=e.timeElapsed,a=e.started,o=e.completed,s=e.progress,i=e.lineCount,l=e.lineWCompleted;return a?t?o?Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("h2",{children:["Your WPM is ",Object(g.jsx)("strong",{children:c})]}),Object(g.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Play again"})]}):Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"wpm",children:[Object(g.jsx)("strong",{children:"WPM: "}),c,Object(g.jsx)("br",{}),Object(g.jsx)("strong",{children:"Time: "}),Math.floor(60*r),"s"]}),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h4",{children:"Type the text below"}),Object(g.jsx)("progress",{value:s,max:"100"}),Object(g.jsx)("p",{className:"text",children:t.split("\n").map((function(e,t){for(var c=0,r=0;r<e.length&&" "==e[r];r++)c++;return Object(g.jsx)("div",{children:e.split(" ").map((function(e,r){var a=!1,o=!1;return(l+c>r&&t==i||t<i)&&(a=!0),l+c===r&&i==t&&(o=!0),Object(g.jsx)("span",{className:"word \n                                  ".concat(a&&"green"," \n                                  ").concat(o&&"underline"),children:e.split("").map((function(e,a){var o=r===l+c&&t==i,s=e!==n[a]&&t==i,j=a<n.length&&t==i;return Object(g.jsx)("span",{className:"letter ".concat(o&&j?s?"red":"green":""),children:e},a)}))},r)}))},t)}))}),Object(g.jsx)("input",{type:"text",onChange:this.handleChange,onKeyPress:this._handleKeyPress,value:n,autoFocus:!0})]})]}):Object(g.jsx)("p",{children:"Loading..."}):Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h2",{children:"Welcome to the Typing game"}),Object(g.jsxs)("p",{children:[Object(g.jsx)("strong",{children:"Rules:"})," ",Object(g.jsx)("br",{}),"Type in the input field the highlighted word. ",Object(g.jsx)("br",{}),"The correct words will turn ",Object(g.jsx)("span",{className:"green",children:"green"}),".",Object(g.jsx)("br",{}),"Incorrect letters will turn ",Object(g.jsx)("span",{className:"red",children:"red"}),".",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),"Have fun!"]}),Object(g.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Start game"})]})}}]),n}(r.Component),Te=Ie;function Le(e){Object(r.useEffect)((function(){b(),console.log(e.match.params._id)}),[]);var t=Object(r.useState)([]),n=Object(l.a)(t,2),c=(n[0],n[1]),a=Object(r.useState)(""),o=Object(l.a)(a,2),s=o[0],i=o[1],j=Object(r.useState)(),d=Object(l.a)(j,2),u=d[0],h=d[1],b=function(){var t=Object(re.a)(ce.a.mark((function t(){var n,r,a,o;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://code-per-minute.herokuapp.com/codesnippet/Java");case 2:return n=t.sent,t.next=5,n.json();case 5:for(r=t.sent,c(r),console.log(r),console.log(r[0]),console.log(r[0].code),console.log(s),console.log(typeof s),a=0;a<r.length;a++)(o=r[a])._id===e.match.params._id&&(console.log(o),i(o.code),h(o._id));console.log(u);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(""!==s){var p=f();return Object(g.jsx)(k,{user:p,children:Object(g.jsx)(Te,{text:s,textID:u})})}return Object(g.jsx)("div",{})}function Ee(e){Object(r.useEffect)((function(){b(),console.log(e.match.params._id)}),[]);var t=Object(r.useState)([]),n=Object(l.a)(t,2),c=(n[0],n[1]),a=Object(r.useState)(""),o=Object(l.a)(a,2),s=o[0],i=o[1],j=Object(r.useState)(),d=Object(l.a)(j,2),u=d[0],h=d[1],b=function(){var t=Object(re.a)(ce.a.mark((function t(){var n,r,a,o;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://code-per-minute.herokuapp.com/codesnippet/C++");case 2:return n=t.sent,t.next=5,n.json();case 5:for(r=t.sent,c(r),console.log(e.match.params._id),a=0;a<r.length;a++)(o=r[a])._id===e.match.params._id&&(console.log(o),i(o.code),console.log(o.code),h(o._id));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(console.log(u),""!==s){var p=f();return Object(g.jsx)(k,{user:p,children:Object(g.jsx)(Te,{text:s,textID:u})})}return Object(g.jsx)("div",{})}function Me(e){Object(r.useEffect)((function(){b(),console.log(e.match.params._id)}),[]);var t=Object(r.useState)([]),n=Object(l.a)(t,2),c=(n[0],n[1]),a=Object(r.useState)(""),o=Object(l.a)(a,2),s=o[0],i=o[1],j=Object(r.useState)(),d=Object(l.a)(j,2),u=d[0],h=d[1],b=function(){var t=Object(re.a)(ce.a.mark((function t(){var n,r,a,o;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://code-per-minute.herokuapp.com/codesnippet/Python");case 2:return n=t.sent,t.next=5,n.json();case 5:for(r=t.sent,c(r),console.log(r),console.log(r[0]),console.log(r[0].code),console.log(s),console.log(typeof s),a=0;a<r.length;a++)(o=r[a])._id===e.match.params._id&&(console.log(o),i(o.code),h(o._id));console.log(u);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(""!==s){var p=f();return Object(g.jsx)(k,{user:p,children:Object(g.jsx)(Te,{text:s,textID:u})})}return Object(g.jsx)("div",{})}var Je=["component"];function Be(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],a=document.createElement("script");function o(e){var t=e.component,c=Object(i.a)(e,Je);return Object(g.jsx)(j.a,Object(s.a)(Object(s.a)({},c),{},{component:n?t:q}))}return a.src="https://apis.google.com/js/platform.js",a.onload=function(){return window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"361825927079-ug2rgcfc6152dpahls5uhq0nntiobr5f.apps.googleusercontent.com"}).then((function(){var e=window.gapi.auth2.getAuthInstance(),t=e.isSignedIn.get();c(t),e.isSignedIn.listen((function(e){c(e)}))}))})),void window.gapi.load("signin2",(function(){window.gapi.signin2.render("login-button",{theme:"dark"})}))},document.body.appendChild(a),null!==n?Object(g.jsx)(d.a,{children:Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{exact:!0,path:"/",component:F}),Object(g.jsx)(o,{exact:!0,path:"/profile",component:K}),Object(g.jsx)(j.a,{exact:!0,path:"/language",component:te}),Object(g.jsx)(j.a,{path:"/java",exact:!0,component:fe}),Object(g.jsx)(j.a,{path:"/cpp",exact:!0,component:Ce}),Object(g.jsx)(j.a,{path:"/python",exact:!0,component:_e}),Object(g.jsx)(j.a,{path:"/java/:_id",component:Le}),Object(g.jsx)(j.a,{path:"/cpp/:_id",component:Ee}),Object(g.jsx)(j.a,{path:"/python/:_id",component:Me}),Object(g.jsx)(j.a,{path:"/",component:Y})]})}):Object(g.jsx)(m,{})}n(162);o.a.render(Object(g.jsx)(Be,{}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.86d555b5.chunk.js.map