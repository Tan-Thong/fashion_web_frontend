import React from "react";
import "./../../../css/banner.css"

function Banner() {
    return (
        <div className="banner">
            <a href="" className="banner-wrapper">
                <video id="video-bg" playsInline autoPlay loop muted>
                    <source type="video/mp4" src={"./../videos/banner-video.mp4"} />
                    <source type="video/webm" src={"./../videos/banner-video.mp4"} />
                </video>
                <div className="content">
                    <p className="sub-title"><b>UP to 50% OFF</b></p>
                    <p className="title">Holiday Sale</p>
                    <p className="desc">Wardrobe Essentials with endless comfort.</p>
                    <div className="extensive-btn">Shop Now</div>
                </div>
            </a>
        </div>
    );
}

export default Banner;