import cog from '../assets/Dashboard/cog.png'
const ItemCard = ({Item}) => {
    return (
        <div className="flex min-w-1/3 min-h-1/4 max-h-1/4 bg-white m-8 rounded-4xl relative">
            
            {/* Image Div */}
            <div className="flex text-white m-4 min-h-full w-1/8 bg-amber-800">
                <p>Image Goes Here</p>
            </div>

            {/* Item Text */}
            <div className="grid grid-cols-8 grid-rows-6">
                <p className="text-indigo-600 m-4 text-3xl row-start-1">{Item.title}</p>
                <p className="text-indigo-600 m-4 row-start-3">{Item.details}</p>
            </div>
            <img src={cog} className='text-black size-8 absolute top-2 right-2' alt="" />
        </div>
    )
}

export default ItemCard