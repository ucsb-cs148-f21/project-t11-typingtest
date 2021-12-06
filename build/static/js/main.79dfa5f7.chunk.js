(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{100:function(e,t,n){},127:function(e,t,n){},137:function(e,t,n){},143:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n(41),o=n.n(a),s=(n(127),n(87)),i=n(118),l=n(9),j=n(12),d=n(28),u=n(51),h=n(114),b=n(86),p=n(43),O=n(18),x=n(1),g=b.a.div(c||(c=Object(u.a)(["\n  height: 100vh;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1);\n"])));function m(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p.a,{bg:"light",expand:"lg",children:Object(x.jsx)(O.a,{children:Object(x.jsx)(p.a.Brand,{href:"/",children:"Code Per Minute"})})}),Object(x.jsx)(g,{children:Object(x.jsx)(h.a,{animation:"border",role:"status"})})]})}function f(){if(void 0===window.gapi||void 0===window.gapi.auth2)return null;var e=window.gapi.auth2.getAuthInstance();if(!1===e.isSignedIn.get())return null;var t=e.currentUser.get().getBasicProfile();return{id:t.getId(),fullName:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName(),imageUrl:t.getImageUrl(),email:t.getEmail(),signOut:e.signOut}}var v=n(61),y=n(46);function w(e){var t=e.user;return Object(x.jsx)(p.a,{"data-testid":"NavBar",bg:"light",expand:"lg",sticky:"top",children:Object(x.jsxs)(O.a,{children:[Object(x.jsx)(p.a.Brand,{href:"/",children:"CodePerMinute"}),Object(x.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsxs)(p.a.Collapse,{id:"basic-navbar-nav",children:[Object(x.jsxs)(v.a,{className:"mr-auto",children:[Object(x.jsx)(v.a.Link,{href:"/",children:"Home"}),Object(x.jsxs)(y.a,{title:"Language",children:[Object(x.jsx)(y.a.Item,{href:"/Cpp",children:"C++"}),Object(x.jsx)(y.a.Item,{href:"/Java",children:"Java"}),Object(x.jsx)(y.a.Item,{href:"/Python",children:"Python"})]}),t&&Object(x.jsx)(v.a.Link,{href:"/profile",children:"Profile"})]}),Object(x.jsx)(v.a,{children:t?Object(x.jsx)(y.a,{title:Object(x.jsxs)("span",{children:["Hello, ",t.fullName," ",Object(x.jsx)("img",{src:t.imageUrl,alt:"profile",style:{width:"24px",height:"24px"}})," "]}),id:"basic-nav-dropdown",children:Object(x.jsx)(y.a.Item,{onClick:t.signOut,children:"Logout"})}):Object(x.jsx)("div",{id:"login-button"})})]})]})})}function C(e){var t=e.user;return Object(x.jsxs)("div",{children:[Object(x.jsx)(w,{user:t}),e.children]})}var k=n(210),S=n(213),P=n(13),W=(n(137),n.p+"static/media/video.321fe793.mp4");var N=function(){var e;return Object(x.jsxs)("div",{className:"home-container",children:[Object(x.jsx)("video",(e={controls:!0,autostart:!0,autoPlay:!0,src:W,type:"video/mp4"},Object(P.a)(e,"autoPlay",!0),Object(P.a)(e,"loop",!0),Object(P.a)(e,"muted",!0),e)),Object(x.jsx)("h1",{children:"TYPING TEST FOR PROGRAMMERS"}),Object(x.jsx)("p",{children:"Improve your typing skills with this website"}),Object(x.jsx)(d.b,{to:"/Language",children:Object(x.jsx)("button1",{children:"Start Typing"})})]})},I=n(211);function D(){var e=f();return Object(x.jsxs)(C,{user:e,children:[Object(x.jsx)(N,{}),Object(x.jsx)(k.a,{children:Object(x.jsxs)(S.a,{children:[Object(x.jsx)(I.a,{sx:{mb:1.5},variant:"h5",color:"#3699cf",children:"What is TypingTest?"}),Object(x.jsx)(I.a,{variant:"p",children:"It's a webapp that helps improve coding speed and gauge coding level. We will include a clock and accuracy in our API. The user can choose the language and difficulty of the coding problems and we want to expand it into a more code learning web by adding some questions so users can think about while they are coding to improve the coding skills."})]})})]})}var _,E,T,F=n(72),L=n(73),M=n(81),A=n(78),J=(n(100),n(53)),B=J.a.div(_||(_=Object(u.a)(["\n  display: inline-block;\n  border-radius: 100%;\n  position: relative;"]))),z=J.a.div(E||(E=Object(u.a)(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center,"]))),H=J.a.circle(T||(T=Object(u.a)(["\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;"]))),G=function(e){var t=e.percentage,n=e.text,c=e.width,r=e.strokeWidth,a=e.fontSize,o=e.fontColor,s=e.fontFamily,i=e.primaryColor,l=e.secondaryColor,j=e.fill,d=e.hidePercentageText,u=e.strokeLinecap,h=c/2-2*r,b=6.28*h,p=b-t/100*b,O="".concat(i[0]).concat(i[1]).replace(/#/g,"");return Object(x.jsxs)(B,{className:"react-super-progressbar__base",style:{height:"".concat(c,"px"),width:"".concat(c,"px")},children:[d?null:Object(x.jsx)(z,{className:"react-super-progressbar__percentage-container",children:Object(x.jsxs)("span",{className:"react-super-progressbars__percentage",style:{fontSize:a,fontFamily:s,color:o},children:[t,"%",Object(x.jsx)("br",{}),n]})}),Object(x.jsxs)("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(x.jsxs)("linearGradient",{id:O,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[Object(x.jsx)("stop",{offset:"0%",stopColor:i[0]}),Object(x.jsx)("stop",{offset:"100%",stopColor:i[1]})]}),Object(x.jsx)("circle",{strokeWidth:r,fill:"transparent",r:h,cx:c/2,cy:c/2,stroke:l,strokeDasharray:"".concat(b," ").concat(b)}),Object(x.jsx)(H,{strokeWidth:r,fill:j,r:h,cx:c/2,cy:c/2,stroke:"url(#".concat(O,")"),strokeLinecap:u,strokeDasharray:"".concat(b," ").concat(b),strokeDashoffset:p})]})]})};G.defaultProps={width:365,strokeWidth:5,strokeLinecap:"round",fontSize:"inherit",fontColor:"inherit",fontFamily:"inherit",primaryColor:["#00BBFF","#92d7f1"],secondaryColor:"transparent",fill:"transparent"};var V=G,R=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(F.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.user,easyProblems:0,mediumProblems:0,hardProblems:0,listOfProblems:[]},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href;t+="/",t+=this.state.user.id.toString().substr(0,17),console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({easyProblems:JSON.stringify(t[0].Easy),mediumProblems:JSON.stringify(t[0].Medium),hardProblems:JSON.stringify(t[0].Hard),listOfProblems:JSON.stringify(t[0].problemsSolved)})}))}},{key:"render",value:function(){var e=this.state.easyProblems,t=this.state.mediumProblems,n=this.state.hardProblems;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h1",{children:["Welcome back ",this.state.user.fullName,"!"]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(V,{percentage:(100*e/15).toFixed(1),strokeWidth:7,text:"Easy",primaryColor:["#AAFFB9","#AAFFB9"],secondaryColor:"#F0F0F0"}),Object(x.jsx)(V,{percentage:(100*t/9).toFixed(1),text:"Medium",strokeWidth:7,secondaryColor:"#F0F0F0"}),Object(x.jsx)(V,{percentage:(100*n/6).toFixed(1),text:"Hard",strokeWidth:7,primaryColor:["#EB1547","#EB1547"],secondaryColor:"#F0F0F0"})]}),Object(x.jsx)("br",{})]})}}]),n}(r.Component),Y=R;function U(){var e=f();return Object(x.jsx)(C,{user:e,children:Object(x.jsx)(O.a,{children:Object(x.jsx)(Y,{user:e})})})}function K(){var e=f();return Object(x.jsx)(C,{user:e,children:Object(x.jsxs)(O.a,{children:[Object(x.jsx)("h1",{children:"This page is private!"}),Object(x.jsx)("div",{children:"(meaning you have to login to view the page)"}),Object(x.jsx)("br",{})]})})}function q(){return Object(x.jsx)(C,{children:Object(x.jsx)(O.a,{children:Object(x.jsx)("h1",{children:"This page was not found :("})})})}var Q=n(212),X=n(208),Z=(n(143),[{id:1,name:"C++",version:11,link:"/Cpp",dis:"C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language."},{id:2,name:"Python",version:3,link:"/Python",dis:"Python is an interpreted high-level general-purpose programming language."},{id:3,name:"Java",version:17,link:"/Java",dis:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible."}].map((function(e){return Object(x.jsx)(d.b,{to:e.link,children:Object(x.jsxs)(X.a,{className:"LangButton",children:[Object(x.jsx)(I.a,{sx:{fontSize:23},color:"#3699cf",gutterBottom:!0,children:e.name}),Object(x.jsxs)(I.a,{sx:{mb:1.5},color:"text.secondary",children:["version.",e.version]}),Object(x.jsx)(I.a,{sx:{mb:1.5},color:"text.secondary",children:e.dis})]})})})));function $(){return Object(x.jsx)(Q.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh"},children:Object(x.jsx)(Q.a,{item:!0,xs:3,children:Z})})}var ee=n.p+"static/media/bg.84c3a67e.jpg";function te(){var e=f();return Object(x.jsx)(C,{user:e,children:Object(x.jsx)("div",{style:{backgroundImage:"url(".concat(ee,")")},children:Object(x.jsx)($,{})})})}var ne=n(15),ce=n.n(ne),re=n(29),ae=n(50),oe=n.n(ae),se=n(22),ie=n(201),le=n(204),je=n(206),de=n(214),ue=n(202),he=n(205),be=n(200),pe=n(203),Oe=Object(se.a)((function(e){return{head:{backgroundColor:"#3699cf",color:e.palette.common.white},body:{fontSize:14}}}))(de.a),xe=Object(se.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(be.a),ge=Object(ie.a)({table:{minWidth:700}}),me=function(){var e=ge(),t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),s=Object(l.a)(o,2),i=s[0],j=s[1],u=function(){var e=Object(re.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a.get("https://code-per-minute.herokuapp.com/codesnippet/Java");case 3:t=e.sent,console.log(t.data),a(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{children:"Java"}),Object(x.jsx)("input",{type:"text",placeholder:"Search here",onChange:function(e){j(e.target.value)}}),Object(x.jsx)(ue.a,{component:pe.a,children:Object(x.jsxs)(le.a,{className:e.table,"aria-label":"customized table",children:[Object(x.jsx)(he.a,{children:Object(x.jsxs)(be.a,{children:[Object(x.jsx)(Oe,{align:"center",children:"Problem Name"}),Object(x.jsx)(Oe,{align:"center",children:"Problem Index"}),Object(x.jsx)(Oe,{align:"center",children:"Skill"})]})}),Object(x.jsx)(je.a,{children:c.filter((function(e){return""===i||e.name.toLowerCase().includes(i.toLowerCase())?e:void 0})).map((function(e,t){return Object(x.jsxs)(xe,{children:[Object(x.jsx)(Oe,{align:"center",children:Object(x.jsx)(d.b,{to:"/Java/".concat(e._id),children:e.name})}),Object(x.jsx)(Oe,{align:"center",component:"th",scope:"row",children:e.difficulty}),Object(x.jsx)(Oe,{align:"center",component:"th",scope:"row",children:e.skillcategory})]},e.name)}))})]})})]})};function fe(){var e=f();return Object(x.jsx)(C,{user:e,children:Object(x.jsx)(O.a,{children:Object(x.jsx)("div",{children:Object(x.jsx)(me,{})})})})}var ve=Object(se.a)((function(e){return{head:{backgroundColor:"#3699cf",color:e.palette.common.white},body:{fontSize:14}}}))(de.a),ye=Object(se.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(be.a),we=Object(ie.a)({table:{minWidth:700}}),Ce=function(){var e=we(),t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),s=Object(l.a)(o,2),i=s[0],j=s[1],u=function(){var e=Object(re.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a.get("https://code-per-minute.herokuapp.com/codesnippet/C++");case 3:t=e.sent,console.log(t.data),a(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{children:"C++"}),Object(x.jsx)("input",{type:"text",placeholder:"Search here",onChange:function(e){j(e.target.value)}}),Object(x.jsx)(ue.a,{component:pe.a,children:Object(x.jsxs)(le.a,{className:e.table,"aria-label":"customized table",children:[Object(x.jsx)(he.a,{children:Object(x.jsxs)(be.a,{children:[Object(x.jsx)(ve,{align:"center",children:"Problem Name"}),Object(x.jsx)(ve,{align:"center",children:"Problem Difficulty"}),Object(x.jsx)(ve,{align:"center",children:"Skill"})]})}),Object(x.jsx)(je.a,{children:c.filter((function(e){return""===i||e.name.toLowerCase().includes(i.toLowerCase())?e:void 0})).map((function(e,t){return Object(x.jsxs)(ye,{children:[Object(x.jsx)(ve,{align:"center",children:Object(x.jsx)(d.b,{to:"/Cpp/".concat(e._id),children:e.name})}),Object(x.jsx)(ve,{align:"center",component:"th",scope:"row",children:e.difficulty}),Object(x.jsx)(ve,{align:"center",component:"th",scope:"row",children:e.skillcategory})]},e.name)}))})]})})]})};function ke(){var e=f();return Object(x.jsx)(C,{user:e,children:Object(x.jsx)(O.a,{children:Object(x.jsx)("div",{children:Object(x.jsx)(Ce,{})})})})}var Se=Object(se.a)((function(e){return{head:{backgroundColor:"#3699cf",color:e.palette.common.white},body:{fontSize:14}}}))(de.a),Pe=Object(se.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(be.a),We=Object(ie.a)({table:{minWidth:700}}),Ne=function(){var e=We(),t=Object(r.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),s=Object(l.a)(o,2),i=s[0],j=s[1],u=function(){var e=Object(re.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.a.get("https://code-per-minute.herokuapp.com/codesnippet/Python");case 3:t=e.sent,console.log(t.data),a(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){u()}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{children:"Python"}),Object(x.jsx)("input",{type:"text",placeholder:"Search here",onChange:function(e){j(e.target.value)}}),Object(x.jsx)(ue.a,{component:pe.a,children:Object(x.jsxs)(le.a,{className:e.table,"aria-label":"customized table",children:[Object(x.jsx)(he.a,{children:Object(x.jsxs)(be.a,{children:[Object(x.jsx)(Se,{align:"center",children:"Problem Name"}),Object(x.jsx)(Se,{align:"center",children:"Problem Index"}),Object(x.jsx)(Se,{align:"center",children:"Skill"})]})}),Object(x.jsx)(je.a,{children:c.filter((function(e){return""===i||e.name.toLowerCase().includes(i.toLowerCase())?e:void 0})).map((function(e,t){return Object(x.jsxs)(Pe,{children:[Object(x.jsx)(Se,{align:"center",children:Object(x.jsx)(d.b,{to:"/Python/".concat(e._id),children:e.name})}),Object(x.jsx)(Se,{align:"center",component:"th",scope:"row",children:e.difficulty}),Object(x.jsx)(Se,{align:"center",component:"th",scope:"row",children:e.skillcategory})]},e.name)}))})]})})]})};function Ie(){var e=f();return Object(x.jsx)(C,{user:e,children:Object(x.jsx)(O.a,{children:Object(x.jsx)("div",{children:Object(x.jsx)(Ne,{})})})})}var De=n(11),_e=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(F.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={text:e.props.text,textID:e.props.textID,userID:e.props.userID,inputValue:"",lastLetter:"",words:[],completedWords:[],completed:!1,startTime:void 0,timeElapsed:0,wpm:0,started:!1,progress:0,lineCount:0,lineWCompleted:0},e.setText=function(){var t=e.state.text.replace(/\n/g,"\n ").split(" ").filter((function(e){return""!=e}));console.log(t),e.setState({words:t,completedWords:[]})},e.startGame=function(){e.setText(),e.setState({started:!0,startTime:Date.now(),completed:!1,progress:0,lineCount:0,lineWCompleted:0})},e.handleChange=function(t){var n=e.state,c=n.words,r=n.completedWords,a=n.lineWCompleted,o=t.target.value,s=o[o.length-1],i=c[0];if(console.log(i,"currentWord")," "===s){if(o.trim()===i){var l=Object(De.a)(c.slice(1));console.log(l,"newWords"),console.log(l.length,"newWords.length");var j=[].concat(Object(De.a)(r),[i]);console.log(j,"newCompletedWords"),console.log("----------------");var d=a+1,u=j.length/(l.length+j.length)*100;e.setState({words:l,completedWords:j,inputValue:"",completed:0===l.length,progress:u,lineWCompleted:d})}}else e.setState({inputValue:o,lastLetter:s}),console.log(e.state.inputValue,"this.state.inputValue"),console.log(e.state.lastLetter,"this.state.lastLetter"),console.log("================================");e.calculateWPM()},e._handleKeyPress=function(t){var n=t.target.value;if("Enter"===t.key){var c=e.state,r=c.words,a=c.completedWords,o=c.lineCount,s=(c.lineWCompleted,r[0]);if(console.log(s,"currentWord"),s==n+"\n"){var i=Object(De.a)(r.slice(1));console.log(i,"newWords"),console.log(i.length,"newWords.length");var l=[].concat(Object(De.a)(a),[s]);console.log(l,"newCompletedWords"),console.log("----------------");var j=o+1,d=l.length/(i.length+l.length)*100;e.setState({words:i,completedWords:l,inputValue:"",completed:0===i.length,progress:d,lineCount:j,lineWCompleted:0})}}e.calculateWPM()},e.calculateWPM=function(){var t=e.state,n=t.startTime,c=t.completedWords,r=Date.now(),a=(r-n)/1e3/60;console.log(r,"now"),console.log(n,"startTime"),console.log(a,"diff"),console.log("**************");var o=Math.ceil(c.reduce((function(e,t){return e+t.length}),0)/5);console.log(c,"completedWords"),console.log(o,"wordsTyped"),console.log("+=+=+=+=+=+=");var s=Math.ceil(o/a);e.setState({wpm:s,timeElapsed:a})},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.text,n=e.inputValue,c=(e.completedWords,e.wpm),r=e.timeElapsed,a=e.started,o=e.completed,s=e.progress,i=e.lineCount,l=e.lineWCompleted;if(!a)return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{children:"Welcome to the Typing game"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Rules:"})," ",Object(x.jsx)("br",{}),"Type in the input field the highlighted word. ",Object(x.jsx)("br",{}),"The correct words will turn ",Object(x.jsx)("span",{className:"green",children:"green"}),".",Object(x.jsx)("br",{}),"Incorrect letters will turn ",Object(x.jsx)("span",{className:"red",children:"red"}),".",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Have fun!"]}),Object(x.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Start game"})]});if(!t)return Object(x.jsx)("p",{children:"Loading..."});if(o){var j=window.location.href;console.log(j);var d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:this.state.userID.substr(0,17),problemID:this.state.textID})};return fetch(j,d).catch((function(e){return console.error(e)})),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("h2",{children:["Your WPM is ",Object(x.jsx)("strong",{children:c})]}),Object(x.jsx)("button",{className:"start-btn",onClick:this.startGame,children:"Play again"})]})}return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"wpm",children:[Object(x.jsx)("strong",{children:"WPM: "}),c,Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"Time: "}),Math.floor(60*r),"s"]}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h4",{children:"Type the text below"}),Object(x.jsx)("progress",{value:s,max:"100"}),Object(x.jsx)("p",{className:"text",children:t.split("\n").map((function(e,t){for(var c=0,r=0;r<e.length&&" "==e[r];r++)c++;return Object(x.jsx)("div",{children:e.split(" ").map((function(e,r){var a=!1,o=!1;return(l+c>r&&t==i||t<i)&&(a=!0),l+c===r&&i==t&&(o=!0),Object(x.jsx)("span",{className:"word \n                                  ".concat(a&&"green"," \n                                  ").concat(o&&"underline"),children:e.split("").map((function(e,a){var o=r===l+c&&t==i,s=e!==n[a]&&t==i,j=a<n.length&&t==i;return Object(x.jsx)("span",{className:"letter ".concat(o&&j?s?"red":"green":""),children:e},a)}))},r)}))},t)}))}),Object(x.jsx)("input",{type:"text",onChange:this.handleChange,onKeyPress:this._handleKeyPress,value:n,autoFocus:!0})]})]})}}]),n}(r.Component),Ee=_e;function Te(e){Object(r.useEffect)((function(){b()}),[]);var t=Object(r.useState)([]),n=Object(l.a)(t,2),c=(n[0],n[1]),a=Object(r.useState)(""),o=Object(l.a)(a,2),s=o[0],i=o[1],j=Object(r.useState)(""),d=Object(l.a)(j,2),u=d[0],h=d[1],b=function(){var t=Object(re.a)(ce.a.mark((function t(){var n,r,a,o;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://code-per-minute.herokuapp.com/codesnippet/Java");case 2:return n=t.sent,t.next=5,n.json();case 5:for(r=t.sent,c(r),console.log("MATCHES:",e.match.params._id),a=0;a<r.length;a++)(o=r[a])._id==e.match.params._id&&(i(o.code),h(o._id),console.log(o._id));console.log(u);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(console.log("CODE1:"+s),""!==s&&""!=u){var p=f();return null==p?Object(x.jsx)("div",{children:"You must login peasant!"}):(console.log("CODE2:"+s),console.log("ID: "+u),Object(x.jsxs)(C,{user:p,children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(Ee,{text:s,textID:u,userID:p.id})]}))}return Object(x.jsx)("div",{})}function Fe(e){Object(r.useEffect)((function(){b()}),[]);var t=Object(r.useState)([]),n=Object(l.a)(t,2),c=(n[0],n[1]),a=Object(r.useState)(""),o=Object(l.a)(a,2),s=o[0],i=o[1],j=Object(r.useState)(""),d=Object(l.a)(j,2),u=d[0],h=d[1],b=function(){var t=Object(re.a)(ce.a.mark((function t(){var n,r,a,o;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://code-per-minute.herokuapp.com/codesnippet/C++");case 2:return n=t.sent,t.next=5,n.json();case 5:for(r=t.sent,c(r),console.log("MATCHES:",e.match.params._id),a=0;a<r.length;a++)(o=r[a])._id==e.match.params._id&&(i(o.code),h(o._id),console.log(o._id));console.log(u);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(console.log("CODE1:"+s),""!==s&&""!=u){var p=f();return null==p?Object(x.jsx)("div",{children:"You must login peasant!"}):(console.log("CODE2:"+s),console.log("ID: "+u),Object(x.jsxs)(C,{user:p,children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(Ee,{text:s,textID:u,userID:p.id})]}))}return Object(x.jsx)("div",{})}function Le(e){Object(r.useEffect)((function(){b()}),[]);var t=Object(r.useState)([]),n=Object(l.a)(t,2),c=(n[0],n[1]),a=Object(r.useState)(""),o=Object(l.a)(a,2),s=o[0],i=o[1],j=Object(r.useState)(""),d=Object(l.a)(j,2),u=d[0],h=d[1],b=function(){var t=Object(re.a)(ce.a.mark((function t(){var n,r,a,o;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://code-per-minute.herokuapp.com/codesnippet/Python");case 2:return n=t.sent,t.next=5,n.json();case 5:for(r=t.sent,c(r),console.log("MATCHES:",e.match.params._id),a=0;a<r.length;a++)(o=r[a])._id==e.match.params._id&&(i(o.code),h(o._id),console.log(o._id));console.log(u);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(console.log("CODE1:"+s),""!==s&&""!=u){var p=f();return null==p?Object(x.jsx)("div",{children:"You must login peasant!"}):(console.log("CODE2:"+s),console.log("ID: "+u),Object(x.jsxs)(C,{user:p,children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(Ee,{text:s,textID:u,userID:p.id})]}))}return Object(x.jsx)("div",{})}var Me=["component"];function Ae(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],a=document.createElement("script");function o(e){var t=e.component,c=Object(i.a)(e,Me);return Object(x.jsx)(j.a,Object(s.a)(Object(s.a)({},c),{},{component:n?t:K}))}return a.src="https://apis.google.com/js/platform.js",a.onload=function(){return window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"361825927079-ug2rgcfc6152dpahls5uhq0nntiobr5f.apps.googleusercontent.com"}).then((function(){var e=window.gapi.auth2.getAuthInstance(),t=e.isSignedIn.get();c(t),e.isSignedIn.listen((function(e){c(e)}))}))})),void window.gapi.load("signin2",(function(){window.gapi.signin2.render("login-button",{theme:"dark"})}))},document.body.appendChild(a),null!==n?Object(x.jsx)(d.a,{children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/",component:D}),Object(x.jsx)(o,{exact:!0,path:"/profile",component:U}),Object(x.jsx)(j.a,{exact:!0,path:"/language",component:te}),Object(x.jsx)(j.a,{path:"/java",exact:!0,component:fe}),Object(x.jsx)(j.a,{path:"/cpp",exact:!0,component:ke}),Object(x.jsx)(j.a,{path:"/python",exact:!0,component:Ie}),Object(x.jsx)(j.a,{path:"/java/:_id",component:Te}),Object(x.jsx)(j.a,{path:"/cpp/:_id",component:Fe}),Object(x.jsx)(j.a,{path:"/python/:_id",component:Le}),Object(x.jsx)(j.a,{path:"/",component:q})]})}):Object(x.jsx)(m,{})}n(162);o.a.render(Object(x.jsx)(Ae,{}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.79dfa5f7.chunk.js.map