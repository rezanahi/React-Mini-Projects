import './FoodMenu.css'

import {useState} from "react";

import foodMenuData from "./FoodMenuData";
import FoodMenuCategories from "../../components/FoodMenuCategories/FoodMenuCategories";
import FoodMenuList from "../../components/FoodMenuList/FoodMenuList";

function FoodMenu() {
    const [menu, setMenu] = useState(foodMenuData)
    const [categories, setCategories] = useState(['all', ...new Set(foodMenuData.map(item => item.category))])

    function filterItems (category) {
        if(category === 'all') {
            setMenu(foodMenuData)
        } else {
            let newItems = foodMenuData.filter((menuItem) => {
                return menuItem.category === category
            })
            setMenu(newItems)
        }
    }


    return(
        <>
                <main className='bg-amber-100'>
                    <section className='py-20 w-[90vw] mx-auto max-w-[1170px]'>
                        <div className='mb-8 text-center'>
                            <h2>Our Menu</h2>
                            <div className='w-20 h-1 bg-gold-500 mx-auto'></div>
                        </div>
                        <FoodMenuCategories categories={categories} filterItems={filterItems}></FoodMenuCategories>
                        <FoodMenuList menu={menu}></FoodMenuList>
                    </section>
                </main>
        </>
    )
}

export default FoodMenu