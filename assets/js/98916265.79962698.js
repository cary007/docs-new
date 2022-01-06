"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5568:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],r={id:"cell-model",title:"Cell Model"},l=void 0,c={unversionedId:"basics/concepts/cell-model",id:"basics/concepts/cell-model",title:"Cell Model",description:"What is a Cell?",source:"@site/docs/basics/concepts/cell-model.md",sourceDirName:"basics/concepts",slug:"/basics/concepts/cell-model",permalink:"/docs/basics/concepts/cell-model",tags:[],version:"current",lastUpdatedBy:"caoliang",lastUpdatedAt:1641462366,formattedLastUpdatedAt:"1/6/2022",frontMatter:{id:"cell-model",title:"Cell Model"},sidebar:"docs",previous:{title:"Nervos Blockchain",permalink:"/docs/basics/concepts/nervos-blockchain"},next:{title:"Consensus",permalink:"/docs/basics/concepts/consensus"}},d=[{value:"What is a Cell?",id:"what-is-a-cell",children:[],level:2},{value:"What is the Cell Model?",id:"what-is-the-cell-model",children:[],level:2},{value:"First-Class Assets",id:"first-class-assets",children:[],level:2},{value:"Transaction Fees Paid by Anyone",id:"transaction-fees-paid-by-anyone",children:[],level:2},{value:"Scalability",id:"scalability",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],h={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-a-cell"},"What is a Cell?"),(0,i.kt)("p",null,"A Cell is the most basic structure needed to represent a single piece of data in Nervos. The data contained in a Cell can take many forms, including CKBytes or tokens, code like Javascript, or even serialized data like JSON strings. There are no restrictions on the type of data included, so developers have complete flexibility in what they choose to work with."),(0,i.kt)("p",null,"Every Cell contains a tiny program called a Lock Script that defines who has permission to use it. Most commonly a Lock Script will define a single user as the owner of the Cell, but it can also do more complex operations such as having multiple owners (multi-sig) or time-locking for conditional usage within certain time-frames."),(0,i.kt)("p",null,"A Cell can optionally include a second program called a Type Script that enforces a set of rules on how the Cell can be used. This gives developers the ability to create complex smart contracts that have a wide range of use cases from CryptoKitties to tokens, DeFi, and everything in between."),(0,i.kt)("h2",{id:"what-is-the-cell-model"},"What is the Cell Model?"),(0,i.kt)("p",null,"The Cell Model defines how individual Cells behave and interact with each other within Nervos, and the process that must be followed to update the data contained within Cells. Those who are familiar with Bitcoin\u2019s UTXO model will notice similarity since the Cell Model is directly inspired by it."),(0,i.kt)("p",null,"Cells are immutable, meaning they cannot change once added to the blockchain. To update any data, the containing Cell must undergo a process called \u201cconsumption\u201d. When a Cell is \u201cconsumed\u201d the data is extracted and the Cell is destroyed. While extracted, the data can be updated as necessary. A new Cell is then created with the updated data and added to the blockchain."),(0,i.kt)("p",null,"A Cell can only be consumed one time. A Cell that has not been consumed is known as a Live Cell. A Cell that has been consumed is known as a Dead Cell. Once a Cell is dead, it can never be used again."),(0,i.kt)("p",null,"Transactions are used to explain changes in Cell data. Specified within the transaction is a group of Live Cells to consume, and a group of new Cells to create with updated data. The transaction is validated by the network by executing all the Lock Scripts and Type Scripts in every Cell within the transaction. This ensures that all the rules defined by the developers are being followed and that no one has cheated."),(0,i.kt)("h2",{id:"first-class-assets"},"First-Class Assets"),(0,i.kt)("p",null,"Nervos\u2019 Cell Model treats all digital assets, such as CKBytes, tokens, and digital collectibles, as the exclusive property and responsibility of their owner. Assets must adhere to smart contract rules when they are included in transactions, but the asset itself belongs to the user, not the smart contract. The difference is subtle, but it is important. "),(0,i.kt)("p",null,"When a user owns the asset, only they have permission to use it. Not even the smart contract that defines the token has permission to the asset. This means that even if an exploit was found in the contract code, the attacker would still be locked out of the assets because they are under user control. This completely mitigates the effects of the attack."),(0,i.kt)("p",null,"Clearly defining ownership of an asset also makes it clear who should be responsible for its upkeep. Assets take up space on Nervos, and therefore require a small recurring upkeep fee commonly known as State Rent. The user is the owner and is therefore responsible for this, not the smart contract. We will cover more about State Rent in the ",(0,i.kt)("a",{parentName:"p",href:"economics"},"Economics")," section."),(0,i.kt)("h2",{id:"transaction-fees-paid-by-anyone"},"Transaction Fees Paid by Anyone"),(0,i.kt)("p",null,"Transaction fees are most often paid by the person sending funds or executing a smart contract. However, there are cases where it is beneficial to have a different party cover the associated fees."),(0,i.kt)("p",null,"A common scenario is the transfer of tokens from one party to another. The sender must own the token then want to transfer and enough CKBytes to cover the cost of the transaction. This creates a usability problem for the user."),(0,i.kt)("p",null,"The flexibility of the Cell Model allows transaction fees to be paid by any party. This can significantly improve the experience for a user since owning CKBytes is no longer an absolute requirement. The receiver or a third-party can pay the fee, greatly simplifying the process for the user."),(0,i.kt)("h2",{id:"scalability"},"Scalability"),(0,i.kt)("p",null,"The Cell Model separates the concepts of computation and validation for smart contract execution. Computation is the process of generating new data and it is done off-chain before a transaction is sent to the network. Validation ensures that the data conforms with the rules set by the developer and is done on-chain by full nodes after being received by the network. Offloading computation reduces the burden on full nodes, raising the total processing capacity of the network."),(0,i.kt)("p",null,"Smart contract execution is parallelized in the Cell Model. Every transaction runs independently in its own virtual machine, and multiple virtual machines run simultaneously instead of having to run one after the other. This allows the Cell Model dramatic scaling improvements on modern computers that increase the number of CPU cores they offer with every new generation."),(0,i.kt)("p",null,"Transactions are very flexible in the Cell Model. Multiple smart contract operations can often be batched into a single transaction instead of having to construct multiple distinct transactions. This cuts down on the overhead involved with a transaction, streamlining the process by reducing the amount of processing and transaction fees required."),(0,i.kt)("p",null,"The unique structure of the Cell Model makes it inherently scalable. By combining these methods together, Nervos is able to achieve much higher levels of smart contract scalability that would not be possible otherwise."),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For more information, please see Nervos Network\u2019s blog post on the ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/nervosnetwork/https-medium-com-nervosnetwork-cell-model-7323fca57571"},"Cell Model"),".")))}u.isMDXComponent=!0}}]);