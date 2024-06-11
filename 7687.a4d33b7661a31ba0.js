"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7687],{7687:function(a,e,n){n.r(e),n(3696);var t=n(1445);function s(){return s=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)({}).hasOwnProperty.call(n,t)&&(a[t]=n[t])}return a},s.apply(null,arguments)}function o(a){let{components:e,...n}=a;return(0,t.yg)("wrapper",s({components:e},n),(0,t.yg)("p",null,"Plugins grant unlimited opportunity to perform customizations within the webpack build system. This allows you to create custom asset types, perform unique build modifications, or even enhance the webpack runtime while using middleware. The following are some features of webpack that become useful while writing plugins."),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"exploring-assets-chunks-modules-and-dependencies",parentName:"h2"}),"Exploring assets, chunks, modules, and dependencies",(0,t.yg)("a",{href:"#exploring-assets-chunks-modules-and-dependencies","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"After a compilation is sealed, all structures within the compilation may be traversed."),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"class")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"MyPlugin")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.yg)("span",{className:"token function",parentName:"code"},"apply"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"compiler"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    compiler",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"emit",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"tapAsync"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token string",parentName:"code"},"'MyPlugin'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"compilation",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},",")," callback"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// Explore each chunk (build output):"),"\n      compilation",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"chunks",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"forEach"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"chunk"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// Explore each module within the chunk (built inputs):"),"\n        chunk",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"getModules"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"forEach"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"module"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n          ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// Explore each source file path that was included into the module:"),"\n          module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"buildInfo ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"&&"),"\n            module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"buildInfo",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"fileDependencies ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"&&"),"\n            module",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"buildInfo",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"fileDependencies",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"forEach"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"filepath"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n              ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// we've learned a lot about the source structure now..."),"\n            ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n        ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n        ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// Explore each asset filename generated by the chunk:"),"\n        chunk",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"files",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"forEach"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"filename"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n          ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// Get the asset source for each file generated by the chunk:"),"\n          ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"var")," source ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," compilation",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"assets",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"["),"filename",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"source"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n        ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n      ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n      ",(0,t.yg)("span",{className:"token function",parentName:"code"},"callback"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\nmodule",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," MyPlugin",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"compilation.modules"),": A set of modules (built inputs) in the compilation. Each module manages the build of a raw file from your source library.")),(0,t.yg)("aside",{className:"warning"},(0,t.yg)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.yg)("p",{parentName:"aside"},(0,t.yg)("strong",{parentName:"p"},"Deprecation warning"),": Array functions will still work.")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"module.fileDependencies"),": An array of source file paths included into a module. This includes the source JavaScript file itself (ex: ",(0,t.yg)("inlineCode",{parentName:"li"},"index.js"),"), and all dependency asset files (stylesheets, images, etc) that it has required. Reviewing dependencies is useful for seeing what source files belong to a module."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"compilation.chunks"),": A set of chunks (build outputs) in the compilation. Each chunk manages the composition of a final rendered assets.")),(0,t.yg)("aside",{className:"warning"},(0,t.yg)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.yg)("p",{parentName:"aside"},(0,t.yg)("strong",{parentName:"p"},"Deprecation warning"),": Array functions will still work.")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"chunk.getModules()"),": An array of modules that are included into a chunk. By extension, you may look through each module's dependencies to see what raw source files fed into a chunk."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"chunk.files"),": A Set of output filenames generated by the chunk. You may access these asset sources from the ",(0,t.yg)("inlineCode",{parentName:"li"},"compilation.assets")," table.")),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"monitoring-the-watch-graph",parentName:"h3"}),"Monitoring the watch graph",(0,t.yg)("a",{href:"#monitoring-the-watch-graph","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"While running webpack middleware, each compilation includes a ",(0,t.yg)("inlineCode",{parentName:"p"},"fileDependencies")," ",(0,t.yg)("inlineCode",{parentName:"p"},"Set")," (what files are being watched) and a ",(0,t.yg)("inlineCode",{parentName:"p"},"fileTimestamps")," ",(0,t.yg)("inlineCode",{parentName:"p"},"Map")," that maps watched file paths to a timestamp. These are extremely useful for detecting what files have changed within the compilation:"),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"class")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"MyPlugin")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.yg)("span",{className:"token function",parentName:"code"},"constructor"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"this"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"startTime ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," Date",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"now"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"this"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"prevTimestamps ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"Map"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n  ",(0,t.yg)("span",{className:"token function",parentName:"code"},"apply"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"compiler"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    compiler",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"emit",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"tapAsync"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token string",parentName:"code"},"'MyPlugin'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"compilation",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},",")," callback"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"const")," changedFiles ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," Array",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"from"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"compilation",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"fileTimestamps",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"keys"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"filter"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"\n        ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"watchfile"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n          ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"\n            ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token keyword",parentName:"code"},"this"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"prevTimestamps",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"get"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"watchfile",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"||")," ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"this"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"startTime",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"<"),"\n            ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"compilation",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"fileTimestamps",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"get"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"watchfile",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"||")," ",(0,t.yg)("span",{className:"token number",parentName:"code"},"Infinity"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),"\n          ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n        ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n      ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n      ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"this"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"prevTimestamps ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," compilation",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"fileTimestamps",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n      ",(0,t.yg)("span",{className:"token function",parentName:"code"},"callback"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n\nmodule",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," MyPlugin",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("p",null,"You may also feed new file paths into the watch graph to receive compilation triggers when those files change. Add valid file paths into the ",(0,t.yg)("inlineCode",{parentName:"p"},"compilation.fileDependencies")," ",(0,t.yg)("inlineCode",{parentName:"p"},"Set")," to add them to the watched files."),(0,t.yg)("aside",{className:"tip"},(0,t.yg)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.yg)("p",{parentName:"aside"},"The ",(0,t.yg)("inlineCode",{parentName:"p"},"fileDependencies")," ",(0,t.yg)("inlineCode",{parentName:"p"},"Set")," is rebuilt in each compilation, so your plugin must add its own watched dependencies into each compilation to keep them under watch.")),(0,t.yg)("aside",{className:"warning"},(0,t.yg)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.yg)("p",{parentName:"aside"},"Since webpack 5, ",(0,t.yg)("inlineCode",{parentName:"p"},"compilation.fileDependencies"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"compilation.contextDependencies")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"compilation.missingDependencies")," are now a ",(0,t.yg)("inlineCode",{parentName:"p"},"Set")," instead of a ",(0,t.yg)("inlineCode",{parentName:"p"},"Sortable Set")," and thus no longer sorted.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"changed-chunks",parentName:"h2"}),"Changed chunks",(0,t.yg)("a",{href:"#changed-chunks","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"Similar to the watch graph, you can monitor changed chunks (or modules, for that matter) within a compilation by tracking their hashes."),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"class")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"MyPlugin")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.yg)("span",{className:"token function",parentName:"code"},"constructor"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"this"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"chunkVersions ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n  ",(0,t.yg)("span",{className:"token function",parentName:"code"},"apply"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"compiler"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    compiler",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"emit",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"tapAsync"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token string",parentName:"code"},"'MyPlugin'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"compilation",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},",")," callback"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"var")," changedChunks ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," compilation",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"chunks",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"filter"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token parameter",parentName:"code"},"chunk"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"var")," oldVersion ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"this"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"chunkVersions",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"["),"chunk",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"name",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n        ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"this"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"chunkVersions",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"["),"chunk",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"name",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"]")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," chunk",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"hash",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n        ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"return")," chunk",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"hash ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"!==")," oldVersion",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n      ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n      ",(0,t.yg)("span",{className:"token function",parentName:"code"},"callback"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),"\n\nmodule",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," MyPlugin",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))))}o.isMDXComponent=!0,e.default=o}}]);