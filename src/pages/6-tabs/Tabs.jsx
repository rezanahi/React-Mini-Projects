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
            <main className='w-full py-20 bg-cyan-50' dir='ltr'>
                <section className='w-[90vw] lg:w-[95vw] max-w-[1170ox] mx-auto'>
                    <div className='mb-16 text-center'>
                        <h2>Experience</h2>
                        <div className='w-20 h-1 mb-5 mx-auto bg-emerald-500'></div>
                    </div>
                    <div
                        className='max-w-[1170px] mx-auto w-[80vw] md:w-[90vw] md:grid md:grid-cols-2-200px-fr md:gap-x-16'>
                        <div className='flex flex-wrap justify-center mb-16 md:flex-col md:justify-start'>
                            {jobs.map((job, index) => {
                                return <button
                                    key={job.id}
                                    onClick={() => {
                                        setTab(index)
                                    }}
                                    className={` border-transparent shadow rounded hover:shadow hover:shadow-emerald-500/50 capitalize text-sm md:text-xl text-emerald-500 mx-2 transition cursor-pointer py-2 px-4  outline-emerald-500 md:mb-4 ${index === tab && 'text-white bg-emerald-500 shadow shadow-emerald-500/50'}`}>
                                    {job.company}
                                </button>
                            })}
                        </div>
                        <article>
                            <h3 className='font-normal'>{jobs[tab].title}</h3>
                            <h4 className='capitalize text-gray-400 bg-gray-900 inline-block py-2 px-4 rounded'>{jobs[tab].company}</h4>
                            <p>{jobs[tab].dates}</p>
                            {
                                jobs[tab].duties.map((duty, index) => {
                                    return (
                                        <div key={index} className='grid grid-cols-2-auto-fr mb-5 items-center gap-x-8'>
                                            <FaAngleDoubleRight className='fill-emerald-500'></FaAngleDoubleRight>
                                            <p className='text-gray-500 mb-0'>{duty}</p>
                                        </div>
                                    )
                                })
                            }
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Tabs