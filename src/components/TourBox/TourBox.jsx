import './TourBox.css'
import './TourBox-media.css'
import Tour from "../Tour/Tour";


function TourBox ({data, removeTourHandler, refreshHandler}) {


    return(
        <>
            <section className='w-full max-w-96 md:w-96 mx-auto py-24 px-2 md:px-0'>
                <div className='mb-16 text-center'>
                    <h2>
                        {data.length ? 'our Tours' : 'no tours left'}
                    </h2>
                    {data.length ?
                        <div className='w-24 h-1 mx-auto bg-emerald-500'></div>
                        :
                        <button className='block bg-emerald-500 py-1 px-2 rounded capitalize text-amber-100 mt-9 mx-auto cursor-pointer text-lg' onClick={refreshHandler}>refresh</button>
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