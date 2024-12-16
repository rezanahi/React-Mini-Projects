import './SingleColor.css'
import {useState} from "react";
import rgbToHex from "../../pages/9-color/ColorUtils";


function SingleColor({rgb, weight, index}) {
    const [alert, setAlert] = useState(false)


    return(
        <>
            <article className={`p9-color ${index > 10 && 'p9-color-light'}`} style={{backgroundColor: `rgb(${rgb.join(',')})`}}>
                <p className='p9-percent-value'>{weight}%</p>
                <p className='p9-color-value'>{rgbToHex(...rgb)}</p>
            </article>
        </>
    )
}


export default SingleColor