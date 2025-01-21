import './Home.css'
import './Home-media.css'
import {Link} from 'react-router-dom';
import HomePageCard from "../../components/HomePageCard/HomePageCard";
import projects from "./Data";

function Home () {



    return(
        <>
            <div className='container px-2 mt-12 md:px-0 mx-auto mb-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto'>
                {
                    projects.map((item) => {
                        return(
                            <HomePageCard {...item} key={item.id}></HomePageCard>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Home