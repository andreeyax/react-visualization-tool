

import { allCategoriesData } from "./allCategories"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Pie, PieChart, Cell } from "recharts";
function DistributionDifficulty(){

    
            
    

    let categories=new Map()
    let catArray=[]
    categories.set("easy", 0)
    categories.set("medium", 1)
    categories.set("hard", 2)
    
    let numbers=[0,0,0]
    for(let i=0;i<allCategoriesData.length;i++){
        
        //categories.set(allCategoriesData[i].difficulty, categories.get(allCategoriesData[i].difficulty)+1)
        if(allCategoriesData[i].difficulty=="easy"){
            numbers[0]+=1
        }
        else if(allCategoriesData[i].difficulty=="medium"){
            numbers[1]+=1
        }
        else if(allCategoriesData[i].difficulty=="hard"){
            numbers[2]+=1
        }
    }

    catArray=["easy", "medium", "hard"]
    //const chartData = catArray.map(cat => ({
    //    category: cat,
    //    value: numbers[categories.get(cat)] || 0 
    //}));

    let chartData = [];
    for (let i = 0; i < catArray.length; i++) {
        const cat = catArray[i];
        chartData.push({
            category: cat,
            value: numbers[i]
        });
    }
    

    const COLORS = ["#82ca9d", "#f6d186", "#f67280"];
    console.log(chartData)
    const cells = [];
    for (let i = 0; i < chartData.length; i++) {
        cells.push(<Cell key={`cell-${i}`} fill={COLORS[i]} />);
    }
    const renderLegend = () => {
  return (
    <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: 0 }}>
      {chartData.map((entry, index) => (
        <li key={`legend-${index}`} style={{ margin: "0 10px", display: "flex", alignItems: "center", color:COLORS[index] }}>
          <div style={{ width: 12, height: 12, backgroundColor: COLORS[index], marginRight: 5, color:COLORS[index] }}></div>
          {entry.category}
        </li>
      ))}
    </ul>
  );
};
    return (
        
        <div className="App">
    
            

            <div className="card">
                <h2 className="distdiff">Distribution of questions by difficulty</h2>
                <div className="card-table-wrapper">
                    <ResponsiveContainer width="100%" height={400}>
                    <PieChart >
                        <Pie
                        
                        data={chartData}
                        dataKey="value"
                        nameKey="category"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#82ca9d"
                        label
                        sort={false}
                        >
                        {cells}
                        </Pie>
                        <Tooltip />
                        <Legend content={renderLegend} />
                    </PieChart>
                    </ResponsiveContainer>
                </div>
                

                
            </div>

        
            
        
            
        </div>
            
        

  );

}


export default DistributionDifficulty