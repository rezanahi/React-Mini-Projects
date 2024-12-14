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
            </ul>
        </>
    )
}


export default Home