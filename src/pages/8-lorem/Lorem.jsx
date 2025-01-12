import './Lorem.css'
import loremData from './LoremData'
import {useState} from 'react'

function Lorem () {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setText(loremData.slice(0, +count))
    }

    function handleCount(e) {
        setCount(e.target.value)
    }

    return(
        <>
            <main className='w-full min-h-screen bg-emerald-100 py-20 ' dir='ltr'>
                <section className='w-[90vw] mx-auto max-w-[40rem] text-center'>
                    <h3>Tired of boring lorem ipsum?</h3>
                    <form className='capitalize mt-8 mb-16 flex justify-center items-center' onSubmit={handleSubmit}>
                        <label className='text-xl' htmlFor='amount'>
                            paragraphs:
                        </label>
                        <input className='py-1 px-2 w-16 rounded border-none mx-2 text-xl' type='number' min={0} max={9}
                               name='amount' id='amount' value={count} onChange={handleCount}/>
                        <button type='submit'
                                className='uppercase bg-emerald-500 hover:bg-emerald-300 text-emerald-950 py-1 px-3 inline-block transition text-sm border-2 border-solid border-emerald-500 hover:border-emerald-300 cursor-pointer shadow rounded'>Generate
                        </button>
                    </form>
                    <article>
                        {text.map(p => {
                            return (
                                <p>
                                    {p}
                                </p>
                            )
                        })}
                    </article>
                </section>
            </main>
        </>
    )
}

export default Lorem