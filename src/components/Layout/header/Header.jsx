import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
const Header = () => {
    return (
        <div className="headerSection">
            <div className="img">
                <img src={Logo} alt={"logoimage"} />
            </div>
            <div className="title">
                <p>25 Miniproyectos usando HTML, CSS y javascript</p>
            </div>
        </div>
    );
};

export default Header;
