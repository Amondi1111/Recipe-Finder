function FavoriteList({ favorites = [], deleteFavorite}) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">My Favorite Recipes</h2>
            {favorites.length ===0 ? (
                <p>No Favorite Just Yet!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {favorites.map(recipe => (
        <div key={recipe.idMeal} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold">{recipe.strMeal}</h3>
            <button
                onClick={() => deleteFavorite(recipe.idMeal)}
                className="mt-2 bg-[#FF6347] text-white px-3 py-1 rounded">
                    Delete
                </button>
                 </div>
                    ))}
        </div>
    )}
    </div>
    );
}

export default FavoriteList;