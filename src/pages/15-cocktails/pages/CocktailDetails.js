import React, {useCallback, useEffect} from 'react'
import {useState} from "react";
import CocktailLoading from '../../../components/CocktailLoading/CocktailLoading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const CocktailDetails = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [cocktail, setCocktail] = useState(null)

    const getCocktail = useCallback(async function getCocktail () {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            const data = await response.json()
            if(data.drinks) {
                const {strDrink: name,
                    strDrinkThumb: image,
                    strAlcoholic: info,
                    strCategory: category,
                    strGlass: glass,
                    strInstructions: instructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5} = data.drinks[0]
                const ingredients = [strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5]
                const newCocktail = {
                    name, image, info, category, glass, instructions, ingredients
                }
                setCocktail(newCocktail)
            } else {
                setCocktail(null)
            }
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
        setLoading(false)
    }, [id])

    useEffect(() => {
        setLoading(true)
        getCocktail()
    }, [id, getCocktail]);

    if(loading) {
        return <CocktailLoading></CocktailLoading>
    } else if(!cocktail) {
        return <h2 className='p15-section-title'>no cocktail to display</h2>
    }

    return (
        <section className='p15-section p15-cocktail-section'>
            <Link to='/15-cocktails' className='p15-btn p15-btn-primary'>back home</Link>
            <h2 className='p15-section-title'>{cocktail.name}</h2>
            <div className='p15-drink'>
                <img src={cocktail.image} alt={cocktail.name}/>
                <div className='p15-drink-info'>
                    <p>
                        <span className='p15-drink-data'>name : </span>
                        {cocktail.name}
                    </p>
                    <p>
                        <span className='p15-drink-data'>category : </span>
                        {cocktail.category}
                    </p>
                    <p>
                        <span className='p15-drink-data'>info : </span>
                        {cocktail.info}
                    </p>
                    <p>
                        <span className='p15-drink-data'>glass : </span>
                        {cocktail.glass}
                    </p>
                    <p>
                        <span className='p15-drink-data'>instructions : </span>
                        {cocktail.instructions}
                    </p>
                    <p>
                        <span className='p15-drink-data'>ingredients : </span>
                        {cocktail.ingredients.map((item, index) => {
                            return item ? <span key={index}>{item}</span> : null
                        })}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CocktailDetails