
import { useNavigate } from "react-router-dom";
import { allCategoriesData } from "./allCategories"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
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

    return (
        
        <div className="App">
    
            

            <div className="card">
                <h2 className="distdiff">Distribution of questions by difficulty</h2>
                <div className="card-table-wrapper">
                    <ResponsiveContainer width="100%" height={300} >
                    <BarChart data={chartData} barCategoryGap="30%" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#82ca9d" barSize={25}/>
                    </BarChart>
                    </ResponsiveContainer>
                </div>
                

                
            </div>

        
            
        
            
        </div>
            
        

  );

}


export default DistributionDifficulty