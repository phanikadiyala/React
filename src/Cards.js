import React from "react";
import  ReactDOM  from "react-dom/client";
import Card from './Components/Card';
function App() {
    const firstName ="Phani";
    const lastName = "kadiyala"
     return (
        <div>
         <Card  name="phani" phone="408-784-1814" email="kpk009@gmail.com"/>
         <Card name="Ram" phone="510-345-6785" email="ram@gmail.com"/>
         <Card name="jay" phone="345-897-4567" email="jay@gmail.com" />
        <h1>Good Morning {firstName} {lastName} </h1>
        </div>       
     )   

}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)