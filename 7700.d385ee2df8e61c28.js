"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7700],{7700:function(e,a,t){t.r(a),t(3696);var n=t(1445);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(null,arguments)}function l(e){let{components:a,...t}=e;return(0,n.yg)("wrapper",o({components:a},t),(0,n.yg)("p",null,"When contributing to the core repo, writing a loader/plugin, or even working on a complex project, debugging tools can be central to your workflow. Whether the problem is slow performance on a large project or an unhelpful traceback, the following utilities can make figuring it out less painful."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("a",{href:"/api/stats",parentName:"li"},(0,n.yg)("inlineCode",{parentName:"a"},"stats")," data")," made available through ",(0,n.yg)("a",{href:"/api/node/#stats-object",parentName:"li"},"Node")," and the ",(0,n.yg)("a",{href:"/api/cli/#common-options",parentName:"li"},"CLI"),"."),(0,n.yg)("li",{parentName:"ul"},"Chrome ",(0,n.yg)("strong",{parentName:"li"},"DevTools")," and the latest Node.js version.")),(0,n.yg)("h2",null,(0,n.yg)("span",{id:"stats",parentName:"h2"}),"Stats",(0,n.yg)("a",{href:"#stats","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.yg)("span",{className:"header-link",parentName:"a"}))),(0,n.yg)("p",null,"Whether you want to sift through ",(0,n.yg)("a",{href:"/api/stats",parentName:"p"},"this data")," manually or use a tool to process it, the ",(0,n.yg)("inlineCode",{parentName:"p"},"stats")," data can be extremely useful when debugging build issues. We won't go in depth here as there's an ",(0,n.yg)("a",{href:"/api/stats",parentName:"p"},"entire page")," dedicated to its contents, but know that you can use it to find the following information:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The contents of every module."),(0,n.yg)("li",{parentName:"ul"},"The modules contained within every chunk."),(0,n.yg)("li",{parentName:"ul"},"Per module compilation and resolving stats."),(0,n.yg)("li",{parentName:"ul"},"Build errors and warnings."),(0,n.yg)("li",{parentName:"ul"},"The relationships between modules."),(0,n.yg)("li",{parentName:"ul"},"And much more...")),(0,n.yg)("p",null,"On top of that, the official ",(0,n.yg)("a",{href:"https://github.com/webpack/analyse",parentName:"p"},"analyze tool")," and ",(0,n.yg)("a",{href:"/guides/code-splitting/#bundle-analysis",parentName:"p"},"various others")," will accept this data and visualize it in various ways."),(0,n.yg)("h2",null,(0,n.yg)("span",{id:"devtools",parentName:"h2"}),"DevTools",(0,n.yg)("a",{href:"#devtools","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.yg)("span",{className:"header-link",parentName:"a"}))),(0,n.yg)("p",null,"While ",(0,n.yg)("a",{href:"https://nodejs.org/api/console.html",parentName:"p"},(0,n.yg)("inlineCode",{parentName:"a"},"console"))," statements may work well in straightforward scenarios, sometimes a more robust solution is needed. As most front-end developers already know, Chrome DevTools are a life saver when debugging web applications, ",(0,n.yg)("em",{parentName:"p"},"but they don’t have to stop there"),". As of Node v6.3.0+, developers can use the built-in ",(0,n.yg)("inlineCode",{parentName:"p"},"--inspect")," flag to debug a node program in DevTools."),(0,n.yg)("p",null,"Let's start by invoking webpack with the ",(0,n.yg)("inlineCode",{parentName:"p"},"node --inspect"),"."),(0,n.yg)("p",null,"Note that we cannot run npm ",(0,n.yg)("inlineCode",{parentName:"p"},"scripts"),", e.g. ",(0,n.yg)("inlineCode",{parentName:"p"},"npm run build"),", so we'll have to specify the full ",(0,n.yg)("inlineCode",{parentName:"p"},"node_modules")," path:"),(0,n.yg)("pre",null,(0,n.yg)("code",{className:"hljs language-bash",parentName:"pre"},"node --inspect ./node_modules/webpack/bin/webpack.js")),(0,n.yg)("p",null,"Which should output something like:"),(0,n.yg)("pre",null,(0,n.yg)("code",{className:"hljs language-bash",parentName:"pre"},"Debugger listening on ws://127.0.0.1:9229/c624201a-250f-416e-a018-300bbec7be2c\nFor ",(0,n.yg)("span",{className:"token builtin class-name",parentName:"code"},"help")," see https://nodejs.org/en/docs/inspector")),(0,n.yg)("p",null,"Now jump to ",(0,n.yg)("inlineCode",{parentName:"p"},"chrome://inspect")," in the browser and you should see any active scripts you've inspected under the ",(0,n.yg)("em",{parentName:"p"},"Remote Target"),' header. Click the "inspect" link under each script to open a dedicated debugger or the ',(0,n.yg)("em",{parentName:"p"},"Open dedicated DevTools for Node")," link for a session that will connect automatically. You can also check out the ",(0,n.yg)("a",{href:"https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj",parentName:"p"},"NiM extension"),", a handy Chrome plugin that will automatically open a DevTools tab every time you ",(0,n.yg)("inlineCode",{parentName:"p"},"--inspect")," a script."),(0,n.yg)("p",null,"We recommend using the ",(0,n.yg)("inlineCode",{parentName:"p"},"--inspect-brk")," flag which will break on the first statement of the script allowing you to go through the source to set breakpoints and start/stop the build as you please. Also, don't forget that you can still pass arguments to the script. For example, if you have multiple configuration files you could pass ",(0,n.yg)("inlineCode",{parentName:"p"},"--config webpack.prod.js")," to specify the configuration you'd like to debug."))}l.isMDXComponent=!0,a.default=l}}]);