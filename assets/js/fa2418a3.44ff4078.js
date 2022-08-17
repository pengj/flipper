"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[880],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),u=function(e){return function(t){var n=m(t.components);return i.createElement(e,a({},t,{components:n}))}},m=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,f=u["".concat(l,".").concat(c)]||u[c]||s[c]||a;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>s});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),l=n(44996),o=n(39960),p=["components"],d={id:"react-native",title:"React Native App - Automatic Setup",sidebar_label:"Automatic Setup"},u=void 0,m={unversionedId:"getting-started/react-native",id:"getting-started/react-native",title:"React Native App - Automatic Setup",description:"Starting with React Native 0.62, after generating your project with react-native init, the Flipper integration is ready out of the box for debug builds:",source:"@site/../docs/getting-started/react-native.mdx",sourceDirName:"getting-started",slug:"/getting-started/react-native",permalink:"/docs/getting-started/react-native",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/getting-started/react-native.mdx",tags:[],version:"current",frontMatter:{id:"react-native",title:"React Native App - Automatic Setup",sidebar_label:"Automatic Setup"},sidebar:"main",previous:{title:"Generic iOS Apps",permalink:"/docs/getting-started/ios-native"},next:{title:"Manual Android Setup",permalink:"/docs/getting-started/react-native-android"}},c={},s=[{value:"Using the latest Flipper SDK",id:"using-the-latest-flipper-sdk",level:3},{value:"Manual Setup",id:"manual-setup",level:2}],f={toc:s};function g(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.mdx)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Starting with React Native 0.62, after generating your project with ",(0,a.mdx)("inlineCode",{parentName:"p"},"react-native init"),", the Flipper integration is ready out of the box for debug builds:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Android")," - start the Flipper Desktop application and start your project using ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn android"),". Your application will appear in Flipper."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"iOS")," - run ",(0,a.mdx)("inlineCode",{parentName:"li"},"pod install")," once in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"ios")," directory of your project. After that, run ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn ios")," and start Flipper. Your application will show up in Flipper.")),(0,a.mdx)("p",null,"By default, the following plugins will be available:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Layout Inspector"),(0,a.mdx)("li",{parentName:"ul"},"Network"),(0,a.mdx)("li",{parentName:"ul"},"Databases"),(0,a.mdx)("li",{parentName:"ul"},"Images"),(0,a.mdx)("li",{parentName:"ul"},"Shared Preferences"),(0,a.mdx)("li",{parentName:"ul"},"Crash Reporter"),(0,a.mdx)("li",{parentName:"ul"},"React DevTools"),(0,a.mdx)("li",{parentName:"ul"},"Metro Logs")),(0,a.mdx)("p",null,"Additional plugins can be installed through the Plugin Manager."),(0,a.mdx)("p",null,"To create your own plugins and integrate with Flipper using JavaScript, see the ",(0,a.mdx)(o.default,{to:(0,l.default)("/docs/tutorial/react-native"),mdxType:"Link"},"Building a React Native Plugin")," tutorial."),(0,a.mdx)("h3",{id:"using-the-latest-flipper-sdk"},"Using the latest Flipper SDK"),(0,a.mdx)("p",null,"By default, React Native might ship with an outdated Flipper SDK. To make sure you are using the latest version, determine the latest released version of Flipper by running ",(0,a.mdx)("inlineCode",{parentName:"p"},"npm info flipper"),"."),(0,a.mdx)("p",null,"Android:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Bump the ",(0,a.mdx)("inlineCode",{parentName:"li"},"FLIPPER_VERSION")," variable in ",(0,a.mdx)("inlineCode",{parentName:"li"},"android/gradle.properties"),", for example: ",(0,a.mdx)("inlineCode",{parentName:"li"},"FLIPPER_VERSION=0.159.0"),"."),(0,a.mdx)("li",{parentName:"ol"},"Run ",(0,a.mdx)("inlineCode",{parentName:"li"},"./gradlew clean")," in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"android")," directory.")),(0,a.mdx)("p",null,"iOS:"),(0,a.mdx)("p",null,"react-native version => 0.69.0"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Call ",(0,a.mdx)("inlineCode",{parentName:"li"},"FlipperConfiguration.enabled")," with a specific version in ",(0,a.mdx)("inlineCode",{parentName:"li"},"ios/Podfile"),", for example: ",(0,a.mdx)("inlineCode",{parentName:"li"},":flipper_configuration => FlipperConfiguration.enabled([\"Debug\"], { 'Flipper' => '0.159.0' }),"),"."),(0,a.mdx)("li",{parentName:"ol"},"Run ",(0,a.mdx)("inlineCode",{parentName:"li"},"pod install --repo-update")," in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"ios")," directory.")),(0,a.mdx)("p",null,"react-native version < 0.69.0"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Call ",(0,a.mdx)("inlineCode",{parentName:"li"},"use_flipper")," with a specific version in ",(0,a.mdx)("inlineCode",{parentName:"li"},"ios/Podfile"),", for example: ",(0,a.mdx)("inlineCode",{parentName:"li"},"use_flipper!({ 'Flipper' => '0.159.0' })"),"."),(0,a.mdx)("li",{parentName:"ol"},"Run ",(0,a.mdx)("inlineCode",{parentName:"li"},"pod install --repo-update")," in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"ios")," directory.")),(0,a.mdx)("h2",{id:"manual-setup"},"Manual Setup"),(0,a.mdx)("p",null,"If you are not using a default React Native template or cannot use the upgrade tool, you can find instructions for how to integrate Flipper into your projects in the following guides:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{href:(0,l.default)("/docs/getting-started/react-native-android")},"React Native for Android")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{href:(0,l.default)("/docs/getting-started/react-native-ios")},"React Native for iOS"))))}g.isMDXComponent=!0}}]);