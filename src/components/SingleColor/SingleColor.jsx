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
            <article onClick={onClickHandler} className={`p9-color ${index > 10 && 'p9-color-light'}`} style={{backgroundColor: `rgb(${rgb.join(',')})`}}>
                <p className='p9-percent-value'>{weight}%</p>
                <p className='p9-color-value'>{rgbToHex(...rgb)}</p>
                {alert && <p className='p9-alert'>Copied to clipboard</p>}
            </article>
        </>
    )
}


export default SingleColor