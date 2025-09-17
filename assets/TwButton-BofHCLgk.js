import{j as s,m}from"./index-CjwHPcH9.js";function u({size:e="sm",color:t="success",variant:n="outlined",children:o,className:r="",...i}){const a={sm:"px-2 text-xs font-medium min-w-16 h-7 ",md:"px-4 py-2 min-w-20 min-h-8",lg:"px-6 py-3 text-lg min-w-25"},d=n=="outlined"?`border rounded-${e} 
      border-${t}-500 text-${t}-500
      border-1
      hover:border-2 border-${t}-200`:`bg-${t}-500 
      text-white dark:text-black`;return s.jsx(m.div,{whileHover:{scale:1},whileTap:{scale:.9},children:s.jsx("button",{className:`
          ${d}
          ${a[e]}
          focus:outline-none
          transition-colors duration-200
          ${r}
          `,...i,children:o})})}export{u as T};
