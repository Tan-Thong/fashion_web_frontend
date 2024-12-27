import React from "react";
import "./../css/banner.css"

function Banner() {
    return (
        <a href="" className="banner">
            <video id="video-bg" playsInline autoPlay loop muted>
                <source type="video/mp4" src={require("./../videos/banner-video.mp4")} />
                <source type="video/webm" src={require("./../videos/banner-video.mp4")} />
            </video>
            <div className="content">
                <p className="sub-title"><b>UP to 50% OFF</b></p>
                <p className="title">Holiday Sale</p>
                <p className="desc">Wardrobe Essentials with endless comfort.</p>
                <a href="">Shop Now</a>
            </div>
        </a>
    );
}

export default Banner;