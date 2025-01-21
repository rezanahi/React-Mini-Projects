import './ToDoAlert.css'


function ToDoAlert({msg, type}) {

    return(
        <>
            <p className={`mb-4 h-8 text-center grid items-center text-sm rounded capitalize ${type === 'success' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`}>
                {msg}
            </p>
        </>
    )
}

export default ToDoAlert