import './ToDos.css'
import { FaTrash, FaEdit } from "react-icons/fa";

function ToDos ({list, deleteToDoHandler, editToDoHandler}) {


    return(
        <>
            <div className='p10-grocery-list'>
                {list.map((item) => {
                    return(
                        <article key={item.id} className='p10-grocery-item'>
                            <p className='p10-title'>{item.title}</p>
                            <div className='p10-btn-container'>
                                <button type='button' className='p10-edit-btn' onClick={() => editToDoHandler(item.id)}>
                                    <FaEdit></FaEdit>
                                </button>
                                <button type='button' className='p10-delete-btn' onClick={() => deleteToDoHandler(item.id)}>
                                    <FaTrash></FaTrash>
                                </button>
                            </div>
                        </article>
                    )
                })}
            </div>
        </>
    )
}

export default ToDos