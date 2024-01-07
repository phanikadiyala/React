import React from "react";
import  ReactDOM  from "react-dom/client";
import Joke from "./Components/Joke";
import jokesData from "./jokesData"



export default function App() {
   const jokeElements = jokesData.map(joke => {
       return <Joke setup={joke.setup} punchline={joke.punchline} />
   })
   return (
       <div>
           {jokeElements}
       </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)