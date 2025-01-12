import './Tours.css'
import './Tours-media.css'
import {useEffect, useState} from "react";

import ToursData from "./Tours-data";
//component
import Loading from "../../components/Loading/Loading";
import TourBox from "../../components/TourBox/TourBox";



function Tours () {

    const [loading, setLoading] = useState(false);
    const [tours, setTours] = useState(ToursData);

    function removeTourHandler (id) {
        const newTours = tours.filter((tour) => {
            return tour.id !== id
        })
        setTours(newTours)
    }

    function refreshHandler () {
        setTours(ToursData)
    }

    return(
        <>
            {loading ?
                <main>
                    <Loading></Loading>
                </main>
                :
                <main className='w-full bg-emerald-100'>
                    <TourBox
                        refreshHandler={refreshHandler}
                        removeTourHandler={removeTourHandler}
                        data={tours}>
                    </TourBox>
                </main>}
        </>
    )
}

export default Tours