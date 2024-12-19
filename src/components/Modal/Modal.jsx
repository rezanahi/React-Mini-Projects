import './Modal.css'
import {FaTimes} from "react-icons/fa";



function Modal () {


    return(
        <>
            <div className={`p12-modal-overlay`}>
                <div className='p12-modal-container'>
                    <h3>modal content</h3>
                    <button className='p12-close-modal-btn'>
                        <FaTimes/>
                    </button>
                </div>
            </div>
        </>
    )
}



export default Modal