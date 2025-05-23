import { Link } from "react-router-dom";
import user from "../assets/Dashboard/user_default.png"
import menu from "../assets/Dashboard/menu.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = ({}) => {

    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <>
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
                                    onClick={() => {navigate('/new_listing')}}
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
        </>
    )
}

export default Header;