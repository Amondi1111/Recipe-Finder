function Header (){
    return(
<header className="text-black pd-8">
    <div className="flex items-center">
        {/* Logo / Brand Name */}
    <h1 className="text-red text-2xl font-bold">RECIPE FINDER APP</h1>

    {/* Button */}
    <div className="flex space-x-4 ml-auto">
        <button className="shadow hover:bg-[#9B3131] transition rounded-lg px-4 py-2">login
   </button>
   <button className="shadow hover:bg-[#9B3131] transition rounded-lg px-4 py-2">Sign Up</button>

    </div>
</div>
</header>
    );
}

export default Header;