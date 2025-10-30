import {  Routes, Route } from "react-router-dom";
import './App.css';
import AllCategories from "./allCategories";
import Home from "./Home";
import DistributionCategory from "./distributionCategory";
import DistributionDifficulty from "./distributionDifficulty";
import FilterData from "./filterData";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
//export const niz=["andrija","andrej","andreja"]

function App() {
  const navigate = useNavigate(); 
    const location = useLocation();
    const goToCategories = () => {
        navigate("/allcategories"); 
    };

    const goToByCategory = () => {
        navigate("/distributioncategory"); 
    };

    const goToByDifficulty = () => {
        navigate("/distributiondifficulty"); 
    };

    const goToFilter = () => {
        navigate("/filterdata"); 
    };
    const goToHome = () => {
        navigate("/"); 
    };
   const isActive = (path) => location.pathname === path;
  return (

    <div className="App">
      
        <div className="title">
          <h2 className="logo"> <span className="green">mini</span> VISUALIZATION TOOL </h2>
        </div>
          

        <div className="maincontent">
            
            <div className="sidebar">
              
              <div>
                  <div className="allCategories">
                        &nbsp;&nbsp;&nbsp;<button onClick={goToCategories} 
                                            className={isActive("/allcategories") ? "active" : ""} >List of categories</button>
                  </div>
              </div>

              <div>
                  <div className="allCategories">
                      &nbsp;&nbsp;&nbsp;<button onClick={goToByCategory} className={isActive("/distributioncategory") ? "active" : ""}>Distribution by category</button>
                  </div>
              </div>

              <div>
                  <div className="allCategories">
                      &nbsp;&nbsp;&nbsp;<button onClick={goToByDifficulty} className={isActive("/distributiondifficulty") ? "active" : ""}>Distribution by difficulty</button>
                  </div>
              </div>

              <div>
                  <div className="allCategories">
                      &nbsp;&nbsp;&nbsp;<button onClick={goToFilter} className={isActive("/filterdata") ? "active" : ""}>Filter</button>
                  </div>
              </div>
            </div>
            

                

          <div className="content">
            <Routes>
                <Route path="/react-visualization-tool" element={<Home />} />
                <Route path="/allcategories" element={<AllCategories/>} />
                <Route path="/distributioncategory" element={<DistributionCategory/>} />
                <Route path="/distributiondifficulty" element={<DistributionDifficulty/>} />
                <Route path="/filterdata" element={<FilterData/>} />
                
                
              </Routes>
          </div>


        </div>
          
          
          
              
    </div>
    

    
      
          

    
  );
}

export default App;
