"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[248],{248:function(e,a,n){n.r(a),n(3696);var t=n(1445);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(null,arguments)}function s(e){let{components:a,...n}=e;return(0,t.yg)("wrapper",o({components:a},n),(0,t.yg)("p",null,"Because JavaScript can be written for both server and browser, webpack offers multiple deployment ",(0,t.yg)("em",{parentName:"p"},"targets")," that you can set in your webpack ",(0,t.yg)("a",{href:"/configuration",parentName:"p"},"configuration"),"."),(0,t.yg)("aside",{className:"warning"},(0,t.yg)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.yg)("p",{parentName:"aside"},"The webpack ",(0,t.yg)("inlineCode",{parentName:"p"},"target")," property is not to be confused with the ",(0,t.yg)("inlineCode",{parentName:"p"},"output.libraryTarget")," property. For more information see ",(0,t.yg)("a",{href:"/concepts/output/",parentName:"p"},"our guide")," on the ",(0,t.yg)("inlineCode",{parentName:"p"},"output")," property.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"usage",parentName:"h2"}),"Usage",(0,t.yg)("a",{href:"#usage","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"To set the ",(0,t.yg)("inlineCode",{parentName:"p"},"target")," property, you set the target value in your webpack config:"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"webpack.config.js")),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  target",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'node'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("p",null,"In the example above, using ",(0,t.yg)("inlineCode",{parentName:"p"},"node")," webpack will compile for usage in a Node.js-like environment (uses Node.js ",(0,t.yg)("inlineCode",{parentName:"p"},"require")," to load chunks and not touch any built in modules like ",(0,t.yg)("inlineCode",{parentName:"p"},"fs")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"path"),")."),(0,t.yg)("p",null,"Each ",(0,t.yg)("em",{parentName:"p"},"target")," has a variety of deployment/environment specific additions, support to fit its needs. See what ",(0,t.yg)("a",{href:"/configuration/target/",parentName:"p"},"targets are available"),"."),(0,t.yg)("aside",{className:"todo"},(0,t.yg)("h6",{className:"todo__prefix",parentName:"aside"},"todo"),(0,t.yg)("p",{parentName:"aside"},"Further expansion for other popular target values")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"multiple-targets",parentName:"h2"}),"Multiple Targets",(0,t.yg)("a",{href:"#multiple-targets","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"Although webpack does ",(0,t.yg)("strong",{parentName:"p"},"not")," support multiple strings being passed into the ",(0,t.yg)("inlineCode",{parentName:"p"},"target")," property, you can create an isomorphic library by bundling two separate configurations:"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"webpack.config.js")),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"const")," path ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token function",parentName:"code"},"require"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token string",parentName:"code"},"'path'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"const")," serverConfig ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  target",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'node'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  output",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    path",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," path",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"resolve"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'dist'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n    filename",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'lib.node.js'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"//…"),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"const")," clientConfig ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  target",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'web'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// <=== can be omitted as default is 'web'"),"\n  output",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    path",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," path",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"resolve"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'dist'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n    filename",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'lib.js'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"//…"),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nmodule",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"["),"serverConfig",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," clientConfig",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("p",null,"The example above will create a ",(0,t.yg)("inlineCode",{parentName:"p"},"lib.js")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"lib.node.js")," file in your ",(0,t.yg)("inlineCode",{parentName:"p"},"dist")," folder."),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"resources",parentName:"h2"}),"Resources",(0,t.yg)("a",{href:"#resources","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"As seen from the options above, there are multiple deployment ",(0,t.yg)("em",{parentName:"p"},"targets")," that you can choose from. Below is a list of examples and resources that you can refer to."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("a",{href:"https://github.com/TheLarkInn/compare-webpack-target-bundles",parentName:"strong"},"compare-webpack-target-bundles")),": A great resource for testing and viewing different webpack ",(0,t.yg)("em",{parentName:"li"},"targets"),". Also great for bug reporting."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("a",{href:"https://github.com/chentsulin/electron-react-boilerplate",parentName:"strong"},"Boilerplate of Electron-React Application")),": A good example of a build process for electron's main process and renderer process.")),(0,t.yg)("aside",{className:"todo"},(0,t.yg)("h6",{className:"todo__prefix",parentName:"aside"},"todo"),(0,t.yg)("p",{parentName:"aside"},"Need to find up to date examples of these webpack targets being used in live code or boilerplates.")))}s.isMDXComponent=!0,a.default=s}}]);