import './loginPage.css';
import bgvideo from '../../assets/video-bg.mov'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputField from '../../components/InputField/InputField';

export default function LoginPage() {
    const navigate = useNavigate()
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: '',
    });


    // http://localhost:5000/api/auth/login
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(loginDetails)
    }



    return (
        <section className='login-page-section'>
            <div className='login-container'>
                <video src={bgvideo} loop muted autoPlay />
                <div className='login-overlay'></div>
                <div className='login-box'>
                    <form onSubmit={handleSubmit} className='login-form'>
                        <div className='email-input-box'>
                            <InputField
                            className='email-input-field'
                            placeHolder='Email'
                            value={loginDetails.email}
                            onChange={(e) => {setLoginDetails(
                                {
                                    email: e.target.value,
                                    password: loginDetails.password
                                }
                            )}}
                            />
                        </div>
                        <div className='password-input-box'>
                            <InputField
                            className='password-input-field'
                            placeHolder='Password'
                            value={loginDetails.password}
                            onChange={(e) => {setLoginDetails(
                                {
                                    email: loginDetails.email,
                                    password: e.target.value
                                }
                            )}}
                            />
                        </div>
                        <button className='signin-button'>Sign In</button>
                        <button onClick={ () => { navigate('/register')}} className='signup-button'>Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
    )
}