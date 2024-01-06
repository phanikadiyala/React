import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.scss';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function  Page() {
    return (
        <div>
             <Header />
            <Main />
           <Footer />
        </div>
 
    )

}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />);