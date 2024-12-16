import './Tabs.css'
import {useState, useEffect} from "react";
import tabsData from "./TabsData";
import {FaAngleDoubleRight} from "react-icons/fa";


const url = 'https://course-api.com/react-tabs-project'

function Tabs() {
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState(tabsData);
    const [tab, setTab] = useState(0);


    return(
        <>
            <section className='p6-section bg-cyan-50'>
                <div className='p6-title'>
                    <h2>Experience</h2>
                    <div className='p6-underline'></div>
                </div>
                <div className='p6-jobs-center'>
                    <div className='p6-btn-container'>
                        {jobs.map((job, index) => {
                            return <button
                                key={job.id}
                                onClick={() => {setTab(index)}}
                                className={`p6-job-btn ${index === tab && 'p6-active-btn'}`}>
                                {job.company}
                            </button>
                        })}
                    </div>
                    <article className='p6-job-info'>
                        <h3>{jobs[tab].title}</h3>
                        <h4>{jobs[tab].company}</h4>
                        <p className='p6-job-date'>{jobs[tab].dates}</p>
                        {
                            jobs[tab].duties.map((duty, index) => {
                            return (
                                <div key={index} className='p6-job-desc'>
                                    <FaAngleDoubleRight className='p6-job-icon'></FaAngleDoubleRight>
                                    <p>{duty}</p>
                                </div>
                            )
                        })
                        }
                    </article>
                </div>
            </section>
        </>
    )
}

export default Tabs