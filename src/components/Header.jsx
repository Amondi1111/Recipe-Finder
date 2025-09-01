import SearchBar from './SearchBar';

function Header ({ onSearch }){
    return(
<header className="text-black p-8">
    <div className="flex items-center justify-between">
        {/* Logo / Brand Name */}
    <h1 className="text-red text-2xl font-bold">FOODIE'S RECIPE FINDER</h1>

    {/* Button */}
    <div className="flex space-x-4 ml-auto">
        <button className="shadow hover:bg-[#9B3131] transition rounded-lg px-4 py-2">login
   </button>
   <button className="shadow hover:bg-[#9B3131] transition rounded-lg px-4 py-2">Sign Up
   
   </button>

    </div>
</div>

<div className="mt-6 flex justify-center">
<SearchBar onSearch={onSearch} />
</div>
</header>
    );
}

export default Header;