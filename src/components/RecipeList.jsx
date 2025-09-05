import RecipeCard from './RecipeCard';
import LoadingComponent from './LoadingComponent';
import { Link } from 'react-router-dom';

function RecipeList({ recipes = [], isLoading }) {
    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-10">
                <LoadingComponent />
            </div>
        );
    }

    if (!recipes || recipes.length === 0) {
        return (
            <div className="text-center text-gray-500 py-10">
                <p>Try searching for something else. Recipe not found!</p>
            </div>
        );

    }
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {recipes.map((recipe) => (
                <div
                key={recipe.idMeal}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                 >
                    <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                    <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>

                    <Link
                    to={`/recipe/${recipe.idMeal}`}
                    className="mt-3 inline-block px-4 py-2 text-white bg-[#FF6347] rounded hover:bg-[#9B3131]"
                    >
                        View Recipe
                    </Link>
                    </div>
                    </div>
            ))}
        </div>
    );
}

export default RecipeList;