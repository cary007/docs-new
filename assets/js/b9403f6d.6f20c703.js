"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5487:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>d});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={id:"nervos-blockchain",title:"Nervos Blockchain"},l=void 0,c={unversionedId:"basics/concepts/nervos-blockchain",id:"basics/concepts/nervos-blockchain",title:"Nervos Blockchain",description:"What is the Nervos Blockchain?",source:"@site/docs/basics/concepts/nervos-blockchain.md",sourceDirName:"basics/concepts",slug:"/basics/concepts/nervos-blockchain",permalink:"/docs/basics/concepts/nervos-blockchain",tags:[],version:"current",lastUpdatedBy:"JiangXL",lastUpdatedAt:1641394979,formattedLastUpdatedAt:"1/5/2022",frontMatter:{id:"nervos-blockchain",title:"Nervos Blockchain"},sidebar:"docs",previous:{title:"Basics Introduction",permalink:"/docs/basics/introduction"},next:{title:"Cell Model",permalink:"/docs/basics/concepts/cell-model"}},u=[{value:"What is the Nervos Blockchain?",id:"what-is-the-nervos-blockchain",children:[],level:2},{value:"Multi-Layer Architecture",id:"multi-layer-architecture",children:[],level:2},{value:"What is a CKByte?",id:"what-is-a-ckbyte",children:[],level:2},{value:"Programming on Nervos",id:"programming-on-nervos",children:[],level:2},{value:"Consensus",id:"consensus",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-the-nervos-blockchain"},"What is the Nervos Blockchain?"),(0,a.kt)("p",null,"The Nervos blockchain, also known as the Common Knowledge Base, is the bottom-most layer in the Nervos ecosystem. It serves as a foundation to build on and provides trust to all layers built on top. It is designed to maximize decentralization while remaining minimal, flexible, and secure. Its main purpose is the reliable preservation of any data and assets stored within it."),(0,a.kt)("h2",{id:"multi-layer-architecture"},"Multi-Layer Architecture"),(0,a.kt)("p",null,"Trade-offs must be made when designing any decentralized system. An example of a common trade-off is between scalability, security, and decentralization. Achieving high levels of all three on a single layer is difficult to impossible, but different layers can each address different concerns."),(0,a.kt)("p",null,"An example of how layering helps improve this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Layer 1 focuses on security and decentralization, providing trust to higher layers."),(0,a.kt)("li",{parentName:"ul"},"Layer 2 focuses on scalability, providing nearly instantaneous transactions for millions of users.")),(0,a.kt)("p",null,"The two layers function together to achieve higher levels of decentralization, security, and scalability."),(0,a.kt)("p",null,"The Nervos blockchain represents layer 1 of the multi-layer architecture, and its core design principles prioritize security and decentralization."),(0,a.kt)("h2",{id:"what-is-a-ckbyte"},"What is a CKByte?"),(0,a.kt)("p",null,"The native token of Nervos is known as the CKByte, or CKB for short. One CKByte token entitles the holder to one byte of data storage on Nervos. The CKByte is also used to pay any fees associated with transactions and computation."),(0,a.kt)("p",null,"If you need to store 100 bytes of data in Nervos, you must own 100 CKBytes. While your data is occupying space on Nervos, your CKBytes will remain locked. If your data is no longer needed and you remove it from Nervos, then the 100 CKBytes can be used for other purposes."),(0,a.kt)("p",null,"CKBytes can also be deposited in the Nervos DAO where they gain interest in a process similar to staking."),(0,a.kt)("p",null,"We will cover more about the CKByte in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/concepts/cell-model"},"Cell Model")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/concepts/economics"},"Economics")," sections."),(0,a.kt)("h2",{id:"programming-on-nervos"},"Programming on Nervos"),(0,a.kt)("p",null,"Nervos offers smart contract programmability using a growing number of well-known general-purpose programming languages, such as Javascript, Rust, and C."),(0,a.kt)("p",null,"All programs on Nervos can store data and state on-chain. This makes the creation of complex applications and customized tokens a simple and straightforward process."),(0,a.kt)("p",null,"All code is executed in CKB-VM, a high-performance RISC-V virtual machine that provides a safe, consistent, and flexible environment for developers to utilize. Multiple instances of CKB-VM can execute different smart contracts at the same time, enabling substantial scaling improvements through massive parallelization."),(0,a.kt)("p",null,"We will cover more about programming on Nervos in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/concepts/cell-model"},"Cell Model")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/concepts/ckb-vm"},"CKB-VM")," sections."),(0,a.kt)("h2",{id:"consensus"},"Consensus"),(0,a.kt)("p",null,"Nervos uses a Proof of Work (PoW) based consensus algorithm known as NC-MAX. PoW has repeatedly been proven to be the best in class solution for incentivized security."),(0,a.kt)("p",null,"Building on Bitcoin\u2019s Nakamoto Consensus, NC-MAX dramatically increases transactions per second and decreases confirmation time without compromising on security or decentralization."),(0,a.kt)("p",null,"Nervos currently provides a 10x throughput increase compared to Ethereum and is expected to grow exponentially as layer 2 solutions are developed."),(0,a.kt)("p",null,"We will cover more about the design of Nervos\u2019 consensus implementation in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/concepts/consensus"},"Consensus")," section."))}d.isMDXComponent=!0}}]);