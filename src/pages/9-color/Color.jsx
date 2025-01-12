import './Color.css'
import Values from 'values.js'
import {useState} from "react";
import SingleColor from "../../components/SingleColor/SingleColor";

function Color () {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#f15025').all(10))

    function handleSubmit (e) {
        e.preventDefault()
        try{
            let colors = new Values(color).all(10)
            setList(colors)
        } catch (err) {
            setError(true)
        }
    }

    function colorHandler(e) {
        setColor(e.target.value)
        setError(false)
    }

    return(
        <>
            <main  dir='ltr' className='w-full pb-20 bg-fuchsia-300'>
                <section className='text-center flex flex-col md:flex-row items-center h-36 justify-center gap-4 md:h-28 md:pl-8'>
                    <h3 className='mb-0 md:mr-8'>Color Generator</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            className={`py-2 px-4 text-sm md:text-lg rounded-tl rounded-bl ${error && 'border-2 border-solid border-red-700'}`}
                            type='text' value={color} onChange={colorHandler} placeholder='#f15025'/>
                        <button
                            className='bg-emerald-500 py-2 px-4 border-transparent rounded-tr rounded-br capitalize text-sm md:text-lg text-white cursor-pointer'
                            type='submit'>Submit
                        </button>
                    </form>
                </section>
                <section
                    className='grid grid-cols-auto-fit-cols auto-cols-auto-fit-cols grid-rows-auto-fit-rows auto-rows-auto-fit-rows min-h-[calc(100vh-100px)] bg-transparent'>
                    {list.map((color, index) => {
                        return <SingleColor key={index} {...color} index={index}></SingleColor>
                    })}
                </section>
            </main>
        </>
    )
}


export default Color