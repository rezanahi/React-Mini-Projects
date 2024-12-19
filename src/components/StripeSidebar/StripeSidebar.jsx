import './StripeSidebar.css'
import {useStripeAppContext} from "../../pages/13-stripe/context";
import {FaTimes} from "react-icons/fa";
import stripeSubLinks from '../../pages/13-stripe/StripeData'


function StripeSidebar () {
    const {closeSidebar, isSidebarOpen} = useStripeAppContext()

    return(
        <>
            <aside className={`${isSidebarOpen ? 'p13-sidebar-wrapper p13-show' :'p13-sidebar-wrapper'}`}>
                <div className='p13-sidebar'>
                    <button className='p13-close-btn' onClick={closeSidebar}>
                        <FaTimes></FaTimes>
                    </button>
                    <div className='p13-sidebar-sublinks'>
                        {stripeSubLinks.map((link, index) => {
                            return (
                                <article key={index}>
                                    <h4>{link.page}</h4>
                                    <div className='p13-sidebar-sublinks'>
                                        {link.links.map((sublink, index) => {
                                            return(
                                                <a key={index} href={sublink.href}>
                                                    {sublink.icon}
                                                    {sublink.label}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </article>

                            )
                        })}
                    </div>
                </div>
            </aside>
        </>
    )
}


export default StripeSidebar