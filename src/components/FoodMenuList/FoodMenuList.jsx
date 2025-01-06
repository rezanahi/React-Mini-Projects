import './FoodMenuList.css'
import './FoodMenuList-media.css'


function FoodMenuList({menu}) {

    return(
        <>
            <div className='mb-16 flex justify-center flex-wrap gap-8'>
                {
                    menu.map((menuItem) => {
                        const {id, title, img, desc, price} = menuItem
                        return(
                            <article key={id} className='grid max-w-96 gap-y-4 gap-x-8'>
                                <img src={img} alt={title} className='object-cover w-full h-[200px] border-4 border-gold-500 rounded-md block' />
                                <div>
                                    <header className='flex justify-between border-b border-dotted border-gray-700'>
                                        <h4 className='mb-2'>{title}</h4>
                                        <h4 className='text-gold-500'>{price}</h4>
                                    </header>
                                    <p className='mb-0 pt-4'>{desc}</p>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </>
    )
}


export default FoodMenuList