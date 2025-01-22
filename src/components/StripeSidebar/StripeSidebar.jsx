import './StripeSidebar.css'
import {useStripeAppContext} from "../../pages/13-stripe/context";
import {FaTimes} from "react-icons/fa";
import stripeSubLinks from '../../pages/13-stripe/StripeData'


function StripeSidebar () {
    const {closeSidebar, isSidebarOpen} = useStripeAppContext()
    console.log(isSidebarOpen)

    return(
        <>
            <aside className={`fixed top-0 left-0 w-full h-full grid place-items-center -z-[1] transition-all scale-0 bg-stone-950/50 ${isSidebarOpen ? 'visible z-30 scale-100' : 'invisible'} `}>
                <div className='w-[90vw] h-[95vh] max-w-[1170px] bg-white rounded shadow relative py-16 px-8'>
                    <button className='text-3xl bg-transparent border-transparent text-gray-700 hover:text-gray-900 transition absolute top-6 right-6 cursor-pointer' onClick={closeSidebar}>
                        <FaTimes></FaTimes>
                    </button>
                    <div className='grid grid-rows-3 gap-1'>
                        {stripeSubLinks.map((link, index) => {
                            return (
                                <article className='mb-8' key={index}>
                                    <h4>{link.page}</h4>
                                    <div className='grid grid-rows-3 gap-1'>
                                        {link.links.map((sublink, index) => {
                                            return(
                                                <a className='text-gray-700 capitalize flex items-center' key={index} href={sublink.href}>
                                                    <span className='ml-4 fill-gray-700'>
                                                        {sublink.icon}
                                                    </span>
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