"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(r),h=n,u=m["".concat(c,".").concat(h)]||m[h]||p[h]||s;return r?o.createElement(u,a(a({ref:t},d),{},{components:r})):o.createElement(u,a({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3227:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,toc:()=>d,default:()=>m});var o=r(7462),n=r(3366),s=(r(7294),r(3905)),a=["components"],i={id:"rfcs",title:"A Tour of RFCs"},c=void 0,l={unversionedId:"essays/rfcs",id:"essays/rfcs",title:"A Tour of RFCs",description:"The Nervos Network is made up of a number of protocols and innovations. It's important to have clear documentation and technical specifications on key protocol design and implementations - for which we utilize an RFC (request for comment) process which is intended to provide an open and community driven path for new protocols, improvements and best practices.",source:"@site/docs/essays/rfcs.md",sourceDirName:"essays",slug:"/essays/rfcs",permalink:"/docs/essays/rfcs",tags:[],version:"current",lastUpdatedBy:"JiangXL",lastUpdatedAt:1641394979,formattedLastUpdatedAt:"1/5/2022",frontMatter:{id:"rfcs",title:"A Tour of RFCs"},sidebar:"docs",previous:{title:"Developer Materials Guide",permalink:"/docs/essays/developer-materials-guide"},next:{title:"Transaction validation lifecycle",permalink:"/docs/essays/lifecycle"}},d=[{value:"Informational",id:"informational",children:[{value:"The Nervos Network Positioning Paper",id:"the-nervos-network-positioning-paper",children:[],level:3},{value:"Nervos CKB: A Common Knowledge Base for Crypto-Economy",id:"nervos-ckb-a-common-knowledge-base-for-crypto-economy",children:[],level:3},{value:"CKB-VM",id:"ckb-vm",children:[],level:3},{value:"Privileged architecture support for CKB VM",id:"privileged-architecture-support-for-ckb-vm",children:[],level:3},{value:"Crypto-Economics of the Nervos Common Knowledge Base",id:"crypto-economics-of-the-nervos-common-knowledge-base",children:[],level:3},{value:"Data Structures",id:"data-structures",children:[],level:3},{value:"CKB Consensus Protocol",id:"ckb-consensus-protocol",children:[],level:3},{value:"CKB Transaction Structure",id:"ckb-transaction-structure",children:[],level:3}],level:2},{value:"Standards Track",id:"standards-track",children:[{value:"CKB Block Synchronization Protocol",id:"ckb-block-synchronization-protocol",children:[],level:3},{value:"Merkle Tree for Static Data",id:"merkle-tree-for-static-data",children:[],level:3},{value:"P2P Scoring System And Network Security",id:"p2p-scoring-system-and-network-security",children:[],level:3},{value:"Serialization",id:"serialization",children:[],level:3},{value:"VM Syscalls",id:"vm-syscalls",children:[],level:3},{value:"Eaglesong (Proof-of-Work Function for Nervos CKB)",id:"eaglesong-proof-of-work-function-for-nervos-ckb",children:[],level:3},{value:"Transaction Filter",id:"transaction-filter",children:[],level:3},{value:"Node Discovery",id:"node-discovery",children:[],level:3},{value:"Block Template",id:"block-template",children:[],level:3},{value:"VM Cycle Limits",id:"vm-cycle-limits",children:[],level:3},{value:"Transaction valid since",id:"transaction-valid-since",children:[],level:3},{value:"CKB Address Format",id:"ckb-address-format",children:[],level:3},{value:"Deposit and Withdraw in Nervos DAO",id:"deposit-and-withdraw-in-nervos-dao",children:[],level:3}],level:2}],p={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Nervos Network is made up of a number of protocols and innovations. It's important to have clear documentation and technical specifications on key protocol design and implementations - for which we utilize an ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs"},"RFC")," (request for comment) process which is intended to provide an open and community driven path for new protocols, improvements and best practices."),(0,s.kt)("p",null,"This tour provides  short introduction on our RFCs and links, hope it will be helpful for you to round out your journey to Nervos Network. There are two categories of RFCs\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Informational - Anything related to Nervos network.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Standards Track - RFC that is intended to be standard followed by protocols, clients and applications in Nervos Network."))),(0,s.kt)("h2",{id:"informational"},"Informational"),(0,s.kt)("h3",{id:"the-nervos-network-positioning-paper"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0001-positioning/0001-positioning.md"},"The Nervos Network Positioning Paper")),(0,s.kt)("p",null,"This document provides a high-level walkthrough of all parts of the Nervos Network, with a focus on how they work together to support the overall vision of the network. "),(0,s.kt)("h3",{id:"nervos-ckb-a-common-knowledge-base-for-crypto-economy"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md"},"Nervos CKB: A Common Knowledge Base for Crypto-Economy")),(0,s.kt)("p",null,"This is Nervos CKB whitepaper, provides an overview of the Nervos Common Knowledge Base (CKB), a public permissionless blockchain and layer 1 of Nervos. "),(0,s.kt)("h3",{id:"ckb-vm"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0003-ckb-vm/0003-ckb-vm.md"},"CKB-VM")),(0,s.kt)("p",null,"This RFC introduces CKB-VM (CKB-Virtual Machine)  which is a RISC-V instruction set based VM for executing smart contracts on Nervos CKB, written in Rust. There is a user defined token(UDT) issuing process used as an example to demenstrate the implementation of CKB-VM."),(0,s.kt)("h3",{id:"privileged-architecture-support-for-ckb-vm"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0005-priviledged-mode/0005-priviledged-mode.md"},"Privileged architecture support for CKB VM")),(0,s.kt)("p",null,"This RFC  introduces privileged architecture support for CKB VM. While CKB VM doesn't require a privileged model since it only runs one contract at a time, privileged model can help bring MMU support."),(0,s.kt)("h3",{id:"crypto-economics-of-the-nervos-common-knowledge-base"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md"},"Crypto-Economics of the Nervos Common Knowledge Base")),(0,s.kt)("p",null,'This RFC introduces the crypto-economics of Nervos CKB. Nervos CKB is the base layer of the overall Nervos Network which is a preservation focused, "Store of Assets" blockchain. Economically, it\'s designed to provide sustainable security and decentralization.'),(0,s.kt)("h3",{id:"data-structures"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md"},"Data Structures")),(0,s.kt)("p",null,"This RFC explains all the basic data structures used in CKB, includes ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Cell"},"Cell"),", ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Script"},"Script"),", ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Transaction"},"Transaction")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Block"},"Block"),"."),(0,s.kt)("h3",{id:"ckb-consensus-protocol"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0020-ckb-consensus-protocol/0020-ckb-consensus-protocol.md"},"CKB Consensus Protocol")),(0,s.kt)("p",null,"This is Nervos CKB consensue paper. The CKB consensus protocol is a variant of NC that raises its performance limit and selfish mining resistance while keeping its merits. "),(0,s.kt)("h3",{id:"ckb-transaction-structure"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md"},"CKB Transaction Structure")),(0,s.kt)("p",null,"This RFC is about an essential data structure in CKB, the transaction, contains two parts, the first one covers the core transaction features and the second one introduces some extensions."),(0,s.kt)("h2",{id:"standards-track"},"Standards Track"),(0,s.kt)("h3",{id:"ckb-block-synchronization-protocol"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0004-ckb-block-sync/0004-ckb-block-sync.md"},"CKB Block Synchronization Protocol")),(0,s.kt)("p",null,"Block synchronization must be performed in stages with ",(0,s.kt)("a",{parentName:"p",href:"https://bitcoin.org/en/glossary/headers-first-sync"},"Bitcoin Headers First")," style. Block is downloaded in parts in each stage and is validated using the obtained parts."),(0,s.kt)("h3",{id:"merkle-tree-for-static-data"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0006-merkle-tree/0006-merkle-tree.md"},"Merkle Tree for Static Data")),(0,s.kt)("p",null,"CKB uses Complete Binary Merkle Tree(CBMT) to generate ",(0,s.kt)("em",{parentName:"p"},"Merkle Root")," and ",(0,s.kt)("em",{parentName:"p"},"Merkle Proof")," for a static list of items. "),(0,s.kt)("h3",{id:"p2p-scoring-system-and-network-security"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0007-scoring-system-and-network-security/0007-scoring-system-and-network-security.md"},"P2P Scoring System And Network Security")),(0,s.kt)("p",null,"This RFC describes the scoring system of CKB P2P Networking layer and several networking security strategies based on it."),(0,s.kt)("h3",{id:"serialization"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0008-serialization/0008-serialization.md"},"Serialization")),(0,s.kt)("p",null,"This RFC introduces two major serialization formats, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0008-serialization/0008-serialization.md#molecule"},"Molecule")," and ",(0,s.kt)("a",{parentName:"p",href:"https://www.json.org/"},"JSON"),", used in CKB."),(0,s.kt)("h3",{id:"vm-syscalls"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0009-vm-syscalls/0009-vm-syscalls.md"},"VM Syscalls")),(0,s.kt)("p",null,"This RFC describes all the RISC-V VM syscalls implemented in CKB so far.CKB VM syscalls are used to implement communications between the RISC-V based CKB VM, and the main CKB process, allowing scripts running in the VM to read current transaction information as well as general blockchain information from CKB. "),(0,s.kt)("h3",{id:"eaglesong-proof-of-work-function-for-nervos-ckb"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0010-eaglesong/0010-eaglesong.md"},"Eaglesong (Proof-of-Work Function for Nervos CKB)")),(0,s.kt)("p",null,"This RFC specifies the Eaglesong hash function as it is to be used in the context of Nervos CKB proof-of-work."),(0,s.kt)("h3",{id:"transaction-filter"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0011-transaction-filter-protocol/0011-transaction-filter-protocol.md"},"Transaction Filter")),(0,s.kt)("p",null,"Transaction filter protocol allows peers to reduce the amount of transaction data they send which is to allow low-capacity peers to maintain a high-security assurance about the up to date state of some particular transactions of the chain or verify the execution of transactions."),(0,s.kt)("h3",{id:"node-discovery"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0012-node-discovery/0012-node-discovery.md"},"Node Discovery")),(0,s.kt)("p",null,"This RFC introduces the CKB Node Discovery.It mainly refers to ",(0,s.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Satoshi_Client_Node_Discovery"},"Satoshi Client Node Discovery"),". The differences between them are summarized below:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The node version number is included in the ",(0,s.kt)("inlineCode",{parentName:"li"},"GetNodes")," message."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"Nodes")," message is used to periodically broadcast all nodes currently connected."),(0,s.kt)("li",{parentName:"ul"},"We use ",(0,s.kt)("inlineCode",{parentName:"li"},"multiaddr")," as the format of node addresses (It MUST NOT include ",(0,s.kt)("inlineCode",{parentName:"li"},"/p2p/")," segment otherwise it's considered as ",(0,s.kt)("em",{parentName:"li"},"misbehavior")," and a low score SHOULD be given.)")),(0,s.kt)("h3",{id:"block-template"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0013-get-block-template/0013-get-block-template.md"},"Block Template")),(0,s.kt)("p",null,"This RFC describes the decentralized CKB mining protocol which is to improve the security of the CKB network by making blocks decentralized."),(0,s.kt)("h3",{id:"vm-cycle-limits"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0014-vm-cycle-limits/0014-vm-cycle-limits.md"},"VM Cycle Limits")),(0,s.kt)("p",null,"This RFC describes cycle limits used to regulate VM scripts.CKB VM is a flexible VM that is free to implement many control flow constructs. We need to enforce certain rules in CKB VM to prevent malicious scripts, such as a script with infinite loops."),(0,s.kt)("h3",{id:"transaction-valid-since"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0017-tx-valid-since/0017-tx-valid-since.md"},"Transaction valid since")),(0,s.kt)("p",null,"This RFC introduces a new consensus rule to prevent a cell to be spent before a certain block timestamp or a block number by adding a new ",(0,s.kt)("inlineCode",{parentName:"p"},"u64"),"  type field:  ",(0,s.kt)("inlineCode",{parentName:"p"},"since")," in the transaction input."),(0,s.kt)("h3",{id:"ckb-address-format"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md"},"CKB Address Format")),(0,s.kt)("p",null,"This RFC introduces how to implement CKB Address Format which is an application level cell lock script display recommendation.CKB address packages lock script into a single line, verifiable, and human read friendly format."),(0,s.kt)("h3",{id:"deposit-and-withdraw-in-nervos-dao"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0023-dao-deposit-withdraw/0023-dao-deposit-withdraw.md"},"Deposit and Withdraw in Nervos DAO")),(0,s.kt)("p",null,"This RFC describes deposit and withdraw transaction in Nervos DAO. Nervos DAO is a smart contract and one function of Nervos DAO is to provide an dilution counter-measure for CKByte holders. Please pay attention to  ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/wiki/Common-Gotchas#nervos-dao"},"Common Gotchas")," which including common and very important points you should be aware to use Nervos DAO well without losing CKBs."))}m.isMDXComponent=!0}}]);