import{j as e,H as N,x as H,B as U,h as $,a as q,b as T,c as f,G,k as K,e as Y,g as J,i as O,r as i,u as Q,A as V}from"./index-20f56ecc.js";import{M as X}from"./MiniNavBar-28657484.js";import{B as Z}from"./BookInfo-a68242fb.js";/* empty css                      */import{C as ee}from"./CountdownTimer-81e2d9ce.js";import{C as te}from"./CustomSplitPane-768ebe46.js";import{M as d}from"./Modal-2b6ce3d3.js";import"./ButtonGroup-ab8695ec.js";import"./Table-6af66ba7.js";const se=({currentSection:r,deviceType:m,formRef:u,handleChange:n,currentFormData:x,userAnswerBySection:t})=>{const a=h=>h?h.trim().split(/\s+/).length:0,p=t[r.id]||"";return e.jsxs(e.Fragment,{children:[e.jsxs("form",{className:"writing-questions mb-2",ref:u,children:[N(r.questions),e.jsx(H.Control,{as:"textarea",rows:m==="mobile"?10:30,placeholder:"Write your answer here",name:`task-${r.id}`,value:p,onChange:n})]}),e.jsx("div",{style:{textAlign:"right"},children:e.jsxs(U,{className:"bg-dark mb-3",children:["Word Count: ",a(p)]})})]})},ne=({currentSection:r})=>e.jsxs("div",{children:[" ",N(r.task)]}),ie=({deviceType:r,handleConfirmEndTest:m,isFirstSection:u,isLastSection:n,handleNextSectionButton:x,handlePreviousSectionButton:t,setShowSubmitModal:a})=>e.jsx("div",{className:"fixed-footer border-top",style:{height:"50px",width:"100vw",position:"fixed",bottom:0,backgroundColor:"white",transition:"height 0.3s",zIndex:"999"},children:e.jsx($,{children:e.jsxs(q,{className:"mt-1 text-black",children:[e.jsx(T,{className:"col-4 mt-1",children:e.jsx(ee,{initialMinutes:60,initialSeconds:0,handleTimesUp:m})}),e.jsxs(T,{className:"col-8 mt-1",style:{textAlign:"right"},children:[e.jsxs(f,{variant:"dark",className:"btn-sm mx-2",onClick:t,disabled:u,children:[e.jsx(G,{size:20})," ",r!=="mobile"&&"Previous Task"]}),n?e.jsxs(f,{variant:"primary",className:"btn-sm",onClick:()=>{a(!0)},children:["Submit Test ",e.jsx(K,{size:20})]}):e.jsxs(f,{variant:"dark",className:"btn-sm",onClick:x,children:["Next Task ",e.jsx(Y,{size:20})]})]})]})})}),fe=()=>{const r=J(),{module_slug:m,attempt_slug:u}=O(),[n,x]=i.useState(null),[t,a]=i.useState(null),[p,h]=i.useState(!1),b=()=>h(!1),[g,k]=i.useState("desktop"),[j,_]=i.useState({}),w=i.useRef(null),[M,E]=i.useState({}),A=t?t.id===n.sections[0].id:!1,B=t?t.id===n.sections[n.sections.length-1].id:!1,[F,v]=i.useState(!1),S=()=>v(!1),W=Q();async function I(){const s=await r.post(V.getWritingModule+m+"/");s.status===200&&(x(s.data),a(s.data.sections[0]))}function L(s){const o=n.sections.find(c=>c.id===s);a(o)}function P(s="In Progress"){const o={answers:j,attempt_type:s};return r.post("/ieltstest/update_attempt/writing/"+u+"/",o)}function y(){C(),P("Completed").then(s=>{s.status===200&&(console.log("Attempt Updated"),W(`/ieltstest/attempt/writing/${m}/${u}/get_result`))}).catch(s=>{console.error("Error updating attempt: ",s)}),S()}function R(){let o=t.id-1;const c=n.sections.find(l=>l.id===o);if(c)a(c);else{const l=n.sections[n.sections.length-1];a(l)}}function z(){let o=t.id+1;const c=n.sections.find(l=>l.id===o);if(c)a(c);else{const l=n.sections[0];a(l)}}i.useEffect(()=>{const s=()=>{window.innerWidth<768?k("mobile"):k("desktop")};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const D=s=>{C()};function C(){if(w.current){const s=new FormData(w.current);let o={};for(let[c,l]of s.entries())o[c]=l;_({...j,[t.id]:o[`task-${t.id}`]}),E(o)}}return i.useEffect(()=>{t&&window.scrollTo(0,0)},[t]),i.useEffect(()=>{C()},[t]),i.useEffect(()=>{I()},[]),i.useEffect(()=>{document.title="Writing Test | KeenIELTS"},[]),n?e.jsxs(e.Fragment,{children:[e.jsx(X,{module:n,currentSection:t,updateCurrentSection:L,setShowTestInfoModal:h}),e.jsx(te,{deviceType:g,currentSection:t,left:e.jsx(ne,{currentSection:t},t.id),right:e.jsx(se,{currentSection:t,deviceType:g,formRef:w,handleChange:D,currentFormData:M,userAnswerBySection:j},t.id)}),e.jsx(ie,{deviceType:g,handleConfirmEndTest:y,isFirstSection:A,isLastSection:B,handleNextSectionButton:z,handlePreviousSectionButton:R,setShowSubmitModal:v}),e.jsxs(d,{show:F,onHide:S,centered:!0,children:[e.jsx(d.Header,{closeButton:!0,children:e.jsx(d.Title,{children:"End Test"})}),e.jsx(d.Body,{children:"Are you sure you want to end the test?"}),e.jsxs(d.Footer,{className:"p-2",children:[e.jsx(f,{variant:"outline-primary",onClick:S,children:"No"}),e.jsx(f,{variant:"primary",onClick:y,children:"Yes, end test"})]})]}),e.jsxs(d,{show:p,onHide:b,centered:!0,className:"p-0",children:[e.jsx(d.Header,{closeButton:!0,children:e.jsx(d.Title,{children:"Test Info"})}),e.jsx(d.Body,{className:"p-0",children:e.jsx(Z,{module:n,attempt_slug:u})}),e.jsx("div",{className:"modal-footer py-2",children:e.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:b,children:"Close"})})]})]}):null};export{fe as default};
//# sourceMappingURL=AttemptWritingModulePage-508d1899.js.map