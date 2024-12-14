import './TourBox.css'
import './TourBox-media.css'
import Tour from "../Tour/Tour";


function TourBox ({data, removeTourHandler, refreshHandler}) {


    return(
        <>
            <section>
                <div className='p2-title'>
                    <h2>
                        {data.length ? 'our Tours' : 'no tours left'}
                    </h2>
                    {data.length ?
                        <div className='p2-underline'></div>
                        :
                        <button className='btn' onClick={refreshHandler}>refresh</button>
                    }
                </div>
                <div>
                {data.length ?
                    data.map((tour) => {
                        return <Tour removeTourHandler={removeTourHandler} key={tour.id} {...tour}></Tour>
                    })
                    : undefined
                }
                </div>
            </section>
        </>
    )
}


export default TourBox