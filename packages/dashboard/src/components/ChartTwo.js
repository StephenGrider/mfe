import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { PieChart, Pie, Cell , ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function ChartTwo() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer width="100%" height="100%">
      <PieChart width={800} height={600}>
      <Pie
        data={data}
        cx={120}
        cy={100}
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          
        ))}
      </Pie>
      
    </PieChart>
    
      </ResponsiveContainer>
      <div 
      style={{
        display:"flex",
        flexDirection:'row',
        flexBasis:"25%"
      }}
      >
               <span style={{flexBasis:"33%"}}>
                <h3>Desktop</h3>
                <h5>63%</h5>
                </span>
                <span style={{flexBasis:"33%"}}> 
                <h3>Tablet</h3>
                <h5>15%</h5>
                </span>
                <span style={{flexBasis:"33%"}}> 
                <h3>Phone</h3>
                <h5>22%</h5>
                </span>
                </div>
    </React.Fragment>
  );
}