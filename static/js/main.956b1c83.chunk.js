(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/cs_player.99fada54.png"},function(e,a,t){e.exports=t.p+"static/media/markdown_previewer.1e6a2e04.png"},function(e,a,t){e.exports=t.p+"static/media/pomodoro_timer.bd95b7c2.png"},function(e,a,t){e.exports=t.p+"static/media/random_quote.9cb90476.png"},function(e,a,t){e.exports=t.p+"static/media/react_calc.f9bdfab5.png"},function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(13),o=t.n(l),r=(t(24),t(3)),c=t(4),s=t(7),m=t(5),u=t(8),d=(t(26),function(e){return i.a.createElement("nav",{id:"NavMenu",className:"navbar navbar-default navbar-fixed-top"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"navbar-header"},i.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"},i.a.createElement("span",{className:"sr-only"},"Toggle navigation"),i.a.createElement("span",{className:"icon-bar"}),i.a.createElement("span",{className:"icon-bar"}),i.a.createElement("span",{className:"icon-bar"})),i.a.createElement("a",{className:"navbar-brand",href:"#home"},"Dileep Rajput")),i.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},i.a.createElement("ul",{className:"nav navbar-nav navbar-right"},i.a.createElement("li",null,i.a.createElement("a",{href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#portfolio"}," Portfolio")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contact"},"Contact"))))))}),h=(t(28),function(e){return i.a.createElement("div",{id:"particle-container"},Array(30).fill(0).map(function(e,a){return i.a.createElement("div",{key:a,className:"particle"})}))}),p=t(6),b=(t(33),function(e){return i.a.createElement("div",{id:"social-bar"},e.socialButtons.map(function(e,a){return i.a.createElement("a",{href:e.link,key:a},i.a.createElement(p.a,{icon:e.icon,size:"lg"}))}))}),g=(t(35),function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("a",{href:e.link},i.a.createElement("img",{src:e.img,alt:"Screenshot of "+e.title+" project"}),i.a.createElement("header",{className:"center-text"},e.title),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,e.description),i.a.createElement("p",null,"Built with ",e.tech.join(", ")))))}),f=t(2),v=(t(37),function(e){function a(e,t){var n;return Object(r.a)(this,a),(n=Object(s.a)(this,Object(m.a)(a).call(this,e,t))).handleNameChange=n.handleNameChange.bind(Object(f.a)(Object(f.a)(n))),n.handleEmailChange=n.handleEmailChange.bind(Object(f.a)(Object(f.a)(n))),n.handleMessageChange=n.handleMessageChange.bind(Object(f.a)(Object(f.a)(n))),n.handleFormSubmit=n.handleFormSubmit.bind(Object(f.a)(Object(f.a)(n))),n.setSubmit=n.setSubmit.bind(Object(f.a)(Object(f.a)(n))),n.state={name:"",email:"",message:"",submitSuccessful:null,valid:{name:!1,email:!1,message:!1}},n}return Object(u.a)(a,e),Object(c.a)(a,[{key:"handleNameChange",value:function(e){var a=Object.assign({},this.state.valid);a.name=e.target.value.length>0,this.setState({name:e.target.value,valid:a})}},{key:"handleEmailChange",value:function(e){var a=Object.assign({},this.state.valid);a.email=/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(e.target.value),this.setState({email:e.target.value,valid:a})}},{key:"handleMessageChange",value:function(e){var a=Object.assign({},this.state.valid);a.message=e.target.value.length>0,this.setState({message:e.target.value,valid:a})}},{key:"setSubmit",value:function(e){this.setState({submitSuccessful:e})}},{key:"handleFormSubmit",value:function(e){e.preventDefault();var a={name:this.state.name,email:this.state.email,message:this.state.message},t=[];for(var n in a)t.push(encodeURIComponent(n)+"="+encodeURIComponent(a[n]));t=t.join("&").replace(/%20/g,"+");var i=new XMLHttpRequest,l=this.setSubmit;i.addEventListener("load",function(e){l(!0)}),i.addEventListener("error",function(e){l(!1)}),i.open("POST","https://script.google.com/macros/s/AKfycbyVREX2GBuPbU6VcTEDbQ_wkxIffWqHfuY7KJc7/exec"),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.send(t)}},{key:"render",value:function(){var e="",a=!this.state.valid.name||!this.state.valid.email||!this.state.valid.message;return a||(!0===this.state.submitSuccessful&&(e="Thanks! I'll be in contact with you soon."),!1===this.state.submitSuccessful&&(e="Oops! This is embarrassing. Something seems to have gone wrong. Please try again later.")),i.a.createElement("div",null,i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Name"),i.a.createElement("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:this.handleNameChange})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Email"),i.a.createElement("input",{type:"email",className:"form-control",name:"email",value:this.state.email,onChange:this.handleEmailChange})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Message"),i.a.createElement("textarea",{className:"form-control",name:"message",value:this.state.message,onChange:this.handleMessageChange})),i.a.createElement("button",{className:"btn",onClick:this.handleFormSubmit,disabled:a},"Submit")),i.a.createElement("p",{className:"form-submit-message"},e))}}]),a}(n.Component)),E=t(10),w=(t(39),function(e){var a=e.destination,t=e.up,n=void 0!==t&&t;return i.a.createElement("div",{className:"scrollArrow"},i.a.createElement("a",{href:a},i.a.createElement(p.a,{icon:n?E.b:E.a,size:"lg"})))}),y=t(11),k=t(14),j=t.n(k),N=t(15),C=t.n(N),O=t(16),S=t.n(O),x=t(17),R=t.n(x),A=t(18),I=t.n(A),P={};P.home={header:"Dileep Rajput",subHeader:"Software Engineer",socialBar:[{icon:y.a,link:"https://github.com/rajputd/"},{icon:y.b,link:"https://www.linkedin.com/in/dileep-rajput/"}]},P.about={description:["Hi there! My name is Dileep. I am a software engineer with a strong background in full-stack web development and low-level programming. I like to use technology to help people solve problems in their daily lives, businesses, and communities.","When it comes to the web I love all things JavaScript. Even this portfolio website is written in JavaScript and React. Although I am comfortable with doing equivalent work in Python, PHP, and Java.","On the hardware side, C is my go to language. It does everything I need it to do. When C cannot, I usually dive into the assembly to squeeze out the full potential of the hardware I am hacking on."],tldr:"I enjoy making things. Throw me a line. Maybe we can get together and make a difference."},P.portfolio=[{title:"Crowd Sourced Player",link:"https://github.com/rajputd/csplayer",img:j.a,description:"A web application that allows users to collaboratively create, edit, and play a music playlist in realtime.",tech:["Vue","Express","Node.js","Socket.io"]},{title:"Markdown Previewer",link:"https://github.com/rajputd/markdown-previewer",img:C.a,description:"A web application that lets users write markdown and see the rendered output side by side.",tech:["React"]},{title:"Pomodoro Timer",link:"https://github.com/rajputd/React-Pomodoro-Timer",img:S.a,description:"A Web application that impliments all the features of a standard, physical Pomodoro Timer.",tech:["React"]},{title:"Random Quote Generator",link:"https://github.com/rajputd/random-quote-generator",img:R.a,description:"A web application that displays random quotes gathered from an external Random Quotes API",tech:["React"]},{title:"React Calculator",link:"https://github.com/rajputd/React-Calculator",img:I.a,description:"A web application that impliments all of the features in a four-function calculator.",tech:["React"]}],P.contact={description:"Feel like reaching out? You can contact me via this form."};var M=P,T=(t(41),function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null),i.a.createElement(d,null),i.a.createElement("section",{id:"home"},i.a.createElement("h1",null,M.home.header),i.a.createElement("h4",null,M.home.subHeader),i.a.createElement(b,{socialButtons:M.home.socialBar}),i.a.createElement(w,{destination:"#about"})),i.a.createElement("section",{id:"about"},i.a.createElement("h2",null,"About"),M.about.description.map(function(e,a){return i.a.createElement("p",{key:a},e)}),i.a.createElement("h4",null,"tl;dr"),i.a.createElement("p",null,M.about.tldr),i.a.createElement(w,{destination:"#portfolio"})),i.a.createElement("section",{id:"portfolio"},i.a.createElement("h2",null,"Portfolio"),i.a.createElement("div",{id:"projects"},M.portfolio.map(function(e,a){return i.a.createElement(g,Object.assign({key:a},e))})),i.a.createElement(w,{destination:"#contact"})),i.a.createElement("section",{id:"contact"},i.a.createElement("h2",null,"Contact"),i.a.createElement("p",null,M.contact.description),i.a.createElement(v,null),i.a.createElement(w,{destination:"#home",up:!0})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[19,2,1]]]);
//# sourceMappingURL=main.956b1c83.chunk.js.map