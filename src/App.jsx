import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import IngredientInput from './components/IngredientInput'
import RecipeList from './components/RecipeList'
import Login from './components/Login'
import Sihnup from './components/Signup'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([])
  const [Loading, setLoading] = useState(false)


{/*searching using the recipe name */}
  const handleSearch = async (query) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      )
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes at the moment:", error)
      setRecipes([])
    } finally {
      setLoading(false)
    }
  }

     {/*search using ingredients */}
    const handleIngredientSubmit = async(ingredient) =>{
      setLoading(true)
      try{
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`
        )
        setRecipes(response.data.meals || [])
      } catch (error) {
        console.error("Error fetching recipes at the moment:", error)
        setRecipes([])
      } finally {
           setLoading(false)
      }
    }


  return (
    <Router>
       <Header onSearch={handleSearch} />

       <Routes>
        <Route
           path="/"
           element={
            <>
              <IngredientInput onSubmit={handleIngredientSubmit} /> 
          <RecipeList recipes={recipes} Loading={Loading} />
    
            </>
           }
           />

           <Route path="/Login" element={<Login />} />
           <Route path="/Signup" element={<Signup />} />
       </Routes>
      </Router>
    
  );
}

export default App
