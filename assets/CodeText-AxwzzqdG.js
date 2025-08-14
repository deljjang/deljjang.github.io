import{aG as s,j as a,s as d}from"./index-BOYjaTAS.js";s.configure({languages:["javascript","ruby","python","java","cpp","kotlin","sql"]});const i=d("pre")(({props:t})=>({...t,color:"rgb(206 204 226)",backgroundColor:"rgb(27 27 27 / 87%)",textAlign:"left",paddingLeft:"3px",width:"100%",wordBreak:"break-word",wordWrap:"break-word",whiteSpace:"pre",overflowX:"auto",borderLeft:"2px solid #358ccb"}));function p(t){let n=0;const r=/<span class="hljs-comment">(.|\n)*?<\/span>/g,o=t.replace(r,e=>e.replace(/\r?\n/g,()=>`
<span class="hljs-comment">`)),l=o.split(/\r?\n/).length-1;return`<table class='code-table'>${o.split(/\r?\n/).map((e,c)=>l===c&&e===""?"":`<tr>
              <td class='line-number' data-pseudo-content=${++n}></td>
              <td class='line-content'>${e}</td>
            </tr>`).join("")}</table>`}function h(t){const n=s.highlightAuto(t.text).value,r=p(n);return a.jsx(i,{...t,children:a.jsx("div",{dangerouslySetInnerHTML:{__html:r}})})}export{h as C,p as c};
