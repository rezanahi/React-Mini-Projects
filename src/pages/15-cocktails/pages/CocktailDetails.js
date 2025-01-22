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
        return <div className='w-full h-screen bg-lime-100 pt-8'>
            <h2 className='text-2xl capitalize text-center mb-14'>no cocktail to display</h2>
        </div>
    }

    return (
        <div className='w-full h-full bg-lime-100'>
            <section className='py-20 px-0 text-center'>
            <Link to='/15-cocktails' className='uppercase text-green-800 border-2 border-green-800 inline-flex transition cursor-pointer text-sm bg-transparent rounded py-2 px-4 hover:bg-green-100'>back home</Link>
            <h2 className='text-2xl capitalize text-center mb-14 mt-4'>{cocktail.name}</h2>
            <div className='md:grid md:grid-cols-[2fr_3fr] md:gap-12 md:items-center w-[85vw] max-w-[1170px] mx-auto text-left'>
                <img className='rounded' src={cocktail.image} alt={cocktail.name}/>
                <div className='p15-drink-info'>
                    <p className='font-medium capitalize'>
                        <span className='bg-lime-200 rounded py-1 px-2 text-green-900 mr-2'>name : </span>
                        {cocktail.name}
                    </p>
                    <p className='font-medium capitalize'>
                        <span className='bg-lime-200 rounded py-1 px-2 text-green-900 mr-2'>category : </span>
                        {cocktail.category}
                    </p>
                    <p className='font-medium capitalize'>
                        <span className='bg-lime-200 rounded py-1 px-2 text-green-900 mr-2'>info : </span>
                        {cocktail.info}
                    </p>
                    <p className='font-medium capitalize'>
                        <span className='bg-lime-200 rounded py-1 px-2 text-green-900 mr-2'>glass : </span>
                        {cocktail.glass}
                    </p>
                    <p className='font-medium capitalize'>
                        <span className='bg-lime-200 rounded py-1 px-2 text-green-900 mr-2'>instructions : </span>
                        {cocktail.instructions}
                    </p>
                    <p className='font-medium capitalize'>
                        <span className='bg-lime-200 rounded py-1 px-2 text-green-900 mr-2'>ingredients : </span>
                        {cocktail.ingredients.map((item, index) => {
                            return item ? <span key={index}>{item}</span> : null
                        })}
                    </p>
                </div>
            </div>
        </section>
        </div>
    )
}

export default CocktailDetails