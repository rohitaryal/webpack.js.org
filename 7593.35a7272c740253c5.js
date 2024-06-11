"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7593],{7593:function(e,a,n){n.r(a),n(3696);var s=n(1445);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},p.apply(null,arguments)}function t(e){let{components:a,...n}=e;return(0,s.yg)("wrapper",p({components:a},n),(0,s.yg)("p",null,"In this guide, we'll dive into some of the best practices and utilities for building a production site or application."),(0,s.yg)("aside",{className:"tip"},(0,s.yg)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,s.yg)("p",{parentName:"aside"},"This walkthrough stems from ",(0,s.yg)("a",{href:"/guides/tree-shaking",parentName:"p"},"Tree Shaking")," and ",(0,s.yg)("a",{href:"/guides/development",parentName:"p"},"Development"),". Please ensure you are familiar with the concepts/setup introduced in those guides before continuing on.")),(0,s.yg)("h2",null,(0,s.yg)("span",{id:"setup",parentName:"h2"}),"Setup",(0,s.yg)("a",{href:"#setup","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,s.yg)("span",{className:"header-link",parentName:"a"}))),(0,s.yg)("p",null,"The goals of ",(0,s.yg)("em",{parentName:"p"},"development")," and ",(0,s.yg)("em",{parentName:"p"},"production")," builds differ greatly. In ",(0,s.yg)("em",{parentName:"p"},"development"),", we want strong source mapping and a localhost server with live reloading or hot module replacement. In ",(0,s.yg)("em",{parentName:"p"},"production"),", our goals shift to a focus on minified bundles, lighter weight source maps, and optimized assets to improve load time. With this logical separation at hand, we typically recommend writing ",(0,s.yg)("strong",{parentName:"p"},"separate webpack configurations")," for each environment."),(0,s.yg)("p",null,"While we will separate the ",(0,s.yg)("em",{parentName:"p"},"production")," and ",(0,s.yg)("em",{parentName:"p"},"development")," specific bits out, note that we'll still maintain a \"common\" configuration to keep things DRY. In order to merge these configurations together, we'll use a utility called ",(0,s.yg)("a",{href:"https://github.com/survivejs/webpack-merge",parentName:"p"},(0,s.yg)("inlineCode",{parentName:"a"},"webpack-merge")),'. With the "common" configuration in place, we won\'t have to duplicate code within the environment-specific configurations.'),(0,s.yg)("p",null,"Let's start by installing ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack-merge")," and splitting out the bits we've already worked on in previous guides:"),(0,s.yg)("pre",null,(0,s.yg)("code",{className:"hljs language-bash",parentName:"pre"},(0,s.yg)("span",{className:"token function",parentName:"code"},"npm")," ",(0,s.yg)("span",{className:"token function",parentName:"code"},"install")," --save-dev webpack-merge")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"project")),(0,s.yg)("pre",null,(0,s.yg)("code",{className:"hljs language-diff",parentName:"pre"},(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," webpack-demo\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," |- package.json\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," |- package-lock.json\n")),(0,s.yg)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,s.yg)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,s.yg)("span",{className:"token line",parentName:"span"}," |- webpack.config.js\n")),(0,s.yg)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," |- webpack.common.js\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," |- webpack.dev.js\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," |- webpack.prod.js\n")),(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," |- /dist\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," |- /src\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"   |- index.js\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"   |- math.js\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," |- /node_modules")))),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"webpack.common.js")),(0,s.yg)("pre",null,(0,s.yg)("code",{className:"hljs language-diff",parentName:"pre"},(0,s.yg)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," const path = require('path');\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," const HtmlWebpackPlugin = require('html-webpack-plugin');\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," module.exports = {\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   entry: {\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"     app: './src/index.js',\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   },\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   plugins: [\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"     new HtmlWebpackPlugin({\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"       title: 'Production',\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"     }),\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   ],\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   output: {\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"     filename: '[name].bundle.js',\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"     path: path.resolve(__dirname, 'dist'),\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"     clean: true,\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   },\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," };")))),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"webpack.dev.js")),(0,s.yg)("pre",null,(0,s.yg)("code",{className:"hljs language-diff",parentName:"pre"},(0,s.yg)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," const { merge } = require('webpack-merge');\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," const common = require('./webpack.common.js');\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," module.exports = merge(common, {\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   mode: 'development',\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   devtool: 'inline-source-map',\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   devServer: {\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"     static: './dist',\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   },\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," });")))),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"webpack.prod.js")),(0,s.yg)("pre",null,(0,s.yg)("code",{className:"hljs language-diff",parentName:"pre"},(0,s.yg)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," const { merge } = require('webpack-merge');\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," const common = require('./webpack.common.js');\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," module.exports = merge(common, {\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   mode: 'production',\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," });")))),(0,s.yg)("p",null,"In ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack.common.js"),", we now have setup our ",(0,s.yg)("inlineCode",{parentName:"p"},"entry")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"output")," configuration and we've included any plugins that are required for both environments. In ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack.dev.js"),", we've set ",(0,s.yg)("inlineCode",{parentName:"p"},"mode")," to ",(0,s.yg)("inlineCode",{parentName:"p"},"development"),". Also, we've added the recommended ",(0,s.yg)("inlineCode",{parentName:"p"},"devtool")," for that environment (strong source mapping), as well as our ",(0,s.yg)("inlineCode",{parentName:"p"},"devServer")," configuration. Finally, in ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack.prod.js"),",",(0,s.yg)("inlineCode",{parentName:"p"},"mode")," is set to ",(0,s.yg)("inlineCode",{parentName:"p"},"production")," which loads ",(0,s.yg)("a",{href:"/plugins/terser-webpack-plugin/",parentName:"p"},(0,s.yg)("inlineCode",{parentName:"a"},"TerserPlugin")),", which was first introduced by the ",(0,s.yg)("a",{href:"/guides/tree-shaking/",parentName:"p"},"tree shaking")," guide."),(0,s.yg)("p",null,"Note the use of ",(0,s.yg)("inlineCode",{parentName:"p"},"merge()")," calls in the environment-specific configurations to include our common configuration in ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack.dev.js")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack.prod.js"),". The ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack-merge")," tool offers a variety of advanced features for merging but for our use case we won't need any of that."),(0,s.yg)("h2",null,(0,s.yg)("span",{id:"npm-scripts",parentName:"h2"}),"NPM Scripts",(0,s.yg)("a",{href:"#npm-scripts","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,s.yg)("span",{className:"header-link",parentName:"a"}))),(0,s.yg)("p",null,"Now, let's modify our npm scripts to use the new configuration files. For the ",(0,s.yg)("inlineCode",{parentName:"p"},"start")," script, which runs ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack-dev-server"),", we will use ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack.dev.js"),", and for the ",(0,s.yg)("inlineCode",{parentName:"p"},"build")," script, which runs ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack")," to create a production build, we will use ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack.prod.js"),":"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"package.json")),(0,s.yg)("pre",null,(0,s.yg)("code",{className:"hljs language-diff",parentName:"pre"},(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," {\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'   "name": "development",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'   "version": "1.0.0",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'   "description": "",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'   "main": "src/index.js",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'   "scripts": {\n')),(0,s.yg)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,s.yg)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "start": "webpack serve --open",\n')),(0,s.yg)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "start": "webpack serve --open --config webpack.dev.js",\n')),(0,s.yg)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,s.yg)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "build": "webpack"\n')),(0,s.yg)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "build": "webpack --config webpack.prod.js"\n')),(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"   },\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'   "keywords": [],\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'   "author": "",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'   "license": "ISC",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'   "devDependencies": {\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "css-loader": "^0.28.4",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "csv-loader": "^2.1.1",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "express": "^4.15.3",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "file-loader": "^0.11.2",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "html-webpack-plugin": "^2.29.0",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "style-loader": "^0.18.2",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "webpack": "^4.30.0",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "webpack-dev-middleware": "^1.12.0",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "webpack-dev-server": "^2.9.1",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "webpack-merge": "^4.1.0",\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},'     "xml-loader": "^1.2.1"\n'),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"   }\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," }")))),(0,s.yg)("p",null,"Feel free to run those scripts and see how the output changes as we continue adding to our ",(0,s.yg)("em",{parentName:"p"},"production")," configuration."),(0,s.yg)("h2",null,(0,s.yg)("span",{id:"specify-the-mode",parentName:"h2"}),"Specify the Mode",(0,s.yg)("a",{href:"#specify-the-mode","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,s.yg)("span",{className:"header-link",parentName:"a"}))),(0,s.yg)("p",null,"Many libraries will key off the ",(0,s.yg)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," variable to determine what should be included in the library. For example, when ",(0,s.yg)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," is not set to ",(0,s.yg)("inlineCode",{parentName:"p"},"'production'")," some libraries may add additional logging and testing to make debugging easier. However, with ",(0,s.yg)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," set to ",(0,s.yg)("inlineCode",{parentName:"p"},"'production'")," they might drop or add significant portions of code to optimize how things run for your actual users. Since webpack v4, specifying ",(0,s.yg)("a",{href:"/configuration/mode/",parentName:"p"},(0,s.yg)("inlineCode",{parentName:"a"},"mode"))," automatically configures ",(0,s.yg)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," for you through ",(0,s.yg)("a",{href:"https://github.com/webpack/webpack/blob/fcccd192ce550210186f84a7ca59ee4cd47a8b2d/lib/WebpackOptionsApply.js#L565",parentName:"p"},(0,s.yg)("inlineCode",{parentName:"a"},"DefinePlugin")),":"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"webpack.prod.js")),(0,s.yg)("pre",null,(0,s.yg)("code",{className:"hljs language-diff",parentName:"pre"},(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," const { merge } = require('webpack-merge');\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," const common = require('./webpack.common.js');\n")),"\n",(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," module.exports = merge(common, {\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"   mode: 'production',\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," });")))),(0,s.yg)("aside",{className:"tip"},(0,s.yg)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,s.yg)("p",{parentName:"aside"},"Technically, ",(0,s.yg)("inlineCode",{parentName:"p"},"NODE_ENV")," is a system environment variable that Node.js exposes into running scripts. It is used by convention to determine dev-vs-prod behavior by server tools, build scripts, and client-side libraries. Contrary to expectations, ",(0,s.yg)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," is not set ",(0,s.yg)("strong",{parentName:"p"},"within")," the build script ",(0,s.yg)("inlineCode",{parentName:"p"},"webpack.config.js")," automatically when running webpack. Thus, conditionals like ",(0,s.yg)("inlineCode",{parentName:"p"},"process.env.NODE_ENV === 'production' ? '[name].[contenthash].bundle.js' : '[name].bundle.js'")," won't work in webpack configurations unless you specify ",(0,s.yg)("inlineCode",{parentName:"p"},"NODE_ENV")," explicitly with ",(0,s.yg)("inlineCode",{parentName:"p"},"NODE_ENV=production")," through CLI.")),(0,s.yg)("p",null,"If you're using a library like ",(0,s.yg)("a",{href:"https://reactjs.org/",parentName:"p"},(0,s.yg)("inlineCode",{parentName:"a"},"react")),", you should actually see a significant drop in bundle size after adding ",(0,s.yg)("inlineCode",{parentName:"p"},"DefinePlugin"),". Also, note that any of our local ",(0,s.yg)("inlineCode",{parentName:"p"},"/src")," code can key off of this as well, so the following check would be valid:"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"src/index.js")),(0,s.yg)("pre",null,(0,s.yg)("code",{className:"hljs language-diff",parentName:"pre"},(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," import { cube } from './math.js';\n")),(0,s.yg)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," if (process.env.NODE_ENV !== 'production') {\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   console.log('Looks like we are in development mode!');\n"),(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"}," }\n")),"\n",(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," function component() {\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"   const element = document.createElement('pre');\n")),"\n",(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"   element.innerHTML = [\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"     'Hello webpack!',\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"     '5 cubed is equal to ' + cube(5)\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"   ].join('\\n\\n');\n")),"\n",(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"   return element;\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," }\n")),"\n",(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," document.body.appendChild(component());")))),(0,s.yg)("h2",null,(0,s.yg)("span",{id:"minification",parentName:"h2"}),"Minification",(0,s.yg)("a",{href:"#minification","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,s.yg)("span",{className:"header-link",parentName:"a"}))),(0,s.yg)("p",null,"Webpack v4+ will minify your code by default in ",(0,s.yg)("a",{href:"/configuration/mode/#mode-production",parentName:"p"},(0,s.yg)("inlineCode",{parentName:"a"},"production mode")),"."),(0,s.yg)("p",null,"Note that while the ",(0,s.yg)("a",{href:"/plugins/terser-webpack-plugin/",parentName:"p"},(0,s.yg)("inlineCode",{parentName:"a"},"TerserPlugin"))," is a great place to start for minification and being used by default, there are other options out there:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{href:"https://github.com/webpack-contrib/closure-webpack-plugin",parentName:"li"},(0,s.yg)("inlineCode",{parentName:"a"},"ClosureWebpackPlugin")))),(0,s.yg)("p",null,"If you decide to try another minification plugin, make sure your new choice also drops dead code as described in the ",(0,s.yg)("a",{href:"/guides/tree-shaking",parentName:"p"},"tree shaking")," guide and provide it as the ",(0,s.yg)("a",{href:"/configuration/optimization/#optimizationminimizer",parentName:"p"},(0,s.yg)("inlineCode",{parentName:"a"},"optimization.minimizer")),"."),(0,s.yg)("h2",null,(0,s.yg)("span",{id:"source-mapping",parentName:"h2"}),"Source Mapping",(0,s.yg)("a",{href:"#source-mapping","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,s.yg)("span",{className:"header-link",parentName:"a"}))),(0,s.yg)("p",null,"We encourage you to have source maps enabled in production, as they are useful for debugging as well as running benchmark tests. That said, you should choose one with a fairly quick build speed that's recommended for production use (see ",(0,s.yg)("a",{href:"/configuration/devtool",parentName:"p"},(0,s.yg)("inlineCode",{parentName:"a"},"devtool")),"). For this guide, we'll use the ",(0,s.yg)("inlineCode",{parentName:"p"},"source-map")," option in the ",(0,s.yg)("em",{parentName:"p"},"production")," as opposed to the ",(0,s.yg)("inlineCode",{parentName:"p"},"inline-source-map")," we used in the ",(0,s.yg)("em",{parentName:"p"},"development"),":"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"webpack.prod.js")),(0,s.yg)("pre",null,(0,s.yg)("code",{className:"hljs language-diff",parentName:"pre"},(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," const { merge } = require('webpack-merge');\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," const common = require('./webpack.common.js');\n")),"\n",(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," module.exports = merge(common, {\n"),(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"},"   mode: 'production',\n")),(0,s.yg)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,s.yg)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,s.yg)("span",{className:"token line",parentName:"span"},"   devtool: 'source-map',\n")),(0,s.yg)("span",{className:"token unchanged",parentName:"code"},(0,s.yg)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,s.yg)("span",{className:"token line",parentName:"span"}," });")))),(0,s.yg)("aside",{className:"tip"},(0,s.yg)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,s.yg)("p",{parentName:"aside"},"Avoid ",(0,s.yg)("inlineCode",{parentName:"p"},"inline-***")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"eval-***")," use in production as they can increase bundle size and reduce the overall performance.")),(0,s.yg)("h2",null,(0,s.yg)("span",{id:"minimize-css",parentName:"h2"}),"Minimize CSS",(0,s.yg)("a",{href:"#minimize-css","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,s.yg)("span",{className:"header-link",parentName:"a"}))),(0,s.yg)("p",null,"It is crucial to minimize your CSS for production. Please see the ",(0,s.yg)("a",{href:"/plugins/mini-css-extract-plugin/#minimizing-for-production",parentName:"p"},"Minimizing for Production")," section."),(0,s.yg)("h2",null,(0,s.yg)("span",{id:"cli-alternatives",parentName:"h2"}),"CLI Alternatives",(0,s.yg)("a",{href:"#cli-alternatives","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,s.yg)("span",{className:"header-link",parentName:"a"}))),(0,s.yg)("p",null,"Many of the options described above can be set as command line arguments. For example, ",(0,s.yg)("a",{href:"/configuration/optimization/#optimizationminimize",parentName:"p"},(0,s.yg)("inlineCode",{parentName:"a"},"optimization.minimize"))," can be set with ",(0,s.yg)("inlineCode",{parentName:"p"},"--optimization-minimize"),", and ",(0,s.yg)("a",{href:"/configuration/mode/",parentName:"p"},(0,s.yg)("inlineCode",{parentName:"a"},"mode"))," can be set with ",(0,s.yg)("inlineCode",{parentName:"p"},"--mode"),". Run ",(0,s.yg)("inlineCode",{parentName:"p"},"npx webpack --help=verbose")," for a full list of CLI arguments."),(0,s.yg)("p",null,"While these shorthand methods are useful, we recommend setting these options in a webpack configuration file for more configurability."))}t.isMDXComponent=!0,a.default=t}}]);