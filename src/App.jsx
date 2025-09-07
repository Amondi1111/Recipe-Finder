import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import RecipeCard from './components/RecipeCard'
import IngredientInput from './components/IngredientInput'
import RecipeList from './components/RecipeList'
import Login from './components/Login'
import Signup from './components/Signup'
import RecipeDetails from './components/RecipeDetails'
import FavoriteList from './components/FavoriteList'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

{/*searching using the recipe name */}
  const handleSearch = async (query) => {
   if (!query.trim()) {
      setRecipes([]);
      setIsSearched(false);
      return;
   }

    setIsLoading(true);
    setIsSearched(true);

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      const data = await res.json();
      console.log("Recipes after search:", data.meals);
      
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
      setIsSearched(true)

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
        setRecipes([]);
        setIsSearched(false)
      };

      const addFavorite = (recipes) => {
        if (!favorites.find(fav => fav.idMeal === recipes.idMeal)) {
          setFavorites([...favorites, recipes]);
        }
      };

      const deleteFavorite = (idMeal) => {
        setFavorites(favorites.filter(fav => fav.idMeal !== idMeal));
      };

  return (
    <Router>
       <Header onSearch={handleSearch} />


       <Routes>
        <Route
           path="/"
           element={
            <div className="max-w-7xl mx-auto p-6 gap-8">
              <div className="md:col-span-1 space-y-6">
                <IngredientInput onSubmit={handleIngredientSubmit} /> 

                
              </div>

            <div className="md:col-span-3">
              <FavoriteList
                 favorites={favorites}
                 deleteFavorite={deleteFavorite}
                 />

    
          <RecipeList
           recipes={recipes} 
           isSearched={isSearched}
           isLoading={isLoading}
           addFavorite={addFavorite}
           favorites={favorites}
           
           />

           {!isLoading && isSearched && recipes.length === 0 &&(
             <p className='text-gray-500 text-center mt-4'>
              No recipe found. Try another search!
             </p>
           )}
              </div>
            </div>
      
           }
           />
           

           <Route path="/Login" element={<Login />} />
           <Route path="/Signup" element={<Signup />} />
           <Route path="/recipe/:idMeal" element={<RecipeDetails resetRecipes={resetRecipes} />} />
       </Routes>
       <Footer />
      </Router>
    
  );
}

export default App
