
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";
import { allCategoriesData } from "./allCategories";
import './distributionCategory.css'
function DistributionCategory(){

    

    let categories=new Map()
    let catArray=[]
    for(let i=0;i<allCategoriesData.length;i++){
        if(categories.has(allCategoriesData[i].category)==false){
            categories.set(allCategoriesData[i].category, 0)
            catArray.push(allCategoriesData[i].category)
        }
            
    }

    //we have all categories again
    //count per category
    for(let i=0;i<allCategoriesData.length;i++){
        
        categories.set(allCategoriesData[i].category, categories.get(allCategoriesData[i].category)+1)
            
    }

    const chartData = catArray.map(cat => ({
        category: cat,
        count: categories.get(cat) || 0 
    }));

    


    return (
        
        <div className="App">
    
            

            <div className="card">
                <h2 className="distcategory">Distribution of questions by category</h2>
                <ResponsiveContainer width="100%" height={500} >
                    <BarChart data={chartData} barCategoryGap="30%" margin={{ top: 20, right: 30, left: 20, bottom: 150 }}>
                        <XAxis dataKey="category" 
                            angle={-45}          
                            textAnchor="end"     
                            interval={0}         
                            height={80} 
                            />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#82ca9d" barSize={25}/>
                    </BarChart>
                    </ResponsiveContainer>
                

                
            </div>

        
           
        
            
        </div>
            
        

  );

}


export default DistributionCategory