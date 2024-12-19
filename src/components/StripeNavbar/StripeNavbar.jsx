import './StripeNavbar.css'
import {useStripeAppContext} from "../../pages/13-stripe/context";
import {FaBars} from "react-icons/fa";

function StripeNavbar () {
    const {openSidebar, openModal, closeModal} = useStripeAppContext()

    function openModalHandler (e) {
        const page = e.target.textContent
        const temp = e.target.getBoundingClientRect()
        const center = (temp.left + temp.right) / 2
        const bottom = temp.bottom - 3
        openModal(page, {center, bottom})
    }

    return(
        <>
            <nav className='p13-nav'>
                <div className='p13-nav-center'>
                    <div className='p13-nav-header'>
                        <img src='/images/logo.svg' alt='logo' className='p13-nav-logo'/>
                        <button className='p13-btn p13-toggle-btn' onClick={openSidebar}>
                            <FaBars></FaBars>
                        </button>
                    </div>
                    <ul className='p13-nav-links'>
                        <li>
                            <button className='p13-link-btn' onMouseOver={openModalHandler}>
                                products
                            </button>
                        </li>
                        <li>
                            <button className='p13-link-btn' onMouseOver={openModalHandler}>
                                developers
                            </button>
                        </li>
                        <li>
                            <button className='p13-link-btn' onMouseOver={openModalHandler}>
                                company
                            </button>
                        </li>
                    </ul>
                    <button className='p13-btn p13-signin-btn'>Sign in</button>
                </div>
            </nav>
        </>
    )
}


export default StripeNavbar