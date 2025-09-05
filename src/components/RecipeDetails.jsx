import { useEffect,  useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function RecipeDetails({ resetRecipes}) {
    const { idMeal } = useParams();
    const navigate = useNavigate();
    const [meal, setMeal] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleBack = () => {
        resetRecipes();
        navigate("/");
    }

    useEffect(() => {
        let ignore = false;

        async function load() {
            setIsLoading(true);
            setError(null);
            
            try {
                const res = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
                );
                const data = await res.json();
                const found = data?.meals?.[0] || null;

                if (!ignore) setMeal(found);
                   } catch (e) {
                if (!ignore) setError('Failed to load recipe details!');

            } finally {
                if (!ignore) setIsLoading(false);
            }
        }

        load();
        return () => {
             ignore = true;
             };
    }, [idMeal]);

    const ingredients =
    meal &&
    Array.from({ length: 20 },  (_, i) => {
        const ingredient = meal[`strIngredient${i + 1}`];
        const measure = meal[`strMeasure${i + 1}`];
        return ingredient ? `${ingredient} - ${measure}` : null;

    }).filter(Boolean);

  if (isLoading) {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <p className="text-gray-600">Loading Recipe...</p>
        </div>
    );
  }
  if (error || !meal) {
    return(
       <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
            <p className="text-[#9B3131] mb-4">{error || 'Recipe not found.'}</p>
            <button
            onClick={handleBack}
            className="px-4 py-2 rounded bg-[#FF6347] text-white">
                Go Back
            </button>
        </div>
       </div>  
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
        <button
            onClick={handleBack}
            className="px-4 py-2 rounded bg-[#FF6347] text-white">
                Back to HomePage
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

                {/*Image and description */}
                <div>
                    {meal.strMealThumb && (

                    <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full rounded-xl shadow"
                    />
                    )}
                    <div className="mt-4 text-sm text-gray-600 space-y-1 ">
                        {meal.strCategory && <p><b>Category:</b> {meal.strCategory}</p>}
                        {meal.strArea && <p><b>Cuisine:</b> {meal.strArea}</p>}
                        {meal.strTags && <p><b>Tags:</b> {meal.strTags}</p>}
                        {meal.strSource && (
                           <a
                           href={meal.strSource}
                           target="_blank"
                           rel="noreferrer"
                           className="underline"
                           >
                            Source
                           </a> 
                        )}
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">{meal.strMeal}</h1>

                    <h2 className="mt-4 mb-2 text-xl font-semibold">Ingredients</h2>
                    <ul className="list-disc ml-5 space-y-1">
                        {ingredients.length
                        ? ingredients.map((items, i) => <li key={i}>{items}</li>)
                        : <li>No ingredients listed.</li>
                        }
                    </ul>

                    <h2 className="mt-6 mb-2 text-xl font-semibold">Instructions</h2>
                    <p className="whitespace-pre-line text-gray-800 leading-7">
                        {meal.strInstructions || 'No instructions available.'}
                    </p>

                    {meal.strYoutube &&(
                        <a
                        className="inline-block mt-6 px-4 py-2 rounded bg-[#FF6347] text-white hover:bg-[#9B3131] transition "
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noreferrer"
                        >
                            Watch on Youtube
                        </a>
                    )
                    }
                </div>
            </div>
    </div>
 );
}

