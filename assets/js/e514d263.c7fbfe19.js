(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[510],{5318:function(e,n,a){"use strict";a.d(n,{Zo:function(){return m},kt:function(){return c}});var t=a(7378);function p(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){p(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,p=function(e,n){if(null==e)return{};var a,t,p={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(p[a]=e[a]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=t.createContext({}),d=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},m=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(a),c=p,k=u["".concat(o,".").concat(c)]||u[c]||s[c]||i;return a?t.createElement(k,r(r({ref:n},m),{},{components:a})):t.createElement(k,r({ref:n},m))}));function c(e,n){var a=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4815:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var t=a(9603),p=a(120),i=(a(7378),a(5318)),r=["components"],l={title:"\u624b\u52a8\u52a0\u8f7d",slug:"/guide/advance/loadApp",order:1},o=void 0,d={unversionedId:"guide/advance/loadApp",id:"guide/advance/loadApp",isDocsHomePage:!1,title:"\u624b\u52a8\u52a0\u8f7d",description:"Garfish.loadApp(appName LoadAppOptions)",source:"@site/docs/guide/advance/loadApp.md",sourceDirName:"guide/advance",slug:"/guide/advance/loadApp",permalink:"/guide/advance/loadApp",editUrl:"https://github.com/bytedance/garfish/docs/guide/advance/loadApp.md",version:"current",lastUpdatedBy:"Arthur",lastUpdatedAt:1627538935,formattedLastUpdatedAt:"2021/7/29",frontMatter:{title:"\u624b\u52a8\u52a0\u8f7d",slug:"/guide/advance/loadApp",order:1},sidebar:"guide",previous:{title:"\u4ece\u96f6\u5f00\u59cb\u642d\u5efa",permalink:"/guide/develop/from-zero"}},m=[{value:"Garfish.loadApp(appName: string, opts?: LoadAppOptions)",id:"garfishloadappappname-string-opts-loadappoptions",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u4e0d\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff1a",id:"\u4e0d\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff1a",children:[]},{value:"\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff08\u63a8\u8350\u4f7f\u7528\u7f13\u5b58\uff09",id:"\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff08\u63a8\u8350\u4f7f\u7528\u7f13\u5b58\uff09",children:[]},{value:"app.mount \u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5",id:"appmount-\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5",children:[]},{value:"app.unmount \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",id:"appunmount-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",children:[]},{value:"app.show \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",id:"appshow-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",children:[]},{value:"app.hide \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",id:"apphide-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6",children:[]},{value:"\u7f13\u5b58",id:"\u7f13\u5b58",children:[]}],s={toc:m};function u(e){var n=e.components,a=(0,p.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"garfishloadappappname-string-opts-loadappoptions"},"Garfish.loadApp(appName: string, opts?: LoadAppOptions)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"appName - \u5e94\u7528\u552f\u4e00 id\uff0c\u5fc5\u586b\uff0c\u5b50\u5e94\u7528\u7684 id \u540d\u79f0"),(0,i.kt)("li",{parentName:"ul"},"opts - ",(0,i.kt)("inlineCode",{parentName:"li"},"LoadAppOptions")," - \u53ef\u9009\uff0c\u914d\u7f6e\u5b50\u5e94\u7528\u76f8\u5173\u914d\u7f6e\uff08\u53c2\u6570\u57fa\u672c\u4e00\u81f4\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\u591a\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"cache")," \u53c2\u6570\uff0c\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u7684\u53c2\u6570\uff0c\u4f1a\u964d\u7ea7\u4f7f\u7528\u5168\u5c40\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"options"),"\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"domGetter - ",(0,i.kt)("inlineCode",{parentName:"li"},"Element | ()=> Element")," - \u53ef\u9009\uff0c\u672a\u63d0\u4f9b\u65f6\u5c06\u4f7f\u7528 Garfish.run \u7684 domGetter \u53c2\u6570"),(0,i.kt)("li",{parentName:"ul"},"basename - ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," - \u9009\u586b\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"'/'")," \u5b50\u5e94\u7528\u7684\u57fa\u7840\u8def\u7531\uff0c\u8be5\u53c2\u6570\u5c06\u4f1a\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u5230\u5b50\u5e94\u7528\u5bfc\u51fa\u7684 provider \u4e2d\uff0c\u5b50\u5e94\u7528\u5c06\u5176\u4f5c\u4e3a basename \u4ee5\u4fbf\u4e8e\u5b50\u5e94\u7528\u7684\u57fa\u7840\u8def\u7531\u57fa\u4e8e\u5f53\u524d basename"))))),(0,i.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c - ",(0,i.kt)("inlineCode",{parentName:"li"},"appInstance")," - \u5b50\u5e94\u7528\u5b9e\u4f8b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mount(): ",(0,i.kt)("inlineCode",{parentName:"li"},"promise<null>")),(0,i.kt)("li",{parentName:"ul"},"unmount(): ",(0,i.kt)("inlineCode",{parentName:"li"},"promise<null>")),(0,i.kt)("li",{parentName:"ul"},"show(): ",(0,i.kt)("inlineCode",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"hide(): ",(0,i.kt)("inlineCode",{parentName:"li"},"null"))))),(0,i.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,"\u8fd9\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish")," \u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\u7684\u5177\u4f53\u4f7f\u7528\u8bf4\u660e\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish")," \u624b\u52a8\u52a0\u8f7d\u662f\u6574\u4e2a\u5b50\u5e94\u7528\u6e32\u67d3\u7684\u6838\u5fc3\u673a\u5236\u3002\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.loadApp")," \u8fd9\u4e2a api \u6765\u5b9e\u73b0\u3002\n\u4e0b\u9762\u662f\u4e24\u79cd\u52a0\u8f7d\u7684 case\uff1a"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u8981\u4f7f\u7528\u624b\u52a8\u52a0\u8f7d\u6a21\u5f0f\uff0c\u4e3a\u4e86\u907f\u514d\u4e0e\u8def\u7531\u9a71\u52a8\u5e72\u6270\uff0c\u4f60\u5e94\u8be5\u5173\u6389\u8def\u7531\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"autoRefreshApp")," \u6a21\u5f0f\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528\u624b\u52a8\u52a0\u8f7d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"snapshot")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u6253\u5f00\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"vm")," \u6c99\u7bb1\uff0c\u5426\u5219\u57fa\u4e8e\u5feb\u7167\u6c99\u7bb1\u7684\u7ebf\u6027\u89c4\u5f8b\u4f1a\u5bfc\u81f4\u526f\u4f5c\u7528\u88ab\u610f\u5916\u6e05\u9664\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u624b\u52a8\u52a0\u8f7d\u7684\u5b50\u5e94\u7528\uff0c\u9700\u8981\u63d0\u524d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.run")," \u8fdb\u884c\u6ce8\u518c\uff0c\u540c\u65f6\u6ce8\u518c\u7684\u5b50\u5e94\u7528\u4fe1\u606f\uff0c\u4e0d\u9700\u8981\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"li"},"activeWhen"))),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Garfish.run({\n  sandbox: {\n    open: true,\n    snapshot: false,\n  },\n  apps: [\n    {\n      name: 'vueApp',\n      entry: 'xxx',\n    },\n  ],\n  autoRefreshApp: false,\n});\n")),(0,i.kt)("ol",{parentName:"div",start:4},(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u5b50\u5e94\u7528\u6709\u8def\u7531\uff0c\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"load")," \u7684\u65f6\u5019\u4f20\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"basename")," \u4e3a\u5f53\u524d\u9875\u9762\u7684\u57fa\u7840\u8def\u7531\uff0c\u5982\u5728\u5b50\u5e94\u7528 a \u7684\u9875\u9762\u91cc\u624b\u52a8\u52a0\u8f7d\u5b50\u5e94\u7528 b \u65f6\uff0c\u7531\u4e8e b \u9ed8\u8ba4\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"basename")," \u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"/b/"),"\uff0c\u6240\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"li"},"load")," \u7684\u65f6\u5019\u9700\u8981")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Garfish.loadApp('vueApp', { basename: '/vueApp' });\n")))),(0,i.kt)("h3",{id:"\u4e0d\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff1a"},"\u4e0d\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// options \u662f\u53ef\u9009\u7684\uff0c\u5982\u679c\u4e0d\u4f20\uff0c\u9ed8\u8ba4\u4f1a\u4ece Garfish.options \u4e0a\u6df1\u62f7\u8d1d\u4e00\u4efd\u8fc7\u6765\nconst app = await Garfish.loadApp('appName', {\n  domGetter: () => document.getElementById('id'),\n});\n\n// \u6e32\u67d3\uff1a\u7f16\u8bd1\u5b50\u5e94\u7528\u7684\u4ee3\u7801 -> \u521b\u5efa\u5e94\u7528\u5bb9\u5668 -> \u8c03\u7528 provider.render \u6e32\u67d3\nconst success = await app.mount();\n// \u5378\u8f7d\uff1a\u6e05\u9664\u5b50\u5e94\u7528\u7684\u526f\u4f5c\u7528 -> \u8c03\u7528 provider.destroy -> \u9500\u6bc1\u5e94\u7528\u5bb9\u5668\nconst success = await app.unmount();\n")),(0,i.kt)("h3",{id:"\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff08\u63a8\u8350\u4f7f\u7528\u7f13\u5b58\uff09"},"\u9700\u8981\u7f13\u5b58\u7684\u624b\u52a8\u52a0\u8f7d\u65b9\u6848\uff08\u63a8\u8350\u4f7f\u7528\u7f13\u5b58\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const cache = true;\nconst app = await Garfish.loadApp('appName', {\n  domGetter: () => document.getElementById('id'),\n});\n\n// \u6e32\u67d3\nif (cache && app.mounted) {\n  const success = app.show();\n} else {\n  const success = await app.mount();\n}\n// \u5378\u8f7d\nconst success = app.hide();\n")),(0,i.kt)("h3",{id:"appmount-\u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5"},"app.mount \u505a\u4e86\u54ea\u4e9b\u4e8b\u60c5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"li"},"app")," \u5bb9\u5668\u5e76\u6dfb\u52a0\u5230\u6587\u6863\u6d41\u4e0a"),(0,i.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u5b50\u5e94\u7528\u7684\u4ee3\u7801"),(0,i.kt)("li",{parentName:"ol"},"\u62ff\u5230\u5b50\u5e94\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"provider")),(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.options.beforeMount")," \u94a9\u5b50"),(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"provider.render")),(0,i.kt)("li",{parentName:"ol"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.display")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"app.mounted")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ol"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"app")," set \u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.activeApps")," \u4e2d"),(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.options.afterMount")," \u94a9\u5b50",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6e32\u67d3\u5931\u8d25\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"app.mount")," \u4f1a\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5426\u5219\u6e32\u67d3\u6210\u529f\u4f1a\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u8fd4\u56de\u503c\u505a\u5bf9\u5e94\u7684\u5904\u7406\u3002")))),(0,i.kt)("h3",{id:"appunmount-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"},"app.unmount \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.options.beforeUnmount")," \u94a9\u5b50"),(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"provider.destroy")),(0,i.kt)("li",{parentName:"ol"},"\u6e05\u9664\u7f16\u8bd1\u7684\u526f\u4f5c\u7528"),(0,i.kt)("li",{parentName:"ol"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"app")," \u7684\u5bb9\u5668\u4ece\u6587\u6863\u6d41\u4e0a\u79fb\u9664"),(0,i.kt)("li",{parentName:"ol"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.display")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"app.mounted")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ol"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Garfish.activeApps")," \u4e2d\u79fb\u9664\u5f53\u524d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"app")," \u5b9e\u4f8b"),(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.options.afterUnmount")," \u94a9\u5b50",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u540c\u4e0a\uff0c\u53ef\u4ee5\u6839\u636e\u8fd4\u56de\u503c\u6765\u5224\u65ad\u662f\u5426\u5378\u8f7d\u6210\u529f\u3002")))),(0,i.kt)("h3",{id:"appshow-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"},"app.show \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"app")," \u7684\u5bb9\u5668\u6dfb\u52a0\u5230\u6587\u6863\u6d41\u4e0a"),(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"provider.render")),(0,i.kt)("li",{parentName:"ol"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.display")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u540c\u4e0a\uff0c\u53ef\u4ee5\u6839\u636e\u8fd4\u56de\u503c\u6765\u5224\u65ad\u662f\u5426\u6e32\u67d3\u6210\u529f\u3002")))),(0,i.kt)("h3",{id:"apphide-\u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"},"app.hide \u505a\u4e86\u54ea\u4e9b\u4e8b\u4ef6"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"provider.destroy")),(0,i.kt)("li",{parentName:"ol"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"app")," \u7684\u5bb9\u5668\u4ece\u6587\u6863\u6d41\u4e0a\u79fb\u9664"),(0,i.kt)("li",{parentName:"ol"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"app.display")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u540c\u4e0a\uff0c\u53ef\u4ee5\u6839\u636e\u8fd4\u56de\u503c\u6765\u5224\u65ad\u662f\u5426\u9690\u85cf\u6210\u529f\u3002")))),(0,i.kt)("h3",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),(0,i.kt)("p",null,"\u624b\u52a8\u52a0\u8f7d\u63d0\u4f9b\u7684\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"cache")," \u529f\u80fd\uff0c\u4ee5\u4fbf\u590d\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"app"),"\uff0c\u907f\u514d\u91cd\u590d\u7684\u7f16\u8bd1\u4ee3\u7801\u9020\u6210\u7684\u6027\u80fd\u6d6a\u8d39\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Garfish.loadApp")," \u65f6\uff0c\u4f20\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"cache")," \u53c2\u6570\u5c31\u53ef\u4ee5\u3002"),(0,i.kt)("p",null,"\b \u4f8b\u5982\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const app1 = await Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconst app2 = await Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconsole.log(app1 === app2); // true\n")),(0,i.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5bf9\u4e8e\u52a0\u8f7d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"promise")," \u4e5f\u4f1a\u662f\u540c\u4e00\u4efd\uff0c\u4f8b\u5982\u4e0b\u9762\u7684 demo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const promise1 = Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconst promise2 = Garfish.loadApp('appName', {\n  cache: true,\n});\n\nconsole.log(promise1 === promise2); // true\n\nconst app1 = await promise1;\nconst app2 = await promise2;\nconsole.log(app1 === app2); // true\n")))}u.isMDXComponent=!0}}]);