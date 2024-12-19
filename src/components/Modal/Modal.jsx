import './Modal.css'
import {FaTimes} from "react-icons/fa";
import {useGlobal} from "../../pages/12-sidebar-project/context";



function Modal () {
    const context = useGlobal();

    return(
        <>
            <div className={`p12-modal-overlay ${context.isModalOpen && 'p12-show-modal'}`}>
                <div className='p12-modal-container'>
                    <h3>modal content</h3>
                    <button className='p12-close-modal-btn' onClick={() => {context.closeModal()}}>
                        <FaTimes/>
                    </button>
                </div>
            </div>
        </>
    )
}



export default Modal