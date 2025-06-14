import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container text-center">
                <hr className="footer-line" />
                <p className="footer-text">© 2025 All rights reserved.</p>

                <div className="social-links">
                    <a href="https://github.com/anurag91920" target="_blank" rel="noopener noreferrer" className="footer-btn">
                        Github
                        <span className="icon">↗</span>
                    </a>
                    <a href="https://anurag-chaurasiya-32a2442a5" target="_blank" rel="noopener noreferrer" className="footer-btn">
                        LinkedIn
                        <span className="icon">↗</span>
                    </a>
                    <a href="https://instagram.com/anurag91920" target="_blank" rel="noopener noreferrer" className="footer-btn">
                        Instagram
                        <span className="icon">↗</span>
                    </a>
                    <a href="https://facebook.com/anurag91920" target="_blank" rel="noopener noreferrer" className="footer-btn">
                        Facebook
                        <span className="icon">↗</span>
                    </a>
                    <a href="https://wa.me/qr/QAZWIFMSZYN2N1" target="_blank" rel="noopener noreferrer" className="footer-btn">
                        WhatsApp
                        <span className="icon">↗</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
