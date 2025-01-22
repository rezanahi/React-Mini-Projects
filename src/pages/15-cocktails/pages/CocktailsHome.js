import React from 'react'
import CocktailList from "../../../components/CocktailList/CocktailList";
import CocktailSearchForm from "../../../components/CocktailSearchForm/CocktailSearchForm";


const CocktailsHome = () => {
    return (
        <>
            <main className='p15-main bg-lime-100 min-h-screen'>
                <CocktailSearchForm></CocktailSearchForm>
                <CocktailList></CocktailList>
            </main>
        </>
    )
}

export default CocktailsHome