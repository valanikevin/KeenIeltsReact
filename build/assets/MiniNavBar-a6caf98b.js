import{P as e,r as B,j as s,Q as o,U as D,V as M,W as x,d as c,I as T,X as I,Y as N,Z as k}from"./index-e388c6e0.js";import{B as z}from"./ButtonGroup-c1646b01.js";const r=e.oneOf(["start","end"]),C=e.oneOfType([r,e.shape({sm:r}),e.shape({md:r}),e.shape({lg:r}),e.shape({xl:r}),e.shape({xxl:r}),e.object]),O={id:e.string,href:e.string,onClick:e.func,title:e.node.isRequired,disabled:e.bool,align:C,menuRole:e.string,renderMenuOnMount:e.bool,rootCloseEvent:e.string,menuVariant:e.oneOf(["dark"]),flip:e.bool,bsPrefix:e.string,variant:e.string,size:e.string},p=B.forwardRef(({title:t,children:i,bsPrefix:a,rootCloseEvent:d,variant:l,size:n,menuRole:h,renderMenuOnMount:g,disabled:u,href:f,id:j,menuVariant:v,flip:w,...y},b)=>s.jsxs(o,{ref:b,...y,children:[s.jsx(D,{id:j,href:f,size:n,variant:l,disabled:u,childBsPrefix:a,children:t}),s.jsx(M,{role:h,renderOnMount:g,rootCloseEvent:d,variant:v,flip:w,children:i})]}));p.displayName="DropdownButton";p.propTypes=O;const m=p,E=({module:t,currentSection:i,updateCurrentSection:a,setShowTestInfoModal:d,showSectionList:l=!0})=>t?s.jsxs(s.Fragment,{children:[s.jsxs(x,{bg:"white",fixed:"top",style:{height:"50px"},children:[s.jsx(x.Brand,{as:c,to:"/",children:s.jsx(T,{src:I(N),alt:""})}),l&&s.jsx(z,{size:"sm",className:"ms-auto mx-2",children:s.jsx(m,{title:`${i.section}`,id:"bg-nested-dropdown",size:"sm",className:"text-white",variant:"outline-primary",children:t.sections.map(n=>s.jsx(o.Item,{eventKey:n.id,active:n.id===i.id,onClick:()=>a(n.id),children:n.section},n.id))})}),s.jsxs(m,{title:"Menu",id:"bg-nested-dropdown",size:"sm",className:"text-white ms-auto",variant:"outline-primary",children:[s.jsx(o.Item,{eventKey:"1",as:c,to:"/",children:"Home"}),s.jsx(o.Item,{eventKey:"2",onClick:()=>d(!0),children:"Test Info"})]})]}),s.jsx(k,{})]}):null;export{E as M};
//# sourceMappingURL=MiniNavBar-a6caf98b.js.map