import './StripeSubmenu.css'
import {useStripeAppContext} from "../../pages/13-stripe/context";
import {useEffect, useRef} from "react";


function StripeSubmenu () {
    const {isModalOpen, location} = useStripeAppContext()
    const container = useRef(null)

    useEffect(() => {
        container.current.style.left = location.center + 'px'
        container.current.style.top = location.bottom + 'px'
    }, [location]);

    return(
        <>
            <aside ref={container} className={`${isModalOpen ? 'p13-submenu p13-submenu-show' : 'p13-submenu'}`}>
                submenu
            </aside>
        </>
    )
}

export default StripeSubmenu