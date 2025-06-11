import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "rgb(8, 4, 4)" }} >
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img src='media/images/Logo.png' style={{ width: "20%" }} alt='Site Logo' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex">
                        <ul className="navbar-nav me-auto  mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link active" to="/home" style={{ color: "rgba(254, 185, 1, 1)" }}>Home</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link id='same' className="nav-link active" to="/about"  >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link id='same' className="nav-link active" to="/project" >Project</Link>
                            </li>
                            <li className="nav-item">
                                <Link id='same' className="nav-link active" to="/contact" >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
