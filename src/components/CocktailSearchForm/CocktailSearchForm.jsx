import React from 'react'
import {useCocktailsContext} from "../../pages/15-cocktails/CocktailsContext";

const CocktailSearchForm = () => {
    const {setSeatchTerm} = useCocktailsContext();
    return (
        <div>
            <h2>search form component</h2>
        </div>
    )
}

export default CocktailSearchForm