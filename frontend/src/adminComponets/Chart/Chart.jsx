import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({data,title,grid,dataKey}) => {   
  return (
    <div className='chart'>
        <div className="chartTitle">user Analytics</div>
        <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5550bd'/>
                    <Line type='monotone' dataKey="active user" stroke='#5550bd'/>
                    <Tooltip/>
                   {grid && <CartesianGrid  strokeDasharray="5 5"/>}
                </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart