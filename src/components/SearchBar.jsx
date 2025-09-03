import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery("");
    }
  };

  return (
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
           </form>
  );
}

export default SearchBar;



