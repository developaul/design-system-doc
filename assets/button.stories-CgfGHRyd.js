import{r as L}from"./index-RYns6xqu.js";var P={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=L,N=Symbol.for("react.element"),w=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,q=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function E(r,e,m){var o,l={},u=null,y=null;m!==void 0&&(u=""+m),e.key!==void 0&&(u=""+e.key),e.ref!==void 0&&(y=e.ref);for(o in e)I.call(e,o)&&!D.hasOwnProperty(o)&&(l[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)l[o]===void 0&&(l[o]=e[o]);return{$$typeof:N,type:r,key:u,ref:y,props:l,_owner:q.current}}c.Fragment=w;c.jsx=E;c.jsxs=E;P.exports=c;var t=P.exports;function n({children:r,...e}){return t.jsx("button",{type:"button",...e,children:r})}n.displayName="Button";n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const U={component:n,argTypes:{type:{control:{type:"radio"},options:["button","submit","reset"]}}},a={render:r=>t.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Primary"}),name:"Button/Primary",args:{children:"Hello",type:"button",style:{color:"blue",border:"1px solid gray",padding:10,borderRadius:10}}},s={render:r=>t.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Secondary"}),name:"Button/Secondary",args:{children:"Hello",type:"button",style:{color:"red",border:"1px solid gray",padding:10,borderRadius:10}}},d={render:r=>t.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Tertiary"}),name:"Button/Tertiary",args:{children:"Hello",type:"button",style:{color:"green",border:"1px solid gray",padding:10,borderRadius:10}}},i={render:r=>t.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Large"}),name:"Button/Large",args:{children:"Hello",type:"button",style:{color:"black",border:"1px solid gray",padding:20,borderRadius:10}}},p={render:r=>t.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Small"}),name:"Button/Small",args:{children:"Hello",type:"button",style:{color:"black",border:"1px solid gray",padding:5,borderRadius:10}}};var b,g,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,H,B;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(H=s.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var R,S,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(S=d.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var T,h,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <Button {...props} onClick={(): void => {
    // eslint-disable-next-line no-alert -- alert for demo
    alert("Hello from Turborepo!");
  }}>
      Hello Large
    </Button>,
  name: "Button/Large",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "black",
      border: "1px solid gray",
      padding: 20,
      borderRadius: 10
    }
  }
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,C,j;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <Button {...props} onClick={(): void => {
    // eslint-disable-next-line no-alert -- alert for demo
    alert("Hello from Turborepo!");
  }}>
      Hello Small
    </Button>,
  name: "Button/Small",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "black",
      border: "1px solid gray",
      padding: 5,
      borderRadius: 10
    }
  }
}`,...(j=(C=p.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const $=["Primary","Secondary","Tertiary","Large","Small"];export{i as Large,a as Primary,s as Secondary,p as Small,d as Tertiary,$ as __namedExportsOrder,U as default};
