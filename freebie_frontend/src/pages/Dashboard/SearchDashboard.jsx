import user from "../../assets/Dashboard/user_default.png"
import { Link } from "react-router-dom";
import ItemCard from "../../Components/ItemCard";
import menu from '../../assets/Dashboard/menu.png'
import { useState } from "react";
import Filter from "../../Components/Filter";

const SearchDashboard = () => {

    const [showMenu, setShowMenu] = useState(false);

    const dummyItem = {
        title: "test",
        categories: "categories",
        location: "location",
        details: "details"
    }

    return (
        <div className="bg-gradient-to-br from-indigo-600 to-cyan-200 min-h-screen flex flex-col w-screen justify-center">

            {/* Header */}
            <header className="flex flex-row justify-between pt-2 pl-12 pr-12 text-4xl italic font-sans font-semibold text-gray-100">
                <p className="">Freebie</p>
                <div className="flex text-2xl flex-row gap-4 items-center">
                    <p>Sacramento, Ca</p>
                    <Link to={"/profile"}>
                        <img src={user} alt="" />
                    </Link>
                    <div className="relative">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="p-2 focus:outline-none"
                        >
                            <img src={menu} alt="Menu" className="w-6 h-6" />
                        </button>

                        {showMenu && (
                            <div className="absolute right-1 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                >
                                    Make Listing
                                </a>
                                {/* Add more menu items as needed */}
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                >
                                    Another Option
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                >
                                    Settings
                                </a>
                            </div>
                        )}
                    </div>
                </div>

            </header>  
        {/* Content */}
        <div className="grid grid-cols-16 grid-rows-10 mx-8 mt-2 rounded-4xl w-[calc(100vw-4rem)] h-[calc(100vh-6rem)] bg-[#ffffff]">
            
            {/* Filter */}
            <div className="flex bg-gradient-to-br col-span-3 row-span-7 ml-8 row-start-2 from-indigo-600 to-indigo-400 shadow-2xl m-4 w-full rounded-4xl justify-center">
                <Filter/>
            </div>
                {/* Search */}
                <div className="bg-gradient-to-br flex items-center pl-10 pr-2 gap-4 col-start-5 col-span-6 h-1/2 m-6 from-indigo-600 to-indigo-400 shadow-2xl rounded-4xl">
                    <label htmlFor="search" className="font-extrabold">Search:</label>
                    <input type="text"  className="bg-white h-3/4 rounded-4xl w-full text-black pl-4"/>
                </div>
                
                {/* Search */}
                <button
                    className="
                    bg-gradient-to-br from-indigo-600 to-indigo-400
                    col-start-11 col-span-2 h-1/2 my-6 mx-12
                    shadow-2xl rounded-4xl
                    relative overflow-hidden
                    before:content-[''] before:absolute before:inset-0
                    before:bg-gradient-to-br before:from-indigo-400 before:to-indigo-600
                    before:opacity-0 hover:before:opacity-100
                    before:transition-opacity before:duration-300
  "
                    onClick={() => console.log('search')}
                >
                    <span className="relative z-10 font-semibold text-white">Find</span>
                </button>
                <p className="text-indigo-600 italic font-sans font-semibold row-start-2 pt-10 pl-4 col-start-5 m-2 text-4xl text-nowrap">Your Listings</p>

                {/* Listings */}
            <div className="col-start-5 row-start-3 row-span-9 col-span-13 m-4 bg-gradient-to-br rounded-4xl from-indigo-600 to-indigo-400">
                <ItemCard Item={dummyItem}/>
            </div>
        </div>
      </div>
    )
}

export default SearchDashboard;