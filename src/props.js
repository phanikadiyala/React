import React from "react";
export default function Card(props) {
 return (
    <div className="contact-card">
    
    <h3>{props.name}</h3>
     <p>{props.phone}</p>
    <p>{props.email}</p> 
</div>

 )

}