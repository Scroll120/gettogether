import './loginPage.css';
import bgvideo from '../../assets/video-bg.mov'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() {
    const navigate = useNavigate()
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: '',
    });


    // http://localhost:5000/api/auth/login
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("aa")
    }



    return (
        <section className='login-page-section'>
            <div className='login-container'>
                <video src={bgvideo} loop muted autoPlay />
                <div className='login-overlay'></div>
                <div className='login-box'>
                    <form onSubmit={handleSubmit} className='login-form'>
                        <div className='email-input-box'>
                        </div>
                        <div className='password-input-box'>
                        </div>
                        <button className='signin-button'>Sign In</button>
                        <button onClick={ () => { navigate('/register')}} className='signup-button'>Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
    )
}