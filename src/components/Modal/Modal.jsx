import './Modal.css'
import {FaTimes} from "react-icons/fa";
import {useGlobal} from "../../pages/12-sidebar-project/context";



function Modal () {
    const context = useGlobal();

    return(
        <>
            <div className={`fixed top-0 left-0 h-full w-full bg-stone-900 grid place-items-center transition ${context.isModalOpen === true ? 'opacity-100 z-10' : '-z-[1] opacity-0'}`}>
                <div className='bg-stone-100 rounded-md w-[90vw] h-[30vh] max-w-[400px] text-center grid place-items-center relative'>
                    <h3>modal content</h3>
                    <button className='absolute top-4 right-4 text-3xl bg-transparent border-transparent text-red-700 cursor-pointer hover:text-red-900 transition' onClick={() => {context.closeModal()}}>
                        <FaTimes/>
                    </button>
                </div>
            </div>
        </>
    )
}



export default Modal