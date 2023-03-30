import { useState } from 'react'
import './App.css'
import api from './api'

function App() {
  const [facts, setFacts] = useState([])

  function handleGetFact() {
    api().then(fact => {
      setFacts(facts => facts.concat(fact))
    })
  }

  return (
    <div className="App">
      <div>
        <a href="https://jhonuzcategui-portfolio.vercel.app" target="_blank">
          <img src="/Cat.jpg" className="cat" alt="MyCat" />
        </a>
      </div>
        <h1>Random Cat Fact</h1>
          <p>This app calls an API and returns random facts about cats.
              If you open de console you can se the response of the API as well.
          </p>
      <div>
          
           {/* <input type="text" id="apilength" placeholder="Enter Max Length" className="placeholder" onClick={Api}/> */}
        
         <button id="apilength" type="button" onClick={handleGetFact}>Call API</button>

    <ul id="list">
    {facts.map((fact, i) => (<li key={i}>{fact}</li>))}
    </ul>
    </div>


      {/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>*/}
      
    </div>
  )
}

export default App
