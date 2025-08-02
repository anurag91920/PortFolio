import React from 'react';
import Slider from 'react-slick';
import './Hero.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="container my-5" id="projects">
            <div className="text-center mb-5">
                <hr className="underline" />
            </div>

            <Slider {...settings}>
                {/* CozyStay Project */}
                <div className="d-flex justify-content-center">
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
                                href="https://cozy-stay-yths.onrender.com/listings"
                                className="btn btn-primary project-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View CozyStay
                            </a>
                        </div>
                    </div>
                </div>

                {/* ECHOMEET Project */}
                <div className="d-flex justify-content-center">
                    <div className="project-card">
                        <img src="media/images/Pro3.png" alt="ECHOMEET" className="project-img" />
                        <div className="project-body">
                            <h5 className="project-title">ECHOMEET</h5>
                            <p className="project-desc">
                                ECHOMEET is a fully functional Zoom-inspired web application that allows users to host and join video meetings directly through the browser.
                                Built for real-time communication, it integrates video, audio, screen sharing, and chat features in a clean and responsive user interface.
                            </p>
                            <a
                                href="https://echo-meet-frontend-psi.vercel.app/"
                                className="btn btn-primary project-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View ECHOMEET
                            </a>
                        </div>
                    </div>
                </div>

                {/* SmalBlue Project */}
                <div className="d-flex justify-content-center">
                    <div className="project-card">
                        <img src="media/images/Pro4.png" alt="SmalBlue" className="project-img" />
                        <div className="project-body">
                            <h5 className="project-title">SmalBlue</h5>
                            <p className="project-desc">
                                The Business Profile Web App is a sleek, modern platform designed to showcase a company's digital identity.
                                It serves as an interactive online business card that highlights essential information such as services, mission, contact details,
                                and social links. Built for small businesses, freelancers, and startups, this app is perfect for making a strong first impression online.
                            </p>
                            <a
                                href="https://smal-blu.vercel.app/"
                                className="btn btn-primary project-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View SmalBlue
                            </a>
                        </div>
                    </div>
                </div>

                {/* TradeNest Project */}
                <div className="d-flex justify-content-center">
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
                                href="https://trade-nests-frontend.vercel.app/"
                                className="btn btn-primary project-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View TradeNest
                            </a>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Hero;


// Hero.css
// .project-card {
//     width: 100%;
//     max-width: 450px;
// }
