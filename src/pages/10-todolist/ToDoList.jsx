import './ToDoList.css'
import {useEffect, useState} from "react";
import ToDos from "../../components/ToDos/ToDos";
import ToDoAlert from "../../components/ToDoAlert/ToDoAlert";


function ToDoList () {

    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [alert, setAlert] = useState({show: false, msg: '', type: ''})

    useEffect(() => {
        let timer = setTimeout(() => {
            setAlert({...alert, show: false})
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [alert])

    function submitHandler(e) {
        e.preventDefault()
        if (!name) {
            setAlert({show: true, type: 'danger', msg: 'Empty Value!!!'})
        } else if(name && isEditing) {
            setAlert({show: true, msg: 'ToDo Edited', type: 'success'})
            let newList = list
            let index = list.findIndex((item) => {
                return item.id === editId
            })
            newList.splice(index, 1, {id: editId, title: name})
            setList(newList)
            setIsEditing(false)
            setName('')
            setEditId(null)
        } else {
            let newTodo = {id: new Date().getTime().toString(), title: name}
            setList(list => [...list, newTodo])
            setName('')
            setAlert({show: true, msg: 'ToDo Added', type: 'success'})
        }
    }

    function deleteToDoHandler (id) {
        let newList = list.filter((item) => item.id !== id )
        setList(newList)
        setAlert({show: true, msg: 'ToDo Deleted', type: 'success'})
    }

    function editToDoHandler (id) {
        setEditId(id)
        let todo = list.find((item) => item.id === id)
        setName(todo.title)
        setIsEditing(true)
    }

    function clearListHandler () {
        setList([])
        setAlert({show: true, msg: 'Empty List', type: 'danger'})
    }

    return(
        <>
            <section className='p10-section-center'>
                <form className='p10-grocery-form' onSubmit={submitHandler}>
                    {alert.show && <ToDoAlert {...alert}></ToDoAlert>}
                    <h3>To Do List</h3>
                    <div className='p10-form-control'>
                        <input
                            type='text'
                            className='p10-grocery'
                            placeholder={'ex. my todo'}
                            value={name} onChange={(e) => setName(e.target.value)}/>
                        <button type='submit' className='p10-submit-btn'>
                            {isEditing ? 'edit' : 'submit'}
                        </button>
                    </div>
                </form>
                {list.length > 0 &&
                    <div className='p10-grocery-container'>
                        <ToDos list={list}
                               deleteToDoHandler={deleteToDoHandler}
                               editToDoHandler={editToDoHandler}></ToDos>
                        <button className='p10-clear-btn' onClick={clearListHandler}>Clear Items</button>
                    </div>
                }
            </section>
        </>
    )
}


export default ToDoList