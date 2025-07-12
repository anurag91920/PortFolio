import React from 'react';
import './Hero.css'; //  Link this new CSS file

function Hero() {
    return (
        <div className="container my-5" id="projects">
            <div className="text-center mb-5">
                {/* <h1 className="section-title">My Projects</h1> */}
                <hr className="underline" />
            </div>

            <div className="row g-4">
                {/* CozyStay Project */}
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <div className="project-card">
                        <img src="media/images/Pro1.png" alt="CozyStay" className="project-img" />
                        <div className="project-body">
                            <h5 className="project-title">CozyStay</h5>
                            <p className="project-desc">
                                Welcome to Cozy Stay – a collection of thoughtfully designed homes
                                where comfort meets convenience. Whether you're visiting for business
                                or leisure, CozyStay offers a consistent, warm, and welcoming experience.
                            </p>
                            <a
                                href="https://firsts-project.onrender.com/listings"
                                className="btn btn-primary project-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View CozyStay
                            </a>
                        </div>
                    </div>
                </div>

                {/* TradeNest Project */}
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <div className="project-card">
                        <img src="media/images/Pro2.png" alt="TradeNest" className="project-img" />
                        <div className="project-body">
                            <h5 className="project-title">TradeNest</h5>
                            <p className="project-desc">
                                TradeNest is an innovative and user-friendly trading platform for
                                stocks, crypto, commodities, and forex — offering fast, secure, and
                                intuitive trading experiences for all.
                            </p>
                            <a
                                href="https://seconds-projects-1.onrender.com"
                                className="btn btn-primary project-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View TradeNest
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
