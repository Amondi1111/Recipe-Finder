import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!query.trim()) return;
     onSearch(query.trim());
      
  };
     const handleBack = () => {
      setQuery("");
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
             type="submit"

             className="text-gray-500 hover:text-[#FF6347] transition-colors"
             >
              <FiSearch size={18} />
             </button>

              <button
              type="button"
              onClick={handleBack}
              className="ml-2 text-xs text-[#FF6347] underline"
              >
              Clear
              </button>
    
           </form>

  </div>
  );
}

export default SearchBar;



