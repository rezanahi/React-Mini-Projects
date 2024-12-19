import './SideBar.css'

import {sideBarLinks, sideBarSocial} from '../../pages/12-sidebar-project/SideBarProjectData'
import logo from './logo.svg'
import {FaTimes} from "react-icons/fa";
import {useGlobal} from "../../pages/12-sidebar-project/context";
function SideBar () {
    const context = useGlobal();


    return(
        <>
            <aside className={`p12-sidebar ${context.isSidebarOpen && 'p12-show-sidebar'}`}>
                <div className='p12-sidebar-header'>
                    <img src={logo} className='p12-logo' alt='logo'/>
                    <button className='p12-close-btn' onClick={() => {context.closeSideBar()}}>
                        <FaTimes></FaTimes>
                    </button>
                </div>
                <ul className='p12-links'>
                    {sideBarLinks.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href={link.url}>{link.icon}{link.text}</a>
                            </li>
                        )
                    })}
                </ul>
                <ul className='p12-social-icons'>
                    {sideBarSocial.map((social) => {
                        return (
                            <li key={social.id}>
                                <a href={social.url}>{social.icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}


export default SideBar