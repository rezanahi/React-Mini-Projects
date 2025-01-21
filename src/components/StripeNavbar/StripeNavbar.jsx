import './StripeNavbar.css'
import {useStripeAppContext} from "../../pages/13-stripe/context";
import {FaBars} from "react-icons/fa";
import stripeSubLinks from "../../pages/13-stripe/StripeData";

function StripeNavbar () {
    const {openSidebar, openModal, closeModal} = useStripeAppContext()

    function openModalHandler (e) {
        const page = e.target.textContent
        const temp = e.target.getBoundingClientRect()
        const center = (temp.left + temp.right) / 2
        const bottom = temp.bottom - 3
        openModal(page, {center, bottom})
    }

    function mouseLeaveHandler (e) {
        if(!e.target.classList.contains('p13-link-btn')) {
            closeModal()
        }
    }

    return(
        <>
            <nav className='h-20 flex items-center justify-center bg-transparent relative z-[1]' onMouseOver={mouseLeaveHandler}>
                <div className='w-[90vw] max-w-[1170px] md:grid md:grid-cols-[auto_1fr_auto] md:items-center'>
                    <div className='flex justify-between items-center'>
                        <img src='/images/logo.svg' alt='logo' className=''/>
                        <button className='text-lg py-1 px-3 rounded-md border-transparent text-white bg-stone-900 cursor-pointer transition hover:bg-stone-800 md:hidden' onClick={openSidebar}>
                            <FaBars></FaBars>
                        </button>
                    </div>
                    <ul className='hidden md:grid md:justify-center md:grid-cols-3 md:text-center md:h-full md:items-center'>
                        {
                            stripeSubLinks.map(link => {
                                return (
                                    <li className='md:h-full'>
                                        <button className='md:h-full md:bg-transparent md:border-transparent md:text-lg md:text-white md:w-40' onMouseOver={openModalHandler}>
                                            {link.page}
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className='text-lg py-1 px-3 rounded-md border-transparent text-white bg-stone-900 cursor-pointer transition hover:bg-stone-800 hidden md:inline-block'>Sign in</button>
                </div>
            </nav>
        </>
    )
}


export default StripeNavbar