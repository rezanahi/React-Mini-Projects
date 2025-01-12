import './Home.css'
import './Home-media.css'
import {Link} from 'react-router-dom';
import HomePageCard from "../../components/HomePageCard/HomePageCard";
import projects from "./Data";

function Home () {



    return(
        <>
            <ul>
                <li><Link to="/1-birthday">1-Birthday</Link></li>
                <li><Link to="/2-tours">2-Tours</Link></li>
                <li><Link to="/3-reviews">3-Reviews</Link></li>
                <li><Link to="/4-accordion">4-accordion</Link></li>
                <li><Link to="/5-foodmenu">5-Food Menu</Link></li>
                <li><Link to="/6-tabs">6-tabs</Link></li>
                <li><Link to="/7-slider">7-slider</Link></li>
                <li><Link to="/8-lorem">8-lorem</Link></li>
                <li><Link to="/9-color">9-color</Link></li>
                <li><Link to="/10-todolist">10-todolist</Link></li>
                <li><Link to="/11-navbar">11-navbar</Link></li>
                <li><Link to="/12-sidebar">12-sidebar</Link></li>
                <li><Link to="/13-stripe">13-stripe</Link></li>
                <li><Link to="/14-cart">14-cart</Link></li>
                <li><Link to="/15-cocktails">15-cocktails</Link></li>
            </ul>
            <div className='container px-2 md:px-0 mx-auto mb-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto'>
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