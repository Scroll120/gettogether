import './loginPage.css';
import bgvideo from '../../assets/video-bg.mov'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputField from '../../components/InputField/InputField';

export default function LoginPage() {
    const navigate = useNavigate()
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: '',
    });
    const [isFailedLogin, setIsFailedLogin] = useState(false);


    // http://localhost:5000/api/auth/login
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: loginDetails.username, password: loginDetails.password})
        })

        if (response.status === 401) {
            setIsFailedLogin(true)
        } else if (response.status === 200 ) {
            const data = await response.json();
            localStorage.setItem("user", JSON.stringify(data));
            navigate('/')
        }
    }



    return (
        <section className='login-page-section'>
            <div className='login-container'>
                <video src={bgvideo} loop muted autoPlay />
                <div className='login-overlay'></div>
                <div className='login-box'>
                    { isFailedLogin ?
                            <div className='failed-login-message-box'>
                                <p className='failed-login-message'>Incorrect Credentials!</p>
                            </div>
                        :
                            <></>
                    }
                    <form onSubmit={handleSubmit} className='login-form'>
                        <div className='username-input-box'>
                            Username
                            <InputField
                            className='username-input-field'
                            placeHolder='Username'
                            type='text'
                            value={loginDetails.username}
                            onChange={(e) => {setLoginDetails(
                                {...loginDetails, username: e.target.value}
                            )}}
                            />
                        </div>
                        <div className='password-input-box'>
                            Password
                            <InputField
                            className='password-input-field'
                            placeHolder='Password'
                            type='password'
                            value={loginDetails.password}
                            onChange={(e) => {setLoginDetails(
                                {...loginDetails, password: e.target.value}
                            )}}
                            />
                        </div>
                        <button className='signin-button'>Sign In</button>
                    </form>
                </div>
            </div>
        </section>
    )
}