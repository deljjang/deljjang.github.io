import{j as r}from"./index-C0jVl8wX.js";import{r as s,u as d,R as p}from"./router-v4BRDFYV.js";import{n as u,H as k}from"./App-DWe4jcsa.js";import{T as B}from"./TitleItem-DN2tAwzS.js";import{u as T,B as f}from"./BibleBookmarkText-BvD8Qbzh.js";import"./vendor-CCYiWZgt.js";const j=t=>{const e=t.dataText;return r.jsx("div",{className:"grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-4",id:"id_1",children:r.jsx("div",{className:"col-span-4 sm:col-span-5 md:col-span-9 lg:col-span-11",children:r.jsx("div",{className:"text-gray-900 dark:text-white",children:r.jsx(k,{text:e?.text})})})},"id_1")},N=()=>{const[t,e]=s.useState(null),a={nm:"주기도문",text:`<br>하늘에 계신 우리 아버지여,<br>
    이름이 거룩히 여김을 받으시오며,<br>
    나라이 임하옵시며, 뜻이 하늘에서 이룬 것 같이 땅에서도 이루어지이다.<br>
    오늘날 우리에게 일용할 양식을 주옵시고,<br>
    우리가 우리에게 죄 지은 자를 사하여 준 것 같이 우리 죄를 사하여 주옵시고,<br>
    우리를 시험에 들게 하지 마옵시고, 다만 악에서 구하옵소서.<br>
    (대개 나라와 권세와 영광이 아버지께 영원히 있사옵나이다. 아멘.)<br><br> `},i={nm:"사도신경",text:`<br>
    전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며<br> 
    그 외아들 우리 주 예수 그리스도를 믿사오니<br> 
    이는 성령으로 잉태 하사 동정녀 마리아에게 나시고<br> 
    본디오 빌라도에게 고난을 받으사 십자가에 못 박혀 죽으시고 <br>
    장사한지 사흘만에 죽은자 가운데서 다시 살아나시며 <br>
    하늘에 오르사 전능하신 하나님 우편에 앉아 계시다가 <br>
    저리로서 산 자와 죽은 자를 심판하러 오시리라. <br>
    령을 믿사오며 거룩한 공회와 성도가 서로 교통하는 것과 <br>
    죄를 사하여 주시는 것과 몸이 다시 사는 것과 영원히 사는 것을 믿사옵나이다. 아멘<br><br>`},{query:l,setBibleBookmark:b}=T(),n=s.useRef(),o=d(),{user:c}=u();s.useEffect(()=>{o.pathname==="/bible/prayer"?e(a):e(i)},[o]);const m=x=>{c!==void 0&&b(x)};return r.jsxs(p.Fragment,{children:[r.jsx("div",{id:"back-to-top-anchor"}),r.jsx(f,{}),r.jsx(B,{children:t?.nm}),r.jsx(j,{dataText:t,data:n.current,bookmark:l,onBookmark:m})]})};export{N as BibleDtl,N as default};
