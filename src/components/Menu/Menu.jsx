import './Menu.css'
import {Link} from 'react-router-dom';


function Menu() {


    return(
        <div className="container">
            <nav className='menu'>
                <ul className='menu__list'>
                    <li className='menu__list__item'>
                        <Link to="/">Home</Link>
                        {/*<Link to="/">Projects</Link>*/}
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Menu;