import React from "react";
import  ReactDOM  from "react-dom/client";
import Contact from "./Components/contact";


const page=(
   <div>
     <Contact Name="Phani"  Phone="408-784-1814" Email="kpk009@gmail.com"/>
     <Contact Name="Jay"  Phone="408-784-1811" Email="jay@gmail.com" />
     
   </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(page)