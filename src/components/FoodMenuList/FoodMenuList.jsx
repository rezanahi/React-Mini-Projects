import './FoodMenuList.css'
import './FoodMenuList-media.css'


function FoodMenuList({menu}) {

    return(
        <>
            <div className='p5-section-center'>
                {
                    menu.map((menuItem) => {
                        const {id, title, img, desc, price} = menuItem
                        return(
                            <article key={id} className='p5-menu-item'>
                                <img src={img} alt={title} className='p5-photo' />
                                <div className='p5-item-info'>
                                    <header>
                                        <h4>{title}</h4>
                                        <h4 className='p5-price'>{price}</h4>
                                    </header>
                                    <p className='p5-item-text'>{desc}</p>
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