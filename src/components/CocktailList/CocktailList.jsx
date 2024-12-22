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
        <div>
            <h2>cocktail list component</h2>
        </div>
    )
}

export default CocktailList