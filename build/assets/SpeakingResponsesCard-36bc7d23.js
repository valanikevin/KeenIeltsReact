import{r as o,j as s,C as l,s as f}from"./index-20f56ecc.js";import{C as b}from"./CustomAudioPlayer-4c5bb694.js";import{A as c}from"./Accordion-3cebcb39.js";import{T as A}from"./Table-6af66ba7.js";const E=({attempt:d,module:n})=>{const[a,m]=o.useState(0),[h,u]=o.useState(null),[x,j]=o.useState(0),p=r=>{Object.entries(d.merged_timestamps).forEach(([e,t])=>{const i=parseFloat(t);r>=i&&m(e)})};return o.useEffect(()=>{n?n.sections.forEach(r=>{r.questions.forEach(e=>{e.id==a&&u(e.question)})}):console.log("Module is null")},[a]),s.jsxs(l,{children:[s.jsx(l.Header,{children:s.jsx("h3",{className:"mt-2 fw-bold",children:"Your Responses"})}),s.jsxs("div",{className:"mt-3",children:[h&&s.jsx("div",{className:"border-bottom px-4 pt-2 pb-3 text-center mb-3",children:s.jsx("h4",{children:h})}),s.jsx("div",{className:"",children:s.jsx(b,{src:d.merged_audio,start_time:x,handleTimeUpdate:p})})]}),s.jsx("hr",{}),s.jsx(l.Body,{children:s.jsx(c,{children:n.sections.map((r,e)=>s.jsxs(c.Item,{eventKey:e,children:[s.jsx(c.Header,{children:s.jsxs("h4",{className:"mt-2 fw-bold",children:[r.section," Questions"]})}),s.jsx(c.Body,{className:"",children:s.jsx("div",{className:"",children:s.jsxs(A,{bordered:!0,striped:!0,responsive:!0,children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:"#"}),s.jsx("th",{scope:"col",children:"Question Asked"}),s.jsx("th",{scope:"col",children:"Play"})]})}),s.jsx("tbody",{children:r.questions.map((t,i)=>s.jsxs("tr",{children:[s.jsx("th",{scope:"row",children:i+1}),s.jsx("td",{children:t.question}),s.jsx("td",{children:s.jsx(f,{size:20,onClick:()=>{j(d.merged_timestamps[t.id])}})})]},i))})]})})})]},e))})})]})};export{E as S};
//# sourceMappingURL=SpeakingResponsesCard-36bc7d23.js.map