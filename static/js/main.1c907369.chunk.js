(this["webpackJsonppersonal-website-v2-master"]=this["webpackJsonppersonal-website-v2-master"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/projectboard.10e5641f.png"},function(e,a,t){e.exports=t.p+"static/media/shopsmart.71bc0640.png"},function(e,a,t){e.exports=t.p+"static/media/zombie.2c0d92d9.png"},function(e,a,t){e.exports=t.p+"static/media/pong.7cbb2e57.png"},function(e,a,t){e.exports=t.p+"static/media/platformer.a91630dc.png"},function(e,a,t){e.exports=t.p+"static/media/cube.df15a9d4.png"},function(e,a,t){e.exports=t.p+"static/media/money.86f9e609.png"},function(e,a,t){e.exports=t.p+"static/media/ideaconnect.a9e0bb0b.png"},function(e,a,t){e.exports=t.p+"static/media/challengers.89ec80f6.png"},function(e,a,t){e.exports=t.p+"static/media/profile_basketball.ad610ec2.JPG"},function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(4),i=t.n(s),c=t(1),r=(t(20),t(5)),o=t.n(r),m=t(6),d=t.n(m),u=t(7),E=t.n(u),g=t(8),b=t.n(g),p=t(9),f=t.n(p),h=t(10),v=t.n(h),N=t(11),k=t.n(N),w=t(12),y=t.n(w),j=t(13),x=[{icon:"palette",name:"Challengers",description:"A web app made with the MERN stack to facilitate employee engagement",website:"https://github.com/ryandeng32/Challengers",image:t.n(j).a},{icon:"lightbulb",name:"IdeaConnect",description:"Real-time chatrooms to connect ideas built with MERN stack and socket.io",website:"https://github.com/ryandeng32/IdeaConnect",image:y.a},{icon:"piggy-bank",name:"ShopSmart",description:"A chrome extention built to prevent impulse spending on Amazon.",website:"https://github.com/ryandeng32/starterhacks2020",image:d.a},{icon:"biohazard",name:"Topdown Shooter",description:"A tile-based game in top-down style using Python with the PyGame library",website:"https://github.com/ryandeng32/pygame-topdown",image:E.a},{icon:"table-tennis",name:"3-D Pong",description:"A remake of the classic game Pong in 3D with VPython.",website:"https://github.com/ryandeng32/3D_Pong",image:b.a},{icon:"clipboard",name:"ProjectBoard",description:"A minimalist approach to SCRUM board as a chrome extension",website:"https://github.com/ryandeng32/ProjectBoard",image:o.a},{icon:"gamepad",name:"Impossible Game",description:"A hard 2D platformer game made with Unity and C#.",website:"https://github.com/ryandeng32/Impossible-Platformer",image:f.a},{icon:"cube",name:"Master RC.",description:"A Rubik's cube solving website by incorporating the kociemba library.",website:"https://github.com/ryandeng32/Master_RC",image:v.a},{icon:"briefcase",name:"Stock Scraper",description:"A webcrawler that returns relevant information on stock website.",website:"https://github.com/ryandeng32/stockCrawl",image:k.a}],S=t(2),C=(t(21),t(14)),I=t.n(C),_=function(e){var a=e.handleAbout,t=e.handleSetPage,s=e.num_projects,i={project_on:!1,work_on:!1,skill_on:!1,about_on:!1},r=Object(n.useState)({height:window.innerHeight,width:window.innerWidth}),o=Object(c.a)(r,2),m=o[0],d=o[1],u=Object(n.useState)(Object(S.a)(Object(S.a)({},i),{},{about_on:!0})),E=Object(c.a)(u,2),g=E[0],b=E[1],p=g.project_on,f=g.work_on,h=g.skill_on,v=g.about_on,N=m.height,k=m.width;Object(n.useEffect)((function(){var e=function(){d({height:window.innerHeight,width:window.innerWidth})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var w=k>500;Object(n.useEffect)((function(){a(!w)}));var y=w?115+.04*k:.3*k,j={width:"".concat(y,"px"),height:"".concat(y,"px")},x=w?{width:"".concat(2.3*y,"px")}:{width:"70%"},C=w?{height:"".concat(2.3*y,"px")}:{height:"70%"};return l.a.createElement("section",{style:w?{height:Math.max(N,550)}:{height:.9*k},className:"intro"},l.a.createElement("img",{className:"profile_img",src:I.a,alt:""}),l.a.createElement("div",{style:x,className:"hr-line"}),l.a.createElement("div",{style:C,className:"vt-line"}),l.a.createElement("div",{style:j,className:v?"intro-btn btn-about about_on on":"intro-btn btn-about",name:"About",onClick:function(e){t(e),b({reset:i,about_on:!0}),w&&window.scroll({top:N-10,behavior:"smooth"})}},l.a.createElement("i",{className:"fas fa-user",name:"About"}),l.a.createElement("div",{className:"intro-text",name:"About"},"About Me")),l.a.createElement("div",{style:j,className:p?"intro-btn btn-project project_on on":"intro-btn btn-project",name:"Projects",onClick:function(e){t(e),b({reset:i,project_on:!0}),w&&window.scroll({top:N-10,behavior:"smooth"})}},l.a.createElement("i",{className:"fas fa-project-diagram",name:"Projects"}),l.a.createElement("div",{className:"intro-text",name:"Projects"},"".concat(s," Projects"))),l.a.createElement("div",{style:j,className:h?"intro-btn btn-skill skill_on on":"intro-btn btn-skill",name:"Skills",onClick:function(e){t(e),b({reset:i,skill_on:!0}),w&&window.scroll({top:N-10,behavior:"smooth"})}},l.a.createElement("i",{className:"fas fa-tools",name:"Skills"}),l.a.createElement("div",{className:"intro-text",name:"Skills"},"Skills")),l.a.createElement("div",{style:j,className:f?"intro-btn btn-work work_on on":"intro-btn btn-work",name:"Work",onClick:function(e){t(e),b({reset:i,work_on:!0}),w&&window.scroll({top:N-10,behavior:"smooth"})}},l.a.createElement("i",{className:"fas fa-briefcase",name:"Work"}),l.a.createElement("div",{className:"intro-text",name:"Work"},"Work")),w?l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"I'm ",l.a.createElement("strong",null,"Ryan Deng")),l.a.createElement("p",null,"Welcome, I'm glad you are here.")):null)},P=function(e){var a=e.project,t=a.icon,s=a.name,i=a.description,r=a.website,o=a.image,m=Object(n.useState)(!1),d=Object(c.a)(m,2),u=d[0],E=d[1];return l.a.createElement(n.Fragment,null,l.a.createElement("div",{onClick:function(e){E(!u)},className:u?"is-clicked project":"project"},l.a.createElement("i",{className:"fas fa-".concat(t," icon")}),l.a.createElement("h1",{className:"project-title"},s),l.a.createElement("img",{className:"thumbnail",alt:"thumbnail",src:o}),l.a.createElement("div",{className:"project-preview"},l.a.createElement("p",{className:"project-description"},i),l.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"project-button"},"Read More"))))},A=(t(22),function(e){var a=e.projects_data;return l.a.createElement("section",{className:"projects-section"},l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"projects-title section-title"},"My Projects"),l.a.createElement("div",{className:"projects-hint section-title"},"Click Project to Expand"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"projects"},a.map((function(e){return l.a.createElement(P,{key:e.name,project:e})}))))))}),D=(t(23),function(e){var a=e.displayIntro;return l.a.createElement("section",{className:"about"},l.a.createElement("div",{className:"about-title section-title"},"About me"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"about-text"},a?l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"about-text-title"},"Hi! I'm ",l.a.createElement("strong",null,"Ryan Deng")),l.a.createElement("div",{className:"about-text-lead"},"Welcome, I'm glad you are here.")):null,l.a.createElement("br",null),l.a.createElement("p",null,"I am a sophomore studying ",l.a.createElement("strong",null,"Software Engineering")," at the",l.a.createElement("strong",null," University of Waterloo.")," ",l.a.createElement("a",{href:"#!"},"Check out My Resume")),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Learning is my greatest passion"),", I consider myself a self starter and I'm naturally inquisitive, I was drawn to coding when I first started 3 years ago, and I've been in"," ",l.a.createElement("i",{style:{color:"rgba(234, 53, 117, 1)"},className:"fas fa-heart"})," ","with it ever since."),l.a.createElement("br",null),l.a.createElement("p",null,"I love exploring new technologies and utilizing them to solve important problems."),l.a.createElement("br",null),l.a.createElement("div",{className:"about-list"},l.a.createElement("div",null,"I've done ",l.a.createElement("strong",null," Full-stack Dev")," ",l.a.createElement("i",{className:"ml-1 fas fa-layer-group"})),l.a.createElement("div",null,l.a.createElement("strong",null," Game Dev")," ",l.a.createElement("i",{className:"ml-1 fas fa-gamepad"})),l.a.createElement("div",null,l.a.createElement("strong",null," Scripting")," ",l.a.createElement("i",{className:"ml-1 fas fa-file-alt"})),l.a.createElement("div",null,l.a.createElement("strong",null," AI Programming")," ",l.a.createElement("i",{className:"ml-1 fas fa-robot"}))),l.a.createElement("br",null),l.a.createElement("p",{className:"text-center"},"I believe ",l.a.createElement("strong",null,"coding is a superpower")),l.a.createElement("hr",null),l.a.createElement("p",null,"Aside from coding, I have a lot of personal interests."),l.a.createElement("br",null),l.a.createElement("div",{className:"about-list"},l.a.createElement("div",null,"I'm a",l.a.createElement("strong",null," Speed Cuber")," ",l.a.createElement("i",{className:"ml-1 fas fa-cube"})),l.a.createElement("div",null," ","I love music and",l.a.createElement("strong",null," Playing Guitar")," ",l.a.createElement("i",{className:"ml-1 fas fa-guitar"})),l.a.createElement("div",null," ","I like to do",l.a.createElement("strong",null," Digital Paintings")," ",l.a.createElement("i",{className:"ml-1 fas fa-palette"})),l.a.createElement("div",null,"I'm gladly addicted to",l.a.createElement("strong",null," Gym")," ",l.a.createElement("i",{className:"ml-1 fas fa-dumbbell"})),l.a.createElement("div",null,"I learn",l.a.createElement("strong",null," Philosophies")," for fun"," ",l.a.createElement("i",{className:"ml-1 fas fa-brain"}))))))}),R=(t(24),function(){return l.a.createElement("section",{className:"skills"},l.a.createElement("div",{className:"skills-title section-title"},"Skills"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"skills-text"},l.a.createElement("p",{className:"skill-title"},l.a.createElement("strong",null,"Languages")),l.a.createElement("div",{className:"skills-list"},l.a.createElement("div",{className:"skill-badge"},l.a.createElement("span",{className:"iconify","data-icon":"logos:python","data-inline":"false"})," ",l.a.createElement("div",{className:"skill-badge-name"},"Python")),l.a.createElement("div",{className:"skill-badge"},l.a.createElement("i",{style:{color:"#EFD81D"},className:"fab fa-js"}),l.a.createElement("div",{className:"skill-badge-name"},"JavaScript")),l.a.createElement("div",{className:"skill-badge"},l.a.createElement("i",{style:{color:"#D74A21"},className:"fab fa-html5"}),l.a.createElement("div",{className:"skill-badge-name"},"HTML 5")),l.a.createElement("div",{className:"skill-badge"},l.a.createElement("i",{style:{color:"#254BDD"},className:"fab fa-css3-alt"}),l.a.createElement("div",{className:"skill-badge-name"},"CSS 3")),l.a.createElement("div",{className:"skill-badge"},l.a.createElement("i",{style:{color:"#5968BA"},className:"fab fa-cuttlefish"}),l.a.createElement("div",{className:"skill-badge-name"},"C")),l.a.createElement("div",{className:"skill-badge"},l.a.createElement("span",{className:"iconify","data-icon":"file-icons:c","data-inline":"false",style:{color:"#6295CB"}}),l.a.createElement("div",{className:"skill-badge-name"},"C++"))),l.a.createElement("p",{className:"skill-title"},l.a.createElement("strong",null,"Full-stack Dev")),l.a.createElement("div",{className:"skills-list"},l.a.createElement("div",{className:"skill-badge"},l.a.createElement("span",{className:"iconify","data-icon":"logos:nodejs-icon","data-inline":"false"}),l.a.createElement("div",{className:"skill-badge-name"},"Node.js")),l.a.createElement("div",{className:"skill-badge express"},l.a.createElement("span",{className:"iconify","data-icon":"logos:express","data-inline":"false",style:{fontSize:"1.5rem",paddingTop:"2rem"}}),l.a.createElement("div",{className:"skill-badge-name"},"Express.js")),l.a.createElement("div",{className:"skill-badge"},l.a.createElement("span",{className:"iconify","data-icon":"logos:react","data-inline":"false"}),l.a.createElement("div",{className:"skill-badge-name"},"React.js")),l.a.createElement("div",{className:"skill-badge"},l.a.createElement("span",{className:"iconify","data-icon":"logos:redux","data-inline":"false"}),l.a.createElement("div",{className:"skill-badge-name"},"Redux.js")),l.a.createElement("div",{className:"skill-badge"},l.a.createElement("span",{className:"iconify","data-icon":"cib:mongodb","data-inline":"false",style:{fontSize:"3rem",color:"#78C47C"}})," ",l.a.createElement("div",{className:"skill-badge-name"},"MongoDB")),l.a.createElement("div",{className:"skill-badge"},l.a.createElement("span",{className:"iconify","data-icon":"cib:socket-io","data-inline":"false"})," ",l.a.createElement("div",{className:"skill-badge-name"},"Socket.io"))),l.a.createElement("p",{className:"skill-title"},l.a.createElement("strong",null,"Others")),l.a.createElement("div",{className:"skills-list"},l.a.createElement("div",{className:"skill-badge"},l.a.createElement("span",{className:"iconify","data-icon":"logos:git-icon","data-inline":"false"}),l.a.createElement("div",{className:"skill-badge-name"},"Git")),l.a.createElement("div",{className:"skill-badge"},l.a.createElement("span",{className:"iconify","data-icon":"flat-color-icons:linux","data-inline":"false"}),l.a.createElement("div",{className:"skill-badge-name"},"Linux"))))))}),O=(t(25),function(){return l.a.createElement("section",{className:"work"},l.a.createElement("div",{className:"work-title section-title"},"Work"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"work-text"},l.a.createElement("div",{className:"work-text-title"},"Co-founder at Refinest"),l.a.createElement("div",{className:"work-text-date"},"2020.05 - 2020.08"),l.a.createElement("div",{className:"work-text-list"},l.a.createElement("li",null,"Completed in-depth training in ",l.a.createElement("strong",null,"entrepreneurship")," ","and ",l.a.createElement("strong",null,"problem analysis")," at the"," ",l.a.createElement("strong",null,"Conrad School of Entrepreneurship and Business"),"."),l.a.createElement("br",null),l.a.createElement("li",null,"Worked in a team of two ",l.a.createElement("strong",null,"autonomously")," thoughout the work term following the ",l.a.createElement("strong",null,"Agile workflow")),l.a.createElement("br",null),l.a.createElement("li",null,"Researched the ",l.a.createElement("strong",null,"billion-dollar problem "),"of \u201cCreativity tools\u201d in partnership with the"," ",l.a.createElement("strong",null,"Problem Lab")," at the"," ",l.a.createElement("strong",null,"University of Waterloo")),l.a.createElement("br",null),l.a.createElement("li",null,"Scriped and designed the pitch deck and achieved"," ",l.a.createElement("strong",null,"finalist")," spot in the"," ",l.a.createElement("strong",null,"Quantum Valley Investments Problem Pitch Competition"),".")))))}),W=(t(26),function(e){var a=e.color;return l.a.createElement("section",{className:"footer color-".concat(a)},l.a.createElement("div",{className:"footer-title"},"Thanks for Stopping By ",l.a.createElement("i",{className:"ml-1 fas fa-laugh-squint"})),l.a.createElement("p",null,"Feel free to reach me via"),l.a.createElement("div",{className:"footer-links"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.linkedin.com/in/ryandeng32"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.github.com/ryandeng32"},l.a.createElement("i",{className:"fab fa-github-square"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"mailto:ryan.deng32@gmail.com"},l.a.createElement("i",{className:"fas fa-envelope"}))),l.a.createElement("p",{className:"copyright"},"\xa9 2020 Ryan Deng"))}),M=function(){var e,a=Object(n.useState)(!0),t=Object(c.a)(a,2),s=t[0],i=t[1],r=Object(n.useState)("About"),o=Object(c.a)(r,2),m=o[0],d=o[1];switch(m){case"Projects":e=l.a.createElement(A,{projects_data:x});break;case"About":e=l.a.createElement(D,{displayIntro:s});break;case"Skills":e=l.a.createElement(R,null);break;case"Work":e=l.a.createElement(O,null);break;default:e=null}return l.a.createElement(n.Fragment,null,l.a.createElement(_,{handleSetPage:function(e){d(e.target.getAttribute("name"))},handleAbout:function(e){i(e)},num_projects:x.length}),l.a.createElement("div",null,e),l.a.createElement(W,{color:m}))};i.a.render(l.a.createElement(M,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.1c907369.chunk.js.map