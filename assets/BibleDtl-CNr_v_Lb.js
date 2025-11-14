import{r as s,a as m,i as u,j as e,R as p,H as k}from"./index-BZEDgbvu.js";import{T as B}from"./TitleItem-u2MeXqUB.js";import{u as T,B as j}from"./BibleBookmarkText-7ACwiStH.js";const g=t=>{const r=t.dataText;return e.jsx("div",{className:"grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-4",id:"id_1",children:e.jsx("div",{className:"col-span-4 sm:col-span-5 md:col-span-9 lg:col-span-11",children:e.jsx("div",{className:"text-gray-900 dark:text-white",children:e.jsx(k,{text:r?.text})})})},"id_1")},y=()=>{const[t,r]=s.useState(null),o={nm:"주기도문",text:`<br>하늘에 계신 우리 아버지여,<br>
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
    죄를 사하여 주시는 것과 몸이 다시 사는 것과 영원히 사는 것을 믿사옵나이다. 아멘<br><br>`},{query:l,setBibleBookmark:b}=T(),c=s.useRef(),a=m(),{user:n}=u();s.useEffect(()=>{a.pathname==="/bible/prayer"?r(o):r(i)},[a]);const x=d=>{n!==void 0&&b(d)};return e.jsxs(p.Fragment,{children:[e.jsx("div",{id:"back-to-top-anchor"}),e.jsx(j,{}),e.jsx(B,{children:t?.nm}),e.jsx(g,{dataText:t,data:c.current,bookmark:l,onBookmark:x})]})};export{y as BibleDtl,y as default};
