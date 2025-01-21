import './SideBar.css'

import {sideBarLinks, sideBarSocial} from '../../pages/12-sidebar-project/SideBarProjectData'
import logo from './logo.svg'
import {FaTimes} from "react-icons/fa";
import {useGlobal} from "../../pages/12-sidebar-project/context";
function SideBar () {
    const context = useGlobal();


    return(
        <>
            <aside className={`fixed top-0 left-0 w-full sm:w-96 h-full bg-white grid transition shadow gap-4 grid-rows-[auto 1fr auto] ${context.isSidebarOpen ? 'translate-x-0' :'-translate-x-full'}`}>
                <div className='flex justify-between items-center py-4 px-6'>
                    <img src={logo} className='justify-self-center h-10' alt='logo'/>
                    <button className='text-3xl bg-transparent border-transparent transition text-red-700 mt-1 hover:text-red-600' onClick={() => {context.closeSideBar()}}>
                        <FaTimes></FaTimes>
                    </button>
                </div>
                <ul className='p12-links'>
                    {sideBarLinks.map((link) => {
                        return (
                            <li key={link.id}>
                                <a className='group/link flex items-center text-lg capitalize py-4 px-6 text-gray-800 transition hover:bg-gray-300 hover:text-gray-950' href={link.url}>
                                    <span className='text-2xl text-gray-800 ml-4 transition group-hover/link:fill-gray-950'>
                                        {link.icon}
                                    </span>
                                    {link.text}</a>
                            </li>
                        )
                    })}
                </ul>
                <ul className='justify-self-center flex gap-4 pb-8'>
                    {sideBarSocial.map((social) => {
                        return (
                            <li key={social.id}>
                                <a className='text-2xl mx-2 text-emerald-500 transition hover:text-emerald-800' href={social.url}>{social.icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}


export default SideBar