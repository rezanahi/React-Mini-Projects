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
    const [firstTime, setFirstTime] = useState(true)

    useEffect(() => {
            if(localStorage.getItem("myList")) {
                setList(JSON.parse(localStorage.getItem("myList")))
            }
            setFirstTime(false)
    }, [])

    useEffect(() => {
        if(!firstTime) {
            localStorage.setItem('myList', JSON.stringify(list))
        }
    }, [list, firstTime])

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
            <section className='font-vazir w-[90vw] mx-auto max-w-[35rem] mt-32 p-8 bg-white rounded transition shadow hover:shadow-md lg:w-[95vw]'>
                <form onSubmit={submitHandler}>
                    {alert.show && <ToDoAlert {...alert}></ToDoAlert>}
                    <h3 className='text-stone-900 mb-6 text-center'>To Do List</h3>
                    <div className='flex justify-center'>
                        <input
                            type='text'
                            className='p-1 pr-4 bg-gray-200 rounded-tr rounded-br text-lg text-gray-800 grow'
                            placeholder={'مثال : تسک شماره یک'}
                            value={name} onChange={(e) => setName(e.target.value)}/>
                        <button type='submit' className='bg-blue-400 border-transparent basis-20 grid items-center p-1 capitalize rounded-tl rounded-bl cursor-pointer transition text-sm hover:bg-emerald-700 hover:text-white'>
                            {isEditing ? 'ویرایش' : 'ثبت'}
                        </button>
                    </div>
                </form>
                {list.length > 0 &&
                    <div className='mt-8'>
                        <ToDos list={list}
                               deleteToDoHandler={deleteToDoHandler}
                               editToDoHandler={editToDoHandler}></ToDos>
                        <button className='w-full py-1 rounded capitalize grid items-center border-transparent hover:bg-red-200 text-red-600 mx-auto text-sm cursor-pointer transition mt-5' onClick={clearListHandler}>حذف آیتم ها</button>
                    </div>
                }
            </section>
        </>
    )
}


export default ToDoList