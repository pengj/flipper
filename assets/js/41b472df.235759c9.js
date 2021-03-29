(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return O}));var r=n(3),i=n(7),a=(n(0),n(157)),o=n(166),l=n(167),s={id:"testing",title:"Testing"},c={unversionedId:"extending/testing",id:"extending/testing",isDocsHomePage:!1,title:"Testing",description:"Developer tools are only used if they work. We have built APIs to test plugins.",source:"@site/../docs/extending/testing.mdx",slug:"/extending/testing",permalink:"/docs/extending/testing",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/testing.mdx",version:"current",sidebar:"extending",previous:{title:"Plugin structure",permalink:"/docs/extending/desktop-plugin-structure"},next:{title:"Debugging",permalink:"/docs/extending/debugging"}},p=[{value:"Writing tests",id:"writing-tests",children:[]},{value:"Desktop plugins",id:"desktop-plugins",children:[]},{value:"Client plugins",id:"client-plugins",children:[]},{value:"Running (Flipper) tests",id:"running-flipper-tests",children:[{value:"Flipper Desktop",id:"flipper-desktop",children:[]},{value:"Flipper SDK",id:"flipper-sdk",children:[]},{value:"iOS",id:"ios",children:[]},{value:"React Native",id:"react-native",children:[]}]}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},b=u("OssOnly"),d=u("FbAndroidTesting"),m=u("FbIosTesting"),f=u("FbInternalOnly"),g={toc:p};function O(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Developer tools are only used if they work. We have built APIs to test plugins."),Object(a.b)("h2",{id:"writing-tests"},"Writing tests"),Object(a.b)("h2",{id:"desktop-plugins"},"Desktop plugins"),Object(a.b)("p",null,"Flipper uses ",Object(a.b)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," as unit testing framework."),Object(a.b)("p",null,"Writing unit tests for Flipper Desktop plugins is covered in detail in the ",Object(a.b)("a",{parentName:"p",href:"../../docs/tutorial/js-custom#testing-plugin-logic"},"tutorial"),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"flipper-plugin")," package provide several ",Object(a.b)("a",{parentName:"p",href:"../../docs/extending/flipper-plugin#testutils"},"test utilities")," to make testing more convenient."),Object(a.b)("h2",{id:"client-plugins"},"Client plugins"),Object(a.b)(o.a,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"android",mdxType:"TabItem"},Object(a.b)(b,{mdxType:"OssOnly"},"Start by creating your first test file in this directory `MyFlipperPluginTest.java`. In the test method body we create our plugin which we want to test as well as a `FlipperConnectionMock`. In this contrived example we simply assert that our plugin's connected status is what we expect.",Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"@RunWith(RobolectricTestRunner.class)\npublic class MyFlipperPluginTest {\n\n  @Test\n  public void myTest() {\n    final MyFlipperPlugin plugin = new MyFlipperPlugin();\n    final FlipperConnectionMock connection = new FlipperConnectionMock();\n\n    plugin.onConnect(connection);\n    assertThat(plugin.connected(), equalTo(true));\n  }\n}\n")),Object(a.b)("p",null,"There are two mock classes that are used to construct tests ",Object(a.b)("inlineCode",{parentName:"p"},"FlipperConnectionMock")," and ",Object(a.b)("inlineCode",{parentName:"p"},"FlipperResponderMock"),". Together these can be used to write very powerful tests to verify the end to end behavior of your plugin. For example we can test if for a given incoming message our plugin responds as we expect."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void myTest() {\n  final MyFlipperPlugin plugin = new MyFlipperPlugin();\n  final FlipperConnectionMock connection = new FlipperConnectionMock();\n  final FlipperResponderMock responder = new FlipperResponderMock();\n\n  plugin.onConnect(connection);\n\n  final FlipperObject params = new FlipperObject.Builder()\n      .put("phrase", "flipper")\n      .build();\n  connection.receivers.get("myMethod").onReceive(params, responder);\n\n  assertThat(responder.successes, hasItem(\n      new FlipperObject.Builder()\n          .put("phrase", "ranos")\n          .build()));\n}\n'))),Object(a.b)(d,{mdxType:"FbAndroidTesting"})),Object(a.b)(l.a,{value:"ios",mdxType:"TabItem"},Object(a.b)(b,{mdxType:"OssOnly"},Object(a.b)("p",null,"Start by creating your first test file in this directory ",Object(a.b)("inlineCode",{parentName:"p"},"MyFlipperPluginTests.cpp")," and import the testing utilities from ",Object(a.b)("inlineCode",{parentName:"p"},"fbsource//xplat/sonar/xplat:FlipperTestLib"),". These utilities mock out core pieces of the communication channel so that you can test your plugin in isolation."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objc"},"#include <MyFlipperPlugin/MyFlipperPlugin.h>\n#include <FlipperTestLib/FlipperConnectionMock.h>\n#include <FlipperTestLib/FlipperResponderMock.h>\n\n#include <folly/json.h>\n#include <gtest/gtest.h>\n\nnamespace facebook {\nnamespace flipper {\nnamespace test {\n\nTEST(MyFlipperPluginTests, testDummy) {\n  EXPECT_EQ(1 + 1, 2);\n}\n\n} // namespace test\n} // namespace flipper\n} // namespace facebook\n")),Object(a.b)("p",null,"Here is a simple test using these mock utilities to create a plugin, send some data, and assert that the result is as expected."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objc"},'TEST(MyFlipperPluginTests, testDummy) {\n  std::vector<folly::dynamic> successfulResponses;\n  auto responder = std::make_unique<FlipperResponderMock>(&successfulResponses);\n  auto conn = std::make_shared<FlipperConnectionMock>();\n\n  MyFlipperPlugin plugin;\n  plugin.didConnect(conn);\n\n  folly::dynamic message = folly::dynamic::object("param1", "hello");\n  folly::dynamic expectedResponse = folly::dynamic::object("response", "Hi there");\n\n  auto receiver = conn->receivers_["someMethod"];\n  receiver(message, std::move(responder));\n\n  EXPECT_EQ(successfulResponses.size(), 1);\n  EXPECT_EQ(successfulResponses.back(), expectedResponse);\n}\n'))),Object(a.b)(m,{mdxType:"FbIosTesting"}))),Object(a.b)("h2",{id:"running-flipper-tests"},"Running (Flipper) tests"),Object(a.b)("h3",{id:"flipper-desktop"},"Flipper Desktop"),Object(a.b)(b,{mdxType:"OssOnly"},Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn jest")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn jest --watch")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"desktop")," directory of your Flipper checkout.")),Object(a.b)(f,{mdxType:"FbInternalOnly"},Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn jest")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn jest --watch")," in ",Object(a.b)("inlineCode",{parentName:"p"},"~/fbsource/xplat/sonar/desktop"))),Object(a.b)("h3",{id:"flipper-sdk"},"Flipper SDK"),Object(a.b)("h4",{id:"android-java"},"Android (Java)"),Object(a.b)(b,{mdxType:"OssOnly"},Object(a.b)("h5",{id:"gradle"},"Gradle:"),Object(a.b)("p",null,"In the root directory of the checkout:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"./gradlew android:test\n"))),Object(a.b)(f,{mdxType:"FbInternalOnly"},Object(a.b)("h5",{id:"gradle-1"},"Gradle:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"cd fbsource/xplat/sonar\n./gradlew android:test\n")),Object(a.b)("h5",{id:"buck"},"Buck:"),Object(a.b)("p",null,"I don't know of a way to run them locally \ud83d\ude1e Make a change and submit a diff."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"buck test ...")," should work, but doesn't seem to when run in xplat on mac but they do work on mobile on demand, if you use @mode/server."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Debugging note: They do work if you copy the files and BUCK file to")," ",Object(a.b)("inlineCode",{parentName:"p"},"fbandroid/javatests")," ",Object(a.b)("em",{parentName:"p"},"and change the rule from")," ",Object(a.b)("inlineCode",{parentName:"p"},"sonar_android_test")," ",Object(a.b)("em",{parentName:"p"},"to")," ",Object(a.b)("inlineCode",{parentName:"p"},"robolectric3_test"))),Object(a.b)(f,{mdxType:"FbInternalOnly"},Object(a.b)("h3",{id:"ios"},"iOS"),Object(a.b)("p",null,"Focus on the plugins, or flipper code you want but with the --with-tests param."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"arc focus ... --with-tests")),Object(a.b)("p",null,"Then click the <-> icon  in xcode and you can run them there.")),Object(a.b)("h3",{id:"react-native"},"React Native"),Object(a.b)("p",null,"See ",Object(a.b)("a",{parentName:"p",href:"testing-rn"},"testing React Native"),"."))}O.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},161:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},163:function(e,t,n){"use strict";var r=n(0),i=n(164);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},164:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},166:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(163),o=n(161),l=n(67),s=n.n(l);var c=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(a.a)(),f=m.tabGroupChoices,g=m.setTabGroupChoices,O=Object(r.useState)(l),y=O[0],h=O[1],j=r.Children.toArray(e.children),v=[];if(null!=b){var w=f[b];null!=w&&w!==y&&u.some((function(e){return e.value===w}))&&h(w)}var k=function(e){var t=e.target,n=v.indexOf(t),r=j[n].props.value;h(r),null!=b&&(g(b,r),setTimeout((function(){var e,n,r,i,a,o,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&a<=c&&i<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case p:var r=v.indexOf(e.target)+1;n=v[r]||v[0];break;case c:var i=v.indexOf(e.target)-1;n=v[i]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:T,onFocus:k,onClick:k},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},167:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);