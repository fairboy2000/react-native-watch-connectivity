(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return p})),n.d(e,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(124)),o={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},c={id:"introduction",title:"Introduction",description:"react-native-watch-connectivity is a library for interacting with Apple Watch apps from a companion React Native app.",source:"@site/docs/introduction.md",permalink:"/react-native-watch-connectivity/docs/introduction",editUrl:"https://github.com/mtford90/react-native-watch-connectivity.github.io/edit/master/docs/introduction.md",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Installation",permalink:"/react-native-watch-connectivity/docs/installation"}},p=[],l={rightToc:p};function u(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"react-native-watch-connectivity")," is a library for interacting with Apple Watch apps from a companion React Native app."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," this library does NOT allow you to create a Watch App in react native but rather facilitates communication with a Watch App written in Swift/Objective-C."),Object(i.b)("p",null,"Features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Communication including both interactive messaging & background transfers"),Object(i.b)("li",{parentName:"ul"},"File transfers"),Object(i.b)("li",{parentName:"ul"},"Watch monitoring including reachability, pairing status & watch app installation.")))}u.isMDXComponent=!0},124:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=a.a.createContext({}),u=function(t){var e=a.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=u(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},f=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),s=u(n),f=r,d=s["".concat(o,".").concat(f)]||s[f]||b[f]||i;return n?a.a.createElement(d,c(c({ref:e},l),{},{components:n})):a.a.createElement(d,c({ref:e},l))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);