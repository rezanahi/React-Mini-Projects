import './FoodMenuCategories.css'
import './FoodMenuCategories-media.css'



function FoodMenuCategories ({filterItems, categories}) {


    return(
        <>
            <div className='p5-btn-container'>
                {
                    categories.map((category, index) => {
                        return (
                            <button className='p5-filter-btn' onClick={() => {filterItems(category)}} key={index}>
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