import './polyfills.server.mjs';
import{a as Au,b as Pu,f as Iu}from"./chunk-CMP73W5F.mjs";import{$ as Yi,Aa as Mu,Ab as dt,Ca as bi,Fb as To,Ga as ut,Gb as ws,H as Mr,Ha as bu,Hb as wi,I as vs,Ia as We,Ib as Es,J as br,Ja as Sr,Jb as Ou,K as Vc,Ka as ct,Kb as Ru,La as Su,M as ji,Ma as W,Na as j,O as zc,Oa as Je,Pa as Cr,Qa as Pt,R as Ms,Ra as dn,S as St,Sa as Ht,T as Hc,Ta as Gt,U as An,Ua as Wt,V as pu,Va as oe,Wa as Kt,Xa as Gn,Ya as Cs,Z as Eo,Za as Ct,_ as Xi,aa as Gc,ba as Wc,bb as Cu,ca as jc,fa as bs,ga as Ss,h as uu,i as Mi,ka as Ut,la as mu,lb as wu,m as du,mb as Eu,nb as Yc,qa as Pn,qb as Tu,r as fu,ra as gu,ta as fe,ua as Xe,va as _u,vb as Si,wa as xu,wb as Ci,xa as yu,xb as kt,ya as Xc,za as vu}from"./chunk-7AQNJGV5.mjs";import{a as gt,b as ti,h as un}from"./chunk-VVCT4QZE.mjs";var Du=(()=>{class i{constructor(){this.isMenuOpen=!1,this.isScrolled=!1,this.activeSection=""}onWindowScroll(){this.isScrolled=window.pageYOffset>50,this.updateActiveSection()}toggleMobileMenu(){this.isMenuOpen=!this.isMenuOpen,this.isMenuOpen?document.body.classList.add("menu-open"):document.body.classList.remove("menu-open")}scrollToTop(t){t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),this.closeMobileMenu()}scrollToSection(t,n){t.preventDefault();let r=document.getElementById(n);if(r){let o=r.offsetTop-70;window.scrollTo({top:o,behavior:"smooth"})}this.closeMobileMenu()}closeMobileMenu(){this.isMenuOpen=!1,document.body.classList.remove("menu-open")}updateActiveSection(){let t=["about","education","work","certifications","skills","projects","contact"],n=window.pageYOffset+100;for(let r of t){let s=document.getElementById(r);if(s){let o=s.offsetTop,a=o+s.offsetHeight;if(n>=o&&n<a){this.activeSection=r;break}}}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=St({type:i,selectors:[["app-header"]],hostBindings:function(n,r){n&1&&Pt("scroll",function(){return r.onWindowScroll()},!1,gu)},standalone:!0,features:[Ct],decls:29,vars:18,consts:[[1,"nav"],[1,"nav-container"],["href","#","role","generic",1,"nav-logo",2,"display","flex","align-items","center","gap","8px","text-decoration","none",3,"click"],["src","assets/owl_apple_180.png","alt","Logo",2,"height","36px","width","36px","object-fit","contain","flex-shrink","0"],[2,"font-family","'Dancing Script', cursive","font-size","26px","background","linear-gradient(90deg, rgb(145, 94, 255), rgb(0, 191, 255)) text","-webkit-text-fill-color","transparent"],[1,"nav-menu"],["href","#about",1,"nav-link",3,"click"],["href","#education",1,"nav-link",3,"click"],["href","#work",1,"nav-link",3,"click"],["href","#skills",1,"nav-link",3,"click"],["href","#projects",1,"nav-link",3,"click"],["href","#contact",1,"nav-link",3,"click"],[1,"nav-toggle",3,"click"],[1,"bar"]],template:function(n,r){n&1&&(W(0,"nav",0)(1,"div",1)(2,"a",2),Pt("click",function(o){return r.scrollToTop(o)}),Je(3,"img",3),W(4,"span",4),oe(5," </Karthick Ajan> "),j()(),W(6,"ul",5)(7,"li")(8,"a",6),Pt("click",function(o){return r.scrollToSection(o,"about")}),oe(9,"About"),j()(),W(10,"li")(11,"a",7),Pt("click",function(o){return r.scrollToSection(o,"education")}),oe(12,"Education"),j()(),W(13,"li")(14,"a",8),Pt("click",function(o){return r.scrollToSection(o,"work")}),oe(15,"Work"),j()(),W(16,"li")(17,"a",9),Pt("click",function(o){return r.scrollToSection(o,"skills")}),oe(18,"Skills"),j()(),W(19,"li")(20,"a",10),Pt("click",function(o){return r.scrollToSection(o,"projects")}),oe(21,"Projects"),j()(),W(22,"li")(23,"a",11),Pt("click",function(o){return r.scrollToSection(o,"contact")}),oe(24,"Contact"),j()()(),W(25,"div",12),Pt("click",function(){return r.toggleMobileMenu()}),Je(26,"span",13)(27,"span",13)(28,"span",13),j()()()),n&2&&(ct("scrolled",r.isScrolled),fe(6),ct("active",r.isMenuOpen),fe(2),ct("active",r.activeSection==="about"),fe(3),ct("active",r.activeSection==="education"),fe(3),ct("active",r.activeSection==="work"),fe(3),ct("active",r.activeSection==="skills"),fe(3),ct("active",r.activeSection==="projects"),fe(3),ct("active",r.activeSection==="contact"),fe(2),ct("active",r.isMenuOpen))},dependencies:[kt],styles:['.nav[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;background:transparent;backdrop-filter:none;-webkit-backdrop-filter:none;border-bottom:none;z-index:1000;transition:all .3s cubic-bezier(.4,0,.2,1);padding:1.25rem 4rem}.nav.scrolled[_ngcontent-%COMP%]{background:#050816f2;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 4px 20px #0000004d}@media (max-width: 768px){.nav[_ngcontent-%COMP%]{padding:.75rem 1rem}}.nav-container[_ngcontent-%COMP%]{margin:0 auto;max-width:80rem;display:flex;align-items:center;justify-content:space-between}.nav-logo[_ngcontent-%COMP%]{font-weight:700;color:#915eff;text-decoration:none;transition:color .2s ease;font-size:1.5rem}.nav-logo[_ngcontent-%COMP%]:hover{color:#fff}.nav-menu[_ngcontent-%COMP%]{display:flex;list-style:none;padding:0;gap:2rem;margin:0 0 0 auto}@media (max-width: 768px){.nav-menu[_ngcontent-%COMP%]{display:none}}.nav-item[_ngcontent-%COMP%]{margin:0}.nav-link[_ngcontent-%COMP%]{color:#aaa6c3;text-decoration:none;font-weight:500;font-size:1rem;transition:all .3s ease;position:relative}.nav-link[_ngcontent-%COMP%]:hover, .nav-link.active[_ngcontent-%COMP%]{color:#915eff}.nav-link[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-5px;left:0;width:0;height:2px;background:#915eff;transition:width .3s ease}.nav-link[_ngcontent-%COMP%]:hover:after, .nav-link.active[_ngcontent-%COMP%]:after{width:100%}.nav-toggle[_ngcontent-%COMP%]{display:none;background:none;border:none;color:#915eff;font-size:1.5rem;cursor:pointer;flex-direction:column;gap:4px}@media (max-width: 768px){.nav-toggle[_ngcontent-%COMP%]{display:flex}}.nav-toggle[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{width:25px;height:3px;background:#915eff;transition:all .3s ease;border-radius:2px}.nav-toggle.active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(1){transform:rotate(45deg) translate(5px,5px)}.nav-toggle.active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(2){opacity:0}.nav-toggle.active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(3){transform:rotate(-45deg) translate(7px,-6px)}@media (max-width: 768px){.nav-menu[_ngcontent-%COMP%]{position:fixed;top:100%;left:-100%;width:100%;height:calc(100vh - 100%);background:#050816fa;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);flex-direction:column;gap:1rem;padding:2rem;transition:left .3s ease;border-top:1px solid rgba(145,94,255,.2);display:flex;margin-left:0}.nav-menu.active[_ngcontent-%COMP%]{left:0}.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}.nav-menu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:1rem 0;border-bottom:1px solid rgba(145,94,255,.1);display:block;font-size:1.1rem}}']})}}return i})();var Lu=(()=>{class i{constructor(t){this.platformId=t,this.currentRole="",this.roles=["Software Engineer","Full Stack Developer","Problem Solver","Salesforce Developer"],this.currentIndex=0,this.isDeleting=!1,this.currentText="",this.typingSpeed=80,this.deletingSpeed=40,this.pauseTime=1500}ngOnInit(){dt(this.platformId)&&this.startTypingAnimation()}ngOnDestroy(){dt(this.platformId)&&(this.typingTimeout&&clearTimeout(this.typingTimeout),this.deletingTimeout&&clearTimeout(this.deletingTimeout))}startTypingAnimation(){this.typeText()}typeText(){let t=this.roles[this.currentIndex];this.isDeleting?(this.currentText=t.substring(0,this.currentText.length-1),this.currentRole=this.currentText,this.currentText===""?(this.isDeleting=!1,this.currentIndex=(this.currentIndex+1)%this.roles.length,this.typingTimeout=setTimeout(()=>this.typeText(),50)):this.deletingTimeout=setTimeout(()=>this.typeText(),this.deletingSpeed)):(this.currentText=t.substring(0,this.currentText.length+1),this.currentRole=this.currentText,this.currentText===t?this.typingTimeout=setTimeout(()=>{this.isDeleting=!0,this.typeText()},this.pauseTime):this.typingTimeout=setTimeout(()=>this.typeText(),this.typingSpeed))}static{this.\u0275fac=function(n){return new(n||i)(Xe(Ut))}}static{this.\u0275cmp=St({type:i,selectors:[["app-hero"]],standalone:!0,features:[Ct],decls:21,vars:1,consts:[[1,"hero-section"],[1,"hero-container"],[1,"hero-content"],[1,"hero-visual"],[1,"hero-dot"],[1,"hero-line"],[1,"text-content"],[1,"main-title"],[1,"name-highlight"],[1,"wave-emoji"],[1,"subtitle"],[1,"typing-text"],[1,"cursor"],[1,"welcome-message"]],template:function(n,r){n&1&&(W(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),Je(4,"div",4)(5,"div",5),j(),W(6,"div",6)(7,"h1",7),oe(8," Hi, I'm "),W(9,"span",8),oe(10,"Karthick"),j(),W(11,"span",9),oe(12,"\u{1F44B}"),j()(),W(13,"p",10),oe(14," I'm a "),W(15,"span",11),oe(16),W(17,"span",12),oe(18,"|"),j()()(),W(19,"p",13),oe(20," Welcome to my portfolio, please visit on desktop for an interactive experience! "),j()()()()()),n&2&&(fe(16),Kt(r.currentRole))},dependencies:[kt],styles:[".hero-section[_ngcontent-%COMP%]{background:transparent;position:relative;display:flex;align-items:center;justify-content:center;padding:2rem}@media (max-width: 768px){.hero-section[_ngcontent-%COMP%]{padding:1rem;padding-top:60px}}@media (max-width: 480px){.hero-section[_ngcontent-%COMP%]{padding:.5rem;padding-top:50px}}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]{position:relative;z-index:2}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]{max-width:80rem;width:100%}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;gap:20px;max-width:80rem;margin-left:65px;margin-top:15px}@media (max-width: 768px){.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]{flex-direction:column;margin-left:0;margin-top:10px;gap:15px;padding:0 1rem}}@media (max-width: 480px){.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]{padding:0 .5rem}}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:25px}@media (max-width: 768px){.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]{display:none}}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-dot[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;background:#915eff;margin-bottom:-1px}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-line[_ngcontent-%COMP%]{width:4px;height:320px;background:linear-gradient(180deg,#915eff 0%,rgba(145,94,255,.8) 30%,rgba(145,94,255,.4) 60%,rgba(145,94,255,.1) 90%,transparent 100%)}@media (max-width: 768px){.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-visual[_ngcontent-%COMP%]   .hero-line[_ngcontent-%COMP%]{height:250px}}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{text-align:left;flex:1}@media (max-width: 768px){.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]{text-align:center}}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]{font-size:5rem;font-weight:900;color:#fff;margin-top:1rem;margin-bottom:1rem;line-height:1.2;font-family:Poppins,sans-serif;letter-spacing:-.02em;text-shadow:.5px 0 0 currentColor,-.5px 0 0 currentColor,0 .5px 0 currentColor,0 -.5px 0 currentColor}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   .name-highlight[_ngcontent-%COMP%]{color:#915eff;text-shadow:.5px 0 0 #915eff,-.5px 0 0 #915eff,0 .5px 0 #915eff,0 -.5px 0 #915eff}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   .wave-emoji[_ngcontent-%COMP%]{display:inline-block;animation:_ngcontent-%COMP%_wave 1s ease-in-out infinite alternate}@media (max-width: 768px){.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]{font-size:3rem;margin-top:.5rem;margin-bottom:.5rem}}@media (max-width: 480px){.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]{font-size:2.5rem}}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:500;color:#fff;font-family:Poppins,sans-serif;margin-bottom:0rem}@media (max-width: 768px){.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.4rem}}@media (max-width: 480px){.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.2rem}}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .typing-text[_ngcontent-%COMP%]{font-weight:700;color:#915eff;position:relative}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .typing-text[_ngcontent-%COMP%]   .cursor[_ngcontent-%COMP%]{color:#915eff;animation:_ngcontent-%COMP%_blink 1s infinite;font-weight:700}.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .welcome-message[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;color:#fff;font-family:Poppins,sans-serif;line-height:1.6;max-width:1110px;opacity:.9}@media (max-width: 768px){.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .welcome-message[_ngcontent-%COMP%]{font-size:1.1rem;max-width:100%;margin-top:1rem}}@media (max-width: 480px){.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .welcome-message[_ngcontent-%COMP%]{font-size:1rem}}@keyframes _ngcontent-%COMP%_wave{0%{transform:rotate(0) translateZ(0)}50%{transform:rotate(20deg) translateZ(0)}to{transform:rotate(0) translateZ(0)}}@keyframes _ngcontent-%COMP%_blink{0%,50%{opacity:1}51%,to{opacity:0}}@keyframes _ngcontent-%COMP%_float{0%,to{transform:translateY(0) translateZ(0)}50%{transform:translateY(-20px) translateZ(0)}}.wave-emoji[_ngcontent-%COMP%]{will-change:transform;backface-visibility:hidden}.cursor[_ngcontent-%COMP%]{will-change:opacity}.typing-text[_ngcontent-%COMP%]{will-change:contents}"]})}}return i})();var tm=["aboutSection"],Fu=(()=>{class i{constructor(t){this.platformId=t}ngOnInit(){}ngAfterViewInit(){dt(this.platformId)&&this.setupScrollAnimations()}setupScrollAnimations(){if(typeof IntersectionObserver>"u")return;let t=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&(setTimeout(()=>{this.animateElement(".introduction-section","animate-fade-up")},100),setTimeout(()=>{this.animateElement(".overview-title-section","animate-slide-bottom")},300),setTimeout(()=>{this.animateElement(".profile-section","animate-slide-left")},500),setTimeout(()=>{this.animateElement(".content-section","animate-slide-right")},700),t.unobserve(r.target))})},{threshold:.05,rootMargin:"200px 0px -50px 0px"});this.aboutSection?.nativeElement&&t.observe(this.aboutSection.nativeElement)}animateElement(t,n){let r=this.aboutSection.nativeElement.querySelector(t);r&&r.classList.add(n)}static{this.\u0275fac=function(n){return new(n||i)(Xe(Ut))}}static{this.\u0275cmp=St({type:i,selectors:[["app-about"]],viewQuery:function(n,r){if(n&1&&Ht(tm,7),n&2){let s;Gt(s=Wt())&&(r.aboutSection=s.first)}},standalone:!0,features:[Ct],decls:33,vars:0,consts:[["aboutSection",""],["id","about",1,"about-section"],[1,"about-container"],[1,"introduction-section"],[1,"overview-title-section"],[1,"main-content-container"],[1,"profile-section"],[1,"image-container"],[1,"image-wrapper"],["src","assets/profilePicture.jpeg","alt","Karthick Ajan"],[1,"social-buttons"],["onclick","window.open('assets/KARTHICK AJAN G S RESUME.pdf', '_blank')",1,"social-link"],["onclick","window.open('https://www.linkedin.com/in/karthick-ajan-g-s-a9b9371b2', '_blank')",1,"social-link"],["onclick","window.open('https://github.com/karthickajan', '_blank')",1,"social-link"],[1,"content-section"],[1,"content-list"],["data-emoji","\u{1F468}\u200D\u{1F4BB}"],["data-emoji","\u{1F393}"],["data-emoji","\u{1F6E0}"],["data-emoji","\u{1F527}"],["data-emoji","\u{1F4A1}"]],template:function(n,r){n&1&&(W(0,"section",1,0)(2,"div",2)(3,"div",3)(4,"p"),oe(5,"INTRODUCTION"),j()(),W(6,"div",4)(7,"h2"),oe(8,"Overview."),j()(),W(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8),Je(13,"img",9),j()(),W(14,"div",10)(15,"button",11),oe(16,"Resume"),j(),W(17,"button",12),oe(18,"LinkedIn"),j(),W(19,"button",13),oe(20,"GitHub"),j()()(),W(21,"div",14)(22,"ul",15)(23,"li",16),oe(24,"I'm a Software Engineer with 2+ years of professional experience in enterprise-level development, successfully transitioning my expertise to modern Full Stack architectures."),j(),W(25,"li",17),oe(26,"Transitioned into software development from an analytical Bachelor of Technology background, bringing a foundation of complex problem-solving to every project."),j(),W(27,"li",18),oe(28,"From end-to-end full-stack solutions to successful client deployments, I focus on building reliable, scalable software that delivers real business impact."),j(),W(29,"li",19),oe(30,"I enjoy automating workflows, optimizing systems, and turning complex challenges into real results. \u{1F4C8}"),j(),W(31,"li",20),oe(32,"I'm always curious and constantly learning."),j()()()()()())},dependencies:[kt],styles:[".about-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px;max-width:80rem;margin:0 auto}.introduction-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;font-weight:500;--tw-text-opacity: 1;color:rgb(170 166 195/var(--tw-text-opacity));text-align:center;letter-spacing:.05em;text-transform:uppercase;margin-top:0}.overview-title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:3.75rem;font-weight:900;background:linear-gradient(90deg,#915eff,#00bfff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-align:center;line-height:1.5}.main-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4rem;align-items:flex-start;width:100%;margin-top:2.5rem}.profile-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;flex-shrink:0;margin-right:1rem;opacity:0;transform:translate(-100px)}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:256px;height:256px;border-radius:50%;object-fit:cover;margin-bottom:1.5rem;background:linear-gradient(90deg,#915eff,#00bfff);padding:4px;box-shadow:0 0 30px #915eff80;border:none}.social-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;margin-top:.5rem;width:256px}.social-buttons[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]{background:transparent;color:#915eff;border:1px solid transparent;background:linear-gradient(#050816,#050816) padding-box,linear-gradient(90deg,#915eff,#00bfff) border-box;padding:8px 16px;border-radius:20px;font-weight:500;font-size:14px;cursor:pointer;transition:all .3s ease;text-decoration:none;display:inline-block;width:100%;text-align:center;font-family:Poppins,sans-serif;box-sizing:border-box;will-change:transform;transform:translateZ(0)}.social-buttons[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,#915eff,#00bfff);color:#fff;transform:translateY(-2px) translateZ(0);box-shadow:0 4px 15px #915eff66}.content-section[_ngcontent-%COMP%]{flex:1;color:#aaa6c3;opacity:0;transform:translate(100px)}.content-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;font-size:18px;line-height:2}.content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:2rem;display:flex;align-items:flex-start;font-size:18px;line-height:1.8;color:#aaa6c3}.content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:attr(data-emoji);margin-right:1rem;flex-shrink:0;font-size:18px;line-height:1.8}.footer-section[_ngcontent-%COMP%]{margin-top:4rem;text-align:center;padding-top:2rem;border-top:1px solid rgba(170,166,195,.3);width:100%}.footer-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#aaa6c3;letter-spacing:.1em;text-transform:uppercase;margin:0;font-family:Poppins,sans-serif}@media (max-width: 768px){.about-container[_ngcontent-%COMP%]{margin:50px 0;padding:30px 15px}.introduction-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;letter-spacing:.03em}.overview-title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.8rem;line-height:1.2}.main-content-container[_ngcontent-%COMP%]{flex-direction:column;align-items:center;gap:3rem}.profile-section[_ngcontent-%COMP%]{margin-right:0}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:220px;height:220px}.social-buttons[_ngcontent-%COMP%]{width:220px;gap:.75rem}.social-buttons[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]{padding:10px 18px;font-size:15px;font-weight:600}.content-section[_ngcontent-%COMP%]{text-align:center;width:100%;max-width:500px}.content-list[_ngcontent-%COMP%]{font-size:17px;line-height:1.9}.content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:left;font-size:17px;align-items:flex-start;margin-bottom:1.8rem}.content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{font-size:17px;margin-right:.8rem}.footer-section[_ngcontent-%COMP%]{margin-top:3.5rem}.footer-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}}@media (max-width: 480px){.about-container[_ngcontent-%COMP%]{padding:25px 12px}.introduction-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.overview-title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.8rem;line-height:1.1}.main-content-container[_ngcontent-%COMP%]{gap:2.5rem}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:256px;height:256px}.social-buttons[_ngcontent-%COMP%]{width:256px}.social-buttons[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]{padding:10px 16px;font-size:14px;font-weight:600}.content-section[_ngcontent-%COMP%]{max-width:100%}.content-list[_ngcontent-%COMP%]{font-size:17px;line-height:1.8}.content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:17px;margin-bottom:1.6rem}.content-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{font-size:17px;margin-right:.8rem}.footer-section[_ngcontent-%COMP%]{margin-top:3rem}.footer-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}}@keyframes _ngcontent-%COMP%_slideInFromLeft{0%{transform:translate(-100px);opacity:0}to{transform:translate(0);opacity:1}}@keyframes _ngcontent-%COMP%_slideInFromRight{0%{transform:translate(100px);opacity:0}to{transform:translate(0);opacity:1}}@keyframes _ngcontent-%COMP%_slideInFromBottom{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}.animate-slide-left[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideInFromLeft .8s ease-out forwards}.animate-slide-right[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideInFromRight .8s ease-out forwards}.animate-fade-up[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUp .6s ease-out forwards}.animate-slide-bottom[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideInFromBottom .7s ease-out forwards}.introduction-section[_ngcontent-%COMP%]{opacity:0;transform:translateY(30px)}.overview-title-section[_ngcontent-%COMP%]{opacity:0;transform:translateY(50px)}"]})}}return i})();var Ao=(()=>{class i{constructor(){this.personalInfo={name:"John Doe",title:"Full Stack Developer",email:"john.doe@example.com",location:"San Francisco, CA",bio:"Passionate software engineer with 5+ years of experience building scalable web applications and innovative solutions. Specialized in modern JavaScript frameworks, cloud architecture, and creating exceptional user experiences.",resumeUrl:"/assets/resume.pdf",socialLinks:{github:"https://github.com/johndoe",linkedin:"https://linkedin.com/in/johndoe",twitter:"https://twitter.com/johndoe",website:"https://johndoe.dev"},techStack:{frontend:["Angular","React","Vue.js","TypeScript","JavaScript","HTML/CSS","Sass"],backend:["Node.js","Python","Java","Express.js","MongoDB","PostgreSQL","REST APIs"],tools:["Docker","AWS","Git","Webpack","Jest","Figma","VS Code"]}},this.skills=[{name:"Angular",level:95,category:"frontend",icon:"angular"},{name:"React",level:90,category:"frontend",icon:"react"},{name:"Vue.js",level:85,category:"frontend",icon:"vuejs"},{name:"TypeScript",level:95,category:"frontend",icon:"typescript"},{name:"JavaScript",level:98,category:"frontend",icon:"javascript"},{name:"HTML/CSS",level:95,category:"frontend",icon:"html5"},{name:"Sass/SCSS",level:90,category:"frontend",icon:"sass"},{name:"Node.js",level:90,category:"backend",icon:"nodejs"},{name:"Python",level:85,category:"backend",icon:"python"},{name:"Java",level:80,category:"backend",icon:"java"},{name:"Express.js",level:88,category:"backend",icon:"express"},{name:"MongoDB",level:85,category:"backend",icon:"mongodb"},{name:"PostgreSQL",level:82,category:"backend",icon:"postgresql"},{name:"Docker",level:85,category:"tools",icon:"docker"},{name:"AWS",level:80,category:"tools",icon:"aws"},{name:"Git",level:95,category:"tools",icon:"git"},{name:"Webpack",level:75,category:"tools",icon:"webpack"},{name:"Jest",level:85,category:"tools",icon:"jest"}],this.experiences=[{id:"1",company:"Tech Innovators Inc.",position:"Senior Full Stack Developer",startDate:new Date("2022-01-01"),description:["Led development of microservices architecture serving 1M+ users","Mentored junior developers and established coding standards","Implemented CI/CD pipelines reducing deployment time by 70%","Collaborated with product team to deliver feature specifications"],technologies:["Angular","Node.js","TypeScript","Docker","AWS","MongoDB"],location:"San Francisco, CA"},{id:"2",company:"Digital Solutions Ltd.",position:"Frontend Developer",startDate:new Date("2020-06-01"),endDate:new Date("2021-12-31"),description:["Developed responsive web applications using React and Redux","Optimized application performance resulting in 40% faster load times","Integrated RESTful APIs and implemented real-time features","Collaborated in agile development environment"],technologies:["React","Redux","JavaScript","SCSS","REST APIs"],location:"Remote"},{id:"3",company:"StartupXYZ",position:"Junior Developer",startDate:new Date("2019-01-01"),endDate:new Date("2020-05-31"),description:["Built full-stack web applications from concept to deployment","Participated in code reviews and technical discussions","Learned modern development practices and frameworks","Contributed to open-source projects"],technologies:["Vue.js","Express.js","MySQL","Git"],location:"Austin, TX"}],this.projects=[{id:"1",title:"E-Commerce Platform",description:"Full-stack e-commerce solution with real-time inventory management",longDescription:"A comprehensive e-commerce platform built with Angular and Node.js, featuring real-time inventory tracking, payment integration, and admin dashboard.",technologies:["Angular","Node.js","MongoDB","Stripe API","Socket.io"],imageUrl:"/assets/projects/ecommerce.jpg",demoUrl:"https://demo-ecommerce.johndoe.dev",githubUrl:"https://github.com/johndoe/ecommerce-platform",category:"fullstack",featured:!0,startDate:new Date("2023-01-01"),endDate:new Date("2023-06-01")},{id:"2",title:"Task Management App",description:"Collaborative task management tool with real-time updates",longDescription:"A collaborative task management application similar to Trello, built with React and featuring drag-and-drop functionality, real-time collaboration, and team management.",technologies:["React","TypeScript","Node.js","PostgreSQL","WebSockets"],imageUrl:"/assets/projects/taskmanager.jpg",demoUrl:"https://tasks.johndoe.dev",githubUrl:"https://github.com/johndoe/task-manager",category:"web",featured:!0,startDate:new Date("2022-08-01"),endDate:new Date("2022-12-01")},{id:"3",title:"Weather Dashboard",description:"Interactive weather dashboard with data visualization",longDescription:"A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations and location-based services.",technologies:["Vue.js","Chart.js","Weather API","Geolocation"],imageUrl:"/assets/projects/weather.jpg",demoUrl:"https://weather.johndoe.dev",githubUrl:"https://github.com/johndoe/weather-dashboard",category:"web",featured:!1,startDate:new Date("2022-03-01"),endDate:new Date("2022-04-01")}],this.education=[{title:"Electrical & Electronics Engineering B.Tech",company_name:"Vellore Institute of Technology, Vellore",icon:"assets/vit-logo.png",iconBg:"#fff",date:"2020 - 2024",points:["Published Research Paper on 'Comprehensive Study of Weather Prediction Using IoT and Machine Learning' in IEEE Xplore","CGPA: 8.28"]},{title:"High School",company_name:"MIRS, Chennai",icon:"assets/mirs-logo.jpeg",iconBg:"#fff",date:"2018 - 2020",points:["Computer Science","12th Grade: 81%"]}]}getPersonalInfo(){return Mi(this.personalInfo)}getSkills(){return Mi(this.skills)}getSkillsByCategory(t){return Mi(this.skills.filter(n=>n.category===t))}getExperiences(){return Mi(this.experiences.sort((t,n)=>n.startDate.getTime()-t.startDate.getTime()))}getProjects(){return Mi(this.projects.sort((t,n)=>n.startDate.getTime()-t.startDate.getTime()))}getFeaturedProjects(){return Mi(this.projects.filter(t=>t.featured))}getEducation(){return Mi(this.education)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=br({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var nm=["educationSection"];function im(i,e){if(i&1&&(W(0,"li"),oe(1),j()),i&2){let t=e.$implicit;fe(),Gn(" ",t," ")}}function rm(i,e){if(i&1&&(W(0,"div",7)(1,"span",8)(2,"div",9),Je(3,"img",10),j()(),W(4,"div",11)(5,"div")(6,"h3",12),oe(7),j(),W(8,"p",13),oe(9),j()(),W(10,"ul",14),ut(11,im,2,1,"li",15),j()(),W(12,"span",16),oe(13),j()()),i&2){let t=e.$implicit;fe(),Sr("background",t.iconBg),fe(2),We("src",t.icon,Pn)("alt",t.company_name),fe(4),Kt(t.title),fe(2),Kt(t.company_name),fe(2),We("ngForOf",t.points),fe(2),Kt(t.date)}}var Uu=(()=>{class i{constructor(t,n){this.platformId=t,this.portfolioService=n,this.education=[]}ngOnInit(){this.portfolioService.getEducation().subscribe(t=>{this.education=t})}ngAfterViewInit(){dt(this.platformId)&&this.setupScrollAnimations()}trackByEducation(t,n){return n.title+n.date}setupScrollAnimations(){if(typeof IntersectionObserver>"u")return;let t=!1,n=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&!t&&(t=!0,setTimeout(()=>{this.animateElement(".introduction-section","animate-fadeInUp")},50),setTimeout(()=>{this.animateElement(".title-section","animate-slideInFromBottom")},100),setTimeout(()=>{this.animateElement(".vertical-timeline","animate-slideInFromLeft")},150),setTimeout(()=>{this.animateTimelineElements()},200),n.unobserve(s.target))})},{threshold:.1,rootMargin:"100px 0px -25px 0px"});this.educationSection&&n.observe(this.educationSection.nativeElement)}animateElement(t,n){let r=this.educationSection.nativeElement.querySelector(t);r&&r.classList.add(n)}animateTimelineElements(){this.educationSection.nativeElement.querySelectorAll(".vertical-timeline-element").forEach((n,r)=>{setTimeout(()=>{let s=n.querySelector(".vertical-timeline-element-icon"),o=n.querySelector(".vertical-timeline-element-content"),a=n.querySelector(".vertical-timeline-element-date"),c=(r+1)%2===0;s?.classList.add("animate-bounce-in"),c?(o?.classList.add("animate-slide-in-right"),a?.classList.add("animate-date-slide-left")):(o?.classList.add("animate-slide-in-left"),a?.classList.add("animate-date-slide-right"))},r*40)})}static{this.\u0275fac=function(n){return new(n||i)(Xe(Ut),Xe(Ao))}}static{this.\u0275cmp=St({type:i,selectors:[["app-education"]],viewQuery:function(n,r){if(n&1&&Ht(nm,5),n&2){let s;Gt(s=Wt())&&(r.educationSection=s.first)}},standalone:!0,features:[Ct],decls:11,vars:2,consts:[["educationSection",""],["id","education",1,"education-section"],[1,"introduction-section"],[1,"title-section"],[1,"education-timeline-wrapper"],[1,"vertical-timeline"],["class","vertical-timeline-element",4,"ngFor","ngForOf","ngForTrackBy"],[1,"vertical-timeline-element"],[1,"vertical-timeline-element-icon","bounce-in"],[1,"education-icon-wrapper"],[1,"education-icon",3,"src","alt"],[1,"vertical-timeline-element-content","bounce-in"],[1,"education-title"],[1,"education-institution"],[1,"education-details"],[4,"ngFor","ngForOf"],[1,"vertical-timeline-element-date"]],template:function(n,r){n&1&&(W(0,"section",1,0)(2,"div",2)(3,"p"),oe(4,"WHAT I HAVE STUDIED SO FAR"),j()(),W(5,"div",3)(6,"h2"),oe(7,"Education."),j()(),W(8,"div",4)(9,"div",5),ut(10,rm,14,8,"div",6),j()()()),n&2&&(fe(10),We("ngForOf",r.education)("ngForTrackBy",r.trackByEducation))},dependencies:[kt,Si],styles:['.education-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px;max-width:80rem;margin-left:auto;margin-right:auto;min-height:100vh;height:auto;box-sizing:border-box;contain:layout}.introduction-section[_ngcontent-%COMP%]{opacity:0;transform:translate3d(0,30px,0);transition:opacity .6s ease,transform .6s ease;will-change:opacity,transform}.introduction-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#aaa6c3;text-align:center;letter-spacing:.1em;text-transform:uppercase;margin-top:0;font-family:Poppins,sans-serif}@media (min-width: 640px){.introduction-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}}.introduction-section.animate-fadeInUp[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0)}.title-section[_ngcontent-%COMP%]{opacity:0;transform:translate3d(0,30px,0);transition:opacity .6s ease,transform .6s ease;will-change:opacity,transform}.title-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;font-weight:900;background:linear-gradient(90deg,#915eff,#00bfff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-align:center;line-height:1.5;font-family:Poppins,sans-serif}@media (min-width: 475px){.title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:40px}}@media (min-width: 640px){.title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:50px}}@media (min-width: 768px){.title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:60px}}.title-section.animate-slideInFromBottom[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0)}.education-timeline-wrapper[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin:0;margin-top:2.5rem;margin-left:auto;margin-right:auto}.vertical-timeline[_ngcontent-%COMP%]{opacity:0;transform:translate3d(-30px,0,0);transition:opacity .6s ease,transform .6s ease;will-change:opacity,transform;width:100%;position:relative;padding:2em 0}.vertical-timeline.animate-slideInFromLeft[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0)}.vertical-timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:50%;top:0;height:100%;width:4px;background:linear-gradient(to bottom,#915eff,#00bfff);margin-left:-2px;z-index:0;border-radius:2px}.vertical-timeline-element[_ngcontent-%COMP%]{position:relative;margin:0 0 60px;min-height:120px;width:100%;will-change:transform,opacity}.vertical-timeline-element[_ngcontent-%COMP%]:last-child{margin-bottom:0}.vertical-timeline-element[_ngcontent-%COMP%]   .vertical-timeline-element-icon[_ngcontent-%COMP%], .vertical-timeline-element[_ngcontent-%COMP%]   .vertical-timeline-element-content[_ngcontent-%COMP%], .vertical-timeline-element[_ngcontent-%COMP%]   .vertical-timeline-element-date[_ngcontent-%COMP%]{display:none;will-change:transform,opacity}.vertical-timeline-element[_ngcontent-%COMP%]   .vertical-timeline-element-icon.animate-bounce-in[_ngcontent-%COMP%]{display:flex}.vertical-timeline-element[_ngcontent-%COMP%]   .vertical-timeline-element-content.animate-slide-in-left[_ngcontent-%COMP%], .vertical-timeline-element[_ngcontent-%COMP%]   .vertical-timeline-element-content.animate-slide-in-right[_ngcontent-%COMP%]{display:block}.vertical-timeline-element[_ngcontent-%COMP%]   .vertical-timeline-element-date.animate-date-slide-left[_ngcontent-%COMP%], .vertical-timeline-element[_ngcontent-%COMP%]   .vertical-timeline-element-date.animate-date-slide-right[_ngcontent-%COMP%]{display:inline-block}.vertical-timeline-element[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}.vertical-timeline-element-icon[_ngcontent-%COMP%]{position:absolute;left:50%;top:20px;width:70px;height:70px;border-radius:50%;margin-left:-35px;background:#fff;border:3px solid #915eff;z-index:10;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px #915eff4d}.vertical-timeline-element-icon.animate-bounce-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_iconBounceIn .6s cubic-bezier(.175,.885,.32,1.275) both}.education-icon-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.education-icon[_ngcontent-%COMP%]{width:90%;height:90%;object-fit:contain;border-radius:50%}.vertical-timeline-element-content[_ngcontent-%COMP%]{position:relative;background:#1d1836;border-radius:8px;padding:24px;box-shadow:0 8px 32px #915eff26;border:1px solid rgba(145,94,255,.25);transform:translateY(-2px) translateZ(0);will-change:auto}.vertical-timeline-element-content[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-1px;left:-1px;right:-1px;height:2px;background:linear-gradient(90deg,#915eff,#00bfff);border-radius:0 0 8px 8px;opacity:.6}.vertical-timeline-element-content.animate-bounce-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_bounceIn .4s ease-out both}.vertical-timeline-element-content.animate-slide-in-left[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideInFromLeft .4s ease-out both}.vertical-timeline-element-content.animate-slide-in-right[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideInFromRight .4s ease-out both}.education-title[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-weight:700;margin-bottom:8px;font-family:Poppins,sans-serif;line-height:1.3}.education-institution[_ngcontent-%COMP%]{color:#aaa6c3;font-size:18px;font-weight:600;margin:0;font-family:Poppins,sans-serif}.education-details[_ngcontent-%COMP%]{margin-top:20px;list-style:disc;margin-left:20px}.education-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#fff;font-size:16px;padding-left:4px;letter-spacing:.05em;line-height:1.6;margin-bottom:8px;font-family:Poppins,sans-serif}.vertical-timeline-element-date[_ngcontent-%COMP%]{color:#aaa6c3;font-size:18px;font-weight:600;font-family:Poppins,sans-serif;letter-spacing:.05em;display:inline-block}.vertical-timeline-element-date.animate-date-slide-left[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_dateSlideFromLeft .3s ease-out both}.vertical-timeline-element-date.animate-date-slide-right[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_dateSlideFromRight .3s ease-out both}.footer-section[_ngcontent-%COMP%]{opacity:0;transform:translateY(30px);transition:all .8s ease;margin-top:4rem;text-align:center;padding-top:2rem;border-top:1px solid rgba(170,166,195,.3);width:100%}.footer-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#aaa6c3;letter-spacing:.1em;text-transform:uppercase;margin:0;font-family:Poppins,sans-serif}.footer-section.animate-fadeInUp[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}@media (min-width: 769px){.vertical-timeline-element[_ngcontent-%COMP%]:nth-child(odd)   .vertical-timeline-element-content[_ngcontent-%COMP%]{float:left;width:44%;margin-right:6%;text-align:left}.vertical-timeline-element[_ngcontent-%COMP%]:nth-child(odd)   .vertical-timeline-element-content[_ngcontent-%COMP%]:after{content:"";position:absolute;top:28px;right:-8px;width:0;height:0;border:8px solid transparent;border-left-color:#1d1836;z-index:2;filter:drop-shadow(2px 0 4px rgba(0,0,0,.2))}.vertical-timeline-element[_ngcontent-%COMP%]:nth-child(odd)   .vertical-timeline-element-date[_ngcontent-%COMP%]{position:absolute;left:56%;top:42px;text-align:left;width:43%}.vertical-timeline-element[_ngcontent-%COMP%]:nth-child(2n)   .vertical-timeline-element-content[_ngcontent-%COMP%]{float:right;width:44%;margin-left:6%;text-align:left}.vertical-timeline-element[_ngcontent-%COMP%]:nth-child(2n)   .vertical-timeline-element-content[_ngcontent-%COMP%]:after{content:"";position:absolute;top:28px;left:-8px;width:0;height:0;border:8px solid transparent;border-right-color:#1d1836;z-index:2;filter:drop-shadow(-2px 0 4px rgba(0,0,0,.2))}.vertical-timeline-element[_ngcontent-%COMP%]:nth-child(2n)   .vertical-timeline-element-date[_ngcontent-%COMP%]{position:absolute;right:56%;top:43px;text-align:right;width:43%}}@media (max-width: 768px){.education-section[_ngcontent-%COMP%]{padding:48px 24px}.education-timeline-wrapper[_ngcontent-%COMP%]{padding:0}.title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem}p[_ngcontent-%COMP%]{font-size:16px}.vertical-timeline[_ngcontent-%COMP%]:before{left:30px;margin-left:0}.vertical-timeline-element[_ngcontent-%COMP%]:nth-child(odd)   .vertical-timeline-element-content[_ngcontent-%COMP%], .vertical-timeline-element[_ngcontent-%COMP%]:nth-child(2n)   .vertical-timeline-element-content[_ngcontent-%COMP%]{float:none;width:auto;margin-left:70px;margin-right:20px;text-align:left}.vertical-timeline-element[_ngcontent-%COMP%]:nth-child(odd)   .vertical-timeline-element-content[_ngcontent-%COMP%]:after, .vertical-timeline-element[_ngcontent-%COMP%]:nth-child(2n)   .vertical-timeline-element-content[_ngcontent-%COMP%]:after{left:-8px;border-left-color:transparent;border-right-color:#1d1836}.vertical-timeline-element[_ngcontent-%COMP%]:nth-child(odd)   .vertical-timeline-element-date[_ngcontent-%COMP%], .vertical-timeline-element[_ngcontent-%COMP%]:nth-child(2n)   .vertical-timeline-element-date[_ngcontent-%COMP%]{position:static;width:auto;text-align:left;margin-top:10px;margin-left:70px}.vertical-timeline-element-icon[_ngcontent-%COMP%]{left:30px;margin-left:-20px;width:40px;height:40px}.vertical-timeline-element-content[_ngcontent-%COMP%]{padding:20px}.vertical-timeline-element-content[_ngcontent-%COMP%]   .education-title[_ngcontent-%COMP%]{font-size:20px}.vertical-timeline-element-content[_ngcontent-%COMP%]   .education-institution[_ngcontent-%COMP%], .vertical-timeline-element-content[_ngcontent-%COMP%]   .education-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .vertical-timeline-element-date[_ngcontent-%COMP%]{font-size:17px}}@media (max-width: 480px){.education-section[_ngcontent-%COMP%]{padding:32px 16px}.education-timeline-wrapper[_ngcontent-%COMP%]{padding:0}.title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.8rem}.vertical-timeline[_ngcontent-%COMP%]:before{left:20px}.vertical-timeline-element[_ngcontent-%COMP%]:nth-child(odd)   .vertical-timeline-element-content[_ngcontent-%COMP%], .vertical-timeline-element[_ngcontent-%COMP%]:nth-child(2n)   .vertical-timeline-element-content[_ngcontent-%COMP%]{margin-left:60px;margin-right:16px}.vertical-timeline-element[_ngcontent-%COMP%]:nth-child(odd)   .vertical-timeline-element-date[_ngcontent-%COMP%], .vertical-timeline-element[_ngcontent-%COMP%]:nth-child(2n)   .vertical-timeline-element-date[_ngcontent-%COMP%]{margin-left:60px;font-size:17px}.vertical-timeline-element-icon[_ngcontent-%COMP%]{left:20px;margin-left:-20px;width:40px;height:40px}.vertical-timeline-element-content[_ngcontent-%COMP%]{padding:16px}.vertical-timeline-element-content[_ngcontent-%COMP%]   .education-title[_ngcontent-%COMP%]{font-size:18px}.vertical-timeline-element-content[_ngcontent-%COMP%]   .education-institution[_ngcontent-%COMP%], .vertical-timeline-element-content[_ngcontent-%COMP%]   .education-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:17px}}@keyframes _ngcontent-%COMP%_bounceIn{0%{opacity:0;transform:scale3d(.8,.8,.8)}to{opacity:1;transform:scaleZ(1)}}@keyframes _ngcontent-%COMP%_iconBounceIn{0%{opacity:0;transform:scale3d(.5,.5,.5)}50%{opacity:.8;transform:scale3d(1.05,1.05,1.05)}to{opacity:1;transform:scaleZ(1)}}@keyframes _ngcontent-%COMP%_slideInFromLeft{0%{opacity:0;transform:translate3d(-30px,0,0)}to{opacity:1;transform:translateZ(0)}}@keyframes _ngcontent-%COMP%_slideInFromRight{0%{opacity:0;transform:translate3d(30px,0,0)}to{opacity:1;transform:translateZ(0)}}@keyframes _ngcontent-%COMP%_dateSlideFromLeft{0%{opacity:0;transform:translate3d(-20px,0,0)}to{opacity:1;transform:translateZ(0)}}@keyframes _ngcontent-%COMP%_dateSlideFromRight{0%{opacity:0;transform:translate3d(20px,0,0)}to{opacity:1;transform:translateZ(0)}}']})}}return i})();var sm=["workExperienceSection"];function om(i,e){if(i&1){let t=Cr();W(0,"div",11),Pt("click",function(){let r=Xi(t).index,s=dn();return Yi(s.selectExperience(r))}),W(1,"div",12),Je(2,"img",13),j(),W(3,"div",14)(4,"h3",15),oe(5),j(),W(6,"p",16),oe(7),j()()()}if(i&2){let t=e.$implicit,n=e.index,r=dn();ct("active",n===r.activeExperience),fe(2),Sr("background-color",t.iconBg),We("src",t.icon,Pn)("alt",t.company_name),fe(3),Kt(t.title),fe(2),Kt(t.company_name)}}function am(i,e){if(i&1&&(W(0,"li"),oe(1),j()),i&2){let t=e.$implicit;fe(),Gn(" ",t," ")}}function cm(i,e){if(i&1&&(W(0,"div",17)(1,"h3",18),oe(2),j(),W(3,"p",19),oe(4),j(),W(5,"p",20),oe(6),j(),W(7,"ul",21),ut(8,am,2,1,"li",22),j()()),i&2){let t=dn();We("@slideIn",t.currentExperience),fe(2),Kt(t.currentExperience.title),fe(2),Kt(t.currentExperience.company_name),fe(2),Kt(t.currentExperience.date),fe(2),We("ngForOf",t.currentExperience.points)}}var ku=(()=>{class i{constructor(t){this.platformId=t,this.activeExperience=0,this.isInView=!1,this.experiences=[{title:"Software Engineer",company_name:"Bajaj Finserv",icon:"assets/bajaj-logo.png",iconBg:"#ffffff",date:"Jan 2024 - Present",points:["Developed responsive web applications using Angular framework and TypeScript","Integrated Salesforce (SFDC) solutions for customer relationship management","Collaborated with cross-functional teams to deliver high-quality financial software","Implemented modern web development practices and coding standards","Optimized application performance and user experience across different devices"]}]}ngOnInit(){}ngAfterViewInit(){dt(this.platformId)&&(this.setupScrollAnimations(),setTimeout(()=>{this.setupScrollAnimations()},100))}selectExperience(t){this.activeExperience=t}get currentExperience(){return this.experiences[this.activeExperience]}setupScrollAnimations(){if(typeof IntersectionObserver>"u")return;let t,n=!1,r=()=>{n=!0,clearTimeout(t),t=setTimeout(()=>{n=!1},150)};window.addEventListener("scroll",r,{passive:!0});let s=new IntersectionObserver(o=>{o.forEach(a=>{if(a.isIntersecting){this.isInView=!0,setTimeout(()=>{this.animateElement(".introduction-section","animate-fadeInUp")},200),setTimeout(()=>{this.animateElement(".title-section","animate-slideInFromBottom")},500);let c=a.target;c.classList.add("animate-in"),setTimeout(()=>{c.querySelector(".experience-layout")?.classList.add("animate")},700),setTimeout(()=>{c.querySelectorAll(".experience-card").forEach((h,u)=>{setTimeout(()=>{h.classList.add("animate")},u*100)})},900),setTimeout(()=>{c.querySelector(".experience-details")?.classList.add("animate")},1100),s.unobserve(a.target),window.removeEventListener("scroll",r)}})},{threshold:.1,rootMargin:"100px 0px -20px 0px"});this.workExperienceSection&&s.observe(this.workExperienceSection.nativeElement)}animateElement(t,n){let r=this.workExperienceSection.nativeElement.querySelector(t);r&&r.classList.add(n)}static{this.\u0275fac=function(n){return new(n||i)(Xe(Ut))}}static{this.\u0275cmp=St({type:i,selectors:[["app-experience"]],viewQuery:function(n,r){if(n&1&&Ht(sm,5),n&2){let s;Gt(s=Wt())&&(r.workExperienceSection=s.first)}},standalone:!0,features:[Ct],decls:15,vars:6,consts:[["workExperienceSection",""],["id","work",1,"experience-section"],[1,"container"],[1,"introduction-section"],[1,"title-section"],[1,"experience-layout","reveal-animation","mt-20"],[1,"experience-cards-panel"],[1,"experience-cards-container"],["class","experience-card slide-in-right",3,"active","click",4,"ngFor","ngForOf"],[1,"experience-details-panel"],["class","experience-details",4,"ngIf"],[1,"experience-card","slide-in-right",3,"click"],[1,"company-icon"],[3,"src","alt"],[1,"experience-card-info"],[1,"experience-title"],[1,"company-name"],[1,"experience-details"],[1,"details-title"],[1,"details-company"],[1,"details-date"],[1,"details-points"],[4,"ngFor","ngForOf"]],template:function(n,r){n&1&&(W(0,"section",1,0)(2,"div",2)(3,"div",3)(4,"p"),oe(5,"MY PROFESSIONAL JOURNEY"),j()(),W(6,"div",4)(7,"h2"),oe(8,"Work Experience."),j()(),W(9,"div",5)(10,"div",6)(11,"div",7),ut(12,om,8,8,"div",8),j()(),W(13,"div",9),ut(14,cm,9,5,"div",10),j()()()()),n&2&&(fe(3),ct("animate-fadeInUp",r.isInView),fe(3),ct("animate-slideInFromBottom",r.isInView),fe(6),We("ngForOf",r.experiences),fe(2),We("ngIf",r.currentExperience))},dependencies:[kt,Si,Ci],styles:[".experience-section[_ngcontent-%COMP%]{background:#050816;color:#fff;padding:64px;max-width:80rem;margin:0 auto}.experience-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:100%}.experience-section[_ngcontent-%COMP%]   .introduction-section[_ngcontent-%COMP%]{opacity:0;transform:translate3d(0,30px,0);transition:opacity .6s ease,transform .6s ease;will-change:opacity,transform}.experience-section[_ngcontent-%COMP%]   .introduction-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:#aaa6c3;text-align:center;letter-spacing:.05em;text-transform:uppercase;margin-top:0}.experience-section[_ngcontent-%COMP%]   .introduction-section.animate-fadeInUp[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0)}.experience-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]{opacity:0;transform:translate3d(0,30px,0);transition:opacity .6s ease,transform .6s ease;will-change:opacity,transform}.experience-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.8rem;font-weight:900;background:linear-gradient(90deg,#915eff,#00bfff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-align:center;line-height:1.1;margin:0}.experience-section[_ngcontent-%COMP%]   .title-section.animate-slideInFromBottom[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0)}.experience-section[_ngcontent-%COMP%]   .experience-layout[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2.5rem}@media (min-width: 768px){.experience-section[_ngcontent-%COMP%]   .experience-layout[_ngcontent-%COMP%]{flex-direction:row;gap:2.5rem}}.experience-section[_ngcontent-%COMP%]   .experience-layout.mt-20[_ngcontent-%COMP%]{margin-top:2.5rem}@media (min-width: 768px){.experience-section[_ngcontent-%COMP%]   .experience-cards-panel[_ngcontent-%COMP%]{width:33.333333%}}.experience-section[_ngcontent-%COMP%]   .experience-cards-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem;border-radius:.5rem;cursor:pointer;transition:all .3s ease;background:#151030;border:1px solid rgba(255,255,255,.1);will-change:transform;transform:translateZ(0);opacity:0;transform:translate(50px);transition:all .5s cubic-bezier(.16,1,.3,1)}.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px) translateZ(0);box-shadow:0 10px 25px #0000004d;animation:_ngcontent-%COMP%_cardPulse .6s ease-out}.experience-section[_ngcontent-%COMP%]   .experience-card.active[_ngcontent-%COMP%]{background:#1d1836;border-color:#915eff;box-shadow:0 0 20px #915eff4d}.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .company-icon[_ngcontent-%COMP%]{flex-shrink:0;width:4rem;height:4rem;border-radius:50%;overflow:hidden;margin-right:1rem;border:2px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center}.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .company-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:50%}.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-card-info[_ngcontent-%COMP%]{flex:1}.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-card-info[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-weight:700;margin:0 0 .25rem;line-height:1.3}.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-card-info[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]{color:#aaa6c3;font-size:18px;margin:0;font-weight:400}@media (min-width: 768px){.experience-section[_ngcontent-%COMP%]   .experience-details-panel[_ngcontent-%COMP%]{width:66.666667%}}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]{background:#1d1836;padding:2rem;border-radius:.5rem;border:1px solid rgba(145,94,255,.2);box-shadow:0 10px 30px #0000004d;opacity:0;transform:translate(20px);transition:all .3s ease-out}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-title[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-weight:700;margin:0 0 1rem;line-height:1.3}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-company[_ngcontent-%COMP%]{color:#aaa6c3;font-size:18px;margin:0 0 1rem;font-weight:500}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-date[_ngcontent-%COMP%]{color:#b794f6;font-size:16px;margin:0 0 1.5rem;font-weight:500}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-points[_ngcontent-%COMP%]{list-style:disc;margin-left:1.25rem}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#e2e8f0;font-size:16px;padding-left:.25rem;letter-spacing:.025em;line-height:1.6;margin-bottom:.5rem}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-bottom:0}.experience-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%], .experience-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .experience-section[_ngcontent-%COMP%]   .experience-layout[_ngcontent-%COMP%]{opacity:0;transform:translateY(20px);transition:all .6s cubic-bezier(.16,1,.3,1)}.experience-section.animate-in[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition-delay:.1s}.experience-section.animate-in[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition-delay:.3s}.experience-section.animate-in[_ngcontent-%COMP%]   .experience-layout[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition-delay:.5s}.experience-section.animate-in[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}.experience-section.animate-in[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]:nth-child(1){transition-delay:.7s}.experience-section.animate-in[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]:nth-child(2){transition-delay:.8s}.experience-section.animate-in[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]:nth-child(3){transition-delay:.9s}.experience-section.animate-in[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]:nth-child(4){transition-delay:1s}.experience-section.animate-in[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}@keyframes _ngcontent-%COMP%_cardPulse{0%{transform:scale(1) translateY(0)}50%{transform:scale(1.02) translateY(-2px)}to{transform:scale(1) translateY(-2px)}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_slideInFromRight{0%{opacity:0;transform:translate(50px)}to{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_slideInFromLeft{0%{opacity:0;transform:translate(-20px)}to{opacity:1;transform:translate(0)}}.reveal-animation[_ngcontent-%COMP%]{opacity:0;transform:translateY(30px);transition:all .6s cubic-bezier(.16,1,.3,1)}.reveal-animation.animate[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.slide-in-right[_ngcontent-%COMP%]{opacity:0;transform:translate(50px);transition:all .5s cubic-bezier(.16,1,.3,1)}.slide-in-right.animate[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}.slide-in-left[_ngcontent-%COMP%]{opacity:0;transform:translate(-20px);transition:all .3s ease-out}.slide-in-left.animate[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}@media (max-width: 767px){.introduction-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem}.experience-section[_ngcontent-%COMP%]   .experience-layout[_ngcontent-%COMP%]   .experience-cards-panel[_ngcontent-%COMP%]{order:2}.experience-section[_ngcontent-%COMP%]   .experience-layout[_ngcontent-%COMP%]   .experience-details-panel[_ngcontent-%COMP%]{order:1}.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .company-icon[_ngcontent-%COMP%]{width:3rem;height:3rem}.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-card-info[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%]{font-size:20px}.experience-section[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-card-info[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]{font-size:17px}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]{padding:1.5rem}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-title[_ngcontent-%COMP%]{font-size:20px}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-company[_ngcontent-%COMP%]{font-size:17px}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-date[_ngcontent-%COMP%]{font-size:14px}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:17px}}@media (max-width: 480px){.experience-section[_ngcontent-%COMP%]{padding:3rem 0}.experience-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:0 1rem}.experience-section[_ngcontent-%COMP%]   .introduction-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.experience-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.8rem}.experience-section[_ngcontent-%COMP%]   .experience-layout.mt-20[_ngcontent-%COMP%]{margin-top:3rem}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]{padding:1rem}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-title[_ngcontent-%COMP%]{font-size:18px}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-company[_ngcontent-%COMP%]{font-size:17px}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-date[_ngcontent-%COMP%]{font-size:13px}.experience-section[_ngcontent-%COMP%]   .experience-details[_ngcontent-%COMP%]   .details-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:17px}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_slideInFromBottom{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}.animate-fade-up[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInUp .6s ease-out forwards}.animate-slide-bottom[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideInFromBottom .7s ease-out forwards}"],data:{animation:[To("fadeIn",[Es(":enter",[wi({opacity:0,transform:"translateY(20px)"}),ws("0.6s ease-out",wi({opacity:1,transform:"translateY(0)"}))])]),To("slideIn",[Es(":enter",[wi({opacity:0,transform:"translateX(20px)"}),ws("0.3s ease-out",wi({opacity:1,transform:"translateX(0)"}))]),Es(":leave",[ws("0.2s ease-in",wi({opacity:0,transform:"translateX(-20px)"}))])]),To("staggerCards",[Es("* => *",[Ou(":enter",[wi({opacity:0,transform:"translateX(50px)"}),Ru("100ms",[ws("0.5s ease-out",wi({opacity:1,transform:"translateX(0)"}))])],{optional:!0})])])]}})}}return i})();var lm=["skillsSection"];function hm(i,e){if(i&1&&(W(0,"div",12),Je(1,"img",13),j()),i&2){let t=e.$implicit;fe(),We("src",t.icon,Pn)("alt",t.name)}}function um(i,e){if(i&1&&(W(0,"div",10),ut(1,hm,2,2,"div",11),j()),i&2){let t=e.$implicit,n=e.index;ct("staggered-row",n%2===1),fe(),We("ngForOf",t)}}function dm(i,e){if(i&1&&(W(0,"div",12),Je(1,"img",13),j()),i&2){let t=e.$implicit;fe(),We("src",t.icon,Pn)("alt",t.name)}}function fm(i,e){if(i&1&&(W(0,"div",10),ut(1,dm,2,2,"div",11),j()),i&2){let t=e.$implicit,n=e.index;ct("staggered-row",n%2===1),fe(),We("ngForOf",t)}}function pm(i,e){if(i&1&&(W(0,"div",12),Je(1,"img",13),j()),i&2){let t=e.$implicit;fe(),We("src",t.icon,Pn)("alt",t.name)}}function mm(i,e){if(i&1&&(W(0,"div",10),ut(1,pm,2,2,"div",11),j()),i&2){let t=e.$implicit,n=e.index;ct("staggered-row",n%2===1),fe(),We("ngForOf",t)}}var Bu=(()=>{class i{constructor(t){this.platformId=t,this.isInView=!1,this.programming=[{name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"Java",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},{name:"C++",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"TypeScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"Docker",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},{name:"React JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"MongoDB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},{name:"Angular",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"}],this.itTools=[{name:"AWS",icon:"assets/AWS.svg"},{name:"Git",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},{name:"Azure",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"},{name:"VSCode",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},{name:"GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"Windows",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"}],this.contentProduction=[{name:"Figma",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}],this.rows={programming:[],itTools:[],contentProduction:[]}}ngOnInit(){dt(this.platformId)&&(this.calculateRowsForAllCategories(),window.addEventListener("resize",()=>this.calculateRowsForAllCategories()))}ngAfterViewInit(){dt(this.platformId)&&this.setupScrollAnimations()}ngOnDestroy(){dt(this.platformId)&&window.removeEventListener("resize",()=>this.calculateRowsForAllCategories())}calculateRows(t,n){let r=[],s=0,o=6;if(t<500)r=[n.slice(0,3),n.slice(3,5),n.slice(5,8),n.slice(8,10)];else for(;s<n.length;){let a=s+o;r.push(n.slice(s,a)),s+=o,o=o===6?5:6}return r}calculateRowsForAllCategories(){if(dt(this.platformId)){let t=window.innerWidth;this.rows={programming:this.calculateRows(t,this.programming),itTools:this.calculateRows(t,this.itTools),contentProduction:this.calculateRows(t,this.contentProduction)}}}setupScrollAnimations(){if(typeof IntersectionObserver>"u")return;let t=new IntersectionObserver(n=>{n.forEach(r=>{if(r.isIntersecting){this.isInView=!0;let s=r.target;s.classList.add("animate-in"),setTimeout(()=>{s.querySelector(".section-subtitle")?.classList.add("animate")},100),setTimeout(()=>{s.querySelector(".section-title")?.classList.add("animate")},300),s.querySelectorAll(".category-container").forEach((a,c)=>{setTimeout(()=>{a.classList.add("animate"),a.querySelectorAll(".hexagon").forEach((h,u)=>{setTimeout(()=>{h.classList.add("animate")},u*50)})},500+c*200)}),t.unobserve(r.target)}})},{threshold:.05,rootMargin:"200px 0px -50px 0px"});this.skillsSection&&t.observe(this.skillsSection.nativeElement)}static{this.\u0275fac=function(n){return new(n||i)(Xe(Ut))}}static{this.\u0275cmp=St({type:i,selectors:[["app-skills"]],viewQuery:function(n,r){if(n&1&&Ht(lm,5),n&2){let s;Gt(s=Wt())&&(r.skillsSection=s.first)}},standalone:!0,features:[Ct],decls:30,vars:3,consts:[["skillsSection",""],["id","skills",1,"skills-section"],[1,"container"],[1,"section-subtitle"],[1,"section-title"],[1,"category-container"],[1,"category-title","top"],[1,"honeycomb-grid"],["class","honeycomb-row",3,"staggered-row",4,"ngFor","ngForOf"],[1,"category-title","bottom"],[1,"honeycomb-row"],["class","hexagon",4,"ngFor","ngForOf"],[1,"hexagon"],["draggable","false",3,"src","alt"]],template:function(n,r){n&1&&(W(0,"section",1,0)(2,"div",2)(3,"div",3)(4,"p"),oe(5,"Technical Proficiencies"),j()(),W(6,"div",4)(7,"h2"),oe(8,"Skills."),j()(),W(9,"div",5)(10,"h2",6),oe(11,"<programming>"),j(),W(12,"div",7),ut(13,um,2,3,"div",8),j(),W(14,"h2",9),oe(15,"</programming>"),j()(),W(16,"div",5)(17,"h2",6),oe(18,"<itTools>"),j(),W(19,"div",7),ut(20,fm,2,3,"div",8),j(),W(21,"h2",9),oe(22,"</itTools>"),j()(),W(23,"div",5)(24,"h2",6),oe(25,"<contentProduction>"),j(),W(26,"div",7),ut(27,mm,2,3,"div",8),j(),W(28,"h2",9),oe(29,"</contentProduction>"),j()()()()),n&2&&(fe(13),We("ngForOf",r.rows.programming),fe(7),We("ngForOf",r.rows.itTools),fe(7),We("ngForOf",r.rows.contentProduction))},dependencies:[kt,Si],styles:['.skills-section[_ngcontent-%COMP%]{width:100%;max-width:100vw;overflow-x:hidden;background:#050816;display:flex;align-items:center;justify-content:center;position:relative;min-height:100vh}.skills-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:calc(100% - 20px);max-width:80rem;display:flex;flex-direction:column;padding:0;margin:0 auto;overflow-x:hidden}@media (min-width: 640px){.skills-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:4rem}}.skills-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]{text-align:center;margin-bottom:1rem}.skills-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#aaa6c3;text-transform:uppercase;letter-spacing:.15em;font-weight:500;margin:0}@media (min-width: 640px){.skills-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}}.skills-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:center;margin-bottom:3rem}.skills-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:3.75rem;font-weight:900;background:linear-gradient(90deg,#915eff,#00bfff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-align:center;line-height:1.5}@media (min-width: 480px){.skills-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:40px}}@media (min-width: 640px){.skills-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:50px}}@media (min-width: 768px){.skills-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:60px}}.skills-section[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{margin-bottom:50px}.skills-section[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]:last-child{margin-bottom:0}.skills-section[_ngcontent-%COMP%]   .honeycomb-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px 0}.skills-section[_ngcontent-%COMP%]   .honeycomb-row[_ngcontent-%COMP%]{display:flex;justify-content:center}.skills-section[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]{position:relative;width:130px;height:150px;margin:-10px 7.5px;display:flex;justify-content:center;align-items:center;transition:all .3s ease;z-index:1;cursor:pointer;opacity:0;transform:translateY(20px) scale(.8) translateZ(0);transition:transform .6s cubic-bezier(.16,1,.3,1),opacity .6s cubic-bezier(.16,1,.3,1),filter .3s ease;will-change:transform,opacity}.skills-section[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:before, .skills-section[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:after{content:"";position:absolute;width:100%;height:100%;top:0;left:0;transition:all .3s ease;clip-path:polygon(0 25%,50% 0,100% 25%,100% 75%,50% 100%,0 75%)}.skills-section[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:before{background-color:#2a1d4c;z-index:1}.skills-section[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:after{background-color:#915eff;z-index:-1;opacity:0;transform:scale(1.05)}.skills-section[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px;background-color:transparent;padding:0;position:relative;z-index:2;transition:all .3s ease;object-fit:contain}.skills-section[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:hover{filter:drop-shadow(0 0 10px rgba(145,94,255,.9));transform:translateY(-5px) translateZ(0)}.skills-section[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:hover:after{opacity:1}.skills-section[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.1) translateZ(0)}.skills-section[_ngcontent-%COMP%]   .hexagon.animate[_ngcontent-%COMP%]{opacity:1;transform:translateY(0) scale(1) translateZ(0)}.skills-section[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:26px;background:linear-gradient(90deg,#915eff,#00bfff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent;text-align:left;padding:20px 0 5px 10px;filter:drop-shadow(0 0 10px #915eff);font-weight:700}.skills-section[_ngcontent-%COMP%]   .category-title.bottom[_ngcontent-%COMP%]{text-align:right;padding:5px 10px 20px 0}.skills-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%], .skills-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .skills-section[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{opacity:0;transform:translateY(30px);transition:all .6s cubic-bezier(.16,1,.3,1)}.skills-section.animate-in[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition-delay:.1s}.skills-section.animate-in[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition-delay:.3s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]:nth-child(3){transition-delay:.5s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]:nth-child(4){transition-delay:.7s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]:nth-child(5){transition-delay:.9s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]{opacity:1;transform:translateY(0) scale(1)}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:nth-child(1){transition-delay:.1s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:nth-child(2){transition-delay:.2s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:nth-child(3){transition-delay:.3s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:nth-child(4){transition-delay:.4s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:nth-child(5){transition-delay:.5s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:nth-child(6){transition-delay:.6s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:nth-child(7){transition-delay:.7s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:nth-child(8){transition-delay:.8s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:nth-child(9){transition-delay:.9s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:nth-child(10){transition-delay:1s}.skills-section.animate-in[_ngcontent-%COMP%]   .category-container.animate[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]:nth-child(11){transition-delay:1.1s}@media (max-width: 600px){.skills-section[_ngcontent-%COMP%]{margin:50px 0;padding:50px 0 30px}.skills-section[_ngcontent-%COMP%]   .honeycomb-row.staggered-row[_ngcontent-%COMP%]{margin-left:0}.skills-section[_ngcontent-%COMP%]   .honeycomb-row[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]{width:100px;height:115px;margin:-8px 5px}.skills-section[_ngcontent-%COMP%]   .honeycomb-row[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px}.skills-section[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{font-size:20px;padding:15px 0 5px 10px}.skills-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px}}@media (min-width: 1200px){.skills-section[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]{width:140px;height:160px}.skills-section[_ngcontent-%COMP%]   .hexagon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90px;height:90px}}']})}}return i})();var gm=["projectCard"];function _m(i,e){if(i&1&&(W(0,"p",20),oe(1),j()),i&2){let t=e.$implicit;Su(t.color),fe(),Gn(" #",t.name," ")}}function xm(i,e){if(i&1&&(W(0,"a",21),oe(1," Live Project "),j()),i&2){let t=dn().$implicit;We("href",t.live_project_link,Pn)}}function ym(i,e){if(i&1){let t=Cr();W(0,"div",8,0)(2,"div",9)(3,"img",10),Pt("error",function(r){Xi(t);let s=dn();return Yi(s.onImageError(r))}),j(),W(4,"div",11)(5,"div",12),Pt("click",function(){let r=Xi(t).$implicit,s=dn();return Yi(s.openSourceCode(r.source_code_link))}),Je(6,"img",13),j()()(),W(7,"div",14)(8,"h3",15),oe(9),j(),W(10,"p",16),oe(11),j(),W(12,"div",17),ut(13,_m,2,3,"p",18),j(),ut(14,xm,2,1,"a",19),j()()}if(i&2){let t=e.$implicit,n=e.index;Sr("animation-delay",n*150,"ms"),fe(3),We("src",t.image,Pn)("alt",t.name),fe(6),Kt(t.name),fe(2),Kt(t.description),fe(2),We("ngForOf",t.tags),fe(),We("ngIf",t.live_project_link)}}var Vu=(()=>{class i{constructor(t,n){this.platformId=t,this.portfolioService=n,this.isInView=!1,this.projects=[{name:"AurGee Herbs \u{1F33F}",description:"Freelanced UI for AurGee Herbs, a premium herbal brand. Built with Angular and hosted on AWS. Modern, responsive design tailored for e-commerce and brand storytelling. Backend with Node.js is under development, using Supabase as the database.",tags:[{name:"Angular",color:"text-red-400"},{name:"TypeScript",color:"text-blue-400"},{name:"AWS",color:"text-orange-400"},{name:"UI/UX",color:"text-green-400"},{name:"Supabase",color:"text-purple-400"}],image:"assets/AurGee_project.jpg",source_code_link:"https://github.com/karthickajan/AurGee",live_project_link:"https://aurgeeherbs.com/"},{name:"Chessy \u2658",description:"Chess board prediction and analyser. Upload a photo of a chess board, and Chessy recognizes the board and pieces, recreates the exact position digitally, and suggests the next best move. Built with Python, Flask, YOLO, and Angular for a seamless chess experience.",tags:[{name:"Python",color:"text-blue-400"},{name:"OpenCV",color:"text-green-400"},{name:"AI/ML",color:"text-purple-400"},{name:"Chess",color:"text-orange-400"}],image:"assets/chessyss.png",source_code_link:"https://github.com/karthickajan/chessy",live_project_link:"https://karthickajan.github.io/ChessyUI/"},{name:"Weekend \u{1F4CD}",description:"A web application for event booking and hosting that connects like-minded people. Features real-time chat, suggestions, secure authentication, and automatic recommendations for nearby users with shared interests. Built with Angular, Node.js, AWS, and MySQL.",tags:[{name:"Angular",color:"text-red-400"},{name:"Node.js",color:"text-green-400"},{name:"AWS",color:"text-yellow-400"},{name:"Real-time Chat",color:"text-blue-400"},{name:"MySQL",color:"text-purple-400"}],image:"assets/weekendss.png",source_code_link:"https://github.com/Weekend-weebee/Weekend-UI",live_project_link:"https://github.com/Weekend-weebee/Weekend-UI"}]}ngOnInit(){}ngAfterViewInit(){this.initializeTiltEffect(),setTimeout(()=>{this.setupIntersectionObserver()},100)}ngOnDestroy(){this.intersectionObserver&&this.intersectionObserver.disconnect()}setupIntersectionObserver(){if(dt(this.platformId)&&!(typeof IntersectionObserver>"u")&&(this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&!this.isInView&&(this.isInView=!0,this.triggerHeaderAnimations(),setTimeout(()=>{this.triggerAnimations()},600))})},{threshold:.05,rootMargin:"200px 0px -50px 0px"}),typeof document<"u")){let t=document.querySelector("#projects");t&&this.intersectionObserver.observe(t)}}triggerHeaderAnimations(){dt(this.platformId)&&(setTimeout(()=>{document.querySelector(".projects-section .section-subtitle")?.classList.add("animate-fadeInUp")},0),setTimeout(()=>{document.querySelector(".projects-section .section-title")?.classList.add("animate-slideInFromBottom")},200))}triggerAnimations(){if(!dt(this.platformId))return;document.querySelectorAll(".project-card").forEach((n,r)=>{setTimeout(()=>{n.classList.add("animate-in")},r*200)})}initializeTiltEffect(){this.projectCards.forEach(t=>{let n=t.nativeElement,r=!1;n.addEventListener("mouseenter",()=>{n.style.transition="transform 0.15s ease-out, box-shadow 0.3s ease"}),n.addEventListener("mousemove",s=>{let o=s.target;if(o.classList.contains("live-project-btn")||o.closest(".live-project-btn")||o.classList.contains("source-code-btn")||o.closest(".source-code-btn")||o.classList.contains("github-icon")||r){n.style.transition="transform 0.2s ease-out, box-shadow 0.3s ease",n.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-8px)";return}let c=n.getBoundingClientRect(),l=s.clientX-c.left,h=s.clientY-c.top,u=c.width/2,d=c.height/2,p=(h-d)/d*8,g=(l-u)/u*-8;n.style.transform=`perspective(1000px) rotateX(${p}deg) rotateY(${g}deg) translateY(-8px)`}),n.addEventListener("mouseleave",()=>{r=!0,n.style.transition="transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease",n.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)",setTimeout(()=>{r=!1},500)})})}openSourceCode(t){window.open(t,"_blank")}openLiveProject(t){window.open(t,"_blank")}onImageError(t){let n=t.target;n&&(n.src="/assets/project-placeholder.svg")}static{this.\u0275fac=function(n){return new(n||i)(Xe(Ut),Xe(Ao))}}static{this.\u0275cmp=St({type:i,selectors:[["app-projects"]],viewQuery:function(n,r){if(n&1&&Ht(gm,5,bs),n&2){let s;Gt(s=Wt())&&(r.projectCards=s)}},standalone:!0,features:[Ct],decls:9,vars:1,consts:[["projectCard",""],["id","projects",1,"projects-section"],[1,"projects-container"],[1,"section-header"],[1,"section-subtitle"],[1,"section-title"],[1,"projects-grid"],["class","project-card",3,"animation-delay",4,"ngFor","ngForOf"],[1,"project-card"],[1,"project-image-container"],[1,"project-image",3,"error","src","alt"],[1,"project-overlay"],["title","View Source Code",1,"source-code-btn",3,"click"],["src","/assets/github.png","alt","source code",1,"github-icon"],[1,"project-content"],[1,"project-name"],[1,"project-description"],[1,"project-tags"],["class","tech-tag",3,"class",4,"ngFor","ngForOf"],["target","_blank","rel","noopener noreferrer","class","live-project-btn",3,"href",4,"ngIf"],[1,"tech-tag"],["target","_blank","rel","noopener noreferrer",1,"live-project-btn",3,"href"]],template:function(n,r){n&1&&(W(0,"section",1)(1,"div",2)(2,"div",3)(3,"p",4),oe(4,"INNOVATIVE CREATIONS"),j(),W(5,"h2",5),oe(6,"Projects."),j()(),W(7,"div",6),ut(8,ym,15,8,"div",7),j()()()),n&2&&(fe(8),We("ngForOf",r.projects))},dependencies:[kt,Si,Ci],styles:[".projects-section[_ngcontent-%COMP%]{background-color:#050816;color:#fff;padding:64px;min-height:100vh;position:relative}.projects-section[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]{max-width:80rem;margin:0 auto;padding:0 20px}.projects-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:80px}.projects-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]{color:#aaa6c3;font-weight:500;font-size:18px;text-transform:uppercase;opacity:0;transform:translateY(30px);transition:all .8s ease;letter-spacing:.15em;margin:0;line-height:1.5}.projects-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle.animate-fadeInUp[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.projects-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{margin:0;opacity:0;transform:translateY(50px);transition:all .8s ease;font-size:3.75rem;font-weight:900;background:linear-gradient(90deg,#915eff,#00bfff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-align:center;line-height:1.5}.projects-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title.animate-slideInFromBottom[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.projects-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));gap:28px;justify-items:center}@media (max-width: 768px){.projects-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:20px}}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]{background:linear-gradient(145deg,#1d1836,#1a1a2e);padding:20px;border-radius:20px;width:100%;max-width:360px;cursor:default;position:relative;transform-style:preserve-3d;opacity:0;transform:translateY(50px);will-change:transform}.projects-section[_ngcontent-%COMP%]   .project-card.animate-in[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition:none}.projects-section[_ngcontent-%COMP%]   .project-card.animate-in[_ngcontent-%COMP%]:hover{box-shadow:0 25px 50px #00000080,0 0 30px #915eff33}.projects-section[_ngcontent-%COMP%]   .project-card.animate-in[_ngcontent-%COMP%]:hover   .project-overlay[_ngcontent-%COMP%]{opacity:1;background:linear-gradient(135deg,#0000001a,#0000004d)}.projects-section[_ngcontent-%COMP%]   .project-card.animate-in[_ngcontent-%COMP%]:hover   .github-icon[_ngcontent-%COMP%]{filter:drop-shadow(0 0 10px rgba(145,94,255,.7)) invert(1)}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-image-container[_ngcontent-%COMP%]{position:relative;width:100%;height:230px;margin-bottom:20px;border-radius:16px;overflow:hidden}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-image-container[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:16px;transition:transform .4s cubic-bezier(.175,.885,.32,1.275)}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-image-container[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;justify-content:flex-end;align-items:flex-start;padding:12px;pointer-events:none;transition:opacity .3s ease,background .3s ease;background:transparent;opacity:0;z-index:5}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-image-container[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%]   .source-code-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#000,#1a1a1a);width:40px;height:40px;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;pointer-events:auto;transition:all .3s ease;border:1px solid rgba(255,255,255,.1);position:relative;z-index:100;transform:translateZ(100px)}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-image-container[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%]   .source-code-btn[_ngcontent-%COMP%]:hover{box-shadow:0 0 20px #915effcc;background:linear-gradient(135deg,#915eff,#7c3aed);transform:translateZ(100px) scale(1.15)}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-image-container[_ngcontent-%COMP%]   .project-overlay[_ngcontent-%COMP%]   .source-code-btn[_ngcontent-%COMP%]   .github-icon[_ngcontent-%COMP%]{width:20px;height:20px;filter:invert(1);transition:filter .3s ease;pointer-events:none}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]{position:relative;z-index:10}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:24px;margin:0 0 12px;line-height:1.2}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%]{color:#aaa6c3;font-size:18px;line-height:1.6;margin:0 0 16px}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-tags[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%]{font-size:16px;margin:0;font-weight:500}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-tags[_ngcontent-%COMP%]   .tech-tag.text-blue-400[_ngcontent-%COMP%]{color:#60a5fa}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-tags[_ngcontent-%COMP%]   .tech-tag.text-green-400[_ngcontent-%COMP%]{color:#34d399}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-tags[_ngcontent-%COMP%]   .tech-tag.text-pink-400[_ngcontent-%COMP%]{color:#f472b6}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-tags[_ngcontent-%COMP%]   .tech-tag.text-purple-400[_ngcontent-%COMP%]{color:#a78bfa}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-tags[_ngcontent-%COMP%]   .tech-tag.text-orange-400[_ngcontent-%COMP%]{color:#fbbf24}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-tags[_ngcontent-%COMP%]   .tech-tag.text-red-400[_ngcontent-%COMP%]{color:#f87171}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-tags[_ngcontent-%COMP%]   .tech-tag.text-yellow-400[_ngcontent-%COMP%]{color:#fde047}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .live-project-btn[_ngcontent-%COMP%]{background:#000;color:#fff;padding:12px 20px;border:none;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px;transition:all .3s ease;display:inline-block;cursor:pointer;position:relative;z-index:20;pointer-events:auto;will-change:transform,box-shadow;transform:translateZ(0)}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .live-project-btn[_ngcontent-%COMP%]:hover{background:#1a1a1a;transform:translateY(-2px) translateZ(0)!important;box-shadow:0 4px 15px #c001ffda}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .live-project-btn[_ngcontent-%COMP%]:active{transform:translateY(0) translateZ(0)!important}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]{animation-fill-mode:forwards}@media (max-width: 1200px){.projects-section[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]{padding:0 40px}}@media (max-width: 768px){.projects-section[_ngcontent-%COMP%]{padding:80px 0}.projects-section[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]{padding:0 20px}.projects-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%]{font-size:16px}.projects-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:2.8rem}.projects-section[_ngcontent-%COMP%]   .projects-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:20px}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]{max-width:100%}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-image-container[_ngcontent-%COMP%]{height:200px}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%]{font-size:20px}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%]{font-size:17px}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-tags[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%], .projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .live-project-btn[_ngcontent-%COMP%]{font-size:14px}}@media (max-width: 480px){.projects-section[_ngcontent-%COMP%]{padding:60px 0}.projects-section[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]{padding:0 16px}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]{padding:16px}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-image-container[_ngcontent-%COMP%]{height:180px}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%]{font-size:18px}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%]{font-size:17px}.projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-tags[_ngcontent-%COMP%]   .tech-tag[_ngcontent-%COMP%], .projects-section[_ngcontent-%COMP%]   .project-card[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .live-project-btn[_ngcontent-%COMP%]{font-size:13px}}.project-card.animate-in[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}@media (prefers-reduced-motion: reduce){.project-card[_ngcontent-%COMP%]{opacity:1!important;transform:translateY(0)!important;animation:none!important}}"]})}}return i})();var Zu=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(Xe(Xc),Xe(bs))}}static{this.\u0275dir=An({type:i})}}return i})(),vm=(()=>{class i extends Zu{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=jc(i)))(r||i)}})()}static{this.\u0275dir=An({type:i,features:[bi]})}}return i})(),Ku=new ji("");var Mm={provide:Ku,useExisting:vs(()=>ko),multi:!0};function bm(){let i=Yc()?Yc().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Sm=new ji(""),ko=(()=>{class i extends Zu{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!bm())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(Xe(Xc),Xe(bs),Xe(Sm,8))}}static{this.\u0275dir=An({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&Pt("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},features:[Cs([Mm]),bi]})}}return i})();function Ei(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function $u(i){return i!=null&&typeof i.length=="number"}var $c=new ji(""),Ju=new ji(""),Cm=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ti=class{static min(e){return wm(e)}static max(e){return Em(e)}static required(e){return Qu(e)}static requiredTrue(e){return Tm(e)}static email(e){return Am(e)}static minLength(e){return Pm(e)}static maxLength(e){return Om(e)}static pattern(e){return Rm(e)}static nullValidator(e){return Ro(e)}static compose(e){return sd(e)}static composeAsync(e){return ad(e)}};function wm(i){return e=>{if(Ei(e.value)||Ei(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function Em(i){return e=>{if(Ei(e.value)||Ei(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function Qu(i){return Ei(i.value)?{required:!0}:null}function Tm(i){return i.value===!0?null:{required:!0}}function Am(i){return Ei(i.value)||Cm.test(i.value)?null:{email:!0}}function Pm(i){return e=>Ei(e.value)||!$u(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Om(i){return e=>$u(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function Rm(i){if(!i)return Ro;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(Ei(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Ro(i){return null}function ed(i){return i!=null}function td(i){return Cu(i)?uu(i):i}function nd(i){let e={};return i.forEach(t=>{e=t!=null?gt(gt({},e),t):e}),Object.keys(e).length===0?null:e}function id(i,e){return e.map(t=>t(i))}function Im(i){return!i.validate}function rd(i){return i.map(e=>Im(e)?e:t=>e.validate(t))}function sd(i){if(!i)return null;let e=i.filter(ed);return e.length==0?null:function(t){return nd(id(t,e))}}function od(i){return i!=null?sd(rd(i)):null}function ad(i){if(!i)return null;let e=i.filter(ed);return e.length==0?null:function(t){let n=id(t,e).map(td);return fu(n).pipe(du(nd))}}function cd(i){return i!=null?ad(rd(i)):null}function zu(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function ld(i){return i._rawValidators}function hd(i){return i._rawAsyncValidators}function qc(i){return i?Array.isArray(i)?i:[i]:[]}function Io(i,e){return Array.isArray(i)?i.includes(e):i===e}function Hu(i,e){let t=qc(e);return qc(i).forEach(r=>{Io(t,r)||t.push(r)}),t}function Gu(i,e){return qc(e).filter(t=>!Io(i,t))}var Do=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=od(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=cd(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Er=class extends Do{get formDirective(){return null}get path(){return null}},Os=class extends Do{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Lo=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Dm={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},vb=ti(gt({},Dm),{"[class.ng-submitted]":"isSubmitted"}),ud=(()=>{class i extends Lo{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(Xe(Os,2))}}static{this.\u0275dir=An({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&ct("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[bi]})}}return i})(),dd=(()=>{class i extends Lo{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(Xe(Er,10))}}static{this.\u0275dir=An({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&ct("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[bi]})}}return i})();var As="VALID",Po="INVALID",wr="PENDING",Ps="DISABLED";function Jc(i){return(Bo(i)?i.validators:i)||null}function Lm(i){return Array.isArray(i)?od(i):i||null}function Qc(i,e){return(Bo(e)?e.asyncValidators:i)||null}function Fm(i){return Array.isArray(i)?cd(i):i||null}function Bo(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function fd(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new Mr(1e3,"");if(!n[t])throw new Mr(1001,"")}function pd(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new Mr(1002,"")})}var Tr=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===As}get invalid(){return this.status===Po}get pending(){return this.status==wr}get disabled(){return this.status===Ps}get enabled(){return this.status!==Ps}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Hu(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Hu(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Gu(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Gu(e,this._rawAsyncValidators))}hasValidator(e){return Io(this._rawValidators,e)}hasAsyncValidator(e){return Io(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=wr,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Ps,this.errors=null,this._forEachChild(n=>{n.disable(ti(gt({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ti(gt({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=As,this._forEachChild(n=>{n.enable(ti(gt({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(ti(gt({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===As||this.status===wr)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ps:As}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=wr,this._hasOwnPendingAsyncValidator=!0;let t=td(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new Ss,this.statusChanges=new Ss}_calculateStatus(){return this._allControlsDisabled()?Ps:this.errors?Po:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(wr)?wr:this._anyControlsHaveStatus(Po)?Po:As}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Bo(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Lm(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Fm(this._rawAsyncValidators)}},Fo=class extends Tr{constructor(e,t,n){super(Jc(t),Qc(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){pd(this,!0,e),Object.keys(e).forEach(n=>{fd(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Zc=class extends Fo{};var md=new ji("CallSetDisabledState",{providedIn:"root",factory:()=>el}),el="always";function Nm(i,e){return[...e.path,i]}function Wu(i,e,t=el){tl(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),km(i,e),Vm(i,e),Bm(i,e),Um(i,e)}function ju(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),Uo(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function No(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Um(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function tl(i,e){let t=ld(i);e.validator!==null?i.setValidators(zu(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=hd(i);e.asyncValidator!==null?i.setAsyncValidators(zu(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();No(e._rawValidators,r),No(e._rawAsyncValidators,r)}function Uo(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=ld(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(t=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=hd(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(t=!0,i.setAsyncValidators(s))}}}let n=()=>{};return No(e._rawValidators,n),No(e._rawAsyncValidators,n),t}function km(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&gd(i,e)})}function Bm(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&gd(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function gd(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Vm(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function zm(i,e){i==null,tl(i,e)}function Hm(i,e){return Uo(i,e)}function Gm(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Wm(i){return Object.getPrototypeOf(i.constructor)===vm}function jm(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Xm(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===ko?t=s:Wm(s)?n=s:r=s}),r||n||t||null}function Ym(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Xu(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Yu(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Oo=class extends Tr{constructor(e=null,t,n){super(Jc(t),Qc(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Bo(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Yu(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Xu(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Xu(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Yu(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var qm=i=>i instanceof Oo;var _d=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=An({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var xd=new ji("");var Zm={provide:Er,useExisting:vs(()=>nl)},nl=(()=>{class i extends Er{constructor(t,n,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new Ss,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Uo(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return Wu(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){ju(t.control||null,t,!1),Ym(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this.submitted=!0,jm(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(ju(n||null,t),qm(r)&&(Wu(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);zm(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&Hm(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){tl(this.form,this),this._oldForm&&Uo(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(Xe($c,10),Xe(Ju,10),Xe(md,8))}}static{this.\u0275dir=An({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&Pt("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{form:[Ms.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[Cs([Zm]),bi,Eo]})}}return i})();var Km={provide:Os,useExisting:vs(()=>il)},il=(()=>{class i extends Os{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,s,o){super(),this._ngModelWarningConfig=o,this._added=!1,this.name=null,this.update=new Ss,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Xm(this,s)}ngOnChanges(t){this._added||this._setUpControl(),Gm(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Nm(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(Xe(Er,13),Xe($c,10),Xe(Ju,10),Xe(Ku,10),Xe(xd,8))}}static{this.\u0275dir=An({type:i,selectors:[["","formControlName",""]],inputs:{name:[Ms.None,"formControlName","name"],isDisabled:[Ms.None,"disabled","isDisabled"],model:[Ms.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[Cs([Km]),bi,Eo]})}}return i})();var $m=(()=>{class i{constructor(){this._validator=Ro}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Ro,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=An({type:i,features:[Eo]})}}return i})();var Jm={provide:$c,useExisting:vs(()=>rl),multi:!0};var rl=(()=>{class i extends $m{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=wu,this.createValidator=t=>Qu}enabled(t){return t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=jc(i)))(r||i)}})()}static{this.\u0275dir=An({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&bu("required",r._enabled?"":null)},inputs:{required:"required"},features:[Cs([Jm]),bi]})}}return i})();var Qm=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Hc({type:i})}static{this.\u0275inj=Vc({})}}return i})(),Kc=class extends Tr{constructor(e,t,n){super(Jc(t),Qc(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){pd(this,!1,e),e.forEach((n,r)=>{fd(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function qu(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var yd=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new i;return t.useNonNullable=!0,t}group(t,n=null){let r=this._reduceControls(t),s={};return qu(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new Fo(r,s)}record(t,n=null){let r=this._reduceControls(t);return new Zc(r,n)}control(t,n,r){let s={};return this.useNonNullable?(qu(n)?s=n:(s.validators=n,s.asyncValidators=r),new Oo(t,ti(gt({},s),{nonNullable:!0}))):new Oo(t,n,r)}array(t,n,r){let s=t.map(o=>this._createControl(o));return new Kc(s,n,r)}_reduceControls(t){let n={};return Object.keys(t).forEach(r=>{n[r]=this._createControl(t[r])}),n}_createControl(t){if(t instanceof Oo)return t;if(t instanceof Tr)return t;if(Array.isArray(t)){let n=t[0],r=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(n,r,s)}else return this.control(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=br({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var vd=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:xd,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:md,useValue:t.callSetDisabledState??el}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Hc({type:i})}static{this.\u0275inj=Vc({imports:[Qm]})}}return i})();var Oa="179",Bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rf=0,Wl=1,sf=2;var jl=1,ns=2,Jn=3,Nn=0,tn=1,Cn=2,_i=0,Qi=1,Xl=2,Yl=3,ql=4,of=5,Fi=100,af=101,cf=102,lf=103,hf=104,uf=200,df=201,ff=202,pf=203,ua=204,da=205,mf=206,gf=207,_f=208,xf=209,yf=210,vf=211,Mf=212,bf=213,Sf=214,Ra=0,Ia=1,Da=2,er=3,La=4,Fa=5,Na=6,Ua=7,ka=0,Cf=1,wf=2,xi=0,Ef=1,Tf=2,Af=3,is=4,Pf=5,Of=6,Rf=7,Il="attached",If="detached",Dl=300,hr=301,ur=302,Ba=303,Va=304,po=306,Ni=1e3,Wn=1001,Gr=1002,Vt=1003,za=1004;var dr=1005;var Jt=1006,rs=1007;var Vn=1008;var zn=1009,Zl=1010,Kl=1011,ss=1012,Ha=1013,zi=1014,wn=1015,os=1016,Ga=1017,Wa=1018,as=1020,$l=35902,Jl=1021,Ql=1022,xn=1023,Wr=1026,cs=1027,ja=1028,Xa=1029,eh=1030,Ya=1031;var qa=1033,mo=33776,go=33777,_o=33778,xo=33779,Za=35840,Ka=35841,$a=35842,Ja=35843,Qa=36196,ec=37492,tc=37496,nc=37808,ic=37809,rc=37810,sc=37811,oc=37812,ac=37813,cc=37814,lc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,yo=36492,gc=36494,_c=36495,th=36283,xc=36284,yc=36285,vc=36286;var tr=2300,nr=2301,ha=2302,Ll=2400,Fl=2401,Nl=2402,Df=2500;var nh=0,vo=1,ls=2,Lf=3200,Ff=3201;var Mc=0,Nf=1,yi="",xt="srgb",zt="srgb-linear",zs="linear",it="srgb";var Ji=7680;var Ul=519,Uf=512,kf=513,Bf=514,ih=515,Vf=516,zf=517,Hf=518,Gf=519,fa=35044;var rh="300 es",Ln=2e3,Hs=2001;var Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Md=1234567,Bs=Math.PI/180,ir=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function sh(i,e){return(i%e+e)%e}function tg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ng(i,e,t){return i!==e?(t-i)/(e-i):0}function Vs(i,e,t){return(1-t)*i+t*e}function ig(i,e,t,n){return Vs(i,e,1-Math.exp(-t*n))}function rg(i,e=1){return e-Math.abs(sh(i,e*2)-e)}function sg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ag(i,e){return i+Math.floor(Math.random()*(e-i+1))}function cg(i,e){return i+Math.random()*(e-i)}function lg(i){return i*(.5-Math.random())}function hg(i){i!==void 0&&(Md=i);let e=Md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ug(i){return i*Bs}function dg(i){return i*ir}function fg(i){return(i&i-1)===0&&i!==0}function pg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gg(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mo={DEG2RAD:Bs,RAD2DEG:ir,generateUUID:Fn,clamp:je,euclideanModulo:sh,mapLinear:tg,inverseLerp:ng,lerp:Vs,damp:ig,pingpong:rg,smoothstep:sg,smootherstep:og,randInt:ag,randFloat:cg,randFloatSpread:lg,seededRandom:hg,degToRad:ug,radToDeg:dg,isPowerOfTwo:fg,ceilPowerOfTwo:pg,floorPowerOfTwo:mg,setQuaternionFromProperEuler:gg,normalize:nt,denormalize:Dn},Oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*_,w=f>=0?1:-1,C=1-f*f;if(C>Number.EPSILON){let A=Math.sqrt(C),O=Math.atan2(A,f*w);m=Math.sin(m*O)/A,a=Math.sin(a*O)/A}let v=a*w;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new I,bd=new Qt,ke=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],f=r[6],w=r[1],C=r[4],v=r[7],A=r[2],O=r[5],P=r[8];return s[0]=o*_+a*w+c*A,s[3]=o*m+a*C+c*O,s[6]=o*f+a*v+c*P,s[1]=l*_+h*w+u*A,s[4]=l*m+h*C+u*O,s[7]=l*f+h*v+u*P,s[2]=d*_+p*w+g*A,s[5]=d*m+p*C+g*O,s[8]=d*f+p*v+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,p=l*s-o*c,g=t*u+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(r*l-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ol=new ke;function oh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wf(){let i=jr("canvas");return i.style.display="block",i}var Sd={};function rr(i){i in Sd||(Sd[i]=!0,console.warn(i))}function jf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Cd=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wd=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _g(){let i={enabled:!0,workingColorSpace:zt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=Hr(r.r),r.g=Hr(r.g),r.b=Hr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yi?zs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zt]:{primaries:e,whitePoint:n,transfer:zs,toXYZ:Cd,fromXYZ:wd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Cd,fromXYZ:wd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}var Ze=_g();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ar,pa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ar===void 0&&(Ar=jr("canvas")),Ar.width=e.width,Ar.height=e.height;let r=Ar.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ar}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ci(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xg=0,Xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(al(r[o].image)):s.push(al(r[o]))}else s=al(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yg=0,cl=new I,yn=(()=>{class i extends Xn{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Wn,s=Wn,o=Jt,a=Vn,c=xn,l=zn,h=i.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Fn(),this.name="",this.source=new Xr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ni:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ni:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=Dl,i.DEFAULT_ANISOTROPY=1,i})(),Qe=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,v=(p+1)/2,A=(f+1)/2,O=(h+d)/4,P=(u+_)/4,F=(g+m)/4;return C>v&&C>A?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=O/n,s=P/n):v>A?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=O/r,s=F/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=P/s,r=F/s),this.set(n,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ma=class extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new yn(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends ma{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gs=class extends yn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ga=class extends yn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _n=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),zo.subVectors(this.max,Rs),Pr.subVectors(e.a,Rs),Or.subVectors(e.b,Rs),Rr.subVectors(e.c,Rs),Ai.subVectors(Or,Pr),Pi.subVectors(Rr,Or),qi.subVectors(Pr,Rr);let t=[0,-Ai.z,Ai.y,0,-Pi.z,Pi.y,0,-qi.z,qi.y,Ai.z,0,-Ai.x,Pi.z,0,-Pi.x,qi.z,0,-qi.x,-Ai.y,Ai.x,0,-Pi.y,Pi.x,0,-qi.y,qi.x,0];return!ll(t,Pr,Or,Rr,zo)||(t=[1,0,0,0,1,0,0,0,1],!ll(t,Pr,Or,Rr,zo))?!1:(Ho.crossVectors(Ai,Pi),t=[Ho.x,Ho.y,Ho.z],ll(t,Pr,Or,Rr,zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ni=[new I,new I,new I,new I,new I,new I,new I,new I],On=new I,Vo=new _n,Pr=new I,Or=new I,Rr=new I,Ai=new I,Pi=new I,qi=new I,Rs=new I,zo=new I,Ho=new I,Zi=new I;function ll(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Zi.fromArray(i,s);let a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),c=e.dot(Zi),l=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var vg=new _n,Is=new I,hl=new I,rn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);let t=Is.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Is,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(hl)),this.expandByPoint(Is.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ii=new I,ul=new I,Go=new I,Oi=new I,dl=new I,Wo=new I,fl=new I,li=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ul.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(ul);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Go),a=Oi.dot(this.direction),c=-Oi.dot(Go),l=Oi.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ul).addScaledVector(Go,d),p}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),r=ii.dot(ii)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,r,s){dl.subVectors(t,e),Wo.subVectors(n,e),fl.crossVectors(dl,Wo);let o=this.direction.dot(fl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let c=a*this.direction.dot(Wo.crossVectors(Oi,Wo));if(c<0)return null;let l=a*this.direction.dot(dl.cross(Oi));if(l<0||c+l>o)return null;let h=-a*Oi.dot(fl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class i{constructor(e,t,n,r,s,o,a,c,l,h,u,d,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,u,d,p,g,_,m)}set(e,t,n,r,s,o,a,c,l,h,u,d,p,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mg,e,bg)}lookAt(e,t,n){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ri.crossVectors(n,pn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ri.crossVectors(n,pn)),Ri.normalize(),jo.crossVectors(pn,Ri),r[0]=Ri.x,r[4]=jo.x,r[8]=pn.x,r[1]=Ri.y,r[5]=jo.y,r[9]=pn.y,r[2]=Ri.z,r[6]=jo.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],w=n[3],C=n[7],v=n[11],A=n[15],O=r[0],P=r[4],F=r[8],b=r[12],M=r[1],E=r[5],X=r[9],z=r[13],Y=r[2],K=r[6],q=r[10],$=r[14],B=r[3],ce=r[7],pe=r[11],we=r[15];return s[0]=o*O+a*M+c*Y+l*B,s[4]=o*P+a*E+c*K+l*ce,s[8]=o*F+a*X+c*q+l*pe,s[12]=o*b+a*z+c*$+l*we,s[1]=h*O+u*M+d*Y+p*B,s[5]=h*P+u*E+d*K+p*ce,s[9]=h*F+u*X+d*q+p*pe,s[13]=h*b+u*z+d*$+p*we,s[2]=g*O+_*M+m*Y+f*B,s[6]=g*P+_*E+m*K+f*ce,s[10]=g*F+_*X+m*q+f*pe,s[14]=g*b+_*z+m*$+f*we,s[3]=w*O+C*M+v*Y+A*B,s[7]=w*P+C*E+v*K+A*ce,s[11]=w*F+C*X+v*q+A*pe,s[15]=w*b+C*z+v*$+A*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*p-n*c*p)+_*(+t*c*p-t*l*d+s*o*d-r*o*p+r*l*h-s*c*h)+m*(+t*l*u-t*a*p-s*o*u+n*o*p+s*a*h-n*l*h)+f*(-r*a*h-t*c*u+t*a*d+r*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],w=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,C=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,v=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,O=t*w+n*C+r*v+s*A;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/O;return e[0]=w*P,e[1]=(_*d*s-u*m*s-_*r*p+n*m*p+u*r*f-n*d*f)*P,e[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*f+n*c*f)*P,e[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*p-n*c*p)*P,e[4]=C*P,e[5]=(h*m*s-g*d*s+g*r*p-t*m*p-h*r*f+t*d*f)*P,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*f-t*c*f)*P,e[7]=(o*d*s-h*c*s+h*r*l-t*d*l-o*r*p+t*c*p)*P,e[8]=v*P,e[9]=(g*u*s-h*_*s-g*n*p+t*_*p+h*n*f-t*u*f)*P,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*f+t*a*f)*P,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*p-t*a*p)*P,e[12]=A*P,e[13]=(h*_*r-g*u*r+g*n*d-t*_*d-h*n*m+t*u*m)*P,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*m-t*a*m)*P,e[15]=(o*u*r-h*a*r+h*n*c-t*u*c-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,p=s*h,g=s*u,_=o*h,m=o*u,f=a*u,w=c*l,C=c*h,v=c*u,A=n.x,O=n.y,P=n.z;return r[0]=(1-(_+f))*A,r[1]=(p+v)*A,r[2]=(g-C)*A,r[3]=0,r[4]=(p-v)*O,r[5]=(1-(d+f))*O,r[6]=(m+w)*O,r[7]=0,r[8]=(g+C)*P,r[9]=(m-w)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Ir.set(r[0],r[1],r[2]).length(),o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);let l=1/s,h=1/o,u=1/a;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Ln,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===Ln)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Hs)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ln,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r),g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===Ln)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Hs)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ir=new I,Rn=new Ve,Mg=new I(0,0,0),bg=new I(1,1,1),Ri=new I,jo=new I,pn=new I,Ed=new Ve,Td=new Qt,hi=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],u=s[9],d=s[2],p=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Ed.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ed,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Td.setFromEuler(this),this.setFromQuaternion(Td,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),Ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sg=0,Ad=new I,Dr=new Qt,ri=new Ve,Xo=new I,Ds=new I,Cg=new I,wg=new Qt,Pd=new I(1,0,0),Od=new I(0,1,0),Rd=new I(0,0,1),Id={type:"added"},Eg={type:"removed"},Lr={type:"childadded",child:null},pl={type:"childremoved",child:null},It=(()=>{class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,n=new hi,r=new Qt,s=new I(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ke}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Dr.setFromAxisAngle(t,n),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,n){return Dr.setFromAxisAngle(t,n),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(Pd,t)}rotateY(t){return this.rotateOnAxis(Od,t)}rotateZ(t){return this.rotateOnAxis(Rd,t)}translateOnAxis(t,n){return Ad.copy(t).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Pd,t)}translateY(t){return this.translateOnAxis(Od,t)}translateZ(t){return this.translateOnAxis(Rd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Xo.copy(t):Xo.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Ds,Xo,this.up):ri.lookAt(Xo,Ds,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Dr.setFromRotationMatrix(ri),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Id),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Eg),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Id),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,Cg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,wg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>ti(gt({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>gt({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let d=l[h];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(n){let c=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),p=a(t.skeletons),g=a(t.animations),_=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=s,r;function a(c){let l=[];for(let h in c){let u=c[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new I(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),In=new I,si=new I,ml=new I,oi=new I,Fr=new I,Nr=new I,Dd=new I,gl=new I,_l=new I,xl=new I,yl=new Qe,vl=new Qe,Ml=new Qe,Li=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){In.subVectors(r,t),si.subVectors(n,t),ml.subVectors(e,t);let o=In.dot(In),a=In.dot(si),c=In.dot(ml),l=si.dot(si),h=si.dot(ml),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(a,oi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return yl.setScalar(0),vl.setScalar(0),Ml.setScalar(0),yl.fromBufferAttribute(e,t),vl.fromBufferAttribute(e,n),Ml.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(yl,s.x),o.addScaledVector(vl,s.y),o.addScaledVector(Ml,s.z),o}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),si.subVectors(e,t),In.cross(si).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),si.subVectors(this.a,this.b),In.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Fr.subVectors(r,n),Nr.subVectors(s,n),gl.subVectors(e,n);let c=Fr.dot(gl),l=Nr.dot(gl);if(c<=0&&l<=0)return t.copy(n);_l.subVectors(e,r);let h=Fr.dot(_l),u=Nr.dot(_l);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Fr,o);xl.subVectors(e,s);let p=Fr.dot(xl),g=Nr.dot(xl);if(g>=0&&p<=g)return t.copy(s);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Nr,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Dd.subVectors(s,r),a=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(Dd,a);let f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Fr,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function bl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=sh(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=bl(o,s,e+1/3),this.g=bl(o,s,e),this.b=bl(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=Xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Ze.workingToColorSpace(Xt.copy(this),e),Math.round(je(Xt.r*255,0,255))*65536+Math.round(je(Xt.g*255,0,255))*256+Math.round(je(Xt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=xt){Ze.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,r=Xt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Yo);let n=Vs(Ii.h,Yo.h,t),r=Vs(Ii.s,Yo.s,t),s=Vs(Ii.l,Yo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Pe;Pe.NAMES=Xf;var Tg=0,en=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Qi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=da,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Un=class extends en{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new I,qo=new Oe,Ag=0,Rt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ag++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fa,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qo.fromBufferAttribute(this,t),qo.applyMatrix3(e),this.setXY(t,qo.x,qo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fa&&(e.usage=this.usage),e}};var js=class extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xs=class extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Yt=class extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pg=0,bn=new Ve,Sl=new It,Ur=new I,mn=new _n,Ls=new _n,Bt=new I,sn=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oh(e)?Xs:js)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(mn.min,Ls.min),mn.expandByPoint(Bt),Bt.addVectors(mn.max,Ls.max),mn.expandByPoint(Bt)):(mn.expandByPoint(Ls.min),mn.expandByPoint(Ls.max))}mn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(Ur.fromBufferAttribute(e,l),Bt.add(Ur)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new I,c[F]=new I;let l=new I,h=new I,u=new I,d=new Oe,p=new Oe,g=new Oe,_=new I,m=new I;function f(F,b,M){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(E),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(E),a[F].add(_),a[b].add(_),a[M].add(_),c[F].add(m),c[b].add(m),c[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,b=w.length;F<b;++F){let M=w[F],E=M.start,X=M.count;for(let z=E,Y=E+X;z<Y;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let C=new I,v=new I,A=new I,O=new I;function P(F){A.fromBufferAttribute(r,F),O.copy(A);let b=a[F];C.copy(b),C.sub(A.multiplyScalar(A.dot(b))).normalize(),v.crossVectors(O,b);let E=v.dot(c[F])<0?-1:1;o.setXYZW(F,C.x,C.y,C.z,E)}for(let F=0,b=w.length;F<b;++F){let M=w[F],E=M.start,X=M.count;for(let z=E,Y=E+X;z<Y;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Rt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ld=new Ve,Ki=new li,Zo=new rn,Fd=new I,Ko=new I,$o=new I,Jo=new I,Cl=new I,Qo=new I,Nd=new I,ea=new I,Mt=class extends It{constructor(e=new sn,t=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Qo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Cl.fromBufferAttribute(u,e),o?Qo.addScaledVector(Cl,h):Qo.addScaledVector(Cl.sub(t),h))}t.add(Qo)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(Zo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Zo,Fd)===null||Ki.origin.distanceToSquared(Fd)>(e.far-e.near)**2))&&(Ld.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(Ld),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),C=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,A=C;v<A;v+=3){let O=a.getX(v),P=a.getX(v+1),F=a.getX(v+2);r=ta(this,f,e,n,l,h,u,O,P,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let w=a.getX(m),C=a.getX(m+1),v=a.getX(m+2);r=ta(this,o,e,n,l,h,u,w,C,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,A=C;v<A;v+=3){let O=v,P=v+1,F=v+2;r=ta(this,f,e,n,l,h,u,O,P,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let w=m,C=m+1,v=m+2;r=ta(this,o,e,n,l,h,u,w,C,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Og(i,e,t,n,r,s,o,a){let c;if(e.side===tn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Nn,a),c===null)return null;ea.copy(a),ea.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ea);return l<t.near||l>t.far?null:{distance:l,point:ea.clone(),object:i}}function ta(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Ko),i.getVertexPosition(c,$o),i.getVertexPosition(l,Jo);let h=Og(i,e,t,n,Ko,$o,Jo,Nd);if(h){let u=new I;Li.getBarycoord(Nd,Ko,$o,Jo,u),r&&(h.uv=Li.getInterpolatedAttribute(r,a,c,l,u,new Oe)),s&&(h.uv1=Li.getInterpolatedAttribute(s,a,c,l,u,new Oe)),o&&(h.normal=Li.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};Li.getNormal(Ko,$o,Jo,d.normal),h.face=d,h.barycoord=u}return h}var ui=class i extends sn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(_,m,f,w,C,v,A,O,P,F,b){let M=v/P,E=A/F,X=v/2,z=A/2,Y=O/2,K=P+1,q=F+1,$=0,B=0,ce=new I;for(let pe=0;pe<q;pe++){let we=pe*E-z;for(let He=0;He<K;He++){let pt=He*M-X;ce[_]=pt*w,ce[m]=we*C,ce[f]=Y,l.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[f]=O>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(He/P),u.push(1-pe/F),$+=1}}for(let pe=0;pe<F;pe++)for(let we=0;we<P;we++){let He=d+we+K*pe,pt=d+we+K*(pe+1),ot=d+(we+1)+K*(pe+1),G=d+(we+1)+K*pe;c.push(He,pt,G),c.push(pt,ot,G),B+=6}a.addGroup(p,B,b),p+=B,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function qt(i){let e={};for(let t=0;t<i.length;t++){let n=fr(i[t]);for(let r in n)e[r]=n[r]}return e}function Rg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Yf={clone:fr,merge:qt},Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends en{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=Rg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ys=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new I,Ud=new Oe,kd=new Oe,wt=class extends Ys{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Ud,kd),t.subVectors(kd,Ud)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kr=-90,Br=1,_a=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wt(kr,Br,e,t);r.layers=this.layers,this.add(r);let s=new wt(kr,Br,e,t);s.layers=this.layers,this.add(s);let o=new wt(kr,Br,e,t);o.layers=this.layers,this.add(o);let a=new wt(kr,Br,e,t);a.layers=this.layers,this.add(a);let c=new wt(kr,Br,e,t);c.layers=this.layers,this.add(c);let l=new wt(kr,Br,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qs=class extends yn{constructor(e=[],t=hr,n,r,s,o,a,c,l,h){super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xa=class extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ui(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:_i});s.uniforms.tEquirect.value=t;let o=new Mt(r,s),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Jt),new _a(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},gn=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lg={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var sr=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fa,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$t=new I,Zr=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Bd=new I,Vd=new Qe,zd=new Qe,Fg=new I,Hd=new Ve,na=new I,wl=new rn,Gd=new Ve,El=new li,Zs=class extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Il,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingBox.expandByPoint(na)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingSphere.expandByPoint(na)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wl.copy(this.boundingSphere),wl.applyMatrix4(r),e.ray.intersectsSphere(wl)!==!1&&(Gd.copy(r).invert(),El.copy(e.ray).applyMatrix4(Gd),!(this.boundingBox!==null&&El.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,El)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===If?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Vd.fromBufferAttribute(r.attributes.skinIndex,e),zd.fromBufferAttribute(r.attributes.skinWeight,e),Bd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=zd.getComponent(s);if(o!==0){let a=Vd.getComponent(s);Hd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Fg.copy(Bd).applyMatrix4(Hd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Kr=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ks=class extends yn{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Vt,h=Vt,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wd=new Ve,Ng=new Ve,$s=class i{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:Ng;Wd.multiplyMatrices(a,t[s]),Wd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ks(t,e,e,xn,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Kr),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Ui=class extends Rt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vr=new Ve,jd=new Ve,ia=[],Xd=new _n,Ug=new Ve,Fs=new Mt,Ns=new rn,Js=class extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Ug)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),Xd.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),Ns.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(Ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),e.ray.intersectsSphere(Ns)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Vr),jd.multiplyMatrices(n,Vr),Fs.matrixWorld=jd,Fs.raycast(e,ia);for(let o=0,a=ia.length;o<a;o++){let c=ia[o];c.instanceId=s,c.object=this,t.push(c)}ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ks(new Float32Array(r*this.count),r,this.count,ja,wn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Tl=new I,kg=new I,Bg=new ke,Sn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Tl.subVectors(n,t).cross(kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Tl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bg.getNormalMatrix(e),r=this.coplanarPoint(Tl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$i=new rn,Vg=new Oe(.5,.5),ra=new I,$r=class{constructor(e=new Sn,t=new Sn,n=new Sn,r=new Sn,s=new Sn,o=new Sn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],p=s[7],g=s[8],_=s[9],m=s[10],f=s[11],w=s[12],C=s[13],v=s[14],A=s[15];if(r[0].setComponents(l-o,p-h,f-g,A-w).normalize(),r[1].setComponents(l+o,p+h,f+g,A+w).normalize(),r[2].setComponents(l+a,p+u,f+_,A+C).normalize(),r[3].setComponents(l-a,p-u,f-_,A-C).normalize(),n)r[4].setComponents(c,d,m,v).normalize(),r[5].setComponents(l-c,p-d,f-m,A-v).normalize();else if(r[4].setComponents(l-c,p-d,f-m,A-v).normalize(),t===Ln)r[5].setComponents(l+c,p+d,f+m,A+v).normalize();else if(t===Hs)r[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);let t=Vg.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ra.x=r.normal.x>0?e.max.x:e.min.x,ra.y=r.normal.y>0?e.max.y:e.min.y,ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jr=class extends en{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ya=new I,va=new I,Yd=new Ve,Us=new li,sa=new rn,Al=new I,qd=new I,or=class extends It{constructor(e=new sn,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ya.fromBufferAttribute(t,r-1),va.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ya.distanceTo(va);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),sa.radius+=s,e.ray.intersectsSphere(sa)===!1)return;Yd.copy(r).invert(),Us.copy(e.ray).applyMatrix4(Yd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let f=h.getX(_),w=h.getX(_+1),C=oa(this,e,Us,c,f,w,_);C&&t.push(C)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=oa(this,e,Us,c,_,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){let f=oa(this,e,Us,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=oa(this,e,Us,c,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function oa(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(ya.fromBufferAttribute(a,r),va.fromBufferAttribute(a,s),t.distanceSqToSegment(ya,va,Al,qd)>n)return;Al.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Al);if(!(l<e.near||l>e.far))return{distance:l,point:qd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Zd=new I,Kd=new I,Qs=class extends or{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Zd.fromBufferAttribute(t,r),Kd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Zd.distanceTo(Kd);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},eo=class extends or{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Qr=class extends en{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$d=new Ve,kl=new li,aa=new rn,ca=new I,to=class extends It{constructor(e=new sn,t=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),aa.radius+=s,e.ray.intersectsSphere(aa)===!1)return;$d.copy(r).invert(),kl.copy(e.ray).applyMatrix4($d);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){let m=l.getX(g);ca.fromBufferAttribute(u,m),Jd(ca,m,c,r,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)ca.fromBufferAttribute(u,g),Jd(ca,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Jd(i,e,t,n,r,s,o){let a=kl.distanceSqToPoint(i);if(a<t){let c=new I;kl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var no=class extends yn{constructor(e,t,n=zi,r,s,o,a=Vt,c=Vt,l,h=Wr,u=1){if(h!==Wr&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var ar=class i extends sn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let w=f*d-o;for(let C=0;C<l;C++){let v=C*u-s;g.push(v,-w,0),_.push(0,0,1),m.push(C/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){let C=w+l*f,v=w+l*(f+1),A=w+1+l*(f+1),O=w+1+l*f;p.push(C,v,O),p.push(v,A,O)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var io=class i extends sn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let w=[],C=f/n,v=0;f===0&&o===0?v=.5/t:f===n&&c===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){let O=A/t;u.x=-e*Math.cos(r+O*s)*Math.sin(o+C*a),u.y=e*Math.cos(o+C*a),u.z=e*Math.sin(r+O*s)*Math.sin(o+C*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(O+v,1-C),w.push(l++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){let C=h[f][w+1],v=h[f][w],A=h[f+1][w],O=h[f+1][w+1];(f!==0||o>0)&&p.push(C,v,O),(f!==n-1||c<Math.PI)&&p.push(v,A,O)}this.setIndex(p),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bn=class extends en{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},on=class extends Bn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ro=class extends en{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ma=class extends en{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ba=class extends en{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function la(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hg(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Qd(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r}function qf(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}var di=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sa=class extends di{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fl:s=e,a=2*t-n;break;case Nl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fl:o=e,c=2*n-t;break;case Nl:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,w=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,C=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let A=0;A!==a;++A)s[A]=f*o[h+A]+w*o[l+A]+C*o[c+A]+v*o[u+A];return s}},Ca=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},wa=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&zg(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ha,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=nr;var fi=class extends an{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=tr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends an{constructor(e,t,n,r){super(e,t,n,r)}};so.prototype.ValueTypeName="color";var qn=class extends an{constructor(e,t,n,r){super(e,t,n,r)}};qn.prototype.ValueTypeName="number";var Ea=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)Qt.slerpFlat(s,0,o,l-a,o,l,c);return s}},Zn=class extends an{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}};Zn.prototype.ValueTypeName="quaternion";Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends an{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=tr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Kn=class extends an{constructor(e,t,n,r){super(e,t,n,r)}};Kn.prototype.ValueTypeName="vector";var oo=class{constructor(e="",t=-1,n=[],r=Df){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Wg(n[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(an.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let h=Hg(c);c=Qd(c,1,h),l=Qd(l,1,h),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new qn(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=r[u];d||(r[u]=d=[]),d.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,p,g,_){if(p.length!==0){let m=[],f=[];qf(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(let _ in p){let m=[],f=[];for(let w=0;w!==d[g].morphTargets.length;++w){let C=d[g];m.push(C.time),f.push(C.morphTarget===_?1:0)}r.push(new qn(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{let p=".bones["+t[u].name+"]";n(Kn,p+".position",d,"pos",r),n(Zn,p+".quaternion",d,"rot",r),n(Kn,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Gg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qn;case"vector":case"vector2":case"vector3":case"vector4":return Kn;case"color":return so;case"quaternion":return Zn;case"bool":case"boolean":return fi;case"string":return pi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Wg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Gg(i.type);if(i.times===void 0){let t=[],n=[];qf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var jn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ta=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Zf=new Ta,pr=(()=>{class i{constructor(t){this.manager=t!==void 0?t:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let r=this;return new Promise(function(s,o){r.load(t,s,n,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}return i.DEFAULT_MATERIAL_NAME="__DEFAULT",i})(),ai={},Bl=class extends Error{constructor(e,t){super(e),this.response=t}},es=class extends pr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=jn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:r});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ai[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,_=0,m=new ReadableStream({start(f){w();function w(){u.read().then(({done:C,value:v})=>{if(C)f.close();else{_+=v.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let O=0,P=h.length;O<P;O++){let F=h[O];F.onProgress&&F.onProgress(A)}f.enqueue(v),w()}},C=>{f.error(C)})}}});return new Response(m)}else throw new Bl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{jn.add(`file:${e}`,l);let h=ai[e];delete ai[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=ai[e];if(h===void 0)throw this.manager.itemError(e),l;delete ai[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zr=new WeakMap,Aa=class extends pr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=jn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=zr.get(o);u===void 0&&(u=[],zr.set(o,u)),u.push({onLoad:t,onError:r})}return o}let a=jr("img");function c(){h(),t&&t(this);let u=zr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}zr.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),jn.remove(`image:${e}`);let d=zr.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(u)}zr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),jn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var ao=class extends pr{constructor(e){super(e)}load(e,t,n,r){let s=new yn,o=new Aa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},ki=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},co=class extends ki{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pl=new Ve,ef=new I,tf=new I,lo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(ef),tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tf),t.updateMatrixWorld(),Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vl=class extends lo{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ir*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},cr=class extends ki{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Vl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},nf=new Ve,ks=new I,Ol=new I,zl=class extends lo{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(ks),Ol.copy(n.position),Ol.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ol),n.updateMatrixWorld(),r.makeTranslation(-ks.x,-ks.y,-ks.z),nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf,n.coordinateSystem,n.reversedDepth)}},mi=class extends ki{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new zl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},lr=class extends Ys{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hl=class extends lo{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$n=class extends ki{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Hl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ho=class extends ki{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var gi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Rl=new WeakMap,uo=class extends pr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=jn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(Rl.has(o)===!0)r&&r(Rl.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return jn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Rl.set(c,l),jn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});jn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Pa=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ch="\\[\\]\\.:\\/",jg=new RegExp("["+ch+"]","g"),lh="[^"+ch+"]",Xg="[^"+ch.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",lh),qg=/(WCOD+)?/.source.replace("WCOD",Xg),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),$g=new RegExp("^"+Yg+qg+Zg+Kg+"$"),Jg=["material","materials","bones","map"],Gl=class{constructor(e,t,n){let r=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(t){let n=$g.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);Jg.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===n||c.uuid===n)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=Gl,i})();_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sb=new Float32Array(1);var ts=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var fo=class extends Xn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function hh(i,e,t,n){let r=Qg(n);switch(t){case Jl:return i*e;case ja:return i*e/r.components*r.byteLength;case Xa:return i*e/r.components*r.byteLength;case eh:return i*e*2/r.components*r.byteLength;case Ya:return i*e*2/r.components*r.byteLength;case Ql:return i*e*3/r.components*r.byteLength;case xn:return i*e*4/r.components*r.byteLength;case qa:return i*e*4/r.components*r.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Ja:return Math.max(i,16)*Math.max(e,8)/4;case Za:case $a:return Math.max(i,8)*Math.max(e,8)/2;case Qa:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yo:case gc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case th:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qg(i){switch(i){case zn:case Zl:return{byteLength:1,components:1};case ss:case Kl:case os:return{byteLength:2,components:1};case Ga:case Wa:return{byteLength:2,components:4};case zi:case Ha:case wn:return{byteLength:4,components:1};case $l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oa);function yp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function e_(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var t_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,i_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,h_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,C_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R_="gl_FragColor = linearToOutputTexel( gl_FragColor );",I_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Y_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ax=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,px=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ix=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:t_,alphahash_pars_fragment:n_,alphamap_fragment:i_,alphamap_pars_fragment:r_,alphatest_fragment:s_,alphatest_pars_fragment:o_,aomap_fragment:a_,aomap_pars_fragment:c_,batching_pars_vertex:l_,batching_vertex:h_,begin_vertex:u_,beginnormal_vertex:d_,bsdfs:f_,iridescence_fragment:p_,bumpmap_pars_fragment:m_,clipping_planes_fragment:g_,clipping_planes_pars_fragment:__,clipping_planes_pars_vertex:x_,clipping_planes_vertex:y_,color_fragment:v_,color_pars_fragment:M_,color_pars_vertex:b_,color_vertex:S_,common:C_,cube_uv_reflection_fragment:w_,defaultnormal_vertex:E_,displacementmap_pars_vertex:T_,displacementmap_vertex:A_,emissivemap_fragment:P_,emissivemap_pars_fragment:O_,colorspace_fragment:R_,colorspace_pars_fragment:I_,envmap_fragment:D_,envmap_common_pars_fragment:L_,envmap_pars_fragment:F_,envmap_pars_vertex:N_,envmap_physical_pars_fragment:Y_,envmap_vertex:U_,fog_vertex:k_,fog_pars_vertex:B_,fog_fragment:V_,fog_pars_fragment:z_,gradientmap_pars_fragment:H_,lightmap_pars_fragment:G_,lights_lambert_fragment:W_,lights_lambert_pars_fragment:j_,lights_pars_begin:X_,lights_toon_fragment:q_,lights_toon_pars_fragment:Z_,lights_phong_fragment:K_,lights_phong_pars_fragment:$_,lights_physical_fragment:J_,lights_physical_pars_fragment:Q_,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:o0,map_fragment:a0,map_pars_fragment:c0,map_particle_fragment:l0,map_particle_pars_fragment:h0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:d0,morphinstance_vertex:f0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:_0,normal_fragment_begin:x0,normal_fragment_maps:y0,normal_pars_fragment:v0,normal_pars_vertex:M0,normal_vertex:b0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:E0,iridescence_pars_fragment:T0,opaque_fragment:A0,packing:P0,premultiplied_alpha_fragment:O0,project_vertex:R0,dithering_fragment:I0,dithering_pars_fragment:D0,roughnessmap_fragment:L0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:U0,shadowmap_vertex:k0,shadowmask_pars_fragment:B0,skinbase_vertex:V0,skinning_pars_vertex:z0,skinning_vertex:H0,skinnormal_vertex:G0,specularmap_fragment:W0,specularmap_pars_fragment:j0,tonemapping_fragment:X0,tonemapping_pars_fragment:Y0,transmission_fragment:q0,transmission_pars_fragment:Z0,uv_pars_fragment:K0,uv_pars_vertex:$0,uv_vertex:J0,worldpos_vertex:Q0,background_vert:ex,background_frag:tx,backgroundCube_vert:nx,backgroundCube_frag:ix,cube_vert:rx,cube_frag:sx,depth_vert:ox,depth_frag:ax,distanceRGBA_vert:cx,distanceRGBA_frag:lx,equirect_vert:hx,equirect_frag:ux,linedashed_vert:dx,linedashed_frag:fx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:gx,meshlambert_frag:_x,meshmatcap_vert:xx,meshmatcap_frag:yx,meshnormal_vert:vx,meshnormal_frag:Mx,meshphong_vert:bx,meshphong_frag:Sx,meshphysical_vert:Cx,meshphysical_frag:wx,meshtoon_vert:Ex,meshtoon_frag:Tx,points_vert:Ax,points_frag:Px,shadow_vert:Ox,shadow_frag:Rx,sprite_vert:Ix,sprite_frag:Dx},ae={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Qn={basic:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:qt([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:qt([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:qt([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:qt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:qt([ae.lights,ae.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Qn.physical={uniforms:qt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var bc={r:0,b:0,g:0},mr=new hi,Lx=new Ve;function Fx(i,e,t,n,r,s,o){let a=new Pe(0),c=s===!0?0:1,l,h,u=null,d=0,p=null;function g(C){let v=C.isScene===!0?C.background:null;return v&&v.isTexture&&(v=(C.backgroundBlurriness>0?t:e).get(v)),v}function _(C){let v=!1,A=g(C);A===null?f(a,c):A&&A.isColor&&(f(A,1),v=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,v){let A=g(v);A&&(A.isCubeTexture||A.mapping===po)?(h===void 0&&(h=new Mt(new ui(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:fr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),mr.copy(v.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(mr)),h.material.toneMapped=Ze.getTransfer(A.colorSpace)!==it,(u!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Mt(new ar(2,2),new kn({name:"BackgroundMaterial",uniforms:fr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(A.colorSpace)!==it,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function f(C,v){C.getRGB(bc,ah(i)),n.buffers.color.setClear(bc.r,bc.g,bc.b,v,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,v=1){a.set(C),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,f(a,c)},render:_,addToRenderList:m,dispose:w}}function Nx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(M,E,X,z,Y){let K=!1,q=u(z,X,E);s!==q&&(s=q,l(s.object)),K=p(M,z,X,Y),K&&g(M,z,X,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(M,E,X,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,E,X){let z=X.wireframe===!0,Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let K=Y[E.id];K===void 0&&(K={},Y[E.id]=K);let q=K[z];return q===void 0&&(q=d(c()),K[z]=q),q}function d(M){let E=[],X=[],z=[];for(let Y=0;Y<t;Y++)E[Y]=0,X[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:X,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,E,X,z){let Y=s.attributes,K=E.attributes,q=0,$=X.getAttributes();for(let B in $)if($[B].location>=0){let pe=Y[B],we=K[B];if(we===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),pe===void 0||pe.attribute!==we||we&&pe.data!==we.data)return!0;q++}return s.attributesNum!==q||s.index!==z}function g(M,E,X,z){let Y={},K=E.attributes,q=0,$=X.getAttributes();for(let B in $)if($[B].location>=0){let pe=K[B];pe===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));let we={};we.attribute=pe,pe&&pe.data&&(we.data=pe.data),Y[B]=we,q++}s.attributes=Y,s.attributesNum=q,s.index=z}function _(){let M=s.newAttributes;for(let E=0,X=M.length;E<X;E++)M[E]=0}function m(M){f(M,0)}function f(M,E){let X=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;X[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),Y[M]!==E&&(i.vertexAttribDivisor(M,E),Y[M]=E)}function w(){let M=s.newAttributes,E=s.enabledAttributes;for(let X=0,z=E.length;X<z;X++)E[X]!==M[X]&&(i.disableVertexAttribArray(X),E[X]=0)}function C(M,E,X,z,Y,K,q){q===!0?i.vertexAttribIPointer(M,E,X,Y,K):i.vertexAttribPointer(M,E,X,z,Y,K)}function v(M,E,X,z){_();let Y=z.attributes,K=X.getAttributes(),q=E.defaultAttributeValues;for(let $ in K){let B=K[$];if(B.location>=0){let ce=Y[$];if(ce===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){let pe=ce.normalized,we=ce.itemSize,He=e.get(ce);if(He===void 0)continue;let pt=He.buffer,ot=He.type,G=He.bytesPerElement,le=ot===i.INT||ot===i.UNSIGNED_INT||ce.gpuType===Ha;if(ce.isInterleavedBufferAttribute){let re=ce.data,Re=re.stride,Ie=ce.offset;if(re.isInstancedInterleavedBuffer){for(let Ne=0;Ne<B.locationSize;Ne++)f(B.location+Ne,re.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ne=0;Ne<B.locationSize;Ne++)m(B.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Ne=0;Ne<B.locationSize;Ne++)C(B.location+Ne,we/B.locationSize,ot,pe,Re*G,(Ie+we/B.locationSize*Ne)*G,le)}else{if(ce.isInstancedBufferAttribute){for(let re=0;re<B.locationSize;re++)f(B.location+re,ce.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let re=0;re<B.locationSize;re++)m(B.location+re);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let re=0;re<B.locationSize;re++)C(B.location+re,we/B.locationSize,ot,pe,we*G,we/B.locationSize*re*G,le)}}else if(q!==void 0){let pe=q[$];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(B.location,pe);break;case 3:i.vertexAttrib3fv(B.location,pe);break;case 4:i.vertexAttrib4fv(B.location,pe);break;default:i.vertexAttrib1fv(B.location,pe)}}}}w()}function A(){F();for(let M in n){let E=n[M];for(let X in E){let z=E[X];for(let Y in z)h(z[Y].object),delete z[Y];delete E[X]}delete n[M]}}function O(M){if(n[M.id]===void 0)return;let E=n[M.id];for(let X in E){let z=E[X];for(let Y in z)h(z[Y].object),delete z[Y];delete E[X]}delete n[M.id]}function P(M){for(let E in n){let X=n[E];if(X[M.id]===void 0)continue;let z=X[M.id];for(let Y in z)h(z[Y].object),delete z[Y];delete X[M.id]}}function F(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:O,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Ux(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function kx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==xn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let F=P===os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==zn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==wn&&!F)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:v,vertexTextures:A,maxSamples:O}}function Bx(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Sn,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let w=s?0:n,C=w*4,v=f.clippingState||null;c.value=v,v=h(g,d,C,p);for(let A=0;A!==C;++A)v[A]=t[A];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let f=p+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,v=p;C!==_;++C,v+=4)o.copy(u[C]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Vx(i){let e=new WeakMap;function t(o,a){return a===Ba?o.mapping=hr:a===Va&&(o.mapping=ur),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ba||a===Va)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new xa(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var us=4,Kf=[.125,.215,.35,.446,.526,.582],xr=20,uh=new lr,$f=new Pe,dh=null,fh=0,ph=0,mh=!1,_r=(1+Math.sqrt(5))/2,hs=1/_r,Jf=[new I(-_r,hs,0),new I(_r,hs,0),new I(-hs,0,_r),new I(hs,0,_r),new I(0,_r,-hs),new I(0,_r,hs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],zx=new I,wc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=zx}=s;dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,fh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,Sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:os,format:xn,colorSpace:zt,depthBuffer:!1},r=Qf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hx(s)),this._blurMaterial=Gx(s,e,t)}return r}_compileMaterial(e){let t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,uh)}_sceneToCubeUV(e,t,n,r,s){let c=new wt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor($f),u.toneMapping=xi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let _=new Un({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new Mt(new ui,_),f=!1,w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,f=!0):(_.color.copy($f),f=!0);for(let C=0;C<6;C++){let v=C%3;v===0?(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[C],s.y,s.z)):v===1?(c.up.set(0,0,l[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[C],s.z)):(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[C]));let A=this._cubeSize;Sc(r,v*A,C>2?A:0,A,A),u.setRenderTarget(r),f&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===hr||e.mapping===ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ep());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Sc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,uh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jf[(r-s-1)%Jf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Mt(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xr-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);let f=[],w=0;for(let P=0;P<xr;++P){let F=P/_,b=Math.exp(-F*F/2);f.push(b),P===0?w+=b:P<m&&(w+=2*b)}for(let P=0;P<f.length;P++)f[P]=f[P]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:C}=this;d.dTheta.value=g,d.mipInt.value=C-n;let v=this._sizeLods[r],A=3*v*(r>C-us?r-C+us:0),O=4*(this._cubeSize-v);Sc(t,A,O,3*v,2*v),c.setRenderTarget(t),c.render(u,uh)}};function Hx(i){let e=[],t=[],n=[],r=i,s=i-us+1+Kf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-us?c=Kf[o-i+us-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*p),C=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let O=0;O<p;O++){let P=O%3*2/3-1,F=O>2?0:-1,b=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];w.set(b,_*g*O),C.set(d,m*g*O);let M=[O,O,O,O,O,O];v.set(M,f*g*O)}let A=new sn;A.setAttribute("position",new Rt(w,_)),A.setAttribute("uv",new Rt(C,m)),A.setAttribute("faceIndex",new Rt(v,f)),e.push(A),r>us&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qf(i,e,t){let n=new Yn(i,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Gx(i,e,t){let n=new Float32Array(xr),r=new I(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function ep(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function tp(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function wh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ba||c===Va,h=c===hr||c===ur;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new wc(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new wc(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Xx(i,e,t,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let w=p.array;_=p.version;for(let C=0,v=w.length;C<v;C+=3){let A=w[C+0],O=w[C+1],P=w[C+2];d.push(A,O,O,P,P,A)}}else if(g!==void 0){let w=g.array;_=g.version;for(let C=0,v=w.length/3-1;C<v;C+=3){let A=C+0,O=C+1,P=C+2;d.push(A,O,O,P,P,A)}}else return;let m=new(oh(d)?Xs:js)(d,1);m.version=_;let f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Yx(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*_[w];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Zx(i,e,t){let n=new WeakMap,r=new Qe;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,O=1;A>e.maxTextureSize&&(O=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let P=new Float32Array(A*O*4*u),F=new Gs(P,A,O,u);F.type=wn,F.needsUpdate=!0;let b=v*4;for(let E=0;E<u;E++){let X=f[E],z=w[E],Y=C[E],K=A*O*4*E;for(let q=0;q<X.count;q++){let $=q*b;g===!0&&(r.fromBufferAttribute(X,q),P[K+$+0]=r.x,P[K+$+1]=r.y,P[K+$+2]=r.z,P[K+$+3]=0),_===!0&&(r.fromBufferAttribute(z,q),P[K+$+4]=r.x,P[K+$+5]=r.y,P[K+$+6]=r.z,P[K+$+7]=0),m===!0&&(r.fromBufferAttribute(Y,q),P[K+$+8]=r.x,P[K+$+9]=r.y,P[K+$+10]=r.z,P[K+$+11]=Y.itemSize===4?r.w:1)}}d={count:u,texture:F,size:new Oe(A,O)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Kx(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var vp=new yn,np=new no(1,1),Mp=new Gs,bp=new ga,Sp=new qs,ip=[],rp=[],sp=new Float32Array(16),op=new Float32Array(9),ap=new Float32Array(4);function ps(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ip[r];if(s===void 0&&(s=new Float32Array(r),ip[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tc(i,e){let t=rp[e];t===void 0&&(t=new Int32Array(e),rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $x(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function ty(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;ap.set(n),i.uniformMatrix2fv(this.addr,!1,ap),Lt(t,n)}}function ny(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;op.set(n),i.uniformMatrix3fv(this.addr,!1,op),Lt(t,n)}}function iy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;sp.set(n),i.uniformMatrix4fv(this.addr,!1,sp),Lt(t,n)}}function ry(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function cy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function dy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(np.compareFunction=ih,s=np):s=vp,t.setTexture2D(e||s,r)}function fy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||bp,r)}function py(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Sp,r)}function my(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Mp,r)}function gy(i){switch(i){case 5126:return $x;case 35664:return Jx;case 35665:return Qx;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return ry;case 35667:case 35671:return sy;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return cy;case 36294:return ly;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}function _y(i,e){i.uniform1fv(this.addr,e)}function xy(i,e){let t=ps(e,this.size,2);i.uniform2fv(this.addr,t)}function yy(i,e){let t=ps(e,this.size,3);i.uniform3fv(this.addr,t)}function vy(i,e){let t=ps(e,this.size,4);i.uniform4fv(this.addr,t)}function My(i,e){let t=ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function by(i,e){let t=ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sy(i,e){let t=ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cy(i,e){i.uniform1iv(this.addr,e)}function wy(i,e){i.uniform2iv(this.addr,e)}function Ey(i,e){i.uniform3iv(this.addr,e)}function Ty(i,e){i.uniform4iv(this.addr,e)}function Ay(i,e){i.uniform1uiv(this.addr,e)}function Py(i,e){i.uniform2uiv(this.addr,e)}function Oy(i,e){i.uniform3uiv(this.addr,e)}function Ry(i,e){i.uniform4uiv(this.addr,e)}function Iy(i,e,t){let n=this.cache,r=e.length,s=Tc(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||vp,s[o])}function Dy(i,e,t){let n=this.cache,r=e.length,s=Tc(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||bp,s[o])}function Ly(i,e,t){let n=this.cache,r=e.length,s=Tc(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Sp,s[o])}function Fy(i,e,t){let n=this.cache,r=e.length,s=Tc(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mp,s[o])}function Ny(i){switch(i){case 5126:return _y;case 35664:return xy;case 35665:return yy;case 35666:return vy;case 35674:return My;case 35675:return by;case 35676:return Sy;case 5124:case 35670:return Cy;case 35667:case 35671:return wy;case 35668:case 35672:return Ey;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return Py;case 36295:return Oy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Fy}}var _h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gy(t.type)}},xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ny(t.type)}},yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function cp(i,e){i.seq.push(e),i.map[e.id]=e}function Uy(i,e,t){let n=i.name,r=n.length;for(gh.lastIndex=0;;){let s=gh.exec(n),o=gh.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){cp(t,l===void 0?new _h(a,i,e):new xh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new yh(a),cp(t,u)),t=u}}}var ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Uy(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function lp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ky=37297,By=0;function Vy(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var hp=new ke;function zy(i){Ze._getMatrix(hp,Ze.workingColorSpace,i);let e=`mat3( ${hp.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case zs:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function up(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Vy(i.getShaderSource(e),a)}else return s}function Hy(i,e){let t=zy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gy(i,e){let t;switch(e){case Ef:t="Linear";break;case Tf:t="Reinhard";break;case Af:t="Cineon";break;case is:t="ACESFilmic";break;case Of:t="AgX";break;case Rf:t="Neutral";break;case Pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cc=new I;function Wy(){Ze.getLuminanceCoefficients(Cc);let i=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function Xy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function bo(i){return i!==""}function dp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(qy,Ky)}var Zy=new Map;function Ky(i,e){let t=ze[e];if(t===void 0){let n=Zy.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vh(t)}var $y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(i){return i.replace($y,Jy)}function Jy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ns?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function ev(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case ur:e="ENVMAP_TYPE_CUBE";break;case po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ur:e="ENVMAP_MODE_REFRACTION";break}return e}function nv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ka:e="ENVMAP_BLENDING_MULTIPLY";break;case Cf:e="ENVMAP_BLENDING_MIX";break;case wf:e="ENVMAP_BLENDING_ADD";break}return e}function iv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rv(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Qy(t),l=ev(t),h=tv(t),u=nv(t),d=iv(t),p=jy(t),g=Xy(s),_=r.createProgram(),m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bo).join(`
`),f.length>0&&(f+=`
`)):(m=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),f=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?ze.tonemapping_pars_fragment:"",t.toneMapping!==xi?Gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Hy("linearToOutputTexel",t.outputColorSpace),Wy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),o=vh(o),o=dp(o,t),o=fp(o,t),a=vh(a),a=dp(a,t),a=fp(a,t),o=pp(o),a=pp(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let C=w+m+o,v=w+f+a,A=lp(r,r.VERTEX_SHADER,C),O=lp(r,r.FRAGMENT_SHADER,v);r.attachShader(_,A),r.attachShader(_,O),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(E){if(i.debug.checkShaderErrors){let X=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(A)||"",Y=r.getShaderInfoLog(O)||"",K=X.trim(),q=z.trim(),$=Y.trim(),B=!0,ce=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,O);else{let pe=up(r,A,"vertex"),we=up(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+K+`
`+pe+`
`+we)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||$==="")&&(ce=!1);ce&&(E.diagnostics={runnable:B,programLog:K,vertexShader:{log:q,prefix:m},fragmentShader:{log:$,prefix:f}})}r.deleteShader(A),r.deleteShader(O),F=new ds(r,_),b=Yy(r,_)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,ky)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=By++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=O,this}var sv=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bh(e),t.set(e,n)),n}},bh=class{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}};function ov(i,e,t,n,r,s,o){let a=new Ws,c=new Mh,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,E,X,z){let Y=X.fog,K=z.geometry,q=b.isMeshStandardMaterial?X.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),B=$&&$.mapping===po?$.image.height:null,ce=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let pe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,we=pe!==void 0?pe.length:0,He=0;K.morphAttributes.position!==void 0&&(He=1),K.morphAttributes.normal!==void 0&&(He=2),K.morphAttributes.color!==void 0&&(He=3);let pt,ot,G,le;if(ce){let tt=Qn[ce];pt=tt.vertexShader,ot=tt.fragmentShader}else pt=b.vertexShader,ot=b.fragmentShader,c.update(b),G=c.getVertexShaderID(b),le=c.getFragmentShaderID(b);let re=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,Ne=z.isBatchedMesh===!0,Et=!!b.map,Ke=!!b.matcap,T=!!$,lt=!!b.aoMap,Te=!!b.lightMap,et=!!b.bumpMap,Ce=!!b.normalMap,mt=!!b.displacementMap,_e=!!b.emissiveMap,Ge=!!b.metalnessMap,Nt=!!b.roughnessMap,Tt=b.anisotropy>0,S=b.clearcoat>0,x=b.dispersion>0,N=b.iridescence>0,H=b.sheen>0,J=b.transmission>0,V=Tt&&!!b.anisotropyMap,Se=S&&!!b.clearcoatMap,ie=S&&!!b.clearcoatNormalMap,ve=S&&!!b.clearcoatRoughnessMap,Me=N&&!!b.iridescenceMap,te=N&&!!b.iridescenceThicknessMap,de=H&&!!b.sheenColorMap,Le=H&&!!b.sheenRoughnessMap,be=!!b.specularMap,he=!!b.specularColorMap,Be=!!b.specularIntensityMap,R=J&&!!b.transmissionMap,ne=J&&!!b.thicknessMap,se=!!b.gradientMap,ge=!!b.alphaMap,Q=b.alphaTest>0,Z=!!b.alphaHash,ye=!!b.extensions,Ue=xi;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let ht={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:pt,fragmentShader:ot,defines:b.defines,customVertexShaderID:G,customFragmentShaderID:le,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:zt,alphaToCoverage:!!b.alphaToCoverage,map:Et,matcap:Ke,envMap:T,envMapMode:T&&$.mapping,envMapCubeUVHeight:B,aoMap:lt,lightMap:Te,bumpMap:et,normalMap:Ce,displacementMap:d&&mt,emissiveMap:_e,normalMapObjectSpace:Ce&&b.normalMapType===Nf,normalMapTangentSpace:Ce&&b.normalMapType===Mc,metalnessMap:Ge,roughnessMap:Nt,anisotropy:Tt,anisotropyMap:V,clearcoat:S,clearcoatMap:Se,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:x,iridescence:N,iridescenceMap:Me,iridescenceThicknessMap:te,sheen:H,sheenColorMap:de,sheenRoughnessMap:Le,specularMap:be,specularColorMap:he,specularIntensityMap:Be,transmission:J,transmissionMap:R,thicknessMap:ne,gradientMap:se,opaque:b.transparent===!1&&b.blending===Qi&&b.alphaToCoverage===!1,alphaMap:ge,alphaTest:Q,alphaHash:Z,combine:b.combine,mapUv:Et&&_(b.map.channel),aoMapUv:lt&&_(b.aoMap.channel),lightMapUv:Te&&_(b.lightMap.channel),bumpMapUv:et&&_(b.bumpMap.channel),normalMapUv:Ce&&_(b.normalMap.channel),displacementMapUv:mt&&_(b.displacementMap.channel),emissiveMapUv:_e&&_(b.emissiveMap.channel),metalnessMapUv:Ge&&_(b.metalnessMap.channel),roughnessMapUv:Nt&&_(b.roughnessMap.channel),anisotropyMapUv:V&&_(b.anisotropyMap.channel),clearcoatMapUv:Se&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(b.sheenRoughnessMap.channel),specularMapUv:be&&_(b.specularMap.channel),specularColorMapUv:he&&_(b.specularColorMap.channel),specularIntensityMapUv:Be&&_(b.specularIntensityMap.channel),transmissionMapUv:R&&_(b.transmissionMap.channel),thicknessMapUv:ne&&_(b.thicknessMap.channel),alphaMapUv:ge&&_(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ce||Tt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(Et||ge),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Re,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Et&&b.map.isVideoTexture===!0&&Ze.getTransfer(b.map.colorSpace)===it,decodeVideoTextureEmissive:_e&&b.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(b.emissiveMap.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Cn,flipSided:b.side===tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ye&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&b.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function f(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let E in b.defines)M.push(E),M.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(w(M,b),C(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function w(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function C(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let M=g[b.type],E;if(M){let X=Qn[M];E=Yf.clone(X.uniforms)}else E=b.uniforms;return E}function A(b,M){let E;for(let X=0,z=h.length;X<z;X++){let Y=h[X];if(Y.cacheKey===M){E=Y,++E.usedTimes;break}}return E===void 0&&(E=new rv(i,M,b,s),h.push(E)),E}function O(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function P(b){c.remove(b)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:O,releaseShaderCache:P,programs:h,dispose:F}}function av(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function cv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _p(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||cv),n.length>1&&n.sort(d||gp),r.length>1&&r.sort(d||gp)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function lv(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new _p,i.set(n,[o])):r>=s.length?(o=new _p,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Pe};break;case"SpotLight":t={position:new I,direction:new I,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function uv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var dv=0;function fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pv(i){let e=new hv,t=uv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let r=new I,s=new Ve,o=new Ve;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,w=0,C=0,v=0,A=0,O=0,P=0;l.sort(fv);for(let b=0,M=l.length;b<M;b++){let E=l[b],X=E.color,z=E.intensity,Y=E.distance,K=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=X.r*z,u+=X.g*z,d+=X.b*z;else if(E.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(E.sh.coefficients[q],z);P++}else if(E.isDirectionalLight){let q=e.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let $=E.shadow,B=t.get(E);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=E.shadow.matrix,w++}n.directional[p]=q,p++}else if(E.isSpotLight){let q=e.get(E);q.position.setFromMatrixPosition(E.matrixWorld),q.color.copy(X).multiplyScalar(z),q.distance=Y,q.coneCos=Math.cos(E.angle),q.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),q.decay=E.decay,n.spot[_]=q;let $=E.shadow;if(E.map&&(n.spotLightMap[A]=E.map,A++,$.updateMatrices(E),E.castShadow&&O++),n.spotLightMatrix[_]=$.matrix,E.castShadow){let B=t.get(E);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=K,v++}_++}else if(E.isRectAreaLight){let q=e.get(E);q.color.copy(X).multiplyScalar(z),q.halfWidth.set(E.width*.5,0,0),q.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=q,m++}else if(E.isPointLight){let q=e.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),q.distance=E.distance,q.decay=E.decay,E.castShadow){let $=E.shadow,B=t.get(E);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=E.shadow.matrix,C++}n.point[g]=q,g++}else if(E.isHemisphereLight){let q=e.get(E);q.skyColor.copy(E.color).multiplyScalar(z),q.groundColor.copy(E.groundColor).multiplyScalar(z),n.hemi[f]=q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==w||F.numPointShadows!==C||F.numSpotShadows!==v||F.numSpotMaps!==A||F.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=v+A-O,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=P,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=w,F.numPointShadows=C,F.numSpotShadows=v,F.numSpotMaps=A,F.numLightProbes=P,n.version=dv++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){let C=l[f];if(C.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(C.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(C.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(C.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(C.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(C.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(C.width*.5,0,0),v.halfHeight.set(0,C.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(C.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(C.matrixWorld),v.position.applyMatrix4(m),d++}else if(C.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(C.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function xp(i){let e=new pv(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function mv(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new xp(i),e.set(r,[a])):s>=o.length?(a=new xp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xv(i,e,t){let n=new $r,r=new Oe,s=new Oe,o=new Qe,a=new Ma({depthPacking:Ff}),c=new ba,l={},h=t.maxTextureSize,u={[Nn]:tn,[tn]:Nn,[Cn]:Cn},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:gv,fragmentShader:_v}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new sn;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Mt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let f=this.type;this.render=function(O,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||O.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),X=i.state;X.setBlending(_i),X.buffers.depth.getReversed()?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let z=f!==Jn&&this.type===Jn,Y=f===Jn&&this.type!==Jn;for(let K=0,q=O.length;K<q;K++){let $=O[K],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let ce=B.getFrameExtents();if(r.multiply(ce),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ce.x),r.x=s.x*ce.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ce.y),r.y=s.y*ce.y,B.mapSize.y=s.y)),B.map===null||z===!0||Y===!0){let we=this.type!==Jn?{minFilter:Vt,magFilter:Vt}:{};B.map!==null&&B.map.dispose(),B.map=new Yn(r.x,r.y,we),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let pe=B.getViewportCount();for(let we=0;we<pe;we++){let He=B.getViewport(we);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),X.viewport(o),B.updateMatrices($,we),n=B.getFrustum(),v(P,F,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===Jn&&w(B,F),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,E)};function w(O,P){let F=e.update(_);d.defines.VSM_SAMPLES!==O.blurSamples&&(d.defines.VSM_SAMPLES=O.blurSamples,p.defines.VSM_SAMPLES=O.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Yn(r.x,r.y)),d.uniforms.shadow_pass.value=O.map.texture,d.uniforms.resolution.value=O.mapSize,d.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(P,null,F,d,_,null),p.uniforms.shadow_pass.value=O.mapPass.texture,p.uniforms.resolution.value=O.mapSize,p.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(P,null,F,p,_,null)}function C(O,P,F,b){let M=null,E=F.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(E!==void 0)M=E;else if(M=F.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let X=M.uuid,z=P.uuid,Y=l[X];Y===void 0&&(Y={},l[X]=Y);let K=Y[z];K===void 0&&(K=M.clone(),Y[z]=K,P.addEventListener("dispose",A)),M=K}if(M.visible=P.visible,M.wireframe=P.wireframe,b===Jn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let X=i.properties.get(M);X.light=F}return M}function v(O,P,F,b,M){if(O.visible===!1)return;if(O.layers.test(P.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&M===Jn)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,O.matrixWorld);let z=e.update(O),Y=O.material;if(Array.isArray(Y)){let K=z.groups;for(let q=0,$=K.length;q<$;q++){let B=K[q],ce=Y[B.materialIndex];if(ce&&ce.visible){let pe=C(O,ce,b,M);O.onBeforeShadow(i,O,P,F,z,pe,B),i.renderBufferDirect(F,null,z,pe,O,B),O.onAfterShadow(i,O,P,F,z,pe,B)}}}else if(Y.visible){let K=C(O,Y,b,M);O.onBeforeShadow(i,O,P,F,z,K,null),i.renderBufferDirect(F,null,z,K,O,null),O.onAfterShadow(i,O,P,F,z,K,null)}}let X=O.children;for(let z=0,Y=X.length;z<Y;z++)v(X[z],P,F,b,M)}function A(O){O.target.removeEventListener("dispose",A);for(let F in l){let b=l[F],M=O.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var yv={[Ra]:Ia,[Da]:Na,[La]:Ua,[er]:Fa,[Ia]:Ra,[Na]:Da,[Ua]:La,[Fa]:er};function vv(i,e){function t(){let R=!1,ne=new Qe,se=null,ge=new Qe(0,0,0,0);return{setMask:function(Q){se!==Q&&!R&&(i.colorMask(Q,Q,Q,Q),se=Q)},setLocked:function(Q){R=Q},setClear:function(Q,Z,ye,Ue,ht){ht===!0&&(Q*=Ue,Z*=Ue,ye*=Ue),ne.set(Q,Z,ye,Ue),ge.equals(ne)===!1&&(i.clearColor(Q,Z,ye,Ue),ge.copy(ne))},reset:function(){R=!1,se=null,ge.set(-1,0,0,0)}}}function n(){let R=!1,ne=!1,se=null,ge=null,Q=null;return{setReversed:function(Z){if(ne!==Z){let ye=e.get("EXT_clip_control");Z?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ne=Z;let Ue=Q;Q=null,this.setClear(Ue)}},getReversed:function(){return ne},setTest:function(Z){Z?re(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Z){se!==Z&&!R&&(i.depthMask(Z),se=Z)},setFunc:function(Z){if(ne&&(Z=yv[Z]),ge!==Z){switch(Z){case Ra:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Da:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Na:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Z}},setLocked:function(Z){R=Z},setClear:function(Z){Q!==Z&&(ne&&(Z=1-Z),i.clearDepth(Z),Q=Z)},reset:function(){R=!1,se=null,ge=null,Q=null,ne=!1}}}function r(){let R=!1,ne=null,se=null,ge=null,Q=null,Z=null,ye=null,Ue=null,ht=null;return{setTest:function(tt){R||(tt?re(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(tt){ne!==tt&&!R&&(i.stencilMask(tt),ne=tt)},setFunc:function(tt,ei,Hn){(se!==tt||ge!==ei||Q!==Hn)&&(i.stencilFunc(tt,ei,Hn),se=tt,ge=ei,Q=Hn)},setOp:function(tt,ei,Hn){(Z!==tt||ye!==ei||Ue!==Hn)&&(i.stencilOp(tt,ei,Hn),Z=tt,ye=ei,Ue=Hn)},setLocked:function(tt){R=tt},setClear:function(tt){ht!==tt&&(i.clearStencil(tt),ht=tt)},reset:function(){R=!1,ne=null,se=null,ge=null,Q=null,Z=null,ye=null,Ue=null,ht=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,C=null,v=null,A=null,O=null,P=new Pe(0,0,0),F=0,b=!1,M=null,E=null,X=null,z=null,Y=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,$=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=$>=2);let ce=null,pe={},we=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),pt=new Qe().fromArray(we),ot=new Qe().fromArray(He);function G(R,ne,se,ge){let Q=new Uint8Array(4),Z=i.createTexture();i.bindTexture(R,Z),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<se;ye++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ne+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return Z}let le={};le[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(er),et(!1),Ce(Wl),re(i.CULL_FACE),lt(_i);function re(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Re(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Ie(R,ne){return u[R]!==ne?(i.bindFramebuffer(R,ne),u[R]=ne,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ne),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ne(R,ne){let se=p,ge=!1;if(R){se=d.get(ne),se===void 0&&(se=[],d.set(ne,se));let Q=R.textures;if(se.length!==Q.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ye=Q.length;Z<ye;Z++)se[Z]=i.COLOR_ATTACHMENT0+Z;se.length=Q.length,ge=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,ge=!0);ge&&i.drawBuffers(se)}function Et(R){return g!==R?(i.useProgram(R),g=R,!0):!1}let Ke={[Fi]:i.FUNC_ADD,[af]:i.FUNC_SUBTRACT,[cf]:i.FUNC_REVERSE_SUBTRACT};Ke[lf]=i.MIN,Ke[hf]=i.MAX;let T={[uf]:i.ZERO,[df]:i.ONE,[ff]:i.SRC_COLOR,[ua]:i.SRC_ALPHA,[yf]:i.SRC_ALPHA_SATURATE,[_f]:i.DST_COLOR,[mf]:i.DST_ALPHA,[pf]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[xf]:i.ONE_MINUS_DST_COLOR,[gf]:i.ONE_MINUS_DST_ALPHA,[vf]:i.CONSTANT_COLOR,[Mf]:i.ONE_MINUS_CONSTANT_COLOR,[bf]:i.CONSTANT_ALPHA,[Sf]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(R,ne,se,ge,Q,Z,ye,Ue,ht,tt){if(R===_i){_===!0&&(Re(i.BLEND),_=!1);return}if(_===!1&&(re(i.BLEND),_=!0),R!==of){if(R!==m||tt!==b){if((f!==Fi||v!==Fi)&&(i.blendEquation(i.FUNC_ADD),f=Fi,v=Fi),tt)switch(R){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xl:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,C=null,A=null,O=null,P.set(0,0,0),F=0,m=R,b=tt}return}Q=Q||ne,Z=Z||se,ye=ye||ge,(ne!==f||Q!==v)&&(i.blendEquationSeparate(Ke[ne],Ke[Q]),f=ne,v=Q),(se!==w||ge!==C||Z!==A||ye!==O)&&(i.blendFuncSeparate(T[se],T[ge],T[Z],T[ye]),w=se,C=ge,A=Z,O=ye),(Ue.equals(P)===!1||ht!==F)&&(i.blendColor(Ue.r,Ue.g,Ue.b,ht),P.copy(Ue),F=ht),m=R,b=!1}function Te(R,ne){R.side===Cn?Re(i.CULL_FACE):re(i.CULL_FACE);let se=R.side===tn;ne&&(se=!se),et(se),R.blending===Qi&&R.transparent===!1?lt(_i):lt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let ge=R.stencilWrite;a.setTest(ge),ge&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),_e(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(R){M!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),M=R)}function Ce(R){R!==rf?(re(i.CULL_FACE),R!==E&&(R===Wl?i.cullFace(i.BACK):R===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),E=R}function mt(R){R!==X&&(q&&i.lineWidth(R),X=R)}function _e(R,ne,se){R?(re(i.POLYGON_OFFSET_FILL),(z!==ne||Y!==se)&&(i.polygonOffset(ne,se),z=ne,Y=se)):Re(i.POLYGON_OFFSET_FILL)}function Ge(R){R?re(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function Nt(R){R===void 0&&(R=i.TEXTURE0+K-1),ce!==R&&(i.activeTexture(R),ce=R)}function Tt(R,ne,se){se===void 0&&(ce===null?se=i.TEXTURE0+K-1:se=ce);let ge=pe[se];ge===void 0&&(ge={type:void 0,texture:void 0},pe[se]=ge),(ge.type!==R||ge.texture!==ne)&&(ce!==se&&(i.activeTexture(se),ce=se),i.bindTexture(R,ne||le[R]),ge.type=R,ge.texture=ne)}function S(){let R=pe[ce];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{i.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{i.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{i.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{i.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{i.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(R){pt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),pt.copy(R))}function Le(R){ot.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ot.copy(R))}function be(R,ne){let se=l.get(ne);se===void 0&&(se=new WeakMap,l.set(ne,se));let ge=se.get(R);ge===void 0&&(ge=i.getUniformBlockIndex(ne,R.name),se.set(R,ge))}function he(R,ne){let ge=l.get(ne).get(R);c.get(ne)!==ge&&(i.uniformBlockBinding(ne,ge,R.__bindingPointIndex),c.set(ne,ge))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,pe={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,C=null,v=null,A=null,O=null,P=new Pe(0,0,0),F=0,b=!1,M=null,E=null,X=null,z=null,Y=null,pt.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Re,bindFramebuffer:Ie,drawBuffers:Ne,useProgram:Et,setBlending:lt,setMaterial:Te,setFlipSided:et,setCullFace:Ce,setLineWidth:mt,setPolygonOffset:_e,setScissorTest:Ge,activeTexture:Nt,bindTexture:Tt,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Me,texImage3D:te,updateUBOMapping:be,uniformBlockBinding:he,texStorage2D:ie,texStorage3D:ve,texSubImage2D:H,texSubImage3D:J,compressedTexSubImage2D:V,compressedTexSubImage3D:Se,scissor:de,viewport:Le,reset:Be}}function Mv(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return p?new OffscreenCanvas(S,x):jr("canvas")}function _(S,x,N){let H=1,J=Tt(S);if((J.width>N||J.height>N)&&(H=N/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let V=Math.floor(H*J.width),Se=Math.floor(H*J.height);u===void 0&&(u=g(V,Se));let ie=x?g(V,Se):u;return ie.width=V,ie.height=Se,ie.getContext("2d").drawImage(S,0,0,V,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+V+"x"+Se+")."),ie}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),S;return S}function m(S){return S.generateMipmaps}function f(S){i.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(S,x,N,H,J=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let V=x;if(x===i.RED&&(N===i.FLOAT&&(V=i.R32F),N===i.HALF_FLOAT&&(V=i.R16F),N===i.UNSIGNED_BYTE&&(V=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.R8UI),N===i.UNSIGNED_SHORT&&(V=i.R16UI),N===i.UNSIGNED_INT&&(V=i.R32UI),N===i.BYTE&&(V=i.R8I),N===i.SHORT&&(V=i.R16I),N===i.INT&&(V=i.R32I)),x===i.RG&&(N===i.FLOAT&&(V=i.RG32F),N===i.HALF_FLOAT&&(V=i.RG16F),N===i.UNSIGNED_BYTE&&(V=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RG8UI),N===i.UNSIGNED_SHORT&&(V=i.RG16UI),N===i.UNSIGNED_INT&&(V=i.RG32UI),N===i.BYTE&&(V=i.RG8I),N===i.SHORT&&(V=i.RG16I),N===i.INT&&(V=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGB8UI),N===i.UNSIGNED_SHORT&&(V=i.RGB16UI),N===i.UNSIGNED_INT&&(V=i.RGB32UI),N===i.BYTE&&(V=i.RGB8I),N===i.SHORT&&(V=i.RGB16I),N===i.INT&&(V=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),N===i.UNSIGNED_INT&&(V=i.RGBA32UI),N===i.BYTE&&(V=i.RGBA8I),N===i.SHORT&&(V=i.RGBA16I),N===i.INT&&(V=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),x===i.RGBA){let Se=J?zs:Ze.getTransfer(H);N===i.FLOAT&&(V=i.RGBA32F),N===i.HALF_FLOAT&&(V=i.RGBA16F),N===i.UNSIGNED_BYTE&&(V=Se===it?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function v(S,x){let N;return S?x===null||x===zi||x===as?N=i.DEPTH24_STENCIL8:x===wn?N=i.DEPTH32F_STENCIL8:x===ss&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zi||x===as?N=i.DEPTH_COMPONENT24:x===wn?N=i.DEPTH_COMPONENT32F:x===ss&&(N=i.DEPTH_COMPONENT16),N}function A(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Vt&&S.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function O(S){let x=S.target;x.removeEventListener("dispose",O),F(x),x.isVideoTexture&&h.delete(x)}function P(S){let x=S.target;x.removeEventListener("dispose",P),M(x)}function F(S){let x=n.get(S);if(x.__webglInit===void 0)return;let N=S.source,H=d.get(N);if(H){let J=H[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(S),Object.keys(H).length===0&&d.delete(N)}n.remove(S)}function b(S){let x=n.get(S);i.deleteTexture(x.__webglTexture);let N=S.source,H=d.get(N);delete H[x.__cacheKey],o.memory.textures--}function M(S){let x=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let J=0;J<x.__webglFramebuffer[H].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[H][J]);else i.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)i.deleteFramebuffer(x.__webglFramebuffer[H]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=S.textures;for(let H=0,J=N.length;H<J;H++){let V=n.get(N[H]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(N[H])}n.remove(S)}let E=0;function X(){E=0}function z(){let S=E;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),E+=1,S}function Y(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function K(S,x){let N=n.get(S);if(S.isVideoTexture&&Ge(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&N.__version!==S.version){let H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(N,S,x);return}}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function q(S,x){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){le(N,S,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function $(S,x){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){le(N,S,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function B(S,x){let N=n.get(S);if(S.version>0&&N.__version!==S.version){re(N,S,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let ce={[Ni]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Gr]:i.MIRRORED_REPEAT},pe={[Vt]:i.NEAREST,[za]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[rs]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},we={[Uf]:i.NEVER,[Gf]:i.ALWAYS,[kf]:i.LESS,[ih]:i.LEQUAL,[Bf]:i.EQUAL,[Hf]:i.GEQUAL,[Vf]:i.GREATER,[zf]:i.NOTEQUAL};function He(S,x){if(x.type===wn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Jt||x.magFilter===rs||x.magFilter===dr||x.magFilter===Vn||x.minFilter===Jt||x.minFilter===rs||x.minFilter===dr||x.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,ce[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ce[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ce[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,pe[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==dr&&x.minFilter!==Vn||x.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function pt(S,x){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",O));let H=x.source,J=d.get(H);J===void 0&&(J={},d.set(H,J));let V=Y(x);if(V!==S.__cacheKey){J[V]===void 0&&(J[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[V].usedTimes++;let Se=J[S.__cacheKey];Se!==void 0&&(J[S.__cacheKey].usedTimes--,Se.usedTimes===0&&b(x)),S.__cacheKey=V,S.__webglTexture=J[V].texture}return N}function ot(S,x,N){return Math.floor(Math.floor(S/N)/x)}function G(S,x,N,H){let V=S.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,N,H,x.data);else{V.sort((te,de)=>te.start-de.start);let Se=0;for(let te=1;te<V.length;te++){let de=V[Se],Le=V[te],be=de.start+de.count,he=ot(Le.start,x.width,4),Be=ot(de.start,x.width,4);Le.start<=be+1&&he===Be&&ot(Le.start+Le.count-1,x.width,4)===he?de.count=Math.max(de.count,Le.start+Le.count-de.start):(++Se,V[Se]=Le)}V.length=Se+1;let ie=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),Me=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let te=0,de=V.length;te<de;te++){let Le=V[te],be=Math.floor(Le.start/4),he=Math.ceil(Le.count/4),Be=be%x.width,R=Math.floor(be/x.width),ne=he,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Be,R,ne,se,N,H,x.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function le(S,x,N){let H=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=i.TEXTURE_3D);let J=pt(S,x),V=x.source;t.bindTexture(H,S.__webglTexture,i.TEXTURE0+N);let Se=n.get(V);if(V.version!==Se.__version||J===!0){t.activeTexture(i.TEXTURE0+N);let ie=Ze.getPrimaries(Ze.workingColorSpace),ve=x.colorSpace===yi?null:Ze.getPrimaries(x.colorSpace),Me=x.colorSpace===yi||ie===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let te=_(x.image,!1,r.maxTextureSize);te=Nt(x,te);let de=s.convert(x.format,x.colorSpace),Le=s.convert(x.type),be=C(x.internalFormat,de,Le,x.colorSpace,x.isVideoTexture);He(H,x);let he,Be=x.mipmaps,R=x.isVideoTexture!==!0,ne=Se.__version===void 0||J===!0,se=V.dataReady,ge=A(x,te);if(x.isDepthTexture)be=v(x.format===cs,x.type),ne&&(R?t.texStorage2D(i.TEXTURE_2D,1,be,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,be,te.width,te.height,0,de,Le,null));else if(x.isDataTexture)if(Be.length>0){R&&ne&&t.texStorage2D(i.TEXTURE_2D,ge,be,Be[0].width,Be[0].height);for(let Q=0,Z=Be.length;Q<Z;Q++)he=Be[Q],R?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,de,Le,he.data):t.texImage2D(i.TEXTURE_2D,Q,be,he.width,he.height,0,de,Le,he.data);x.generateMipmaps=!1}else R?(ne&&t.texStorage2D(i.TEXTURE_2D,ge,be,te.width,te.height),se&&G(x,te,de,Le)):t.texImage2D(i.TEXTURE_2D,0,be,te.width,te.height,0,de,Le,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){R&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,be,Be[0].width,Be[0].height,te.depth);for(let Q=0,Z=Be.length;Q<Z;Q++)if(he=Be[Q],x.format!==xn)if(de!==null)if(R){if(se)if(x.layerUpdates.size>0){let ye=hh(he.width,he.height,x.format,x.type);for(let Ue of x.layerUpdates){let ht=he.data.subarray(Ue*ye/he.data.BYTES_PER_ELEMENT,(Ue+1)*ye/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ue,he.width,he.height,1,de,ht)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,te.depth,de,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,be,he.width,he.height,te.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,te.depth,de,Le,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,be,he.width,he.height,te.depth,0,de,Le,he.data)}else{R&&ne&&t.texStorage2D(i.TEXTURE_2D,ge,be,Be[0].width,Be[0].height);for(let Q=0,Z=Be.length;Q<Z;Q++)he=Be[Q],x.format!==xn?de!==null?R?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,de,he.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,de,Le,he.data):t.texImage2D(i.TEXTURE_2D,Q,be,he.width,he.height,0,de,Le,he.data)}else if(x.isDataArrayTexture)if(R){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,be,te.width,te.height,te.depth),se)if(x.layerUpdates.size>0){let Q=hh(te.width,te.height,x.format,x.type);for(let Z of x.layerUpdates){let ye=te.data.subarray(Z*Q/te.data.BYTES_PER_ELEMENT,(Z+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,de,Le,ye)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Le,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,te.width,te.height,te.depth,0,de,Le,te.data);else if(x.isData3DTexture)R?(ne&&t.texStorage3D(i.TEXTURE_3D,ge,be,te.width,te.height,te.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Le,te.data)):t.texImage3D(i.TEXTURE_3D,0,be,te.width,te.height,te.depth,0,de,Le,te.data);else if(x.isFramebufferTexture){if(ne)if(R)t.texStorage2D(i.TEXTURE_2D,ge,be,te.width,te.height);else{let Q=te.width,Z=te.height;for(let ye=0;ye<ge;ye++)t.texImage2D(i.TEXTURE_2D,ye,be,Q,Z,0,de,Le,null),Q>>=1,Z>>=1}}else if(Be.length>0){if(R&&ne){let Q=Tt(Be[0]);t.texStorage2D(i.TEXTURE_2D,ge,be,Q.width,Q.height)}for(let Q=0,Z=Be.length;Q<Z;Q++)he=Be[Q],R?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de,Le,he):t.texImage2D(i.TEXTURE_2D,Q,be,de,Le,he);x.generateMipmaps=!1}else if(R){if(ne){let Q=Tt(te);t.texStorage2D(i.TEXTURE_2D,ge,be,Q.width,Q.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Le,te)}else t.texImage2D(i.TEXTURE_2D,0,be,de,Le,te);m(x)&&f(H),Se.__version=V.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function re(S,x,N){if(x.image.length!==6)return;let H=pt(S,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);let V=n.get(J);if(J.version!==V.__version||H===!0){t.activeTexture(i.TEXTURE0+N);let Se=Ze.getPrimaries(Ze.workingColorSpace),ie=x.colorSpace===yi?null:Ze.getPrimaries(x.colorSpace),ve=x.colorSpace===yi||Se===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Me=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!Me&&!te?de[Z]=_(x.image[Z],!0,r.maxCubemapSize):de[Z]=te?x.image[Z].image:x.image[Z],de[Z]=Nt(x,de[Z]);let Le=de[0],be=s.convert(x.format,x.colorSpace),he=s.convert(x.type),Be=C(x.internalFormat,be,he,x.colorSpace),R=x.isVideoTexture!==!0,ne=V.__version===void 0||H===!0,se=J.dataReady,ge=A(x,Le);He(i.TEXTURE_CUBE_MAP,x);let Q;if(Me){R&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Be,Le.width,Le.height);for(let Z=0;Z<6;Z++){Q=de[Z].mipmaps;for(let ye=0;ye<Q.length;ye++){let Ue=Q[ye];x.format!==xn?be!==null?R?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Ue.width,Ue.height,be,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,Be,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Ue.width,Ue.height,be,he,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,Be,Ue.width,Ue.height,0,be,he,Ue.data)}}}else{if(Q=x.mipmaps,R&&ne){Q.length>0&&ge++;let Z=Tt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){R?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,be,he,de[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,de[Z].width,de[Z].height,0,be,he,de[Z].data);for(let ye=0;ye<Q.length;ye++){let ht=Q[ye].image[Z].image;R?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,ht.width,ht.height,be,he,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,Be,ht.width,ht.height,0,be,he,ht.data)}}else{R?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,he,de[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,be,he,de[Z]);for(let ye=0;ye<Q.length;ye++){let Ue=Q[ye];R?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,be,he,Ue.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,Be,be,he,Ue.image[Z])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),V.__version=J.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Re(S,x,N,H,J,V){let Se=s.convert(N.format,N.colorSpace),ie=s.convert(N.type),ve=C(N.internalFormat,Se,ie,N.colorSpace),Me=n.get(x),te=n.get(N);if(te.__renderTarget=x,!Me.__hasExternalTextures){let de=Math.max(1,x.width>>V),Le=Math.max(1,x.height>>V);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,V,ve,de,Le,x.depth,0,Se,ie,null):t.texImage2D(J,V,ve,de,Le,0,Se,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,J,te.__webglTexture,0,mt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,J,te.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(S,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer){let H=x.depthTexture,J=H&&H.isDepthTexture?H.type:null,V=v(x.stencilBuffer,J),Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=mt(x);_e(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,V,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,V,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,V,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,S)}else{let H=x.textures;for(let J=0;J<H.length;J++){let V=H[J],Se=s.convert(V.format,V.colorSpace),ie=s.convert(V.type),ve=C(V.internalFormat,Se,ie,V.colorSpace),Me=mt(x);N&&_e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ve,x.width,x.height):_e(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ve,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ve,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let H=n.get(x.depthTexture);H.__renderTarget=x,(!H.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let J=H.__webglTexture,V=mt(x);if(x.depthTexture.format===Wr)_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===cs)_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Et(S){let x=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){let H=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",J)};H.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=H}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let H=S.texture.mipmaps;H&&H.length>0?Ne(x.__webglFramebuffer[0],S):Ne(x.__webglFramebuffer,S)}else if(N){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=i.createRenderbuffer(),Ie(x.__webglDepthbuffer[H],S,!1);else{let J=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,V)}}else{let H=S.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ie(x.__webglDepthbuffer,S,!1);else{let J=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,V)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(S,x,N){let H=n.get(S);x!==void 0&&Re(H.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Et(S)}function T(S){let x=S.texture,N=n.get(S),H=n.get(x);S.addEventListener("dispose",P);let J=S.textures,V=S.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=x.version,o.memory.textures++),V){N.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ie]=[];for(let ve=0;ve<x.mipmaps.length;ve++)N.__webglFramebuffer[ie][ve]=i.createFramebuffer()}else N.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)N.__webglFramebuffer[ie]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ie=0,ve=J.length;ie<ve;ie++){let Me=n.get(J[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&_e(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ie=0;ie<J.length;ie++){let ve=J[ie];N.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ie]);let Me=s.convert(ve.format,ve.colorSpace),te=s.convert(ve.type),de=C(ve.internalFormat,Me,te,ve.colorSpace,S.isXRRenderTarget===!0),Le=mt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,de,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,N.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),He(i.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)Re(N.__webglFramebuffer[ie][ve],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve);else Re(N.__webglFramebuffer[ie],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,ve=J.length;ie<ve;ie++){let Me=J[ie],te=n.get(Me),de=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(de=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,te.__webglTexture),He(de,Me),Re(N.__webglFramebuffer,S,Me,i.COLOR_ATTACHMENT0+ie,de,0),m(Me)&&f(de)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ie=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,H.__webglTexture),He(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)Re(N.__webglFramebuffer[ve],S,x,i.COLOR_ATTACHMENT0,ie,ve);else Re(N.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,ie,0);m(x)&&f(ie),t.unbindTexture()}S.depthBuffer&&Et(S)}function lt(S){let x=S.textures;for(let N=0,H=x.length;N<H;N++){let J=x[N];if(m(J)){let V=w(S),Se=n.get(J).__webglTexture;t.bindTexture(V,Se),f(V),t.unbindTexture()}}}let Te=[],et=[];function Ce(S){if(S.samples>0){if(_e(S)===!1){let x=S.textures,N=S.width,H=S.height,J=i.COLOR_BUFFER_BIT,V=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(S),ie=x.length>1;if(ie)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let ve=S.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);let te=n.get(x[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,N,H,0,0,N,H,J,i.NEAREST),c===!0&&(Te.length=0,et.length=0,Te.push(i.COLOR_ATTACHMENT0+Me),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Te.push(V),et.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);let te=n.get(x[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let x=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function mt(S){return Math.min(r.maxSamples,S.samples)}function _e(S){let x=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ge(S){let x=o.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function Nt(S,x){let N=S.colorSpace,H=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==zt&&N!==yi&&(Ze.getTransfer(N)===it?(H!==xn||J!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Tt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=X,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Ke,this.setupRenderTarget=T,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=_e}function bv(i,e){function t(n,r=yi){let s,o=Ze.getTransfer(r);if(n===zn)return i.UNSIGNED_BYTE;if(n===Ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$l)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return i.BYTE;if(n===Kl)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===os)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===xn)return i.RGBA;if(n===Wr)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===ja)return i.RED;if(n===Xa)return i.RED_INTEGER;if(n===eh)return i.RG;if(n===Ya)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===mo||n===go||n===_o||n===xo)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Ka||n===$a||n===Ja)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===ec||n===tc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qa||n===ec)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===tc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===rc||n===sc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===gc||n===_c)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yo)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===th||n===xc||n===yc||n===vc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ec=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}},Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ec(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kn({vertexShader:Sv,fragmentShader:Cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends Xn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,_=new Sh,m={},f=t.getContextAttributes(),w=null,C=null,v=[],A=[],O=new Oe,P=null,F=new wt;F.viewport=new Qe;let b=new wt;b.viewport=new Qe;let M=[F,b],E=new Pa,X=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let le=v[G];return le===void 0&&(le=new Yr,v[G]=le),le.getTargetRaySpace()},this.getControllerGrip=function(G){let le=v[G];return le===void 0&&(le=new Yr,v[G]=le),le.getGripSpace()},this.getHand=function(G){let le=v[G];return le===void 0&&(le=new Yr,v[G]=le),le.getHandSpace()};function Y(G){let le=A.indexOf(G.inputSource);if(le===-1)return;let re=v[le];re!==void 0&&(re.update(G.inputSource,G.frame,l||o),re.dispatchEvent({type:G.type,data:G.inputSource}))}function K(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",q);for(let G=0;G<v.length;G++){let le=A[G];le!==null&&(A[G]=null,v[G].disconnect(le))}X=null,z=null,_.reset();for(let G in m)delete m[G];e.setRenderTarget(w),p=null,d=null,u=null,r=null,C=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(G){return un(this,null,function*(){if(r=G,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",K),r.addEventListener("inputsourceschange",q),f.xrCompatible!==!0&&(yield t.makeXRCompatible()),P=e.getPixelRatio(),e.getSize(O),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Re=null,Ie=null;f.depth&&(Ie=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=f.stencil?cs:Wr,Re=f.stencil?as:zi);let Ne={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=u.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),C=new Yn(d.textureWidth,d.textureHeight,{format:xn,type:zn,depthTexture:new no(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let re={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Yn(p.framebufferWidth,p.framebufferHeight,{format:xn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(G){for(let le=0;le<G.removed.length;le++){let re=G.removed[le],Re=A.indexOf(re);Re>=0&&(A[Re]=null,v[Re].disconnect(re))}for(let le=0;le<G.added.length;le++){let re=G.added[le],Re=A.indexOf(re);if(Re===-1){for(let Ne=0;Ne<v.length;Ne++)if(Ne>=A.length){A.push(re),Re=Ne;break}else if(A[Ne]===null){A[Ne]=re,Re=Ne;break}if(Re===-1)break}let Ie=v[Re];Ie&&Ie.connect(re)}}let $=new I,B=new I;function ce(G,le,re){$.setFromMatrixPosition(le.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);let Re=$.distanceTo(B),Ie=le.projectionMatrix.elements,Ne=re.projectionMatrix.elements,Et=Ie[14]/(Ie[10]-1),Ke=Ie[14]/(Ie[10]+1),T=(Ie[9]+1)/Ie[5],lt=(Ie[9]-1)/Ie[5],Te=(Ie[8]-1)/Ie[0],et=(Ne[8]+1)/Ne[0],Ce=Et*Te,mt=Et*et,_e=Re/(-Te+et),Ge=_e*-Te;if(le.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ge),G.translateZ(_e),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ie[10]===-1)G.projectionMatrix.copy(le.projectionMatrix),G.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let Nt=Et+_e,Tt=Ke+_e,S=Ce-Ge,x=mt+(Re-Ge),N=T*Ke/Tt*Nt,H=lt*Ke/Tt*Nt;G.projectionMatrix.makePerspective(S,x,N,H,Nt,Tt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function pe(G,le){le===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(le.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let le=G.near,re=G.far;_.texture!==null&&(_.depthNear>0&&(le=_.depthNear),_.depthFar>0&&(re=_.depthFar)),E.near=b.near=F.near=le,E.far=b.far=F.far=re,(X!==E.near||z!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),X=E.near,z=E.far),E.layers.mask=G.layers.mask|6,F.layers.mask=E.layers.mask&3,b.layers.mask=E.layers.mask&5;let Re=G.parent,Ie=E.cameras;pe(E,Re);for(let Ne=0;Ne<Ie.length;Ne++)pe(Ie[Ne],Re);Ie.length===2?ce(E,F,b):E.projectionMatrix.copy(F.projectionMatrix),we(G,E,Re)};function we(G,le,re){re===null?G.matrix.copy(le.matrixWorld):(G.matrix.copy(re.matrixWorld),G.matrix.invert(),G.matrix.multiply(le.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(le.projectionMatrix),G.projectionMatrixInverse.copy(le.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ir*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)},this.getCameraTexture=function(G){return m[G]};let He=null;function pt(G,le){if(h=le.getViewerPose(l||o),g=le,h!==null){let re=h.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let Re=!1;re.length!==E.cameras.length&&(E.cameras.length=0,Re=!0);for(let Ke=0;Ke<re.length;Ke++){let T=re[Ke],lt=null;if(p!==null)lt=p.getViewport(T);else{let et=u.getViewSubImage(d,T);lt=et.viewport,Ke===0&&(e.setRenderTargetTextures(C,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(C))}let Te=M[Ke];Te===void 0&&(Te=new wt,Te.layers.enable(Ke),Te.viewport=new Qe,M[Ke]=Te),Te.matrix.fromArray(T.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(T.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(lt.x,lt.y,lt.width,lt.height),Ke===0&&(E.matrix.copy(Te.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Re===!0&&E.cameras.push(Te)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){let Ke=u.getDepthInformation(re[0]);Ke&&Ke.isValid&&Ke.texture&&_.init(Ke,r.renderState)}if(Ie&&Ie.includes("camera-access")&&(e.state.unbindTexture(),u))for(let Ke=0;Ke<re.length;Ke++){let T=re[Ke].camera;if(T){let lt=m[T];lt||(lt=new Ec,m[T]=lt);let Te=u.getCameraImage(T);lt.sourceTexture=Te}}}for(let re=0;re<v.length;re++){let Re=A[re],Ie=v[re];Re!==null&&Ie!==void 0&&Ie.update(Re,le,l||o)}He&&He(G,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let ot=new yp;ot.setAnimationLoop(pt),this.setAnimationLoop=function(G){He=G},this.dispose=function(){}}},gr=new hi,wv=new Ve;function Ev(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ah(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,w,C,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,w,C):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=e.get(f),C=w.envMap,v=w.envMapRotation;C&&(m.envMap.value=C,gr.copy(v),gr.x*=-1,gr.y*=-1,gr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),m.envMapRotation.value.setFromMatrix4(wv.makeRotationFromEuler(gr)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=C*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Tv(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,C){let v=C.program;n.uniformBlockBinding(w,v)}function l(w,C){let v=r[w.id];v===void 0&&(g(w),v=h(w),r[w.id]=v,w.addEventListener("dispose",m));let A=C.program;n.updateUBOMapping(w,A);let O=e.render.frame;s[w.id]!==O&&(d(w),s[w.id]=O)}function h(w){let C=u();w.__bindingPointIndex=C;let v=i.createBuffer(),A=w.__size,O=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let C=r[w.id],v=w.uniforms,A=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let O=0,P=v.length;O<P;O++){let F=Array.isArray(v[O])?v[O]:[v[O]];for(let b=0,M=F.length;b<M;b++){let E=F[b];if(p(E,O,b,A)===!0){let X=E.__offset,z=Array.isArray(E.value)?E.value:[E.value],Y=0;for(let K=0;K<z.length;K++){let q=z[K],$=_(q);typeof q=="number"||typeof q=="boolean"?(E.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,X+Y,E.__data)):q.isMatrix3?(E.__data[0]=q.elements[0],E.__data[1]=q.elements[1],E.__data[2]=q.elements[2],E.__data[3]=0,E.__data[4]=q.elements[3],E.__data[5]=q.elements[4],E.__data[6]=q.elements[5],E.__data[7]=0,E.__data[8]=q.elements[6],E.__data[9]=q.elements[7],E.__data[10]=q.elements[8],E.__data[11]=0):(q.toArray(E.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,C,v,A){let O=w.value,P=C+"_"+v;if(A[P]===void 0)return typeof O=="number"||typeof O=="boolean"?A[P]=O:A[P]=O.clone(),!0;{let F=A[P];if(typeof O=="number"||typeof O=="boolean"){if(F!==O)return A[P]=O,!0}else if(F.equals(O)===!1)return F.copy(O),!0}return!1}function g(w){let C=w.uniforms,v=0,A=16;for(let P=0,F=C.length;P<F;P++){let b=Array.isArray(C[P])?C[P]:[C[P]];for(let M=0,E=b.length;M<E;M++){let X=b[M],z=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,K=z.length;Y<K;Y++){let q=z[Y],$=_(q),B=v%A,ce=B%$.boundary,pe=B+ce;v+=ce,pe!==0&&A-pe<$.storage&&(v+=A-pe),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=$.storage}}}let O=v%A;return O>0&&(v+=A-O),w.__size=v,w.__cache={},this}function _(w){let C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),C}function m(w){let C=w.target;C.removeEventListener("dispose",m);let v=o.indexOf(C.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function f(){for(let w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var fs=class{constructor(e={}){let{canvas:t=Wf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,w=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=xt;let O=0,P=0,F=null,b=-1,M=null,E=new Qe,X=new Qe,z=null,Y=new Pe(0),K=0,q=t.width,$=t.height,B=1,ce=null,pe=null,we=new Qe(0,0,q,$),He=new Qe(0,0,q,$),pt=!1,ot=new $r,G=!1,le=!1,re=new Ve,Re=new I,Ie=new Qe,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function Ke(){return F===null?B:1}let T=n;function lt(y,D){return t.getContext(y,D)}try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oa}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",Q,!1),T===null){let D="webgl2";if(T=lt(D,y),T===null)throw lt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Te,et,Ce,mt,_e,Ge,Nt,Tt,S,x,N,H,J,V,Se,ie,ve,Me,te,de,Le,be,he,Be;function R(){Te=new jx(T),Te.init(),be=new bv(T,Te),et=new kx(T,Te,e,be),Ce=new vv(T,Te),et.reversedDepthBuffer&&d&&Ce.buffers.depth.setReversed(!0),mt=new qx(T),_e=new av,Ge=new Mv(T,Te,Ce,_e,et,be,mt),Nt=new Vx(v),Tt=new Wx(v),S=new e_(T),he=new Nx(T,S),x=new Xx(T,S,mt,he),N=new Kx(T,x,S,mt),te=new Zx(T,et,Ge),ie=new Bx(_e),H=new ov(v,Nt,Tt,Te,et,he,ie),J=new Ev(v,_e),V=new lv,Se=new mv(Te),Me=new Fx(v,Nt,Tt,Ce,N,p,c),ve=new xv(v,N,et),Be=new Tv(T,mt,et,Ce),de=new Ux(T,Te,mt),Le=new Yx(T,Te,mt),mt.programs=H.programs,v.capabilities=et,v.extensions=Te,v.properties=_e,v.renderLists=V,v.shadowMap=ve,v.state=Ce,v.info=mt}R();let ne=new Ch(v,T);this.xr=ne,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let y=Te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(y){y!==void 0&&(B=y,this.setSize(q,$,!1))},this.getSize=function(y){return y.set(q,$)},this.setSize=function(y,D,U=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,$=D,t.width=Math.floor(y*B),t.height=Math.floor(D*B),U===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(q*B,$*B).floor()},this.setDrawingBufferSize=function(y,D,U){q=y,$=D,B=U,t.width=Math.floor(y*U),t.height=Math.floor(D*U),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(E)},this.getViewport=function(y){return y.copy(we)},this.setViewport=function(y,D,U,k){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,D,U,k),Ce.viewport(E.copy(we).multiplyScalar(B).round())},this.getScissor=function(y){return y.copy(He)},this.setScissor=function(y,D,U,k){y.isVector4?He.set(y.x,y.y,y.z,y.w):He.set(y,D,U,k),Ce.scissor(X.copy(He).multiplyScalar(B).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){Ce.setScissorTest(pt=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){pe=y},this.getClearColor=function(y){return y.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,U=!0){let k=0;if(y){let L=!1;if(F!==null){let ee=F.texture.format;L=ee===qa||ee===Ya||ee===Xa}if(L){let ee=F.texture.type,ue=ee===zn||ee===zi||ee===ss||ee===as||ee===Ga||ee===Wa,xe=Me.getClearColor(),me=Me.getClearAlpha(),De=xe.r,Fe=xe.g,Ee=xe.b;ue?(g[0]=De,g[1]=Fe,g[2]=Ee,g[3]=me,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=De,_[1]=Fe,_[2]=Ee,_[3]=me,T.clearBufferiv(T.COLOR,0,_))}else k|=T.COLOR_BUFFER_BIT}D&&(k|=T.DEPTH_BUFFER_BIT),U&&(k|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Me.dispose(),V.dispose(),Se.dispose(),_e.dispose(),Nt.dispose(),Tt.dispose(),N.dispose(),he.dispose(),Be.dispose(),H.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Hn),ne.removeEventListener("sessionend",su),Gi.stop()};function se(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let y=mt.autoReset,D=ve.enabled,U=ve.autoUpdate,k=ve.needsUpdate,L=ve.type;R(),mt.autoReset=y,ve.enabled=D,ve.autoUpdate=U,ve.needsUpdate=k,ve.type=L}function Q(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Z(y){let D=y.target;D.removeEventListener("dispose",Z),ye(D)}function ye(y){Ue(y),_e.remove(y)}function Ue(y){let D=_e.get(y).programs;D!==void 0&&(D.forEach(function(U){H.releaseProgram(U)}),y.isShaderMaterial&&H.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,U,k,L,ee){D===null&&(D=Ne);let ue=L.isMesh&&L.matrixWorld.determinant()<0,xe=Zp(y,D,U,k,L);Ce.setMaterial(k,ue);let me=U.index,De=1;if(k.wireframe===!0){if(me=x.getWireframeAttribute(U),me===void 0)return;De=2}let Fe=U.drawRange,Ee=U.attributes.position,qe=Fe.start*De,rt=(Fe.start+Fe.count)*De;ee!==null&&(qe=Math.max(qe,ee.start*De),rt=Math.min(rt,(ee.start+ee.count)*De)),me!==null?(qe=Math.max(qe,0),rt=Math.min(rt,me.count)):Ee!=null&&(qe=Math.max(qe,0),rt=Math.min(rt,Ee.count));let bt=rt-qe;if(bt<0||bt===1/0)return;he.setup(L,k,xe,U,me);let ft,at=de;if(me!==null&&(ft=S.get(me),at=Le,at.setIndex(ft)),L.isMesh)k.wireframe===!0?(Ce.setLineWidth(k.wireframeLinewidth*Ke()),at.setMode(T.LINES)):at.setMode(T.TRIANGLES);else if(L.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),Ce.setLineWidth(Ae*Ke()),L.isLineSegments?at.setMode(T.LINES):L.isLineLoop?at.setMode(T.LINE_LOOP):at.setMode(T.LINE_STRIP)}else L.isPoints?at.setMode(T.POINTS):L.isSprite&&at.setMode(T.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))at.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Ae=L._multiDrawStarts,yt=L._multiDrawCounts,$e=L._multiDrawCount,ln=me?S.get(me).bytesPerElement:1,vr=_e.get(k).currentProgram.getUniforms();for(let hn=0;hn<$e;hn++)vr.setValue(T,"_gl_DrawID",hn),at.render(Ae[hn]/ln,yt[hn])}else if(L.isInstancedMesh)at.renderInstances(qe,bt,L.count);else if(U.isInstancedBufferGeometry){let Ae=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,yt=Math.min(U.instanceCount,Ae);at.renderInstances(qe,bt,yt)}else at.render(qe,bt)};function ht(y,D,U){y.transparent===!0&&y.side===Cn&&y.forceSinglePass===!1?(y.side=tn,y.needsUpdate=!0,wo(y,D,U),y.side=Nn,y.needsUpdate=!0,wo(y,D,U),y.side=Cn):wo(y,D,U)}this.compile=function(y,D,U=null){U===null&&(U=y),f=Se.get(U),f.init(D),C.push(f),U.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),y!==U&&y.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();let k=new Set;return y.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let ee=L.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){let xe=ee[ue];ht(xe,U,L),k.add(xe)}else ht(ee,U,L),k.add(ee)}),f=C.pop(),k},this.compileAsync=function(y,D,U=null){let k=this.compile(y,D,U);return new Promise(L=>{function ee(){if(k.forEach(function(ue){_e.get(ue).currentProgram.isReady()&&k.delete(ue)}),k.size===0){L(y);return}setTimeout(ee,10)}Te.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let tt=null;function ei(y){tt&&tt(y)}function Hn(){Gi.stop()}function su(){Gi.start()}let Gi=new yp;Gi.setAnimationLoop(ei),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(y){tt=y,ne.setAnimationLoop(y),y===null?Gi.stop():Gi.start()},ne.addEventListener("sessionstart",Hn),ne.addEventListener("sessionend",su),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(D),D=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,D,F),f=Se.get(y,C.length),f.init(D),C.push(f),re.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ot.setFromProjectionMatrix(re,Ln,D.reversedDepth),le=this.localClippingEnabled,G=ie.init(this.clippingPlanes,le),m=V.get(y,w.length),m.init(),w.push(m),ne.enabled===!0&&ne.isPresenting===!0){let ee=v.xr.getDepthSensingMesh();ee!==null&&kc(ee,D,-1/0,v.sortObjects)}kc(y,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ce,pe),Et=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Et&&Me.addToRenderList(m,y),this.info.render.frame++,G===!0&&ie.beginShadows();let U=f.state.shadowsArray;ve.render(U,y,D),G===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,L=m.transmissive;if(f.setupLights(),D.isArrayCamera){let ee=D.cameras;if(L.length>0)for(let ue=0,xe=ee.length;ue<xe;ue++){let me=ee[ue];au(k,L,y,me)}Et&&Me.render(y);for(let ue=0,xe=ee.length;ue<xe;ue++){let me=ee[ue];ou(m,y,me,me.viewport)}}else L.length>0&&au(k,L,y,D),Et&&Me.render(y),ou(m,y,D);F!==null&&P===0&&(Ge.updateMultisampleRenderTarget(F),Ge.updateRenderTargetMipmap(F)),y.isScene===!0&&y.onAfterRender(v,y,D),he.resetDefaultState(),b=-1,M=null,C.pop(),C.length>0?(f=C[C.length-1],G===!0&&ie.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function kc(y,D,U,k){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)U=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ot.intersectsSprite(y)){k&&Ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(re);let ue=N.update(y),xe=y.material;xe.visible&&m.push(y,ue,xe,U,Ie.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ot.intersectsObject(y))){let ue=N.update(y),xe=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ie.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ie.copy(ue.boundingSphere.center)),Ie.applyMatrix4(y.matrixWorld).applyMatrix4(re)),Array.isArray(xe)){let me=ue.groups;for(let De=0,Fe=me.length;De<Fe;De++){let Ee=me[De],qe=xe[Ee.materialIndex];qe&&qe.visible&&m.push(y,ue,qe,U,Ie.z,Ee)}}else xe.visible&&m.push(y,ue,xe,U,Ie.z,null)}}let ee=y.children;for(let ue=0,xe=ee.length;ue<xe;ue++)kc(ee[ue],D,U,k)}function ou(y,D,U,k){let L=y.opaque,ee=y.transmissive,ue=y.transparent;f.setupLightsView(U),G===!0&&ie.setGlobalState(v.clippingPlanes,U),k&&Ce.viewport(E.copy(k)),L.length>0&&Co(L,D,U),ee.length>0&&Co(ee,D,U),ue.length>0&&Co(ue,D,U),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function au(y,D,U,k){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Yn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?os:zn,minFilter:Vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ee=f.state.transmissionRenderTarget[k.id],ue=k.viewport||E;ee.setSize(ue.z*v.transmissionResolutionScale,ue.w*v.transmissionResolutionScale);let xe=v.getRenderTarget(),me=v.getActiveCubeFace(),De=v.getActiveMipmapLevel();v.setRenderTarget(ee),v.getClearColor(Y),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Et&&Me.render(U);let Fe=v.toneMapping;v.toneMapping=xi;let Ee=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),G===!0&&ie.setGlobalState(v.clippingPlanes,k),Co(y,U,k),Ge.updateMultisampleRenderTarget(ee),Ge.updateRenderTargetMipmap(ee),Te.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let rt=0,bt=D.length;rt<bt;rt++){let ft=D[rt],at=ft.object,Ae=ft.geometry,yt=ft.material,$e=ft.group;if(yt.side===Cn&&at.layers.test(k.layers)){let ln=yt.side;yt.side=tn,yt.needsUpdate=!0,cu(at,U,k,Ae,yt,$e),yt.side=ln,yt.needsUpdate=!0,qe=!0}}qe===!0&&(Ge.updateMultisampleRenderTarget(ee),Ge.updateRenderTargetMipmap(ee))}v.setRenderTarget(xe,me,De),v.setClearColor(Y,K),Ee!==void 0&&(k.viewport=Ee),v.toneMapping=Fe}function Co(y,D,U){let k=D.isScene===!0?D.overrideMaterial:null;for(let L=0,ee=y.length;L<ee;L++){let ue=y[L],xe=ue.object,me=ue.geometry,De=ue.group,Fe=ue.material;Fe.allowOverride===!0&&k!==null&&(Fe=k),xe.layers.test(U.layers)&&cu(xe,D,U,me,Fe,De)}}function cu(y,D,U,k,L,ee){y.onBeforeRender(v,D,U,k,L,ee),y.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),L.onBeforeRender(v,D,U,k,y,ee),L.transparent===!0&&L.side===Cn&&L.forceSinglePass===!1?(L.side=tn,L.needsUpdate=!0,v.renderBufferDirect(U,D,k,L,y,ee),L.side=Nn,L.needsUpdate=!0,v.renderBufferDirect(U,D,k,L,y,ee),L.side=Cn):v.renderBufferDirect(U,D,k,L,y,ee),y.onAfterRender(v,D,U,k,L,ee)}function wo(y,D,U){D.isScene!==!0&&(D=Ne);let k=_e.get(y),L=f.state.lights,ee=f.state.shadowsArray,ue=L.state.version,xe=H.getParameters(y,L.state,ee,D,U),me=H.getProgramCacheKey(xe),De=k.programs;k.environment=y.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(y.isMeshStandardMaterial?Tt:Nt).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",Z),De=new Map,k.programs=De);let Fe=De.get(me);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===ue)return hu(y,xe),Fe}else xe.uniforms=H.getUniforms(y),y.onBeforeCompile(xe,v),Fe=H.acquireProgram(xe,me),De.set(me,Fe),k.uniforms=xe.uniforms;let Ee=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),hu(y,xe),k.needsLights=$p(y),k.lightsStateVersion=ue,k.needsLights&&(Ee.ambientLightColor.value=L.state.ambient,Ee.lightProbe.value=L.state.probe,Ee.directionalLights.value=L.state.directional,Ee.directionalLightShadows.value=L.state.directionalShadow,Ee.spotLights.value=L.state.spot,Ee.spotLightShadows.value=L.state.spotShadow,Ee.rectAreaLights.value=L.state.rectArea,Ee.ltc_1.value=L.state.rectAreaLTC1,Ee.ltc_2.value=L.state.rectAreaLTC2,Ee.pointLights.value=L.state.point,Ee.pointLightShadows.value=L.state.pointShadow,Ee.hemisphereLights.value=L.state.hemi,Ee.directionalShadowMap.value=L.state.directionalShadowMap,Ee.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ee.spotShadowMap.value=L.state.spotShadowMap,Ee.spotLightMatrix.value=L.state.spotLightMatrix,Ee.spotLightMap.value=L.state.spotLightMap,Ee.pointShadowMap.value=L.state.pointShadowMap,Ee.pointShadowMatrix.value=L.state.pointShadowMatrix),k.currentProgram=Fe,k.uniformsList=null,Fe}function lu(y){if(y.uniformsList===null){let D=y.currentProgram.getUniforms();y.uniformsList=ds.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function hu(y,D){let U=_e.get(y);U.outputColorSpace=D.outputColorSpace,U.batching=D.batching,U.batchingColor=D.batchingColor,U.instancing=D.instancing,U.instancingColor=D.instancingColor,U.instancingMorph=D.instancingMorph,U.skinning=D.skinning,U.morphTargets=D.morphTargets,U.morphNormals=D.morphNormals,U.morphColors=D.morphColors,U.morphTargetsCount=D.morphTargetsCount,U.numClippingPlanes=D.numClippingPlanes,U.numIntersection=D.numClipIntersection,U.vertexAlphas=D.vertexAlphas,U.vertexTangents=D.vertexTangents,U.toneMapping=D.toneMapping}function Zp(y,D,U,k,L){D.isScene!==!0&&(D=Ne),Ge.resetTextureUnits();let ee=D.fog,ue=k.isMeshStandardMaterial?D.environment:null,xe=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:zt,me=(k.isMeshStandardMaterial?Tt:Nt).get(k.envMap||ue),De=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Fe=!!U.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!U.morphAttributes.position,qe=!!U.morphAttributes.normal,rt=!!U.morphAttributes.color,bt=xi;k.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(bt=v.toneMapping);let ft=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,at=ft!==void 0?ft.length:0,Ae=_e.get(k),yt=f.state.lights;if(G===!0&&(le===!0||y!==M)){let Zt=y===M&&k.id===b;ie.setState(k,y,Zt)}let $e=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==yt.state.version||Ae.outputColorSpace!==xe||L.isBatchedMesh&&Ae.batching===!1||!L.isBatchedMesh&&Ae.batching===!0||L.isBatchedMesh&&Ae.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ae.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ae.instancing===!1||!L.isInstancedMesh&&Ae.instancing===!0||L.isSkinnedMesh&&Ae.skinning===!1||!L.isSkinnedMesh&&Ae.skinning===!0||L.isInstancedMesh&&Ae.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ae.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ae.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ae.instancingMorph===!1&&L.morphTexture!==null||Ae.envMap!==me||k.fog===!0&&Ae.fog!==ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==De||Ae.vertexTangents!==Fe||Ae.morphTargets!==Ee||Ae.morphNormals!==qe||Ae.morphColors!==rt||Ae.toneMapping!==bt||Ae.morphTargetsCount!==at)&&($e=!0):($e=!0,Ae.__version=k.version);let ln=Ae.currentProgram;$e===!0&&(ln=wo(k,D,L));let vr=!1,hn=!1,ys=!1,vt=ln.getUniforms(),vn=Ae.uniforms;if(Ce.useProgram(ln.program)&&(vr=!0,hn=!0,ys=!0),k.id!==b&&(b=k.id,hn=!0),vr||M!==y){Ce.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),vt.setValue(T,"projectionMatrix",y.projectionMatrix),vt.setValue(T,"viewMatrix",y.matrixWorldInverse);let nn=vt.map.cameraPosition;nn!==void 0&&nn.setValue(T,Re.setFromMatrixPosition(y.matrixWorld)),et.logarithmicDepthBuffer&&vt.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&vt.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,hn=!0,ys=!0)}if(L.isSkinnedMesh){vt.setOptional(T,L,"bindMatrix"),vt.setOptional(T,L,"bindMatrixInverse");let Zt=L.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),vt.setValue(T,"boneTexture",Zt.boneTexture,Ge))}L.isBatchedMesh&&(vt.setOptional(T,L,"batchingTexture"),vt.setValue(T,"batchingTexture",L._matricesTexture,Ge),vt.setOptional(T,L,"batchingIdTexture"),vt.setValue(T,"batchingIdTexture",L._indirectTexture,Ge),vt.setOptional(T,L,"batchingColorTexture"),L._colorsTexture!==null&&vt.setValue(T,"batchingColorTexture",L._colorsTexture,Ge));let Mn=U.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&te.update(L,U,ln),(hn||Ae.receiveShadow!==L.receiveShadow)&&(Ae.receiveShadow=L.receiveShadow,vt.setValue(T,"receiveShadow",L.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(vn.envMap.value=me,vn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(vn.envMapIntensity.value=D.environmentIntensity),hn&&(vt.setValue(T,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&Kp(vn,ys),ee&&k.fog===!0&&J.refreshFogUniforms(vn,ee),J.refreshMaterialUniforms(vn,k,B,$,f.state.transmissionRenderTarget[y.id]),ds.upload(T,lu(Ae),vn,Ge)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ds.upload(T,lu(Ae),vn,Ge),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&vt.setValue(T,"center",L.center),vt.setValue(T,"modelViewMatrix",L.modelViewMatrix),vt.setValue(T,"normalMatrix",L.normalMatrix),vt.setValue(T,"modelMatrix",L.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Zt=k.uniformsGroups;for(let nn=0,Bc=Zt.length;nn<Bc;nn++){let Wi=Zt[nn];Be.update(Wi,ln),Be.bind(Wi,ln)}}return ln}function Kp(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function $p(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,D,U){let k=_e.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),_e.get(y.texture).__webglTexture=D,_e.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:U,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){let U=_e.get(y);U.__webglFramebuffer=D,U.__useDefaultFramebuffer=D===void 0};let Jp=T.createFramebuffer();this.setRenderTarget=function(y,D=0,U=0){F=y,O=D,P=U;let k=!0,L=null,ee=!1,ue=!1;if(y){let me=_e.get(y);if(me.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(T.FRAMEBUFFER,null),k=!1;else if(me.__webglFramebuffer===void 0)Ge.setupRenderTarget(y);else if(me.__hasExternalTextures)Ge.rebindTextures(y,_e.get(y.texture).__webglTexture,_e.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ee=y.depthTexture;if(me.__boundDepthTexture!==Ee){if(Ee!==null&&_e.has(Ee)&&(y.width!==Ee.image.width||y.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(y)}}let De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ue=!0);let Fe=_e.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Fe[D])?L=Fe[D][U]:L=Fe[D],ee=!0):y.samples>0&&Ge.useMultisampledRTT(y)===!1?L=_e.get(y).__webglMultisampledFramebuffer:Array.isArray(Fe)?L=Fe[U]:L=Fe,E.copy(y.viewport),X.copy(y.scissor),z=y.scissorTest}else E.copy(we).multiplyScalar(B).floor(),X.copy(He).multiplyScalar(B).floor(),z=pt;if(U!==0&&(L=Jp),Ce.bindFramebuffer(T.FRAMEBUFFER,L)&&k&&Ce.drawBuffers(y,L),Ce.viewport(E),Ce.scissor(X),Ce.setScissorTest(z),ee){let me=_e.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,U)}else if(ue){let me=D;for(let De=0;De<y.textures.length;De++){let Fe=_e.get(y.textures[De]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+De,Fe.__webglTexture,U,me)}}else if(y!==null&&U!==0){let me=_e.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,me.__webglTexture,U)}b=-1},this.readRenderTargetPixels=function(y,D,U,k,L,ee,ue,xe=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me){Ce.bindFramebuffer(T.FRAMEBUFFER,me);try{let De=y.textures[xe],Fe=De.format,Ee=De.type;if(!et.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-k&&U>=0&&U<=y.height-L&&(y.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+xe),T.readPixels(D,U,k,L,be.convert(Fe),be.convert(Ee),ee))}finally{let De=F!==null?_e.get(F).__webglFramebuffer:null;Ce.bindFramebuffer(T.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=function(y,D,U,k,L,ee,ue,xe=0){return un(this,null,function*(){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me)if(D>=0&&D<=y.width-k&&U>=0&&U<=y.height-L){Ce.bindFramebuffer(T.FRAMEBUFFER,me);let De=y.textures[xe],Fe=De.format,Ee=De.type;if(!et.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,qe),T.bufferData(T.PIXEL_PACK_BUFFER,ee.byteLength,T.STREAM_READ),y.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+xe),T.readPixels(D,U,k,L,be.convert(Fe),be.convert(Ee),0);let rt=F!==null?_e.get(F).__webglFramebuffer:null;Ce.bindFramebuffer(T.FRAMEBUFFER,rt);let bt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),yield jf(T,bt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,qe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ee),T.deleteBuffer(qe),T.deleteSync(bt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(y,D=null,U=0){let k=Math.pow(2,-U),L=Math.floor(y.image.width*k),ee=Math.floor(y.image.height*k),ue=D!==null?D.x:0,xe=D!==null?D.y:0;Ge.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,U,0,0,ue,xe,L,ee),Ce.unbindTexture()};let Qp=T.createFramebuffer(),em=T.createFramebuffer();this.copyTextureToTexture=function(y,D,U=null,k=null,L=0,ee=null){ee===null&&(L!==0?(rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let ue,xe,me,De,Fe,Ee,qe,rt,bt,ft=y.isCompressedTexture?y.mipmaps[ee]:y.image;if(U!==null)ue=U.max.x-U.min.x,xe=U.max.y-U.min.y,me=U.isBox3?U.max.z-U.min.z:1,De=U.min.x,Fe=U.min.y,Ee=U.isBox3?U.min.z:0;else{let Mn=Math.pow(2,-L);ue=Math.floor(ft.width*Mn),xe=Math.floor(ft.height*Mn),y.isDataArrayTexture?me=ft.depth:y.isData3DTexture?me=Math.floor(ft.depth*Mn):me=1,De=0,Fe=0,Ee=0}k!==null?(qe=k.x,rt=k.y,bt=k.z):(qe=0,rt=0,bt=0);let at=be.convert(D.format),Ae=be.convert(D.type),yt;D.isData3DTexture?(Ge.setTexture3D(D,0),yt=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ge.setTexture2DArray(D,0),yt=T.TEXTURE_2D_ARRAY):(Ge.setTexture2D(D,0),yt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);let $e=T.getParameter(T.UNPACK_ROW_LENGTH),ln=T.getParameter(T.UNPACK_IMAGE_HEIGHT),vr=T.getParameter(T.UNPACK_SKIP_PIXELS),hn=T.getParameter(T.UNPACK_SKIP_ROWS),ys=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ft.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ft.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,De),T.pixelStorei(T.UNPACK_SKIP_ROWS,Fe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ee);let vt=y.isDataArrayTexture||y.isData3DTexture,vn=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){let Mn=_e.get(y),Zt=_e.get(D),nn=_e.get(Mn.__renderTarget),Bc=_e.get(Zt.__renderTarget);Ce.bindFramebuffer(T.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,Bc.__webglFramebuffer);for(let Wi=0;Wi<me;Wi++)vt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(y).__webglTexture,L,Ee+Wi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(D).__webglTexture,ee,bt+Wi)),T.blitFramebuffer(De,Fe,ue,xe,qe,rt,ue,xe,T.DEPTH_BUFFER_BIT,T.NEAREST);Ce.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(L!==0||y.isRenderTargetTexture||_e.has(y)){let Mn=_e.get(y),Zt=_e.get(D);Ce.bindFramebuffer(T.READ_FRAMEBUFFER,Qp),Ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,em);for(let nn=0;nn<me;nn++)vt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Mn.__webglTexture,L,Ee+nn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Mn.__webglTexture,L),vn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Zt.__webglTexture,ee,bt+nn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Zt.__webglTexture,ee),L!==0?T.blitFramebuffer(De,Fe,ue,xe,qe,rt,ue,xe,T.COLOR_BUFFER_BIT,T.NEAREST):vn?T.copyTexSubImage3D(yt,ee,qe,rt,bt+nn,De,Fe,ue,xe):T.copyTexSubImage2D(yt,ee,qe,rt,De,Fe,ue,xe);Ce.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else vn?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(yt,ee,qe,rt,bt,ue,xe,me,at,Ae,ft.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(yt,ee,qe,rt,bt,ue,xe,me,at,ft.data):T.texSubImage3D(yt,ee,qe,rt,bt,ue,xe,me,at,Ae,ft):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ee,qe,rt,ue,xe,at,Ae,ft.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ee,qe,rt,ft.width,ft.height,at,ft.data):T.texSubImage2D(T.TEXTURE_2D,ee,qe,rt,ue,xe,at,Ae,ft);T.pixelStorei(T.UNPACK_ROW_LENGTH,$e),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ln),T.pixelStorei(T.UNPACK_SKIP_PIXELS,vr),T.pixelStorei(T.UNPACK_SKIP_ROWS,hn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ys),ee===0&&D.generateMipmaps&&T.generateMipmap(yt),Ce.unbindTexture()},this.copyTextureToTexture3D=function(y,D,U=null,k=null,L=0){return rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,U,k,L)},this.initRenderTarget=function(y){_e.get(y).__webglFramebuffer===void 0&&Ge.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ge.setTextureCube(y,0):y.isData3DTexture?Ge.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ge.setTexture2DArray(y,0):Ge.setTexture2D(y,0),Ce.unbindTexture()},this.resetState=function(){O=0,P=0,F=null,Ce.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var wp={type:"change"},Th={type:"start"},Tp={type:"end"},Ac=new li,Ep=new Sn,Av=Math.cos(70*Mo.DEG2RAD),Ft=new I,cn=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eh=1e-6,ms=class extends fo{constructor(e,t=null){super(e,t),this.state=st.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Qt,this._lastTargetPosition=new I,this._quat=new Qt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ts,this._sphericalDelta=new ts,this._scale=1,this._panOffset=new I,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new I,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ov.bind(this),this._onPointerDown=Pv.bind(this),this._onPointerUp=Rv.bind(this),this._onContextMenu=kv.bind(this),this._onMouseWheel=Lv.bind(this),this._onKeyDown=Fv.bind(this),this._onTouchStart=Nv.bind(this),this._onTouchMove=Uv.bind(this),this._onMouseDown=Iv.bind(this),this._onMouseMove=Dv.bind(this),this._interceptControlDown=Bv.bind(this),this._interceptControlUp=Vv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wp),this.update(),this.state=st.NONE}update(e=null){let t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),r<-Math.PI?r+=cn:r>Math.PI&&(r-=cn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ft.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<Av?this.object.lookAt(this.target):(Ep.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(Ep,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Eh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eh||this._lastTargetPosition.distanceToSquared(this.target)>Eh?(this.dispatchEvent(wp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ft.copy(r).sub(this.target);let s=Ft.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Pv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ov(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Rv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tp),this.state=st.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Iv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=st.DOLLY;break;case Bi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=st.ROTATE}break;case Bi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Th)}function Dv(i){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Lv(i){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(i.preventDefault(),this.dispatchEvent(Th),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Tp))}function Fv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Nv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=st.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=st.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Th)}function Uv(i){switch(this._trackPointer(i),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=st.NONE}}function kv(i){this.enabled!==!1&&i.preventDefault()}function Bv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ah(i,e){if(e===nh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ls||e===vo){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===ls)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var _s=class extends pr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Zh(t)})}load(e,t,n,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=gi.extractUrlBase(e);o=gi.resolveURL(l,this.path)}else o=gi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new es(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ip){try{o[Ye.KHR_BINARY_GLTF]=new Kh(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new iu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:o[u]=new Dh;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new $h(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[u]=new Jh;break;case Ye.KHR_MESH_QUANTIZATION:o[u]=new Qh;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function zv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ih=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new Pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],zt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new $n(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new mi(h),l.distance=u;break;case"spot":l=new cr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),vi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Dh=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Un}extendParams(e,t,n){let r=[];e.color=new Pe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(r)}},Lh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Fh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(s)}},Nh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Uh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},kh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,xt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},Bh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(a[0],a[1],a[2],zt),Promise.all(s)}},zh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Hh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(a[0],a[1],a[2],zt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,xt)),Promise.all(s)}},Gh=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},Wh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},jh=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Xh=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Yh=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},qh=class{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=r.byteOffset||0,l=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,r.mode,r.filter),p})})}else return null}},Zh=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let l of r.primitives)if(l.mode!==En.TRIANGLES&&l.mode!==En.TRIANGLE_STRIP&&l.mode!==En.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let g of u){let _=new Ve,m=new I,f=new Qt,w=new I(1,1,1),C=new Js(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,v),c.SCALE&&w.fromBufferAttribute(c.SCALE,v),C.setMatrixAt(v,_.compose(m,f,w));for(let v in c)if(v==="_COLOR_0"){let A=c[v];C.instanceColor=new Ui(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);It.prototype.copy.call(C,g),this.parser.assignFinalMaterial(C),p.push(C)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Ip="glTF",So=12,Ap={JSON:1313821514,BIN:5130562},Kh=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,So),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ip)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-So,s=new DataView(e,So),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===Ap.JSON){let l=new Uint8Array(e,So+o,a);this.content=n.decode(l)}else if(c===Ap.BIN){let l=So+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$h=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=tu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=tu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],p=gs[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(p){for(let g in p.attributes){let _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(p)},a,l,zt,d)})})}},Jh=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Qh=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},Pc=class extends di{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=r-t,u=(n-t)/h,d=u*u,p=d*u,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,w=1-m,C=f-d+u;for(let v=0;v!==a;v++){let A=o[_+v+a],O=o[_+v+c]*h,P=o[g+v+a],F=o[g+v]*h;s[v]=w*A+C*O+m*P+f*F}return s}},Hv=new Qt,eu=class extends Pc{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return Hv.fromArray(s).normalize().toArray(s),s}},En={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pp={9728:Vt,9729:Jt,9984:za,9985:rs,9986:dr,9987:Vn},Op={33071:Wn,33648:Gr,10497:Ni},Ph={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Gv={CUBICSPLINE:void 0,LINEAR:nr,STEP:tr},Oh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Wv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Bn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),i.DefaultMaterial}function yr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jv(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(r){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),r&&(i.morphAttributes.normal=u),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Xv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yv(i){let e,t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Rh(t.attributes):e=i.indices+":"+Rh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Rh(i.targets[n]);return e}function Rh(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function nu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Zv=new Ve,iu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new ao(this.options.manager):this.textureLoader=new uo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new es(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return yr(s,a,r),vi(a,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())s(h,a.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){n.load(gi.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=Ph[r.type],a=gs[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new Rt(l,o,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=Ph[r.type],l=gs[r.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,_,m;if(p&&p!==u){let f=Math.floor(d/p),w="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count,C=t.cache.get(w);C||(_=new l(a,f*p,r.count*p/h),C=new qr(_,p/h),t.cache.add(w,C)),m=new Zr(C,c,d%p/h,g)}else a===null?_=new l(r.count*c):_=new l(a,d,r.count*c),m=new Rt(_,c,g);if(r.sparse!==void 0){let f=Ph.SCALAR,w=gs[r.sparse.indices.componentType],C=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,A=new w(o[1],C,r.sparse.count*f),O=new l(o[2],v,r.sparse.count*c);a!==null&&(m=new Rt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,F=A.length;P<F;P++){let b=A[P];if(m.setX(b,O[P*c]),c>=2&&m.setY(b,O[P*c+1]),c>=3&&m.setZ(b,O[P*c+2]),c>=4&&m.setW(b,O[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Pp[d.magFilter]||Jt,h.minFilter=Pp[d.minFilter]||Vn,h.wrapS=Op[d.wrapS]||Ni,h.wrapT=Op[d.wrapT]||Ni,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==Jt,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=r.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new yn(_);m.needsUpdate=!0,d(m)}),t.load(gi.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),vi(u,o),u.userData.mimeType=o.mimeType||qv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Qr,en.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Jr,en.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Bn}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],o,a={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){let u=r[Ye.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{let u=s.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],zt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,xt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Cn);let h=s.alphaMode||Oh.OPAQUE;if(h===Oh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Oh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Un&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Un&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Un){let u=s.emissiveFactor;a.emissive=new Pe().setRGB(u[0],u[1],u[2],zt)}return s.emissiveTexture!==void 0&&o!==Un&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,xt)),Promise.all(l).then(function(){let u=new o(a);return s.name&&(u.name=s.name),vi(u,s),t.associations.set(u,{materials:e}),s.extensions&&yr(r,u,s),u})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Rp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Yv(l),u=r[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Rp(new sn,l,t),r[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Wv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let _=h[p],m=o[p],f,w=l[p];if(m.mode===En.TRIANGLES||m.mode===En.TRIANGLE_STRIP||m.mode===En.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new Zs(_,w):new Mt(_,w),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===En.TRIANGLE_STRIP?f.geometry=Ah(f.geometry,vo):m.mode===En.TRIANGLE_FAN&&(f.geometry=Ah(f.geometry,ls));else if(m.mode===En.LINES)f=new Qs(_,w);else if(m.mode===En.LINE_STRIP)f=new or(_,w);else if(m.mode===En.LINE_LOOP)f=new eo(_,w);else if(m.mode===En.POINTS)f=new to(_,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Xv(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),vi(f,s),m.extensions&&yr(r,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&yr(r,u[0],s),u[0];let d=new gn;s.extensions&&yr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wt(Mo.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new lr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),o=r,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ve;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new $s(a,c)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){let p=r.channels[u],g=r.samplers[p.sampler],_=p.target,m=_.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,w=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",w)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let w=0,C=d.length;w<C;w++){let v=d[w],A=p[w],O=g[w],P=_[w],F=m[w];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let b=n._createAnimationTracks(v,A,O,P,F);if(b)for(let M=0;M<b.length;M++)f.push(b[M])}return new oo(s,void 0,f)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Zv)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Kr:l.length>1?h=new gn:l.length===1?h=l[0]:h=new It,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),vi(h,s),s.extensions&&yr(n,h,s),s.matrix!==void 0){let u=new Ve;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!r.associations.has(h))r.associations.set(h,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let u=r.associations.get(h);r.associations.set(h,gt({},u))}return r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new gn;n.name&&(s.name=r.createUniqueName(n.name)),vi(s,n),n.extensions&&yr(t,s,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[d,p]of r.associations)(d instanceof en||d instanceof yn)&&u.set(d,p);return h.traverse(d=>{let p=r.associations.get(d);p!=null&&u.set(d,p)}),u};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){let o=[],a=e.name?e.name:e.uuid,c=[];Hi[s.path]===Hi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Hi[s.path]){case Hi.weights:l=qn;break;case Hi.rotation:l=Zn;break;case Hi.translation:case Hi.scale:l=Kn;break;default:switch(n.itemSize){case 1:l=qn;break;case 2:case 3:default:l=Kn;break}break}let h=r.interpolation!==void 0?Gv[r.interpolation]:nr,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let g=new l(c[d]+"."+Hi[s.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=nu(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof Zn?eu:Pc;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Kv(i,e,t){let n=e.attributes,r=new _n;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let h=nu(gs[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new I,c=new I;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let _=nu(gs[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;let o=new rn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Rp(i,e,t){let n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=tu[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return Ze.workingColorSpace!==zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),vi(i,e),Kv(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?jv(i,e.targets,t):i})}var $v=["canvasContainer"],Dp=(()=>{class i{constructor(t){this.platformId=t}ngAfterViewInit(){dt(this.platformId)&&setTimeout(()=>this.init(),100)}ngOnDestroy(){dt(this.platformId)&&(this.animationId&&cancelAnimationFrame(this.animationId),this.renderer&&this.renderer.dispose(),this.controls&&this.controls.dispose(),this._mouseUpHandler&&document.removeEventListener("mouseup",this._mouseUpHandler))}init(){let t=this.canvasContainer.nativeElement;this.scene=new sr,this.camera=new wt(45,t.clientWidth/t.clientHeight,.1,200),this.camera.position.set(-4,3,5),this.renderer=new fs({antialias:!0,alpha:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ns,this.renderer.outputColorSpace=xt,this.renderer.toneMapping=is,this.renderer.toneMappingExposure=1.2,t.appendChild(this.renderer.domElement),this.loadEarthModel(),this.setupControls(),this.animate(),this.handleResize()}loadEarthModel(){new _s().load("./assets/planet/scene.gltf",n=>{this.earth=n.scene,this.earth.scale.setScalar(2.8),this.earth.position.y=0,this.earth.rotation.y=0;let r=new ho(4210752,.4);this.scene.add(r);let s=new $n(16777215,1.2);s.position.set(10,10,5),s.castShadow=!0,this.scene.add(s);let o=new $n(8900331,.6);o.position.set(-10,5,-5),this.scene.add(o);let a=new mi(16777215,.5);a.position.set(5,0,10),this.scene.add(a),this.earth.traverse(c=>{if(c.isMesh){let l=c;if(l.material){let h=l.material;h.metalness=.1,h.roughness=.8,h.map&&(h.map.colorSpace=xt)}}}),this.scene.add(this.earth),console.log("Earth model loaded successfully")},n=>{console.log("Planet loading progress:",n.loaded/n.total*100+"%")},n=>{console.error("Error loading planet model:",n),this.createEarthFallback()})}createEarthFallback(){let t=new io(2.5,32,32),n=new ro({color:4286945,shininess:30,transparent:!0,opacity:.9});this.earth=new Mt(t,n),this.earth.position.y=0,this.scene.add(this.earth),console.log("Using fallback Earth sphere")}setupControls(){this.controls=new ms(this.camera,this.renderer.domElement),this.controls.autoRotate=!0,this.controls.enableZoom=!1,this.controls.maxPolarAngle=Math.PI/2,this.controls.minPolarAngle=Math.PI/2;let t=()=>{this.controls.enabled=!0},n=()=>{this.controls.reset(),this.controls.autoRotate=!0};document.addEventListener("mouseup",t),this._mouseUpHandler=t,this._mouseLeaveHandler=n}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.controls.update(),this.renderer.render(this.scene,this.camera)}handleResize(){window.addEventListener("resize",()=>{let t=this.canvasContainer.nativeElement;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(t.clientWidth,t.clientHeight)})}static{this.\u0275fac=function(n){return new(n||i)(Xe(Ut))}}static{this.\u0275cmp=St({type:i,selectors:[["app-planet-canvas"]],viewQuery:function(n,r){if(n&1&&Ht($v,7),n&2){let s;Gt(s=Wt())&&(r.canvasContainer=s.first)}},standalone:!0,features:[Ct],decls:2,vars:0,consts:[["canvasContainer",""],[1,"planet-canvas-container"]],template:function(n,r){n&1&&Je(0,"div",1,0)},styles:[".planet-canvas-container[_ngcontent-%COMP%]{width:100%;height:100%;min-height:400px;position:relative;overflow:hidden}.planet-canvas-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:block;width:100%!important;height:100%!important;max-width:100%;max-height:100%}[_nghost-%COMP%]{display:block;width:100%;height:100%}@media (max-width: 768px){.planet-canvas-container[_ngcontent-%COMP%]{min-height:300px}}"]})}}return i})();var Tn=class{constructor(e=0,t="Network Error"){this.status=e,this.text=t}};var Lp=()=>{if(!(typeof localStorage>"u"))return{get:i=>Promise.resolve(localStorage.getItem(i)),set:(i,e)=>Promise.resolve(localStorage.setItem(i,e)),remove:i=>Promise.resolve(localStorage.removeItem(i))}};var At={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Lp()};var xs=i=>i?typeof i=="string"?{publicKey:i}:i.toString()==="[object Object]"?i:{}:{};var Fp=(i,e="https://api.emailjs.com")=>{if(!i)return;let t=xs(i);At.publicKey=t.publicKey,At.blockHeadless=t.blockHeadless,At.storageProvider=t.storageProvider,At.blockList=t.blockList,At.limitRate=t.limitRate,At.origin=t.origin||e};var Oc=(n,r,...s)=>un(void 0,[n,r,...s],function*(i,e,t={}){let o=yield fetch(At.origin+i,{method:"POST",headers:t,body:e}),a=yield o.text(),c=new Tn(o.status,a);if(o.ok)return c;throw c});var Rc=(i,e,t)=>{if(!i||typeof i!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"};var Np=i=>{if(i&&i.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"};var Ic=i=>i.webdriver||!i.languages||i.languages.length===0;var Dc=()=>new Tn(451,"Unavailable For Headless Browser");var Up=(i,e)=>{if(!Array.isArray(i))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"};var Jv=i=>!i.list?.length||!i.watchVariable,Qv=(i,e)=>i instanceof FormData?i.get(e):i[e],Lc=(i,e)=>{if(Jv(i))return!1;Up(i.list,i.watchVariable);let t=Qv(e,i.watchVariable);return typeof t!="string"?!1:i.list.includes(t)};var Fc=()=>new Tn(403,"Forbidden");var kp=(i,e)=>{if(typeof i!="number"||i<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"};var eM=(i,e,t)=>un(void 0,null,function*(){let n=Number((yield t.get(i))||0);return e-Date.now()+n}),Nc=(i,e,t)=>un(void 0,null,function*(){if(!e.throttle||!t)return!1;kp(e.throttle,e.id);let n=e.id||i;return(yield eM(n,e.throttle,t))>0?!0:(yield t.set(n,Date.now().toString()),!1)});var Uc=()=>new Tn(429,"Too Many Requests");var Bp=(i,e,t,n)=>un(void 0,null,function*(){let r=xs(n),s=r.publicKey||At.publicKey,o=r.blockHeadless||At.blockHeadless,a=r.storageProvider||At.storageProvider,c=gt(gt({},At.blockList),r.blockList),l=gt(gt({},At.limitRate),r.limitRate);return o&&Ic(navigator)?Promise.reject(Dc()):(Rc(s,i,e),Np(t),t&&Lc(c,t)?Promise.reject(Fc()):(yield Nc(location.pathname,l,a))?Promise.reject(Uc()):Oc("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:i,template_id:e,template_params:t}),{"Content-type":"application/json"}))});var Vp=i=>{if(!i||i.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"};var tM=i=>typeof i=="string"?document.querySelector(i):i,zp=(i,e,t,n)=>un(void 0,null,function*(){let r=xs(n),s=r.publicKey||At.publicKey,o=r.blockHeadless||At.blockHeadless,a=At.storageProvider||r.storageProvider,c=gt(gt({},At.blockList),r.blockList),l=gt(gt({},At.limitRate),r.limitRate);if(o&&Ic(navigator))return Promise.reject(Dc());let h=tM(t);Rc(s,i,e),Vp(h);let u=new FormData(h);return Lc(c,u)?Promise.reject(Fc()):(yield Nc(location.pathname,l,a))?Promise.reject(Uc()):(u.append("lib_version","4.4.1"),u.append("service_id",i),u.append("template_id",e),u.append("user_id",s),Oc("/api/v1.0/email/send-form",u))});var Hp={init:Fp,send:Bp,sendForm:zp,EmailJSResponseStatus:Tn};var nM=["contactSection"];function iM(i,e){i&1&&(W(0,"div",27),oe(1," Name is required "),j())}function rM(i,e){i&1&&(W(0,"span"),oe(1,"Email is required"),j())}function sM(i,e){i&1&&(W(0,"span"),oe(1,"Please enter a valid email"),j())}function oM(i,e){if(i&1&&(W(0,"div",27),ut(1,rM,2,0,"span",28)(2,sM,2,0,"span",28),j()),i&2){let t,n,r=dn();fe(),We("ngIf",(t=r.contactForm.get("email"))==null||t.errors==null?null:t.errors.required),fe(),We("ngIf",(n=r.contactForm.get("email"))==null||n.errors==null?null:n.errors.email)}}function aM(i,e){i&1&&(W(0,"span"),oe(1,"Message is required"),j())}function cM(i,e){i&1&&(W(0,"span"),oe(1,"Message must be at least 10 characters"),j())}function lM(i,e){if(i&1&&(W(0,"div",27),ut(1,aM,2,0,"span",28)(2,cM,2,0,"span",28),j()),i&2){let t,n,r=dn();fe(),We("ngIf",(t=r.contactForm.get("message"))==null||t.errors==null?null:t.errors.required),fe(),We("ngIf",(n=r.contactForm.get("message"))==null||n.errors==null?null:n.errors.minlength)}}var Gp=(()=>{class i{constructor(t,n){this.fb=t,this.platformId=n,this.isFormSubmitted=!1,this.isLoading=!1,this.showSuccessPopup=!1,this.showErrorPopup=!1}ngOnInit(){this.contactForm=this.fb.group({name:["",[Ti.required]],email:["",[Ti.required,Ti.email]],message:["",[Ti.required,Ti.minLength(10)]]})}ngAfterViewInit(){dt(this.platformId)&&this.setupScrollAnimations()}setupScrollAnimations(){if(typeof IntersectionObserver>"u")return;let t=!1,n=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&!t&&(t=!0,setTimeout(()=>{this.animateElement(".introduction-section","animate-fadeInUp")},100),setTimeout(()=>{this.animateElement(".title-section","animate-slideInFromBottom")},300),setTimeout(()=>{this.animateElement(".form-section","animate-slide-left")},500),setTimeout(()=>{this.animateElement(".globe-section","animate-slide-right")},700),n.unobserve(s.target))})},{threshold:.05,rootMargin:"200px 0px -50px 0px"});this.contactSection?.nativeElement&&n.observe(this.contactSection.nativeElement)}animateElement(t,n){let r=this.contactSection.nativeElement.querySelector(t);r&&r.classList.add(n)}onSubmit(){if(this.isFormSubmitted=!0,this.contactForm.valid){this.isLoading=!0;let t="service_ajan_portfolio",n="template_en4mbbo",r="bKyL0zWrsnsjTQwfK",s={from_name:this.contactForm.value.name,from_email:this.contactForm.value.email,message:this.contactForm.value.message,to_email:"karthickajangs@gmail.com",cc_email:this.contactForm.value.email};Hp.send(t,n,s,r).then(o=>{console.log("Email sent successfully!",o.status,o.text),this.isLoading=!1,this.showSuccessPopup=!0,setTimeout(()=>{this.showSuccessPopup=!1},7e3),this.contactForm.reset(),this.isFormSubmitted=!1}).catch(o=>{console.error("Failed to send email:",o),this.isLoading=!1,this.showErrorPopup=!0,setTimeout(()=>{this.showErrorPopup=!1},7e3)})}}static{this.\u0275fac=function(n){return new(n||i)(Xe(yd),Xe(Ut))}}static{this.\u0275cmp=St({type:i,selectors:[["app-contact"]],viewQuery:function(n,r){if(n&1&&Ht(nM,5),n&2){let s;Gt(s=Wt())&&(r.contactSection=s.first)}},standalone:!0,features:[Ct],decls:55,vars:16,consts:[["contactSection",""],["id","contact",1,"contact-section"],[1,"contact-container"],[1,"introduction-section"],[1,"title-section"],[1,"contact-content"],[1,"form-section"],[1,"contact-form",3,"ngSubmit","formGroup"],[1,"form-group"],[1,"form-label"],["type","text","formControlName","name","placeholder","What's your good name?","required","",1,"form-input"],["class","error-message",4,"ngIf"],["type","email","formControlName","email","placeholder","What's your email address?","required","",1,"form-input"],["formControlName","message","placeholder","What you want to say?","rows","7","required","",1,"form-textarea"],[1,"form-submit"],["type","submit",1,"submit-btn",3,"disabled"],[1,"globe-section"],[1,"success-popup"],[1,"popup-content"],[1,"popup-icon"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"popup-text"],[1,"error-popup"],["cx","12","cy","12","r","10","stroke","#ff4d4f","stroke-width","2","fill","none"],["d","M12 8v4","stroke","#ff4d4f","stroke-width","2","stroke-linecap","round"],["cx","12","cy","16","r","1","fill","#ff4d4f"],[1,"error-message"],[4,"ngIf"]],template:function(n,r){if(n&1){let s=Cr();W(0,"section",1,0)(2,"div",2)(3,"div",3)(4,"p"),oe(5,"GET IN TOUCH"),j()(),W(6,"div",4)(7,"h2"),oe(8,"Contact."),j()(),W(9,"div",5)(10,"div",6)(11,"form",7),Pt("ngSubmit",function(){return Xi(s),Yi(r.onSubmit())}),W(12,"div",8)(13,"label",9),oe(14,"Your Name"),j(),Je(15,"input",10),ut(16,iM,2,0,"div",11),j(),W(17,"div",8)(18,"label",9),oe(19,"Your Email"),j(),Je(20,"input",12),ut(21,oM,3,2,"div",11),j(),W(22,"div",8)(23,"label",9),oe(24,"Your Message"),j(),W(25,"textarea",13),oe(26,"            "),j(),ut(27,lM,3,2,"div",11),j(),W(28,"div",14)(29,"button",15),oe(30),j()()()(),W(31,"div",16),Je(32,"app-planet-canvas"),j()(),W(33,"div",17)(34,"div",18)(35,"div",19),Gc(),W(36,"svg",20),Je(37,"path",21),j()(),Wc(),W(38,"div",22)(39,"h4"),oe(40,"Message Sent!"),j(),W(41,"p"),oe(42,"Thank you for your message. I'll get back to you soon!"),j()()()(),W(43,"div",23)(44,"div",18)(45,"div",19),Gc(),W(46,"svg",20),Je(47,"circle",24)(48,"path",25)(49,"circle",26),j()(),Wc(),W(50,"div",22)(51,"h4"),oe(52,"Message Not Sent"),j(),W(53,"p"),oe(54,"It looks like your office network (VPN) is blocking the request. Please try again from a personal device or network."),j()()()()()()}if(n&2){let s,o,a,c,l,h;fe(11),We("formGroup",r.contactForm),fe(4),ct("error",((s=r.contactForm.get("name"))==null?null:s.invalid)&&r.isFormSubmitted),fe(),We("ngIf",((o=r.contactForm.get("name"))==null?null:o.invalid)&&r.isFormSubmitted),fe(4),ct("error",((a=r.contactForm.get("email"))==null?null:a.invalid)&&r.isFormSubmitted),fe(),We("ngIf",((c=r.contactForm.get("email"))==null?null:c.invalid)&&r.isFormSubmitted),fe(4),ct("error",((l=r.contactForm.get("message"))==null?null:l.invalid)&&r.isFormSubmitted),fe(2),We("ngIf",((h=r.contactForm.get("message"))==null?null:h.invalid)&&r.isFormSubmitted),fe(2),We("disabled",r.isLoading),fe(),Gn(" ",r.isLoading?"Sending...":"Send"," "),fe(3),ct("show",r.showSuccessPopup),fe(10),ct("show",r.showErrorPopup)}},dependencies:[kt,Ci,vd,_d,ko,ud,dd,rl,nl,il,Dp],styles:['.contact-section[_ngcontent-%COMP%]{background-color:#050816;color:#fff;padding:64px 64px 32px;min-height:100vh;position:relative;overflow:hidden}.contact-section[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:#050816d9;background-image:radial-gradient(2px 2px at 23% 67%,rgb(255,255,255),transparent),radial-gradient(1px 1px at 89% 23%,rgba(255,255,255,.8),transparent),radial-gradient(3px 3px at 45% 78%,rgba(255,255,255,.6),transparent),radial-gradient(1px 1px at 67% 45%,rgb(255,255,255),transparent),radial-gradient(2px 2px at 12% 34%,rgba(255,255,255,.9),transparent),radial-gradient(1px 1px at 78% 15%,rgba(255,255,255,.7),transparent),radial-gradient(2px 2px at 34% 89%,rgba(255,255,255,.8),transparent),radial-gradient(1px 1px at 91% 56%,rgb(255,255,255),transparent),radial-gradient(3px 3px at 15% 45%,rgba(255,255,255,.5),transparent),radial-gradient(1px 1px at 56% 12%,rgba(255,255,255,.9),transparent);background-repeat:repeat;background-size:400px 300px,600px 400px,800px 500px;animation:_ngcontent-%COMP%_floatParticles1 120s linear infinite;z-index:0}.contact-section[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-image:radial-gradient(1px 1px at 78% 12%,rgb(255,255,255),transparent),radial-gradient(2px 2px at 34% 89%,rgba(255,255,255,.7),transparent),radial-gradient(1px 1px at 56% 34%,rgb(255,255,255),transparent),radial-gradient(3px 3px at 90% 67%,rgba(255,255,255,.5),transparent),radial-gradient(1px 1px at 25% 78%,rgba(255,255,255,.9),transparent),radial-gradient(2px 2px at 67% 23%,rgba(255,255,255,.8),transparent),radial-gradient(1px 1px at 12% 45%,rgb(255,255,255),transparent),radial-gradient(2px 2px at 89% 34%,rgba(255,255,255,.6),transparent);background-repeat:repeat;background-size:500px 350px,700px 450px;animation:_ngcontent-%COMP%_floatParticles2 100s linear infinite reverse;opacity:.8;z-index:0}.contact-section[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-image:radial-gradient(1px 1px at 15% 85%,rgba(255,255,255,.8),transparent),radial-gradient(2px 2px at 85% 15%,rgba(255,255,255,.6),transparent),radial-gradient(1px 1px at 50% 50%,rgb(255,255,255),transparent),radial-gradient(3px 3px at 25% 25%,rgba(255,255,255,.5),transparent),radial-gradient(1px 1px at 75% 75%,rgba(255,255,255,.9),transparent),radial-gradient(2px 2px at 35% 67%,rgba(255,255,255,.7),transparent),radial-gradient(1px 1px at 82% 45%,rgb(255,255,255),transparent),radial-gradient(2px 2px at 18% 32%,rgba(255,255,255,.8),transparent),radial-gradient(1px 1px at 67% 18%,rgba(255,255,255,.6),transparent),radial-gradient(3px 3px at 45% 82%,rgb(255,255,255),transparent);background-repeat:repeat;background-size:600px 400px,900px 600px;animation:_ngcontent-%COMP%_floatParticles3 150s ease-in-out infinite;opacity:.5;z-index:0;pointer-events:none}.contact-section[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;z-index:2}.contact-section[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]{max-width:80rem;margin:0 auto;padding:0 20px}.contact-section[_ngcontent-%COMP%]   .introduction-section[_ngcontent-%COMP%]{text-align:center;margin-bottom:8px;opacity:0;transform:translateY(30px);transition:all .8s ease}.contact-section[_ngcontent-%COMP%]   .introduction-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#aaa6c3;font-weight:500;font-size:18px;text-transform:uppercase;letter-spacing:.15em;margin:0;line-height:1.5}.contact-section[_ngcontent-%COMP%]   .introduction-section.animate-fadeInUp[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.contact-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]{text-align:center;margin-bottom:60px;opacity:0;transform:translateY(30px);transition:all .8s ease .2s}.contact-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:3.75rem;font-weight:900;background:linear-gradient(90deg,#915eff,#00bfff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-align:center;line-height:1.5}.contact-section[_ngcontent-%COMP%]   .title-section.animate-slideInFromBottom[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.contact-section[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]{display:flex;gap:40px;margin-top:40px;align-items:flex-start}@media (max-width: 1200px){.contact-section[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]{flex-direction:column-reverse;gap:30px}}@media (max-width: 968px){.contact-section[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]{gap:40px}}.contact-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{flex:.75;background-color:#100d25;padding:32px;border-radius:16px;opacity:0;transform:translate(-50px);transition:all .8s ease}.contact-section[_ngcontent-%COMP%]   .form-section.animate-slide-left[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}@media (max-width: 768px){.contact-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{width:-webkit-fill-available}}@media (max-width: 1200px){.contact-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{flex:1;order:2}}@media (max-width: 480px){.contact-section[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{padding:24px}}.contact-section[_ngcontent-%COMP%]   .globe-section[_ngcontent-%COMP%]{flex:1;height:650px;display:flex;align-items:center;justify-content:center;position:relative;opacity:0;transform:translate(50px);transition:all .8s ease}.contact-section[_ngcontent-%COMP%]   .globe-section.animate-slide-right[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}.contact-section[_ngcontent-%COMP%]   .globe-section[_ngcontent-%COMP%]   app-planet-canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}@media (max-width: 1200px){.contact-section[_ngcontent-%COMP%]   .globe-section[_ngcontent-%COMP%]{display:none}}@media (max-width: 768px){.contact-section[_ngcontent-%COMP%]   .globe-section[_ngcontent-%COMP%]{display:none}}@media (max-width: 480px){.contact-section[_ngcontent-%COMP%]   .globe-section[_ngcontent-%COMP%]{display:none}}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:32px}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{color:#fff;font-weight:500;font-size:16px;margin-bottom:0}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], .contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]{background-color:#151030;color:#fff;padding:16px 24px;border-radius:8px;border:2px solid transparent;outline:none;font-family:inherit;font-weight:500;transition:all .3s ease}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder, .contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder{color:#aaa6c3}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, .contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus{border-color:#915eff;box-shadow:0 0 0 2px #915eff33}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%], .contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea.error[_ngcontent-%COMP%]{border-color:#ef4444;box-shadow:0 0 0 2px #ef444433}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#ef4444;font-size:14px;margin-top:4px;font-weight:500}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]{resize:vertical;min-height:120px;font-family:inherit}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-submit[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#915eff,#7c3aed);color:#fff;padding:16px 40px;border-radius:12px;border:none;font-weight:700;font-size:16px;cursor:pointer;width:fit-content;box-shadow:0 20px 40px -15px #915eff66;transition:all .3s ease;text-transform:uppercase;letter-spacing:.5px;will-change:transform;transform:translateZ(0)}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-submit[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:linear-gradient(135deg,#a855f7,#8b5cf6);transform:translateY(-3px) translateZ(0);box-shadow:0 25px 50px -15px #915eff99}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-submit[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:active:not(:disabled){transform:translateY(-1px)}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-submit[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:disabled{background:#4a5568;opacity:.6;cursor:not-allowed;transform:none;box-shadow:0 10px 20px -15px #4a55684d}.contact-section.animate-section[_ngcontent-%COMP%]   .section-subtitle.animate-fadeInUp[_ngcontent-%COMP%], .contact-section.animate-section[_ngcontent-%COMP%]   .section-title.animate-fadeInUp[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.contact-section.animate-section[_ngcontent-%COMP%]   .form-section.animate-slideInFromLeft[_ngcontent-%COMP%], .contact-section.animate-section[_ngcontent-%COMP%]   .globe-section.animate-slideInFromRight[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}.contact-section[_ngcontent-%COMP%]   .success-popup[_ngcontent-%COMP%]{position:fixed;top:100px;right:30px;z-index:9999;opacity:0;transform:translate(100%) scale(.8);transition:all .4s cubic-bezier(.68,-.55,.265,1.55);pointer-events:none}.contact-section[_ngcontent-%COMP%]   .success-popup.show[_ngcontent-%COMP%]{opacity:1;transform:translate(0) scale(1);pointer-events:auto}.contact-section[_ngcontent-%COMP%]   .success-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]{background:linear-gradient(135deg,#915eff,#7c3aed);color:#fff;padding:20px 24px;border-radius:16px;box-shadow:0 20px 40px #915eff66,0 8px 16px #0003;display:flex;align-items:center;gap:16px;min-width:320px;max-width:400px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1)}.contact-section[_ngcontent-%COMP%]   .success-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-icon[_ngcontent-%COMP%]{background:#ffffff26;border-radius:50%;width:48px;height:48px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.contact-section[_ngcontent-%COMP%]   .success-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#fff;width:28px;height:28px}.contact-section[_ngcontent-%COMP%]   .success-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 4px;font-size:16px;font-weight:600;color:#fff}.contact-section[_ngcontent-%COMP%]   .success-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;color:#ffffffe6;line-height:1.4}@media (max-width: 480px){.contact-section[_ngcontent-%COMP%]   .success-popup[_ngcontent-%COMP%]{top:20px;right:20px;left:20px}.contact-section[_ngcontent-%COMP%]   .success-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]{min-width:auto;padding:16px 20px}}.contact-section[_ngcontent-%COMP%]   .error-popup[_ngcontent-%COMP%]{position:fixed;top:100px;right:30px;z-index:9999;opacity:0;transform:translate(100%) scale(.8);transition:all .4s cubic-bezier(.68,-.55,.265,1.55);pointer-events:none}.contact-section[_ngcontent-%COMP%]   .error-popup.show[_ngcontent-%COMP%]{opacity:1;transform:translate(0) scale(1);pointer-events:auto}.contact-section[_ngcontent-%COMP%]   .error-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]{background:#ff2d2f;color:#fff;padding:20px 24px;border-radius:16px;box-shadow:0 8px 32px #0000002e;display:flex;align-items:center;gap:16px;min-width:320px;max-width:400px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.08)}.contact-section[_ngcontent-%COMP%]   .error-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-icon[_ngcontent-%COMP%]{background:#fff;border-radius:50%;width:48px;height:48px;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 2px 8px #0000001a}.contact-section[_ngcontent-%COMP%]   .error-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#ff2d2f;width:28px;height:28px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.1))}.contact-section[_ngcontent-%COMP%]   .error-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 4px;font-size:18px;font-weight:800;color:#fff;letter-spacing:.01em}.contact-section[_ngcontent-%COMP%]   .error-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:15px;color:#fff;opacity:.98;line-height:1.5;font-weight:500}@media (max-width: 480px){.contact-section[_ngcontent-%COMP%]   .error-popup[_ngcontent-%COMP%]{top:20px;right:20px;left:20px}.contact-section[_ngcontent-%COMP%]   .error-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]{min-width:auto;padding:16px 20px}}@media (max-width: 768px){.contact-section[_ngcontent-%COMP%]{padding:80px 0}.contact-section[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]{padding:0 16px}.contact-section[_ngcontent-%COMP%]   .introduction-section[_ngcontent-%COMP%]{margin-bottom:20px}.contact-section[_ngcontent-%COMP%]   .introduction-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.contact-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]{text-align:center}.contact-section[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.4rem}.contact-section[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]{margin-top:32px}}@media (max-width: 480px){.contact-section[_ngcontent-%COMP%]{padding:60px 0 0}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]{gap:24px}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{gap:12px}.contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], .contact-section[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]{padding:14px 20px;font-size:15px}}@keyframes _ngcontent-%COMP%_floatParticles1{0%{transform:translate(0) translateY(0) scale(1);opacity:.7}25%{transform:translate(-100px) translateY(-50px) scale(1.1);opacity:.9}50%{transform:translate(-200px) translateY(30px) scale(.9);opacity:.6}75%{transform:translate(-300px) translateY(-20px) scale(1.05);opacity:.8}to{transform:translate(-400px) translateY(0) scale(1);opacity:.7}}@keyframes _ngcontent-%COMP%_floatParticles2{0%{transform:translate(0) translateY(0) rotate(0);opacity:.5}20%{transform:translate(120px) translateY(-40px) rotate(72deg);opacity:.8}40%{transform:translate(240px) translateY(60px) rotate(144deg);opacity:.4}60%{transform:translate(360px) translateY(-30px) rotate(216deg);opacity:.9}80%{transform:translate(480px) translateY(20px) rotate(288deg);opacity:.6}to{transform:translate(600px) translateY(0) rotate(360deg);opacity:.5}}@keyframes _ngcontent-%COMP%_floatParticles3{0%{transform:translateY(0) scale(1) rotate(0);opacity:.4}15%{transform:translateY(-30px) scale(1.2) rotate(54deg);opacity:.7}30%{transform:translateY(20px) scale(.8) rotate(108deg);opacity:.3}45%{transform:translateY(-50px) scale(1.1) rotate(162deg);opacity:.8}60%{transform:translateY(40px) scale(.9) rotate(216deg);opacity:.5}75%{transform:translateY(-20px) scale(1.15) rotate(270deg);opacity:.9}90%{transform:translateY(10px) scale(.85) rotate(324deg);opacity:.6}to{transform:translateY(0) scale(1) rotate(360deg);opacity:.4}}']})}}return i})();var hM=["canvasContainer"];function uM(i,e){if(i&1&&(W(0,"div",4)(1,"div",5),Je(2,"div",6),W(3,"p",7),oe(4,"Loading..."),j(),W(5,"p",8),oe(6),j()()()),i&2){let t=dn();fe(6),Gn("",t.loadingProgress,"%")}}function dM(i,e){i&1&&(W(0,"div",9)(1,"div",10),Je(2,"div",11),j()())}var Wp=(()=>{class i{constructor(t){this.platformId=t,this.isMobile=!1,this.isLoading=!0,this.loadingProgress=0}ngAfterViewInit(){dt(this.platformId)&&(this.checkMobile(),this.startFakeProgress(),setTimeout(()=>this.init(),100))}checkMobile(){let t=window.matchMedia("(max-width: 500px)");this.isMobile=t.matches;let n=r=>{this.isMobile=r.matches,this.updateCameraForMobile()};t.addEventListener("change",n)}startFakeProgress(){this.loadingProgress=0,this.progressInterval=setInterval(()=>{if(this.loadingProgress<90){let t=Math.max(1,Math.floor((90-this.loadingProgress)/10));this.loadingProgress=Math.min(this.loadingProgress+t,90)}},100)}completeProgress(){this.progressInterval&&clearInterval(this.progressInterval),this.loadingProgress=100}init(){let t=this.canvasContainer.nativeElement;this.scene=new sr,this.camera=new wt(this.isMobile?35:18,t.clientWidth/t.clientHeight,.1,1e3),this.isMobile?this.camera.position.set(0,0,14):this.camera.position.set(20,5,5),this.renderer=new fs({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setClearColor(0,0),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ns,this.renderer.outputColorSpace=xt,this.renderer.toneMapping=is,this.renderer.toneMappingExposure=1.5,t.appendChild(this.renderer.domElement),this.loadComputerModel(),this.setupLighting(),this.setupControls(),this.animate(),this.handleResize()}loadComputerModel(){new _s().load("./assets/desktop_pc/scene.gltf",n=>{this.computer=n.scene,this.isMobile?(this.computer.scale.setScalar(.75),this.computer.position.set(0,-2.5,0),this.computer.rotation.set(0,0,0)):(this.computer.scale.setScalar(.75),this.computer.position.set(0,-2.25,-1.5),this.computer.rotation.set(-.01,-.2,-.1)),this.computer.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0,r.material&&(Array.isArray(r.material)?r.material.forEach(s=>{(s.isMeshStandardMaterial||s.isMeshPhysicalMaterial)&&(s.envMapIntensity=1.5,s.metalness=Math.min(s.metalness*1.2,1),s.roughness=Math.max(s.roughness*.8,.1))}):(r.material.isMeshStandardMaterial||r.material.isMeshPhysicalMaterial)&&(r.material.envMapIntensity=1.5,r.material.metalness=Math.min(r.material.metalness*1.2,1),r.material.roughness=Math.max(r.material.roughness*.8,.1))))}),this.scene.add(this.computer),this.completeProgress(),setTimeout(()=>{this.isLoading=!1},300)},void 0,n=>{console.error("Error loading GLTF model:",n),this.completeProgress(),this.isLoading=!1,this.createFallbackLaptop()})}createFallbackLaptop(){this.computer=new gn;let t=new ui(4,2.5,.1),n=new Bn({color:1710618}),r=new Mt(t,n);r.position.y=1.25,r.rotation.x=-.1,r.castShadow=!0;let s=new ui(4,.2,2.8),o=new Bn({color:2763306}),a=new Mt(s,o);a.position.y=-.1,a.castShadow=!0,this.computer.add(r,a),this.computer.scale.setScalar(1.5),this.computer.position.y=-1,this.scene.add(this.computer)}setupLighting(){let t=new co(16777215,4473924,.6);this.scene.add(t);let n=new cr(16777215,3);n.position.set(-20,50,10),n.angle=.12,n.penumbra=1,n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,this.scene.add(n);let r=new mi(16777215,2);this.scene.add(r);let s=new $n(16777215,1.5);s.position.set(10,10,5),s.castShadow=!0,this.scene.add(s);let o=new ar(100,100),a=new Bn({color:0,transparent:!0,opacity:.1}),c=new Mt(o,a);c.rotation.x=-Math.PI/2,c.position.y=-4,c.receiveShadow=!0,this.scene.add(c)}setupControls(){this.isMobile||(this.controls=new ms(this.camera,this.renderer.domElement),this.controls.enableZoom=!1,this.controls.maxPolarAngle=Math.PI/2,this.controls.minPolarAngle=Math.PI/2,this.controls.autoRotate=!0,this.controls.enableDamping=!0)}updateCameraForMobile(){this.camera&&(this.isMobile?(this.camera.fov=50,this.camera.position.set(0,0,20)):(this.camera.fov=25,this.camera.position.set(20,3,5)),this.camera.updateProjectionMatrix())}animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.computer&&this.isMobile&&(this.computer.rotation.y+=.01),this.controls&&this.controls.update(),this.renderer.render(this.scene,this.camera)}handleResize(){window.addEventListener("resize",()=>{let t=this.canvasContainer.nativeElement;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(t.clientWidth,t.clientHeight)})}ngOnDestroy(){dt(this.platformId)&&(this.animationId&&cancelAnimationFrame(this.animationId),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.dispose())}static{this.\u0275fac=function(n){return new(n||i)(Xe(Ut))}}static{this.\u0275cmp=St({type:i,selectors:[["app-computer-canvas"]],viewQuery:function(n,r){if(n&1&&Ht(hM,7),n&2){let s;Gt(s=Wt())&&(r.canvasContainer=s.first)}},standalone:!0,features:[Ct],decls:4,vars:2,consts:[["canvasContainer",""],[1,"computer-canvas-container"],["class","loader-overlay",4,"ngIf"],["class","scroll-indicator",4,"ngIf"],[1,"loader-overlay"],[1,"loader-content"],[1,"loader-spinner"],[1,"loader-text"],[1,"loader-progress"],[1,"scroll-indicator"],[1,"mouse-icon"],[1,"scroll-dot"]],template:function(n,r){n&1&&(W(0,"div",1,0),ut(2,uM,7,1,"div",2)(3,dM,3,0,"div",3),j()),n&2&&(fe(2),We("ngIf",r.isLoading),fe(),We("ngIf",!r.isLoading))},dependencies:[kt,Ci],styles:['.computer-canvas-container[_ngcontent-%COMP%]{width:100%;height:100%;min-height:600px;background:transparent;position:relative;display:block;overflow:hidden;margin:0;padding:0;top:0}.computer-canvas-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;display:block!important;margin:0!important;padding:0!important;position:absolute!important;top:0!important;left:0!important;background:transparent!important}.computer-canvas-container[_ngcontent-%COMP%]   .loader-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:transparent;z-index:10;transition:opacity .5s ease}.computer-canvas-container[_ngcontent-%COMP%]   .loader-overlay[_ngcontent-%COMP%]   .loader-content[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;align-items:center}.computer-canvas-container[_ngcontent-%COMP%]   .loader-overlay[_ngcontent-%COMP%]   .loader-content[_ngcontent-%COMP%]   .loader-spinner[_ngcontent-%COMP%]{width:50px;aspect-ratio:1;display:grid;border:4px solid transparent;border-radius:50%;border-right-color:#915eff;animation:_ngcontent-%COMP%_spin 1s infinite linear;margin-bottom:16px}.computer-canvas-container[_ngcontent-%COMP%]   .loader-overlay[_ngcontent-%COMP%]   .loader-content[_ngcontent-%COMP%]   .loader-spinner[_ngcontent-%COMP%]:before, .computer-canvas-container[_ngcontent-%COMP%]   .loader-overlay[_ngcontent-%COMP%]   .loader-content[_ngcontent-%COMP%]   .loader-spinner[_ngcontent-%COMP%]:after{content:"";grid-area:1/1;margin:2px;border:inherit;border-radius:50%;animation:_ngcontent-%COMP%_spin 2s infinite}.computer-canvas-container[_ngcontent-%COMP%]   .loader-overlay[_ngcontent-%COMP%]   .loader-content[_ngcontent-%COMP%]   .loader-spinner[_ngcontent-%COMP%]:after{margin:8px;animation-duration:3s}.computer-canvas-container[_ngcontent-%COMP%]   .loader-overlay[_ngcontent-%COMP%]   .loader-content[_ngcontent-%COMP%]   .loader-text[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#fff;margin:0 0 8px;font-family:Poppins,sans-serif}.computer-canvas-container[_ngcontent-%COMP%]   .loader-overlay[_ngcontent-%COMP%]   .loader-content[_ngcontent-%COMP%]   .loader-progress[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#fff;margin:0;font-family:Poppins,sans-serif}.computer-canvas-container[_ngcontent-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]{position:absolute;bottom:40px;left:50%;transform:translate(-50%);z-index:10;display:flex;justify-content:center;align-items:center}.computer-canvas-container[_ngcontent-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]   .mouse-icon[_ngcontent-%COMP%]{width:35px;height:64px;border-radius:24px;border:4px solid #aaa6c3;display:flex;justify-content:center;align-items:flex-start;padding:8px}.computer-canvas-container[_ngcontent-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]   .mouse-icon[_ngcontent-%COMP%]   .scroll-dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background:#aaa6c3;animation:_ngcontent-%COMP%_scrollBounce 1.5s ease-in-out infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(1turn)}}@keyframes _ngcontent-%COMP%_scrollBounce{0%,to{transform:translateY(0)}50%{transform:translateY(24px)}}@media (max-width: 768px){.computer-canvas-container[_ngcontent-%COMP%]{min-height:400px}.computer-canvas-container[_ngcontent-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]{bottom:20px}.computer-canvas-container[_ngcontent-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]   .mouse-icon[_ngcontent-%COMP%]{width:28px;height:50px;border-width:3px}.computer-canvas-container[_ngcontent-%COMP%]   .scroll-indicator[_ngcontent-%COMP%]   .mouse-icon[_ngcontent-%COMP%]   .scroll-dot[_ngcontent-%COMP%]{width:8px;height:8px}}[_nghost-%COMP%]{display:block}']})}}return i})();var jp=(()=>{class i{constructor(){this.title="Portfolio - Complete Structure"}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=St({type:i,selectors:[["app-root"]],standalone:!0,features:[Ct],decls:11,vars:0,consts:[[1,"hero-canvas-wrapper"]],template:function(n,r){n&1&&(Je(0,"app-header"),W(1,"main")(2,"section",0),Je(3,"app-hero")(4,"app-computer-canvas"),j(),Je(5,"app-about")(6,"app-education")(7,"app-experience")(8,"app-skills")(9,"app-projects")(10,"app-contact"),j())},dependencies:[Du,Lu,Fu,Uu,ku,Bu,Vu,Gp,Wp],styles:['.section-placeholder[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f8fafc;border-bottom:1px solid #e2e8f0}.section-placeholder[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 2rem;text-align:center}.section-placeholder[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#1a1a1a;margin:0;font-weight:600}.section-placeholder[_ngcontent-%COMP%]:nth-child(2n){background:#fff}.hero-canvas-wrapper[_ngcontent-%COMP%]{width:100%;position:relative;display:flex;flex-direction:column;margin-top:-70px;padding-top:70px;background:#050816;background-image:url("./media/herobg-2EADROGU.png");background-repeat:no-repeat;background-size:cover;background-position:center}.hero-canvas-wrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:#05081633;z-index:1;pointer-events:none}.hero-canvas-wrapper[_ngcontent-%COMP%]   app-hero[_ngcontent-%COMP%], .hero-canvas-wrapper[_ngcontent-%COMP%]   app-computer-canvas[_ngcontent-%COMP%]{position:relative;z-index:2}.hero-canvas-wrapper[_ngcontent-%COMP%]   app-computer-canvas[_ngcontent-%COMP%]{min-height:600px;margin-top:-230px}@media (max-width: 768px){.hero-canvas-wrapper[_ngcontent-%COMP%]   app-computer-canvas[_ngcontent-%COMP%]{min-height:350px;margin-top:-30px}}main[_ngcontent-%COMP%]{padding-top:70px}']})}}return i})();var fM="@",pM=(()=>{class i{constructor(t,n,r,s,o){this.doc=t,this.delegate=n,this.zone=r,this.animationType=s,this.moduleImpl=o,this._rendererFactoryPromise=null,this.scheduler=zc(xu,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-DL72VBJJ.mjs")).catch(n=>{throw new Mr(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let s=new r(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,n){let r=this.delegate.createRenderer(t,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new ru(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let a=o.createRenderer(t,n);s.use(a)}).catch(o=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(n){_u()}}static{this.\u0275prov=br({token:i,factory:i.\u0275fac})}}return i})(),ru=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,r){this.delegate.insertBefore(e,t,n,r)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,n)),this.delegate.listen(e,t,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(fM)}};function Xp(i="animations"){return vu("NgAsyncAnimations"),pu([{provide:yu,useFactory:(e,t,n)=>new pM(e,t,n,i),deps:[Tu,Au,Mu]},{provide:mu,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Yp={providers:[Xp()]};var mM={providers:[Iu()]},qp=Eu(Yp,mM);var gM=()=>Pu(jp,qp),NE=gM;export{NE as a};
