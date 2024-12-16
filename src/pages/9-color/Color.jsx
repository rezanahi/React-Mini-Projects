import './Color.css'
import Values from 'values.js'
import {useState} from "react";
import SingleColor from "../../components/SingleColor/SingleColor";

function Color () {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState([])

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
            <section className='p9-container'>
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input className={`p9-input ${error && 'p9-error'}`} type='text' value={color} onChange={colorHandler} placeholder='#f15025'/>
                    <button className='p9-btn' type='submit'>Submit</button>
                </form>
            </section>
            <section className='p9-colors'>
                {list.map((color, index) => {
                    return <SingleColor key={index} {...color} index={index}></SingleColor>
                })}
            </section>
        </>
    )
}


export default Color