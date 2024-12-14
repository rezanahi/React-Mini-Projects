import './Menu.css'
import {Link} from 'react-router-dom';


function Menu() {


    return(
        <div className="w-full bg-white px-6 py-2">
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