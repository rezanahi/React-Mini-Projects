import './TourBox.css'
import './TourBox-media.css'


function TourBox ({data}) {


    return(
        <>
            <section>
                <div className='title'>
                    <h2>our Tours</h2>
                    <div className='underline'></div>
                </div>
                <div>
                    {data.map((tour) => {
                        return
                    })}
                </div>
            </section>
        </>
    )
}


export default TourBox