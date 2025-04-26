import './navBar.css';
import logo from '../../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import InputField from '../InputField/InputField';
import {useNavigate} from 'react-router-dom';
import {useState} from "react";

export default function NavBar() {
    const navigate = useNavigate();
    const [test, setTest] = useState("");

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
                        onSubmit={(e) => { e.preventDefault(); console.log(test); }}
                        className='search-project-input-form'>
                        <div className='search-project-input-field'>
                            <FaSearch size={14} color="#ccc" />
                            <InputField
                                className="search-project-input-field"
                                placeholder="Search Projects..."
                                type="text"
                                value={test}
                                onChange={(e) => setTest(e.target.value)} />
                        </div>
                    </form>
                </div>
            </div>

            <div className='right-section'>
                <button className="sign-button sign-up" onClick={() => navigate("/register")}>Sign Up</button>
                <button className="sign-button sign-in" onClick={() => navigate("/login")}>Sign In</button>
            </div>
        </nav>

    )
}