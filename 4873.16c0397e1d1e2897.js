"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4873],{4873:function(e,a,t){t.r(a),t(3696);var n=t(1445);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(null,arguments)}function l(e){let{components:a,...t}=e;return(0,n.yg)("wrapper",r({components:a},t),(0,n.yg)("p",null,"In ",(0,n.yg)("a",{href:"https://en.wikipedia.org/wiki/Modular_programming",parentName:"p"},"modular programming"),", developers break programs up into discrete chunks of functionality called a ",(0,n.yg)("em",{parentName:"p"},"module"),"."),(0,n.yg)("p",null,"Each module has a smaller surface area than a full program, making verification, debugging, and testing trivial.\nWell-written ",(0,n.yg)("em",{parentName:"p"},"modules")," provide solid abstractions and encapsulation boundaries, so that each module has a coherent design and a clear purpose within the overall application."),(0,n.yg)("p",null,"Node.js has supported modular programming almost since its inception.\nOn the web, however, support for ",(0,n.yg)("em",{parentName:"p"},"modules")," has been slow to arrive.\nMultiple tools exist that support modular JavaScript on the web, with a variety of benefits and limitations.\nWebpack builds on lessons learned from these systems and applies the concept of ",(0,n.yg)("em",{parentName:"p"},"modules")," to any file in your project."),(0,n.yg)("h2",null,(0,n.yg)("span",{id:"what-is-a-webpack-module",parentName:"h2"}),"What is a webpack Module",(0,n.yg)("a",{href:"#what-is-a-webpack-module","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.yg)("span",{className:"header-link",parentName:"a"}))),(0,n.yg)("p",null,"In contrast to ",(0,n.yg)("a",{href:"https://nodejs.org/api/modules.html",parentName:"p"},"Node.js modules"),", webpack ",(0,n.yg)("em",{parentName:"p"},"modules")," can express their ",(0,n.yg)("em",{parentName:"p"},"dependencies")," in a variety of ways. A few examples are:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"An ",(0,n.yg)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",parentName:"li"},"ES2015 ",(0,n.yg)("inlineCode",{parentName:"a"},"import"))," statement"),(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("a",{href:"https://wiki.commonjs.org/wiki/Modules/1.1",parentName:"li"},"CommonJS")," ",(0,n.yg)("inlineCode",{parentName:"li"},"require()")," statement"),(0,n.yg)("li",{parentName:"ul"},"An ",(0,n.yg)("a",{href:"https://github.com/amdjs/amdjs-api/blob/master/AMD.md",parentName:"li"},"AMD")," ",(0,n.yg)("inlineCode",{parentName:"li"},"define")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"require")," statement"),(0,n.yg)("li",{parentName:"ul"},"An ",(0,n.yg)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@import",parentName:"li"},(0,n.yg)("inlineCode",{parentName:"a"},"@import")," statement")," inside of a css/sass/less file."),(0,n.yg)("li",{parentName:"ul"},"An image url in a stylesheet ",(0,n.yg)("inlineCode",{parentName:"li"},"url(...)")," or HTML ",(0,n.yg)("inlineCode",{parentName:"li"},"<img src=...>")," file.")),(0,n.yg)("h2",null,(0,n.yg)("span",{id:"supported-module-types",parentName:"h2"}),"Supported Module Types",(0,n.yg)("a",{href:"#supported-module-types","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.yg)("span",{className:"header-link",parentName:"a"}))),(0,n.yg)("p",null,"Webpack supports the following module types natively:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:"/guides/ecma-script-modules",parentName:"li"},"ECMAScript modules")),(0,n.yg)("li",{parentName:"ul"},"CommonJS modules"),(0,n.yg)("li",{parentName:"ul"},"AMD modules"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:"/guides/asset-modules",parentName:"li"},"Assets")),(0,n.yg)("li",{parentName:"ul"},"WebAssembly modules")),(0,n.yg)("p",null,"In addition to that webpack supports modules written in a variety of languages and preprocessors via ",(0,n.yg)("em",{parentName:"p"},"loaders"),". ",(0,n.yg)("em",{parentName:"p"},"Loaders")," describe to webpack ",(0,n.yg)("strong",{parentName:"p"},"how")," to process non-native ",(0,n.yg)("em",{parentName:"p"},"modules")," and include these ",(0,n.yg)("em",{parentName:"p"},"dependencies")," into your ",(0,n.yg)("em",{parentName:"p"},"bundles"),".\nThe webpack community has built ",(0,n.yg)("em",{parentName:"p"},"loaders")," for a wide variety of popular languages and language processors, including:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:"http://coffeescript.org",parentName:"li"},"CoffeeScript")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:"https://www.typescriptlang.org",parentName:"li"},"TypeScript")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:"https://babeljs.io",parentName:"li"},"ESNext (Babel)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:"http://sass-lang.com",parentName:"li"},"Sass")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:"http://lesscss.org",parentName:"li"},"Less")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:"http://stylus-lang.com",parentName:"li"},"Stylus")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{href:"https://elm-lang.org/",parentName:"li"},"Elm"))),(0,n.yg)("p",null,"And many others! Overall, webpack provides a powerful and rich API for customization that allows one to use webpack for ",(0,n.yg)("strong",{parentName:"p"},"any stack"),", while staying ",(0,n.yg)("strong",{parentName:"p"},"non-opinionated")," about your development, testing, and production workflows."),(0,n.yg)("p",null,"For a full list, see ",(0,n.yg)("a",{href:"/loaders",parentName:"p"},(0,n.yg)("strong",{parentName:"a"},"the list of loaders"))," or ",(0,n.yg)("a",{href:"/api/loaders",parentName:"p"},(0,n.yg)("strong",{parentName:"a"},"write your own")),"."))}l.isMDXComponent=!0,a.default=l}}]);