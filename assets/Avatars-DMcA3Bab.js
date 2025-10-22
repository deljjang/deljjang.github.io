import{s as o,j as a,cb as s}from"./index-DX1m-Xvo.js";import{C as e}from"./ComponentCard-7ehoQwQR.js";import{P as g}from"./PageBreadCrumb-BQYq9-EI.js";import{H as t}from"./HtmlCode-CPCpKAXU.js";import{M as c}from"./main_top0-DjmmyEfh.js";/* empty css                   */import{T as x}from"./TwTestButton-B_XAXTqt.js";import"./PdfFileViewer-BK-x-RGj.js";import"./copy-CG19dzGi.js";import"./TwBadge-C-ReJCdL.js";import"./TwRadio-ZGuDc9m1.js";import"./toPropertyKey-DCwh5dYN.js";import"./HtmlText-CCIln2w1.js";import"./index-B_T6fSce.js";/* empty css                   */import"./Button-Cu8EPM-v.js";function R(){const r=`<code>React
const sizeClasses = {
  xsmall: "h-6 w-6 max-w-6",
  small: "h-8 w-8 max-w-8",
  medium: "h-10 w-10 max-w-10",
  large: "h-12 w-12 max-w-12",
  xlarge: "h-14 w-14 max-w-14",
  xxlarge: "h-16 w-16 max-w-16",
};

const statusSizeClasses = {
  xsmall: "h-1.5 w-1.5 max-w-1.5",
  small: "h-2 w-2 max-w-2",
  medium: "h-2.5 w-2.5 max-w-2.5",
  large: "h-3 w-3 max-w-3",
  xlarge: "h-3.5 w-3.5 max-w-3.5",
  xxlarge: "h-4 w-4 max-w-4",
};

const statusColorClasses = {
  online: "bg-success-500",
  offline: "bg-error-400",
  busy: "bg-warning-500",
};

const Avatar = ({
  src,
  alt = "User Avatar",
  size = "medium",
  status = "none",
}) => {
  return (
    <div className={\`relative  rounded-full \${sizeClasses[size]}\`}>
      {/* Avatar Image */}
      <img src={src} alt={alt} className="object-cover rounded-full" />

      {/* Status Indicator */}
      {status !== "none" && (
        <span
          className={\`absolute bottom-0 right-0 rounded-full border-[1.5px] border-white dark:border-gray-900 \${
            statusSizeClasses[size]
          } \${statusColorClasses[status] || ""}\`}
        ></span>
      )}
    </div>
  );
};
export default Avatar;
</code>
`,i=`<code>React
<ComponentCard title="Default Avatar">
  <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
    <Avatar src="/images/avatars/3.png" size="xsmall" />
    <Avatar src="/images/avatars/3.png" size="small" />
    <Avatar src="/images/avatars/3.png" size="medium" />
    <Avatar src="/images/avatars/3.png" size="large" />
    <Avatar src="/images/avatars/3.png" size="xlarge" />
    <Avatar src="/images/avatars/3.png" size="xxlarge" />
  </div>
</ComponentCard>
</code>`,l=`<code>React
<ComponentCard title="Avatar with online indicator">
<div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
  <Avatar src="/images/avatars/3.png" size="xsmall" status="online"/>
  <Avatar src="/images/avatars/3.png" size="small" status="online"/>
  <Avatar src="/images/avatars/3.png" size="medium" status="online"/>
  <Avatar src="/images/avatars/3.png" size="large" status="online"/>
  <Avatar src="/images/avatars/3.png" size="xlarge" status="online"/>
  <Avatar src="/images/avatars/3.png" size="xxlarge" status="online"/>
</div>
</ComponentCard>
</code>`,n=`<code>React
<ComponentCard title="Avatar with Offline indicator">
  <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
    <Avatar src="/images/avatars/3.png" size="xsmall" status="offline"/>
    <Avatar src="/images/avatars/3.png" size="small" status="offline"/>
    <Avatar src="/images/avatars/3.png" size="medium" status="offline"/>
    <Avatar src="/images/avatars/3.png" size="large" status="offline"/>
    <Avatar src="/images/avatars/3.png" size="xlarge" status="offline"/>
    <Avatar src="/images/avatars/3.png" size="xxlarge" status="offline"/>
  </div>
</ComponentCard>
</code>`,m=`<code>React
<ComponentCard title="Avatar with busy indicator">
  <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
    <Avatar src="/images/avatars/3.png" size="xsmall" status="busy"/>
    <Avatar src="/images/avatars/3.png" size="small" status="busy"/>
    <Avatar src="/images/avatars/3.png" size="medium" status="busy"/>
    <Avatar src="/images/avatars/3.png" size="large" status="busy"/>
    <Avatar src="/images/avatars/3.png" size="xlarge" status="busy"/>
    <Avatar src="/images/avatars/3.png" size="xxlarge" status="busy"/>
  </div>
</ComponentCard>
</code>`;return o({title:"Tailwind Avatars",description:"This is React.js Avatars Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"}),a.jsxs(a.Fragment,{children:[a.jsx(x,{}),a.jsx(g,{pageTitle:"Avatars"}),a.jsx(e,{title:"Avatar Component (Avatar.js)",children:a.jsx(t,{postData:r})}),a.jsxs("div",{className:"space-y-5 sm:space-y-6 mt-5",children:[a.jsx(e,{title:"Default Avatar",children:a.jsxs("div",{className:"flex flex-col items-center justify-center gap-5 sm:flex-row",children:[a.jsx(s,{src:c,size:"xsmall"}),a.jsx(s,{src:"/images/avatars/3.png",size:"small"}),a.jsx(s,{src:"/images/avatars/3.png",size:"medium"}),a.jsx(s,{src:"/images/avatars/3.png",size:"large"}),a.jsx(s,{src:"/images/avatars/3.png",size:"xlarge"}),a.jsx(s,{src:"/images/avatars/3.png",size:"xxlarge"})]})}),a.jsx(t,{postData:i}),a.jsx(e,{title:"Avatar with online indicator",children:a.jsxs("div",{className:"flex flex-col items-center justify-center gap-5 sm:flex-row",children:[a.jsx(s,{src:"/images/avatars/3.png",size:"xsmall",status:"online"}),a.jsx(s,{src:"/images/avatars/3.png",size:"small",status:"online"}),a.jsx(s,{src:"/images/avatars/3.png",size:"medium",status:"online"}),a.jsx(s,{src:"/images/avatars/3.png",size:"large",status:"online"}),a.jsx(s,{src:"/images/avatars/3.png",size:"xlarge",status:"online"}),a.jsx(s,{src:"/images/avatars/3.png",size:"xxlarge",status:"online"})]})}),a.jsx(t,{postData:l}),a.jsx(e,{title:"Avatar with Offline indicator",children:a.jsxs("div",{className:"flex flex-col items-center justify-center gap-5 sm:flex-row",children:[a.jsx(s,{src:"/images/avatars/3.png",size:"xsmall",status:"offline"}),a.jsx(s,{src:"/images/avatars/3.png",size:"small",status:"offline"}),a.jsx(s,{src:"/images/avatars/3.png",size:"medium",status:"offline"}),a.jsx(s,{src:"/images/avatars/3.png",size:"large",status:"offline"}),a.jsx(s,{src:"/images/avatars/3.png",size:"xlarge",status:"offline"}),a.jsx(s,{src:"/images/avatars/3.png",size:"xxlarge",status:"offline"})]})}),a.jsx(t,{postData:n}),a.jsx(e,{title:"Avatar with busy indicator",children:a.jsxs("div",{className:"flex flex-col items-center justify-center gap-5 sm:flex-row",children:[a.jsx(s,{src:"/images/avatars/3.png",size:"xsmall",status:"busy"}),a.jsx(s,{src:"/images/avatars/3.png",size:"small",status:"busy"}),a.jsx(s,{src:"/images/avatars/3.png",size:"medium",status:"busy"}),a.jsx(s,{src:"/images/avatars/3.png",size:"large",status:"busy"}),a.jsx(s,{src:"/images/avatars/3.png",size:"xlarge",status:"busy"}),a.jsx(s,{src:"/images/avatars/3.png",size:"xxlarge",status:"busy"})]})}),a.jsx(t,{postData:m})]})]})}export{R as default};
