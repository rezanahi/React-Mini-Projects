import './Cocktails.css'

import {CocktailsContext} from "./CocktailsContext";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import CocktailNavbar from "../../components/CocktailNavbar/CocktailNavbar";
import CocktailsHome from "./pages/CocktailsHome";
import CocktailsAbout from "./pages/CocktailsAbout";
import {useEffect, useState} from "react";

function Cocktails () {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("a");
    const [cocktails, setCocktails] = useState([]);

    const fetchCocktails = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            const data = await response.json()
            const {drinks} = data
            if(drinks) {
                setCocktails(drinks.map(drink => {
                    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass}
                }))
            } else {
                setCocktails([])
            }
            setLoading(false)
        } catch (err) {
            console.log('error in fetch')
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCocktails()
    }, [searchTerm]);

    return(
        <>
            <CocktailsContext.Provider value={{loading, searchTerm, setSearchTerm, cocktails}}>
                <CocktailNavbar></CocktailNavbar>
                <Outlet></Outlet>
            </CocktailsContext.Provider>
        </>
    )
}


export default Cocktails