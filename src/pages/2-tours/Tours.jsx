import './Tours.css'
import './Tours-media.css'
import {useEffect, useState} from "react";

import ToursData from "./Tours-data";
//component
import Loading from "../../components/Loading/Loading";
import TourBox from "../../components/Tour/TourBox";



function Tours () {

    const [loading, setLoading] = useState(false);
    const [tours, setTours] = useState(ToursData);


    return(
        <>
            {loading ?
                <main>
                    <Loading></Loading>
                </main>
                :
                <main>
                    <TourBox data={tours}></TourBox>
                </main>}
        </>
    )
}

export default Tours