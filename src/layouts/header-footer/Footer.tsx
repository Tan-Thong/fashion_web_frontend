import React from "react";
import "./../../css/footer.css"

function Footer() {
    return(
        <div id="footer">
            <div className="footer-about">
                <h3 className="footer-header">About ETQ.</h3>
                <div className="footer-about-content">
                    <p>ETQ is a powerful collective of perfectionists. We design quality wardrobe essentials. Our style never changes. It evolves. Clean and mature, that’s our way of life. It’s our code. <br />
                        <a href="">Read more</a>
                    </p>
                </div>
            </div>
            <div className="footer-address">
                <h3 className="footer-header">Address</h3>
                <div className="footer-address-content">
                    <p>ETQ Amsterdam<br />
                    Duinkerkenstraat 40<br />
                    9723 BT Groningen<br />
                    The Netherlands</p>
                </div>
            </div>
            <div className="footer-contact">
                <h3 className="footer-header">Contact</h3>
                <div className="footer-contact-content">
                    <a href="mailto:" className="link-section">Email us here</a>
                    <a href="tel:+" className="link-section">085 40 13 553 (mon-fri)</a>
                </div>
            </div>
            <div className="footer-info">
                <h3 className="footer-header">Info</h3>
                <div className="footer-info-content">
                    <a href="" className="link-section">Customer Service</a>
                    <a href="" className="link-section">Shipping & Delivery</a>
                    <a href="" className="link-section">Returns & Exchanges</a>
                    <a href="" className="link-section">Care Guide</a>
                    <a href="" className="link-section">Terms of Service</a>
                </div>
            </div>
            <div className="footer-social">
                <h3 className="footer-header">Follow us</h3>
                <div className="footer-social-content">
                    <a href="" className="link-section">Instagram</a>
                    <a href="" className="link-section">Facebook</a>
                    <a href="" className="link-section">Pinterest</a>
                    <a href="" className="link-section">Tiktok</a>
                </div>  
            </div>
        </div>
    );
}

export default Footer;