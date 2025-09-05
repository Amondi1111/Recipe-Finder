import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import RecipeCard from './components/RecipeCards'
import IngredientInput from './components/IngredientInput'
import RecipeList from './components/RecipeList'
import Login from './components/Login'
import Signup from './components/Signup'
import RecipeDetails from './components/RecipeDetails'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)


{/*searching using the recipe name */}
  const handleSearch = async (query) => {
   if (!query.trim()) {
      setRecipes([]);
      return;
   }

    setIsLoading(true)
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes at the moment:", error)
      setRecipes([])
    } finally {
      setIsLoading(false)
    }
  };

     {/*search using ingredients */}
    const handleIngredientSubmit = async(ingredient) =>{
      setIsLoading(true)
      try{
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        setRecipes(response.data.meals || [])
      } catch (error) {
        console.error("Error fetching recipes at the moment:", error)
        setRecipes([])
      } finally {
           setIsLoading(false)
      }
    };
      const resetRecipes = () => {
          console.log("resetting recipes...");
        setRecipes([]);
      };

  return (
    <Router>
       <Header onSearch={handleSearch} />


       <Routes>
        <Route
           path="/"
           element={
            <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1 space-y-6">
                <IngredientInput onSubmit={handleIngredientSubmit} /> 
              </div>
    
              <div className="md:col-span-3">
          <RecipeList recipes={recipes} isLoading={isLoading} />
    
            </div>
            </div>
           }
           />

           <Route path="/Login" element={<Login />} />
           <Route path="/Signup" element={<Signup />} />
           <Route path="/recipe/:idMeal" element={<RecipeDetails resetRecipes={resetRecipes} />} />
       </Routes>
      </Router>
    
  );
}

export default App
