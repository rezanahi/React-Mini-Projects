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
                    <section className='p5-menu p5-section'>
                        <div className='p5-title'>
                            <h2>Our Menu</h2>
                            <div className='p5-underline'></div>
                        </div>
                        <FoodMenuCategories categories={categories} filterItems={filterItems}></FoodMenuCategories>
                        <FoodMenuList menu={menu}></FoodMenuList>
                    </section>
                </main>
        </>
    )
}

export default FoodMenu