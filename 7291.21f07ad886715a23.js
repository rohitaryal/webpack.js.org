"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7291],{7291:function(e,a,n){n.r(a),n(3696);var t=n(1445);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(null,arguments)}function p(e){let{components:a,...n}=e;return(0,t.yg)("wrapper",s({components:a},n),(0,t.yg)("p",null,"Configuring the ",(0,t.yg)("inlineCode",{parentName:"p"},"output")," configuration options tells webpack how to write the compiled files to disk. Note that, while there can be multiple ",(0,t.yg)("inlineCode",{parentName:"p"},"entry")," points, only one ",(0,t.yg)("inlineCode",{parentName:"p"},"output")," configuration is specified."),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"usage",parentName:"h2"}),"Usage",(0,t.yg)("a",{href:"#usage","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"The minimum requirement for the ",(0,t.yg)("inlineCode",{parentName:"p"},"output")," property in your webpack configuration is to set its value to an object and provide an ",(0,t.yg)("a",{href:"/configuration/output/#outputfilename",parentName:"p"},(0,t.yg)("inlineCode",{parentName:"a"},"output.filename"))," to use for the output file(s):"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"webpack.config.js")),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  output",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    filename",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'bundle.js'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("p",null,"This configuration would output a single ",(0,t.yg)("inlineCode",{parentName:"p"},"bundle.js")," file into the ",(0,t.yg)("inlineCode",{parentName:"p"},"dist")," directory."),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"multiple-entry-points",parentName:"h2"}),"Multiple Entry Points",(0,t.yg)("a",{href:"#multiple-entry-points","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,'If your configuration creates more than a single "chunk" (as with multiple entry points or when using plugins like CommonsChunkPlugin), you should use ',(0,t.yg)("a",{href:"/configuration/output/#outputfilename",parentName:"p"},"substitutions")," to ensure that each file has a unique name."),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    app",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'./src/app.js'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n    search",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'./src/search.js'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  output",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    filename",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'[name].js'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n    path",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," __dirname ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"+")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'/dist'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// writes to disk: ./dist/app.js, ./dist/search.js"))),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"advanced",parentName:"h2"}),"Advanced",(0,t.yg)("a",{href:"#advanced","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"Here's a more complicated example of using a CDN and hashes for assets:"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"config.js")),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"//..."),"\n  output",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    path",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'/home/proj/cdn/assets/[fullhash]'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n    publicPath",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'https://cdn.example.com/assets/[fullhash]/'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("p",null,"In cases where the eventual ",(0,t.yg)("inlineCode",{parentName:"p"},"publicPath")," of output files isn't known at compile time, it can be left blank and set dynamically at runtime via the ",(0,t.yg)("inlineCode",{parentName:"p"},"__webpack_public_path__")," variable in the entry point file:"),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},"__webpack_public_path__ ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," myRuntimePublicPath",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// rest of your application entry"))))}p.isMDXComponent=!0,a.default=p}}]);