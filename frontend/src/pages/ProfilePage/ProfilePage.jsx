import './profilePage.css';
import { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";

export default function ProfilePage () {

    const [userData, setUserData] = useState(null);
    console.log(userData)

    useEffect(()=> {
        fetchUserData();
    },[])

    async function fetchUserData () {
        try {
            const response = await fetch ("http://localhost:5000/api/accounts/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
                }
            });
            const data = await response.json();
            setUserData(data);
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <section className='profile-page-section'>
            <div className='profile-page-container'>
                <div className='profile-information-box'>
                    <div className='profile-information-left-section'>
                        {/*add on click method for pop up to change PFP!!! */}
                        <div className='profile-picture-wrapper'>
                            {userData && userData.pfp ? (
                                <div>
                                </div>
                            ) : (
                                <div>
                                    <CgProfile/>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='profile-information-center-section'></div>
                    <div className='profile-information-right-section'></div>
                </div>
            </div>
        </section>
    )
}