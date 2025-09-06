import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

function IngredientInput({ onSubmit, ingredients = [] }) {
    const [ingredient, setIngredient] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ingredient.trim()) {
             onSubmit(ingredient.trim());
          
        }
    };

    return (

        <div className="bg-[#9B3131] min-h-[300px] min-w-[250px] flex flex-col items-center justify-center text-center p-6"> <h1 className="text-2xl font-bold mb-8 text-black"> Tell us about the ingredients in your kitchen </h1>
        <div className="flex item-center gap-2">
          {/* Icon Button */}
           <span className="text-black mt-7">
                <FaPlay />
            </span>

        <form onSubmit={handleSubmit} className="flex gap-2 p-4">
           {/* Input */}
            <input
                 type="text"
                 list="ingredient-options"
                 value={ingredient}
                 onChange={(e) => setIngredient(e.target.value)}
                 placeholder="Search by ingredient...."
                 className="flex-1 border border-gray-300  bg-[#FF6347] rounded-md p-2 "
              
                 />
                 <button type="submit"
                  className=" transition-colors duration-300"
             >
              <FiSearch size={18}  
              className="stroke-gray-800 hover:stroke-[#FF6347] transition-colors duration-300 "/>
             </button>


                  {/* For auto completion of ingredient list */}
                 <datalist id="ingredient-options">
                  {ingredients.map((item) => (
                    <option key={item.idIngredient} 
                    value={item.strIngredient} />
                  ))} 
                 </datalist>

                 
                   </form>
                   </div>
                   </div>
    );
}

export default IngredientInput;