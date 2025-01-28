import React from 'react'
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from '../../pages/Dashboard/Dashboard.module.css'

// Pie chart code
const data1 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

//Bar chart code
const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Dashboard = () => {
  
  return <>
    <div className={styles.cards}>
       <div className={`${styles.box} ${styles.box1} rounded-4 border border-5`}>
          <h4>Number of Courses Enrolled</h4>
          <br></br>
          <h3>200</h3>
       </div>
       <div className={`${styles.box} ${styles.box2} rounded-4 border border-5`}>
            <h4>Number of Courses Completed</h4>
            <br></br>
            <h3>200</h3>
       </div>
       <div className={`${styles.box} ${styles.box3} rounded-4 border border-5`}>
            <h4>Number of Quiz Completed</h4>
            <br></br>
            <h3>200</h3>
       </div>
       <div className={`${styles.box} ${styles.box4} rounded-4 border border-5`}>
            <h4>Number of Quiz Passed</h4>
            <br></br>
            <h3>200</h3>
       </div>
       <div className={`${styles.box} ${styles.box5} rounded-4 border border-5`}>
            <h4>Number of Badges Earned</h4>
            <br></br>
            <h3>200</h3>
       </div>
    </div>

    <div className={styles.charts}>
      <div className={styles.chart1}>
        {/* Pie chart */}
         <ResponsiveContainer width="100%" height="100%">
           <PieChart width={400} height={400}>
             <Pie
               data={data1}
               cx="50%"
               cy="50%"
               labelLine={false}
               label={renderCustomizedLabel}
               outerRadius={80}
               fill="#8884d8"
               dataKey="value"
             >
               {data1.map((entry, index) => (
                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
               ))}
             </Pie>
           </PieChart>
         </ResponsiveContainer>
      </div>
      <div className={styles.chart2}>
        {/* Bar chart */}
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  </>
}

export default Dashboard;
