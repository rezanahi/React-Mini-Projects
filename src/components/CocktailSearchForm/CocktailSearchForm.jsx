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
        <section className='py-20 px-0 pb-0'>
            <form className='w-[85vw] mx-auto max-w-[1170px] bg-white py-8 px-10 capitalize rounded shadow' onSubmit={submitHandler}>
                <div className='p15-form-control'>
                    <label className='block mb-5 font-bold text-green-800 text-end' htmlFor='name'> search your favorite cocktail</label>
                    <input className='outline-1 outline-green-800 w-full border-none border-transparent bg-green-200 rounded p-2 text-lg' id='name' type='text' ref={searchValue} onChange={searchCocktail}/>
                </div>
            </form>
        </section>
    )
}

export default CocktailSearchForm