import React, { useState, useEffect } from "react";
import "./../../css/header.css";


interface HeaderInterface {
  color : string;
  logoFilter : string;
}

const Header : React.FC<HeaderInterface> = (props) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [style, setStyle] = useState({
    transform: "translateY(40px)",
    background: "transparent",
    color: props.color,
    logoFilter: props.logoFilter,
    border: "none",
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const newStyle = { ...style };

      if (currentScrollY < 40) {
        newStyle.transform = "translateY(40px)";
        newStyle.background = "transparent"; // Nền trong suốt
        newStyle.color = props.color; // Chữ màu trắng
        newStyle.logoFilter = props.logoFilter; // Đảo màu logo
        newStyle.border = "none";
      } else if (currentScrollY >= 40 && currentScrollY < 250) {
        newStyle.transform = "translateY(10px)";
        newStyle.background = "rgba(255, 255, 255, 0.95)"; // Nền trắng
        newStyle.color = "#000"; // Chữ màu đen
        newStyle.logoFilter = "invert(0)"; // Màu gốc của logo
        newStyle.border = "1px solid #eaeaea";
      } else if (currentScrollY >= 250) {
        if (currentScrollY > lastScrollY) {
            newStyle.transform = "translateY(-120%)"; // Ẩn khi cuộn xuống
        } else {
            newStyle.transform = "translateY(10px)"; // Hiện khi cuộn lên
        }
        newStyle.background = "rgba(255, 255, 255, 0.95)"; // Giữ nền trắng
        newStyle.color = "#000"; // Giữ chữ đen
        newStyle.logoFilter = "invert(0)"; // Màu gốc của logo
        newStyle.border = "#eaeaea solid 1px";
      }

      setStyle(newStyle); // Cập nhật trạng thái style
      setLastScrollY(currentScrollY); // Lưu vị trí cuộn cuối cùng
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, style]);

  return (
    <header
      id="header"
      style={{
        transform: style.transform,
        backgroundColor: style.background,
        color: style.color,
        border: style.border,
        transition: "transform 0.5s ease, opacity 0.4s ease, background-color 0.5s ease, color 0.3s ease, border 0s ease",
      }}
    >
      <div className="nav-left">
        <a href="/">
          <img
            className="logo"
            src={"./../images/LVTT_Logo_Ver_2.png"}
            alt=""
            style={{filter: style.logoFilter, transition: "filter 0.3s ease",
          }}
        /></a>
        <ul className="nav-component">
          <li className="header-extensive">
            <a className="header-extensive-btn" href="#">Footwear</a>
            <div className="sub-menu">
              <ul className="sub-menu-list">
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_1.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_2.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_3.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_4.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="header-extensive">
            <a className="header-extensive-btn" href="#">Menswear</a>
            <div className="sub-menu">
              <ul className="sub-menu-list">
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_1.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_2.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_3.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_4.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="header-extensive">
            <a className="header-extensive-btn" href="#">Cyber Week</a>
            <div className="sub-menu">
              <ul className="sub-menu-list">
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_1.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title extensive-btn">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_2.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title extensive-btn">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_3.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title extensive-btn">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="">
                    <div className="img-wrapper">
                      <img className="image" src={"./../images/categories/Shoes/Shoes_Submenu_Banner_4.webp"} alt="" />
                    </div>
                    <div className="text-wrapper">
                      <p className="title extensive-btn">All Footwear</p>
                      <p className="desc">Discover all wardrobe essentials.</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul className="nav-component">
          <li className="header-extensive">
            <div className="header-extensive-btn">Search</div>
          </li>
          <li className="header-extensive">
            <div className="header-extensive-btn">Service</div>
          </li>
          <li className="header-extensive">
            <div className="header-extensive-btn">My account</div>
          </li>
          <li className="header-extensive" id="cart">0</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
