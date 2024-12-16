import './Tabs.css'
import {useState, useEffect} from "react";


const url = 'https://course-api.com/react-tabs-project'
import tabsData from "./TabsData";

function Tabs() {
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState(tabsData);
    const [tab, setTab] = useState(0);


    return(
        <>

        </>
    )
}

export default Tabs