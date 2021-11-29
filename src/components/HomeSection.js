import React from "react";
import './HomeSection.css'
import Video from "../images/video.mp4"; 
import { Divider } from "@mui/material";

function HomeSection() {
    return (
        <div className='home-container'>
            <video controls autostart autoPlay src={Video} type="video/mp4" autoPlay loop muted />
            <h1>TYPING TEST FOR PROGRAMMERS</h1>
        </div>
    )
}

export default HomeSection