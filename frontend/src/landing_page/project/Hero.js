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

                {/* Prime Earth Shop Project */}
                <div className="d-flex justify-content-center">
                    <div className="project-card">
                        <img src="media/images/Pro4.png" alt="Prime Earth Shop" className="project-img" />
                        <div className="project-body">
                            <h5 className="project-title">Prime Earth Shop</h5>
                            <p className="project-desc">
                                Project Showcase: Prime Earth Shop
                                I’m excited to share my latest full-stack project
                                 — Prime Earth Shop — an eco-inspired eCommerce platform built from scratch!

                                🛠️ Features & Highlights:
                                * Full Featured eCommerce UI
                                * Product Showcase with Prices
                                * Responsive, modern design
                                * Clean frontend flow
                                * Backend API for product data handling
                                * Designed with performance & usability in mind
                            </p>
                            <a
                                href="https://prime-earth-shop.vercel.app/"
                                className="btn btn-primary project-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Prime Earth Shop
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

                {/* WanderVista Project */}
                <div className="d-flex justify-content-center">
                    <div className="project-card">
                        <img src="media/images/Pro5.png" alt="WanderVista" className="project-img" />
                        <div className="project-body">
                            <h5 className="project-title">WanderVista</h5>
                            <p className="project-desc">
                                WanderVista – Travel Planning Web Application

                                WanderVista ek modern travel planning web application hai jo users ko destinations explore karne, trip ideas lene aur travel inspiration paane mein help karta hai.
                                 Is project ka focus clean UI, smooth navigation aur user-friendly experience par hai.

                                Is website ko responsive design ke saath develop kiya gaya hai taaki desktop aur mobile dono par seamless experience mile.
                                 Project mein structured layout, visually engaging sections aur practical travel-focused features implement kiye gaye hain,
                                  jo real-world web development skills ko showcase karte hain.

                               Key Highlights:

                              * Clean & responsive user interface
                              * Modern frontend design principles
                              * Easy navigation and smooth user experience
                              * Real-world travel website concept
                              * Deployed live using cloud hosting
                            </p>
                            <a
                                href="https://wandervista-qq8u.onrender.com/"
                                className="btn btn-primary project-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View WanderVista
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
