import{b as s,y as u,d as B,j as t,R as p,i as j,B as k,K as T}from"./index-CHAp0xxy.js";import{u as f,B as h}from"./BibleBookmarkText-Dk5kt9pA.js";import{G as a}from"./Grid-C19yOI32.js";const y=e=>{const r=e.dataText;return t.jsx(a,{container:!0,spacing:2,columns:{xs:5,sm:6,md:10,lg:12},id:"id_1",children:t.jsx(a,{item:!0,xs:4,sm:5,md:9,lg:11,children:t.jsx(k,{sx:{color:"text.primary"},children:t.jsx(T,{text:r?.text})})})},"id_1")},v=()=>{const[e,r]=s.useState(null),i={nm:"주기도문",text:`<br>하늘에 계신 우리 아버지여,<br>
    이름이 거룩히 여김을 받으시오며,<br>
    나라이 임하옵시며, 뜻이 하늘에서 이룬 것 같이 땅에서도 이루어지이다.<br>
    오늘날 우리에게 일용할 양식을 주옵시고,<br>
    우리가 우리에게 죄 지은 자를 사하여 준 것 같이 우리 죄를 사하여 주옵시고,<br>
    우리를 시험에 들게 하지 마옵시고, 다만 악에서 구하옵소서.<br>
    (대개 나라와 권세와 영광이 아버지께 영원히 있사옵나이다. 아멘.)<br><br> `},b={nm:"사도신경",text:`<br>
    전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며<br> 
    그 외아들 우리 주 예수 그리스도를 믿사오니<br> 
    이는 성령으로 잉태 하사 동정녀 마리아에게 나시고<br> 
    본디오 빌라도에게 고난을 받으사 십자가에 못 박혀 죽으시고 <br>
    장사한지 사흘만에 죽은자 가운데서 다시 살아나시며 <br>
    하늘에 오르사 전능하신 하나님 우편에 앉아 계시다가 <br>
    저리로서 산 자와 죽은 자를 심판하러 오시리라. <br>
    령을 믿사오며 거룩한 공회와 성도가 서로 교통하는 것과 <br>
    죄를 사하여 주시는 것과 몸이 다시 사는 것과 영원히 사는 것을 믿사옵나이다. 아멘<br><br>`},{query:n,setBibleBookmark:x}=f(),l=s.useRef(),o=u(),{user:c}=B();s.useEffect(()=>{o.pathname==="/bible/prayer"?r(i):r(b)},[o]);const m=d=>{c!==void 0&&x(d)};return t.jsxs(p.Fragment,{children:[t.jsx("div",{id:"back-to-top-anchor"}),t.jsx(h,{}),t.jsx(j,{children:e?.nm}),t.jsx(y,{dataText:e,data:l.current,bookmark:n,onBookmark:m})]})};export{v as BibleDtl,v as default};
