"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5281],{5281:function(e,a,n){n.r(a),n(3696);var t=n(1445);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(null,arguments)}function o(e){let{components:a,...n}=e;return(0,t.yg)("wrapper",p({components:a},n),(0,t.yg)("p",null,"Generate Chrome profile file which includes timings of plugins execution. Outputs ",(0,t.yg)("inlineCode",{parentName:"p"},"events.json")," file by default. It is possible to provide custom file path using ",(0,t.yg)("inlineCode",{parentName:"p"},"outputPath")," option."),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Note : ProfilingPlugin accepts only absolute paths.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"options",parentName:"h2"}),"Options",(0,t.yg)("a",{href:"#options","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"outputPath"),": An absolute path to a custom output file (json)")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"usage-default",parentName:"h2"}),"Usage: default",(0,t.yg)("a",{href:"#usage-default","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-js",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},"."),"debug",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},"."),"ProfilingPlugin"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"usage-custom-outputpath",parentName:"h2"}),"Usage: custom ",(0,t.yg)("inlineCode",{parentName:"h2"},"outputPath"),(0,t.yg)("a",{href:"#usage-custom-outputpath","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-js",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},"."),"debug",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},"."),"ProfilingPlugin"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  outputPath",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," path",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"join"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'profiling/profileEvents.json'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("p",null,"In order to view the profile file:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Run webpack with ",(0,t.yg)("inlineCode",{parentName:"li"},"ProfilingPlugin"),"."),(0,t.yg)("li",{parentName:"ol"},"Go to Chrome, open DevTools, and go to the ",(0,t.yg)("inlineCode",{parentName:"li"},"Performance")," tab (formerly ",(0,t.yg)("inlineCode",{parentName:"li"},"Timeline"),")."),(0,t.yg)("li",{parentName:"ol"},"Drag and drop generated file (",(0,t.yg)("inlineCode",{parentName:"li"},"events.json")," by default) into the profiler.")),(0,t.yg)("p",null,"It will then display timeline stats and calls per plugin!"))}o.isMDXComponent=!0,a.default=o}}]);