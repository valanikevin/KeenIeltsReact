import{r as n,f as o,j as s,a as x,b as m,C as t,a9 as e,d as r}from"./index-e388c6e0.js";import{T as h}from"./Tab-a3d8f586.js";const u=({page:l="dashboard"})=>{const[a,c]=n.useState({first_name:"Loading",last_name:"..."});o();function d(){const i=JSON.parse(localStorage.getItem("user"));c(i)}return n.useEffect(()=>{d()},[]),a?s.jsxs(x,{className:"align-items-center",children:[s.jsxs(m,{xl:12,lg:12,md:12,sm:12,children:[s.jsx("div",{className:" bg-primary",children:" "}),s.jsxs(t,{className:" border",children:[s.jsx(t.Header,{className:"",children:s.jsxs("h2",{className:"mb-0",children:[a.first_name," ",a.last_name]})}),s.jsx(t.Body,{className:"p-0",children:s.jsx(h.Container,{defaultActiveKey:String(l),children:s.jsxs(e,{className:"nav-lb-tab ",children:[s.jsx(e.Item,{children:s.jsx(e.Link,{eventKey:"dashboard",className:"mb-sm-3 mb-md-0",as:r,to:"/dashboard/",children:"Dashboard"})}),s.jsx(e.Item,{children:s.jsx(e.Link,{eventKey:"tests",className:"mb-sm-3 mb-md-0",as:r,to:"/dashboard/tests/",children:"Your Attempts"})}),s.jsx(e.Item,{children:s.jsx(e.Link,{eventKey:"account",className:"mb-sm-3 mb-md-0",as:r,to:"/account/",children:"Settings"})})]})})})]})]}),s.jsx(m,{xl:12,lg:12,md:12,sm:12,className:"mt-3",eventKey:"dashboard"})]}):null};export{u as P};
//# sourceMappingURL=ProfileCover-6f7c1a81.js.map