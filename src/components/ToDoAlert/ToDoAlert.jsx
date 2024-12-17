import './ToDoAlert.css'


function ToDoAlert({msg, type}) {

    return(
        <>
            <p className={`p10-alert p10-alert-${type}`}>
                {msg}
            </p>
        </>
    )
}

export default ToDoAlert