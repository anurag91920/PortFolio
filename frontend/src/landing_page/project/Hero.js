/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Hero() {
    return (
        <div className="container">
            <div className="row border-top">
                <div className="col-12 text-center">
                    <div className="p-1" id="sam">
                        <h1>Project</h1>
                    </div>
                </div>

                <div className="col-6 d-flex justify-content-center">
                    <div className="card" style={{ height: '40rem', width: '50rem'}}>
                        <img src="media/images/Pro1.png" className="card-img-top" style={{ height: '35rem', width: '39rem'}}  alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">CozyStay</h5>
                            <p className="card-text">Welcome to Cozy Stay – a collection of thoughtfully designed homes where comfort meets convenience. Whether you're visiting for business or leisure, each Cozy Stay location offers a consistent, warm, and welcoming experience tailored to help you feel right at home.</p>
                            <a href="https://firsts-project.onrender.com" className="inline-flex items-center gap-1.5 btn btn-primary" target="_blank" rel="noopener noreferrer" >
                            <span className="fw-semibold">CozyStay</span>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" className="size-4"
                            viewBox="0 0 24 24">
                            <path d="M7 17 17 7M7 7h10v10" />
                        </svg></a>
                        </div>
                    </div>
                </div>

                <div className="col-6 d-flex justify-content-center">
                    <div className="card" style={{height: '40rem', width: '50rem' }}>
                        <img src="media/images/Pro2.png" className="card-img-top" style={{ height: '35rem', width: '39rem'}} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">TradeNest</h5>
                            <p className="card-text">TradeNest is an innovative and user-friendly trading platform designed to empower both novice and experienced traders. Our platform provides a secure, fast, and intuitive environment for trading a wide range of financial instruments, including stocks, cryptocurrencies, commodities, and forex.</p>
                            <a href="https://seconds-projects-1.onrender.com" className="inline-flex items-center gap-1.5 btn btn-primary" target="_blank" rel="noopener noreferrer" >
                            <span className="fw-semibold">TradeNest</span>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" className="size-4"
                            viewBox="0 0 24 24">
                            <path d="M7 17 17 7M7 7h10v10" />
                        </svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
