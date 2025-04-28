import './registerPage.css';
import bgvideo from '../../assets/video-bg.mov'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputField from '../../components/InputField/InputField';

export default function RegisterPage() {
    const navigate = useNavigate()
    const [registerDetails, setRegisterDetails] = useState({
        username: '',
        password: '',
        emial: '',
    });
    const [isFailedRegister, setIsFailedRegister] = useState(false);
    const [isSuccessfulRegister, setIsSuccessfulRegister] = useState(false);


        // http://localhost:5000/api/auth/register
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: registerDetails.username, password: registerDetails.password, email: registerDetails.email})
        })

        if (response.status === 400) {
            setIsFailedRegister(true)
        } else if (response.status === 201 ) {
            const data = await response.json();
            setIsSuccessfulRegister(true)
            console.log(data)
        }
    }



    return (
        <section className='register-page-section'>
            <div className='register-container'>
                <video src={bgvideo} loop muted autoPlay />
                <div className='register-overlay'></div>
                <div className='register-box'>
                    { isFailedRegister ?
                            <div className='failed-register-message-box'>
                                <p className='failed-register-message'>Failed to Register!</p>
                            </div>
                        :
                            <></>
                    }
                    { isSuccessfulRegister ?
                            <div className='successful-register-message-box'>
                                <p className='successful-register-message'>Successful Registration!</p>
                            </div>
                        :
                            <></>
                    }
                    <form onSubmit={handleSubmit} className='register-form'>
                        <div className='username-input-box'>
                            Username
                            <InputField
                            className='username-input-field'
                            placeHolder='Username'
                            type='text'
                            value={registerDetails.username}
                            onChange={(e) => {setRegisterDetails(
                                {...registerDetails, username: e.target.value}
                            )}}
                            />
                        </div>
                        <div className='email-input-box'>
                            Email
                            <InputField
                            className='email-input-field'
                            placeHolder='Email'
                            type='text'
                            value={registerDetails.email}
                            onChange={(e) => {setRegisterDetails(
                                {...registerDetails, email: e.target.value}
                            )}}
                            />
                        </div>
                        <div className='password-input-box'>
                            Password
                            <InputField
                            className='password-input-field'
                            placeHolder='Password'
                            type='password'
                            value={registerDetails.password}
                            onChange={(e) => {setRegisterDetails(
                                {...registerDetails, password: e.target.value}
                            )}}
                            />
                        </div>
                        <button className='signup-button'>Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
    )
}