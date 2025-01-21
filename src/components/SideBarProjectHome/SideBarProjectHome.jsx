import './SideBarProjectHome.css'
import {FaBars} from "react-icons/fa";
import {useGlobal} from "../../pages/12-sidebar-project/context";

function SideBarProjectHome() {
    const context = useGlobal();

    return(
        <>
            <main className='min-h-screen flex justify-center items-center'>
                <button className='fixed top-16 left-12 text-3xl bg-transparent border-transparent text-stone-800 transition cursor-pointer animate-pulse' onClick={() => {context.openSideBar()}}>
                    <FaBars></FaBars>
                </button>
                <button className='uppercase bg-stone-900 text-stone-300 py-2 px-4 inline-block transition text-sm border-2 border-stone-900 cursor-pointer shadow rounded-md m-2 hover:text-stone-900 hover:bg-transparent' onClick={() => {context.openModal()}}>
                    show Modal
                </button>
            </main>
        </>
    )
}


export default SideBarProjectHome