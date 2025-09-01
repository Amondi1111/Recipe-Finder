import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

function IngredientInput({ onSubmit }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
             onSubmit(input);
             setInput("");
        }
    };

    return(

          <div className="bg-[#9B3131] min-h-[300px] min-w-[250px] flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-2xl font-bold mb-8 text-black">
          Tell us about the ingredients in your kitchen
        </h1>

        {/* Input Button */}
        <div className="flex item-center gap-2">
           <span className="text-black mt-2">
                <FaPlay />
            </span>

        <form
        
          onSubmit={handleSubmit}
          className="flex items-center gap-2 bg-white rounded-md px-3 py-2 shadow-md w-full max-w-md"
          >
           

            {/* Input */}
            <input
                 type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 placeholder="Ingredients"
                 className="flex-grow border-none outline-none px-2"
                 />

                 <button type="submit"
                   className="text-black hover:text-[#FF6347] transition-colors">
                    <FiSearch />

                   </button>
                   </form>

             </div>      
        </div>
    );
}

export default IngredientInput;