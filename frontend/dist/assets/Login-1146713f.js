import{r as o,j as e}from"./index-3931a8cb.js";import{A as F}from"./AdminSidebar-d6c74bdf.js";const L=()=>{const[g,p]=o.useState(!0),[l,h]=o.useState(""),[n,x]=o.useState(""),[a,f]=o.useState(""),[i,w]=o.useState(""),[t,N]=o.useState(""),[d,j]=o.useState(""),[u,y]=o.useState(""),[c,v]=o.useState(""),[m,S]=o.useState(""),P=async s=>{s.preventDefault(),console.log("Login email:",l),console.log("Login password:",n);try{(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:n})})).ok?console.log("Login successful!"):console.error("Login failed!")}catch(r){console.error("Error during login:",r)}},C=async s=>{s.preventDefault(),console.log("Full Name:",a),console.log("Branch:",i),console.log("Semester:",t),console.log("Email:",d),console.log("Gender:",u),console.log("Password:",c),console.log("Confirm Password:",m);try{(await fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:a,branch:i,semester:t,email:d,gender:u,password:c,confirmPassword:m})})).ok?console.log("Signup successful!"):console.error("Signup failed!")}catch(r){console.error("Error during signup:",r)}},b=()=>{p(!g)};return e.jsxs("div",{className:"admin-container",children:[e.jsx(F,{}),e.jsx("main",{className:"dashboard",children:e.jsx("section",{className:"flex flex-col items-center justify-center min-h-screen ",children:g?e.jsxs("div",{className:"w-96 bg-white p-6 rounded-lg shadow-lg  transition-transform",children:[e.jsx("h1",{className:"text-3xl font-semibold mb-4 transition-transform",children:"Login"}),e.jsxs("form",{onSubmit:P,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"loginEmail",className:"block text-sm font-medium",children:"Email"}),e.jsx("input",{type:"email",id:"loginEmail",className:"w-full  border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2",value:l,onChange:s=>h(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"loginPassword",className:"block text-sm font-medium",children:"Password"}),e.jsx("input",{type:"password",id:"loginPassword",className:"w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2",value:n,onChange:s=>x(s.target.value)})]}),e.jsx("div",{className:"mb-4",children:e.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600",children:"Login"})})]}),e.jsx("div",{className:"mb-4",children:e.jsx("button",{onClick:b,className:"w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400",children:"Switch to Signup"})})]}):e.jsxs("div",{className:"w-96 bg-white p-6 rounded-lg shadow-lg",children:[e.jsx("h1",{className:"text-3xl font-semibold mb-4",children:"Signup"}),e.jsxs("form",{onSubmit:C,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"signupFullName",className:"block text-sm font-medium",children:"Full Name"}),e.jsx("input",{type:"text",id:"signupFullName",className:"w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2",value:a,onChange:s=>f(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"signupBranch",className:"block text-sm font-medium",children:"Branch"}),e.jsx("input",{type:"text",id:"signupBranch",className:"w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2",value:i,onChange:s=>w(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"signupSemester",className:"block text-sm font-medium",children:"Semester"}),e.jsx("input",{type:"text",id:"signupSemester",className:"w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2",value:t,onChange:s=>N(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"signupEmail",className:"block text-sm font-medium",children:"Email"}),e.jsx("input",{type:"email",id:"signupEmail",className:"w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2",value:d,onChange:s=>j(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"signupGender",className:"block text-sm font-medium",children:"Gender"}),e.jsx("input",{type:"text",id:"signupGender",className:"w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2",value:u,onChange:s=>y(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"signupPassword",className:"block text-sm font-medium",children:"Password"}),e.jsx("input",{type:"password",id:"signupPassword",className:"w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2",value:c,onChange:s=>v(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium",children:"Confirm Password"}),e.jsx("input",{type:"password",id:"confirmPassword",className:"w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2",value:m,onChange:s=>S(s.target.value)})]}),e.jsx("div",{className:"mb-4",children:e.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600",children:"Signup"})})]}),e.jsx("div",{className:"mb-4",children:e.jsx("button",{onClick:b,className:"w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400",children:"Switch to Login"})})]})})})]})};export{L as default};
