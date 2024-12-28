import{r as h}from"./index-RYns6xqu.js";var T={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=h,v=Symbol.for("react.element"),k=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,j=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function B(r,e,c){var o,t={},p=null,u=null;c!==void 0&&(p=""+c),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(u=e.ref);for(o in e)P.call(e,o)&&!E.hasOwnProperty(o)&&(t[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)t[o]===void 0&&(t[o]=e[o]);return{$$typeof:v,type:r,key:p,ref:u,props:t,_owner:j.current}}d.Fragment=k;d.jsx=B;d.jsxs=B;T.exports=d;var i=T.exports;function n({children:r,...e}){return i.jsx("button",{type:"button",...e,children:r})}n.displayName="Button";n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const C={component:n,argTypes:{type:{control:{type:"radio"},options:["button","submit","reset"]}}},a={render:r=>i.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Primary"}),name:"Button/Primary",args:{children:"Hello",type:"button",style:{color:"blue",border:"1px solid gray",padding:10,borderRadius:10}}},l={render:r=>i.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Secondary"}),name:"Button/Secondary",args:{children:"Hello",type:"button",style:{color:"red",border:"1px solid gray",padding:10,borderRadius:10}}},s={render:r=>i.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Tertiary"}),name:"Button/Tertiary",args:{children:"Hello",type:"button",style:{color:"green",border:"1px solid gray",padding:10,borderRadius:10}}};var y,m,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <Button {...props} onClick={(): void => {
    // eslint-disable-next-line no-alert -- alert for demo
    alert("Hello from Turborepo!");
  }}>
      Hello Primary
    </Button>,
  name: "Button/Primary",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10
    }
  }
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,g,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <Button {...props} onClick={(): void => {
    // eslint-disable-next-line no-alert -- alert for demo
    alert("Hello from Turborepo!");
  }}>
      Hello Secondary
    </Button>,
  name: "Button/Secondary",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "red",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10
    }
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var _,H,R;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => <Button {...props} onClick={(): void => {
    // eslint-disable-next-line no-alert -- alert for demo
    alert("Hello from Turborepo!");
  }}>
      Hello Tertiary
    </Button>,
  name: "Button/Tertiary",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "green",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10
    }
  }
}`,...(R=(H=s.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};const N=["Primary","Secondary","Tertiary"];export{a as Primary,l as Secondary,s as Tertiary,N as __namedExportsOrder,C as default};
