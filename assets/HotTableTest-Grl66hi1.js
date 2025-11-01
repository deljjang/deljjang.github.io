import{a2 as u,j as t,S as s,U as r,r as a}from"./index-C4YqBfyH.js";import{H as n}from"./HtmlCode-CAIKiTUk.js";import"./copy-vX7JQ4Of.js";import"./ComponentCard-CMgFEYwe.js";import"./TwRadio-CX5yOyPk.js";import"./TwBadge-Ba-cKA3k.js";import"./HtmlCode-DZ_vUkWc.js";import"./toPropertyKey-DCwh5dYN.js";r();const c=()=>{const{theme:e}=u(),l=e==="dark"?"ht-theme-main-dark-auto":"ht-theme-main",o=[["","Tesla","Nissan","Toyota","Honda","Mazda","Ford"],["2017",10,11,12,13,15,16],["2018",10,11,12,13,15,16],["2019",10,11,12,13,15,16],["2020",10,11,12,13,15,16],["2021",10,11,12,13,15,16]];return t.jsxs("div",{className:"pt-5 relative",children:[t.jsx(n,{postData:`2. 기본문법 + 테마 적용
<code>lang="React" highlight="5,20-22,26"
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';
import { useSettings } from '@/context/settingsContext';

// register Handsontable's modules
registerAllModules();

const data = [
  ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
  ['2017', 10, 11, 12, 13, 15, 16],
  ['2018', 10, 11, 12, 13, 15, 16],
  ['2019', 10, 11, 12, 13, 15, 16],
  ['2020', 10, 11, 12, 13, 15, 16],
  ['2021', 10, 11, 12, 13, 15, 16],
];

const HotTableTest2 = () => (
  // 테마관련 훅
  const { theme } = useSettings();
  const themeName = theme === 'dark' ? "ht-theme-main-dark-auto" : "ht-theme-main";

  return (
  <HotTable
    themeName={themeName}
    data={data}
    height="auto"
    width="auto"
    colHeaders={true}
    minSpareRows={1}
    autoWrapRow={true}
    autoWrapCol={true}
    licenseKey="non-commercial-and-evaluation"
  />
  );
);

export default HotTableTest2;
</code>
실행예시)`}),t.jsx(s,{themeName:l,data:o,startRows:5,startCols:5,height:"auto",width:"auto",colHeaders:!0,minSpareRows:1,autoWrapRow:!0,autoWrapCol:!0,licenseKey:"non-commercial-and-evaluation"})]})};r();const p=()=>{const[e,l]=a.useState([{data:0},{data:1},{data:2},{data:3},{data:4},{data:5},{data:6}]);a.useRef(null);const[o,h]=a.useState(""),{theme:i}=u(),d=i==="dark"?"ht-theme-main-dark-auto":"ht-theme-main",m=[["","Tesla","Nissan","Toyota","Honda","Mazda","Ford"],["2017",10,11,12,13,15,16],["2018",10,11,12,13,15,16],["2019",10,11,12,13,15,16],["2020",10,11,12,13,15,16],["2021",10,11,12,13,15,16]];return t.jsxs("div",{className:"pt-5 relative",children:[t.jsx(n,{postData:`3. 기본문법 + 테마 적용 + rowHeaders 적용
<code>lang="React" highlight="31"
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';
import { useSettings } from '@/context/settingsContext';

// register Handsontable's modules
registerAllModules();

const data = [
  ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
  ['2017', 10, 11, 12, 13, 15, 16],
  ['2018', 10, 11, 12, 13, 15, 16],
  ['2019', 10, 11, 12, 13, 15, 16],
  ['2020', 10, 11, 12, 13, 15, 16],
  ['2021', 10, 11, 12, 13, 15, 16],
];

const HotTableTest3 = () => (
  // 테마관련 훅
  const { theme } = useSettings();
  const themeName = theme === 'dark' ? "ht-theme-main-dark-auto" : "ht-theme-main";

  return (
  <HotTable
    themeName={themeName}
    data={data}
    height="auto"
    width="auto"
    colHeaders={true}
    rowHeaders={true}
    minSpareRows={1}
    autoWrapRow={true}
    autoWrapCol={true}
    licenseKey="non-commercial-and-evaluation"
  />
  );
);

export default HotTableTest3;
</code>
실행예시)`}),t.jsx(s,{themeName:d,data:m,startRows:5,startCols:5,height:"auto",width:"auto",colHeaders:!0,rowHeaders:!0,minSpareRows:1,autoWrapRow:!0,autoWrapCol:!0,licenseKey:"non-commercial-and-evaluation"})]})};r();const H=()=>{a.useRef(null);const[e,l]=a.useState(""),{theme:o}=u(),h=o==="dark"?"ht-theme-main-dark-auto":"ht-theme-main",i=[{title:"년도",type:"text",data:0},{title:"Tesla",type:"numeric",data:1},{title:"Nissan",type:"numeric",data:2},{title:"Toyota",type:"numeric",data:3},{title:"Honda",type:"numeric",data:4},{title:"Mazda",type:"numeric",data:5},{title:"Ford",type:"numeric",data:6}],d=[["2017",10,11,12,13,15,16],["2018",10,11,12,13,15,16],["2019",10,11,12,13,15,16],["2020",10,11,12,13,15,16],["2021",10,11,12,13,15,16]];return t.jsxs("div",{className:"pt-5 relative",children:[t.jsx(n,{postData:`4. 기본문법 + 테마 적용 + rowHeaders 적용 + 컬럼명변경
<code>lang="React" highlight="11,12, 25-34, 42,43"
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';
import { useSettings } from '@/context/settingsContext';

// register Handsontable's modules
registerAllModules();

const data = [
  //삭제 처리
  // ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
  ['2017', 10, 11, 12, 13, 15, 16],
  ['2018', 10, 11, 12, 13, 15, 16],
  ['2019', 10, 11, 12, 13, 15, 16],
  ['2020', 10, 11, 12, 13, 15, 16],
  ['2021', 10, 11, 12, 13, 15, 16],
];

const HotTableTest4 = () => (
  // 테마관련 훅
  const { theme } = useSettings();
  const themeName = theme === 'dark' ? "ht-theme-main-dark-auto" : "ht-theme-main";

  // 컬럼 정의 추가
  const sheetColumns = [
  {title:'년도',type: 'text',data: 0},
  {title:'Tesla',type: 'numeric',data: 1},
  {title:'Nissan',type: 'numeric',data: 2},
  {title:'Toyota',type: 'numeric',data: 3},
  {title:'Honda',type: 'numeric',data: 4},
  {title:'Mazda',type: 'numeric',data: 5},
  {title:'Ford',type: 'numeric',data: 6},
  ];

  return (
  <HotTable
    themeName={themeName}
    data={data}
    height="auto"
    width="auto"
    // colHeaders={true} 아래와 같이 변경
    colHeaders={sheetColumns.map(col => col.title)}
    rowHeaders={true}
    minSpareRows={1}
    autoWrapRow={true}
    autoWrapCol={true}
    licenseKey="non-commercial-and-evaluation"
  />
  );
);

export default HotTableTest4;
</code>
실행예시)`}),t.jsx(s,{themeName:h,data:d,height:"auto",width:"auto",colHeaders:i.map(m=>m.title),rowHeaders:!0,minSpareRows:1,autoWrapRow:!0,autoWrapCol:!0,licenseKey:"non-commercial-and-evaluation"})]})};r();const S=()=>{const e=[["","Tesla","Nissan","Toyota","Honda","Mazda","Ford"],["2017",10,11,12,13,15,16],["2018",10,11,12,13,15,16],["2019",10,11,12,13,15,16],["2020",10,11,12,13,15,16],["2021",10,11,12,13,15,16]];return t.jsxs("div",{className:"pt-5 relative",children:[t.jsx(n,{postData:`1.기본문법
<code>lang="React" highlight=""
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/styles/handsontable.css';
import 'handsontable/styles/ht-theme-main.css';

// register Handsontable's modules
registerAllModules();

const data = [
  ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
  ['2017', 10, 11, 12, 13, 15, 16],
  ['2018', 10, 11, 12, 13, 15, 16],
  ['2019', 10, 11, 12, 13, 15, 16],
  ['2020', 10, 11, 12, 13, 15, 16],
  ['2021', 10, 11, 12, 13, 15, 16],
];

const HotTableTest = () => (
  <HotTable
    themeName="ht-theme-main"
    data={data}
    height="auto"
    width="auto"
    colHeaders={true}
    minSpareRows={1}
    autoWrapRow={true}
    autoWrapCol={true}
    licenseKey="non-commercial-and-evaluation"
  />
);

export default HotTableTest;
</code>
실행예시)`}),t.jsx(s,{themeName:"ht-theme-main",data:e,height:"auto",width:"auto",colHeaders:!0,minSpareRows:1,autoWrapRow:!0,autoWrapCol:!0,licenseKey:"non-commercial-and-evaluation"}),t.jsx(c,{}),t.jsx(p,{}),t.jsx(H,{})]})};export{S as HotTableTest,S as default};
