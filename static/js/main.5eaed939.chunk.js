(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(27),n=a.n(r),o=(a(66),a(51)),i=a(102),l=a(101),m=a(43),h=a(100),d=a(99),j=a.p+"static/media/ngrx.b49f3c62.png",p=a.p+"static/media/react.ef20e673.png",u=a.p+"static/media/node.a8c363ae.png",b=a.p+"static/media/js.e35fa00e.png",g=a.p+"static/media/redux.4516fe25.jpg",x=a.p+"static/media/angular.367d4f3d.png",O=a.p+"static/media/vue.17c4554a.jpeg";const f={react:{backgroundImage:p,linearGradient:v("#61dafb","#222222"),primaryColor:"#61dafb",color:"#222222"},angular:{backgroundImage:x,linearGradient:v("#0043A9","#B42B2C"),primaryColor:"#B52C2D",color:"#0043A9"},vue:{backgroundImage:O,linearGradient:v("#49D191","#33475F"),primaryColor:"#33475F",color:"#49D191"},node:{backgroundImage:u,linearGradient:v("#80BD01","#333333"),primaryColor:"#333333",color:"#80BD01"},javascript:{backgroundImage:b,linearGradient:v("#F7E018","#000000"),primaryColor:"#F7E018",color:"#000000"},rxjs:{backgroundImage:j,linearGradient:v("#F80090","#242A31"),primaryColor:"#F80090",color:"#242A31"},redux:{backgroundImage:g,linearGradient:v("#764ABD","#1E1E1E"),primaryColor:"#764ABD",color:"#1E1E1E"},ngrx:{backgroundImage:j,linearGradient:v("#F80090","#242A31"),primaryColor:"#F80090",color:"#242A31"}};function v(e,t){return"linear-gradient(to bottom right, ".concat(e," 0%, ").concat(t," 100%)")}var C=a(1);const w=new i.a;let k;const{Provider:y,Consumer:N}=k=c.a.createContext();class A extends s.Component{constructor(){super(...arguments),this.state={...f.react,type:"react"},this.subscription=null,this.changeTheme=e=>{f[e]&&this.setState((t=>(this.setThemeColors(f[e]),t.type!==e?{...f[e],animate:!0,type:e}:t)))},this.stopThemeChangeTimer=()=>{w.next(!1)},this.startThemeChangeTimer=()=>{w.next(!0)}}componentDidMount(){this.setThemeColors(f.react),this.subscription=w.pipe(Object(h.a)(!0),Object(d.a)((e=>e?Object(l.a)(1e4):m.a))).subscribe((()=>{const e=Object.keys(f);let t=e[Math.floor(Math.random()*e.length)];for(;t===this.state.type;)t=e[Math.floor(Math.random()*e.length)]}))}setThemeColors(e){document.documentElement.style.setProperty("--primary-color",e.primaryColor),document.documentElement.style.setProperty("--secondary-color",e.color)}render(){return Object(C.jsx)(y,{value:{...this.state,changeTheme:this.changeTheme,stopThemeChangeTimer:this.stopThemeChangeTimer,startThemeChangeTimer:this.startThemeChangeTimer},children:this.props.children})}}function T(){const{type:e}=Object(s.useContext)(k),[t,a]=Object(s.useState)(""),[c,r]=Object(s.useState)(null);return Object(s.useEffect)((()=>{a(""),setTimeout((()=>a("fade-in")),50)}),[e]),{animation:t}}a(68);const _=()=>{const{linearGradient:e}=Object(s.useContext)(k),{animation:t}=T();return Object(C.jsx)("div",{className:"main ".concat(t),style:{background:e},children:Object(C.jsx)(_.Bubbles,{})})};_.Bubbles=()=>function(e,t){const a=[];for(let s=e;s<=t;s++)a.push(s);return a}(1,30).map((e=>Object(C.jsx)("div",{className:"bubble bubble-".concat(e)},e)));var R=_;a(69),a(70);class S extends c.a.Component{constructor(){super(...arguments),this.state={text:"front engineer"}}render(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("span",{className:"typed-text",children:this.state.text})})}}var D=S;a(71);const E=()=>Object(C.jsxs)("div",{className:"social",children:[Object(C.jsx)(E.Link,{url:"https://github.com/ResplendentGrave",type:"github"}),Object(C.jsx)(E.Link,{url:"https://t.me/HUGUANGXIN",type:"telegram"})]});E.Link=e=>{let{url:t,type:a}=e;return Object(C.jsx)("a",{href:t,target:"_blank",children:Object(C.jsx)("span",{className:"fab fa-".concat(a)})})};var L=E;a(72);var I=e=>{let{icon:t,children:a}=e;return Object(C.jsxs)("div",{className:"info",children:[Object(C.jsxs)("div",{className:"property",children:[Object(C.jsx)("i",{className:"ion-ios-".concat(t)}),Object(C.jsxs)("strong",{children:[t,":"]})]}),Object(C.jsx)("span",{children:a})]})};a(73);var M=()=>{const{changeTheme:e,startThemeChangeTimer:t,stopThemeChangeTimer:a}=Object(s.useContext)(k);return Object(C.jsxs)("div",{className:"skills",children:[Object(C.jsx)("h6",{children:"Skills"}),Object(C.jsxs)("ul",{onMouseEnter:a,onMouseLeave:t,onMouseOver:function(e){},children:[Object(C.jsx)("li",{id:"react",children:"React"}),Object(C.jsx)("li",{id:"redux",children:"Redux"}),Object(C.jsx)("li",{id:"node",children:"Node"}),Object(C.jsx)("li",{id:"javascript",children:"JavaScript"})]})]})},F=a.p+"static/media/PHOTO.d8ae7a6e.jpg",G=a.p+"static/media/HU_resume_0412.aa120709.pdf";var B=()=>{const{type:e}=Object(s.useContext)(k),{animation:t}=T();return Object(C.jsxs)("div",{className:"profile",children:[Object(C.jsxs)("div",{className:"profile__banner",children:[Object(C.jsx)("div",{className:"profile__photo ".concat(t)}),Object(C.jsx)("img",{src:F,alt:e})]}),Object(C.jsxs)("div",{className:"profile__content",children:[Object(C.jsx)("div",{className:"profile__title",children:"HU GUANGXIN"}),Object(C.jsx)(D,{}),Object(C.jsx)(L,{}),Object(C.jsx)(I,{icon:"location",children:"MORIOKA"}),Object(C.jsx)(M,{})]}),Object(C.jsxs)("div",{className:"profile__contact",children:[Object(C.jsx)("a",{href:G,target:"_blank",rel:"noreferrer",children:Object(C.jsx)("span",{children:"Download CV"})}),Object(C.jsx)("a",{href:"mailto:g0323065@iwate-u.ac.jp",children:Object(C.jsx)("span",{children:"Contact Me"})})]})]})},H=a(58);a(78);const q=()=>Object(C.jsxs)("ul",{className:"menu",children:[Object(C.jsx)(q.Item,{name:"person",link:"/#about",children:"About"}),Object(C.jsx)(q.Item,{name:"paintbrush",link:"/works#works",children:"Works"}),Object(C.jsx)(q.Item,{name:"at",link:"/contact#contact",children:"Contact"})]});q.Item=e=>{let{link:t="#",children:a,name:s}=e;return Object(C.jsx)("li",{children:Object(C.jsxs)(H.NavHashLink,{smooth:!0,to:t,activeClassName:"active",exact:!0,children:[Object(C.jsx)("span",{className:"icon ion-".concat(s)}),a]})})};var W=q;a(79),a(80);var P=e=>{let{children:t,icon:a}=e;return Object(C.jsxs)("div",{className:"title",children:[a&&Object(C.jsx)("i",{className:a}),Object(C.jsx)("h3",{children:t})]})};var V=()=>Object(C.jsxs)("div",{className:"page",id:"about",children:[Object(C.jsx)(P,{children:"About Me"}),Object(C.jsx)("div",{className:"row",children:Object(C.jsxs)("div",{className:"column",children:[Object(C.jsx)("strong",{children:"Hi, I am Emre Baskan"}),Object(C.jsxs)("p",{children:["Self-taught, self-driven, passionate learner and developer focusing on Angular, React, Vue, Node, and Java Technologies. Looking forward to working with ingenious teams on challenging projects.",Object(C.jsx)("br",{})," ",Object(C.jsx)("br",{}),"I\u2019m an easy going person that works well with everyone. I enjoy being around different types of people and I like to always challenge myself to improve at everything I do.",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"I have a great passion for learning languages and exploring the world and also programming. I have always loved technology and programming. And this is my profession now."]})]})}),Object(C.jsx)(P,{children:"My philosophy of programming"}),Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("div",{className:"column",children:Object(C.jsx)("p",{children:"I have a deep understanding of how JavaScript works. I strongly believe that having a solid understanding of core technologies allows developers to master at any frameworks."})})}),Object(C.jsx)(P,{children:"Highlights of Qualifications"}),Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("div",{className:"column",children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:"Sound knowledge of MVC frameworks"}),Object(C.jsx)("li",{children:"Deep understanding of JavaScriptOOP & FP"}),Object(C.jsx)("li",{children:"Hungry and eager to learn"}),Object(C.jsx)("li",{children:"Ability to learn rapidly"}),Object(C.jsx)("li",{children:"Follow emerge technologies"}),Object(C.jsx)("li",{children:"Excellent coding and code review experience. Clear structure,standardized naming, strong logic, low code redundancy"})]})})})]}),J=a(30),X=a(4);a(81);var U=a(59);a(82),a(83);var K=e=>{let{len:t,activeItem:a,changeItem:s}=e;const c=[];for(let r=0;r<t;r++){let e="owl-dot";a===r&&(e+=" active"),c.push(Object(C.jsx)("button",{onClick:()=>{s(r)},className:e,children:Object(C.jsx)("span",{})},r+1))}return Object(C.jsx)("div",{className:"owl-dots",children:c})};var z=e=>{let{classNames:t,images:a}=e;const c=Object(s.useRef)(),[r,n]=Object(s.useState)(a[0]),[o,i]=Object(s.useState)(0),l=e=>{let t;t="touchmove"===e.type?e.touches[0].clientX:e.clientX;const s=t-c.current.getBoundingClientRect().left,r=c.current.clientWidth/a.length;let o=Math.ceil(s/r)-1;o<0&&(o=0),o>=a.length&&(o=a.length-1),i(o),n(a[o])},m=e=>{n(a[0]),i(0)};return Object(C.jsxs)("div",{ref:c,className:t,style:{position:"relative"},children:[Object(C.jsx)(U.LazyLoadImage,{src:r,alt:"works",effect:"blur",onMouseMove:l,onMouseOut:m,onTouchMove:l,onTouchEnd:m}),Object(C.jsx)(K,{len:a.length,activeItem:o,changeItem:e=>{n(a[e]),i(e)}})]})};var Y=e=>{let{images:t,title:a,sourceCodeLink:s,demoLink:c}=e;return Object(C.jsxs)("div",{className:"work-item",children:[Object(C.jsx)(z,{images:t,classNames:"work-item__slider"}),Object(C.jsx)("h3",{children:a}),Object(C.jsxs)("div",{className:"work-item__links",children:[s&&Object(C.jsxs)("a",{href:s,className:"work-item__source-code",children:[Object(C.jsx)("i",{className:"fas fa-code"}),"Source Code"]}),c&&Object(C.jsxs)("a",{href:c,className:"work-item__demo",children:[Object(C.jsx)("i",{className:"fas fa-rocket"}),"Demo"]})]})]})};a(84);const Z=[{title:"React Portfolio",images:["https://i.ibb.co/0hb1bwH/Screenshot-5.png","https://i.ibb.co/xqWqMGs/Screenshot-6.png"],sourceCodeLink:"https://github.com/TheCoderDream/react-portfolio",demoLink:"https://emrebaskan.netlify.app/",type:"react"},{title:"React Ecommerce App With Redux",images:["https://github.com/TheCodersDream/React-Ecommerce-App-with-Redux/raw/master/ecm1-1.png","https://github.com/TheCodersDream/React-Ecommerce-App-with-Redux/raw/master/ecm2-2.png","https://github.com/TheCodersDream/React-Ecommerce-App-with-Redux/raw/master/ecm4.png"],sourceCodeLink:"https://github.com/TheCoderDream/React-Ecommerce-App-with-Redux",demoLink:"http://numberless-leg.surge.sh/",type:"react"},{title:"Vue Ecommerce App With Vuex",images:["https://github.com/TheCodersDream/React-Ecommerce-App-with-Redux/raw/master/ecm1-1.png","https://github.com/TheCodersDream/React-Ecommerce-App-with-Redux/raw/master/ecm2-2.png","https://github.com/TheCodersDream/React-Ecommerce-App-with-Redux/raw/master/ecm4.png"],sourceCodeLink:"https://github.com/TheCoderDream/Vue-Ecommerce-App-with-Vuex",demoLink:"http://sincere-wind.surge.sh/",type:"vue"},{title:"Angular Ecommerce App With Ngrx",images:["https://github.com/TheCodersDream/React-Ecommerce-App-with-Redux/raw/master/ecm1-1.png","https://github.com/TheCodersDream/React-Ecommerce-App-with-Redux/raw/master/ecm2-2.png","https://github.com/TheCodersDream/React-Ecommerce-App-with-Redux/raw/master/ecm4.png"],sourceCodeLink:"https://github.com/TheCoderDream/Angular-Ecommerce-App-with-NGRX",demoLink:"http://delirious-coast.surge.sh/",type:"angular"},{title:"React Chat App With Redux And Firebase",images:["https://github.com/TheCodersDream/Angular-Chat-App/raw/master/Screenshot_31.png","https://github.com/TheCodersDream/Angular-Chat-App/raw/master/Screenshot_27.png","https://github.com/TheCodersDream/Angular-Chat-App/raw/master/Screenshot_28.png","https://github.com/TheCodersDream/Angular-Chat-App/raw/master/Screenshot_24.png","https://github.com/TheCodersDream/Angular-Chat-App/raw/master/Screenshot_25.png"],sourceCodeLink:"https://github.com/TheCoderDream/React-Chat-App-With-Redux-And-Firebase",demoLink:"https://react-chat-appp.netlify.app/",type:"react"},{title:"Angular Chat app",images:["https://github.com/TheCodersDream/Angular-Chat-App/raw/master/Screenshot_31.png","https://github.com/TheCodersDream/Angular-Chat-App/raw/master/Screenshot_27.png","https://github.com/TheCodersDream/Angular-Chat-App/raw/master/Screenshot_28.png","https://github.com/TheCodersDream/Angular-Chat-App/raw/master/Screenshot_24.png","https://github.com/TheCodersDream/Angular-Chat-App/raw/master/Screenshot_25.png"],sourceCodeLink:"https://github.com/TheCoderDream/React-Chat-App-With-Redux-And-Firebase",demoLink:"https://react-chat-appp.netlify.app/",type:"angular"},{title:"RxJS Clone",images:["https://i.ibb.co/KGsh7kM/Screenshot-7.png"],sourceCodeLink:"https://github.com/TheCoderDream/rxjs-clone",demoLink:"https://stackblitz.com/edit/rxjs-clone?file=index.ts",type:"js"},{title:"Lodash Clone",images:["https://www.agiliacenter.com/wp-content/uploads/2018/04/Lodash.png"],sourceCodeLink:"https://github.com/TheCoderDream/Lodash-Clone",demoLink:"#",type:"js"}].filter((e=>"react"===e.type));var Q=()=>{const[e,t]=Object(s.useState)(Z);return Object(C.jsxs)("div",{className:"page",id:"works",children:[Object(C.jsx)(P,{children:"WORKS"}),Object(C.jsx)("div",{className:"row",children:Object(C.jsx)(Y,{images:"",title:""})})]})},$=a(62),ee=a(46),te=a.n(ee);a(87);var ae=()=>{const[e,t]=Object(s.useState)(""),[a,c]=Object(s.useState)(""),r=Object($.a)({initialValues:{name:"",email:"",subject:"",message:""},validate(e){const t={};return e.name||(t.name="Required"),e.subject||(t.subject="Required"),e.message||(t.message="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},async onSubmit(e){console.log(e);try{te.a.init("dCH3Ae0oKgycyXppm"),await te.a.send("service_qxl22w9","template_tkomq59",e),await te.a.send("service_qxl22w9","template_jlskk8a",e),r.resetForm(),t("Thank you! Your message has been successfully sent"),setTimeout((()=>{t("")}),5e3)}catch(a){c("Something went wrong while sending your message!"),setTimeout((()=>{c("")}),5e3)}}});function n(e){let{name:t}=e;return r.errors[t]?Object(C.jsx)("div",{className:"contact-form__err",children:r.errors[t]}):null}return Object(C.jsxs)("form",{onSubmit:r.handleSubmit,children:[Object(C.jsxs)("div",{className:"contact-form",children:[Object(C.jsxs)("div",{className:"contact-form__control",children:[Object(C.jsx)("input",{value:r.values.name,onChange:r.handleChange,type:"text",placeholder:"Full Name",name:"name"}),Object(C.jsx)(n,{name:"name"})]}),Object(C.jsxs)("div",{className:"contact-form__control",children:[Object(C.jsx)("input",{value:r.values.email,onChange:r.handleChange,type:"text",placeholder:"Email Address",name:"email"}),Object(C.jsx)(n,{name:"email"})]}),Object(C.jsxs)("div",{className:"contact-form__control full-row",children:[Object(C.jsx)("input",{value:r.values.subject,onChange:r.handleChange,className:"subject",type:"text",placeholder:"Subject",name:"subject"}),Object(C.jsx)(n,{name:"subject"})]}),Object(C.jsxs)("div",{className:"contact-form__control full-row",children:[Object(C.jsx)("textarea",{value:r.values.message,onChange:r.handleChange,placeholder:"Your Message",name:"message"}),Object(C.jsx)(n,{name:"message"})]})]}),Object(C.jsx)("button",{className:"send-message",type:"submit",children:"SEND MESSAGE"}),Object(C.jsxs)("div",{className:"contact-form__result",children:[e&&Object(C.jsxs)("span",{className:"contact-form__scc",children:[" ",e," "]}),a&&Object(C.jsxs)("span",{className:"contact-form__scc",children:[" ",a," "]})]})]})};var se=()=>Object(C.jsxs)("div",{className:"page",id:"contact",children:[Object(C.jsx)(P,{children:"Contact Me"}),Object(C.jsx)(ae,{})]});a(88);const ce=()=>{const e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(ce),window.scrollTo(0,e-e/10))};var re=()=>{const[e,t]=Object(s.useState)("");return Object(s.useEffect)((()=>{function e(e){window.scrollY>0?t("show"):t("hide")}return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),Object(C.jsx)("div",{onClick:ce,className:"back-to-top ".concat(e),children:Object(C.jsx)("i",{className:"fas fa-arrow-circle-up"})})};const ne=Object(X.o)((e=>{let{location:t}=e;return Object(C.jsx)(o.TransitionGroup,{className:"transition-wrapper",children:Object(C.jsx)(o.CSSTransition,{classNames:"transition",timeout:1e3,unmountOnExit:!0,children:Object(C.jsxs)(X.g,{children:[Object(C.jsx)(X.d,{exact:!0,path:"/",children:Object(C.jsx)(V,{})}),Object(C.jsx)(X.d,{exact:!0,path:"/works",children:Object(C.jsx)(Q,{})}),Object(C.jsx)(X.d,{exact:!0,path:"/contact",children:Object(C.jsx)(se,{})})]})},t.pathname)})}));var oe=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(re,{}),Object(C.jsxs)("div",{className:"page-wrap",children:[Object(C.jsx)(R,{}),Object(C.jsx)(J.HashRouter,{children:Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)(W,{}),Object(C.jsx)(B,{}),Object(C.jsx)(ne,{})]})})]})]})};var ie=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((t=>{let{getCLS:a,getFID:s,getFCP:c,getLCP:r,getTTFB:n}=t;a(e),s(e),c(e),r(e),n(e)}))};n.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(A,{children:Object(C.jsx)(oe,{})})}),document.getElementById("root")),ie()}},[[96,1,2]]]);
//# sourceMappingURL=main.5eaed939.chunk.js.map