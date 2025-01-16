import React from "react";
import './UserProfileCard.css';
import profile_icon from '../assets/pic.jpg';

const UserProfileCard=()=>{
  return(
    <div className="upc">
      <div className="grediant"></div>
      <div className="profile_down">
        <img src={profile_icon} alt="" />
        <center>
          <div className="profile_title"> ABHAY KUMAR</div>
          <div className="profile_description">
            I am from Ghazipur UP. And working in Devlabs Technology as Software Engineer Intern.
          </div>
          <div className="profile-button">
            <a href="mailto:abhaykumar2001gzp@gmail.com">Contact Me</a>
          </div>
          </center>
      </div>
    </div>
  )
}

export default UserProfileCard;