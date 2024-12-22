import React, { useState, useContext, useEffect, useCallback } from 'react'


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const CocktailsContext = React.createContext()


// make sure use
export const useCocktailsContext = () => {
    return useContext(CocktailsContext)
}

export { CocktailsContext }