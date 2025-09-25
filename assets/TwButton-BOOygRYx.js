import{j as s,l as d}from"./index-BH1tI84G.js";function l({size:t="sm",color:e="success",variant:n="outlined",children:o,className:r="",...i}){const a={sm:"px-2 text-xs font-medium min-w-18 h-7 ",md:"px-4 py-2 min-w-20 min-h-8",lg:"px-6 py-3 text-lg min-w-25"},m=n=="outlined"?`border rounded-${t} 
      border-${e}-500 text-${e}-500
      border-1
      hover:border-2 border-${e}-200`:`bg-${e}-500 
      text-white dark:text-black`;return s.jsx(d.div,{whileHover:{scale:1},whileTap:{scale:.95},className:"flex items-center",children:s.jsx("button",{className:`
          ${m}
          ${a[t]}
          focus:outline-none
          transition-colors duration-200
          ${r}
          `,...i,children:o})})}export{l as T};
