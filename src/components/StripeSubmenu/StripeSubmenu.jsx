import './StripeSubmenu.css'
import {useStripeAppContext} from "../../pages/13-stripe/context";
import {useEffect, useRef, useState} from "react";


function StripeSubmenu () {
    const {isModalOpen, location, page} = useStripeAppContext()
    const container = useRef(null)
    const [columns, setColumns] = useState('p13-col-2')

    useEffect(() => {
        container.current.style.left = location.center + 'px'
        container.current.style.top = location.bottom + 'px'
    }, [location])

    useEffect(() => {
        if(page.links.length === 3) {setColumns('p13-col-3')}
        if(page.links.length > 3) {setColumns('p13-col-4')}
    }, [page]);

    return(
        <>
            <aside ref={container} className={`${isModalOpen ? 'p13-submenu p13-submenu-show' : 'p13-submenu'}`}>
                <h4>{page.page}</h4>
                <div className={`p13-submenu-center ${columns}`}>
                    {
                        page.links.map ((link, index) => {
                            return(
                                <a key={index} href={link.url}>
                                    {link.icon}
                                    {link.label}
                                </a>
                            )
                        })
                    }
                </div>
            </aside>
        </>
    )
}

export default StripeSubmenu