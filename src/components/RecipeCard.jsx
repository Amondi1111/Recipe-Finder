function RecipeCard({ recipe }) {
    if (!recipe) return null;

    return (
        <div className="bg-[#FF6347] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            
            {/*For recipe image */}
            {recipe.image && (
                <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-35 object-cover" />
        
            )}
            
            {/*Details for the image cards */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-700 truncate">
                    {recipe.title}
                </h2>
                <p className="text-sm text-gray-600 my-2 line-clamp-2">
                    {recipe.description || "No description is available now."}
                </p>

                {/*For button */}
                <button className="mt-4 w-full bg-[#FF6347] text-whitenpy-2 rounded-md hover:bg-[#9B3131] transition">
                   View Recipe 
                </button>
            </div>

        </div>
    );
}

export default RecipeCard;