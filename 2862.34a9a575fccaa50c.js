"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2862],{2862:function(e,a,n){n.r(a),n(3696);var t=n(1445);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(null,arguments)}function p(e){let{components:a,...n}=e;return(0,t.yg)("wrapper",o({components:a},n),(0,t.yg)("p",null,"In the past, one of webpack’s trade-offs when bundling was that each module in your bundle would be wrapped in individual function closures. These wrapper functions made it slower for your JavaScript to execute in the browser. In comparison, tools like Closure Compiler and RollupJS ‘hoist’ or concatenate the scope of all your modules into one closure and allow for your code to have a faster execution time in the browser."),(0,t.yg)("p",null,"This plugin will enable the same concatenation behavior in webpack. By default this plugin is already enabled in ",(0,t.yg)("a",{href:"/configuration/mode/#mode-production",parentName:"p"},"production ",(0,t.yg)("inlineCode",{parentName:"a"},"mode"))," and disabled otherwise. If you need to override the production ",(0,t.yg)("inlineCode",{parentName:"p"},"mode")," optimization, set the ",(0,t.yg)("a",{href:"/configuration/optimization/#optimizationconcatenatemodules",parentName:"p"},(0,t.yg)("inlineCode",{parentName:"a"},"optimization.concatenateModules")," option")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),". To enable concatenation behavior in other modes, you can add ",(0,t.yg)("inlineCode",{parentName:"p"},"ModuleConcatenationPlugin")," manually or use the ",(0,t.yg)("inlineCode",{parentName:"p"},"optimization.concatenateModules")," option:"),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-js",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},"."),"optimize",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},"."),"ModuleConcatenationPlugin"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"This concatenation behavior is called “scope hoisting.”"),(0,t.yg)("p",{parentName:"blockquote"},"Scope hoisting is specifically a feature made possible by ECMAScript Module syntax. Because of this webpack may fallback to normal bundling based on what kind of modules you are using, and ",(0,t.yg)("a",{href:"https://medium.com/webpack/webpack-freelancing-log-book-week-5-7-4764be3266f5",parentName:"p"},"other conditions"),".")),(0,t.yg)("aside",{className:"warning"},(0,t.yg)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.yg)("p",{parentName:"aside"},"Keep in mind that this plugin will only be applied to ",(0,t.yg)("a",{href:"/api/module-methods/#es6-recommended",parentName:"p"},"ES6 modules")," processed directly by webpack. When using a transpiler, you'll need to disable module processing (e.g. the ",(0,t.yg)("a",{href:"https://babeljs.io/docs/en/babel-preset-env#modules",parentName:"p"},(0,t.yg)("inlineCode",{parentName:"a"},"modules"))," option in Babel).")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"optimization-bailouts",parentName:"h2"}),"Optimization Bailouts",(0,t.yg)("a",{href:"#optimization-bailouts","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"As the article explains, webpack attempts to achieve partial scope hoisting. It will merge modules into a single scope but cannot do so in every case. If webpack cannot merge a module, the two alternatives are Prevent and Root. Prevent means the module must be in its own scope. Root means a new module group will be created. The following conditions determine the outcome:"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr"},"Condition"),(0,t.yg)("th",{parentName:"tr"},"Outcome"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{"data-th":"Condition",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Non ES6 Module")),(0,t.yg)("td",{"data-th":"Outcome",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Prevent"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{"data-th":"Condition",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Imported By Non Import")),(0,t.yg)("td",{"data-th":"Outcome",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Root"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{"data-th":"Condition",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Imported From Other Chunk")),(0,t.yg)("td",{"data-th":"Outcome",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Root"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{"data-th":"Condition",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Imported By Multiple Other Module Groups")),(0,t.yg)("td",{"data-th":"Outcome",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Root"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{"data-th":"Condition",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Imported With ",(0,t.yg)("inlineCode",{parentName:"span"},"import()"))),(0,t.yg)("td",{"data-th":"Outcome",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Root"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{"data-th":"Condition",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Affected By ",(0,t.yg)("inlineCode",{parentName:"span"},"ProvidePlugin")," Or Using ",(0,t.yg)("inlineCode",{parentName:"span"},"module"))),(0,t.yg)("td",{"data-th":"Outcome",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Prevent"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{"data-th":"Condition",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"HMR Accepted")),(0,t.yg)("td",{"data-th":"Outcome",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Root"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{"data-th":"Condition",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Using ",(0,t.yg)("inlineCode",{parentName:"span"},"eval()"))),(0,t.yg)("td",{"data-th":"Outcome",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Prevent"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{"data-th":"Condition",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"In Multiple Chunks")),(0,t.yg)("td",{"data-th":"Outcome",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Prevent"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{"data-th":"Condition",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},(0,t.yg)("inlineCode",{parentName:"span"},'export * from "cjs-module"'))),(0,t.yg)("td",{"data-th":"Outcome",parentName:"tr"},(0,t.yg)("span",{parentName:"td"},"Prevent"))))),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"module-grouping-algorithm",parentName:"h3"}),"Module Grouping Algorithm",(0,t.yg)("a",{href:"#module-grouping-algorithm","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"The following pseudo JavaScript explains the algorithm:"),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-js",parentName:"pre"},"modules",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"forEach"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"module"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"const")," group ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"ModuleGroup"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    root",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"dependencies",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"forEach"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"dependency"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.yg)("span",{className:"token function",parentName:"code"},"tryToAdd"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"group",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," dependency",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"group",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"modules",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"length ",(0,t.yg)("span",{className:"token operator",parentName:"code"},">")," ",(0,t.yg)("span",{className:"token number",parentName:"code"},"1"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    orderedModules ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token function",parentName:"code"},"topologicalSort"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"group",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"modules",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n    concatenatedModule ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"ConcatenatedModule"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"orderedModules",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n    chunk",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"add"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"concatenatedModule",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n    orderedModules",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"forEach"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"groupModule"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      chunk",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"remove"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"groupModule",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,t.yg)("span",{className:"token function",parentName:"code"},"tryToAdd"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"group",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},",")," module"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"group",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"has"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,t.yg)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n  ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token operator",parentName:"code"},"!"),(0,t.yg)("span",{className:"token function",parentName:"code"},"hasPreconditions"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,t.yg)("span",{className:"token boolean",parentName:"code"},"false"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n  ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"const")," nextGroup ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," group",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"const")," result ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"dependents",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"reduce"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"check",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},",")," dependent"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"return")," check ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"&&")," ",(0,t.yg)("span",{className:"token function",parentName:"code"},"tryToAdd"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"nextGroup",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," dependent",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.yg)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token operator",parentName:"code"},"!"),"result",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,t.yg)("span",{className:"token boolean",parentName:"code"},"false"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n  module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"dependencies",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"forEach"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"dependency"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.yg)("span",{className:"token function",parentName:"code"},"tryToAdd"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"group",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," dependency",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  group",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"merge"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"nextGroup",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,t.yg)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"))),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"debugging-optimization-bailouts",parentName:"h3"}),"Debugging Optimization Bailouts",(0,t.yg)("a",{href:"#debugging-optimization-bailouts","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"When using the webpack CLI, the ",(0,t.yg)("inlineCode",{parentName:"p"},"--stats-optimization-bailout")," flag will display bailout reasons. When using the webpack config, add the following to the ",(0,t.yg)("inlineCode",{parentName:"p"},"stats")," object:"),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"//..."),"\n  stats",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// Display bailout reasons"),"\n    optimizationBailout",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))))}p.isMDXComponent=!0,a.default=p}}]);