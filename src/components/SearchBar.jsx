import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!query.trim()) return;
      
    try{
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setResults(data.meals || []);
      onSearch(query);
    } catch (error) {
      console.error("error fetching recipe:", error);
      setResults([]);
    }
  };
     const handleBack = () => {
      navigate("/");
      setQuery("");
      setResults([]);
      onSearch("");
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
             onClick={handleBack}

             className="text-gray-500 hover:text-[#FF6347] transition-colors"
             >
              <FiSearch size={18} />
             </button>
           </form>

           {/*search feedback */}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {results.map((recipe) => (
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
            
                 className="mt-4 block w-full text-center bg-[#FF6347] text-white py-2 rounded-md hover:bg-[#9B3131] transition">
                   View Recipe 
                </Link>  
           </div>
           </div>
  ))}
  </div>
  </div>
  );
}

export default SearchBar;



