import './Tours.css'
import './Tours-media.css'
import {useEffect, useState} from "react";

import ToursData from "./Tours-data";
//component
import Loading from "../../components/Loading/Loading";


const url = 'https://course-api.com/react-tours-project'

function Tours () {

    const [loading, setLoading] = useState(false);
    const [tour, setTours] = useState(ToursData);


    return(
        <>
            {loading ?
                <main>
                    <Loading></Loading>
                </main>
                :
                <main>
                    Tours List
                </main>}
        </>
    )
}

export default Tours