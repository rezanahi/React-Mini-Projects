import './Cocktails.css'

import {CocktailsContext} from "./CocktailsContext";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import CocktailNavbar from "../../components/CocktailNavbar/CocktailNavbar";
import CocktailsHome from "./pages/CocktailsHome";
import CocktailsAbout from "./pages/CocktailsAbout";
import {useState} from "react";

function Cocktails () {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("a");
    const [cocktails, setCocktails] = useState([]);

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