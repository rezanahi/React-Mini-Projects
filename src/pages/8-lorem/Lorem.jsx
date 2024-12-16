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
            <section className='p8-section-center'>
                <h3>Tired of boring lorem ipsum?</h3>
                <form className='p8-lorem-form' onSubmit={handleSubmit}>
                    <label className='p8-label' htmlFor='amount'>
                        paragraphs:
                    </label>
                    <input className='p8-input' type='number' min={0} name='amount' id='amount' value={count} onChange={handleCount}/>
                    <button type='submit' className='p8-btn'>Generate</button>
                </form>
                <article className='p8-lorem-text'>
                    {text.map(p => {
                        return (
                            <p>
                                {p}
                            </p>
                        )
                    })}
                </article>
            </section>
        </>
    )
}

export default Lorem