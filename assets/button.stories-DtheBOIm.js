import{r as R}from"./index-RYns6xqu.js";var x={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=R,B=Symbol.for("react.element"),H=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,v=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function g(e,r,p){var o,t={},d=null,c=null;p!==void 0&&(d=""+p),r.key!==void 0&&(d=""+r.key),r.ref!==void 0&&(c=r.ref);for(o in r)h.call(r,o)&&!P.hasOwnProperty(o)&&(t[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)t[o]===void 0&&(t[o]=r[o]);return{$$typeof:B,type:e,key:d,ref:c,props:t,_owner:v.current}}s.Fragment=H;s.jsx=g;s.jsxs=g;x.exports=s;var i=x.exports;function n({children:e,...r}){return i.jsx("button",{type:"button",...r,children:e})}n.displayName="Button";n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const E={component:n,argTypes:{type:{control:{type:"radio"},options:["button","submit","reset"]}}},a={render:e=>i.jsx(n,{...e,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Primary"}),name:"Button/Primary",args:{children:"Hello",type:"button",style:{color:"blue",border:"1px solid gray",padding:10,borderRadius:10}}},l={render:e=>i.jsx(n,{...e,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello Secondary"}),name:"Button/Secondary",args:{children:"Hello",type:"button",style:{color:"red",border:"1px solid gray",padding:10,borderRadius:10}}};var u,m,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(m=a.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var b,f,_;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(f=l.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const O=["Primary","Secondary"];export{a as Primary,l as Secondary,O as __namedExportsOrder,E as default};
