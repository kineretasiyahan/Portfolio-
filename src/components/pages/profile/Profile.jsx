import React from 'react'
import Typical from 'react-typical'
import './profile.css'

const Profile = () => {
  return (
    <div id="profile"className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-detailes'>
                <div className='icons'>
                <a href='https://www.linkedin.com/in/kineret-asiyahan-85273720b/'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href='https://github.com/kineretasiyahan'><i class="fa fa-github-square" aria-hidden="true"></i></a>
                </div>
                <div className='profile-detailes-name'>
                    <span className='primal-text'>
                        Hello, I`M
                        <span className='text-name'>
                        {" "}
                        Kineret
                        </span>
                    </span>
                </div>
                <div className='profile-detailes-role'>
                <span className='primal-text'>
                    <h1>
                        <Typical loop={Infinity} steps={[
                            "Full Stack Developer 💻" ,1000,
                            "Mern Stack Dev 📱" ,1000,
                            // "Web designer": ,1000
                        ]} />
                    </h1>
                    <span className='profile-role-tagline'>
                        Building application with front and backend opertions.
                    </span>
                </span>
                </div>
                <div className='profile-options'>
                    {/* <button className='btn-primary-btn'>
                        Hire me 
                    </button> */}
                    <a href='Kineret Asiyahan - cv.pdf' download="Kineret Asiyahan - cv.pdf">
                        <button className='primary-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Profile