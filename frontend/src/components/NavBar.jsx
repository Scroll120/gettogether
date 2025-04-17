import './navBar.css';
import logo from '../assets/logo.png';
import {useNavigate} from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    return (

        <nav className="navbar">
            <div className='left-section'>
                <img src={logo} alt='Logo' className='logo' onClick={() => navigate("/")}/>
            </div>
        </nav>
    )
}