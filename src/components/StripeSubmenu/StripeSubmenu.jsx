import './StripeSubmenu.css'
import {useStripeAppContext} from "../../pages/13-stripe/context";
import {useEffect, useRef, useState} from "react";


function StripeSubmenu () {
    const {isModalOpen, location, page} = useStripeAppContext()
    const container = useRef(null)
    const [columns, setColumns] = useState('grid-cols-2')

    useEffect(() => {
        container.current.style.left = location.center + 'px'
        container.current.style.top = location.bottom + 'px'
    }, [location])

    useEffect(() => {
        if(page.links.length === 3) {setColumns('grid-cols-3')}
        if(page.links.length > 3) {setColumns('grid-cols-4')}
    }, [page]);

    return(
        <>
            <aside ref={container} className={`${isModalOpen ? 'block' : 'hidden'} bg-white w-80 shadow absolute top-52 left-1/2 -translate-x-1/2 z-50 p-8 rounded transition before:block before:w-0 before:h-0 before:border-r-transparent before:border-r-4 before:border-l-transparent before:border-l-4 before:border-b-4 before:border-b-white before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2`}>
                <h4 className='mb-6'>{page.page}</h4>
                <div className={`grid divide-y divide-stone-400`}>
                    {
                        page.links.map ((link, index) => {
                            return(
                                <a className='w-full py-2 text-gray-800 capitalize flex items-center hover:text-stone-500 transition' key={index} href={link.url}>
                                    <span className='fill-gray-900 ml-4'>{link.icon}</span>
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