import React from 'react'
import BudgetChart from './BudgetChart'
import '../Styles/home.css'
import {totalSum } from './BudgetChart'



function home() {
  return (
    <div className='home'>
    <div>
    <h3>Budget Overview</h3>
    <BudgetChart/>
    <div className= "sum">Total : {totalSum}</div>
    </div>
    <div>
      <h3>Income and Expenses</h3>
      <div className="income-expense">
        <div className="income">
          <h4>Income</h4>
          <p>RM 5000</p>
        </div>
        <div className="expense">
          <h4>Expense</h4>
          <p>RM 1900</p>
        </div>
        </div>
    </div>
    <div>
      <h3>List of account</h3>
      <div className="account">
        <div className="account-item">
          <h4>Bank Islam</h4>
          <p>RM 5000</p>
        </div>
        <div className="account-item">
          <h4>Asb</h4>
          <p>RM 7000</p>
        </div>
        <div className="account-item">
          <h4>Cash</h4>
          <p>RM 100</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default home