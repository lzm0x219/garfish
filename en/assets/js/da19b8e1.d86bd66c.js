"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[512],{4635:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7711);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7581:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(1513),r=n(1275),a=(n(7711),n(4635)),o=["components"],l={title:"Garfish Introduction",slug:"/guide",order:1},s="About Garfish",c={unversionedId:"guide/start/index",id:"guide/start/index",isDocsHomePage:!1,title:"Garfish Introduction",description:"What is Garfish",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/start/index.md",sourceDirName:"guide/start",slug:"/guide",permalink:"/en/guide",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/start/index.md",tags:[],version:"current",lastUpdatedBy:"Arthur",lastUpdatedAt:1637317110,formattedLastUpdatedAt:"11/19/2021",frontMatter:{title:"Garfish Introduction",slug:"/guide",order:1},sidebar:"guide",next:{title:"Build from scratch",permalink:"/en/guide/develop/from-zero"}},p=[{value:"What is Garfish",id:"what-is-garfish",children:[]},{value:"Framework Features",id:"framework-features",children:[]},{value:"Architecture Design",id:"architecture-design",children:[]},{value:"When to use",id:"when-to-use",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-garfish"},"About Garfish"),(0,a.kt)("h2",{id:"what-is-garfish"},"What is Garfish"),(0,a.kt)("p",null,"Garfish originated from the actual scenario of ",(0,a.kt)("a",{parentName:"p",href:"http://mp.toutiao.com"},"headline"),", which turned into a Monolithic-Applications (","[boulder-application]","(",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Monolithic"},"https://en.wikipedia.org/wiki/Monolithic")," ","_","application), while the team personnel maintaining them are scattered and the project is large, leading to low development and debugging efficiency and difficulties in going online (code merging interdependencies), which becomes an important factor blocking business development."),(0,a.kt)("p",null,"So in 2018, Garfish, a micro front-end framework, was derived, and after a lot of validation and polishing of practical scenarios on the business side, Garfish gradually matured. With more business needs for micro front-end, Garfish is in the process of iteration and has accumulated rich experience in micro front-end problem solving."),(0,a.kt)("p",null,"Garfish is a set of micro front-end solution, mainly used to solve the problems of cross-team collaboration, technology system diversification, and web application complexity brought by modern web applications in the context of front-end ecological boom and web application increasing complexity. Garfish is a micro front-end solution for solving the problems of cross-team collaboration, diverse technology systems, and increasingly complex web applications."),(0,a.kt)("h2",{id:"framework-features"},"Framework Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud83c\udf08 ",(0,a.kt)("strong",{parentName:"p"},"Rich and efficient product features")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Garfish micro front-end sub-application supports any kind of framework and technology system access"),(0,a.kt)("li",{parentName:"ul"},'Garfish micro front-end sub-application supports "independent development", "independent testing" and "independent deployment'),(0,a.kt)("li",{parentName:"ul"},"Powerful pre-loading capability, automatically record user application loading habits to increase the loading weight, and greatly reduce the application switching time"),(0,a.kt)("li",{parentName:"ul"},"Support dependency sharing, which greatly reduces the overall package size and the repeated loading of dependencies"),(0,a.kt)("li",{parentName:"ul"},"Built-in data collection to effectively sense the state of the application during operation"),(0,a.kt)("li",{parentName:"ul"},"Support for multiple instance capability, can run multiple sub-applications in the page at the same time to enhance the business splitting efforts"),(0,a.kt)("li",{parentName:"ul"},"Provides efficient and available debugging tools to assist users in the micro front-end mode brings different development experience problems from the traditional R&D model"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud83d\udce6 ",(0,a.kt)("strong",{parentName:"p"},"Highly scalable core module")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The Loader core module supports HTML entry and JS entry, making it easy to access micro front-end applications."),(0,a.kt)("li",{parentName:"ul"},"Router module provides route-driven, master-child route isolation, users only need to configure the routing table application can complete the independent rendering and destruction, the user does not need to care about the internal logic"),(0,a.kt)("li",{parentName:"ul"},"Sandbox module provides runtime isolation for the application's Runtime, which can effectively isolate the side effects of JS and Style on the application"),(0,a.kt)("li",{parentName:"ul"},"Store provides a set of simple communication data exchange mechanism"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\ud83c\udfaf ",(0,a.kt)("strong",{parentName:"p"},"Highly scalable plug-in mechanism")," (coming soon...)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Provides business plugins to meet various customization needs of business parties")))),(0,a.kt)("h2",{id:"architecture-design"},"Architecture Design"),(0,a.kt)("p",null,"! ","[image.png]","(",(0,a.kt)("a",{parentName:"p",href:"https://p-vcloud.byteimg.com/tos-cn-i-em5hxbkur4/d456c7d2235c41daa298aba69ade435f~tplv-em5hxbkur4-noop.image?width="},"https://p-vcloud.byteimg.com/tos-cn-i-em5hxbkur4/d456c7d2235c41daa298aba69ade435f~tplv-em5hxbkur4-noop.image?width=")," 1126&height=454)"),(0,a.kt)("h2",{id:"when-to-use"},"When to use"),(0,a.kt)("p",null,'If you have many team members, many types of projects, and want to make it a "cohesive single product:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The project has team members from multiple teams"),(0,a.kt)("li",{parentName:"ul"},"Requirements crowding occurs in multiple iterations within the project, affecting testing and release efficiency"),(0,a.kt)("li",{parentName:"ul"},"Cross-space and cross-time dimensions lead to the inability to unify the technical system within the team"),(0,a.kt)("li",{parentName:"ul"},'Multiple front-end applications need to achieve the "single product with cohesion" feature'),(0,a.kt)("li",{parentName:"ul"},'Some parts of the "cohesive single product" want to achieve independent development, independent release, independent testing, independent grayscale and other capabilities')))}d.isMDXComponent=!0}}]);