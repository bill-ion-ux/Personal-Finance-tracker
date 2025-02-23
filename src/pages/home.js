import React from 'react'
import BudgetChart from './BudgetChart'
import '../Styles/home.css'
import {totalSum } from './BudgetChart'



function home() {
  return (
    <div>
    <h3>Budget Overview</h3>
    <BudgetChart/>
    <div className= "sum">Total : {totalSum}</div>
    </div>
  )
}

export default home