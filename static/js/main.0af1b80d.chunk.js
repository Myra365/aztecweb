(this.webpackJsonpaztecweb=this.webpackJsonpaztecweb||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),s=a.n(r),c=(a(30),a(31),a(1)),i=a(2),o=a(4),m=a(3),u=a(12),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("h1",{className:"new-font title tc f-headline lh-solid"},"Mrs. Sanchez Classroom")),l.a.createElement("nav",{className:"mb3 bb tc mw7 center"},l.a.createElement(u.b,{className:"nav-font f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-font f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l",to:"/Option"},"Game"),l.a.createElement(u.b,{className:"nav-font f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l",to:"/Resources"},"Resources"),l.a.createElement(u.b,{className:"nav-font f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l",to:"/Contact"},"Contact")))}}]),a}(l.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/robertom123/Quote/master/Quote.json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({isLoaded:!0,items:t[e.props.rando].text})}))}},{key:"render",value:function(){return this.state.isLoaded?l.a.createElement("div",null,l.a.createElement("h3",{className:"tc bb bw2"},"Wall of Encouragement"),l.a.createElement("p",{className:"tc f5 f4-m f3-l lh-copy measure mt0"},this.state.items)):l.a.createElement("div",null,"Loading...")}}]),a}(l.a.Component),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{className:"tc bb bw2"},"News"),l.a.createElement("p",{className:"tc f5 f4-m f3-l lh-copy measure mt0"},l.a.createElement("b",null,"School Begins in August 10, 2020")),l.a.createElement("p",{className:"tc f5 f4-m f3-l lh-copy measure mt0"},l.a.createElement("b",null,"La escuela comienza el 10 de Agosto de 2020")),l.a.createElement("p",{className:"tc f5 f4-m f3-l lh-copy measure mt0"},"School will begin virtually, I will contact you to provide you with further details."),l.a.createElement("p",{className:"tc f5 f4-m f3-l lh-copy measure mt0"},"La escuela comenzara virtualmente, yo me pondre en contacto con ustedes para proporcionarle mas detalles."))}}]),a}(l.a.Component),d=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b,{rando:Math.floor(10*Math.random())}),l.a.createElement(p,null))}}]),a}(l.a.Component),g=a(17),f=(l.a.Component,a(24)),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={names:[],scores:[],loading:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://aztecback.herokuapp.com/updateScore").then((function(e){return e.json()})).then((function(t){t.forEach((function(t){e.setState({names:[].concat(Object(g.a)(e.state.names),[t.name]),scores:[].concat(Object(g.a)(e.state.scores),[t.score]),loading:!0})}))}))}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",null,l.a.createElement("h3",{className:"bb bw2"},"Ranking"),l.a.createElement("div",{className:"overflow-auto"},l.a.createElement("table",{className:"f6 w-100 mw8 center",cellSpacing:"0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"fw6 bb b--black-20 tl pb3 pr3 bg-white"},"#"),l.a.createElement("th",{className:"fw6 bb b--black-20 tl pb3 pr3 bg-white"},"Name"),l.a.createElement("th",{className:"fw6 bb b--black-20 tl pb3 pr3 bg-white"},"Score"))),l.a.createElement("tbody",{className:"lh-copy f3-l"},l.a.createElement("tr",null,l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},1),l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},this.state.names[0]," "),l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},this.state.scores[0])),l.a.createElement("tr",null,l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},2),l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},this.state.names[1]," "),l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},this.state.scores[1])),l.a.createElement("tr",null,l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},3),l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},this.state.names[2]," "),l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},this.state.scores[2])),l.a.createElement("tr",null,l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},4),l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},this.state.names[3]," "),l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},this.state.scores[3])),l.a.createElement("tr",null,l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},5),l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},this.state.names[4]," "),l.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},this.state.scores[4])))))):l.a.createElement(f.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))}}]),a}(l.a.Component),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"tc headings"},"Aztec Board"),l.a.createElement("h3",null,"Welcome to Fourth Grade!"),l.a.createElement("p",{className:"f4 lh-copy measure"},"Dear Students and Families, Welcome to the 4th Grade! I\u2019m excited about the opportunity to get to know you and I\u2019m looking forward to a happy and productive school year. Included in this website you will find resource to support your child at home anytime. Once again, welcome to the 4 th grade. Let\u2019s work together to make this the best year ever!"),l.a.createElement("p",{className:"f4 lh-copy measure"},"Sincerely,"),l.a.createElement("p",{className:"f4 lh-copy measure"},"Mrs. Sanchez"),l.a.createElement("h3",null,"\xa1Bienvenidos a Cuarto Grado!"),l.a.createElement("p",{className:"f4 lh-copy measure"},"Estimados estudiantes y familias, \xa1Bienvenidos al 4to grado! Estoy entusiasmada con la oportunidad de conocerte y espero tener un a\xf1o escolar feliz y productivo. Incluido en este sitio web encontrar\xe1 recursos para apoyar a su hijo en casa en cualquier momento. Una vez m\xe1s, bienvenidos al 4to grado. \xa1Trabajemos juntos para hacer de este el mejor a\xf1o de todos!"),l.a.createElement("p",{className:"f4 lh-copy measure"},"Sinceramente,"),l.a.createElement("p",{className:"f4 lh-copy measure"},"Mrs. Sanchez"))}}]),a}(l.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:" footer-padding tc"},l.a.createElement("a",{className:"no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2",href:"https://mes.musdaztecs.com/",title:"Facebook"},l.a.createElement("img",{src:"./Images/Mlogo.png",alt:"Mlogo",className:"dib h2 w2"}),l.a.createElement("span",{className:"f6 ml3 pr2"},"Mccabe")),l.a.createElement("a",{className:"no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2",href:"https://twitter.com/musdaztecs?lang=en",title:"Twitter"},l.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},l.a.createElement("path",{d:"M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z",fillRule:"nonzero"})),l.a.createElement("span",{className:"f6 ml3 pr2"},"Twitter"))))}}]),a}(l.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("div",{className:"temp"},l.a.createElement("img",{className:"aztec ",src:"./Images/Picture1.png",alt:"atec"})),l.a.createElement("div",{className:"center-box"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:" row "},l.a.createElement("div",{className:"liner left col shadow-3 glow grow bg-animate"},l.a.createElement(d,null)),l.a.createElement("div",{className:"temp liner middle tc shadow-3 glow bg-animate"},l.a.createElement(E,null)),l.a.createElement("div",{className:"liner right col shadow-3 glow grow bg-animate"},l.a.createElement(v,null))))),l.a.createElement(N,null))}}]),a}(l.a.Component),w=a(23),y=a(5),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{onClick:this.props.handleNum},l.a.createElement("input",{type:"hidden",value:this.props.numValues}),l.a.createElement("button",{className:"pa5 mr2 bg-light-green dib br3 pa3 ma2 grow shadow-5"},l.a.createElement("span",null,this.props.num)))}}]),a}(l.a.Component),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{onClick:this.props.handleTimer},l.a.createElement("input",{type:"hidden",value:this.props.timerVal}),l.a.createElement("button",{className:"pa5 bg-light-green br3 grow shadow-5"},l.a.createElement("span",null,this.props.time)))}}]),a}(l.a.Component),C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return 2!==this.props.currentStep?null:l.a.createElement("div",null,l.a.createElement("h1",{className:"tc"},"Set Time"),l.a.createElement("div",{className:"flex justify-around "},l.a.createElement(O,{time:"2",timerVal:"2",handleTimer:this.props.handleTimer}),l.a.createElement(O,{time:"3",timerVal:"3",handleTimer:this.props.handleTimer}),l.a.createElement(O,{time:"4",timerVal:"4",handleTimer:this.props.handleTimer})),l.a.createElement("h1",{className:"tc"},"Set Number"),l.a.createElement("div",{className:"flex flex-wrap flex justify-around"},l.a.createElement(j,{num:"2",numValues:"2",handleNum:this.props.handleNum}),l.a.createElement(j,{num:"3",numValues:"3",handleNum:this.props.handleNum}),l.a.createElement(j,{num:"4",numValues:"4",handleNum:this.props.handleNum}),l.a.createElement(j,{num:"5",numValues:"5",handleNum:this.props.handleNum}),l.a.createElement(j,{num:"6",numValues:"6",handleNum:this.props.handleNum}),l.a.createElement(j,{num:"7",numValues:"7",handleNum:this.props.handleNum}),l.a.createElement(j,{num:"8",numValues:"8",handleNum:this.props.handleNum}),l.a.createElement(j,{num:"9",numValues:"9",handleNum:this.props.handleNum}),l.a.createElement(j,{num:"10",numValues:"10",handleNum:this.props.handleNum})))}}]),a}(l.a.Component),S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{onClick:this.props.handleChars,className:"dt mw6 center pt0 pv5-m bg-light-green dib br3 pa3 ma2 grow shadow-5 "},l.a.createElement("div",{className:"db dtc-ns v-mid-ns"},l.a.createElement("img",{src:this.props.robo,alt:"robos",className:" w-100 mw7 w5-ns"})),l.a.createElement("div",{className:"db dtc-ns v-mid ph2 pr0-ns pl3-ns"},l.a.createElement("div",null,l.a.createElement("h1",null,"Hero:",this.props.name),l.a.createElement("h1",null,"Power:",this.props.power)),l.a.createElement("p",{className:"lh-copy"},"Coming Soon")),l.a.createElement("input",{type:"hidden",value:this.props.number}))}}]),a}(l.a.Component),x=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return 1!==this.props.currentStep?null:l.a.createElement("div",null,l.a.createElement("input",{type:"hidden",onChange:this.props.handleChange}),l.a.createElement(S,{handleChars:this.props.handleChars,robo:"./Images/cat.png",name:"Cat",number:"1"}),l.a.createElement(S,{handleChars:this.props.handleChars,robo:"./Images/yellow.png",name:"Robo",number:"2"}),l.a.createElement(S,{handleChars:this.props.handleChars,robo:"./Images/mojo.png",name:"Mojo",number:"3"}))}}]),a}(l.a.Component),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={isFilled:!1},e}return Object(i.a)(a,[{key:"render",value:function(){return 3!==this.props.currentStep?null:l.a.createElement("div",null,l.a.createElement("h1",{className:"tc f1 lh-solid"},this.props.mins,":",this.props.secs),l.a.createElement("h1",{className:"tc f2 lh-solid"},"Bar Goes Here"),l.a.createElement("div",{className:"db center mw5 tc black"},l.a.createElement("div",{className:"f4 card dt mw6 center pt0 pv5-m bg-light-green dib br3 pa3 ma2 shadow-5"},l.a.createElement("h1",null,this.props.randomProb),l.a.createElement("h1",null,"x"),l.a.createElement("h1",null,this.props.userChoice),l.a.createElement("form",{onSubmit:this.props.keyPressed},l.a.createElement("input",{value:this.props.empty,type:"number",name:"answer",onChange:this.props.handleChangeInput}),l.a.createElement("input",{type:"submit",name:"submit",onClick:this.props.Clicker})))))}}]),a}(l.a.Component),T=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),a}(l.a.Component),P=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Username"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"isUserName",id:"isUserName",onChange:this.props.onUserNameChange})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.props.onPasswordChange}))),l.a.createElement("span",{style:{color:"red",display:this.props.isWrong?"block":"none"}},"username or password is incorrect"),l.a.createElement("div",{className:""},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.props.onSubmit}))))))}}]),a}(l.a.Component),M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.props.handleOut},"Sign out"))}}]),a}(l.a.Component),U=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={isUserName:"",isPassword:"",isWrong:!1,isLogged:!1},e.onUserNameChange=e.onUserNameChange.bind(Object(y.a)(e)),e.onPasswordChange=e.onPasswordChange.bind(Object(y.a)(e)),e.onSubmit=e.onSubmit.bind(Object(y.a)(e)),e.handleOut=e.handleOut.bind(Object(y.a)(e)),e}return Object(i.a)(a,[{key:"handleOut",value:function(){this.setState({isLogged:!1,isUserName:""}),console.log(this.state.isUserName)}},{key:"onUserNameChange",value:function(e){this.setState({isUserName:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({isPassword:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://aztecback.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.isUserName,password:this.state.isPassword})}).then((function(e){return e.json()})).then((function(e){"Username Found"===e?t.setState({isLogged:!0}):(console.log("hello"),console.log("iswrong",t.state.isWrong),t.setState({isWrong:!0}))})),console.log("is wrong end",this.state.isWrong)}},{key:"render",value:function(){return this.state.isLogged?l.a.createElement("div",null,l.a.createElement(M,{handleOut:this.handleOut}),l.a.createElement(L,{isUserName:this.state.isUserName})):l.a.createElement("div",null,l.a.createElement(P,{onUserNameChange:this.onUserNameChange,onPasswordChange:this.onPasswordChange,isWrong:this.state.isWrong,onSubmit:this.onSubmit}))}}]),a}(l.a.Component),z=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(U,null))}}]),a}(l.a.Component),F=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"dt mw6 center pt0 pv5-m bg-light-green dib br3 pa3 ma2 grow shadow-5"},l.a.createElement("h1",{className:"tc"},"Submission Complete"))}}]),a}(l.a.Component),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isUserName:n.props.isUserName},n}return Object(i.a)(a,[{key:"render",value:function(){return this.props.complete?l.a.createElement("div",null,l.a.createElement(F,null)):l.a.createElement("div",null,l.a.createElement("input",{type:"button",value:"Retry",onClick:this.props.retry}),l.a.createElement("input",{style:{display:this.props.isUserName?"block":"none"},type:"submit",onClick:this.props.sendScore}))}}]),a}(l.a.Component),V=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={back:!1,score:n.props.CorrectAns/50*100,isUserName:n.props.isUserName,complete:!1},n.retry=n.retry.bind(Object(y.a)(n)),n.sendScore=n.sendScore.bind(Object(y.a)(n)),n}return Object(i.a)(a,[{key:"retry",value:function(){this.setState({back:!0})}},{key:"sendScore",value:function(e){console.log("username",this.state.isUserName),e.preventDefault(),fetch("https://aztecback.herokuapp.com/updateScore",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.isUserName,score:this.state.score})}).then((function(e){return e.json()})).then((function(e){console.log("updated",e),console.log("score updated")})),this.setState({complete:!0})}},{key:"render",value:function(){return this.state.back?l.a.createElement(L,null):l.a.createElement("div",null,this.state.isUserName?null:l.a.createElement(h,null),l.a.createElement("div",{className:"dt mw6 center pt0 pv5-m bg-light-green dib br3 pa3 ma2 grow shadow-5"},l.a.createElement("h1",null,"Completed"),l.a.createElement("h1",null,"Correct:",this.state.score,"%")),l.a.createElement("div",{className:"dt mw6 center "},l.a.createElement(D,{isUserName:this.state.isUserName,retry:this.retry,sendScore:this.sendScore,complete:this.state.complete})))}}]),a}(l.a.Component),L=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(w.a)({},a,l))},n._prev=function(){var e=n.state.currentStep;e=e<=1?1:e-1,n.setState({currentStep:e})},n._next=function(){var e=n.state.currentStep;e=e>2?3:e+1,n.setState({currentStep:e})},n.lastSubmit=function(){if(3===n.state.currentStep)return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:n.handleSubmit},l.a.createElement("input",{className:"f6 dim br2 ph3 pv2 mb2 dib white bg-dark-green ",type:"submit",value:"Submit",onClick:n.startTimer,disabled:!(n.state.isFilledChar&&n.state.isFilledTimer&&n.state.isFilledNumber&&n.state.isSubDisabled)})))},n.state={currentStep:1,charNumber:"",timer:"",problem:"",seconds:"00",value:"",isSubmitted:!1,inputVal:"",corAns:0,probCounter:0,randomNum:Math.floor(3*Math.random()+1),isLoaded:!1,items:"",author:"",rando:Math.floor(100*Math.random()),emptyField:"",isFilledChar:!1,isFilledTimer:!1,isFilledNumber:!1,isPrevDisabled:!1,isSubDisabled:!0,isUserName:n.props.isUserName},n.handleChars=n.handleChars.bind(Object(y.a)(n)),n.handleTimer=n.handleTimer.bind(Object(y.a)(n)),n.handleNum=n.handleNum.bind(Object(y.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n.clock=n.clock.bind(Object(y.a)(n)),n.startTimer=n.startTimer.bind(Object(y.a)(n)),n.handleChangeClock=n.handleChangeClock.bind(Object(y.a)(n)),n.handleChangeInput=n.handleChangeInput.bind(Object(y.a)(n)),n.SolutionsChecker=n.SolutionsChecker.bind(Object(y.a)(n)),n.Clicker=n.Clicker.bind(Object(y.a)(n)),n.onSubmitScore=n.onSubmitScore.bind(Object(y.a)(n)),n.keyPressed=n.keyPressed.bind(Object(y.a)(n)),n}return Object(i.a)(a,[{key:"keyPressed",value:function(e){e.preventDefault(),"Enter"===e.key&&(this.Clicker(),console.log("Enter pressed")),console.log("Enter pressed")}},{key:"SolutionsChecker",value:function(){var e=this.state.randomNum,t=this.state.problem;t=parseInt(t),console.log("This is x ",e),console.log("This is y ",t);var a=e*t;console.log(e*t);var n=parseInt(this.state.inputVal);console.log("Answer",a),console.log("Input",n),a===n?(this.setState((function(e){return{corAns:e.corAns+1}})),console.log("correct")):console.log("wrong"),this.setState((function(e){return{randomNum:Math.floor(10*Math.random()+1),probCounter:e.probCounter+1}})),console.log("corrAns",this.state.corAns),console.log("problem",this.state.probCounter)}},{key:"Clicker",value:function(e){this.SolutionsChecker(),this.setState({inputVal:""}),49===this.state.probCounter&&console.log("it has reached 50")}},{key:"onSubmitScore",value:function(e){e.preventDefault()}},{key:"handleChangeInput",value:function(e){this.setState({inputVal:e.target.value}),console.log(this.state.inputVal)}},{key:"handleChangeClock",value:function(e){this.setState({value:e.target.value}),console.log(this.state.value)}},{key:"clock",value:function(){var e=parseInt(this.secondsRemaining/60,10),t=parseInt(this.secondsRemaining%60,10);this.setState({value:e,seconds:t}),t<10&&this.setState({seconds:"0"+this.state.seconds}),e<10&&this.setState({value:"0"+e}),0===e&0===t&&clearInterval(this.intervalHandle),0===e&&0===t&&clearInterval(this.intervalHandle),this.secondsRemaining--}},{key:"startTimer",value:function(){this.intervalHandle=setInterval(this.clock,1e3);var e=this.state.timer;console.log(typeof e),this.secondsRemaining=60*e,this.setState({isClicked:!0})}},{key:"handleChars",value:function(e){var t=this;console.log("char",e.currentTarget.children[2].value);var a=e.currentTarget.children[2].value;this.setState({charNumber:a,isFilledChar:!0},(function(){console.log("state after:",t.state.charNumber)})),console.log("state: ",this.state.charNumber),console.log("state filled after: ",this.state.isFilled)}},{key:"handleTimer",value:function(e){var t=this;console.log("Timer",e.currentTarget.children[0].value);var a=e.currentTarget.children[0].value;this.setState({timer:a,isFilledTimer:!0},(function(){console.log("timer state after:",t.state.timer)})),console.log("timer state: ",this.state.timer)}},{key:"handleNum",value:function(e){var t=this;console.log("Num",e.currentTarget.children[0].value);var a=e.currentTarget.children[0].value;this.setState({problem:a,isFilledNumber:!0},(function(){console.log("problem state after:",t.state.problem)})),console.log("problem state: ",this.state.problem)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isSubmitted:!0,isPrevDisabled:!0,isSubDisabled:!1}),console.log("Submit CharNum:",this.state.charNumber),console.log("submit timer:",this.state.timer),console.log("submit problem:",this.state.problem),console.log(this.state.isSubmitted)}},{key:"previousButton",value:function(){return 1!==this.state.currentStep?l.a.createElement("button",{className:"f6 dim br2 ph3 pv2 mb2 dib white bg-dark-blue",type:"button",onClick:this._prev,disabled:this.state.isPrevDisabled},"Previous"):null}},{key:"nextButton",value:function(){return this.state.currentStep<3?l.a.createElement("button",{className:"f6 dim br2 ph3 pv2 mb2 dib white bg-dark-green",type:"button",onClick:this._next},"Next"):null}},{key:"render",value:function(){return 50===this.state.probCounter||"00"===this.state.value&&"00"===this.state.seconds?l.a.createElement(V,{CorrectAns:this.state.corAns,isUserName:this.state.isUserName}):l.a.createElement("div",null,this.state.isUserName?null:l.a.createElement(h,null),l.a.createElement(x,{handleChars:this.handleChars,handleChange:this.handleChange,currentStep:this.state.currentStep}),l.a.createElement(C,{handleNum:this.handleNum,handleTimer:this.handleTimer,handleChange:this.handleChange,currentStep:this.state.currentStep}),l.a.createElement("div",{className:"flex items-center justify-center pa4"},this.previousButton(),this.nextButton(),this.lastSubmit()),this.state.isSubmitted&&l.a.createElement(I,{keyPressed:this.keyPressed,empty:this.state.inputVal,Clicker:this.Clicker,inputVal:this.state.inputVal,randomProb:this.state.randomNum,userChoice:this.state.problem,handleChangeInput:this.handleChangeInput,mins:this.state.value,secs:this.state.seconds,timerState:this.state.timer,multiState:this.state.problem,handleChange:this.handleChange,currentStep:this.state.currentStep}),l.a.createElement(T,{test:this.handleChangeClock,value:this.state.value,seconds:this.state.seconds,startTimer:this.startTimer}))}}]),a}(l.a.Component),R=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={modePrac:!1,modeQuiz:!1},e.modePrac=e.modePrac.bind(Object(y.a)(e)),e.modeQuiz=e.modeQuiz.bind(Object(y.a)(e)),e}return Object(i.a)(a,[{key:"modePrac",value:function(){this.setState({modePrac:!0})}},{key:"modeQuiz",value:function(){this.setState({modeQuiz:!0})}},{key:"render",value:function(){return this.state.modePrac?l.a.createElement(L,null):this.state.modeQuiz?l.a.createElement(z,null):l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("div",{className:"flex items-center justify-center pa4 "},l.a.createElement("input",{className:"f6 dim br2 ph3 pv2 mb2 dib white bg-dark-blue  ",type:"button",value:"Practice",onClick:this.modePrac}),l.a.createElement("input",{className:"f6 dim br2 ph3 pv2 mb2 dib white bg-dark-green",type:"button",value:"Quiz",onClick:this.modeQuiz})))}}]),a}(l.a.Component),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("h3",{className:"tc"},"Math"),l.a.createElement("ul",{className:"list pl0 mt0 measure center border border-info shadow-lg p-3 mb-5 rounded shadow-hover"},l.a.createElement("a",{href:"https://math.imaginelearning.com/users/sign_in",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/ImagineMath.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Imagina Matem\xe1ticas/Imagine Math")))),l.a.createElement("a",{href:"https://bigbrainz.com/login/",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/MathFacts.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Multiplication/Multiplicacion")))),l.a.createElement("a",{href:"https://www.mathsisfun.com/numbers/math-trainer-multiply.html",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/MathFun.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Math Trainer")))),l.a.createElement("a",{href:"https://www.prodigygame.com/",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/Prodigy.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Prodigy")))),l.a.createElement("a",{href:"https://swunmath.com/",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/swun.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Swun Math")))),l.a.createElement("a",{href:"https://www.freckle.com/",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/frecklepig.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Freckle"))))),l.a.createElement("h3",{className:"tc"},"Lectura Y Lenguaje"),l.a.createElement("ul",{className:"list pl0 mt0 measure center border border-info shadow-lg p-3 mb-5 rounded shadow-hover"},l.a.createElement("a",{href:"https://api.imaginelearning.com/signin?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DDirectLoginClient%26redirect_uri%3Dhttps%253A%252F%252Fapi.imaginelearning.com%252FproductSelection%26response_type%3Did_token%2520token%26scope%3Dapi.transfer%2520api.assessment%2520api.manager%2520api.permissions%2520openid%26state%3Dc799e1e2b1d248b390781595ff08a062%26nonce%3Deb7f806591334ae998846052baa613f4",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/ImagineMath.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Imagine Learning")))),l.a.createElement("a",{href:"https://readtheory.org/",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/ReadTheory.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Read Theory: Lectura")))),l.a.createElement("a",{href:"http://myfcoeportal.org/",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/FOD.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"My FCOE Portal")))),l.a.createElement("a",{href:"https://www.getepic.com/students",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/Epic.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Get epic ")))),l.a.createElement("a",{href:"https://www.storylineonline.net/",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/Story.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"StoryOnline ")))),l.a.createElement("a",{href:"https://www.myon.com/library/browse.html",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/myon.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Myon ")))),l.a.createElement("a",{href:"https://global-zone53.renaissance-go.com/welcomeportal/277467",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/Renaissance.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Renaissance "))))),l.a.createElement("h3",{className:"tc"},"common used links/ enlaces mas usados"),l.a.createElement("ul",{className:"list pl0 mt0 measure center border border-info shadow-lg p-3 mb-5 rounded shadow-hover"},l.a.createElement("a",{href:"https://classroom.google.com/u/0/h",className:"f6 link blue hover-dark-gray"},l.a.createElement("li",{className:"flex items-center lh-copy pa3 ph0-l bb b--black-10 grow"},l.a.createElement("img",{className:"w2 h2 w3-ns h3-ns br-100",src:"./Images/classroom.png",alt:"icon"}),l.a.createElement("div",{className:"pl3 flex-auto"},l.a.createElement("span",{className:"f6 db black-70"},"Google Classroom"))))))}}]),a}(l.a.Component),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("article",{className:"center mw5 mw6-ns br3 hidden ba b--black-10 mv4  shadow-hover"},l.a.createElement("h1",{className:"f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3 tc"},"Mendota Mccabe Elementray School "),l.a.createElement("div",{className:"pa3 bt b--black-10"},l.a.createElement("h4",null,"Mendota Mccabe Elementray School"),l.a.createElement("h5",null,"Address"),l.a.createElement("p",null,"250 South Derrick Street"),l.a.createElement("p",null,"Mendota, CA 93640"),l.a.createElement("h5",null,"Phone"),l.a.createElement("p",null,"(559)655-4262"),l.a.createElement("h5",null,"Email"),l.a.createElement("p",null,l.a.createElement("span",{className:"email"},"myramartinez@mendotaschools.org")))))}}]),a}(l.a.Component),Q=a(7);a(37);s.a.render(l.a.createElement(u.a,{basename:"/"},l.a.createElement(Q.a,{path:"/",exact:!0,component:k}),l.a.createElement(Q.a,{path:"/Option",component:R}),l.a.createElement(Q.a,{path:"/Resources",exact:!0,component:A}),l.a.createElement(Q.a,{path:"/Contact",component:B})),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.0af1b80d.chunk.js.map