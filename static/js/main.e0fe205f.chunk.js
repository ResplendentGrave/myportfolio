(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{66:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},96:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(27),i=s.n(a),r=(s(66),s(51)),o=s(102),l=s(101),j=s(43),d=s(100),m=s(99),h=s.p+"static/media/ngrx.b49f3c62.png",b=s.p+"static/media/react.ef20e673.png",u=s.p+"static/media/node.a8c363ae.png",p=s.p+"static/media/js.e35fa00e.png",x=s.p+"static/media/redux.4516fe25.jpg",O=s.p+"static/media/angular.367d4f3d.png",g=s.p+"static/media/vue.17c4554a.jpeg";const v={react:{backgroundImage:b,linearGradient:f("#61dafb","#222222"),primaryColor:"#61dafb",color:"#222222"},angular:{backgroundImage:O,linearGradient:f("#0043A9","#B42B2C"),primaryColor:"#B52C2D",color:"#0043A9"},vue:{backgroundImage:g,linearGradient:f("#49D191","#33475F"),primaryColor:"#33475F",color:"#49D191"},node:{backgroundImage:u,linearGradient:f("#80BD01","#333333"),primaryColor:"#333333",color:"#80BD01"},javascript:{backgroundImage:p,linearGradient:f("#F7E018","#000000"),primaryColor:"#F7E018",color:"#000000"},rxjs:{backgroundImage:h,linearGradient:f("#F80090","#242A31"),primaryColor:"#F80090",color:"#242A31"},redux:{backgroundImage:x,linearGradient:f("#764ABD","#1E1E1E"),primaryColor:"#764ABD",color:"#1E1E1E"},ngrx:{backgroundImage:h,linearGradient:f("#F80090","#242A31"),primaryColor:"#F80090",color:"#242A31"}};function f(e,t){return"linear-gradient(to bottom right, ".concat(e," 0%, ").concat(t," 100%)")}var N=s(1);const k=new o.a;let y;const{Provider:C,Consumer:w}=y=n.a.createContext();class _ extends c.Component{constructor(){super(...arguments),this.state={...v.react,type:"react"},this.subscription=null,this.changeTheme=e=>{v[e]&&this.setState((t=>(this.setThemeColors(v[e]),t.type!==e?{...v[e],animate:!0,type:e}:t)))},this.stopThemeChangeTimer=()=>{k.next(!1)},this.startThemeChangeTimer=()=>{k.next(!0)}}componentDidMount(){this.setThemeColors(v.react),this.subscription=k.pipe(Object(d.a)(!0),Object(m.a)((e=>e?Object(l.a)(1e4):j.a))).subscribe((()=>{const e=Object.keys(v);let t=e[Math.floor(Math.random()*e.length)];for(;t===this.state.type;)t=e[Math.floor(Math.random()*e.length)]}))}setThemeColors(e){document.documentElement.style.setProperty("--primary-color",e.primaryColor),document.documentElement.style.setProperty("--secondary-color",e.color)}render(){return Object(N.jsx)(C,{value:{...this.state,changeTheme:this.changeTheme,stopThemeChangeTimer:this.stopThemeChangeTimer,startThemeChangeTimer:this.startThemeChangeTimer},children:this.props.children})}}function T(){const{type:e}=Object(c.useContext)(y),[t,s]=Object(c.useState)(""),[n,a]=Object(c.useState)(null);return Object(c.useEffect)((()=>{s(""),setTimeout((()=>s("fade-in")),50)}),[e]),{animation:t}}s(68);const I=()=>{const{linearGradient:e}=Object(c.useContext)(y),{animation:t}=T();return Object(N.jsx)("div",{className:"main ".concat(t),style:{background:e},children:Object(N.jsx)(I.Bubbles,{})})};I.Bubbles=()=>function(e,t){const s=[];for(let c=e;c<=t;c++)s.push(c);return s}(1,30).map((e=>Object(N.jsx)("div",{className:"bubble bubble-".concat(e)},e)));var S=I;s(69),s(70);class R extends n.a.Component{constructor(){super(...arguments),this.state={text:"Frontend engineer"}}render(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("span",{className:"typed-text",children:this.state.text})})}}var E=R;s(71);const L=()=>Object(N.jsxs)("div",{className:"social",children:[Object(N.jsx)(L.Link,{url:"https://github.com/ResplendentGrave",type:"github"}),Object(N.jsx)(L.Link,{url:"https://t.me/HUGUANGXIN",type:"telegram"})]});L.Link=e=>{let{url:t,type:s}=e;return Object(N.jsx)("a",{href:t,target:"_blank",children:Object(N.jsx)("span",{className:"fab fa-".concat(s)})})};var M=L;s(72);var G=e=>{let{icon:t,children:s}=e;return Object(N.jsxs)("div",{className:"info",children:[Object(N.jsxs)("div",{className:"property",children:[Object(N.jsx)("i",{className:"ion-ios-".concat(t)}),Object(N.jsxs)("strong",{children:[t,":"]})]}),Object(N.jsx)("span",{children:s})]})};s(73);var A=()=>{const{changeTheme:e,startThemeChangeTimer:t,stopThemeChangeTimer:s}=Object(c.useContext)(y);return Object(N.jsxs)("div",{className:"skills",children:[Object(N.jsx)("h6",{children:"Skills"}),Object(N.jsxs)("ul",{onMouseEnter:s,onMouseLeave:t,onMouseOver:function(e){},children:[Object(N.jsx)("li",{id:"react",children:"React"}),Object(N.jsx)("li",{id:"redux",children:"Redux"}),Object(N.jsx)("li",{id:"node",children:"Node"}),Object(N.jsx)("li",{id:"javascript",children:"JavaScript"})]})]})},F=s.p+"static/media/PHOTO.f4930a21.JPG",D=s.p+"static/media/HU_resume_0412.aa120709.pdf";var B=()=>{const{type:e}=Object(c.useContext)(y),{animation:t}=T();return Object(N.jsxs)("div",{className:"profile",children:[Object(N.jsxs)("div",{className:"profile__banner",children:[Object(N.jsx)("div",{className:"profile__photo ".concat(t)}),Object(N.jsx)("img",{src:F,alt:e})]}),Object(N.jsxs)("div",{className:"profile__content",children:[Object(N.jsx)("div",{className:"profile__title",children:"HU GUANGXIN"}),Object(N.jsx)(E,{}),Object(N.jsx)(M,{}),Object(N.jsx)(G,{icon:"location",children:"MORIOKA"}),Object(N.jsx)(A,{})]}),Object(N.jsxs)("div",{className:"profile__contact",children:[Object(N.jsx)("a",{href:D,target:"_blank",rel:"noreferrer",children:Object(N.jsx)("span",{children:"Download CV"})}),Object(N.jsx)("a",{href:"mailto:g0323065@iwate-u.ac.jp",children:Object(N.jsx)("span",{children:"Contact Me"})})]})]})},H=s(58);s(78);const q=()=>Object(N.jsxs)("ul",{className:"menu",children:[Object(N.jsx)(q.Item,{name:"person",link:"/#about",children:"about"}),Object(N.jsx)(q.Item,{name:"paintbrush",link:"/works#works",children:"Works"}),Object(N.jsx)(q.Item,{name:"at",link:"/contact#contact",children:"contact"})]});q.Item=e=>{let{link:t="#",children:s,name:c}=e;return Object(N.jsx)("li",{children:Object(N.jsxs)(H.NavHashLink,{smooth:!0,to:t,activeClassName:"active",exact:!0,children:[Object(N.jsx)("span",{className:"icon ion-".concat(c)}),s]})})};var P=q;s(79),s(80);var U=e=>{let{children:t,icon:s}=e;return Object(N.jsxs)("div",{className:"title",children:[s&&Object(N.jsx)("i",{className:s}),Object(N.jsx)("h3",{children:t})]})};var X=()=>Object(N.jsxs)("div",{className:"page",id:"about",children:[Object(N.jsx)(U,{children:"About Me"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"column",children:[Object(N.jsx)("strong",{children:"Hi, I am HU GUANGXIN!"}),Object(N.jsxs)("p",{children:[Object(N.jsx)("br",{}),"Currently enrolled in a Master's program at Iwate University, with a personal focus on 3D algorithms and point clouds. I have been studying the web field since university and have been involved in the development of web applications.",Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),"Mainly use React for front-end development on a daily basis, with a deep understanding of Javascript and familiarity with team development. Personally, I like to learn and use the latest technologies as the web front-end field is ever-changing and am looking for challenging projects."]})]})}),Object(N.jsx)(U,{children:"Highlights of Qualifications"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"column",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:"Deep understanding of JavaScript"}),Object(N.jsx)("li",{children:"Hungry and eager to learn"}),Object(N.jsx)("li",{children:"Ability to learn rapidly"}),Object(N.jsx)("li",{children:"Follow emerge technologies"})]})})})]}),J=s(30),W=s(4);s(81);var Y=s(59);s(82),s(83);var Z=e=>{let{len:t,activeItem:s,changeItem:c}=e;const n=[];for(let a=0;a<t;a++){let e="owl-dot";s===a&&(e+=" active"),n.push(Object(N.jsx)("button",{onClick:()=>{c(a)},className:e,children:Object(N.jsx)("span",{})},a+1))}return Object(N.jsx)("div",{className:"owl-dots",children:n})};var K=e=>{let{classNames:t,images:s}=e;const n=Object(c.useRef)(),[a,i]=Object(c.useState)(s[0]),[r,o]=Object(c.useState)(0),l=e=>{let t;t="touchmove"===e.type?e.touches[0].clientX:e.clientX;const c=t-n.current.getBoundingClientRect().left,a=n.current.clientWidth/s.length;let r=Math.ceil(c/a)-1;r<0&&(r=0),r>=s.length&&(r=s.length-1),o(r),i(s[r])},j=e=>{i(s[0]),o(0)};return Object(N.jsxs)("div",{ref:n,className:t,style:{position:"relative"},children:[Object(N.jsx)(Y.LazyLoadImage,{src:a,alt:"works",effect:"blur",onMouseMove:l,onMouseOut:j,onTouchMove:l,onTouchEnd:j}),Object(N.jsx)(Z,{len:s.length,activeItem:r,changeItem:e=>{i(s[e]),o(e)}})]})};var V=e=>{let{images:t,title:s,sourceCodeLink:c,demoLink:n}=e;return Object(N.jsxs)("div",{className:"work-item",children:[Object(N.jsx)(K,{images:t,classNames:"work-item__slider"}),Object(N.jsx)("h3",{children:s}),Object(N.jsxs)("div",{className:"work-item__links",children:[c&&Object(N.jsxs)("a",{href:c,className:"work-item__source-code",children:[Object(N.jsx)("i",{className:"fas fa-code"}),"Source Code"]}),n&&Object(N.jsxs)("a",{href:n,className:"work-item__demo",children:[Object(N.jsx)("i",{className:"fas fa-rocket"}),"Demo"]})]})]})};s(84);const z=[{title:"Minnano Note",images:["https://i.ibb.co/cgtRFkY/shot1.jpg","https://i.ibb.co/hsX29vg/shot16.jpg","https://i.ibb.co/m6rfF2D/shot17.jpg","https://i.ibb.co/LpsZc1R/shot18.jpg"],sourceCodeLink:"https://github.com/ResplendentGrave/MNNnote",demoLink:"",type:"react"}].filter((e=>"react"===e.type));var Q=()=>{const[e,t]=Object(c.useState)(z);return Object(N.jsxs)("div",{className:"page",id:"works",children:[Object(N.jsx)(U,{children:"WORKS"}),Object(N.jsx)("div",{className:"row",children:e.map((e=>Object(N.jsx)("div",{className:"column",children:Object(N.jsx)(V,{...e})},e.sourceCodeLink)))}),Object(N.jsx)("div",{className:"row",children:Object(N.jsx)(V,{title:"React portfolio",images:["https://i.ibb.co/3TqgZRr/shot20.jpg"],sourceCodeLink:"https://github.com/ResplendentGrave/myportfolio",demoLink:"",type:"react"})}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)(V,{title:"React flea market management site",images:["https://i.ibb.co/dDRnqfb/shot30.jpg","https://i.ibb.co/w4mxr7Y/shot31.jpg"],sourceCodeLink:"https://github.com/ResplendentGrave/react_manage_site",demoLink:"",type:"react"}),Object(N.jsx)(V,{title:"Weixin flea market",images:["https://i.ibb.co/R6WFtb4/shot34.jpg","https://i.ibb.co/PNkp7bj/shot33.jpg","https://i.ibb.co/x8stHR4/shot32.jpg"],sourceCodeLink:"https://github.com/ResplendentGrave/wx_fleamarket",demoLink:"",type:"react"})]}),Object(N.jsx)(U,{children:"ARTICLES"})]})},$=s(62),ee=s(46),te=s.n(ee);s(87);var se=()=>{const[e,t]=Object(c.useState)(""),[s,n]=Object(c.useState)(""),a=Object($.a)({initialValues:{name:"",email:"",subject:"",message:""},validate(e){const t={};return e.name||(t.name="Required"),e.subject||(t.subject="Required"),e.message||(t.message="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},async onSubmit(e){console.log(e);try{te.a.init("dCH3Ae0oKgycyXppm"),await te.a.send("service_qxl22w9","template_tkomq59",e),await te.a.send("service_qxl22w9","template_jlskk8a",e),a.resetForm(),t("Thank you! Your message has been successfully sent"),setTimeout((()=>{t("")}),5e3)}catch(s){n("Something went wrong while sending your message!"),setTimeout((()=>{n("")}),5e3)}}});function i(e){let{name:t}=e;return a.errors[t]?Object(N.jsx)("div",{className:"contact-form__err",children:a.errors[t]}):null}return Object(N.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(N.jsxs)("div",{className:"contact-form",children:[Object(N.jsxs)("div",{className:"contact-form__control",children:[Object(N.jsx)("input",{value:a.values.name,onChange:a.handleChange,type:"text",placeholder:"Full Name",name:"name"}),Object(N.jsx)(i,{name:"name"})]}),Object(N.jsxs)("div",{className:"contact-form__control",children:[Object(N.jsx)("input",{value:a.values.email,onChange:a.handleChange,type:"text",placeholder:"Email Address",name:"email"}),Object(N.jsx)(i,{name:"email"})]}),Object(N.jsxs)("div",{className:"contact-form__control full-row",children:[Object(N.jsx)("input",{value:a.values.subject,onChange:a.handleChange,className:"subject",type:"text",placeholder:"Subject",name:"subject"}),Object(N.jsx)(i,{name:"subject"})]}),Object(N.jsxs)("div",{className:"contact-form__control full-row",children:[Object(N.jsx)("textarea",{value:a.values.message,onChange:a.handleChange,placeholder:"Your Message",name:"message"}),Object(N.jsx)(i,{name:"message"})]})]}),Object(N.jsx)("button",{className:"send-message",type:"submit",children:"SEND MESSAGE"}),Object(N.jsxs)("div",{className:"contact-form__result",children:[e&&Object(N.jsxs)("span",{className:"contact-form__scc",children:[" ",e," "]}),s&&Object(N.jsxs)("span",{className:"contact-form__scc",children:[" ",s," "]})]})]})};var ce=()=>Object(N.jsxs)("div",{className:"page",id:"contact",children:[Object(N.jsx)(U,{children:"Contact Me"}),Object(N.jsx)(se,{})]});s(88);const ne=()=>{const e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(ne),window.scrollTo(0,e-e/10))};var ae=()=>{const[e,t]=Object(c.useState)("");return Object(c.useEffect)((()=>{function e(e){window.scrollY>0?t("show"):t("hide")}return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),Object(N.jsx)("div",{onClick:ne,className:"back-to-top ".concat(e),children:Object(N.jsx)("i",{className:"fas fa-arrow-circle-up"})})};const ie=Object(W.o)((e=>{let{location:t}=e;return Object(N.jsx)(r.TransitionGroup,{className:"transition-wrapper",children:Object(N.jsx)(r.CSSTransition,{classNames:"transition",timeout:1e3,unmountOnExit:!0,children:Object(N.jsxs)(W.g,{children:[Object(N.jsx)(W.d,{exact:!0,path:"/",children:Object(N.jsx)(X,{})}),Object(N.jsx)(W.d,{exact:!0,path:"/works",children:Object(N.jsx)(Q,{})}),Object(N.jsx)(W.d,{exact:!0,path:"/contact",children:Object(N.jsx)(ce,{})})]})},t.pathname)})}));var re=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(ae,{}),Object(N.jsxs)("div",{className:"page-wrap",children:[Object(N.jsx)(S,{}),Object(N.jsx)(J.HashRouter,{children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(P,{}),Object(N.jsx)(B,{}),Object(N.jsx)(ie,{})]})})]})]})};var oe=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,103)).then((t=>{let{getCLS:s,getFID:c,getFCP:n,getLCP:a,getTTFB:i}=t;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(_,{children:Object(N.jsx)(re,{})})}),document.getElementById("root")),oe()}},[[96,1,2]]]);
//# sourceMappingURL=main.e0fe205f.chunk.js.map