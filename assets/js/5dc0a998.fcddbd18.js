"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4094],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2532:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>p});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"introduction",title:"Nervos CKB Mainnet - Integration Guide"},l=void 0,c={unversionedId:"integrate/introduction",id:"integrate/introduction",title:"Nervos CKB Mainnet - Integration Guide",description:"Connecting to the CKB network is extremely easy and only requires running one node on a machine. Once you've connected to the CKB network, you can use the RPC interface to interacting with the node.",source:"@site/docs/integrate/integration-guide.md",sourceDirName:"integrate",slug:"/integrate/introduction",permalink:"/docs/integrate/introduction",tags:[],version:"current",lastUpdatedBy:"caoliang",lastUpdatedAt:1641462366,formattedLastUpdatedAt:"1/6/2022",frontMatter:{id:"introduction",title:"Nervos CKB Mainnet - Integration Guide"},sidebar:"docs",previous:{title:"Dynamic loading in Capsule",permalink:"/docs/labs/capsule-dynamic-loading-tutorial"},next:{title:"Q&A | For Wallets/Exchanges/Mining Pools",permalink:"/docs/integrate/qa"}},d=[{value:"About Nervos CKB",id:"about-nervos-ckb",children:[],level:2},{value:"Run A CKB Node",id:"run-a-ckb-node",children:[],level:2},{value:"Server Requirements",id:"server-requirements",children:[],level:2},{value:"Writing an integration",id:"writing-an-integration",children:[{value:"Generating and Parsing Address",id:"generating-and-parsing-address",children:[],level:3},{value:"Transferring CKB",id:"transferring-ckb",children:[],level:3},{value:"Retrieving data from node",id:"retrieving-data-from-node",children:[],level:3},{value:"How to manage cells(like UTXO set)",id:"how-to-manage-cellslike-utxo-set",children:[],level:3},{value:"Confirmation count suggestion",id:"confirmation-count-suggestion",children:[],level:3}],level:2},{value:"Testing",id:"testing",children:[],level:2},{value:"Q&amp;A",id:"qa",children:[],level:2}],u={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Connecting to the CKB network is extremely easy and only requires running one node on a machine. Once you've connected to the CKB network, you can use the RPC interface to interacting with the node."),(0,o.kt)("h2",{id:"about-nervos-ckb"},"About Nervos CKB"),(0,o.kt)("p",null,"CKB is the layer 1 of Nervos Network, a public/permissionless blockchain. CKB uses ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proof_of_work"},"Proof of Work")," and ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/nervosnetwork/breaking-the-throughput-limit-of-nakamoto-consensus-ccdf65fe0832"},"improved Nakamoto consensus")," to achieve maximized performance on average hardware and internet conditions without sacrificing decentralization and security, which are the core values of blockchain."),(0,o.kt)("h2",{id:"run-a-ckb-node"},"Run A CKB Node"),(0,o.kt)("p",null,"You\u2019ll need to deploy nodes to connect with the CKB network, read data from the blockchain, and broadcast transactions onto the CKB network. For more information, please see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/guides/mainnet"},"Run CKB With The Latest Release")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/blob/v0.35.0/docs/run-ckb-with-docker.md"},"Run CKB With Docker"),". You may also need an indexer to index live cells and transactions, and then you can try ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-indexer"},"CKB Indexer"),". If you are looking for a one-stop solution that includes both node and indexer, you can try ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xxuejie/perkins-tent"},"Perkins' Tent"),"."),(0,o.kt)("h2",{id:"server-requirements"},"Server Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS: Ubuntu 18.04 LTS x86_64 (recommended)"),(0,o.kt)("li",{parentName:"ul"},"Processor:  Mainstream CPU  4c"),(0,o.kt)("li",{parentName:"ul"},"RAM: 4G"),(0,o.kt)("li",{parentName:"ul"},"Storage: 100G SSD")),(0,o.kt)("h2",{id:"writing-an-integration"},"Writing an integration"),(0,o.kt)("p",null,"Before starting your integration, we recommend reading ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md"},"CKB Transaction Structure")," RFC to familiarize yourself with an essential data structure in CKB. Some common issues and corresponding example solutions (using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/tree/v0.35.1"},"CKB SDK Java"),") are listed below."),(0,o.kt)("h3",{id:"generating-and-parsing-address"},"Generating and Parsing Address"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md"},"CKB Address Format")," is an application-level recommendation for cell lock script display. The lock script consists of three key parameters, including code_hash, hash_type, and args. CKB address packages lock script into a single line, verifiable, and human read friendly format."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generate an Address: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/v0.35.1/ckb/src/test/java/utils/AddressGeneratorTest.java"},"JavaAddressGeneratorTest")," or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-js/blob/v0.35.0/packages/ckb-sdk-utils/__tests__/address/index.test.js#L40"},"JsAddressGeneratorTest"),"."),(0,o.kt)("li",{parentName:"ul"},"Parse an Address: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/v0.35.1/ckb/src/test/java/utils/AddressParserTest.java"},"JavaAddressParserTest")," or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-js/blob/v0.35.0/packages/ckb-sdk-utils/__tests__/address/index.test.js#L78"},"JsAddressParserTest"),"."),(0,o.kt)("li",{parentName:"ul"},"Generate Private key: We won\u2019t generate private keys for you on SDK. You need to produce it on your own, you can try ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/web3j/web3j/blob/116539fff875a083c896b2d569d17416dfeb8a6f/crypto/src/main/java/org/web3j/crypto/Keys.java#L79"},"web3j"),". CKB default lock script code using the same secp256k1 signature verification algorithm as used in bitcoin. For more information, please see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c"},"SECP256k1Blake160"),".")),(0,o.kt)("h3",{id:"transferring-ckb"},"Transferring CKB"),(0,o.kt)("p",null,"The transmission of CKB between addresses is divided into three steps, constructing, signing, and submitting the transaction. You can use the following example to understand how to transfer CKB between addresses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/v0.35.1/example/src/main/java/org/nervos/ckb/SingleSigWithCkbIndexerTxExample.java"},"SingleSigWithCkbIndexerTxExample")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/develop/example/src/main/java/org/nervos/ckb/TransferAllBalanceWithCkbIndexerExample.java"},"TransferAllBalanceWithCkbIndexerExample"),". If you want to know the signing process, you can check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-system-scripts/wiki/How-to-sign-transaction"},"How to sign the transaction"),". For the calculation of transaction fees, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb/wiki/Transaction-%C2%BB-Transaction-Fee"},"Transaction Fee"),"."),(0,o.kt)("p",null,"For withdrawal, need to support both transfers to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md#short-payload-format"},"Short Payload Format Address")," and transfers to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md#full-payload-format"},"Full Payload Format"),"."),(0,o.kt)("h3",{id:"retrieving-data-from-node"},"Retrieving data from node"),(0,o.kt)("p",null,"You can make a JSON-RPC request to your CKB node with the SDK. There are some ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/tree/v0.35.1"},"CKB SDK Java")," examples: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/tree/v0.35.1#json-rpc"},"JSON-RPC Example"),". Commonly used RPC interfaces are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb/blob/v0.35.0/rpc/README.md#get_tip_block_number"},"get_tip_block_number")," Returns, the number/height of blocks in the longest blockchain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb/blob/v0.35.0/rpc/README.md#get_block_by_number"},"get_block_by_number")," Get block by number/height."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb/blob/v0.35.0/rpc/README.md#get_transaction"},"get_transaction")," Returns the information about a transaction requested by transaction hash.\nFor more information, please see the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb/blob/v0.35.0/rpc/README.md"},"CKB JSON-RPC protocols"),". Other available SDK: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-sdk-js/tree/v0.35.0"},"CKB SDK JS"),".")),(0,o.kt)("h3",{id:"how-to-manage-cellslike-utxo-set"},"How to manage cells(like UTXO set)"),(0,o.kt)("p",null,"Cell management mainly affects cell collection and address balance display. There are many ways to manage cells; here are two typical example solutions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Recommended"),": use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-indexer"},"CKB Indexer")," to collect cells and display balance.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-indexer#get_cells_capacity"},"get_cells_capacity")," Returns the live cells total capacity by the lock or type script. You can use this RPC to display address balance."))),(0,o.kt)("li",{parentName:"ul"},"Use your UTXO management framework to combine ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb/blob/v0.35.0/rpc/README.md"},"CKB JSON-RPC protocols")," to scan the entire CKB blockchain.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It is ",(0,o.kt)("strong",{parentName:"li"},"not recommended")," to use the ckb node internal ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb/blob/v0.35.0/rpc/README.md#indexer"},"Indexer module")," to collect live cells, which is very slow and deprecated.")))),(0,o.kt)("h3",{id:"confirmation-count-suggestion"},"Confirmation count suggestion"),(0,o.kt)("p",null,"Since Nervos CKB network is secured by ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/charts/hash-rate"},"ASIC PoW miners with extreme hash rate")," now, it could achieve the same or better security threshold than Ethereum at ",(0,o.kt)("strong",{parentName:"p"},"24 block confirmations"),"."),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Once you\u2019ve fully integrated with the CKB network, please test on the testnet and mainnet."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://explorer.nervos.org/aggron/"},"Testnet Explorer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://explorer.nervos.org/"},"Mainnet Explorer"))),(0,o.kt)("h2",{id:"qa"},"Q&A"),(0,o.kt)("p",null,"When you integrate CKB into your system, you may face some challenges. Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/integrate/introduction"},"Q&A")," that may help you."))}p.isMDXComponent=!0}}]);