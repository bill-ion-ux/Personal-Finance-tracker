import React from 'react'

import '../Styles/navbar.css'

function navbar() {
  return (
    <div>
    <header className="App-header">
    <h1>Personal Financer</h1>
    </header>
    <div className="nav">
 
      <ul id = "ul-top-hypers">
        <li>home</li>
        <li>account</li>
        <li>transaction</li>
        <li>spending</li>
      </ul>
    </div> 
    </div>
  )
}

export default navbar