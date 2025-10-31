
import { useNavigate } from "react-router-dom";
import { allCategoriesData } from "./allCategories"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Pie, PieChart, Cell } from "recharts";
function DistributionDifficulty(){

    const navigate = useNavigate(); // hook za navigaciju
            
    const goToHome = () => {
        navigate("/"); // putanja na koju želiš da odeš
    };

    let categories=new Map()
    let catArray=[]
    for(let i=0;i<allCategoriesData.length;i++){
        if(categories.has(allCategoriesData[i].difficulty)==false){
            categories.set(allCategoriesData[i].difficulty, 0)
            catArray.push(allCategoriesData[i].difficulty)
        }
            
    }

    for(let i=0;i<allCategoriesData.length;i++){
        
        categories.set(allCategoriesData[i].difficulty, categories.get(allCategoriesData[i].difficulty)+1)
            
    }

    const chartData = catArray.map(cat => ({
        category: cat,
        count: categories.get(cat) || 0 // ako neki cat nema vrednost u mapi, stavi 0
    }));

    const COLORS = ["#82ca9d", "#f6d186", "#f67280"];

    return (
        
        <div className="App">
    
            

            <div className="card">
                <h2 className="distdiff">Distribution of questions by difficulty</h2>
                <div className="card-table-wrapper">
                    <ResponsiveContainer width="100%" height={400}>
      <PieChart >
        <Pie
          data={chartData}
          dataKey="count"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#82ca9d"
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
                </div>
                

                
            </div>

        
            
        
            
        </div>
            
        

  );

}


export default DistributionDifficulty