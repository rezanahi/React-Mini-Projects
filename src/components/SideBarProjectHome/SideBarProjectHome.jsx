import './SideBarProjectHome.css'
import {FaBars} from "react-icons/fa";
import {useGlobal} from "../../pages/12-sidebar-project/context";

function SideBarProjectHome() {
    const context = useGlobal();

    return(
        <>
            <main className='p12-main'>
                <button className='p12-sidebar-toggle' onClick={() => {context.openSideBar()}}>
                    <FaBars></FaBars>
                </button>
                <button className='p12-btn' onClick={() => {context.openModal()}}>
                    show Modal
                </button>
            </main>
        </>
    )
}


export default SideBarProjectHome