import './Cocktails.css'

import {CocktailsContext} from "./CocktailsContext";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import CocktailNavbar from "../../components/CocktailNavbar/CocktailNavbar";
import CocktailsHome from "./pages/CocktailsHome";
import CocktailsAbout from "./pages/CocktailsAbout";

function Cocktails () {


    return(
        <>
            <CocktailsContext.Provider value={'Hello'}>
                <CocktailNavbar></CocktailNavbar>
                <Outlet></Outlet>
            </CocktailsContext.Provider>
        </>
    )
}


export default Cocktails