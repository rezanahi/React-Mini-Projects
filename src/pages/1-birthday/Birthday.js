import './Birthday.css'
import './Birthday-media.css'
import List from "../../components/List/List";
import BirthdayData from "./Birthday-data";
import {useState} from "react";


function Birthday () {

    const [data, setData] = useState(BirthdayData)

    return(
        <>
            <main>
                <section className='container'>
                    <h3>{data.length} birthdays today</h3>
                    <List data={data}></List>
                    <button onClick={() => {setData([])}}>
                        Clear All
                    </button>
                </section>
            </main>
        </>
    )
}


export default Birthday