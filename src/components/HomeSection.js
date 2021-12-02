import React from "react";
import './HomeSection.css'
import Video from "../images/video.mp4"; 
import { Link } from 'react-router-dom';

function HomeSection() {
    return (
        <div className='home-container'>
            <video controls autostart autoPlay src={Video} type="video/mp4" autoPlay loop muted />
            <h1>TYPING TEST FOR PROGRAMMERS</h1>
            <p>Improve your typing skills with this website</p>
            <Link to="/Language">
                <button1>
                    Start Typing
                </button1>
            </Link>
        </div>
    )
}

export default HomeSection