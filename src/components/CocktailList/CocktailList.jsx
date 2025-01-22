import React from 'react'
import Cocktail from "../Cocktail/Cocktail";
import CocktailLoading from "../CocktailLoading/CocktailLoading";
import {useCocktailsContext} from "../../pages/15-cocktails/CocktailsContext";

const CocktailList = () => {
    const {cocktails, loading} = useCocktailsContext();
    if (loading) {
        return (
            <CocktailLoading></CocktailLoading>
        )
    } else if(cocktails.length === 0) {
        return (
            <h2 className='text-3xl capitalize text-center mb-14 mt-4'>
                no cocktails matched your search criteria
            </h2>
        )
    }
    return (
        <section className='py-20 px-0'>
            <h2 className='text-3xl capitalize text-center mb-14 mt-4'>
                cocktails
            </h2>
            <div className='w-[65vw] my-0 mx-auto max-w-[1170px] grid gap-8 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item}></Cocktail>
                })}
            </div>
        </section>
    )
}

export default CocktailList