import './Birthday.css'
import './Birthday-media.css'
import List from "../../components/List/List";
import BirthdayData from "./Birthday-data";
import {useState} from "react";


function Birthday () {

    const [data, setData] = useState(BirthdayData)

    return(
        <>
            <main
                className='min-w-full min-h-screen flex items-center justify-center bg-pink-600'>
                <section
                    className='w-90-screen my-20 max-w-96 bg-amber-100 py-8 px-8 rounded shadow-xl'>
                    <h3
                        className='mb-9'>
                        {data.length} birthdays today
                    </h3>
                    <List data={data}></List>
                    <button
                        className='text-amber-100 block w-full border-transparent bg-pink-400 mt-8 mx-auto uppercase text-lg py-2 rounded cursor-pointer hover:bg-pink-600 transition'
                        onClick={() => {setData([])}}>
                        Clear All
                    </button>
                </section>
            </main>
        </>
    )
}


export default Birthday