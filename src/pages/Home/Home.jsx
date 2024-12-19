import './Home.css'
import './Home-media.css'
import {Link} from 'react-router-dom';


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
            </ul>
        </>
    )
}


export default Home