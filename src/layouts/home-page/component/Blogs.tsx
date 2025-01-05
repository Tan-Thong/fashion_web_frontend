import React from "react";
import "./../../../css/blogs.css"

function Blogs() {
    return(
        <div className="blog-wrapper">
            <div className="blog-section" style={{backgroundImage: `url(${"./../images/blogs/Blog_Banner_1.webp"})`}}>
                <div className="text-wrapper">
                <div className="text">
                        <p className="title">Icons only.</p>
                        <p className="desc">Evolving the classics.</p>
                    </div>
                    <div>
                        <a href="" className="read-link extensive-btn">Read more</a>
                    </div>
                </div>
            </div>

            <div className="blog-section" style={{backgroundImage: `url(${"./../images/blogs/Blog_Banner_2.webp"})`}}>
                <div className="text-wrapper">
                <div className="text">
                        <p className="title">Icons only.</p>
                        <p className="desc">Evolving the classics.</p>
                    </div>
                    <div>
                        <a href="" className="read-link extensive-btn">Read more</a>
                    </div>
                </div>
            </div>

            <div className="blog-section" style={{backgroundImage: `url(${"./../images/blogs/Blog_Banner_3.webp"})`}}>
                <div className="text-wrapper">
                    <div className="text">
                        <p className="title">Icons only.</p>
                        <p className="desc">Evolving the classics.</p>
                    </div>
                    <div>
                        <a href="" className="read-link extensive-btn">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;