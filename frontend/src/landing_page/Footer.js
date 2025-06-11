import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(0, 0, 0)", padding: "20px 0" }}>
            <div className="container text-center" id='footcolor'>
                <hr />
                <div className="mb-3 fs-5">
                    <p >
                        © 2025 All rights reserved.
                    </p>
                </div>
                <div className="fs-4 d-flex justify-content-center flex-wrap gap-3" id='footcolor'>
                    <a
                        href="https://github.com/anurag91920"
                        className="inline-flex items-center gap-1.5 btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="fw-semibold">Github</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" className="size-4"
                            viewBox="0 0 24 24">
                            <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </a>

                    <a
                        href="https://anurag-chaurasiya-32a2442a5"
                        className="inline-flex items-center gap-1.5 btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="fw-semibold">LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" className="size-4"
                            viewBox="0 0 24 24">
                            <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </a>

                    <a
                        href="https://instagram.com/anurag91920"
                        className="inline-flex items-center gap-1.5 btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="fw-semibold">Instagram</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" className="size-4"
                            viewBox="0 0 24 24">
                            <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </a>

                    <a
                        href="https://facebook.com/anurag91920"
                        className="inline-flex items-center gap-1.5 btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="fw-semibold">Facebook</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" className="size-4"
                            viewBox="0 0 24 24">
                            <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </a>

                    <a
                        href="https://wa.me/qr/QAZWIFMSZYN2N1"
                        className="inline-flex items-center gap-1.5 btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="fw-semibold">WhatsApp</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" className="size-4"
                            viewBox="0 0 24 24">
                            <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
