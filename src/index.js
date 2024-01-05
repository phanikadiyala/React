import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

const page = (
    <div>
        <p>
        <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
        </p>
    <h1>Fun facts about React</h1>
 
    <ul>
        <li>was first released in 2013</li>
        <li>It's declarative</li>
        <li>It's a hireable skill</li>
        <li>It's actively maintained by skilled people</li>
    </ul>
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(page)