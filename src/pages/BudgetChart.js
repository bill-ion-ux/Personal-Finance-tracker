import React from 'react'
import {PieChart, Pie,Cell, Tooltip,Legend} from "recharts"

const data = [
    {name : "Food", value:300},
    {name : "Rent", value:800},
    {name : "Transport", value:300},
    {name : "Entertainment", value:100},
    {name : "Savings", value:400},
];
const calculateTotal = (items) =>{
    let total = 0;
    for(const item of items){
        total += item.value;
    }
    return total;
}
export const totalSum = calculateTotal(data);
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

const BudgetChart = () =>{
    return(
        <div>
        <PieChart width = {300} height={300}>
        <Pie
        data = {data}
        cx = "50%"
        cy = "50%"
        outerRadius = {100}
        fill = "#8884d8"
        dataKey = "value"
        label
        >
          {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}  
        </Pie>
        <Tooltip/>
        <Legend/>
        </PieChart>
        </div>
    );
};

export default BudgetChart