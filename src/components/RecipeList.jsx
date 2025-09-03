import RecipeCard from './RecipeCard';
import LoadingComponent from './LoadingComponent';

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
                <RecipeCard key={recipe.idMeal} recipe={recipe} />

            ))}
        </div>
    );
}

export default RecipeList;