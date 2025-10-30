
import { useNavigate } from "react-router-dom";
import { allCategoriesData } from "./allCategories";
import { useState } from "react";
import './filterData.css'
function FilterData(){

    const navigate = useNavigate(); 
            
    const goToHome = () => {
        navigate("/"); 
    };

    const resetFilter = () => {
        setSelectedCategory("")
    };

    const [selectedCategory, setSelectedCategory] = useState("");

    
    let categories=[]

    for(let i=0;i<allCategoriesData.length;i++){
        if(categories.includes(allCategoriesData[i].category)==false){
            categories.push(allCategoriesData[i].category)
        }
        
    }

    let filtered=[]
    if(selectedCategory==""){
        filtered=allCategoriesData
    }
    else{
        for(let i=0;i<allCategoriesData.length;i++){
            if(allCategoriesData[i].category==selectedCategory){
                filtered.push(allCategoriesData[i])
            }
        }
    }

    


    return (
        
        <div className="App">
    
            

            <div className="card">
                <h2>Choose category: &nbsp;&nbsp; 
                    <select className="myselect" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="" disabled hidden>
                            Select category
                        </option>
                        {categories.map((a) => (
                            <option value={a} key={a}>{a}</option>
                        ))}
                    </select>
                    &nbsp;&nbsp;

                    <button onClick={resetFilter}>Reset Filter</button>

                </h2>
                <div className="card-table-wrapper">
                    <table>
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Difficulty</th>
                            <th>Type</th>
                            <th>Question</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filtered.map((a) => (
                            <tr key={a.id}>
                                <td>{a.category}</td>
                                <td>{a.difficulty}</td>
                                <td>{a.type}</td>
                                <td>{a.question}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                

                
            </div>

        
            
        
            
        </div>

    )

}


export default FilterData