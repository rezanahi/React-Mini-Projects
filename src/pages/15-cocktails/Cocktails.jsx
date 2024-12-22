import './Cocktails.css'

import {CocktailsContext} from "./CocktailsContext";


function Cocktails () {


    return(
        <>
            <CocktailsContext.Provider value={'Hello'}>
                Cocktails page
            </CocktailsContext.Provider>
        </>
    )
}


export default Cocktails