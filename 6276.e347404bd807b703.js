"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6276],{6276:function(e,a,n){n.r(a),n(3696);var t=n(1445);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r.apply(null,arguments)}function i(e){let{components:a,...n}=e;return(0,t.yg)("wrapper",r({components:a},n),(0,t.yg)("p",null,"This index lists common terms used throughout the webpack ecosystem."),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"a",parentName:"h2"}),"A",(0,t.yg)("a",{href:"#a","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/guides/asset-management/",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Asset")),": This is a general term for the images, fonts, media, and any other kind of files that are typically used in websites and other applications. These typically end up as individual files within the ",(0,t.yg)("a",{href:"/glossary/#o",parentName:"li"},"output")," but can also be inlined via things like the ",(0,t.yg)("a",{href:"/loaders/style-loader",parentName:"li"},"style-loader")," or ",(0,t.yg)("a",{href:"/loaders/url-loader",parentName:"li"},"url-loader"),".")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"b",parentName:"h2"}),"B",(0,t.yg)("a",{href:"#b","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/guides/getting-started/#creating-a-bundle",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Bundle")),": Produced from a number of distinct modules, bundles contain the final versions of source files that have already undergone the loading and compilation process."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/guides/code-splitting",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Bundle Splitting")),": This process offers one way of optimizing a build, allowing webpack to generate multiple bundles for a single application. As a result, each bundle can be isolated from changes effecting others, reducing the amount of code that needs to be republished and therefore re-downloaded by the client and taking advantage of browser caching.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"c",parentName:"h2"}),"C",(0,t.yg)("a",{href:"#c","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Chunk"),": This webpack-specific term is used internally to manage the bundling process. Bundles are composed out of chunks, of which there are several types (e.g. entry and child). Typically, ",(0,t.yg)("em",{parentName:"li"},"chunks")," directly correspond with the output ",(0,t.yg)("em",{parentName:"li"},"bundles")," however, there are some configurations that don't yield a one-to-one relationship."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/guides/code-splitting/",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Code Splitting")),": Refers to dividing your code into various bundles/chunks which you can then load on demand instead of loading a single bundle containing everything."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/concepts/configuration/",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Configuration")),": webpack configuration file is a plain old JavaScript file that exports an object. This object is then processed by webpack based upon its defined properties.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"d",parentName:"h2"}),"D",(0,t.yg)("a",{href:"#d","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/concepts/dependency-graph",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Dependency Graph")),": Any time one file depends on another, webpack treats this as a ",(0,t.yg)("em",{parentName:"li"},"dependency"),". Starting from an entry point(s), webpack recursively builds a dependency graph that includes every module/asset your application needs.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"e",parentName:"h2"}),"E",(0,t.yg)("a",{href:"#e","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/concepts/entry-points",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Entry Point")),": The entry point tells webpack where to start and follows the graph of dependencies to know what to bundle. You can think of your application's entry point(s) as the ",(0,t.yg)("strong",{parentName:"li"},"contextual root(s)")," of what you want bundled.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"h",parentName:"h2"}),"H",(0,t.yg)("a",{href:"#h","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/concepts/hot-module-replacement",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Hot Module Replacement (HMR)")),": A process that exchanges, adds, or removes ",(0,t.yg)("inlineCode",{parentName:"li"},"modules")," while an application is running without a full page reload.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"l",parentName:"h2"}),"L",(0,t.yg)("a",{href:"#l","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/concepts/loaders",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Loaders")),": Transformations that are applied on the source code of a module. They allow you to pre-process files as you ",(0,t.yg)("inlineCode",{parentName:"li"},"require()")," or \"load\" them. Similar to a 'task-runner'."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/guides/lazy-loading",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Lazy Loading")),": A process of loading parts (chunks) of your application lazily. In other words loading them only when we really need them.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"m",parentName:"h2"}),"M",(0,t.yg)("a",{href:"#m","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/concepts/modules",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Module")),": Discrete chunks of functionality that provide a smaller surface area than a full program. Well-written modules provide solid abstractions and encapsulation boundaries which make up a coherent design and clear purpose."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/concepts/module-resolution/",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Module Resolution")),": A module can be required as a dependency from another module and a resolver is a library which helps in locating a module by its absolute path. Modules are searched for inside all directories specified in ",(0,t.yg)("inlineCode",{parentName:"li"},"resolve.modules"),"."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/concepts/manifest",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Manifest")),": The runtime will use it to resolve and load modules once they've been bundled and shipped to the browser.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"o",parentName:"h2"}),"O",(0,t.yg)("a",{href:"#o","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/concepts/output",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Output")),": Option(s) specifying where to output the compiled files to disk.",(0,t.yg)("blockquote",{parentName:"li"},(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("em",{parentName:"p"},"Note, that while there can be multiple entry points, only one output configuration is specified."))))),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"p",parentName:"h2"}),"P",(0,t.yg)("a",{href:"#p","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/concepts/plugins",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Plugin")),": A JavaScript object that has an ",(0,t.yg)("inlineCode",{parentName:"li"},"apply")," property. This ",(0,t.yg)("inlineCode",{parentName:"li"},"apply")," property is called by the webpack compiler, giving access to the entire compilation lifecycle. These packages will typically extend compilation functionality in one way or another.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"r",parentName:"h2"}),"R",(0,t.yg)("a",{href:"#r","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/guides/dependency-management/",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Request")),": Refers to the expression in the require/import statement, e.g. ",(0,t.yg)("em",{parentName:"li"},'require("./template/" + name + ".ejs")'),", the request is ",(0,t.yg)("em",{parentName:"li"},'"./template/" + name + ".ejs"'),".")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"s",parentName:"h2"}),"S",(0,t.yg)("a",{href:"#s","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/guides/shimming/",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Shimming")),": Not all JS files can be used directly with webpack. The file maybe in an unsupported module format, or not even in any module format. It is here where ",(0,t.yg)("inlineCode",{parentName:"li"},"shimming")," comes into play.")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"t",parentName:"h2"}),"T",(0,t.yg)("a",{href:"#t","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/configuration/target/",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Target")),": User configured deployment target(s) ",(0,t.yg)("a",{href:"/configuration/target/",parentName:"li"},"listed here")," to compile for a specific environment like the browser, NodeJS, or Electron."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/guides/tree-shaking/",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Tree Shaking")),": Unused/Excess code elimination, or more precisely, live code importing. Compilers like webpack will accomplish this by analyzing the various kinds ",(0,t.yg)("inlineCode",{parentName:"li"},"import"),' statements and usage of the imported code to determine what parts of dependencies are actually being utilized, dropping parts of the "tree" that are not.')),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"v",parentName:"h2"}),"V",(0,t.yg)("a",{href:"#v","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/concepts/entry-points/#separate-app-and-vendor-entries",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"Vendor Entry Point")),": Create dependency graphs starting at both ",(0,t.yg)("inlineCode",{parentName:"li"},"app.js")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"vendors.js"),". These graphs are completely separate and independent of each other to allow leverage of ",(0,t.yg)("inlineCode",{parentName:"li"},"CommonsChunkPlugin")," and extract any vendor references from your app bundle into your vendor bundle. Helps achieve a common pattern in webpack known as ",(0,t.yg)("a",{href:"/guides/caching/",parentName:"li"},"long-term vendor-caching"),".")),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"w",parentName:"h2"}),"W",(0,t.yg)("a",{href:"#w","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"/",parentName:"li"},(0,t.yg)("strong",{parentName:"a"},"webpack")),": A highly configurable ",(0,t.yg)("a",{href:"/concepts/modules",parentName:"li"},"module")," bundler for modern JavaScript applications.")))}i.isMDXComponent=!0,a.default=i}}]);