
const NewListing = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-600 to-cyan-200 min-h-screen flex flex-col w-screen justify-center">

        
        {/* Content */}
        <div className="grid grid-cols-16 grid-rows-10 mx-8 mt-2 rounded-4xl w-[calc(100vw-4rem)] h-[calc(100vh-6rem)] bg-[#ffffff]">
            

                {/* Search */}
                <div className="bg-gradient-to-br flex items-center pl-10 pr-2 gap-4 col-start-5 col-span-6 h-1/2 m-6 from-indigo-600 to-indigo-400 shadow-2xl rounded-4xl">
                    <label htmlFor="search" className="font-extrabold">Search:</label>
                    <input type="text"  className="bg-white h-3/4 rounded-4xl w-full text-black pl-4"/>
                </div>
                
                {/* Search Button*/}
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
                    onClick={() => activeListings()}
                >
                    <span className="relative z-10 font-semibold text-white">Find</span>
                </button>
                <p className="text-indigo-600 italic font-sans font-semibold row-start-2 pt-10 pl-4 col-start-2 m-2 text-4xl text-nowrap">Your Listings</p>

                {/* Listings */}
            <div className="col-start-2 row-start-3 row-span-9 col-span-14 m-4 bg-gradient-to-br rounded-4xl from-indigo-600 to-indigo-400">
                
            </div>
        </div>
      </div>
    )
}
export default NewListing