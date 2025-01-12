import './SingleColor.css'
import {useState} from "react";
import rgbToHex from "../../pages/9-color/ColorUtils";


function SingleColor({rgb, weight, index}) {
    const [alert, setAlert] = useState(false)

    function onClickHandler(e) {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 2000)
        navigator.clipboard.writeText(rgbToHex(...rgb))
    }

    return(
        <>
            <article onClick={onClickHandler} className={`py-4 px-8 cursor-pointer text-sm text-black`} style={{backgroundColor: `rgb(${rgb.join(',')})`}}>
                <p className={`mb-0 ${index > 10 ? 'text-white' : 'text-black'}`}>{weight}%</p>
                <p className={`mb-0 ${index > 10 ? 'text-white' : 'text-black'}`}>{rgbToHex(...rgb)}</p>
                {alert && <p className='uppercase text-sm mt-2 '>Copied to clipboard</p>}
            </article>
        </>
    )
}


export default SingleColor