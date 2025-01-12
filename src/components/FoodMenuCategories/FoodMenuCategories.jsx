import './FoodMenuCategories.css'
import './FoodMenuCategories-media.css'



function FoodMenuCategories ({filterItems, categories}) {


    return(
        <>
            <div className='mb-16 flex-row-reverse flex justify-center'>
                {
                    categories.map((category, index) => {
                        return (
                            <button className='bg-transparent border-transparent text-sm capitalize mx-2 py-2 px-3 text-gold-500 cursor-pointer transition duration-500 rounded hover:bg-gold-500 hover:text-white' onClick={() => {filterItems(category)}} key={index}>
                                {category}
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FoodMenuCategories