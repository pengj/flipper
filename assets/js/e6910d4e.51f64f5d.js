"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4616],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>s});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){return function(t){var n=c(t.components);return r.createElement(e,a({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,m=s["".concat(o,".").concat(d)]||s[d]||f[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),i=n(86010);const a="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.default)(a,o),hidden:n},t)}},74866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var r=n(83117),i=n(67294),a=n(86010),o=n(12466),l=n(76775),p=n(91980),u=n(67392),s=n(50012);function c(e){return function(e){var t,n;return null!=(t=null==(n=i.Children.map(e,(function(e){if(!e||(0,i.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,i.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,a=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,p._X)(o),(0,i.useCallback)((function(e){if(o){var t=new URLSearchParams(a.location.search);t.set(o,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[o,a])]}function g(e){var t,n,r,a,o=e.defaultValue,l=e.queryString,p=void 0!==l&&l,u=e.groupId,c=d(e),g=(0,i.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:c})})),b=g[0],h=g[1],v=m({queryString:p,groupId:u}),y=v[0],w=v[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,s.Nk)(t),r=n[0],a=n[1],[r,(0,i.useCallback)((function(e){t&&a.set(e)}),[t,a])]),O=x[0],N=x[1],C=function(){var e=null!=y?y:O;return f({value:e,tabValues:c})?e:null}();return(0,i.useLayoutEffect)((function(){C&&h(C)}),[C]),{selectedValue:b,selectValue:(0,i.useCallback)((function(e){if(!f({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);h(e),w(e),N(e)}),[w,N,c]),tabValues:c}}var b=n(72389);const h="tabList__CuJ",v="tabItem_LNqP";function y(e){var t=e.className,n=e.block,l=e.selectedValue,p=e.selectValue,u=e.tabValues,s=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=s.indexOf(t),r=u[n].value;r!==l&&(c(t),p(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,i=s.indexOf(e.currentTarget)+1;n=null!=(r=s[i])?r:s[0];break;case"ArrowLeft":var a,o=s.indexOf(e.currentTarget)-1;n=null!=(a=s[o])?a:s[s.length-1]}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:d},o,{className:(0,a.default)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,r=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=a.find((function(e){return e.props.value===r}));return o?(0,i.cloneElement)(o,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function x(e){var t=g(e);return i.createElement("div",{className:(0,a.default)("tabs-container",h)},i.createElement(y,(0,r.Z)({},e,t)),i.createElement(w,(0,r.Z)({},e,t)))}function O(e){var t=(0,b.default)();return i.createElement(x,(0,r.Z)({key:String(t)},e))}},76591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>c,toc:()=>f});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=(n(44996),n(39960),n(74866)),l=n(85162),p=["components"],u={id:"ios-native",title:"Adding Flipper to Generic iOS Apps",sidebar_label:"Generic iOS Apps"},s=void 0,c={unversionedId:"getting-started/ios-native",id:"getting-started/ios-native",title:"Adding Flipper to Generic iOS Apps",description:"Swift and Objective-C are supported for Flipper with CocoaPods as build and distribution mechanism.",source:"@site/../docs/getting-started/ios-native.mdx",sourceDirName:"getting-started",slug:"/getting-started/ios-native",permalink:"/docs/getting-started/ios-native",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/getting-started/ios-native.mdx",tags:[],version:"current",frontMatter:{id:"ios-native",title:"Adding Flipper to Generic iOS Apps",sidebar_label:"Generic iOS Apps"},sidebar:"main",previous:{title:"Android with Gradle",permalink:"/docs/getting-started/android-native"},next:{title:"Automatic Setup",permalink:"/docs/getting-started/react-native"}},d={},f=[{value:"CocoaPods",id:"cocoapods",level:2},{value:"For pure Objective-C projects",id:"for-pure-objective-c-projects",level:2},{value:"Enabling plugins",id:"enabling-plugins",level:2},{value:"Issues or questions",id:"issues-or-questions",level:2}],m={toc:f};function g(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"Swift and Objective-C are supported for Flipper with CocoaPods as build and distribution mechanism.")),(0,a.mdx)("h2",{id:"cocoapods"},"CocoaPods"),(0,a.mdx)("p",null,"The following configuration assumes CocoaPods 1.9+:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"},"project 'MyApp.xcodeproj'\nflipperkit_version = '0.222.0'\n\ntarget 'MyApp' do\n  platform :ios, '10.0'\n\n  # It is likely that you'll only want to include Flipper in debug builds,\n  # in which case you add the `:configuration` directive:\n  pod 'FlipperKit', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitLayoutComponentKitSupport', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  # ...unfortunately at this time that means you'll need to explicitly mark\n  # transitive dependencies as being for debug build only as well:\n  pod 'Flipper-DoubleConversion', :configuration => 'Debug'\n  pod 'Flipper-Folly', :configuration => 'Debug'\n  pod 'Flipper-Glog', :configuration => 'Debug'\n  pod 'Flipper-PeerTalk', :configuration => 'Debug'\n  pod 'CocoaLibEvent', :configuration => 'Debug'\n  pod 'boost-for-react-native', :configuration => 'Debug'\n  pod 'OpenSSL-Universal', :configuration => 'Debug'\n  pod 'CocoaAsyncSocket', :configuration => 'Debug'\n  # ...except, of course, those transitive dependencies that your\n  # application itself depends, e.g.:\n  pod 'ComponentKit', '~> 0.31'\n\n  # If you use `use_frameworks!` in your Podfile,\n  # uncomment the below $static_framework array and also\n  # the pre_install section.  This will cause Flipper and\n  # it's dependencies to be built as a static library and all other pods to\n  # be dynamic.\n  #\n  # NOTE Doing this may lead to a broken build if any of these are also\n  #      transitive dependencies of other dependencies and are expected\n  #      to be built as frameworks.\n  #\n  # $static_framework = ['FlipperKit', 'Flipper', 'Flipper-Folly',\n  #   'CocoaAsyncSocket', 'ComponentKit', 'Flipper-DoubleConversion',\n  #   'Flipper-Glog', 'Flipper-PeerTalk', 'Flipper-RSocket', 'Yoga', 'YogaKit',\n  #   'CocoaLibEvent', 'OpenSSL-Universal', 'boost-for-react-native', 'Flipper-Fmt']\n  #\n  # pre_install do |installer|\n  #   Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}\n  #   installer.pod_targets.each do |pod|\n  #       if $static_framework.include?(pod.name)\n  #         def pod.build_type;\n  #           Pod::BuildType.static_library\n  #         end\n  #       end\n  #     end\n  # end\nend\n")),(0,a.mdx)("h2",{id:"for-pure-objective-c-projects"},"For pure Objective-C projects"),(0,a.mdx)("p",null,"For pure Objective-C projects, add the following to your settings:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"/usr/lib/swift")," as the first entry of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"LD_RUNPATH_SEARCH_PATHS"))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Add the following in ",(0,a.mdx)("inlineCode",{parentName:"p"},"LIBRARY_SEARCH_PATHS")),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},'"\\"$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)\\"",\n"\\"$(TOOLCHAIN_DIR)/usr/lib/swift-5.0/$(PLATFORM_NAME)\\"",\n'))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"If, after following the above two steps, there are still errors such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"Undefined symbol _swift_getFunctionReplacement"),", then set ",(0,a.mdx)("inlineCode",{parentName:"p"},"DEAD_CODE_STRIPPING")," to ",(0,a.mdx)("inlineCode",{parentName:"p"},"YES"),". The reference for this fix is in the ",(0,a.mdx)("a",{parentName:"p",href:"https://forums.swift.org/t/undefined-symbol-swift-getfunctionreplacement/30495/4"},"Swift forum")))),(0,a.mdx)("p",null,"This is done to overcome a bug with Xcode 11 which fails to compile Swift code when bitcode is enabled. Flipper transitively depends on YogaKit, which is written in Swift.\nFor more information about this issue, refer to the Swift code ",(0,a.mdx)("a",{parentName:"p",href:"https://twitter.com/krzyzanowskim/status/1151549874653081601?s=21"},"tweet")," and ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/Carthage/Carthage/issues/2825"},"Github issue"),"."),(0,a.mdx)("p",null,"Install the dependencies by running ",(0,a.mdx)("inlineCode",{parentName:"p"},"pod install"),". You can now import and initialize Flipper in yourAppDelegate."),(0,a.mdx)(o.default,{defaultValue:"objC",values:[{label:"ObjC",value:"objC"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,a.mdx)(l.default,{value:"objC",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKit/FlipperClient.h>\n#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n#import <FlipperKitLayoutComponentKitSupport/FlipperKitLayoutComponentKitSupport.h>\n#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  FlipperClient *client = [FlipperClient sharedClient];\n  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];\n  [FlipperKitLayoutComponentKitSupport setUpWithDescriptorMapper: layoutDescriptorMapper];\n  [client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application\n                                                 withDescriptorMapper: layoutDescriptorMapper]];\n\n  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];\n  [client addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n  [client start];\n  ...\n}\n@end\n"))),(0,a.mdx)(l.default,{value:"swift",mdxType:"TabItem"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"import UIKit\nimport FlipperKit\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n  var window: UIWindow?\n\n\n  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    // Override point for customization after application launch.\n    let client = FlipperClient.shared()\n    let layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\n    FlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)\n    client?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n    client?.start()\n    return true\n  }\n}\n")))),(0,a.mdx)("h2",{id:"enabling-plugins"},"Enabling plugins"),(0,a.mdx)("p",null,"Finally, you need to add plugins to your Flipper client. The Layout Inspector plugin is shown above to get you started.\nSee ",(0,a.mdx)("a",{parentName:"p",href:"/docs/setup/plugins/network"},"Network Plugin")," and ",(0,a.mdx)("a",{parentName:"p",href:"/docs/features/plugins/inspector"},"Layout Inspector Plugin")," for information on how to add them and enable Litho or ComponentKit support. You can check the sample apps in the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper"},"GitHub repo")," for examples of integrating other plugins."),(0,a.mdx)("h2",{id:"issues-or-questions"},"Issues or questions"),(0,a.mdx)("p",null,"If you encounter any issues or have any questions, refer to the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/getting-started/troubleshooting/"},"Troubleshooting")," section."))}g.isMDXComponent=!0}}]);