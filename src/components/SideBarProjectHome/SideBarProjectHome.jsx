import './SideBarProjectHome.css'
import {FaBars} from "react-icons/fa";


function SideBarProjectHome() {


    return(
        <>
            <main className='p12-main'>
                <button className='p12-sidebar-toggle'>
                    <FaBars></FaBars>
                </button>
                <button className='p12-btn'>
                    show Modal
                </button>
            </main>
        </>
    )
}


export default SideBarProjectHome