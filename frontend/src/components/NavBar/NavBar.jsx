import './navBar.css';
import logo from '../../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import InputField from '../InputField/InputField';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from "react";

export default function NavBar() {
    const navigate = useNavigate();
    const [searchbarText, setSearchbarText] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() =>{
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user);
    },[location.pathname]);


    function handleSignOut() {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/');
    }


    return (

        <nav className="navbar">
            <div className="main-left">
                <div className='left-section'>
                    <div className='logo-wrapper'>
                        <img src={logo} alt='Logo' className='logo' onClick={() => navigate("/")}/>
                    </div>
                </div>
                <div className='center-section'>
                    <form
                        onSubmit={(e) => { e.preventDefault(); console.log(searchbarText); }}
                        className='search-project-input-form'>
                        <div className='search-project-input-field'>
                            <FaSearch size={14} color="#ccc" />
                            <InputField
                                className="search-project-input-field"
                                placeholder="Search Projects..."
                                type="text"
                                value={searchbarText}
                                onChange={(e) => setSearchbarText(e.target.value)} />
                        </div>
                    </form>
                </div>
            </div>

            <div className='right-section'>
                {isLoggedIn ? (
                    <>
                        <div className='dropdown-menu-wrapper'>
                            <div className='hamburger-icon'> &#9776; </div>

                            <div className="dropdown-hover-buffer"></div>
                            <ul className='dropdown'>
                                <li className='dropdown-profile'>
                                    <a className='dropdown-profile-button' onClick={() => navigate('/me')}>Profile</a>
                                </li>
                                <li className='dropdown-dashboard'>
                                    <a className='dropdown-dashboard-button' onClick={() => navigate('/dashboard')}>Dashboard</a>
                                </li>
                            </ul>
                        </div>
                        <button className="sign-button sign-out" onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <button className="sign-button sign-up" onClick={() => navigate("/register")}>Sign Up</button>
                        <button className="sign-button sign-in" onClick={() => navigate("/login")}>Sign In</button>
                    </>
                )}
            </div>
        </nav>

    )
}