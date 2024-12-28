import{r as j}from"./index-RYns6xqu.js";var S={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=j,P=Symbol.for("react.element"),E=Symbol.for("react.fragment"),L=Object.prototype.hasOwnProperty,O=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function v(r,e,u){var o,a={},c=null,m=null;u!==void 0&&(c=""+u),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(m=e.ref);for(o in e)L.call(e,o)&&!N.hasOwnProperty(o)&&(a[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)a[o]===void 0&&(a[o]=e[o]);return{$$typeof:P,type:r,key:c,ref:m,props:a,_owner:O.current}}p.Fragment=E;p.jsx=v;p.jsxs=v;S.exports=p;var t=S.exports;function n({children:r,...e}){return t.jsx("button",{type:"button",...e,children:r})}n.displayName="Button";n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I={component:n,argTypes:{type:{control:{type:"radio"},options:["button","submit","reset"]}}},l={render:r=>t.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Primary"}),name:"Button/Primary",args:{children:"Hello",type:"button",style:{color:"blue",border:"1px solid gray",padding:10,borderRadius:10}}},s={render:r=>t.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Secondary"}),name:"Button/Secondary",args:{children:"Hello",type:"button",style:{color:"red",border:"1px solid gray",padding:10,borderRadius:10}}},d={render:r=>t.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Tertiary"}),name:"Button/Tertiary",args:{children:"Hello",type:"button",style:{color:"green",border:"1px solid gray",padding:10,borderRadius:10}}},i={render:r=>t.jsx(n,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Large"}),name:"Button/Large",args:{children:"Hello",type:"button",style:{color:"black",border:"1px solid gray",padding:20,borderRadius:10}}};var y,b,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,x,H;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(H=(x=s.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var _,B,R;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(B=d.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var T,h,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const q=["Primary","Secondary","Tertiary","Large"];export{i as Large,l as Primary,s as Secondary,d as Tertiary,q as __namedExportsOrder,I as default};
