import React, {useEffect} from 'react'
import {useCocktailsContext} from "../../pages/15-cocktails/CocktailsContext";
import {useRef} from "react";
import cocktails from "../../pages/15-cocktails/Cocktails";

const CocktailSearchForm = () => {
    const {setSearchTerm} = useCocktailsContext();
    const searchValue = useRef(null)

    useEffect(() => {
        searchValue.current.focus()
    }, []);

    function searchCocktail () {
        if (searchValue.current.value) {
            setSearchTerm(searchValue.current.value)
        } else {
            setSearchTerm('a')
        }
    }

    function submitHandler (e) {
        e.preventDefault()
    }

    return (
        <section className='p15-section p15-search'>
            <form className='p15-search-form' onSubmit={submitHandler}>
                <div className='p15-form-control'>
                    <label htmlFor='name'> search your favorite cocktail</label>
                    <input id='name' type='text' ref={searchValue} onChange={searchCocktail}/>
                </div>
            </form>
        </section>
    )
}

export default CocktailSearchForm