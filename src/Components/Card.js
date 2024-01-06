import React from "react";
export default function Card({name,phone,email}) {
 return (
    <div className="contact-card">
    
    <h3>{name}</h3>
     <p>{phone}</p>
    <p>{email}</p> 
</div>

 )

}