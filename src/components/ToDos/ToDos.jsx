import './ToDos.css'
import { FaTrash, FaEdit } from "react-icons/fa";

function ToDos ({list, deleteToDoHandler, editToDoHandler}) {


    return(
        <>
            <div>
                {list.map((item) => {
                    return(
                        <article key={item.id} className='flex items-center justify-between mb-2 transition py-1 pt-2 rounded px-4 capitalize hover:bg-gray-300 hover:text-gray-700'>
                            <p className='mb-0 text-gray-800 transition'>{item.title}</p>
                            <div className='p10-btn-container'>
                                <button type='button' className='bg-transparent border-transparent cursor-pointer text-sm mx-1 transition text-green-400 hover:text-green-800' onClick={() => editToDoHandler(item.id)}>
                                    <FaEdit></FaEdit>
                                </button>
                                <button type='button' className='bg-transparent border-transparent cursor-pointer text-sm mx-1 transition text-red-400 hover:text-red-800' onClick={() => deleteToDoHandler(item.id)}>
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