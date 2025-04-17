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
            <div className='left-section'>
                <img src={logo} alt='Logo' className='logo' onClick={() => navigate("/")}/>
            </div>
            <div className='center-section'>
            <form onSubmit={(e) => { e.preventDefault(); console.log(test); }} className='search-project-input-form'>
                    <InputField
                    className="search-project-input-field"
                    placeholder="Search Projects..."
                    type="text"
                    value={test}
                    onChange={(e) => setTest(e.target.value)}/>
                    <button className='search-project-button' type='submit'>
                        <FaSearch size={16} color="#ccc"/>
                    </button>
                </form>
            </div>
            <div className='right-section'>
                <p>sign in</p>
            </div>
        </nav>
    )
}