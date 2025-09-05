import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {
    if (!recipe) return null;

    return (
        <div className="bg-[#FF6347] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            
            {/*For recipe image */}
            {recipe.strMealThumb && (
                <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-36 object-cover" />
        
            )}
            
            {/*Details for the image cards */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-700 truncate">
                    {recipe.strMeal}
                </h2>
                <p className="text-sm text-gray-600 my-2 line-clamp-2">
                    {recipe.strInstructions
                    ? recipe.strInstructions.substring(0, 120) + "..."
                    : "Tap to view details."}
                </p>

                {/*For button */}
                <Link
                to={`/recipe/${recipe.idMeal}`}
            
                 className="mt-4 block w-full text-center bg-[#FF6347] text-white py-2 rounded-md hover:bg-[#9B3131] transition">
                   View Recipe 
                </Link>
            </div>

        </div>
    );
}

export default RecipeCard;