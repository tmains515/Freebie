import user from "../../assets/Dashboard/user_default.png"
import { Link } from "react-router-dom";
const UserDashboard = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-600 to-cyan-200 min-h-screen flex flex-col w-screen justify-center">

        {/* Header */}
        <header className="flex flex-row justify-between pt-2 pl-2 pr-2 text-4xl italic font-sans font-semibold text-gray-100">
            <p>Freebie</p>
            <div className="flex text-2xl flex-row">
                <p>Area</p>
                <Link to={"/profile"}>
                    <img src={user} alt=""/>
                </Link>  
            </div>
  
        </header>  
        {/* Content */}
        <div className="grid grid-cols-16 grid-rows-10 mx-8 mt-2 rounded-4xl w-[calc(100vw-4rem)] h-[calc(100vh-6rem)] bg-[#ffffff]">
            
            {/* Filter */}
            <div className="bg-gradient-to-br col-span-3 row-span-7 ml-8 row-start-2 from-indigo-600 to-indigo-400 shadow-2xl m-4 w-full rounded-4xl">
                <label htmlFor="filter">Filter</label>
                
            </div>
                {/* Search */}
                <div className="bg-gradient-to-br flex items-center pl-10 pr-2 gap-4 col-start-5 col-span-6 h-1/2 m-6 from-indigo-600 to-indigo-400 shadow-2xl rounded-4xl">
                    <label htmlFor="search" className="font-extrabold">Search:</label>
                    <input type="text"  className="bg-white h-3/4 rounded-4xl w-full text-black pl-4"/>
                </div>

                {/* Search */}
                <button
                    className="
    relative
    bg-gradient-to-br from-indigo-600 to-indigo-400 
    col-start-11 col-span-2 h-1/2 my-6 mx-12
    shadow-2xl rounded-4xl
    overflow-hidden  // Needed for the pseudo-element
    transition-all duration-300
    group  // Enables group-hover
    hover:shadow-indigo-500/50  // Glow effect
  "
                    onClick={() => console.log('search')}
                >
                    <span className="relative z-10 font-semibold text-white">Find</span>

                    {/* Animated gradient overlay */}
                    <div className="
    absolute inset-0
    bg-gradient-to-br from-indigo-400 to-indigo-600
    opacity-0
    group-hover:opacity-100
    transition-opacity duration-300
  "></div>

                    {/* Shine effect on hover */}
                    <div className="
    absolute top-0 left-0 w-full h-full
    bg-white/10
    -translate-x-full
    group-hover:translate-x-0
    transition-transform duration-700
  "></div>
                </button>
            {/* Listings */}
            <div className="col-start-5 row-start-2 row-span-9 col-span-13 m-4 bg-gradient-to-br rounded-4xl from-indigo-600 to-indigo-400">

            </div>
        </div>
      </div>
    )
}

export default UserDashboard;