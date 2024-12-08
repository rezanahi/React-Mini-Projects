import './Birthday.css'
import './Birthday-media.css'
import List from "../../components/List/List";


function Birthday () {


    return(
        <>
            <main>
                <section className='container'>
                    <h3>0 birthdays today</h3>
                    <List></List>
                    <button onClick={() => {console.log('btn')}}>
                        Clear All
                    </button>
                </section>
            </main>
        </>
    )
}


export default Birthday