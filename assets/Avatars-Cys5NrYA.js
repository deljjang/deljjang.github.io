import{j as s,d6 as t,d as i,cW as a,d9 as e,da as l}from"./index-5-bVhsL0.js";import{P as u}from"./PageBreadCrumb-TQP4Mzy2.js";import{P as r}from"./PostDetailPage-E0Nm1ret.js";import{T as m}from"./TailHomeButton-C_VJleDh.js";/* empty css                       */import"./toPropertyKey-DCwh5dYN.js";import"./TailButton-l1ngHwp1.js";function w(){return s.jsxs(s.Fragment,{children:[s.jsx(t,{title:`${i.appTitle} - Tailwind Avatars`,description:"This is React.js Avatars Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"}),s.jsx(m,{}),s.jsx(u,{pageTitle:"Avatars"}),s.jsx(a,{title:"Avatar Component (Avatar.js)",children:s.jsx(r,{postData:`const sizeClasses = {
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
`})}),s.jsxs("div",{className:"space-y-5 sm:space-y-6",children:[s.jsx(a,{title:"Default Avatar",children:s.jsxs("div",{className:"flex flex-col items-center justify-center gap-5 sm:flex-row",children:[s.jsx(e,{src:l,size:"xsmall"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"small"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"medium"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"large"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"xlarge"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"xxlarge"})]})}),s.jsx(r,{postData:`<ComponentCard title="Default Avatar">
  <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
    <Avatar src="/images/user/user-01.jpg" size="xsmall" />
    <Avatar src="/images/user/user-01.jpg" size="small" />
    <Avatar src="/images/user/user-01.jpg" size="medium" />
    <Avatar src="/images/user/user-01.jpg" size="large" />
    <Avatar src="/images/user/user-01.jpg" size="xlarge" />
    <Avatar src="/images/user/user-01.jpg" size="xxlarge" />
  </div>
</ComponentCard>`}),s.jsx(a,{title:"Avatar with online indicator",children:s.jsxs("div",{className:"flex flex-col items-center justify-center gap-5 sm:flex-row",children:[s.jsx(e,{src:"/images/user/user-01.jpg",size:"xsmall",status:"online"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"small",status:"online"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"medium",status:"online"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"large",status:"online"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"xlarge",status:"online"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"xxlarge",status:"online"})]})}),s.jsx(r,{postData:`<ComponentCard title="Avatar with online indicator">
<div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
  <Avatar src="/images/user/user-01.jpg" size="xsmall" status="online"/>
  <Avatar src="/images/user/user-01.jpg" size="small" status="online"/>
  <Avatar src="/images/user/user-01.jpg" size="medium" status="online"/>
  <Avatar src="/images/user/user-01.jpg" size="large" status="online"/>
  <Avatar src="/images/user/user-01.jpg" size="xlarge" status="online"/>
  <Avatar src="/images/user/user-01.jpg" size="xxlarge" status="online"/>
</div>
</ComponentCard>`}),s.jsx(a,{title:"Avatar with Offline indicator",children:s.jsxs("div",{className:"flex flex-col items-center justify-center gap-5 sm:flex-row",children:[s.jsx(e,{src:"/images/user/user-01.jpg",size:"xsmall",status:"offline"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"small",status:"offline"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"medium",status:"offline"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"large",status:"offline"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"xlarge",status:"offline"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"xxlarge",status:"offline"})]})}),s.jsx(r,{postData:`<ComponentCard title="Avatar with Offline indicator">
  <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
    <Avatar src="/images/user/user-01.jpg" size="xsmall" status="offline"/>
    <Avatar src="/images/user/user-01.jpg" size="small" status="offline"/>
    <Avatar src="/images/user/user-01.jpg" size="medium" status="offline"/>
    <Avatar src="/images/user/user-01.jpg" size="large" status="offline"/>
    <Avatar src="/images/user/user-01.jpg" size="xlarge" status="offline"/>
    <Avatar src="/images/user/user-01.jpg" size="xxlarge" status="offline"/>
  </div>
</ComponentCard>`}),s.jsx(a,{title:"Avatar with busy indicator",children:s.jsxs("div",{className:"flex flex-col items-center justify-center gap-5 sm:flex-row",children:[s.jsx(e,{src:"/images/user/user-01.jpg",size:"xsmall",status:"busy"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"small",status:"busy"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"medium",status:"busy"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"large",status:"busy"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"xlarge",status:"busy"}),s.jsx(e,{src:"/images/user/user-01.jpg",size:"xxlarge",status:"busy"})]})}),s.jsx(r,{postData:`<ComponentCard title="Avatar with busy indicator">
  <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
    <Avatar src="/images/user/user-01.jpg" size="xsmall" status="busy"/>
    <Avatar src="/images/user/user-01.jpg" size="small" status="busy"/>
    <Avatar src="/images/user/user-01.jpg" size="medium" status="busy"/>
    <Avatar src="/images/user/user-01.jpg" size="large" status="busy"/>
    <Avatar src="/images/user/user-01.jpg" size="xlarge" status="busy"/>
    <Avatar src="/images/user/user-01.jpg" size="xxlarge" status="busy"/>
  </div>
</ComponentCard>`})]})]})}export{w as default};
