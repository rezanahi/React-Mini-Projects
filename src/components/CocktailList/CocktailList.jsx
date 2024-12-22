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
            <h2 className='p15-section-title'>
                no cocktails matched your search criteria
            </h2>
        )
    }
    return (
        <section className='p15-section'>
            <h2 className='p15-section-title'>
                cocktails
            </h2>
            <div className='p15-cocktails-center'>
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item}></Cocktail>
                })}
            </div>
        </section>
    )
}

export default CocktailList