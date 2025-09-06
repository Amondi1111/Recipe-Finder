import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ recipes = [], setRecipes = () => {} }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!query.trim()) return;
      
    try{
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("error fetching recipe:", error);
      setRecipes([]);
    }
  };
     const handleBack = () => {
      navigate("/");
      setQuery("");
      setRecipes([]);
     };

  return (
    <div className="w-full max-w-2xl mx-auto">
    <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white border rounded-lg shadow-sm max-w-md mx-auto px-3 py-2"
        >
          {/* Where Input Goes */}
          <input
             type="text"
             value={query}
             onChange={(e) => setQuery(e.target.value)}
             placeholder="Recipe, Dish name..."
             className="flex-1 px-2 outline-none text-sm"
             />

          {/*Search Button */}
          <button
             type="submit"

             className="text-gray-500 hover:text-[#FF6347] transition-colors"
             >
              <FiSearch size={18} />
             </button>

             {recipes.length > 0 && (
              <button
              type="button"
              onClick={handleBack}
              className="ml-2 text-xs text-[#FF6347] underline"
              >
              Clear
              </button>
             )}

           </form>

           {/*search feedback */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {Array.isArray(recipes) && recipes.length > 0 ?(
            recipes.map((recipe) => (
              <div
              key={recipe.idMeal}
              className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-48 object-cover" />

                    <div className="p-4">
                    <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
                      <p className='text-sm text-gray-500'>{recipe.strCategory}</p>

                    {/*View recipe button */}
                    <Link
                to={`/recipe/${recipe.idMeal}`}
            
                 className="mt-4 block w-full text-center bg-[#FF6347] text-white py-2 rounded-md hover:bg-[#9B3131] transition"
                 >
                   View Recipe 
                </Link>  
           </div>
           </div>
  ))
) : (
  query && (
    <p className='text-gray-500 text-center col-span-full'>
      No recipes found. Try another search!
    </p>
  )
)}
  </div>
  </div>
  );
}

export default SearchBar;



